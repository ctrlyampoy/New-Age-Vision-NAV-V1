import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, BarChart2Icon, UsersIcon, PenToolIcon, SettingsIcon, LayoutIcon, CheckIcon } from 'lucide-react';
import Button from '../components/UI/Button';
const ServicesPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Consulting Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive solutions designed to optimize your operations and
            drive sustainable growth
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<TruckIcon size={40} />} title="Aftermarket Automotive" description="Optimize your aftermarket automotive operations with our specialized consulting services tailored to improve efficiency, reduce costs, and enhance customer satisfaction." features={['Supply chain optimization', 'Inventory management', 'Service center operations', 'Customer experience enhancement', 'Market trend analysis']} />
            <ServiceCard icon={<BarChart2Icon size={40} />} title="Vehicle Depot Management" description="Streamline your vehicle depot operations with our comprehensive management systems and processes designed to maximize efficiency and minimize downtime." features={['Fleet optimization', 'Maintenance scheduling', 'Resource allocation', 'Operational efficiency', 'Cost reduction strategies']} />
            <ServiceCard icon={<PenToolIcon size={40} />} title="Technical Design" description="Expert technical design services to enhance your product development and engineering processes, ensuring innovation and quality in every project." features={['Product development', 'Engineering solutions', 'Design optimization', 'Technical documentation', 'Quality assurance']} />
            <ServiceCard icon={<UsersIcon size={40} />} title="Work System Analysis" description="Comprehensive analysis of your work systems to identify bottlenecks, improve workflows, and enhance overall productivity across your organization." features={['Process mapping', 'Workflow optimization', 'Productivity enhancement', 'Team structure analysis', 'Performance metrics']} />
            <ServiceCard icon={<SettingsIcon size={40} />} title="Operational Excellence" description="Achieve operational excellence through our tailored consulting services focused on continuous improvement, lean methodologies, and best practices." features={['Lean implementation', 'Process standardization', 'Quality management', 'Continuous improvement', 'Performance benchmarking']} />
            <ServiceCard icon={<LayoutIcon size={40} />} title="Strategic Planning" description="Develop robust strategic plans that align with your business goals, market conditions, and competitive landscape to drive long-term success." features={['Market analysis', 'Competitive positioning', 'Growth strategies', 'Risk assessment', 'Implementation roadmaps']} />
          </div>
        </div>
      </section>
      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Consulting Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured methodology to ensure we deliver optimal
              results for every client engagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ApproachCard number="01" title="Discovery" description="We begin by thoroughly understanding your business, challenges, and objectives through in-depth consultation." />
            <ApproachCard number="02" title="Analysis" description="Our experts analyze your current operations, identify opportunities for improvement, and develop tailored solutions." />
            <ApproachCard number="03" title="Implementation" description="We work alongside your team to implement the recommended solutions, ensuring smooth adoption and minimal disruption." />
            <ApproachCard number="04" title="Optimization" description="We continuously monitor results, make necessary adjustments, and ensure long-term success and sustainability." />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Elevate Your Business Performance?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to discuss how our consulting services can help
              you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="large">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
const ServiceCard = ({
  icon,
  title,
  description,
  features
}) => <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col h-full">
    <div className="mb-4 text-purple-700">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mt-auto">
      <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
      <ul className="space-y-2">
        {features.map((feature, index) => <li key={index} className="flex items-start">
            <CheckIcon size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
            <span className="text-gray-600">{feature}</span>
          </li>)}
      </ul>
    </div>
  </div>;
const ApproachCard = ({
  number,
  title,
  description
}) => <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <div className="text-3xl font-bold text-amber-500 mb-3">{number}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>;
export default ServicesPage;