import React, { useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'; // Importing the close and menu icons
import logo from "../assets/logo.svg";

function Navbar() {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-8 mx-8 flex flex-row justify-between items-center">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden text-white sm:flex menu flex flex-row items-center justify-center gap-12">
        <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Home</h2>
        <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">New</h2>
        <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Popular</h2>
        <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Trending</h2>
        <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Categories</h2>
      </div>


      <div className="sm:hidden">
        <RiMenuLine onClick={toggleMenu} className="text-3xl text-white hover:text-purple-600 cursor-pointer transition-colors duration-300" />
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-3/4 sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <RiCloseLine onClick={toggleMenu} className="text-3xl text-gray-800 hover:text-purple-600 cursor-pointer transition-colors duration-300" />
        </div>
        <div className="flex flex-col items-start p-8 mx-2 space-y-6">
          <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Home</h2>
          <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">New</h2>
          <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Popular</h2>
          <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Trending</h2>
          <h2 className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Categories</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
