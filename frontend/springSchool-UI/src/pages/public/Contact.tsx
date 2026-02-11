import { FC, useState, FormEvent } from 'react';
import InnerBanner from '../../components/common/InnerBanner';
import { sendContactMessage } from '../../services/notification.service';
import type { ContactMessage } from '../../types/models';

/**
 * Contact Page
 * Displays contact form, contact information, and location map
 */
const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNum: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    if (errors.length > 0) setErrors([]);
    if (success) setSuccess(false);
  };

  // Validate form
  const validateForm = (): string[] => {
    const newErrors: string[] = [];

    if (!formData.name.trim()) newErrors.push('Name is required');
    if (!formData.mobileNum.trim()) newErrors.push('Mobile number is required');
    if (!formData.email.trim()) newErrors.push('Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push('Please enter a valid email address');
    }
    if (!formData.subject.trim()) newErrors.push('Subject is required');
    if (!formData.message.trim()) newErrors.push('Message is required');

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors([]);

    try {
      await sendContactMessage(formData as Omit<ContactMessage, 'contactId'>);
      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        mobileNum: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error: any) {
      setErrors([error.message || 'Failed to send message. Please try again.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="Contact Us" />

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-lg mx-auto mb-12 md:mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Get In Touch
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h3>
          </div>

          {/* Contact Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-7/12">
              {/* Error Messages */}
              {errors.length > 0 && (
                <div className="mb-6 space-y-2">
                  {errors.map((error, index) => (
                    <div
                      key={index}
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                      role="alert"
                    >
                      {error}
                    </div>
                  ))}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div
                  className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
                  role="alert"
                >
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Mobile Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobileNum"
                      value={formData.mobileNum}
                      onChange={handleChange}
                      placeholder="Your Mobile Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-5/12">
              <div className="space-y-6">
                {/* School Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-gray-900 mb-2">School Address</h6>
                    <p className="text-gray-600">
                      Spring School, 10001, 5th Avenue, #06 lane street, NY - 10017.
                    </p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-gray-900 mb-2">Call Us</h6>
                    <p className="text-gray-600">
                      <a href="tel:+121673458" className="hover:text-blue-600 transition-colors">
                        +1(21) 673 4587
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-gray-900 mb-2">Email Us</h6>
                    <p className="text-gray-600">
                      <a href="mailto:info@springschool.com" className="hover:text-blue-600 transition-colors">
                        info@springschool.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Customer Support */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-gray-900 mb-2">Customer Support</h6>
                    <p className="text-gray-600">
                      <a href="mailto:support@springschool.com" className="hover:text-blue-600 transition-colors">
                        support@springschool.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830921454!2d-74.11976369744556!3d40.69766374856529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1639587930884!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full"
          title="Spring School Location Map"
        />
      </section>
    </>
  );
};

export default Contact;
