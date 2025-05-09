import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckCircleIcon, BarChart2Icon, TruckIcon, UsersIcon } from 'lucide-react';
import Button from '../components/UI/Button';
const HomePage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Delivering High Performance Work Systems{' '}
              <span className="text-amber-400">Everyday</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Yeuclidean Hill Management provides expert consulting services to
              optimize your business operations and drive sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button variant="secondary" size="large">
                  Our Services <ArrowRightIcon size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive consulting solutions to help your business
              thrive in today's competitive environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<TruckIcon size={32} className="text-amber-500" />} title="Aftermarket Automotive" description="Optimize your aftermarket automotive operations with our specialized consulting services." />
            <ServiceCard icon={<BarChart2Icon size={32} className="text-amber-500" />} title="Vehicle Depot Management" description="Streamline your vehicle depot operations with efficient management systems and processes." />
            <ServiceCard icon={<UsersIcon size={32} className="text-amber-500" />} title="Technical Design" description="Expert technical design services to enhance your product development and engineering processes." />
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="primary">
                View All Services <ArrowRightIcon size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Yeuclidean Hill Management?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine industry expertise with innovative solutions to
                deliver exceptional results for our clients. Our approach is
                built on a foundation of integrity, excellence, and
                client-centered service.
              </p>
              <div className="space-y-4">
                <FeatureItem text="Experienced team of industry professionals" />
                <FeatureItem text="Tailored solutions for your specific needs" />
                <FeatureItem text="Proven track record of successful projects" />
                <FeatureItem text="Commitment to delivering measurable results" />
                <FeatureItem text="Ongoing support and partnership" />
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="primary">
                    Learn More About Us{' '}
                    <ArrowRightIcon size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Professional team meeting" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to optimize your operations and drive
            sustainable growth.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="large">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
const ServiceCard = ({
  icon,
  title,
  description
}) => <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <Link to="/services" className="inline-flex items-center mt-4 text-purple-700 font-medium hover:text-purple-900">
      Learn more <ArrowRightIcon size={16} className="ml-1" />
    </Link>
  </div>;
const FeatureItem = ({
  text
}) => <div className="flex items-start">
    <CheckCircleIcon size={22} className="text-amber-500 mr-3 flex-shrink-0 mt-1" />
    <p className="text-gray-700">{text}</p>
  </div>;
export default HomePage;