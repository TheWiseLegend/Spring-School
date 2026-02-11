import { FC } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Dashboard: FC = () => {
  const { user, isAdmin } = useAuth();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Role: <span className="font-semibold">{user?.role}</span>
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-600 text-lg mb-4">
          This page will be implemented when we convert the reference HTML template.
        </p>
        <p className="text-gray-500">
          Expected sections: {isAdmin ? 'Admin statistics, recent activities, quick actions' : 'Student progress, enrolled courses, upcoming classes'}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
