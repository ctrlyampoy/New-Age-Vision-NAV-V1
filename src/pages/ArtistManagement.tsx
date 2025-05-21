import React from 'react';
import { Card, Title, Text } from '@tremor/react';
const ArtistManagement = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">Artist Management</h1>
          <p className="text-gray-400 mt-1">
            Monitor artist performance and manage contracts
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Active Artists</Text>
          <Title className="text-primary text-2xl">42</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Total Revenue</Text>
          <Title className="text-primary text-2xl">$850K</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Social Reach</Text>
          <Title className="text-primary text-2xl">5.2M</Title>
        </Card>
      </div>
      <Card className="bg-secondary border border-gray-800">
        <Title className="text-primary mb-4">Artist Portfolio</Title>
        <div className="space-y-4">
          <Text className="text-gray-400">Content coming soon...</Text>
        </div>
      </Card>
    </div>;
};
export default ArtistManagement;