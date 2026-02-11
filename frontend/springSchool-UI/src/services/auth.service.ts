import { authApi } from './api';
import { LoginRequest, RegisterRequest, AuthResponse, User } from '../types/models';

/**
 * Authentication Service
 * Handles user login, registration, and token validation
 */

export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
  const response = await authApi.post<AuthResponse>('/api/auth/login', credentials);
  return response.data;
};

export const register = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await authApi.post<AuthResponse>('/api/auth/register', data);
  return response.data;
};

export const validateToken = async (): Promise<boolean> => {
  try {
    await authApi.get('/api/auth/validate');
    return true;
  } catch {
    return false;
  }
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await authApi.get<User>('/api/auth/me');
  return response.data;
};

export const logout = (): void => {
  localStorage.removeItem('spring_school_token');
};
