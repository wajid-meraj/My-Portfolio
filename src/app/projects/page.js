import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard
          title="TravelWithMe"
          tech="Next.js, Tailwind"
          link="#"
        />
        <ProjectCard
          title="Portfolio Website"
          tech="Next.js"
          link="#"
        />
      </div>
    </section>
  );
}
