// Generic API response wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
  timestamp?: string;
}

// API error type
export interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
  errors?: string[];
  timestamp?: string;
}

// Pagination types
export interface PaginationParams {
  page?: number;
  size?: number;
  sort?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}
