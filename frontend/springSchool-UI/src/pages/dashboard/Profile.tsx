import { FC } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Profile: FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <p className="text-gray-700"><strong>Name:</strong> {user?.name}</p>
          <p className="text-gray-700"><strong>Email:</strong> {user?.email}</p>
          <p className="text-gray-700"><strong>Mobile:</strong> {user?.mobileNumber}</p>
          <p className="text-gray-700"><strong>Role:</strong> {user?.role}</p>
        </div>

        <div className="border-t pt-6">
          <p className="text-gray-600 text-lg mb-4">
            This page will be implemented when we convert the reference HTML template.
          </p>
          <p className="text-gray-500">
            Expected sections: Profile edit form, password change, address management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
