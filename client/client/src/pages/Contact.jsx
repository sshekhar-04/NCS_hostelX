import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white/60 rounded-2xl px-6 py-12 flex flex-col items-center">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 text-center max-w-2xl mb-10">
        Have questions, feedback, or partnership inquiries? We'd love to hear from you!
        Fill out the form below or reach out through our social platforms.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
          <textarea
            placeholder="Write your message here..."
            rows="5"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-10 flex space-x-6">
        <a
          href="https://www.instagram.com/hackncs/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:scale-105 transition-transform"
        >
          <img src="/instagram-1-svgrepo-com.svg" alt="Instagram" className="w-8 h-8" />
          <span className="text-blue-600 font-semibold">Instagram</span>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=support@hackncs.com&su=Hello%20Team&body=I%20have%20a%20question"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:scale-105 transition-transform"
        >
          <img src="/gmail.png" alt="Email" className="w-8 h-8" />
          <span className="text-blue-600 font-semibold">Email Us</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
