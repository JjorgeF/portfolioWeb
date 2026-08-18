const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldGreeting = `                      Opa, tudo certo? Me chamo 
                      <span className="inline-block mx-2 px-3 py-1 bg-[var(--color-text)] text-[var(--color-surface)] -skew-x-12 hover:skew-x-0 hover:scale-110 transition-all cursor-crosshair">
                        Jorge
                      </span>
                      , atuo como desenvolvedor e tento diariamente aprimorar meus conhecimentos.`;

const newGreeting = `                      {t.greeting1} 
                      <span className="inline-block mx-2 px-3 py-1 bg-[var(--color-text)] text-[var(--color-surface)] -skew-x-12 hover:skew-x-0 hover:scale-110 transition-all cursor-crosshair">
                        Jorge
                      </span>
                      {t.greeting2}`;

content = content.replace(oldGreeting, newGreeting);

fs.writeFileSync('src/App.tsx', content);
console.log('Patched greeting');
