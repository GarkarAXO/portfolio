export default function About() {
  const certifications = [
    { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy', year: '2023' },
    { name: 'ASP.NET Core MVC 6', issuer: 'Udemy', year: '2024' },
    { name: 'Certificación en Laravel', issuer: 'Ademass Training', year: '2024' },
    { name: 'Certificación en HTML5/CSS3', issuer: 'Ademass Training', year: '2024' },
  ];

  return (
    <section id="sobre-mi" className="py-20 border-t border-slate-200 dark:border-primary/10 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Columna de Texto Principal */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">Trayectoria Profesional</h2>
            <div className="w-12 h-1 bg-primary"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              Soy <span className="text-primary font-bold">Erick Axel García Jiménez</span>, Ingeniero en Tecnologías de la Información y Comunicaciones en proceso de titulación. Mi carrera se ha centrado en el desarrollo de sistemas empresariales completos, desde la arquitectura de base de datos hasta el despliegue final.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              He tenido el privilegio de desarrollar soluciones que hoy están en producción, gestionando operaciones reales para empresas como <span className="font-semibold text-slate-900 dark:text-white">Darmax Agua</span> y automatizando procesos críticos en <span className="font-semibold text-slate-900 dark:text-white">Mi Empeño</span>. Mi enfoque combina la robustez del backend con experiencias de usuario fluidas y modernas.
            </p>
          </div>

          {/* Grid de Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-100 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">api</span>
              <h3 className="font-bold mb-2 text-slate-900 dark:text-white">Integración APIs</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Stripe para pagos, Skydropx para logística y automatización con Slack.</p>
            </div>
            <div className="p-6 bg-slate-100 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">database</span>
              <h3 className="font-bold mb-2 text-slate-900 dark:text-white">Fullstack Dev</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Dominio de React, Node.js, PHP y Python para soluciones integrales.</p>
            </div>
          </div>
        </div>

        {/* Columna de Educación y Certificaciones */}
        <div className="lg:col-span-5 space-y-10">
          {/* Educación */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">school</span> Educación
            </h3>
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                <h4 className="font-bold text-slate-900 dark:text-white">Ingeniería en Tecnologías de la Información y Comunicaciones</h4>
                <p className="text-sm text-primary font-medium">Tecnológico de Gustavo A. Madero | 2020 – 2025</p>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">En proceso de titulación</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                <h4 className="font-bold text-slate-900 dark:text-white">Técnico en Soporte y Mantenimiento</h4>
                <p className="text-sm text-slate-500">CONALEP Venustiano Carranza II | 2015 – 2018</p>
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified</span> Certificaciones
            </h3>
            <div className="grid gap-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cert.name}</h4>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
