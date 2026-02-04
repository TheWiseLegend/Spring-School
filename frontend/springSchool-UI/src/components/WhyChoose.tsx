import { WHY_CHOOSE_ITEMS, WHY_CHOOSE_HEADER } from "../constants";

const WhyChoose: React.FC = () => {
    return (
        <section className="py-20 bg-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        {WHY_CHOOSE_HEADER.subtitle}
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900">
                        {WHY_CHOOSE_HEADER.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {WHY_CHOOSE_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl h-64"
                        >
                            <div
                                className={`absolute inset-0 bg-linear-to-br ${item.bgGradient}`}
                            ></div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                            <div className="relative h-full flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="text-6xl mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`absolute inset-0 ${item.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
