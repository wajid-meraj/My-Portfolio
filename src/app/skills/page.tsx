
"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiTypescript,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiPostman,
  SiVercel,
  SiGitlab,
  SiLinux,
  SiJenkins,
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend Development",
      description: "Modern, responsive and interactive web interfaces",
      items: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-500" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-500" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-400" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
      ],
    },

    {
      category: "Backend Development",
      description: "Scalable APIs, server-side applications and services",
      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-300" />,
        },
        {
          name: "REST API",
          icon: <span className="text-blue-400">API</span>,
        },
        {
          name: "Python",
          icon: <FaPython className="text-yellow-400" />,
        },
        {
          name: "Java",
          icon: <FaJava className="text-red-500" />,
        },
        {
          name: "Authentication",
          icon: <span className="text-purple-400">🔐</span>,
        },
      ],
    },

    {
      category: "Database",
      description: "Data modeling, storage and database management",
      items: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-500" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-400" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-400" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-400" />,
        },
        {
          name: "Database Design",
          icon: <span className="text-cyan-400">DB</span>,
        },
      ],
    },

    {
      category: "AI & Machine Learning",
      description: "AI-powered applications and intelligent solutions",
      items: [
        {
          name: "Python AI",
          icon: <FaPython className="text-yellow-400" />,
        },
        {
          name: "OpenAI API",
          icon: <SiOpenai className="text-white" />,
        },
        {
          name: "Machine Learning",
          icon: <span className="text-purple-400">ML</span>,
        },
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="text-orange-500" />,
        },
        {
          name: "PyTorch",
          icon: <SiPytorch className="text-orange-400" />,
        },
        {
          name: "AI Integration",
          icon: <span className="text-cyan-400">AI</span>,
        },
      ],
    },

    {
      category: "Cloud & DevOps",
      description: "Deployment, cloud infrastructure and automation",
      items: [
        {
          name: "AWS",
          icon: <FaAws className="text-orange-400" />,
        },
        {
          name: "Docker",
          icon: <FaDocker className="text-blue-400" />,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-blue-500" />,
        },
        {
          name: "Linux",
          icon: <SiLinux className="text-gray-300" />,
        },
        {
          name: "Jenkins",
          icon: <SiJenkins className="text-red-500" />,
        },
        {
          name: "Vercel",
          icon: <SiVercel className="text-white" />,
        },
      ],
    },

    {
      category: "Tools & Technologies",
      description: "Development workflow and productivity tools",
      items: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-500" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-200" />,
        },
        {
          name: "GitLab",
          icon: <SiGitlab className="text-orange-500" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-400" />,
        },
        {
          name: "VS Code",
          icon: <span className="text-blue-400">VS</span>,
        },
        {
          name: "NPM",
          icon: <span className="text-red-500">NPM</span>,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gray-950 px-6 py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute right-[-150px] top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="absolute bottom-[-150px] left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Technical Expertise
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern, scalable,
            AI-powered and cloud-ready applications.
          </p>

          <div className="mx-auto mt-5 h-1 w-24 rounded bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="group rounded-2xl border border-gray-800 bg-gray-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_15px_50px_rgba(59,130,246,0.12)]"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">
                  {group.category}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-950 px-3 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-gray-900"
                  >
                    <span className="flex-shrink-0 text-xl transition-transform duration-300 group-hover/skill:scale-110">
                      {skill.icon}
                    </span>

                    <span className="text-xs font-medium text-gray-400 transition-colors duration-300 group-hover/skill:text-white sm:text-sm">
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