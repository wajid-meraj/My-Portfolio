import Hero from "@/components/Hero";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <main className="px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
      

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
