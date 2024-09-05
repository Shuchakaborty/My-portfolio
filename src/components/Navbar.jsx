import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic from "../assets/passport.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 body-font max-w-full">
      <div className="container mx-auto p-5 flex flex-wrap items-center justify-between">
        <a className="flex items-center text-gray-900 mb-4 md:mb-0">
          <img
            className="w-20 rounded-full"
            alt="Tailwind CSS Navbar component"
            src={pic}
          />
          <div className="ml-3 space-y-1">
            <span className="text-xl font-medium">Shubhajit Chakraborty</span>
            <br />
            <span className="text-sm">Web Developer</span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="inline-flex p-3 rounded-lg md:hidden text-gray-800 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg 
            className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          {/* Close Icon */}
          <svg 
            className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Menu Items */}
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:items-center md:ml-auto md:space-x-6 w-full md:w-auto mt-4 md:mt-0`}
        >
          <Link to="/" className="text-gray-800 border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 mx-1.5 sm:mx-6">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 mx-1.5 sm:mx-6">
            About
          </Link>
          <Link to="/education" className="text-gray-800 border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 mx-1.5 sm:mx-6">
            Education
          </Link>
          <Link to="/skills" className="text-gray-800 border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 mx-1.5 sm:mx-6">
            Skills
          </Link>
          <Link to="/contact" className="text-gray-800 border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 mx-1.5 sm:mx-6">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
