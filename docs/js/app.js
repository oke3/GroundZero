async function init() {
    const searchInput = document.getElementById('searchInput');
    const container = document.getElementById('verticalsContainer');

    const data = [
  {
    "vertical": "Artificial Intelligence",
    "emoji": "🤖",
    "outlets": [
      {
        "name": "MIT Technology Review",
        "url": "https://www.technologyreview.com/topic/artificial-intelligence/",
        "focus": "High-level AI research and societal impact",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "OpenAI Blog",
        "url": "https://openai.com/blog",
        "focus": "Official updates and research from OpenAI",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "The Verge (AI)",
        "url": "https://www.theverge.com/ai-artificial-intelligence",
        "focus": "Consumer-facing AI news and trends",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "AI News",
        "url": "https://www.artificialintelligence-news.com/",
        "focus": "Industry-specific AI developments",
        "type": "Website",
        "tier": "Niche"
      },
      {
        "name": "The Rundown AI",
        "url": "https://www.therundown.ai/",
        "focus": "Daily AI news and tools",
        "type": "Newsletter",
        "tier": "Primary"
      }
    ]
  },
  {
    "vertical": "Cybersecurity",
    "emoji": "🛡️",
    "outlets": [
      {
        "name": "Krebs on Security",
        "url": "https://krebsonsecurity.com/",
        "focus": "Investigative reporting on cybercrime",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/",
        "focus": "Breaking news on ransomware and security flaws",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "The Hacker News",
        "url": "https://thehackernews.com/",
        "focus": "General cybersecurity news and tutorials",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Dark Reading",
        "url": "https://www.darkreading.com/",
        "focus": "Enterprise security and risk management",
        "type": "Website",
        "tier": "Niche"
      },
      {
        "name": "Darknet Diaries",
        "url": "https://darknetdiaries.com/",
        "focus": "True stories from the dark side of the internet",
        "type": "Podcast",
        "tier": "Primary"
      }
    ]
  },
  {
    "vertical": "Cloud Computing",
    "emoji": "☁️",
    "outlets": [
      {
        "name": "AWS Blog",
        "url": "https://aws.amazon.com/blogs/",
        "focus": "Official Amazon Web Services updates",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Azure Blog",
        "url": "https://azure.microsoft.com/blog/",
        "focus": "Official Microsoft Azure updates",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Google Cloud Blog",
        "url": "https://cloud.google.com/blog/",
        "focus": "Official Google Cloud updates",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Cloud Computing News",
        "url": "https://cloudcomputingnews.net/",
        "focus": "General cloud infrastructure and SaaS trends",
        "type": "Website",
        "tier": "Niche"
      }
    ]
  },
  {
    "vertical": "Software Engineering",
    "emoji": "💻",
    "outlets": [
      {
        "name": "InfoQ",
        "url": "https://www.infoq.com/",
        "focus": "Software architecture and development patterns",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Stack Overflow Blog",
        "url": "https://stackoverflow.blog/",
        "focus": "Developer community insights and trends",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Hacker News",
        "url": "https://news.ycombinator.com/",
        "focus": "Community-curated tech and startup news",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "DZone",
        "url": "https://dzone.com/",
        "focus": "Developer knowledge sharing and tutorials",
        "type": "Website",
        "tier": "Niche"
      }
    ]
  },
  {
    "vertical": "Consumer Electronics",
    "emoji": "📱",
    "outlets": [
      {
        "name": "CNET",
        "url": "https://www.cnet.com/",
        "focus": "Product reviews and consumer guides",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Engadget",
        "url": "https://www.engadget.com/",
        "focus": "Gadget news and hands-on reviews",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Wired",
        "url": "https://www.wired.com/",
        "focus": "Deep dives into tech culture and hardware",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "TechCrunch",
        "url": "https://techcrunch.com/",
        "focus": "Startup news and consumer tech trends",
        "type": "Website",
        "tier": "Primary"
      }
    ]
  },
  {
    "vertical": "FinTech",
    "emoji": "💰",
    "outlets": [
      {
        "name": "Finextra",
        "url": "https://www.finextra.com/",
        "focus": "Financial technology news and analysis",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "The Financial Brand",
        "url": "https://thefinancialbrand.com/",
        "focus": "Digital banking and financial services strategy",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "FinTech Futures",
        "url": "https://www.fintechfutures.com/",
        "focus": "Insights into the future of finance",
        "type": "Website",
        "tier": "Niche"
      }
    ]
  },
  {
    "vertical": "HealthTech",
    "emoji": "🏥",
    "outlets": [
      {
        "name": "MobiHealthNews",
        "url": "https://www.mobihealthnews.com/",
        "focus": "Healthcare IT and digital health news",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Digital Health",
        "url": "https://digitalhealth.net/",
        "focus": "Cutting-edge health technology",
        "type": "Website",
        "tier": "Niche"
      }
    ]
  },
  {
    "vertical": "Biotech",
    "emoji": "🧬",
    "outlets": [
      {
        "name": "Fierce Biotech",
        "url": "https://www.fiercebiotech.com/",
        "focus": "Drug discovery and biotech industry news",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "BioSpace",
        "url": "https://www.biospace.com/",
        "focus": "Biopharma news and career resources",
        "type": "Website",
        "tier": "Primary"
      }
    ]
  },
  {
    "vertical": "Gaming & XR",
    "emoji": "🎮",
    "outlets": [
      {
        "name": "IGN",
        "url": "https://www.ign.com/",
        "focus": "Comprehensive gaming and entertainment news",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Road to VR",
        "url": "https://www.roadtovr.com/",
        "focus": "Deep dives into Virtual and Augmented Reality",
        "type": "Website",
        "tier": "Niche"
      },
                      {
                        "name": "Kotaku",
                        "url": "https://kotaku.com/",
                        "focus": "Gaming culture and industry commentary",
                        "type": "Website",
                        "tier": "Primary"
                      }

    ]
  },
  {
    "vertical": "Web3 & Blockchain",
    "emoji": "⛓️",
    "outlets": [
      {
        "name": "CoinDesk",
        "url": "https://www.coindesk.com/",
        "focus": "The leading source for crypto and blockchain news",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "Decrypt",
        "url": "https://decrypt.co/",
        "focus": "Accessible crypto and Web3 reporting",
        "type": "Website",
        "tier": "Primary"
      },
      {
        "name": "The Block",
        "url": "https://www.theblock.co/",
        "focus": "Deep data-driven analysis of blockchain",
        "type": "Website",
        "tier": "Niche"
      }
    ]
  }
];

    function render(filter = '') {
        container.innerHTML = '';
        const query = filter.toLowerCase();

        const filteredData = data.map(vertical => {
            const filteredOutlets = vertical.outlets.filter(outlet => 
                outlet.name.toLowerCase().includes(query) || 
                vertical.vertical.toLowerCase().includes(query) ||
                outlet.focus.toLowerCase().includes(query)
            );
            return { ...vertical, outlets: filteredOutlets };
        }).filter(vertical => vertical.outlets.length > 0);

        if (filteredData.length === 0) {
            container.innerHTML = '<div class="loading">No outlets found matching your search.</div>';
            return;
        }

        filteredData.forEach(section => {
            const card = document.createElement('div');
            card.className = 'vertical-card';
            
            card.innerHTML = `
                <div class="vertical-header">
                    <span>${section.emoji}</span>
                    <h2>${section.vertical}</h2>
                </div>
                <ul class="outlet-list">
                    ${section.outlets.map(outlet => `
                        <li class="outlet-item">
                            <div class="outlet-main">
                                <a href="${outlet.url}" target="_blank" class="outlet-name">
                                    ${outlet.name} ${outlet.tier === 'Primary' ? '⭐' : ''}
                                </a>
                                <span class="outlet-type">${outlet.type}</span>
                            </div>
                            <span class="outlet-focus">${outlet.focus}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
            container.appendChild(card);
        });
    }

    searchInput.addEventListener('input', (e) => render(e.target.value));
    render();
}

init();
