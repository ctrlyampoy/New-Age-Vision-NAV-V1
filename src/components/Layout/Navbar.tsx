import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-purple-800">
            Yeuclidean <span className="text-amber-500">Hill</span>
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition duration-300">
              Contact Us
            </button>
          </NavLink>
        </div>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu}>
              Services
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>
              About Us
            </MobileNavLink>
            <MobileNavLink to="/testimonials" onClick={toggleMenu}>
              Testimonials
            </MobileNavLink>
            <MobileNavLink to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </MobileNavLink>
            <MobileNavLink to="/blog" onClick={toggleMenu}>
              Blog
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>
              <button className="w-full bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition duration-300">
                Contact Us
              </button>
            </MobileNavLink>
          </div>
        </div>}
    </header>;
};
const NavLink = ({
  to,
  children
}) => <Link to={to} className="text-gray-700 hover:text-purple-700 font-medium transition duration-300">
    {children}
  </Link>;
const MobileNavLink = ({
  to,
  onClick,
  children
}) => <Link to={to} onClick={onClick} className="text-gray-700 hover:text-purple-700 font-medium transition duration-300">
    {children}
  </Link>;
export default Navbar;