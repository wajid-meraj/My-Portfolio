"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative mt-28 bg-gray-950 text-gray-400 overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-3xl pointer-events-none" />

        {/* Divider */}
        <div className="relative h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-3 text-sm">

          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-bold tracking-wide">
              Wajid<span className="text-blue-500">.dev</span>
            </h2>
            <p className="mt-5 leading-relaxed max-w-sm">
              Full Stack Web Developer crafting modern, scalable, and
              user-friendly web applications with clean architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-[0.2em]">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="relative inline-block transition hover:text-white
                               after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                               after:w-0 after:bg-blue-500 after:transition-all
                               hover:after:w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-[0.2em]">
              Connect
            </h3>

            <div className="flex gap-5">
              {[
                {
                  icon: <FaGithub />,
                  href: "https://github.com/",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://linkedin.com/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaEnvelope />,
                  href: "mailto:wajid@email.com",
                  label: "Email",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  className="group p-3 rounded-full border border-gray-800
                             transition-all duration-300
                             hover:border-blue-500 hover:text-white
                             hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
                             hover:-translate-y-1"
                >
                  <span className="text-lg">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative text-center py-7 border-t border-gray-800 text-xs text-gray-500">
          © {new Date().getFullYear()} Wajid Ansari • All rights reserved.
        </div>
      </footer>

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full
                     shadow-xl transition-all duration-300
                     hover:bg-blue-500 hover:scale-110
                     hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
                     z-50"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
    </>
  );
}
