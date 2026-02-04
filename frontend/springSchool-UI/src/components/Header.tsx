import { useState } from "react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white shadow-md transition-colors">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="ml-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                        <span className="text-2xl mr-2">🎓</span>
                        <span className="text-xl font-bold text-gray-900">
                            Spring School
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#courses"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Courses
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        <div className="w-6 h-6 flex flex-col justify-around">
                            <span
                                className={`h-0.5 w-6 bg-current transition-all ${
                                    isMenuOpen
                                        ? "rotate-45 translate-y-2.5"
                                        : ""
                                }`}
                            ></span>
                            <span
                                className={`h-0.5 w-6 bg-current transition-all ${
                                    isMenuOpen ? "opacity-0" : ""
                                }`}
                            ></span>
                            <span
                                className={`h-0.5 w-6 bg-current transition-all ${
                                    isMenuOpen
                                        ? "-rotate-45 -translate-y-2.5"
                                        : ""
                                }`}
                            ></span>
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
                    }`}
                >
                    <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                        <a
                            href="#home"
                            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#courses"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Courses
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
