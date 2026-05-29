const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/directory.json');

function discoverSuggestions() {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        console.log('🔍 Analyzing current map for discovery gaps...\\n');

        const suggestions = [];

        data.forEach(section => {
            // Discovery Logic: If a vertical has fewer than 4 outlets, suggest more
            if (section.outlets.length < 4) {
                suggestions.push({
                    vertical: section.vertical,
                    reason: `Under-represented vertical (only ${section.outlets.length} sources). Needs more depth.`
                });
            }
            
            // Logic: If no newsletters or podcasts exist in a vertical, suggest adding a different channel
            const hasNewsletter = section.outlets.some(o => o.type === 'Newsletter');
            const hasPodcast = section.outlets.some(o => o.type === 'Podcast');
            
            if (!hasNewsletter) {
                suggestions.push({
                    vertical: section.vertical,
                    reason: `Missing a high-quality Newsletter source.`
                });
            }
            if (!hasPodcast) {
                suggestions.push({
                    vertical: section.vertical,
                    reason: `Missing a high-quality Podcast source.`
                });
            }
        });

        if (suggestions.length === 0) {
            console.log('✅ Directory is currently well-balanced!');
        } else {
            console.log('💡 DISCOVERY SUGGESTIONS:');
            suggestions.forEach((s, i) => {
                console.log(`${i+1}. [${s.vertical}] ${s.reason}`);
            });
        }

    } catch (error) {
        console.error('Error during discovery:', error);
        process.exit(1);
    }
}

discoverSuggestions();
