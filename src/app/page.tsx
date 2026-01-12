import Hero from "@/components/Hero";
import About from "@/app/about/page";
import Projects from "@/app/Projects/page";
import Skills from "@/app/skills/page";
import Contact from "@/app/Contact/page";

export default function Home() {
  return (
    <main className="px-6">
      <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
    </main>
  );
}
