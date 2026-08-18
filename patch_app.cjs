const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add imports
content = content.replace(
  "import { AsciiCTA } from './components/AsciiCTA';",
  "import { AsciiCTA } from './components/AsciiCTA';\nimport { LanguageToggle } from './components/LanguageToggle';"
);

// 2. Add TRANSLATIONS object before export default function App()
const translations = `const TRANSLATIONS = {
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

export default function App() {`;

content = content.replace("export default function App() {", translations);

// 3. Add language state
content = content.replace(
  "const [highlightTab, setHighlightTab] = useState<string | null>(null);",
  "const [highlightTab, setHighlightTab] = useState<string | null>(null);\n  const [language, setLanguage] = useState<'pt' | 'en'>('pt');\n  const t = TRANSLATIONS[language];"
);

// 4. Update Tab Display Names and Buttons
content = content.replace(
  ">Física<",
  ">{t.viewPhysics}<"
);
content = content.replace(
  ">Grid<",
  ">{t.viewGrid}<"
);

content = content.replace(
  /<span className="relative z-10">\{tab\}<\/span>/g,
  '<span className="relative z-10">{t.tabs[tab]}</span>'
);

// 5. Update LanguageToggle in the header
const themeToggle = `<button \n              onClick={toggleTheme}`;
const languageToggle = `<LanguageToggle language={language} toggleLanguage={() => setLanguage(l => l === 'pt' ? 'en' : 'pt')} />\n            <button \n              onClick={toggleTheme}`;
content = content.replace(themeToggle, languageToggle);

// 6. Update Intro text
content = content.replace(
  `Opa, tudo certo? Me chamo \n                        <span className="bg-[var(--color-text)] text-[var(--color-base)] px-2 md:px-3 py-1 font-mono italic inline-block transform -skew-x-12 ml-1 mr-1 md:ml-2 md:mr-2 shadow-[4px_4px_0_0_var(--color-border)]">\n                          Jorge\n                        </span>\n                        , atuo como desenvolvedor e tento diariamente aprimorar meus conhecimentos.`,
  `{t.greeting1}\n                        <span className="bg-[var(--color-text)] text-[var(--color-base)] px-2 md:px-3 py-1 font-mono italic inline-block transform -skew-x-12 ml-1 mr-1 md:ml-2 md:mr-2 shadow-[4px_4px_0_0_var(--color-border)]">\n                          Jorge\n                        </span>\n                        {t.greeting2}`
);

// 7. Update CTA
content = content.replace(
  `<AsciiCTA onClick={() => {`,
  `<AsciiCTA targetText={t.cta} onClick={() => {`
);

// 8. Update Projects passing
content = content.replace(
  `projects.map((project, i)`,
  `projects[language].map((project, i)`
);
content = content.replace(
  `projects.map((project)`,
  `projects[language].map((project)`
);

fs.writeFileSync('src/App.tsx', content);
console.log('Patched App.tsx');
