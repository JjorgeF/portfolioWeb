import { Project } from '../types';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectIconProps {
  project: Project;
}

export function ProjectIcon({ project }: ProjectIconProps) {
  const IconComponent = (Icons as any)[project.iconName] || Icons.Folder;

  return (
    <div className="flex flex-col items-center gap-2 group z-20">
      <motion.div 
        className="w-14 h-14 md:w-16 md:h-16 rounded-full border-[2px] border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center shadow-[4px_4px_0px_0px_var(--color-border)] group-hover:bg-[var(--color-text)] group-hover:text-[var(--color-surface)] group-hover:shadow-[2px_2px_0px_0px_var(--color-border)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-200 text-[var(--color-text)]"
      >
        <IconComponent size={24} strokeWidth={2} className="currentColor" />
      </motion.div>
      <span className="font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-widest text-[var(--color-text)] bg-[var(--color-surface)] px-2 py-1 border-[2px] border-[var(--color-border)] shadow-[2px_2px_0px_0px_var(--color-border)]">
        {project.shortTitle}
      </span>
    </div>
  );
}

