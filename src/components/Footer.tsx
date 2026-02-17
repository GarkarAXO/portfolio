import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-black shadow-inner">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-300 text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} [Tu Nombre]. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6">
          {/* Reemplaza con tus enlaces reales */}
          <Link href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Twitter / X
          </Link>
        </div>
      </div>
    </footer>
  );
}
