import Image from 'next/image';

export default function Hero() {
  const techStack = [
    { name: 'React', icon: 'code' },
    { name: 'Node.js', icon: 'terminal' },
    { name: 'Python', icon: 'settings_ethernet' },
    { name: 'PHP', icon: 'language' },
    { name: 'SQL', icon: 'database' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 pb-20 px-6 max-w-7xl mx-auto overflow-hidden" id="inicio">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Columna de Texto */}
        <div className="space-y-8 text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponible para nuevos desafíos
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Hola, soy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Erick Axel.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              Ingeniero en Tecnologías de la Información y Comunicaciones
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-xl">
              Desarrollador Fullstack especializado en crear sistemas empresariales robustos, integración de APIs y soluciones tecnológicas que impulsan el crecimiento de los negocios.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#proyectos" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 text-center hover:scale-105 active:scale-95">
              Ver Proyectos
            </a>
            <a href="#contacto" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center hover:scale-105 active:scale-95">
              Contactar
            </a>
          </div>

          {/* Tech Stack Mini */}
          <div className="space-y-3 pt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Stack Principal</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div key={tech.name} className="group relative">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:text-primary hover:border-primary hover:shadow-md">
                    <span className="material-symbols-outlined text-2xl">{tech.icon}</span>
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Visual */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          {/* Fondo Decorativo */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-3xl rounded-full opacity-60 animate-pulse"></div>
          
          <div className="relative w-full max-w-[400px] aspect-square">
            {/* Capas de diseño */}
            <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5 rounded-3xl rotate-6 scale-100 border border-primary/20"></div>
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-3xl -rotate-3 scale-95 opacity-50"></div>
            
            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group">
               <Image 
                src="/img/me.png" 
                alt="Erick Axel García Jiménez" 
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                priority
              />
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
              
              {/* Tarjeta Flotante */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">En Línea</p>
                  </div>
                  <p className="text-sm font-medium mt-1">Creando el futuro de los sistemas empresariales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
