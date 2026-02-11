import { userApi } from './api';
import { User } from '../types/models';

/**
 * User Service
 * Handles user CRUD operations and profile management
 */

export const getAllUsers = async (): Promise<User[]> => {
  const response = await userApi.get<User[]>('/api/users');
  return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await userApi.get<User>(`/api/users/${id}`);
  return response.data;
};

export const updateUser = async (id: number, data: Partial<User>): Promise<User> => {
  const response = await userApi.put<User>(`/api/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await userApi.delete(`/api/users/${id}`);
};

export const getUsersByRole = async (role: 'STUDENT' | 'ADMIN'): Promise<User[]> => {
  const response = await userApi.get<User[]>(`/api/users/role/${role}`);
  return response.data;
};

export const updateProfile = async (data: Partial<User>): Promise<User> => {
  const response = await userApi.put<User>('/api/users/profile', data);
  return response.data;
};
