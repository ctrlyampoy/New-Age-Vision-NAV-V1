import React from 'react';
import { Card, Title, Text } from '@tremor/react';
const FilmProduction = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">Film Production</h1>
          <p className="text-gray-400 mt-1">
            Manage film projects and track production timelines
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Active Productions</Text>
          <Title className="text-primary text-2xl">8</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Projects Completed</Text>
          <Title className="text-primary text-2xl">32</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Total Budget</Text>
          <Title className="text-primary text-2xl">$2.1M</Title>
        </Card>
      </div>
      <Card className="bg-secondary border border-gray-800">
        <Title className="text-primary mb-4">Production Timeline</Title>
        <div className="space-y-4">
          <Text className="text-gray-400">Content coming soon...</Text>
        </div>
      </Card>
    </div>;
};
export default FilmProduction;