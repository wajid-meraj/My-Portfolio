import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="px-6 py-28 max-w-6xl mx-auto">
      
      {/* Heading */}
      <div className="mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative w-72 h-96 rounded-3xl overflow-hidden 
                          bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-[2px]
                          hover:scale-105 transition duration-500">
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-950">
              <Image
                src="/IMG_2462.jpg"
                alt="Wajid Ansari"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="text-white font-semibold">Wajid Ansari</span>, a
            B.Tech Computer Science student and a passionate{" "}
            <span className="text-blue-400 font-medium">
              Full Stack Web Developer
            </span>.  
            I love building scalable, high-performance, and user-friendly web
            applications using modern technologies.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid gap-4">
            {[
              "Next.js & React Developer",
              "Clean & scalable code architecture",
              "Tailwind CSS & modern UI design",
              "Consistent learner & problem solver",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gray-900/80 
                           border border-gray-800 rounded-xl p-4
                           hover:border-blue-500/60 transition"
              >
                <span className="h-2.5 w-2.5 bg-blue-500 rounded-full"></span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Projects", value: "10+" },
              { label: "Tech Stack", value: "8+" },
              { label: "Learning", value: "Daily" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900 border border-gray-800 rounded-xl py-4"
              >
                <h4 className="text-xl font-bold text-white">
                  {stat.value}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-7 py-3 rounded-xl bg-blue-600 
                         hover:bg-blue-500 transition text-sm font-semibold"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl border border-gray-700 
                         hover:border-blue-500 hover:text-white transition 
                         text-sm font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
