const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/projects=\{projects\}/g, "projects={projects[language]}");
content = content.replace(/projects\.map/g, "projects[language].map");

fs.writeFileSync('src/App.tsx', content);
console.log('Patched projects');
