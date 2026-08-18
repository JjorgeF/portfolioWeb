import { Project } from '../types';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export function ProjectGridCard({ project, onClick }: { project: Project, onClick: (p: Project) => void }) {
  const IconComponent = (Icons as any)[project.iconName] || Icons.Folder;

  return (
    <motion.div 
      onClick={() => onClick(project)}
      className="after:absolute after:-inset-8 after:bg-transparent after:content-[''] group relative aspect-square border-[2px] border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-[4px_4px_0_0_var(--color-border)] md:shadow-[6px_6px_0_0_var(--color-border)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 md:hover:translate-x-1.5 md:hover:translate-y-1.5"
    >
      <div className="flex flex-col items-center gap-3 md:gap-6 transition-transform duration-300 group-hover:-translate-y-8 group-hover:opacity-0 p-4 md:p-6">
        <IconComponent strokeWidth={1.5} className="text-[var(--color-text)] w-8 h-8 md:w-12 md:h-12" />
        <span className="font-sans font-bold text-[9px] md:text-sm uppercase tracking-widest text-[var(--color-text)] text-center">
          {project.shortTitle}
        </span>
      </div>
      
      <div 
        className="absolute inset-0 p-3 md:p-6 flex flex-col items-center justify-center text-center bg-[var(--color-text)] text-[var(--color-base)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-8 group-hover:translate-y-0 overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        <span className="font-sans font-bold text-[9px] md:text-xs uppercase tracking-widest mb-2 md:mb-3 border-b-[2px] border-[var(--color-base)] pb-1 w-full max-w-[90%] md:max-w-[80%]">
          {project.shortTitle}
        </span>
        <p className="font-sans text-[10px] md:text-sm font-medium leading-tight md:leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
