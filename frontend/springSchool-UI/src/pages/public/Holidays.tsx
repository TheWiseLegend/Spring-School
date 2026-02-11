import { FC } from "react";
import InnerBanner from "../../components/common/InnerBanner";
import { FESTIVAL_HOLIDAYS, FEDERAL_HOLIDAYS } from "../../constants";

/**
 * Holidays Page
 * Displays festival and federal holidays in a timeline layout
 */
const Holidays: FC = () => {
    return (
        <>
            {/* Inner Banner */}
            <InnerBanner title="Holidays" />

            {/* Holidays Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-lg mx-auto mb-12 md:mb-16">
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                            School Calendar
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Holidays for This Year
                        </h3>
                    </div>

                    {/* Holidays Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Festival Holidays Column */}
                        <div>
                            {/* Festival Header */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center text-2xl">
                                    ⛄
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900">
                                    Festival Holidays
                                </h4>
                            </div>

                            {/* Festival Timeline */}
                            <div className="space-y-6">
                                {FESTIVAL_HOLIDAYS.map((holiday, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-l-0 last:pb-0"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md" />

                                        {/* Holiday Card */}
                                        <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                            {/* Holiday Reason */}
                                            <h5 className="text-xl font-bold text-gray-900 mb-3">
                                                {holiday.reason}
                                            </h5>

                                            {/* Holiday Date */}
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <svg
                                                    className="w-5 h-5 text-blue-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <span className="font-semibold">
                                                    {holiday.day}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Federal Holidays Column */}
                        <div>
                            {/* Federal Header */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-2xl">
                                    🚩
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900">
                                    Federal Holidays
                                </h4>
                            </div>

                            {/* Federal Timeline */}
                            <div className="space-y-6">
                                {FEDERAL_HOLIDAYS.map((holiday, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-8 pb-6 border-l-2 border-green-200 last:border-l-0 last:pb-0"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-md" />

                                        {/* Holiday Card */}
                                        <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                            {/* Holiday Reason */}
                                            <h5 className="text-xl font-bold text-gray-900 mb-3">
                                                {holiday.reason}
                                            </h5>

                                            {/* Holiday Date */}
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <svg
                                                    className="w-5 h-5 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <span className="font-semibold">
                                                    {holiday.day}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Holidays;
