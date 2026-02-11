# Foundation Setup Plan - Spring School Frontend

## Goal
Transform the existing single-page React app into a multi-page application with routing, API integration, and authentication - ready for converting 18 HTML reference templates.

## Project Scope
- **15 pages to build:** 5 public + 2 auth + 3 student + 5 admin
- **3 shared components:** Header, Footer, Error
- **4 backend microservices:** auth:8080, user:8082, course:8083, notification:8084
- **Tech stack:** React 19 + TypeScript + Tailwind v4 + Vite + React Router + Axios

---

## Implementation Steps

### STEP 1: Install Dependencies
**Command:**
```bash
cd frontend/springSchool-UI
npm install react-router-dom axios
npm install -D @types/node
```

**Packages added:**
- `react-router-dom` - Client-side routing
- `axios` - HTTP client with interceptors
- `@types/node` - TypeScript support for process.env

---

### STEP 2: Create Environment Configuration

**File: `frontend/springSchool-UI/.env`**
```env
# Microservice API URLs
VITE_AUTH_SERVICE_URL=http://localhost:8080
VITE_USER_SERVICE_URL=http://localhost:8082
VITE_COURSE_SERVICE_URL=http://localhost:8083
VITE_NOTIFICATION_SERVICE_URL=http://localhost:8084

# App config
VITE_APP_NAME=Spring School Management
VITE_JWT_TOKEN_KEY=spring_school_token
```

**File: `frontend/springSchool-UI/src/config/env.ts`**
```typescript
export const config = {
  apiUrls: {
    auth: import.meta.env.VITE_AUTH_SERVICE_URL || 'http://localhost:8080',
    user: import.meta.env.VITE_USER_SERVICE_URL || 'http://localhost:8082',
    course: import.meta.env.VITE_COURSE_SERVICE_URL || 'http://localhost:8083',
    notification: import.meta.env.VITE_NOTIFICATION_SERVICE_URL || 'http://localhost:8084',
  },
  jwt: {
    tokenKey: import.meta.env.VITE_JWT_TOKEN_KEY || 'spring_school_token',
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Spring School',
  },
} as const;
```

---

### STEP 3: Create Folder Structure

**New directories to create:**
```
src/
├── config/              # Environment configuration
├── components/
│   ├── common/          # Reusable UI (Button, Card, Modal)
│   └── layout/          # Layout components (Header, Footer, Banner)
├── pages/
│   ├── public/          # Home, About, Contact, Courses, Holidays
│   ├── auth/            # Login, Register
│   ├── dashboard/       # Dashboard, Profile
│   ├── student/         # MyEnrollments
│   └── admin/           # Classes, Students, CourseManagement, CourseStudents, Messages
├── layouts/             # Page layouts (PublicLayout, StudentLayout, AdminLayout)
├── context/             # React Context (AuthContext)
├── services/            # API service layer
├── hooks/               # Custom hooks (useAuth)
├── types/               # TypeScript interfaces (already exists, will extend)
└── utils/               # Helper functions
```

**Migration:**
- Move `src/components/Header.tsx` → `src/components/layout/Header.tsx`
- Move `src/components/Footer.tsx` → `src/components/layout/Footer.tsx`
- Combine home sections into `src/pages/public/Home.tsx`

---

### STEP 4: Define TypeScript Interfaces

**File: `src/types/models.ts`**
Match backend DTOs exactly:
```typescript
export interface Address {
  addressId?: number;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface User {
  personId: number;
  name: string;
  email: string;
  mobileNumber: string;
  password?: string;
  role: 'STUDENT' | 'ADMIN';
  address?: Address;
  createdAt?: string;
  createdBy?: string;
}

export interface Course {
  courseId: number;
  name: string;
  fees: string;
  description?: string;
  createdAt?: string;
  createdBy?: string;
}

export interface EazyClass {
  classId: number;
  name: string;
  courses?: Course[];
  students?: User[];
}

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
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
```

**File: `src/types/api.ts`**
```typescript
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface ApiError {
  message: string;
  status?: number;
  errors?: string[];
}
```

---

### STEP 5: Create API Service Layer

