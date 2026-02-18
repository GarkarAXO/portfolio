import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';

export default function PersonalProjects() {
  const personalProjects = projectsData.filter(p => p.category === 'Personal');

  return (
    <section className="py-24 border-t border-slate-200 dark:border-primary/10 max-w-7xl mx-auto px-6" id="proyectos-personales">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">Proyectos Personales</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl font-light text-lg">
            Exploraciones técnicas y laboratorios donde aplico nuevas tecnologías y perfecciono mis habilidades de desarrollo.
          </p>
        </div>
        <div className="hidden md:block w-48"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {personalProjects.map((project, index) => (
          <div key={index} className="group flex flex-col bg-white dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            {/* Contenedor de Imagen */}
            <div className="aspect-[16/10] relative overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                unoptimized={true}
              />
              <Link href={`/proyectos/${project.id}`} className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-xs font-bold uppercase tracking-widest bg-primary px-3 py-1 rounded-full">Ver Detalles</span>
              </Link>
            </div>

            <div className="p-8 flex flex-col grow space-y-5">
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-primary/10 text-slate-600 dark:text-primary text-[10px] font-black uppercase rounded-full border border-slate-200 dark:border-primary/20">{tag}</span>
                ))}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="material-symbols-outlined text-xl">{project.icon}</span>
                </div>
                <Link href={`/proyectos/${project.id}`} className="flex items-center gap-2 text-primary text-sm font-bold group/link">
                  Ver Detalles <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
