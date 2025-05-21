import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Assuming icon can be any React node (like an SVG or component)
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <div className="text-4xl text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;