export default function Projects() {
  return (
    <section id="proyectos" className="w-full py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Tarjeta de Proyecto 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Proyecto 1</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Una breve descripción de mi proyecto. Qué tecnologías usé y cuál fue mi rol.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Ver más</a>
          </div>
          {/* Tarjeta de Proyecto 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Proyecto 2</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Una breve descripción de mi proyecto. Qué tecnologías usé y cuál fue mi rol.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Ver más</a>
          </div>
          {/* Tarjeta de Proyecto 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Proyecto 3</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Una breve descripción de mi proyecto. Qué tecnologías usé y cuál fue mi rol.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Ver más</a>
          </div>
        </div>
      </div>
    </section>
  );
}
