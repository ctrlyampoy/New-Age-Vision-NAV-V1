import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, CheckCircleIcon } from 'lucide-react';
import Button from '../components/UI/Button';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help your business
            thrive
          </p>
        </div>
      </section>
      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or ready to start a project? Contact us using the
                information below or fill out the form, and we'll get back to
                you promptly.
              </p>
              <div className="space-y-6">
                <ContactInfoItem icon={<PhoneIcon size={24} className="text-purple-700" />} title="Phone" content="(555) 123-4567" />
                <ContactInfoItem icon={<MailIcon size={24} className="text-purple-700" />} title="Email" content="info@yeuclideanhill.com" />
                <ContactInfoItem icon={<MapPinIcon size={24} className="text-purple-700" />} title="Office" content="123 Consulting Ave, Business District, 10001" />
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Monday - Friday:</span> 9:00
                    AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Saturday:</span> 10:00 AM -
                    2:00 PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              {submitted ? <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircleIcon size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll get back to
                    you shortly.
                  </p>
                </div> : <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                      Name *
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Name" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                        Email *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Email" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Phone Number" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                      Subject *
                    </label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Subject" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                      Message *
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Message"></textarea>
                  </div>
                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="large" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Our Location
          </h2>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* In a real application, this would be a Google Map or other map integration */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-lg">
                Map would be displayed here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
const ContactInfoItem = ({
  icon,
  title,
  content
}) => <div className="flex items-start">
    <div className="mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>;
export default ContactPage;