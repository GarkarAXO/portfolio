import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import PersonalProjects from "@/components/PersonalProjects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      
      {/* Contenedor unificado para secciones de proyectos */}
      <div className="w-full">
        <Projects />
        <PersonalProjects />
      </div>

      <About />
      <Contact />
    </main>
  );
}
