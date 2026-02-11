// Address entity
export interface Address {
  addressId?: number;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
}

// User/Person entity
export interface User {
  personId: number;
  name: string;
  email: string;
  mobileNumber: string;
  password?: string; // Only for registration
  role: 'STUDENT' | 'ADMIN';
  address?: Address;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
}

// Course entity
export interface Course {
  courseId: number;
  name: string;
  fees: string;
  description?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
}

// Class entity
export interface EazyClass {
  classId: number;
  name: string;
  courses?: Course[];
  students?: User[];
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
}

// Contact message entity
export interface ContactMessage {
  contactId?: number;
  name: string;
  email: string;
  mobileNum: string;
  subject: string;
  message: string;
  status?: 'OPEN' | 'CLOSED';
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
}

// Holiday entity
export interface Holiday {
  day: string;
  reason: string;
  type: 'FESTIVAL' | 'FEDERAL';
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
}

// Auth-related types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword?: string; // For frontend validation
  address?: Partial<Address>;
}

export interface AuthResponse {
  token: string;
  user: User;
  message?: string;
}
