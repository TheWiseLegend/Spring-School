import { FC } from 'react';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>

      <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-600 text-lg mb-4">
          This page will be implemented when we convert the reference HTML template.
        </p>
        <p className="text-gray-500">
          Expected: Login form with email/password, JWT authentication
        </p>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
