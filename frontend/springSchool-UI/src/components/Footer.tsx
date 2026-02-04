import {
    CONTACT_INFO,
    QUICK_LINKS,
    EXPLORE_LINKS,
    FOOTER_COPYRIGHT,
    NEWSLETTER_TEXT,
} from "../constants";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                        <div className="space-y-3">
                            <p className="text-gray-300 leading-relaxed">
                                Address: {CONTACT_INFO.address}
                            </p>
                            <p className="text-gray-300">
                                Phone Number:
                                <a
                                    href={`tel:${CONTACT_INFO.phone}`}
                                    className="text-blue-400 hover:text-blue-300 ml-1"
                                >
                                    {CONTACT_INFO.phone}
                                </a>
                            </p>
                            <p className="text-gray-300">
                                Email:
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="text-blue-400 hover:text-blue-300 ml-1"
                                >
                                    {CONTACT_INFO.email}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Explore</h3>
                        <ul className="space-y-3">
                            {EXPLORE_LINKS.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            {NEWSLETTER_TEXT.title}
                        </h3>
                        <form className="space-y-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder={NEWSLETTER_TEXT.placeholder}
                                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors"
                                >
                                    <span className="text-xl">✈️</span>
                                </button>
                            </div>
                            <p className="text-sm text-gray-300">
                                {NEWSLETTER_TEXT.description}
                            </p>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-300">
                        © {FOOTER_COPYRIGHT.year} {FOOTER_COPYRIGHT.companyName}
                        . All rights reserved. Design by{" "}
                        <a
                            href={FOOTER_COPYRIGHT.designerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            {FOOTER_COPYRIGHT.designerName}
                        </a>
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                title="Go to top"
            >
                <span className="text-xl">⬆️</span>
            </button>
        </footer>
    );
};

export default Footer;
