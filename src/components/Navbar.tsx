import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Tu Nombre
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#proyectos" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Proyectos
          </Link>
          <Link href="#sobre-mi" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Sobre mí
          </Link>
          <Link href="#contacto" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
