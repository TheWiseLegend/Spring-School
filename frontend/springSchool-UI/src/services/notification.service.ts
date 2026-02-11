import { notificationApi } from './api';
import { ContactMessage, Holiday } from '../types/models';

/**
 * Notification Service
 * Handles contact messages, email notifications, and holiday info
 */

// Contact message operations
export const sendContactMessage = async (data: Omit<ContactMessage, 'contactId'>): Promise<ContactMessage> => {
  const response = await notificationApi.post<ContactMessage>('/api/contact', data);
  return response.data;
};

export const getAllMessages = async (): Promise<ContactMessage[]> => {
  const response = await notificationApi.get<ContactMessage[]>('/api/contact/messages');
  return response.data;
};

export const getMessageById = async (id: number): Promise<ContactMessage> => {
  const response = await notificationApi.get<ContactMessage>(`/api/contact/${id}`);
  return response.data;
};

export const updateMessageStatus = async (id: number, status: 'OPEN' | 'CLOSED'): Promise<ContactMessage> => {
  const response = await notificationApi.put<ContactMessage>(`/api/contact/${id}/status`, { status });
  return response.data;
};

export const deleteMessage = async (id: number): Promise<void> => {
  await notificationApi.delete(`/api/contact/${id}`);
};

// Holiday operations
export const getAllHolidays = async (): Promise<Holiday[]> => {
  const response = await notificationApi.get<Holiday[]>('/api/holidays');
  return response.data;
};

export const createHoliday = async (data: Omit<Holiday, 'createdAt' | 'createdBy'>): Promise<Holiday> => {
  const response = await notificationApi.post<Holiday>('/api/holidays', data);
  return response.data;
};

export const deleteHoliday = async (day: string): Promise<void> => {
  await notificationApi.delete(`/api/holidays/${day}`);
};

// Email notification
export const sendEmail = async (to: string, subject: string, body: string): Promise<void> => {
  await notificationApi.post('/api/email/send', { to, subject, body });
};
