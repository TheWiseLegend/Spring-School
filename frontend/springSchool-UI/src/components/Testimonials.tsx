import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../constants";

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="testimonials"
            className="py-20 bg-white transition-colors duration-300"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * 100
                                }%)`,
                            }}
                        >
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-full shrink-0 px-8"
                                >
                                    <div className="bg-gray-50 p-12 rounded-2xl">
                                        <div className="text-6xl mb-6">
                                            {testimonial.avatar}
                                        </div>
                                        <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="text-lg font-semibold text-gray-900">
                                            - {testimonial.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {TESTIMONIALS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentIndex
                                        ? "bg-blue-600"
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
