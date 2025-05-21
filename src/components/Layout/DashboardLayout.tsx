import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, MusicIcon, VideoIcon, UsersIcon, SearchIcon, LaptopIcon, GraduationCapIcon, ShoppingBagIcon, MenuIcon, XIcon, BellIcon, UserCircleIcon, BarChart2Icon } from 'lucide-react';
const navigation = [{
  name: 'Home',
  href: '/',
  icon: HomeIcon
}, {
  name: 'Dashboard',
  href: '/dashboard',
  icon: BarChart2Icon
}, {
  name: 'Music Production',
  href: '/music-production',
  icon: MusicIcon
}, {
  name: 'Film Production',
  href: '/film-production',
  icon: VideoIcon
}, {
  name: 'Artist Management',
  href: '/artist-management',
  icon: UsersIcon
}, {
  name: 'Talent Acquisition',
  href: '/talent-acquisition',
  icon: SearchIcon
}, {
  name: 'Technology Labs',
  href: '/technology',
  icon: LaptopIcon
}, {
  name: 'Mentorship',
  href: '/mentorship',
  icon: GraduationCapIcon
}, {
  name: 'Merchandise',
  href: '/merchandise',
  icon: ShoppingBagIcon
}];
const DashboardLayout = ({
  children
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  return <div className="min-h-screen bg-secondary-light">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-secondary transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        {/* Logo Area with Shield Pattern */}
        <div className="h-24 flex items-center justify-center border-b border-gray-800 bg-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-shield-pattern bg-cover bg-center"></div>
          <div className="relative z-10 text-center">
            <span className="text-2xl font-bold text-white block">
              New Age Vision
            </span>
            <span className="text-sm text-shield">Kenya's Creative Hub</span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="mt-6 px-4">
          {navigation.map(item => {
          const isActive = location.pathname === item.href;
          return <Link key={item.name} to={item.href} className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-gray-400 hover:bg-secondary-light hover:text-accent'}`}>
                <item.icon className={`h-5 w-5 mr-3 ${isActive ? 'text-white' : ''}`} />
                <span className="font-medium">{item.name}</span>
              </Link>;
        })}
        </nav>
      </div>
      {/* Main Content */}
      <div className="md:pl-64 flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="h-16 bg-accent flex items-center justify-between px-4 md:px-8">
          <button className="text-white hover:text-shield md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-shield">
              <BellIcon size={24} />
            </button>
            <button className="text-white hover:text-shield">
              <UserCircleIcon size={24} />
            </button>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>;
};
export default DashboardLayout;