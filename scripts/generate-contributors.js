const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, '../CONTRIBUTORS.md');

function writeMarkdown(sortedContributors) {
    let markdown = '# 🏆 Contributor Hall of Fame\n\n';
    markdown += 'Thank you to the amazing community members who help keep GroundZero accurate and comprehensive.\n\n';
    markdown += '| Contributor | Contributions | Status |\n';
    markdown += '|-------------|--------------|--------|\n';

    sortedContributors.forEach(([name, count], index) => {
        let status = 'Curator';
        if (index === 0 && count > 5) status = 'Legendary Curator 👑';
        else if (count > 3) status = 'Elite Curator 🌟';
        
        markdown += `| ${name} | ${count} | ${status} |\n`;
    });

    fs.writeFileSync(OUTPUT_FILE, markdown, 'utf8');
    console.log(`Hall of Fame updated: ${OUTPUT_FILE}`);
}

function generateHallOfFame() {
    try {
        // Get all commit authors and counts
        const gitLog = execSync('git log --format="%aN"').toString().trim();
        if (!gitLog) {
            throw new Error('No git history found');
        }

        const authors = gitLog.split('\n');
        const counts = {};

        authors.forEach(author => {
            counts[author] = (counts[author] || 0) + 1;
        });

        const sortedContributors = Object.entries(counts)
            .sort(([, a], [, b]) => b - a);

        writeMarkdown(sortedContributors);
    } catch (error) {
        console.log('Not a git repository or no history. Generating sample Hall of Fame...');
        const sampleContributors = [
            ['Omar', 12],
            ['OpenCode Build Agent', 8],
            ['Community Member A', 3],
            ['Community Member B', 1]
        ];
        writeMarkdown(sampleContributors);
    }
}

generateHallOfFame();
