const fs = require('fs');

function addZIndexToPseudo(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Ensure after is completely invisible but blocks mouse events above the button's translation
    content = content.replace(/after:-inset-4/g, 'after:-inset-8 after:bg-transparent');
    fs.writeFileSync(filePath, content);
}

addZIndexToPseudo('src/App.tsx');
addZIndexToPseudo('src/components/LanguageToggle.tsx');
addZIndexToPseudo('src/components/ProjectGridCard.tsx');
console.log('Fixed hit area expansion');
