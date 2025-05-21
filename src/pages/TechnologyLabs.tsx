import React from 'react';
import { Card, Title, Text } from '@tremor/react';
const TechnologyLabs = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">Technology Labs</h1>
          <p className="text-gray-400 mt-1">
            Research and development of creative technologies
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Active Projects</Text>
          <Title className="text-primary text-2xl">15</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Tech Stack</Text>
          <Title className="text-primary text-2xl">8</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Team Members</Text>
          <Title className="text-primary text-2xl">24</Title>
        </Card>
      </div>
      <Card className="bg-secondary border border-gray-800">
        <Title className="text-primary mb-4">Project Status</Title>
        <div className="space-y-4">
          <Text className="text-gray-400">Content coming soon...</Text>
        </div>
      </Card>
    </div>;
};
export default TechnologyLabs;