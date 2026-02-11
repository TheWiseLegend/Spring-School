import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from 'axios';
import { config } from '../config/env';
import { ApiError } from '../types/api';

// Create axios instance for each microservice
const createApiInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor: Add JWT token to all requests
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem('spring_school_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor: Handle errors globally
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      // Handle 401 Unauthorized - clear token and redirect to login
      if (error.response?.status === 401) {
        localStorage.removeItem('spring_school_token');
        // Only redirect if not already on login page
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }

      // Transform error to ApiError type
      const errorData = error.response?.data as { message?: string; errors?: string[] };
      const apiError: ApiError = {
        message: errorData?.message || error.message || 'An error occurred',
        status: error.response?.status,
        statusText: error.response?.statusText,
        errors: errorData?.errors,
      };

      return Promise.reject(apiError);
    }
  );

  return instance;
};

// Export API instances for each microservice
export const authApi = createApiInstance(config.apiUrls.auth);
export const userApi = createApiInstance(config.apiUrls.user);
export const courseApi = createApiInstance(config.apiUrls.course);
export const notificationApi = createApiInstance(config.apiUrls.notification);
