'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Configuraciones de suavidad para el aro exterior
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16); // -16 para centrar el aro de 32px
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Ocultar si sale de la ventana
    document.addEventListener('mouseleave', () => setIsVisible(false));
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null; // No mostrar en dispositivos táctiles
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Punto central (Movimiento instantáneo) */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-primary rounded-full z-10"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
      />

      {/* Aro exterior (Movimiento suave / Spring) */}
      <motion.div
        className="fixed w-8 h-8 border border-primary/50 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(var(--primary-rgb), 0.8)' : 'rgba(var(--primary-rgb), 0.4)',
          opacity: isVisible ? 1 : 0
        }}
      />
    </div>
  );
};

export default CustomCursor;
