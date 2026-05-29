const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/directory.json');
const OUTPUT_FILE = path.join(__dirname, '../directory.md');

function generateMarkdown() {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    
    let markdown = '# 📰 Technology News Directory\n\n';
    markdown += 'This directory provides a curated list of news outlets categorized by technology vertical.\n\n';

    data.forEach(section => {
      markdown += `## ${section.emoji} ${section.vertical}\n`;
      markdown += `| Outlet Name | URL | Focus |\n`;
      markdown += `|-------------|-----|-------|\n`;
      
      section.outlets.forEach(outlet => {
        const urlMarkdown = `[${outlet.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}](${outlet.url})`;
        const typeBadge = ` \`${outlet.type}\``;
        const tierBadge = outlet.tier === 'Primary' ? ' ⭐' : '';
        markdown += `| ${outlet.name}${tierBadge} | ${urlMarkdown}${typeBadge} | ${outlet.focus} |\n`;
      });
      
      markdown += '\n';
    });

    fs.writeFileSync(OUTPUT_FILE, markdown, 'utf8');
    console.log(`Successfully generated ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating directory:', error);
    process.exit(1);
  }
}

generateMarkdown();
