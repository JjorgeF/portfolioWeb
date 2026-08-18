import { motion } from 'motion/react';
import { Project } from '../types';
import { X, ArrowUpRight } from 'lucide-react';

interface CultModalProps {
  project: Project;
  onClose: () => void;
  language?: 'pt' | 'en';
}

export function CultModal({ project, onClose, language = 'pt' }: CultModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.3, exit: { duration: 0.15 } }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[var(--color-base)]/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ 
          type: "tween",
          ease: [0.85, 0, 0.15, 1], 
          duration: 0.3,
          exit: { duration: 0.15 }
        }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-[var(--color-surface)] border-[2px] border-[var(--color-border)] p-8 md:p-12 relative shadow-[16px_16px_0px_0px_var(--color-border)]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full border-[2px] border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-surface)] transition-colors"
        >
          <X size={24} strokeWidth={2} />
        </button>

        <div className="flex flex-col gap-8 md:gap-12 mt-4 md:mt-0">
          <div>
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[var(--color-text)]/60 mb-2 block">
              {project.shortTitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[var(--color-text)] leading-[1.1] tracking-tight">
              {project.title}
            </h2>
          </div>

          <p className="text-[var(--color-text)] font-sans text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            {project.description}
          </p>

          <div className="flex flex-col gap-3">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[var(--color-text)]/60">
              TECH STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border-[1.5px] border-[var(--color-border)] px-4 py-1.5 text-xs font-bold text-[var(--color-text)] uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-text)] text-[var(--color-base)] px-8 py-4 font-display font-bold text-lg uppercase tracking-wide hover:bg-white hover:scale-105 transition-all"
            >
              {language === 'pt' ? 'VER REPOSITÓRIO' : 'VIEW REPOSITORY'} <ArrowUpRight size={20} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

