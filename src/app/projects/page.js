import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "TravelWithMe",
      tech: "Next.js, Tailwind CSS, Firebase",
      link: "#",
    },
    {
      title: "E-Commerce Store",
      tech: "Next.js, Tailwind CSS",
      link: "#",
    },
    {
      title: "E-Commerce website",
      tech: "Next.js, Tailwind CSS",
      link: "#",
    },
    {
      title: "Community Platform",
      tech: "React, Node.js, MongoDB",
      link: "#",
    }, 
    {
      title: "Task Manager Pro",
      tech: "React, Node.js, MongoDB",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      tech: "Next.js, Tailwind, OpenWeather API",
      link: "#",
    },
    {
      title: "Finance Tracker",
      tech: "React, Express, PostgreSQL",
      link: "#",
    },
  ];

  return (
    <section className="relative px-6 py-28 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)] opacity-20"></div>
        
        {/* Floating Blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my skills in building
            modern, scalable web applications with cutting-edge technologies.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="transform transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                tech={project.tech}
                link={project.link}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="https://github.com/wajid-meraj"
            target="_blank"
            className="group relative inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
                       hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold
                       shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              View More on GitHub
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
          </Link>
        </div>
      </div>
    </section>
  );
} 
