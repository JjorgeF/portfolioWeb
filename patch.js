const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target = `                     {TABS.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => {
                            handleTabChange(tab);
                            setIsMenuOpen(false);
                          }}
                          className={\`text-left font-display font-bold text-xs md:text-xl uppercase tracking-widest transition-all whitespace-nowrap \${
                            activeTab === tab 
                              ? 'text-[var(--color-text)] scale-105 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]' 
                              : highlightTab === tab
                                ? 'text-[var(--color-base)] bg-[var(--color-text)] px-2 py-1 scale-110 shadow-[0_0_15px_var(--color-text)] animate-pulse'
                                : 'text-[var(--color-text)]/40 hover:text-[var(--color-text)] hover:scale-105'
                          }\`}
                        >
                          {tab}
                        </button>
                     ))}`;

const replacement = `                     {TABS.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => {
                            handleTabChange(tab);
                            setIsMenuOpen(false);
                          }}
                          className={\`relative flex items-center justify-center text-left font-display font-bold text-xs md:text-xl uppercase tracking-widest transition-all whitespace-nowrap px-4 py-2 overflow-hidden \${
                            activeTab === tab 
                              ? 'text-[var(--color-text)] scale-105 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]' 
                              : highlightTab === tab
                                ? 'text-[var(--color-text)] scale-110'
                                : 'text-[var(--color-text)]/40 hover:text-[var(--color-text)] hover:scale-105'
                          }\`}
                        >
                          {highlightTab === tab && (
                            <>
                              <span className="absolute inset-[-500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,var(--color-text)_100%)] opacity-80" />
                              <span className="absolute inset-[2px] bg-[var(--color-surface)]" />
                            </>
                          )}
                          <span className="relative z-10">{tab}</span>
                        </button>
                     ))}`;

content = content.replace(target, replacement);
fs.writeFileSync('src/App.tsx', content);
console.log('Patched');
