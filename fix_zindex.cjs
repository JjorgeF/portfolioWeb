const fs = require('fs');

function addZIndexToPseudo(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/after:content-\[\"\\\"\"\]/g, 'after:content-[""] after:z-[100]');
    fs.writeFileSync(filePath, content);
}

addZIndexToPseudo('src/App.tsx');
addZIndexToPseudo('src/components/LanguageToggle.tsx');
addZIndexToPseudo('src/components/ProjectGridCard.tsx');
console.log('Added z-index to pseudo elements');
