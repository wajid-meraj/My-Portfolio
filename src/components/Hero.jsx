"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const texts = [
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS Lover",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
      
      {/* ✅ Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute top-40 -right-40 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/10 blur-3xl rounded-full" />

      {/* ✅ Content */}
      <div className="relative z-10 max-w-3xl">
        
        {/* ✅ Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 text-sm mb-6">
          🚀 Welcome to my Portfolio
        </div>

        {/* ✅ Name Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-white">Hi, I am </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Wajid Ansari
          </span>
        </h1>

        {/* ✅ Typing Text */}
        <p className="mt-5 text-gray-300 text-lg md:text-2xl">
          <span className="text-white font-semibold">{currentText}</span>
          <span className="animate-pulse text-blue-500">|</span>
        </p>

        {/* ✅ Description */}
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          I build modern, responsive and scalable web applications using{" "}
          <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
          <span className="text-blue-400 font-semibold">React</span> and{" "}
          <span className="text-blue-400 font-semibold">Tailwind CSS</span>.
        </p>

        {/* ✅ Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="px-7 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
          >
            View Projects 🚀
          </a>

          <a
            href="/contact"
            className="px-7 py-3 rounded-xl font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition"
          >
            Contact Me 📩
          </a>
        </div>
      </div>

      {/* ✅ Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
