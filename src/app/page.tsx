import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Mi Portafolio
        </h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Bienvenido a mi espacio profesional.
        </p>
      </div>

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
