"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-gray-950/80 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1
          onClick={() => handleScroll("home")}
          className="cursor-pointer font-bold text-xl text-white tracking-wide"
        >
          Wajid<span className="text-blue-500">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="relative text-gray-300 hover:text-white transition
                         after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                         after:w-0 after:bg-blue-500 after:transition-all
                         hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-6 space-y-4">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="block w-full text-left text-gray-300 hover:text-white transition"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
