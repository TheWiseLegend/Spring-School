const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="pt-20 py-20 bg-linear-to-br from-blue-50 to-indigo-100"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="flex items-center justify-between">
                    <div className="flex-1 md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Your Kids Deserve The
                            <span className="block text-blue-600">
                                Best Education
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Active Learning, Expert Teachers & Safe Environment
                        </p>
                        <div className="flex items-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
                                Admission Now
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex md:w-1/2 justify-center relative">
                        <div className="relative">
                            {/* Placeholder for banner image */}
                            <div className="w-96 h-96 bg-linear-to-br from-yellow-200 to-orange-300 rounded-full flex items-center justify-center">
                                <span className="text-6xl">🏫</span>
                            </div>

                            {/* "Back to School" badge */}
                            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg transform rotate-12">
                                <h4 className="text-sm">Back to School</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
