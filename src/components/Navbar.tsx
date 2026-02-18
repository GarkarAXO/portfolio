'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-primary/20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Erick Axel<span className="text-primary">.</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link className="hover:text-primary transition-colors" href="#inicio">Inicio</Link>
          <Link className="hover:text-primary transition-colors" href="#proyectos">Proyectos</Link>
          <Link className="hover:text-primary transition-colors" href="#sobre-mi">Sobre mí</Link>
          <Link className="hover:text-primary transition-colors" href="#contacto">Contacto</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            className="w-10 h-10 aspect-square flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-primary/10 hover:bg-primary/20 transition-all text-slate-700 dark:text-primary" 
            href="https://github.com/GarkarAXO" 
            target="_blank"
          >
            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
          </Link>
          <button 
            className="w-10 h-10 aspect-square flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-primary/10 hover:bg-primary/20 transition-all text-slate-700 dark:text-primary cursor-pointer" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Alternar modo oscuro"
          >
            {mounted && (
              <span className="material-symbols-outlined block">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            )}
            {!mounted && <span className="material-symbols-outlined block">dark_mode</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
