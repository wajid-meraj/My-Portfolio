import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <h1 className="relative text-4xl md:text-6xl font-extrabold leading-tight">
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Wajid Ansari
        </span>
      </h1>

      <p className="relative mt-6 text-gray-600 max-w-2xl text-lg">
        Full Stack Web Developer specializing in{" "}
        <span className="text-gray-600 font-medium">
          Next.js, React & Tailwind CSS
        </span>
        . I build fast, scalable, and modern web applications.
      </p>

      {/* Tech Stack */}
      <div className="relative mt-6 flex flex-wrap justify-center gap-3 text-xs">
        {["Next.js", "React", "Tailwind CSS", "JavaScript"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative mt-10 flex gap-4">
        <Link
          href="/projects"
          className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="px-7 py-3 rounded-xl border border-gray-700 hover:border-blue-500 hover:text-white transition font-semibold"
        >
          Contact Me
        </Link>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 text-xs text-gray-500 animate-bounce">
        Scroll ↓
      </div>
    </section>
  );
}
