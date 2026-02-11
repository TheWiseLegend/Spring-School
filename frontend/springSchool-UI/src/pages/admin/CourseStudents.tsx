import { FC } from 'react';
import { useParams } from 'react-router-dom';

const CourseStudents: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Students in Course #{id}
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-600 text-lg mb-4">
          This page will be implemented when we convert the reference HTML template.
        </p>
        <p className="text-gray-500">
          Expected sections: List of students enrolled in specific course, enrollment management
        </p>
      </div>
    </div>
  );
};

export default CourseStudents;
