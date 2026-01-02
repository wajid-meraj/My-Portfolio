export default function ProjectCard({ title, tech, link }) {
  return (
    <div className="border border-gray-800 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{tech}</p>
      <a href={link} className="text-blue-500 text-sm mt-4 inline-block">
        View Project →
      </a>
    </div>
  );
}
