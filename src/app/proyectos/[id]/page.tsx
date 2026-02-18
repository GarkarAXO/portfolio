'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';

const techIcons: Record<string, string> = {
  'JavaScript': 'javascript',
  'React': 'javascript', // Usando icono de JS como fallback
  'Next.js': 'javascript',
  'Node.js': 'terminal',
  'PHP': 'terminal',
  'MySQL': 'database',
  'Python': 'terminal',
  'Flask': 'cloud',
  'AWS': 'cloud',
  'Vercel': 'cloud',
  'Stripe': 'credit_card',
  'Skydropx': 'local_shipping',
  'Tailwind CSS': 'css',
  'TypeScript': 'javascript',
  'HTML': 'code',
  'CSS': 'css'
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projectsData.find(p => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 pt-24">
      {/* Breadcrumb / Back Action */}
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors group">
          <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Volver a la Galería
        </Link>
      </div>

      {/* Project Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Visuals & Description */}
        <div className="lg:col-span-8 space-y-10">
          {/* Main Preview Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 aspect-video relative group">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Project Content */}
          <article className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white uppercase">
                {project.title}
              </h1>
              <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium">
                <span>{project.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <span>Finalizado {project.date.split(' - ').pop()}</span>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <section>
                <h3 className="text-xl font-bold text-primary mb-3">Descripción General</h3>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                  {project.overview}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-primary mb-3">El Desafío</h3>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                  {project.challenge}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-primary mb-3">Resultados</h3>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                  {project.results}
                </p>
              </section>
            </div>
          </article>
        </div>

        {/* Right Column: Sidebar / Meta */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Action Cards */}
          <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">Enlaces del Proyecto</h4>
            <div className="flex flex-col gap-3">
              {project.hasDemo ? (
                <Link 
                  href={project.link || "#"} 
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-primary/20"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  Ver Demo Online
                </Link>
              ) : (
                <div className="flex items-center justify-center gap-2 w-full bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-bold py-3 px-6 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 cursor-not-allowed">
                  <span className="material-symbols-outlined">lock</span>
                  Demo no disponible (Local)
                </div>
              )}
              
              {project.github && (
                <Link 
                  href={project.github} 
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-3 px-6 rounded-lg transition-all border border-slate-300 dark:border-slate-700"
                >
                  <span className="material-symbols-outlined">code</span>
                  Repositorio GitHub
                </Link>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">Tecnologías Utilizadas</h4>
            <div className="grid grid-cols-2 gap-3">
              {project.tech.map((t) => (
                <div key={t} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="material-symbols-outlined text-primary text-xl">
                    {techIcons[t] || 'terminal'}
                  </span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">Detalles del Proyecto</h4>
            <dl className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                <dt className="text-sm text-slate-500 font-medium">Cliente</dt>
                <dd className="text-sm font-bold text-slate-900 dark:text-white">{project.client}</dd>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                <dt className="text-sm text-slate-500 font-medium">Duración</dt>
                <dd className="text-sm font-bold text-slate-900 dark:text-white">{project.duration}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm text-slate-500 font-medium">Rol</dt>
                <dd className="text-sm font-bold text-slate-900 dark:text-white">{project.role}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {/* More Projects Link */}
      <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 mb-4">¿Quieres ver más trabajos?</p>
        <Link className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-8 decoration-2" href="/#proyectos">
          Explora la galería completa
          <span className="material-symbols-outlined">trending_flat</span>
        </Link>
      </div>
    </main>
  );
}
