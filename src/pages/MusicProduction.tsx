import React from 'react';
import { Card, Title, Text } from '@tremor/react';
const MusicProduction = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-accent">Music Production</h1>
          <p className="text-gray-400 mt-1">
            Track production workflows and monitor artist collaborations
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Active Projects</Text>
          <Title className="text-primary text-2xl">24</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Tracks Released</Text>
          <Title className="text-primary text-2xl">156</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Total Streams</Text>
          <Title className="text-primary text-2xl">2.4M</Title>
        </Card>
      </div>
      <Card className="bg-secondary border border-gray-800">
        <Title className="text-primary mb-4">Current Projects</Title>
        <div className="space-y-4">
          <Text className="text-gray-400">Content coming soon...</Text>
        </div>
      </Card>
    </div>;
};
export default MusicProduction;