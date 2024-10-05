import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Icons for hamburger menu (you can install Heroicons if not done already)
import logo from '../images/logo.png'; // Import your logo
import profileImage from '../images/header-image.png'; // Import the right-side image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-white flex items-center justify-between p-4 md:px-10" style={{ borderBottom: '1px solid #E5E7EB' }}>
      {/* Left side with logo and navigation */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10" />
        <div className="text-xl font-semibold pl-2">Untitled UI</div>

        {/* Navigation links - visible on medium and larger screens */}
        <div className="hidden md:flex items-center space-x-8">
          <p className="text-gray-600 font-medium hover:text-[#7F56D9]">Home</p>
          <div className="relative">
            <select className="text-gray-600 font-medium hover:text-[#7F56D9] bg-white rounded-md">
              <option value="" disabled selected>Products</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
          </div>
          <div className="relative">
            <select className="text-gray-600 font-medium hover:text-[#7F56D9] bg-white rounded-md">
              <option value="" disabled selected>Resources</option>
              <option value="resource1">Resource 1</option>
              <option value="resource2">Resource 2</option>
              <option value="resource3">Resource 3</option>
            </select>
          </div>
          <p className="text-gray-600 font-medium hover:text-[#7F56D9]">Pricing</p>
        </div>
      </div>

      {/* Right side with profile image - visible on medium and larger screens */}
      <div className="hidden md:flex items-center space-x-4">
        <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full bg-gray-300" />
      </div>

      {/* Menu icon for mobile */}
      <div className="md:hidden ml-4" onClick={toggleMenu}>
        {menuOpen ? (
          <XIcon className="w-6 h-6 text-gray-600" />
        ) : (
          <MenuIcon className="w-6 h-6 text-gray-600" />
        )}
      </div>

      {/* Mobile menu - shows up when the menu icon is clicked */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <p className="text-gray-600 font-medium hover:text-[#7F56D9]">Home</p>
          <div className="relative">
            <select className="text-gray-600 font-medium hover:text-[#7F56D9] bg-white rounded-md">
              <option value="" disabled selected>Products</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
          </div>
          <div className="relative">
            <select className="text-gray-600 font-medium hover:text-[#7F56D9] bg-white rounded-md">
              <option value="" disabled selected>Resources</option>
              <option value="resource1">Resource 1</option>
              <option value="resource2">Resource 2</option>
              <option value="resource3">Resource 3</option>
            </select>
          </div>
          <p className="text-gray-600 font-medium hover:text-[#7F56D9]">Pricing</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
