import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGitAlt className="text-gray-300" /> },
      ],
    },
  ];

  return (
    <section className="relative px-6 py-32 overflow-hidden">

      {/* 🔥 Background Only */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-10 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-gray-950 border border-gray-800 
                               rounded-xl px-4 py-3 hover:border-blue-500/60 
                               hover:scale-105 transition"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
