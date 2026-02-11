import { FC } from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface InnerBannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * InnerBanner Component
 * Displays page title and breadcrumb navigation
 * Used on all internal pages (About, Contact, Courses, etc.)
 */
const InnerBanner: FC<InnerBannerProps> = ({ title, breadcrumbs = [] }) => {
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    { label: title },
  ];

  const items = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;

  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-20">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <h4 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          {title}
        </h4>

        {/* Breadcrumbs */}
        <nav className="flex justify-center items-center space-x-2 text-white">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {item.path ? (
                <Link
                  to={item.path}
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-blue-200 font-medium">{item.label}</span>
              )}

              {index < items.length - 1 && (
                <svg
                  className="w-4 h-4 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default InnerBanner;
