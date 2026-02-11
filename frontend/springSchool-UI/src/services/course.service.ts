import { courseApi } from './api';
import { Course, EazyClass, User } from '../types/models';

/**
 * Course Service
 * Handles course and class management, enrollment
 */

// Course operations
export const getAllCourses = async (): Promise<Course[]> => {
  const response = await courseApi.get<Course[]>('/api/courses');
  return response.data;
};

export const getCourseById = async (id: number): Promise<Course> => {
  const response = await courseApi.get<Course>(`/api/courses/${id}`);
  return response.data;
};

export const createCourse = async (data: Omit<Course, 'courseId'>): Promise<Course> => {
  const response = await courseApi.post<Course>('/api/courses', data);
  return response.data;
};

export const updateCourse = async (id: number, data: Partial<Course>): Promise<Course> => {
  const response = await courseApi.put<Course>(`/api/courses/${id}`, data);
  return response.data;
};

export const deleteCourse = async (id: number): Promise<void> => {
  await courseApi.delete(`/api/courses/${id}`);
};

// Class operations
export const getAllClasses = async (): Promise<EazyClass[]> => {
  const response = await courseApi.get<EazyClass[]>('/api/classes');
  return response.data;
};

export const getClassById = async (id: number): Promise<EazyClass> => {
  const response = await courseApi.get<EazyClass>(`/api/classes/${id}`);
  return response.data;
};

export const createClass = async (data: Omit<EazyClass, 'classId'>): Promise<EazyClass> => {
  const response = await courseApi.post<EazyClass>('/api/classes', data);
  return response.data;
};

export const updateClass = async (id: number, data: Partial<EazyClass>): Promise<EazyClass> => {
  const response = await courseApi.put<EazyClass>(`/api/classes/${id}`, data);
  return response.data;
};

export const deleteClass = async (id: number): Promise<void> => {
  await courseApi.delete(`/api/classes/${id}`);
};

// Enrollment operations
export const enrollInCourse = async (courseId: number): Promise<void> => {
  await courseApi.post(`/api/enrollments/${courseId}`);
};

export const getMyEnrollments = async (): Promise<Course[]> => {
  const response = await courseApi.get<Course[]>('/api/enrollments/my-courses');
  return response.data;
};

export const getCourseStudents = async (courseId: number): Promise<User[]> => {
  const response = await courseApi.get<User[]>(`/api/courses/${courseId}/students`);
  return response.data;
};

export const getClassStudents = async (classId: number): Promise<User[]> => {
  const response = await courseApi.get<User[]>(`/api/classes/${classId}/students`);
  return response.data;
};
