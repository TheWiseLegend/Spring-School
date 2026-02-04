const CallToAction: React.FC = () => {
    return (
        <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Call To Enroll Your Child
                        </h2>
                        <p className="text-xl text-blue-100">
                            Begin the change today!
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        {/* Phone Number */}
                        <div className="flex items-center text-white">
                            <span className="text-2xl mr-3">📞</span>
                            <a
                                href="tel:+1-23-673-458-1111"
                                className="text-xl font-semibold hover:text-blue-200 transition-colors"
                            >
                                +1(23) 673 458 1111
                            </a>
                        </div>

                        {/* Join Button */}
                        <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Join for free
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
