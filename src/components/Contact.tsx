'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
    formData.append("access_key", accessKey); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contacto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Columna de Información */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
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
        </motion.div>

        {/* Columna del Formulario */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl rounded-3xl -z-10"></div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden relative">
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Nombre Completo</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    id="name" 
                    placeholder="Tu nombre" 
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Correo Electrónico</label>
                  <input 
                    required
                    name="email"
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
                  required
                  name="subject"
                  type="text" 
                  id="subject" 
                  placeholder="¿En qué puedo ayudarte?" 
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Mensaje</label>
                <textarea 
                  required
                  name="message"
                  id="message" 
                  rows={4} 
                  placeholder="Cuéntame más sobre tu proyecto..." 
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <button 
                disabled={status === 'loading'}
                type="submit" 
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  <>
                    Enviar Mensaje
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">send</span>
                  </>
                )}
              </button>
            </form>

            {/* Overlay de Éxito o Error */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-10 z-20"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-slate-600 dark:text-slate-400">Gracias por escribir. Te responderé lo antes posible.</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-10 z-20"
                >
                  <div className="w-20 h-20 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-5xl">error</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Hubo un error</h3>
                  <p className="text-slate-600 dark:text-slate-400">No pudimos enviar tu mensaje. Por favor, inténtalo de nuevo.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
