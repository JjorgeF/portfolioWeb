import React from 'react';

interface LanguageToggleProps {
  language: 'pt' | 'en';
  toggleLanguage: () => void;
}

const BrazilFlag = () => (
  <svg viewBox="0 0 10 7" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <rect width="10" height="7" fill="#009b3a" />
    <polygon points="5,0.6 9.4,3.5 5,6.4 0.6,3.5" fill="#fedf00" />
    <circle cx="5" cy="3.5" r="1.75" fill="#002776" />
    <path d="M 3.5 4 Q 5 3 6.5 4" stroke="#fff" strokeWidth="0.2" fill="none" />
  </svg>
);

const USAFlag = () => (
  <svg viewBox="0 0 10 7" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <rect width="10" height="7" fill="#fff" />
    <path d="M0,0.27h10 M0,1.35h10 M0,2.42h10 M0,3.5h10 M0,4.58h10 M0,5.65h10 M0,6.73h10" stroke="#bf0a30" strokeWidth="0.538" />
    <rect width="4.5" height="3.77" fill="#002868" />
    <g fill="#fff">
      <circle cx="0.8" cy="0.6" r="0.15"/><circle cx="1.8" cy="0.6" r="0.15"/><circle cx="2.8" cy="0.6" r="0.15"/><circle cx="3.8" cy="0.6" r="0.15"/>
      <circle cx="1.3" cy="1.4" r="0.15"/><circle cx="2.3" cy="1.4" r="0.15"/><circle cx="3.3" cy="1.4" r="0.15"/>
      <circle cx="0.8" cy="2.2" r="0.15"/><circle cx="1.8" cy="2.2" r="0.15"/><circle cx="2.8" cy="2.2" r="0.15"/><circle cx="3.8" cy="2.2" r="0.15"/>
      <circle cx="1.3" cy="3.0" r="0.15"/><circle cx="2.3" cy="3.0" r="0.15"/><circle cx="3.3" cy="3.0" r="0.15"/>
    </g>
  </svg>
);

export function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  return (
    <button
      onClick={toggleLanguage}
      title={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
      className="after:absolute after:-inset-8 after:bg-transparent after:content-[''] w-10 h-10 md:w-14 md:h-14 rounded-full border-[3px] md:border-[4px] border-[var(--color-border)] flex items-center justify-center overflow-hidden relative shrink-0 shadow-[4px_4px_0_0_var(--color-border)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
    >
      <div className={`absolute inset-0 transition-opacity duration-300 ${language === 'pt' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <BrazilFlag />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-300 ${language === 'en' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <USAFlag />
      </div>
      
      {/* Overlay for hover effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-20" />
    </button>
  );
}
