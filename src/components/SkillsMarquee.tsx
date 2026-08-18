import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';

const SKILLS = [
  { name: 'React.js', short: 'Re' },
  { name: 'Node.js', short: 'No' },
  { name: 'C / C++', short: 'C++' },
  { name: 'Python', short: 'Py' },
  { name: 'Kotlin', short: 'Kt' },
  { name: 'TypeScript', short: 'TS' },
];

export function SkillsMarquee() {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      // Calculamos a largura de metade da pista para um loop perfeito
      setContentWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (contentWidth > 0) {
      controls.start({
        x: [-contentWidth / 2, -contentWidth],
        transition: {
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  }, [contentWidth, controls]);

  const handleDragStart = () => controls.stop();
  const handleDragEnd = () => {
    controls.start({
      x: -contentWidth,
      transition: { duration: 15, ease: "linear", repeat: Infinity }
    });
  };

  return (
    <div className="w-[110%] -ml-[5%] overflow-hidden border-y-[2px] border-[var(--color-border)] py-2 md:py-3 bg-[var(--color-text)] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] my-4 md:my-6 relative -rotate-2 z-20 hover:rotate-0 transition-transform duration-500">
      <motion.div
        ref={trackRef}
        className="flex gap-3 md:gap-5 w-max cursor-grab active:cursor-grabbing px-4 md:px-8"
        animate={controls}
        drag="x"
        dragConstraints={{ left: -contentWidth, right: 0 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onHoverStart={handleDragStart}
        onHoverEnd={handleDragEnd}
      >
        {/* Multiplicamos as skills para garantir espaço de sobra para o drag e o loop */}
        {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
          <div 
            key={i} 
            className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 border-[2px] border-[var(--color-border)] bg-[var(--color-base)] shadow-[2px_2px_0_0_var(--color-border)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--color-border)] transition-all shrink-0"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[2px] border-[var(--color-border)] flex items-center justify-center font-display font-black text-[10px] md:text-[11px] bg-[var(--color-surface)] text-[var(--color-text)]">
              {skill.short}
            </div>
            <span className="font-display font-bold uppercase tracking-widest text-[var(--color-text)] text-xs md:text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
