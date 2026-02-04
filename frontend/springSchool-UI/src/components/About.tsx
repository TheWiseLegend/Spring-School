import { ABOUT_BENEFITS, ABOUT_CONTACT, ABOUT_CONTENT } from "../constants";

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="py-20 bg-gray-50 transition-colors duration-300"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative">
                            {/* Main image placeholder */}
                            <div className="w-full h-96 bg-linear-to-br from-blue-200 to-purple-300 rounded-2xl flex items-center justify-center">
                                <span className="text-6xl">📖</span>
                            </div>

                            {/* Info box overlay */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-200 max-w-xs">
                                <h6 className="font-bold text-gray-900 mb-2">
                                    {ABOUT_CONTACT.title}
                                </h6>
                                <p className="text-sm text-gray-600 mb-3">
                                    {ABOUT_CONTACT.description}
                                </p>
                                <a
                                    href={`tel:${ABOUT_CONTACT.phone}`}
                                    className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                                >
                                    <span className="mr-2">📞</span>{" "}
                                    {ABOUT_CONTACT.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            {ABOUT_CONTENT.title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {ABOUT_CONTENT.description}
                        </p>

                        <ul className="space-y-4 mb-8">
                            {ABOUT_BENEFITS.map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-green-500 mr-3 text-xl">
                                        ✓
                                    </span>
                                    <span className="text-gray-700">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                            {ABOUT_CONTENT.ctaButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
