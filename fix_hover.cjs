const fs = require('fs');

function fixHoverBug(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find lines with hover:translate-x-1 etc
    const lines = content.split('\n');
    let modified = false;
    
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('hover:translate-x-1')) {
            // Check if there's an invisible pseudo-element to expand hover area
            if (!content.includes('after:absolute') || !content.includes('after:-inset-4')) {
                // If it's a component with a button or div that shakes, we add an outer wrapper 
                // OR we add pseudo-elements that don't move when the button moves
                
                // For simplicity, we can add `after:absolute after:inset-[-10px] after:content-['']`
                // to make the hit area larger than the visual button so it doesn't lose hover
                // when it shrinks/moves.
                
                if (lines[i].includes('className=')) {
                    lines[i] = lines[i].replace('className="', 'className="after:absolute after:-inset-4 after:content-[\\"\\"] ');
                    modified = true;
                } else if (lines[i].includes('className={`')) {
                    lines[i] = lines[i].replace('className={`', 'className={`after:absolute after:-inset-4 after:content-[\\"\\"] ');
                    modified = true;
                }
            }
        }
    }
    
    if (modified) {
        fs.writeFileSync(filePath, lines.join('\n'));
        console.log(`Fixed ${filePath}`);
    }
}

fixHoverBug('src/App.tsx');
fixHoverBug('src/components/LanguageToggle.tsx');
fixHoverBug('src/components/ProjectGridCard.tsx');

