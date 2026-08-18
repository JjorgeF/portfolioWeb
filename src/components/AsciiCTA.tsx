import { useState, useEffect, useRef } from 'react';

const CHARS = '!<>-_\\\\/[]{}—=+*^?#________';

export function AsciiCTA({ onClick, targetText = "VEJA MEUS PROJETOS" }: { onClick: () => void, targetText?: string }) {
  const [text, setText] = useState(targetText);
  const intervalRef = useRef<number | null>(null);

  const scramble = () => {
    let iteration = 0;
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = window.setInterval(() => {
      setText(targetText.split('').map((letter, index) => {
        if (index < iteration) {
          return targetText[index];
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(''));
      
      if (iteration >= targetText.length && intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    scramble();
    const interval = window.setInterval(scramble, 4000);
    return () => {
      window.clearInterval(interval);
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [targetText]);

  return (
    <button 
      onClick={onClick}
      onMouseEnter={scramble}
      className="group relative flex items-center gap-2 px-6 py-3 font-mono text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] text-[var(--color-text)] transition-transform hover:scale-105"
    >
      <div className="absolute inset-0 border border-[var(--color-text)] opacity-20 group-hover:opacity-100 transition-opacity" />
      <span className="opacity-50 group-hover:opacity-100 transition-opacity">{'>'}</span>
      <span>{text}</span>
      <span className="animate-pulse opacity-50">_</span>
    </button>
  );
}
