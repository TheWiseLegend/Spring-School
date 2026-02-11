import { FC } from 'react';
import { Link } from 'react-router-dom';
import InnerBanner from '../../components/common/InnerBanner';
import { TEACHERS } from '../../constants';

/**
 * About Page
 * Displays school information, teacher team, and environment details
 */
const About: FC = () => {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="About Us" />

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white" id="team">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-lg mx-auto mb-12 md:mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Our Team
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet our Teachers
            </h3>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TEACHERS.map((teacher, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {/* Teacher Image/Avatar */}
                  <div className="text-6xl md:text-7xl mb-4">
                    {teacher.image}
                  </div>

                  {/* Teacher Name */}
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {teacher.name}
                  </h4>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={teacher.social.facebook}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href={teacher.social.twitter}
                      className="text-gray-600 hover:text-blue-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a
                      href={teacher.social.linkedin}
                      className="text-gray-600 hover:text-blue-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 text-center">
                <div className="text-8xl mb-4">🏫</div>
                <p className="text-gray-600 font-medium">School Environment</p>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Our Environment
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Clean & Safe Environment
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Spring School maintains the safest environment for both teachers and students
                by sanitizing the schools daily. Enough security is in place with the help of
                dedicated security team and cameras inside the campus.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center"
                >
                  Contact Us
                </Link>
                <Link
                  to="/courses"
                  className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold inline-flex items-center justify-center gap-2"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