**File: `src/services/api.ts`**
Base axios configuration with interceptors:
```typescript
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { config } from '../config/env';

const createApiInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor: Add JWT token
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem('spring_school_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor: Handle 401 globally
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('spring_school_token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const authApi = createApiInstance(config.apiUrls.auth);
export const userApi = createApiInstance(config.apiUrls.user);
export const courseApi = createApiInstance(config.apiUrls.course);
export const notificationApi = createApiInstance(config.apiUrls.notification);
```

**File: `src/services/auth.service.ts`**
```typescript
import { authApi } from './api';
import { LoginRequest, RegisterRequest, AuthResponse } from '../types/models';

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await authApi.post<AuthResponse>('/api/auth/login', data);
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
```

**Files to create similarly:**
- `src/services/user.service.ts` - User CRUD operations
- `src/services/course.service.ts` - Course operations, enrollment
- `src/services/notification.service.ts` - Send contact messages

---

### STEP 6: Create Authentication Context

**File: `src/context/AuthContext.tsx`**
```typescript
import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { User, LoginRequest, RegisterRequest } from '../types/models';
import { config } from '../config/env';
import * as authService from '../services/auth.service';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem(config.jwt.tokenKey);
      if (token) {
        const isValid = await authService.validateToken();
        if (!isValid) {
          localStorage.removeItem(config.jwt.tokenKey);
        }
        // TODO: Fetch user data from /me endpoint when available
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const { token, user } = await authService.login({ email, password });
    localStorage.setItem(config.jwt.tokenKey, token);
    setUser(user);
  };

  const register = async (data: RegisterRequest) => {
    const { token, user } = await authService.register(data);
    localStorage.setItem(config.jwt.tokenKey, token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem(config.jwt.tokenKey);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'ADMIN',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
```

**File: `src/context/index.ts`**
```typescript
export * from './AuthContext';
```

