import React from 'react';
import { Card, Title, Text } from '@tremor/react';
const Merchandise = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">Merchandise</h1>
          <p className="text-gray-400 mt-1">
            Track merchandise sales and inventory
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Total Sales</Text>
          <Title className="text-primary text-2xl">$324K</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Active Products</Text>
          <Title className="text-primary text-2xl">86</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Orders This Month</Text>
          <Title className="text-primary text-2xl">1,248</Title>
        </Card>
      </div>
      <Card className="bg-secondary border border-gray-800">
        <Title className="text-primary mb-4">Sales Overview</Title>
        <div className="space-y-4">
          <Text className="text-gray-400">Content coming soon...</Text>
        </div>
      </Card>
    </div>;
};
export default Merchandise;