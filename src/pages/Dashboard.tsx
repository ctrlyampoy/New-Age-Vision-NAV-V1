import React from 'react';
import { Card, Title, Text } from '@tremor/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{
  month: 'Jan',
  artists: 65,
  revenue: 4000
}, {
  month: 'Feb',
  artists: 78,
  revenue: 4500
}, {
  month: 'Mar',
  artists: 90,
  revenue: 5200
}, {
  month: 'Apr',
  artists: 81,
  revenue: 4800
}, {
  month: 'May',
  artists: 95,
  revenue: 6000
}, {
  month: 'Jun',
  artists: 103,
  revenue: 6700
}];
const Dashboard = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-accent">Welcome Back</h1>
          <p className="text-gray-400 mt-1">
            Here's what's happening with your projects today.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Total Artists</Text>
          <Title className="text-primary text-2xl">1,234</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Active Projects</Text>
          <Title className="text-accent text-2xl">56</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Monthly Revenue</Text>
          <Title className="text-shield text-2xl">$125,000</Title>
        </Card>
        <Card className="bg-secondary border border-gray-800">
          <Text className="text-gray-400">Mentorship Hours</Text>
          <Title className="text-primary text-2xl">892</Title>
        </Card>
      </div>
      <Card className="bg-secondary border border-gray-800">
        <Title className="text-accent mb-4">Performance Overview</Title>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip contentStyle={{
              backgroundColor: '#121212',
              border: '1px solid #333'
            }} />
              <Bar dataKey="artists" fill="#008751" /> {/* Kenyan Green */}
              <Bar dataKey="revenue" fill="#BE0027" /> {/* Kenyan Red */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>;
};
export default Dashboard;