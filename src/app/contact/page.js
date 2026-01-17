"use client";

import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your Public Key
      emailjs.init("sZkfJu-YBle9oS7kC"); // Replace with your EmailJS public key

      const result = await emailjs.send(
        "service_wajidmeraj", // Your Service ID
        "template_fjgrnpe", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Wajid", // Your name
          reply_to: formData.email
        }
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 overflow-hidden bg-black">
        {/* Solid Fallback Background */}
        <div className="absolute inset-0 bg-black">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Colored Blobs with CSS */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-900 opacity-10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900 opacity-10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Let&apos;s <span className="text-transparent" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text' }}>Connect</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Have a project in mind? Let&apos;s collaborate and create something amazing together.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <div className="h-1 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)' }} />
              <div className="h-1 w-10 sm:w-12 rounded-full" style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }} />
              <div className="h-1 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to right, #ec4899, #3b82f6)' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="group p-5 sm:p-6 bg-gray-900 bg-opacity-50 border border-gray-800 rounded-2xl hover:border-blue-500 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #1d4ed8)' }}>
                    <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Location</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Remote / Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="group p-5 sm:p-6 bg-gray-900 bg-opacity-50 border border-gray-800 rounded-2xl hover:border-purple-500 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, #8b5cf6, #7c3aed)' }}>
                    <FaEnvelope className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Email</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">contact@example.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-5 sm:p-6 bg-gray-900 bg-opacity-50 border border-gray-800 rounded-2xl backdrop-blur-sm">
                <h3 className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Connect Online</h3>
                <div className="flex gap-3">
                  <a href="https://linkedin.com/in/wajid-meraj" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-gray-800 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110 group">
                    <FaLinkedin className="text-white text-lg sm:text-xl group-hover:rotate-12 transition-transform" />
                  </a>
                  <a href="https://github.com/wajid-meraj" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110 group">
                    <FaGithub className="text-white text-lg sm:text-xl group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500" style={{ background: 'linear-gradient(to right, #2563eb, #7c3aed, #db2777)' }} />
                
                {/* Form Container */}
                <div className="relative bg-gray-900 bg-opacity-80 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">I&apos;ll get back to you within 24 hours</p>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <div className="flex items-center">
                        <FaUser className="absolute left-3 sm:left-4 text-gray-500 z-10 text-sm sm:text-base" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <div className="flex items-center">
                        <FaEnvelope className="absolute left-3 sm:left-4 text-gray-500 z-10 text-sm sm:text-base" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="4"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300 text-sm sm:text-base resize-none"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group relative w-full overflow-hidden py-3 sm:py-4 rounded-xl font-semibold text-white transition-all duration-500 hover:scale-[1.02] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: 'linear-gradient(to right, #2563eb, #7c3aed)' }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                        {isLoading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>

                  {/* Form Decoration */}
                  <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 opacity-10 rounded-full blur-xl" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)' }} />
                  <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 opacity-10 rounded-full blur-xl" style={{ background: 'linear-gradient(to top right, #ec4899, #3b82f6)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}