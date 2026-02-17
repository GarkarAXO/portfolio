export default function Contact() {
  return (
    <section id="contacto" className="w-full py-20 px-4 bg-gray-100 dark:bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contacto
        </h2>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10">
          ¿Interesado en colaborar o tienes alguna pregunta? No dudes en enviarme un mensaje.
        </p>
        <form className="max-w-xl mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
            <input type="text" id="name" placeholder="Tu Nombre" className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Correo Electrónico</label>
            <input type="email" id="email" placeholder="tu@correo.com" className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
            <textarea id="message" placeholder="Tu Mensaje" rows={5} className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
