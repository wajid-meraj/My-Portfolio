"use client";

import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-950">
      <div className="w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-sm text-center mt-2">
          Feel free to reach out for collaborations or opportunities
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-gray-500" />
            <input
              type="text"
              placeholder="Your Name"
             className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
             className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="5"
             className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold text-sm transition"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}