"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="mt-20 bg-gray-950 text-gray-400">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3 text-sm">
          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-bold">
              Wajid<span className="text-blue-500">.dev</span>
            </h2>
            <p className="mt-4 leading-relaxed">
              Full Stack Web Developer building modern web applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase">
              Connect
            </h3>
            <div className="flex gap-4">
              <a className="icon-btn"><FaGithub /></a>
              <a className="icon-btn"><FaLinkedin /></a>
              <a className="icon-btn"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <div className="text-center py-5 border-t border-gray-800 text-xs">
          © {new Date().getFullYear()} Wajid Ansari
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:scale-110 transition z-50"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
    </>
  );
}
