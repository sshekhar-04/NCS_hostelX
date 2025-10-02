import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center px-8 bg-cover bg-center">
      <div className="max-w-xl text-left text-white">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-white blue-500 to-blue-600 text-transparent bg-clip-text mb-16">
          JSS Hostel Hub
        </h1>

        <p className="text-lg text-gray-100 mb-6">
          Discover, book, and review hostels with ease. Your next adventure
          starts here.
        </p>
        <p className="bg-yellow-400/70 text-gray-900 px-4 py-2 rounded-full inline-block mb-8 font-medium">
          The Ultimate Hostel Experience
        </p>
        <Link
          to="/hostels"
          className="inline-block bg-blue-600/50 hover:bg-cyan-600/20 transform hover:scale-105 transition duration-300 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg mx-10"
        >
          Explore Hostels
        </Link>
      </div>
    </div>
  );
};

export default Home;
