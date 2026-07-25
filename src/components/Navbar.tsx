"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/wajid-meraj" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/wajidmeraj" },
    { icon: FiMail, href: "mailto:wajid4me7@email.com" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActive(id);
      setOpen(false);
    }
  };

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-blue-500/5"
          : "bg-gray-950/80 backdrop-blur-lg border-b border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo with gradient */}
        <motion.h1
          onClick={() => handleScroll("home")}
          className="text-2xl sm:text-3xl font-extrabold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white tracking-wide">Wajid</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            .dev
          </span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`relative px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${
                  active === link.id
                    ? "text-white bg-blue-500/10"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              {active === link.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg bg-blue-500/10 -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300
                ${active === link.id ? "w-1/2" : "w-0"}`}
              />
            </motion.button>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-1 ml-2 pl-4 border-l border-gray-700/50">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Resume Button with gradient */}
          <motion.a
            href="/resume.pdf"
            download
            className="ml-2 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-5 py-2.5 rounded-xl text-white font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="animate-bounce" />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-gray-800/50"
          >
            <div className="bg-gray-950/95 backdrop-blur-xl px-4 py-6 space-y-4">
              {links.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleScroll(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all
                    ${
                      active === link.id
                        ? "text-white bg-blue-500/10 border border-blue-500/20"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                >
                  {link.name}
                </motion.button>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex justify-center gap-2 pt-4 border-t border-gray-800/50">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3.5 rounded-xl text-white font-medium transition-all shadow-lg shadow-blue-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}