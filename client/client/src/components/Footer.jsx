import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white-300 to-blue-300 text-white py-8 px-4 md:px-2 lg:px-10">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-bold">
          HostelHub © {new Date().getFullYear()}
        </div>
        <div className="flex gap-6 text-sm">
          <Link to="/about" className="hover:underline hover:text-yellow-300 transition duration-200">
            About
          </Link>
          <Link to="/hostels" className="hover:underline hover:text-yellow-300 transition duration-200">
            Hostels
          </Link>
          <Link to="/contact" className="hover:underline hover:text-yellow-300 transition duration-200">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-center text-xs text-white/70">
        All rights reserved. Crafted with ❤️ by HostelHub.
      </div>
    </footer>
  );
};

export default Footer;
