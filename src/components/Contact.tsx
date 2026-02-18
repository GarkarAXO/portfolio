'use client';

export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contacto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Columna de Información */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
              ¿Tienes un proyecto <br />
              <span className="text-primary">en mente?</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed max-w-md">
              Hablemos sobre cómo puedo ayudarte a construir soluciones tecnológicas escalables y eficientes para tu negocio.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <a href="mailto:e.axel12@gmail.com" className="group flex items-center gap-6 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-white dark:hover:bg-slate-800/50 transition-all">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">e.axel12@gmail.com</p>
              </div>
            </a>

            {/* Ubicación */}
            <div className="group flex items-center gap-6 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ubicación</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">CDMX, México</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna del Formulario */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl rounded-3xl -z-10"></div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Tu nombre" 
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="tu@email.com" 
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="¿En qué puedo ayudarte?" 
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Cuéntame más sobre tu proyecto..." 
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Enviar Mensaje
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
