import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { User, LoginRequest, RegisterRequest } from '../types/models';
import { config } from '../config/env';
import * as authService from '../services/auth.service';
import { ApiError } from '../types/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isStudent: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize: Check for existing token and validate it
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem(config.jwt.tokenKey);

      if (token) {
        try {
          // Validate token with backend
          const isValid = await authService.validateToken();

          if (isValid) {
            // Fetch current user data
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
          } else {
            // Token invalid, clear it
            localStorage.removeItem(config.jwt.tokenKey);
          }
        } catch (error) {
          // Error validating token, clear it
          localStorage.removeItem(config.jwt.tokenKey);
          console.error('Token validation failed:', error);
        }
      }

      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const credentials: LoginRequest = { email, password };
      const response = await authService.login(credentials);

      // Store token
      localStorage.setItem(config.jwt.tokenKey, response.token);

      // Set user in state
      setUser(response.user);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Login failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      setLoading(true);
      setError(null);

      const response = await authService.register(data);

      // Store token
      localStorage.setItem(config.jwt.tokenKey, response.token);

      // Set user in state
      setUser(response.user);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Registration failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Clear token from localStorage
    localStorage.removeItem(config.jwt.tokenKey);

    // Clear user from state
    setUser(null);
    setError(null);

    // Redirect to home page
    window.location.href = '/';
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    clearError,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'ADMIN',
    isStudent: user?.role === 'STUDENT',
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
