import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-purple-400">Yeuclidean</span>{' '}
              <span className="text-amber-400">Hill</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Delivering High Performance Work Systems Everyday
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Aftermarket Automotive
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Vehicle Depot Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Technical Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Work System Analysis
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Consulting Ave, Business District, 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon size={20} className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon size={20} className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">info@yeuclideanhill.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Yeuclidean Hill Management. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;