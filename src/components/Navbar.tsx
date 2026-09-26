
"use client";

import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: FiGithub,
    href: "https://github.com/wajid-meraj",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    href: "https://linkedin.com/in/wajidmeraj",
  },
  {
    name: "Email",
    icon: FiMail,
    href: "mailto:wajid4me7@gmail.com",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll to section
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 80;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    setActive(id);
    setOpen(false);
  };

  // Detect scroll + active section
  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleWindowScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      observer.disconnect();
    };
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-800/50 bg-gray-950/95 shadow-2xl shadow-blue-500/5 backdrop-blur-xl"
          : "border-b border-gray-800 bg-gray-950/80 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        {/* Logo */}
        <motion.button
          type="button"
          onClick={() => handleScroll("home")}
          className="cursor-pointer text-2xl font-extrabold sm:text-3xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go to homepage"
        >
          <span className="tracking-wide text-white">
            Wajid
          </span>

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            .dev
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex lg:gap-2">

          {links.map((link) => (
            <motion.button
              key={link.id}
              type="button"
              onClick={() => handleScroll(link.id)}
              aria-current={
                active === link.id ? "page" : undefined
              }
              className={`relative rounded-lg px-3 py-2 font-medium transition-all duration-300 lg:px-4 ${
                active === link.id
                  ? "bg-blue-500/10 text-white"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}

              {active === link.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 -z-10 rounded-lg bg-blue-500/10"
                  transition={{
                    type: "spring",
                    duration: 0.5,
                  }}
                />
              )}

              <span
                className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                  active === link.id ? "w-1/2" : "w-0"
                }`}
              />
            </motion.button>
          ))}

          {/* Social Links */}
          <div className="ml-2 flex items-center gap-1 border-l border-gray-700/50 pl-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800/50 hover:text-white"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Resume */}
          <motion.a
            href="/resume.pdf"
            download
            className="ml-2 flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload size={18} />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg p-2 text-3xl text-white transition-colors hover:bg-gray-800/50 md:hidden"
          whileTap={{ scale: 0.9 }}
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-800/50 md:hidden"
          >
            <div className="space-y-4 bg-gray-950/95 px-4 py-6 backdrop-blur-xl">

              {/* Mobile Links */}
              {links.map((link, index) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  onClick={() => handleScroll(link.id)}
                  aria-current={
                    active === link.id
                      ? "page"
                      : undefined
                  }
                  className={`block w-full rounded-xl px-4 py-3 text-left font-medium transition-all ${
                    active === link.id
                      ? "border border-blue-500/20 bg-blue-500/10 text-white"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-2 border-t border-gray-800/50 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="rounded-xl bg-gray-800/50 p-3 text-gray-400 transition-colors hover:bg-gray-700/50 hover:text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Resume */}
              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-purple-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload size={18} />
                Download Resume
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}