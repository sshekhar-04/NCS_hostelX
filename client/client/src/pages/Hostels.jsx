import React from "react";
import { Link } from "react-router-dom";

const hostels = [
  {
    name: "Boys Hostel",
    img: "/boys-hostel.jpg", // ✅ public/ folder (no /public prefix)
    desc: "Comfortable and secure accommodation for male students with 24/7 security and modern amenities.",
    link: "/hostels/boys",
  },
  {
    name: "Girls Hostel",
    img: "/girls-hostel.jpg", // ✅ public/ folder
    desc: "Safe, well-furnished living spaces designed to provide a homely environment for female students.",
    link: "/hostels/girls",
  },
  {
    name: "International Students Hostel",
    img: "/international-hostel.jpg", // ✅ public/ folder
    desc: "Specially designed for international students with cultural support, study spaces, and community areas.",
    link: "/hostels/international",
  },
];

const Hostels = () => {
  return (
    <div className="min-h-screen bg-white/70 rounded-2xl px-6 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Our Hostels</h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Explore our student hostels designed to provide comfort, security, and a vibrant community
        experience during your stay. Choose the one that best suits your needs.
      </p>

      {/* Hostels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {hostels.map((hostel, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col"
          >
            {/* Hostel Image */}
            <img
              src={hostel.img}
              alt={hostel.name}
              className="w-full h-48 object-cover hover:scale-105 transition-transform"
            />

            {/* Hostel Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">{hostel.name}</h2>
              <p className="text-gray-600 flex-grow">{hostel.desc}</p>

              {/* ✅ View Details Button with Link */}
              <Link
                to={hostel.link}
                className="mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hostels;
