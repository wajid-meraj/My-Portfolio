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
      title: "Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      link: "#",
    },
    {
      title: "Community Platform",
      tech: "React, Node.js, MongoDB",
      link: "#",
    },
  ];

  return (
    <section className="px-6 py-28 max-w-6xl mx-auto">

      {/* Heading */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A collection of projects that showcase my skills in building
          modern, scalable web applications.
        </p>
        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <Link
          href="https://github.com/wajid-meraj"
          target="_blank"
          className="inline-block px-8 py-3 rounded-xl bg-blue-600
                     hover:bg-blue-500 transition font-semibold"
        >
          View More on GitHub
        </Link>
      </div>
    </section>
  );
}
