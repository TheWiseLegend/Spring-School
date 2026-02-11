import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

/**
 * Admin Layout
 * Used for admin-only pages (Classes, Students, Course Management, Messages)
 * Can be enhanced with sidebar navigation later
 */
const AdminLayout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Admin navigation breadcrumb can be added here */}
          <div className="mb-6">
            <span className="text-sm text-gray-500 uppercase tracking-wide">Admin Panel</span>
          </div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
