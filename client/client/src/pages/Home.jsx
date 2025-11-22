import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-start px-8 bg-cover bg-center bg-no-repeat  relative overflow-hidden">
      {/* Animated container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl text-left text-white z-10 p-8 rounded-2xl backdrop-md bg-gradient-to-br from-black/40 via-transparent/30 to-transparent/15 shadow-2xl"
      >
        {/* Title */}
        <h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-extrabold bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-transparent bg-clip-text mb-8 drop-shadow-[0_0_10px_rgba(255,150,80,0.4)]"
        >
          JSS Hostel Hub
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-white-800 mb-6"
        >
          Discover, book, and review hostels with ease. Your next adventure
          starts here.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="bg-amber-400/90 text-gray-900 px-4 py-2 rounded-full inline-block mb-8 font-medium shadow-lg"
        >
          The Ultimate Hostel Experience
        </motion.p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            to="/hostels"
            className="inline-block bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 hover:shadow-[0_0_25px_rgba(255,180,100,0.8)] transform transition-all duration-300 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Explore Hostels
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating motion lights */}
      <motion.div
        className="absolute top-24 left-10 w-40 h-40 bg-rose-400/15 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-10 w-52 h-52 bg-amber-400/15 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Home;
