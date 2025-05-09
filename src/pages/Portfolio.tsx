import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const handleFilterChange = filter => {
    setActiveFilter(filter);
  };
  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            across industries
          </p>
        </div>
      </section>
      {/* Portfolio Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <FilterButton label="All Projects" active={activeFilter === 'all'} onClick={() => handleFilterChange('all')} />
            <FilterButton label="Automotive" active={activeFilter === 'automotive'} onClick={() => handleFilterChange('automotive')} />
            <FilterButton label="Depot Management" active={activeFilter === 'depot'} onClick={() => handleFilterChange('depot')} />
            <FilterButton label="Technical Design" active={activeFilter === 'technical'} onClick={() => handleFilterChange('technical')} />
            <FilterButton label="Operations" active={activeFilter === 'operations'} onClick={() => handleFilterChange('operations')} />
          </div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
          </div>
          {filteredProjects.length === 0 && <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </div>}
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <StatItem number="150+" label="Projects Completed" />
            <StatItem number="95%" label="Client Satisfaction" />
            <StatItem number="12+" label="Industries Served" />
            <StatItem number="$50M+" label="Client Savings" />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your business goals with
            our expert consulting services.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="large">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
const FilterButton = ({
  label,
  active,
  onClick
}) => <button onClick={onClick} className={`px-4 py-2 rounded-md transition duration-300 ${active ? 'bg-purple-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
    {label}
  </button>;
const ProjectCard = ({
  project
}) => <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="mb-2">
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-md">
          {getCategoryLabel(project.category)}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{project.client}</span>
        <button className="text-purple-700 hover:text-purple-900 font-medium transition duration-300">
          View Details
        </button>
      </div>
    </div>
  </div>;
const StatItem = ({
  number,
  label
}) => <div>
    <div className="text-4xl font-bold text-amber-400 mb-2">{number}</div>
    <div className="text-lg">{label}</div>
  </div>;
// Helper function to get category label
const getCategoryLabel = category => {
  const labels = {
    automotive: 'Automotive',
    depot: 'Depot Management',
    technical: 'Technical Design',
    operations: 'Operations'
  };
  return labels[category] || category;
};
// Sample project data
const projects = [{
  title: 'Aftermarket Supply Chain Optimization',
  description: 'Streamlined the supply chain operations for a major automotive parts distributor, resulting in 30% cost reduction.',
  image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  client: 'AutoParts Global',
  category: 'automotive'
}, {
  title: 'Fleet Maintenance System Overhaul',
  description: "Redesigned maintenance scheduling and tracking systems for a transportation company's 500+ vehicle fleet.",
  image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  client: 'Metro Transit Authority',
  category: 'depot'
}, {
  title: 'Product Design Process Transformation',
  description: 'Implemented new technical design methodologies that reduced development time by 40% while improving quality.',
  image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  client: 'InnoTech Manufacturing',
  category: 'technical'
}, {
  title: 'Warehouse Operations Efficiency Project',
  description: 'Optimized layout and processes in a 100,000 sq ft distribution center, increasing throughput by 45%.',
  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
  client: 'Global Distribution Co.',
  category: 'operations'
}, {
  title: 'Service Center Customer Experience Redesign',
  description: 'Transformed customer journey at automotive service centers, increasing satisfaction scores by 35%.',
  image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  client: 'Premium Auto Services',
  category: 'automotive'
}, {
  title: 'Vehicle Tracking System Implementation',
  description: "Deployed advanced GPS tracking and analytics for a logistics company's fleet, improving route efficiency by 28%.",
  image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
  client: 'Express Logistics',
  category: 'depot'
}, {
  title: 'Manufacturing Process Reengineering',
  description: 'Redesigned production workflows and implemented lean manufacturing principles, reducing waste by 35%.',
  image: 'https://images.unsplash.com/photo-1533417177250-227597f5b264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  client: 'Precision Industries',
  category: 'operations'
}, {
  title: 'Technical Documentation System Development',
  description: 'Created a comprehensive technical documentation platform that improved knowledge sharing and reduced training time.',
  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  client: 'TechSpec Solutions',
  category: 'technical'
}, {
  title: 'Parts Inventory Management System',
  description: 'Implemented advanced inventory forecasting and management system for automotive parts retailer.',
  image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  client: 'AutoZone Parts',
  category: 'automotive'
}];
export default PortfolioPage;