import Link from "next/link";
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I am <span className="text-blue-500">Wajid Ansari</span>
      </h1>
      <p className="mt-4 text-gray-400 max-w-xl">
        Full Stack Web Developer | Next.js • React • Tailwind CSS
      </p>

      <div className="mt-6 flex gap-4">
        <a href="/projects" className="px-6 py-2 bg-blue-600 rounded-lg">
          View Projects
        </a>
        <a href="/contact" className="px-6 py-2 border rounded-lg">
          Contact Me
        </a>
      </div>
    </section>
  );
}