**File: `src/hooks/useAuth.ts`**
```typescript
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

---

### STEP 7: Create Layout Components

**File: `src/layouts/PublicLayout.tsx`**
```typescript
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PublicLayout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
```

**File: `src/layouts/AuthLayout.tsx`**
```typescript
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
```

**File: `src/layouts/StudentLayout.tsx`**
```typescript
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const StudentLayout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header authenticated />
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default StudentLayout;
```

**File: `src/layouts/AdminLayout.tsx`**
Similar to StudentLayout but with admin-specific navigation.

---

### STEP 8: Create Route Protection

**File: `src/components/common/ProtectedRoute.tsx`**
```typescript
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface Props {
  children: ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: FC<Props> = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
```

---

### STEP 9: Setup Routing

**File: `src/App.tsx`** (Complete rewrite)
```typescript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import StudentLayout from './layouts/StudentLayout';
import AdminLayout from './layouts/AdminLayout';

// Public pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import Courses from './pages/public/Courses';
import Holidays from './pages/public/Holidays';

// Auth pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Dashboard pages
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile';

// Student pages
import MyEnrollments from './pages/student/MyEnrollments';

// Admin pages
import Classes from './pages/admin/Classes';
import Students from './pages/admin/Students';
import CourseManagement from './pages/admin/CourseManagement';
import CourseStudents from './pages/admin/CourseStudents';
import Messages from './pages/admin/Messages';

// Error page
import ErrorPage from './pages/ErrorPage';

// Route guard
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/holidays" element={<Holidays />} />
          </Route>

          {/* Auth routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Protected student routes */}
          <Route
            element={
              <ProtectedRoute>
                <StudentLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-enrollments" element={<MyEnrollments />} />
          </Route>

          {/* Admin-only routes */}
          <Route
            element={
              <ProtectedRoute requireAdmin>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/admin/classes" element={<Classes />} />
            <Route path="/admin/students" element={<Students />} />
            <Route path="/admin/courses" element={<CourseManagement />} />
            <Route path="/admin/courses/:id/students" element={<CourseStudents />} />
            <Route path="/admin/messages" element={<Messages />} />
          </Route>

          {/* Error fallback */}
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
```

---

### STEP 10: Create Placeholder Pages

Create all 15 page components as placeholders:

**Template for placeholder pages:**
```typescript
import { FC } from 'react';

const PageName: FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Page Name</h1>
      <p className="mt-4 text-gray-600">
        This page will be implemented when we convert the reference HTML template.
      </p>
    </div>
  );
};

export default PageName;
```

**Pages to create:**
1. `src/pages/public/Home.tsx` - Refactor from existing components
2. `src/pages/public/About.tsx` - Placeholder
3. `src/pages/public/Contact.tsx` - Placeholder
4. `src/pages/public/Courses.tsx` - Placeholder
5. `src/pages/public/Holidays.tsx` - Placeholder
6. `src/pages/auth/Login.tsx` - Placeholder
7. `src/pages/auth/Register.tsx` - Placeholder
8. `src/pages/dashboard/Dashboard.tsx` - Placeholder
9. `src/pages/dashboard/Profile.tsx` - Placeholder
10. `src/pages/student/MyEnrollments.tsx` - Placeholder
11. `src/pages/admin/Classes.tsx` - Placeholder
12. `src/pages/admin/Students.tsx` - Placeholder
13. `src/pages/admin/CourseManagement.tsx` - Placeholder
14. `src/pages/admin/CourseStudents.tsx` - Placeholder
15. `src/pages/admin/Messages.tsx` - Placeholder
16. `src/pages/ErrorPage.tsx` - Placeholder

---

### STEP 11: Refactor Existing Components

**Move components:**
```bash
# Move layout components
src/components/Header.tsx → src/components/layout/Header.tsx
src/components/Footer.tsx → src/components/layout/Footer.tsx

# Update imports in Header/Footer to remove Bootstrap classes (already using Tailwind)
```

**Create Home page from sections:**
Combine `Hero.tsx`, `Features.tsx`, `About.tsx`, `WhyChoose.tsx`, `Statistics.tsx`, `Testimonials.tsx`, `Courses.tsx`, `CallToAction.tsx` into a single `src/pages/public/Home.tsx` file.

---

### STEP 12: Update main.tsx

**File: `src/main.tsx`**
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

## Files Summary

### New Files (35 total)
**Config:**
1. `.env`
2. `src/config/env.ts`

**Types:**
3. `src/types/models.ts`
4. `src/types/api.ts`

**Services:**
5. `src/services/api.ts`
6. `src/services/auth.service.ts`
7. `src/services/user.service.ts`
8. `src/services/course.service.ts`
9. `src/services/notification.service.ts`

**Context & Hooks:**
10. `src/context/AuthContext.tsx`
11. `src/context/index.ts`
12. `src/hooks/useAuth.ts`

**Layouts:**
13. `src/layouts/PublicLayout.tsx`
14. `src/layouts/AuthLayout.tsx`
15. `src/layouts/StudentLayout.tsx`
16. `src/layouts/AdminLayout.tsx`

**Components:**
17. `src/components/common/ProtectedRoute.tsx`

**Pages (16):**
18-33. All 16 page components listed above

**Moved files:**
34. `src/components/layout/Header.tsx` (moved from `src/components/`)
35. `src/components/layout/Footer.tsx` (moved from `src/components/`)

### Modified Files
1. `src/App.tsx` - Complete routing rewrite
2. `src/main.tsx` - Minor updates
3. `package.json` - Add dependencies

### Deleted Files (after refactoring)
- Old component files that get merged into Home.tsx

---

## Testing Plan

After execution:
1. ✅ Run `npm run dev` - App starts without errors
2. ✅ Navigate to all routes manually - No 404s
3. ✅ Run `npm run build` - TypeScript compiles
4. ✅ Test protected routes - Redirects to login
5. ✅ Check console - No warnings/errors

---

## Success Criteria

- [x] All dependencies installed
- [x] Folder structure reorganized
- [x] TypeScript interfaces defined
- [x] API service layer configured
- [x] Authentication context working
- [x] All 15+ routes accessible
- [x] Protected routes redirect correctly
- [x] No TypeScript errors
- [x] App compiles and runs

---

## Next Steps (After Foundation)

Once foundation is complete:
1. Start Phase 1: Convert public pages (About, Contact, Courses, Holidays)
2. Implement authentication pages (Login, Register)
3. Build dashboard and student pages
4. Implement admin pages

Each page conversion will follow:
1. Receive reference HTML file
2. Analyze structure and components
3. Recreate in React + TypeScript + Tailwind
4. Integrate with backend APIs
5. Test and verify
