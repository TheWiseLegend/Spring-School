import { COURSES } from "../constants";

const Courses: React.FC = () => {
    return (
        <section
            id="courses"
            className="py-20 bg-linear-to-br from-blue-50 to-indigo-100 transition-colors duration-300"
        >
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        Best Courses
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Wide variety of Courses for your Child
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {COURSES.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            {/* Course Image */}
                            <div className="relative h-48 bg-linear-to-br from-gray-100 to-gray-200">
                                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                    {course.image}
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${course.categoryColor}`}
                                    >
                                        {course.category}
                                    </span>
                                </div>
                            </div>

                            {/* Course Content */}
                            <div className="p-6">
                                {/* Course Stats */}
                                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <span className="mr-1">📚</span>
                                        {course.lessons} Lessons
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-1">⭐</span>
                                        {course.rating}
                                    </div>
                                </div>

                                {/* Course Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>

                                {/* Course Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {course.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Browse More Button */}
                <div className="text-center">
                    <button className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-all duration-300 transform hover:scale-105">
                        Browse more courses
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;
