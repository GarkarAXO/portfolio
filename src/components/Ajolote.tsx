'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const Ajolote = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isSurprised, setIsSurprised] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Usamos MotionValues para un seguimiento en tiempo real sin lag
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuramos el suavizado (Spring)
  const springConfig = { damping: 25, stiffness: 200 };
  const moveX = useSpring(mouseX, springConfig);
  const moveY = useSpring(mouseY, springConfig);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsSleeping(true);
      // Al dormir, volvemos al centro
      mouseX.set(0);
      mouseY.set(0);
    }, 5000);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Usamos una función de actualización para evitar depender de isSleeping en el array
      setIsSleeping((prev) => {
        if (prev) return false;
        return prev;
      });
      
      resetTimer();
      
      // Para isSurprised, como cambia poco, podemos usar una referencia o simplemente 
      // verificarlo dentro del handler si es necesario, pero para evitar el error de 
      // hooks, lo ideal es que el array sea [resetTimer] o vacío si las funciones son estables.
      if (isSurprised) return;

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.hypot(deltaX, deltaY) / 12, 7); 
        
        mouseX.set(Math.cos(angle) * distance);
        mouseY.set(Math.sin(angle) * distance);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Iniciamos el temporizador solo al montar el componente
    resetTimer();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isSurprised]); // Mantenemos solo isSurprised para que el tamaño sea constante 1.

  const handleClick = () => {
    setIsSleeping(false);
    resetTimer();
    setIsSurprised(true);
    mouseX.set(0);
    mouseY.set(0);
    setTimeout(() => setIsSurprised(false), 1000);
  };

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mx-auto lg:mx-0 select-none cursor-pointer"
      onClick={handleClick}
    >
      
      {/* Branquias Izquierdas */}
      <div className="absolute inset-0 z-0">
        {[
          { top: '10%', left: '10%', rot: -40 },
          { top: '25%', left: '5%', rot: -35 },
          { top: '40%', left: '8%', rot: -40 }
        ].map((pos, i) => (
          <motion.div
            key={`left-${i}`}
            className="absolute w-4 h-8 md:w-5 md:h-10 bg-[#FF6B81] rounded-full"
            style={{ top: pos.top, left: pos.left, rotate: pos.rot, transformOrigin: "bottom right" }}
            animate={{ rotate: isSleeping ? [pos.rot, pos.rot - 5, pos.rot] : [pos.rot, pos.rot - 12, pos.rot] }}
            transition={{ repeat: Infinity, duration: isSleeping ? 4 : 2.5, delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Branquias Derechas */}
      <div className="absolute inset-0 z-0">
        {[
          { top: '10%', right: '10%', rot: 40 },
          { top: '25%', right: '5%', rot: 35 },
          { top: '40%', right: '8%', rot: 40 }
        ].map((pos, i) => (
          <motion.div
            key={`right-${i}`}
            className="absolute w-4 h-8 md:w-5 md:h-10 bg-[#FF6B81] rounded-full"
            style={{ top: pos.top, right: pos.right, rotate: pos.rot, transformOrigin: "bottom left" }}
            animate={{ rotate: isSleeping ? [pos.rot, pos.rot + 5, pos.rot] : [pos.rot, pos.rot + 12, pos.rot] }}
            transition={{ repeat: Infinity, duration: isSleeping ? 4 : 2.5, delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Cuerpo Principal */}
      <div className="relative w-20 h-20 md:w-28 md:h-28 bg-[#FFB7C5] rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF9AA2]/20 z-10">
        
        {/* Ojos */}
        <div className="flex space-x-4 md:space-x-6">
          {[0, 1].map((eye) => (
            <div key={eye} className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                {isSleeping ? (
                  <motion.div 
                    key="sleeping"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    className="w-full h-0.5 bg-slate-900/40 rounded-full"
                  />
                ) : isSurprised ? (
                  <motion.div 
                    key="surprised"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.2 }}
                    className="w-full h-full bg-white rounded-full border border-slate-900/20 relative flex items-center justify-center"
                  >
                     <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="normal"
                    className="w-full h-full bg-white rounded-full border border-slate-900/10 relative flex items-center justify-center overflow-hidden"
                  >
                    <motion.div 
                      className="w-3 h-3 md:w-4 md:h-4 bg-slate-900 rounded-full absolute"
                      style={{ x: moveX, y: moveY }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Sonrisa / Boca */}
        <motion.div 
          className="absolute bottom-4 md:bottom-6 bg-[#FF6B81] opacity-60"
          animate={isSurprised ? {
            width: 8, height: 8, borderRadius: "100%", bottom: 16
          } : {
            width: 32, height: 12, borderRadius: "0 0 100px 100px", borderBottomWidth: 3, background: "transparent"
          }}
          style={!isSurprised ? { borderBottomStyle: "solid", borderColor: "#FF6B81" } : {}}
        />
        
        {/* Chapetes */}
        <div className="absolute bottom-6 md:bottom-8 flex justify-between w-12 md:w-16 px-1">
            <div className="w-2 h-1.5 bg-[#FF9AA2] rounded-full blur-[1px] opacity-60" />
            <div className="w-2 h-1.5 bg-[#FF9AA2] rounded-full blur-[1px] opacity-60" />
        </div>

        {/* Burbujas de sueño (Zzz) */}
        {isSleeping && (
          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -40, x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 -right-2 text-[10px] font-bold text-slate-400"
          >
            Zzz
          </motion.div>
        )}
      </div>

      <div className="absolute -z-10 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl" />
    </motion.div>
  );
};

export default Ajolote;
