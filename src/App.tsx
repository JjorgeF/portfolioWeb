import { useState, useRef } from 'react';
import { projects } from './data';
import { CultModal } from './components/CultModal';
import { ProjectConstellation } from './components/ProjectConstellation';
import { ProjectGridCard } from './components/ProjectGridCard';
import { MagneticPhoto } from './components/MagneticPhoto';
import { MagneticBackground } from './components/MagneticBackground';
import { AsciiCTA } from './components/AsciiCTA';
import { SkillsMarquee } from './components/SkillsMarquee';
import { LanguageToggle } from './components/LanguageToggle';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, User, Briefcase, Phone } from 'lucide-react';
import { Project } from './types';

type Tab = 'eu' | 'projetos' | 'contatos';
const TABS: Tab[] = ['eu', 'projetos', 'contatos'];

const TAB_ICONS: Record<Tab, React.ElementType> = {
  eu: User,
  projetos: Briefcase,
  contatos: Phone
};

const FORMATIONS: Record<Tab, number[]> = {
  eu: [65, 45, 25, 0],
  projetos: [10, 10, 10, 10],
  contatos: [0, 25, 50, 75],
};

const TRANSLATIONS = {
  pt: {
    tabs: { eu: 'EU', projetos: 'PROJETOS', contatos: 'CONTATOS' },
    viewPhysics: 'Física',
    viewGrid: 'Grid',
    greeting1: 'Opa, tudo certo? Me chamo ',
    greeting2: ', atuo como desenvolvedor e tento diariamente aprimorar meus conhecimentos.',
    cta: 'VEJA MEUS PROJETOS'
  },
  en: {
    tabs: { eu: 'ME', projetos: 'PROJECTS', contatos: 'CONTACTS' },
    viewPhysics: 'Physics',
    viewGrid: 'Grid',
    greeting1: "Hey, what's up? I'm ",
    greeting2: ", a developer trying to improve my skills and learn something new every day.",
    cta: 'VIEW MY PROJECTS'
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('eu');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'physics' | 'grid'>('physics');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [highlightTab, setHighlightTab] = useState<string | null>(null);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const t = TRANSLATIONS[language];
  const constraintsRef = useRef<HTMLDivElement>(null);

  const toggleTheme = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.width ? rect.left + rect.width / 2 : window.innerWidth - 40;
    const y = rect.height ? rect.top + rect.height / 2 : 40;
    
    if (!('startViewTransition' in document)) {
      document.documentElement.classList.toggle('light');
      return;
    }

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = (document as any).startViewTransition(() => {
      document.documentElement.classList.toggle('light');
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveTab(tab);
    }, 600);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const heights = isTransitioning ? [100, 100, 100, 100] : FORMATIONS[activeTab];

  return (
    <div className="min-h-screen bg-[var(--color-base)] p-4 md:p-8 flex items-center justify-center font-sans">
      
      
      <div className="w-full max-w-[1440px] h-[85vh] min-h-[700px] bg-[var(--color-surface)] relative overflow-hidden shadow-2xl flex flex-col border border-[var(--color-border)]">
        
        
        <div className="absolute inset-0 flex items-end z-0 pointer-events-none">
          {heights.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-[var(--color-base)] border-r border-[var(--color-border)] last:border-r-0"
              animate={{ height: `${h}%` }}
              transition={{ 
                duration: 0.6, 
                ease: [0.85, 0, 0.15, 1], 
                delay: isTransitioning ? i * 0.08 : (3 - i) * 0.08 
              }}
            />
          ))}
        </div>

        <MagneticBackground isActive={activeTab === 'eu' || activeTab === 'contatos'} />

        
        <header className="absolute top-0 left-0 z-50 w-full p-4 md:p-10 flex justify-between items-center pointer-events-none h-20 md:h-28">
          <div className="flex items-center gap-2 md:gap-4 pointer-events-auto relative z-[60]">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 flex items-center justify-start group shrink-0 relative"
            >
              <div className={`h-1 bg-[var(--color-text)] transition-all duration-300 ease-out absolute ${isMenuOpen ? 'w-8 rotate-45' : 'w-10 group-hover:w-8 -translate-y-2.5'}`} />
              <div className={`h-1 bg-[var(--color-text)] transition-all duration-300 ease-out absolute ${isMenuOpen ? 'w-0 opacity-0' : 'w-8 group-hover:w-10'}`} />
              <div className={`h-1 bg-[var(--color-text)] transition-all duration-300 ease-out absolute ${isMenuOpen ? 'w-8 -rotate-45' : 'w-6 group-hover:w-8 translate-y-2.5'}`} />
            </button>

            <div className="w-9 h-9 md:w-12 md:h-12 border-[2px] border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center shadow-[2px_2px_0_0_var(--color-border)] transition-colors shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--color-text)]">
                <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="55" fill="currentColor" letterSpacing="-2">
                  JF
                </text>
              </svg>
            </div>
          </div>
          
          
          <div className={`flex flex-row items-center gap-2 md:gap-5 pointer-events-auto transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
            <AnimatePresence>
              {activeTab === 'projetos' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex border-[2px] border-[var(--color-border)] p-0.5 md:p-1 bg-[var(--color-surface)] shadow-[4px_4px_0_0_var(--color-border)] h-9 md:h-14 items-center shrink-0"
                >
                  <button 
                    onClick={() => setViewMode('physics')}
                    className={`h-full px-1.5 md:px-4 flex items-center font-sans text-[9px] md:text-xs font-bold uppercase tracking-widest transition-colors ${viewMode === 'physics' ? 'bg-[var(--color-text)] text-[var(--color-base)]' : 'text-[var(--color-text)] hover:bg-[var(--color-text)]/10'}`}
                  >
                    Física
                  </button>
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`h-full px-1.5 md:px-4 flex items-center font-sans text-[9px] md:text-xs font-bold uppercase tracking-widest transition-colors ${viewMode === 'grid' ? 'bg-[var(--color-text)] text-[var(--color-base)]' : 'text-[var(--color-text)] hover:bg-[var(--color-text)]/10'}`}
                  >
                    Grid
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            
            <LanguageToggle language={language} toggleLanguage={() => setLanguage(l => l === 'pt' ? 'en' : 'pt')} />
            <button 
              onClick={toggleTheme}
              title="Trocar Tema"
              className="after:absolute after:-inset-8 after:bg-transparent after:content-[''] w-9 h-9 md:w-14 md:h-14 rounded-full border-[3px] md:border-[4px] border-[var(--color-border)] flex items-center justify-center group hover:bg-[var(--color-text)] transition-colors overflow-hidden relative shrink-0 shadow-[4px_4px_0_0_var(--color-border)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <div className="w-1/2 h-full absolute left-0 bg-[var(--color-text)] group-hover:bg-[var(--color-surface)] transition-colors pointer-events-none" />
            </button>
          </div>

          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                 initial={{ opacity: 0, x: '-100%' }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: '-100%' }}
                 transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                 className="absolute top-0 left-0 w-full h-full flex flex-row items-center gap-2 md:gap-6 bg-[var(--color-surface)]/70 backdrop-blur-xl px-4 md:px-10 z-50 pointer-events-auto border-b-[2px] border-[var(--color-border)] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
              >
                  <div className="w-24 md:w-12 h-12 shrink-0 md:mr-8" /> 
                  <div className="flex flex-row items-center gap-4 md:gap-10 overflow-x-auto w-full no-scrollbar px-0 md:px-2" style={{ scrollbarWidth: 'none' }}>
                    {TABS.map((tab) => {
                        const Icon = TAB_ICONS[tab];
                        return (
                        <button
                          key={tab}
                          onClick={() => {
                            handleTabChange(tab);
                            setIsMenuOpen(false);
                          }}
                          className={`relative flex items-center justify-center text-left font-display font-bold text-xs md:text-xl uppercase tracking-wider md:tracking-widest transition-all whitespace-nowrap px-3 md:px-3 py-2 shrink-0 ${
                            activeTab === tab 
                              ? 'text-[var(--color-text)] scale-105 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]' 
                              : highlightTab === tab
                                ? 'text-[var(--color-text)] scale-110 animate-pulse drop-shadow-[0_0_15px_var(--color-text)]'
                                : 'text-[var(--color-text)]/40 hover:text-[var(--color-text)] hover:scale-105'
                          }`}
                        >
                          <span className="hidden md:block relative z-10">{t.tabs[tab]}</span>
                          <span className="md:hidden relative z-10 flex items-center justify-center">
                            <Icon className="w-5 h-5" strokeWidth={2.5} />
                          </span>
                        </button>
                      );
                    })}
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        
        <main className="relative z-20 flex-1 w-full h-full" ref={constraintsRef}>
          
          <AnimatePresence>
            {!isTransitioning && activeTab === 'eu' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pt-20 pb-8 px-6 md:pt-32 md:pb-12 md:px-12 lg:px-24 flex flex-col pointer-events-auto z-10 overflow-y-auto"
              >
                {/* Top Section: Text and Photo */}
                <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-12 mt-0 md:mt-8">
                  <div className="w-full md:w-1/2 flex flex-col text-left md:mt-12 lg:mt-16 gap-6 md:gap-10">
                    <h1 className="font-display font-bold text-xl md:text-2xl lg:text-3xl leading-[1.4] tracking-tighter text-[var(--color-text)]">
                      {t.greeting1} 
                      <span className="inline-block mx-2 px-3 py-1 bg-[var(--color-text)] text-[var(--color-surface)] -skew-x-12 hover:skew-x-0 hover:scale-110 transition-all cursor-crosshair">
                        Jorge
                      </span>
                      {t.greeting2}
                    </h1>
                    
                    <div className="w-full flex justify-start">
                      <AsciiCTA targetText={t.cta} onClick={() => {
                        setIsMenuOpen(true);
                        setHighlightTab('projetos');
                        setTimeout(() => setHighlightTab(null), 3500);
                      }} />
                    </div>
                  </div>
                  <MagneticPhoto />
                </div>

                <div className="w-full mt-auto flex flex-col pb-4">
                  <SkillsMarquee />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isTransitioning && activeTab === 'projetos' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col"
              >
                <AnimatePresence mode="wait">
                  {viewMode === 'physics' ? (
                    <motion.div
                      key="physics"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none opacity-5">
                         <h2 className="font-display font-bold text-[4rem] sm:text-[6rem] md:text-[12rem] text-[var(--color-text)] leading-none tracking-tighter">
                           DESLIZE
                         </h2>
                      </div>
                      <ProjectConstellation 
                        projects={projects[language]} 
                        onProjectClick={setSelectedProject} 
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="grid"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="absolute inset-0 pt-24 md:pt-36 pb-12 overflow-y-auto pointer-events-auto z-40"
                    >
                      <div className="w-full max-w-4xl mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 auto-rows-max">
                        {projects[language].map(project => (
                          <ProjectGridCard key={project.id} project={project} onClick={setSelectedProject} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isTransitioning && activeTab === 'contatos' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-6 md:p-10"
              >
                <div className="absolute top-28 md:top-40 left-6 md:left-24 flex flex-col gap-4 md:gap-6 z-30 pointer-events-auto">
                  {[
                    { label: 'EMAIL', color: 'hover:text-red-500', href: 'mailto:jorgefelipe0299@gmail.com' },
                    { label: 'GITHUB', color: 'hover:text-[var(--color-text)]', href: 'https://github.com/JjorgeF' },
                    { label: 'LINKEDIN', color: 'hover:text-blue-500', href: 'https://linkedin.com/in/jorgefelipe0299' }
                  ].map((link) => (
                    <a 
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={`font-display font-extrabold text-4xl md:text-6xl tracking-tighter text-[var(--color-text)]/40 inline-block w-fit transition-all duration-300 ${link.color}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CultModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}

