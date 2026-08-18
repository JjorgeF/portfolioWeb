const fs = require('fs');

function fixSyntax(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    // The issue is after:content-[\"\"] is invalid in JSX JSX doesn't like backslashes in class names sometimes.
    // Let's use single quotes inside double quotes, e.g. after:content-['']
    content = content.replace(/after:content-\[\\\"\\\"\]/g, "after:content-['']");
    fs.writeFileSync(filePath, content);
}

fixSyntax('src/App.tsx');
fixSyntax('src/components/LanguageToggle.tsx');
fixSyntax('src/components/ProjectGridCard.tsx');
console.log('Fixed syntax');
