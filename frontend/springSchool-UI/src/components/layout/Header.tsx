import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { isAuthenticated, user, logout } = useAuth();

    // Helper to determine if link is active
    const isActive = (path: string) => location.pathname === path;

    // Link styling helper
    const getLinkClass = (path: string) => {
        const baseClass = "transition-colors font-medium";
        return isActive(path)
            ? `${baseClass} text-blue-600`
            : `${baseClass} text-gray-700 hover:text-blue-600`;
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-white shadow-md transition-colors">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <span className="text-2xl mr-2">🎓</span>
                        <span className="text-xl font-bold text-gray-900">
                            Spring School
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={getLinkClass("/")}>
                            Home
                        </Link>
                        <Link to="/about" className={getLinkClass("/about")}>
                            About
                        </Link>
                        <Link to="/courses" className={getLinkClass("/courses")}>
                            Courses
                        </Link>
                        <Link to="/contact" className={getLinkClass("/contact")}>
                            Contact
                        </Link>
                        <Link to="/holidays" className={getLinkClass("/holidays")}>
                            Holidays
                        </Link>

                        {/* Auth Links */}
                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className={getLinkClass("/dashboard")}>
                                    Dashboard
                                </Link>
                                <button
                                    onClick={logout}
                                    className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                                >
                                    Logout ({user?.name})
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        <div className="w-6 h-6 flex flex-col justify-around">
                            <span
                                className={`h-0.5 w-6 bg-current transition-all ${
                                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                                }`}
                            ></span>
                            <span
                                className={`h-0.5 w-6 bg-current transition-all ${
                                    isMenuOpen ? "opacity-0" : ""
                                }`}
                            ></span>
                            <span
                                className={`h-0.5 w-6 bg-current transition-all ${
                                    isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                                }`}
                            ></span>
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
                    }`}
                >
                    <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                        <Link to="/" className={getLinkClass("/")} onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/about" className={getLinkClass("/about")} onClick={() => setIsMenuOpen(false)}>
                            About
                        </Link>
                        <Link to="/courses" className={getLinkClass("/courses")} onClick={() => setIsMenuOpen(false)}>
                            Courses
                        </Link>
                        <Link to="/contact" className={getLinkClass("/contact")} onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </Link>
                        <Link to="/holidays" className={getLinkClass("/holidays")} onClick={() => setIsMenuOpen(false)}>
                            Holidays
                        </Link>

                        {/* Mobile Auth Links */}
                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className={getLinkClass("/dashboard")} onClick={() => setIsMenuOpen(false)}>
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium"
                                >
                                    Logout ({user?.name})
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
