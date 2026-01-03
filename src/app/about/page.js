import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="mt-2 h-1 w-16 bg-blue-500 rounded"></div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
            <Image
              src="/IMG_2462.jpg"
              alt="Wajid Ansari"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hi, I’m <span className="text-red font-semibold">Wajid Ansari</span>, a
            B.Tech Computer Science student and a passionate{" "}
            <span className="text-white">Full Stack Web Developer</span>. I love
            building scalable and user-friendly web applications using modern
            technologies.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid gap-3">
            {[
              "Next.js & React Developer",
              "Clean & scalable code",
              "Tailwind CSS specialist",
              "Continuous learner",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-lg p-3"
              >
                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-sm font-semibold"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-lg border border-gray-700 hover:border-blue-500 hover:text-white transition text-sm font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
