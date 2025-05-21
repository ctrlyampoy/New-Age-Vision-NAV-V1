import React from 'react';
import { Card, Title, Text } from '@tremor/react';
const Mentorship = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Mentorship Program
          </h1>
          <p className="text-gray-400 mt-1">
            Track mentorship progress and impact
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Active Mentors</Text>
          <Title className="text-primary text-2xl">28</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Mentees</Text>
          <Title className="text-primary text-2xl">84</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Sessions This Month</Text>
          <Title className="text-primary text-2xl">156</Title>
        </Card>
      </div>
      <Card className="bg-secondary border border-gray-800">
        <Title className="text-primary mb-4">Program Overview</Title>
        <div className="space-y-4">
          <Text className="text-gray-400">Content coming soon...</Text>
        </div>
      </Card>
    </div>;
};
export default Mentorship;