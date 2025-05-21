import React from 'react';
import { Card, Title, Text } from '@tremor/react';
const TalentAcquisition = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Talent Acquisition
          </h1>
          <p className="text-gray-400 mt-1">
            Discover and recruit emerging artists
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Open Applications</Text>
          <Title className="text-primary text-2xl">126</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Shortlisted</Text>
          <Title className="text-primary text-2xl">18</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Interviews Scheduled</Text>
          <Title className="text-primary text-2xl">12</Title>
        </Card>
      </div>
      <Card className="bg-secondary border border-gray-800">
        <Title className="text-primary mb-4">Talent Pipeline</Title>
        <div className="space-y-4">
          <Text className="text-gray-400">Content coming soon...</Text>
        </div>
      </Card>
    </div>;
};
export default TalentAcquisition;