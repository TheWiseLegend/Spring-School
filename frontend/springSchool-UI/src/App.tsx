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

// Route protection
import ProtectedRoute from './components/common/ProtectedRoute';

/**
 * Main App Component
 * Sets up routing and authentication context
 */
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

          {/* Error routes */}
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
