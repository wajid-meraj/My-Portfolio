
"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/wajid-meraj",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/wajidmeraj",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:wajid4me7@email.com",
      label: "Email",
    },
  ];

  return (
    <>
      <footer className="relative mt-0 overflow-hidden bg-gray-950 text-gray-400">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 bg-blue-500/10 blur-3xl" />

        {/* Divider */}
        <div className="relative h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 text-sm md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold tracking-wide text-white">
              Wajid<span className="text-blue-500">.dev</span>
            </h2>

            <p className="mt-5 max-w-sm leading-relaxed">
              Full Stack Web Developer crafting modern, scalable, and
              user-friendly web applications with clean architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative inline-block transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Connect
            </h3>

            <div className="flex gap-5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group rounded-full border border-gray-800 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                >
                  <span className="text-lg">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative border-t border-gray-800 py-7 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Wajid Ansari • All rights reserved.
        </div>
      </footer>

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
    </>
  );
}
