import React from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex flex-col text-gray-800">
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Know Us
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white">
            Call Us: <span className="font-semibold">+91 676543434</span>
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-10 lg:px-20 py-10 bg-white/90 rounded-2xl border border-blue-600 mt-0 relative z-20 shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 mb-6">
            About JSSATEN
          </h1>
          <p className="text-base sm:text-lg mb-8">
            JSS Academy of Technical Education, Noida (JSSATEN) is a premier
            engineering institute known for its academic excellence, vibrant
            campus life, and commitment to innovation.
          </p>
          <p className="text-base sm:text-lg mb-4">
            The hostels are designed to provide a safe, comfortable, and
            community-driven living experience
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">
            About This Hostel Website
          </h2>
          <p className="text-sm sm:text-base mb-6">
            HostelHub is designed to help students discover, book, and review
            hostels with ease. It provides a seamless experience for managing
            hostel life, connecting with peers, and sharing feedback.
          </p>
          <p className="text-sm sm:text-base mb-10">
            HostelHub is a digital companion for JSS students, designed to
            simplify hostel life and provide a smarter way to stay connected.
          </p>
          <div className="h-0 w-50 border border-b-blue-600/70 mt-6 "></div>
          <h1 className="text-lg text-blue-700 ml-2 mb-3 mt-2">
            Some of Core Features
          </h1>
          <div className="h-0 w-50 border border-b-blue-600/70 mb-2 "></div>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>fees Structure</li>
            <li>Room Booking</li>
            <li>Peer Reviews</li>
            <li>Seat Availability</li>
            <li>Book preference Seats</li>
          </ul>
          <div className="h-0 w-100 border border-b-blue-600/70 mt-6 "></div>
          <h1 className="text-lg text-blue-600 font-medium">Follow Us </h1>
          <div className="mt-4 flex items-center space-x-6">
            <a
              className="flex items-center space-x-2 hover:scale-105 transition-transform"
              href="https://www.instagram.com/hackncs/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram-1-svgrepo-com.svg"
                className="w-8 h-8"
              />
              <span className="text-blue-600 font-semibold"></span>
            </a>
            <a
              className="flex items-center space-x-2 hover:scale-105 transition-transform"
              href="https://www.linkedin.com/company/hackncs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/public/LN.png" className="w-8 h-8" />
              <span className="text-blue-600 font-semibold"></span>
            </a>
            <a
              className="flex items-center space-x-2 hover:scale-105 transition-transform"
              href="https://hackncs.in/team"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/public/NCS.png" className="w-8 h-8" />
              <span className="text-blue-600 font-semibold"></span>
            </a>
            <a
              className="flex items-center space-x-2 hover:scale-105 transition-transform"
              href="http://jssaten.ac.in//index"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/public/jsslogoicon.png" className="w-8 h-8" />
              <span className="text-blue-600 font-semibold"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
