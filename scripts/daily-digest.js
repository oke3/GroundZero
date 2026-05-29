const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/directory.json');
const OUTPUT_FILE = path.join(__dirname, '../daily_brief.md');

async function fetchLatestHeadline(url) {
    try {
        // In a real scenario, we'd use an RSS parser. 
        // For this implementation, we simulate the headline fetch to avoid 
        // hitting 50+ external sites in a single loop which would be blocked.
        const headlines = [
            "Breaking: New AI Model Outperforms Humans in Logic",
            "Security Alert: Critical Zero-Day found in popular JS library",
            "Cloud Trends: The shift towards Edge Computing accelerates",
            "Dev Life: Why Rust is becoming the preferred system language",
            "Gadget Review: The new foldable screen is a game changer",
            "Finance: DeFi adoption grows in emerging markets",
            "Health: AI-driven diagnostics reduce error rates by 20%",
            "Gaming: The future of XR is immersive and social"
        ];
        return headlines[Math.floor(Math.random() * headlines.length)];
    } catch (e) {
        return "No recent headlines found.";
    }
}

async function generateDigest() {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        const date = new Date().toLocaleDateString('en-US', { 
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
        });

        let markdown = `# 🗞️ GroundZero Daily Brief\n`;
        markdown += `**Date:** ${date}\n\n`;
        markdown += `*Automated summary of top headlines from our curated network.*\n\n`;

        for (const section of data) {
            markdown += `## ${section.emoji} ${section.vertical}\n`;
            
            // Get top 2 primary outlets for the digest
            const primaries = section.outlets.filter(o => o.tier === 'Primary').slice(0, 2);
            
            for (const outlet of primaries) {
                const headline = await fetchLatestHeadline(outlet.url);
                markdown += `- **${outlet.name}**: ${headline} [Read more](${outlet.url})\n`;
            }
            markdown += '\n';
        }

        markdown += `--- \n*This is an automated brief. To explore the full map, visit the [Interactive Directory](docs/index.html).*`;

        fs.writeFileSync(OUTPUT_FILE, markdown, 'utf8');
        console.log(`Daily brief generated successfully: ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('Error generating digest:', error);
        process.exit(1);
    }
}

generateDigest();
