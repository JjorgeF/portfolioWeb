import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef, useState } from 'react';

export function MagneticPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  
  // Motion values to track normalized mouse coordinates (-1 to 1)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Apply a spring for a smooth, natural follow effect
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map the smooth coordinates to rotation angles (max 15 degrees)
  const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);

  // Map to a slight translation
  const translateX = useTransform(smoothX, [-1, 1], [-5, 5]);
  const translateY = useTransform(smoothY, [-1, 1], [-5, 5]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    // Calculate distance from center, normalized to -1 to 1
    const normalizedX = (clientX - centerX) / (rect.width / 2);
    const normalizedY = (clientY - centerY) / (rect.height / 2);
    
    // Clamp values just in case
    x.set(Math.max(-1, Math.min(1, normalizedX)));
    y.set(Math.max(-1, Math.min(1, normalizedY)));
  };

  const handleLeave = () => {
    setIsActive(false);
    // Snap back to center
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="w-[70%] sm:w-[50%] md:w-4/12 aspect-square max-h-[40vh] md:max-h-[50vh] relative cursor-crosshair z-10 mb-2 md:mb-0 mx-auto md:mx-0 touch-none"
      style={{ perspective: '1200px' }}
      ref={ref}
      onMouseEnter={() => setIsActive(true)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={(e) => {
        setIsActive(true);
        handleMove(e);
      }}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
      onTouchCancel={handleLeave}
    >
      <motion.div 
        className="w-full h-full border-[2px] border-[var(--color-border)] relative overflow-hidden group bg-[var(--color-base)]"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "16px 16px 0px 0px var(--color-text)",
          borderColor: "var(--color-text)",
          transition: { duration: 0.2 }
        }}
        animate={isActive ? {
          scale: 1.05,
          boxShadow: "16px 16px 0px 0px var(--color-text)",
          borderColor: "var(--color-text)",
        } : {
          scale: 1,
          boxShadow: "8px 8px 0px 0px var(--color-border)",
          borderColor: "var(--color-border)",
        }}
        initial={{ boxShadow: "8px 8px 0px 0px var(--color-border)" }}
      >
        <img 
          src="https://github.com/JjorgeF.png" 
          alt="Jorge Felipe" 
          className={`w-full h-full object-cover transition-all duration-500 ${isActive ? 'grayscale-0 opacity-100 scale-105' : 'grayscale opacity-80 scale-100'}`}
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-8 md:-bottom-12 w-full text-center font-display font-bold text-xl md:text-3xl tracking-[0.4em] text-[var(--color-text)] opacity-60 pointer-events-none"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
        }}
      >
        .---
      </motion.div>
    </div>
  );
}
