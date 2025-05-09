import React from 'react';
import { Link } from 'react-router-dom';
import { TargetIcon, EyeIcon, AwardIcon, TrendingUpIcon, UsersIcon, HeartIcon } from 'lucide-react';
import Button from '../components/UI/Button';
const AboutPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Yeuclidean Hill Management and our commitment to
            delivering high performance work systems
          </p>
        </div>
      </section>
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Company
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Yeuclidean Hill Management is a premier consulting firm
                specializing in optimizing business operations across various
                industries. Founded on the principles of excellence, innovation,
                and client success, we have established ourselves as trusted
                advisors to businesses seeking to enhance their operational
                efficiency and drive sustainable growth.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced consultants brings together diverse
                expertise and industry knowledge to deliver tailored solutions
                that address the unique challenges and opportunities of each
                client. We pride ourselves on our collaborative approach,
                working closely with our clients to ensure that our
                recommendations align with their strategic objectives and
                organizational culture.
              </p>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-amber-500 mr-2">
                  15+
                </span>
                <span className="text-gray-700">
                  Years of industry experience
                </span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Team meeting in modern office" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4 text-purple-700">
                <TargetIcon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to empower businesses to achieve operational
                excellence through innovative solutions, expert guidance, and
                collaborative partnerships. We are committed to delivering high
                performance work systems everyday, enabling our clients to
                maximize efficiency, reduce costs, and drive sustainable growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4 text-amber-500">
                <EyeIcon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                We envision being the premier consulting partner for businesses
                seeking transformative operational improvements. By consistently
                delivering exceptional value and measurable results, we aim to
                set the industry standard for consulting excellence and build
                long-lasting relationships based on trust, integrity, and shared
                success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Yeuclidean Hill
              Management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard icon={<AwardIcon size={32} className="text-purple-700" />} title="Excellence" description="We are committed to delivering the highest quality in everything we do, continuously raising the bar for ourselves and our industry." />
            <ValueCard icon={<UsersIcon size={32} className="text-purple-700" />} title="Collaboration" description="We believe in the power of teamwork, fostering strong partnerships with our clients and within our organization." />
            <ValueCard icon={<TrendingUpIcon size={32} className="text-purple-700" />} title="Innovation" description="We embrace creativity and forward-thinking approaches to solve complex challenges and drive continuous improvement." />
            <ValueCard icon={<HeartIcon size={32} className="text-purple-700" />} title="Integrity" description="We operate with honesty, transparency, and ethical principles in all our interactions and decisions." />
            <ValueCard icon={<TargetIcon size={32} className="text-purple-700" />} title="Client Focus" description="We prioritize understanding our clients' needs and delivering solutions that create lasting value for their businesses." />
            <ValueCard icon={<AwardIcon size={32} className="text-purple-700" />} title="Accountability" description="We take ownership of our work and commitments, ensuring reliable delivery and measurable results." />
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading Yeuclidean Hill
              Management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <TeamMember image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" name="Michael Reynolds" position="Chief Executive Officer" />
            <TeamMember image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" name="Sarah Johnson" position="Chief Operations Officer" />
            <TeamMember image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" name="David Chen" position="Head of Consulting" />
            <TeamMember image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" name="Rebecca Martinez" position="Director of Business Development" />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Contact our team today to discuss how we can help optimize your
              business operations.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="large">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
const ValueCard = ({
  icon,
  title,
  description
}) => <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>;
const TeamMember = ({
  image,
  name,
  position
}) => <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <img src={image} alt={name} className="w-full h-64 object-cover object-center" />
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  </div>;
export default AboutPage;