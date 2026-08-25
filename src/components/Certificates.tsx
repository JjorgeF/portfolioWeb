import React from 'react';
import { motion } from 'motion/react';
import { certificates } from '../data';
import * as LucideIcons from 'lucide-react';
import { ExternalLink } from 'lucide-react';

export function Certificates({ language }: { language: 'pt' | 'en' }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
        {certificates.map((cert, index) => {
          // Resolve string icon to Lucide component
          const IconComponent = (LucideIcons as any)[cert.iconName] || LucideIcons.Award;
          
          return (
            <motion.a
              href={cert.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="group relative flex flex-col justify-between p-6 bg-[var(--color-base)] border-[2px] border-[var(--color-border)] shadow-[4px_4px_0_0_var(--color-border)] hover:shadow-[8px_8px_0_0_var(--color-border)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top Icons */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-none border-[2px] border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text)] group-hover:scale-110 transition-transform">
                  <IconComponent size={24} strokeWidth={2} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} className="text-[var(--color-text)]" />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <p className="font-display font-black uppercase text-xs tracking-widest text-[var(--color-text)]/50 mb-2">
                  {cert.institution} • {cert.date}
                </p>
                <h3 className="font-display font-bold text-lg md:text-xl text-[var(--color-text)] leading-tight mb-4">
                  {cert.title}
                </h3>
              </div>
              
              {/* Skills Footer */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="font-display font-bold uppercase text-[10px] tracking-wider px-2 py-1 bg-[var(--color-surface)] border-[1px] border-[var(--color-border)] text-[var(--color-text)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
