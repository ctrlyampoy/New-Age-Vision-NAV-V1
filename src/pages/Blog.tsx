import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, TagIcon, CalendarIcon, UserIcon } from 'lucide-react';
import Button from '../components/UI/Button';
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Filter blog posts based on search term
  const filteredPosts = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || post.category.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Insights</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in
            consulting and operational excellence
          </p>
        </div>
      </section>
      {/* Search and Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input type="text" placeholder="Search articles..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <SearchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <CategoryTag label="All" />
              <CategoryTag label="Automotive" />
              <CategoryTag label="Fleet Management" />
              <CategoryTag label="Technical Design" />
              <CategoryTag label="Operations" />
              <CategoryTag label="Leadership" />
            </div>
          </div>
        </div>
      </section>
      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => <BlogPostCard key={index} post={post} />)}
          </div>
          {filteredPosts.length === 0 && <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your search.
              </p>
              <button onClick={() => setSearchTerm('')} className="mt-4 text-purple-700 hover:text-purple-900 font-medium">
                Clear search
              </button>
            </div>}
          {/* Pagination */}
          {filteredPosts.length > 0 && <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" className="px-4 py-2">
                  Previous
                </Button>
                <button className="px-4 py-2 bg-purple-700 text-white rounded-md">
                  1
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">
                  2
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">
                  3
                </button>
                <Button variant="outline" className="px-4 py-2">
                  Next
                </Button>
              </div>
            </div>}
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg mb-6">
              Get the latest insights and trends delivered straight to your
              inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800" />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our guides, whitepapers, and case studies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard title="The Ultimate Guide to Fleet Management Optimization" type="Guide" image="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />
            <ResourceCard title="Transforming Automotive Aftermarket Operations" type="Whitepaper" image="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <ResourceCard title="Technical Design Best Practices for Manufacturing" type="Case Study" image="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          </div>
        </div>
      </section>
    </div>;
};
const BlogPostCard = ({
  post
}) => <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col h-full">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <div className="mb-2 flex items-center">
        <TagIcon size={16} className="text-amber-500 mr-1" />
        <span className="text-sm text-amber-600 font-medium">
          {post.category}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
            <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-sm text-gray-600">{post.author.name}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon size={14} className="mr-1" />
          {post.date}
        </div>
      </div>
    </div>
  </div>;
const CategoryTag = ({
  label
}) => <button className="px-3 py-1 bg-purple-50 text-purple-700 rounded-md hover:bg-purple-100 transition duration-300 text-sm">
    {label}
  </button>;
const ResourceCard = ({
  title,
  type,
  image
}) => <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
        {type}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <Button variant="outline" className="w-full justify-center">
        Download
      </Button>
    </div>
  </div>;
// Sample blog post data
const blogPosts = [{
  title: '5 Strategies to Optimize Your Aftermarket Automotive Operations',
  excerpt: 'Learn how to streamline your aftermarket operations with these proven strategies that can boost efficiency and customer satisfaction.',
  image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'Automotive',
  date: 'Oct 15, 2023',
  author: {
    name: 'Michael Reynolds',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
}, {
  title: 'The Future of Vehicle Depot Management: Trends to Watch',
  excerpt: 'Stay ahead of the curve with insights into emerging technologies and methodologies that are transforming depot management.',
  image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  category: 'Fleet Management',
  date: 'Sep 28, 2023',
  author: {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  }
}, {
  title: 'Implementing Lean Principles in Technical Design Processes',
  excerpt: 'Discover how lean methodologies can transform your technical design workflow, reducing waste and accelerating innovation.',
  image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'Technical Design',
  date: 'Sep 12, 2023',
  author: {
    name: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
}, {
  title: 'Building High Performance Work Systems: A Comprehensive Guide',
  excerpt: "Learn the essential components of high performance work systems and how they can transform your organization's productivity.",
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'Operations',
  date: 'Aug 30, 2023',
  author: {
    name: 'Rebecca Martinez',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
  }
}, {
  title: 'Supply Chain Resilience in Automotive Industries',
  excerpt: 'Strategies to build robust and adaptable supply chains that can withstand disruptions in the automotive sector.',
  image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'Automotive',
  date: 'Aug 15, 2023',
  author: {
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
}, {
  title: 'Leadership Strategies for Driving Operational Excellence',
  excerpt: 'Effective leadership approaches that foster a culture of continuous improvement and operational excellence.',
  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'Leadership',
  date: 'Jul 29, 2023',
  author: {
    name: 'Michelle Wong',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
}];
export default BlogPage;