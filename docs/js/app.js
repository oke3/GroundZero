async function init() {
    const searchInput = document.getElementById('searchInput');
    const container = document.getElementById('verticalsContainer');

    const data = [
  {
    "vertical": "Artificial Intelligence",
    "emoji": "🤖",
    "outlets": [
      { "name": "MIT Technology Review", "url": "https://www.technologyreview.com/topic/artificial-intelligence/", "focus": "High-level AI research and societal impact", "type": "Website", "tier": "Primary" },
      { "name": "OpenAI Blog", "url": "https://openai.com/blog", "focus": "Official updates and research from OpenAI", "type": "Website", "tier": "Primary" },
      { "name": "DeepMind Blog", "url": "https://deepmind.google/blog/", "focus": "DeepMind research and breakthroughs", "type": "Website", "tier": "Primary" },
      { "name": "Google AI Blog", "url": "https://ai.googleblog.com/", "focus": "Google AI research and products", "type": "Website", "tier": "Primary" },
      { "name": "Meta AI Blog", "url": "https://ai.meta.com/blog/", "focus": "Meta AI research and open-source", "type": "Website", "tier": "Primary" },
      { "name": "Anthropic Blog", "url": "https://www.anthropic.com/blog", "focus": "AI safety and frontier models", "type": "Website", "tier": "Primary" },
      { "name": "The Verge (AI)", "url": "https://www.theverge.com/ai-artificial-intelligence", "focus": "Consumer-facing AI news", "type": "Website", "tier": "Primary" },
      { "name": "VentureBeat AI", "url": "https://venturebeat.com/category/ai/", "focus": "AI business and investment news", "type": "Website", "tier": "Primary" },
      { "name": "AI News", "url": "https://www.artificialintelligence-news.com/", "focus": "Industry-specific AI developments", "type": "Website", "tier": "Niche" },
      { "name": "The Rundown AI", "url": "https://www.therundown.ai/", "focus": "Daily AI news and tools", "type": "Newsletter", "tier": "Primary" },
      { "name": "Import AI", "url": "https://importai.substack.com/", "focus": "Weekly AI research roundup", "type": "Newsletter", "tier": "Primary" },
      { "name": "The Batch (Andrew Ng)", "url": "https://www.deeplearning.ai/the-batch/", "focus": "AI news from DeepLearning.AI", "type": "Newsletter", "tier": "Primary" },
      { "name": "The AI Podcast (NVIDIA)", "url": "https://blogs.nvidia.com/blog/category/podcasts/", "focus": "Cutting-edge AI research interviews", "type": "Podcast", "tier": "Primary" },
      { "name": "Lex Fridman Podcast", "url": "https://lexfridman.com/podcast/", "focus": "Deep AI and science conversations", "type": "Podcast", "tier": "Primary" },
      { "name": "Hugging Face Blog", "url": "https://huggingface.co/blog", "focus": "Open-source ML community", "type": "Website", "tier": "Niche" },
      { "name": "Stability AI Blog", "url": "https://stability.ai/blog", "focus": "Generative AI and open models", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Cybersecurity",
    "emoji": "🛡️",
    "outlets": [
      { "name": "Krebs on Security", "url": "https://krebsonsecurity.com/", "focus": "Investigative cybercrime reporting", "type": "Website", "tier": "Primary" },
      { "name": "BleepingComputer", "url": "https://www.bleepingcomputer.com/", "focus": "Breaking malware and security news", "type": "Website", "tier": "Primary" },
      { "name": "The Hacker News", "url": "https://thehackernews.com/", "focus": "General cybersecurity news", "type": "Website", "tier": "Primary" },
      { "name": "Dark Reading", "url": "https://www.darkreading.com/", "focus": "Enterprise security and risk", "type": "Website", "tier": "Primary" },
      { "name": "The Record (Recorded Future)", "url": "https://therecord.media/", "focus": "Original cybercrime journalism", "type": "Website", "tier": "Primary" },
      { "name": "CyberScoop", "url": "https://cyberscoop.com/", "focus": "Policy and government cyber news", "type": "Website", "tier": "Primary" },
      { "name": "Mandiant Blog", "url": "https://www.mandiant.com/resources/blog", "focus": "Threat intelligence reports", "type": "Website", "tier": "Primary" },
      { "name": "Unit 42 (Palo Alto)", "url": "https://unit42.paloaltonetworks.com/", "focus": "Threat research and analysis", "type": "Website", "tier": "Primary" },
      { "name": "Securelist (Kaspersky)", "url": "https://securelist.com/", "focus": "Global threat landscape", "type": "Website", "tier": "Primary" },
      { "name": "Troy Hunt's Blog", "url": "https://www.troyhunt.com/", "focus": "Data breaches and security education", "type": "Website", "tier": "Primary" },
      { "name": "Schneier on Security", "url": "https://www.schneier.com/", "focus": "Security thinking and cryptography", "type": "Website", "tier": "Primary" },
      { "name": "TL;DR Sec", "url": "https://tldrsec.com/", "focus": "Daily high-signal security news", "type": "Newsletter", "tier": "Primary" },
      { "name": "Darknet Diaries", "url": "https://darknetdiaries.com/", "focus": "True stories from the dark side", "type": "Podcast", "tier": "Primary" },
      { "name": "Security Now", "url": "https://twit.tv/shows/security-now", "focus": "Weekly security deep-dive", "type": "Podcast", "tier": "Primary" }
    ]
  },
  {
    "vertical": "Cloud Computing",
    "emoji": "☁️",
    "outlets": [
      { "name": "AWS Blog", "url": "https://aws.amazon.com/blogs/", "focus": "Official Amazon Web Services updates", "type": "Website", "tier": "Primary" },
      { "name": "AWS Architecture Blog", "url": "https://aws.amazon.com/blogs/architecture/", "focus": "AWS architectural best practices", "type": "Website", "tier": "Primary" },
      { "name": "Azure Blog", "url": "https://azure.microsoft.com/blog/", "focus": "Official Microsoft Azure updates", "type": "Website", "tier": "Primary" },
      { "name": "Google Cloud Blog", "url": "https://cloud.google.com/blog/", "focus": "Official Google Cloud updates", "type": "Website", "tier": "Primary" },
      { "name": "Last Week in AWS", "url": "https://www.lastweekinaws.com/", "focus": "Unfiltered AWS news and analysis", "type": "Newsletter", "tier": "Primary" },
      { "name": "The New Stack", "url": "https://thenewstack.io/", "focus": "Cloud native and infrastructure news", "type": "Website", "tier": "Primary" },
      { "name": "Cloudflare Blog", "url": "https://blog.cloudflare.com/", "focus": "Internet performance and security", "type": "Website", "tier": "Primary" },
      { "name": "DigitalOcean Blog", "url": "https://www.digitalocean.com/blog", "focus": "Developer cloud tutorials and news", "type": "Website", "tier": "Niche" },
      { "name": "Cloud Computing News", "url": "https://cloudcomputingnews.net/", "focus": "General cloud infrastructure news", "type": "Website", "tier": "Niche" },
      { "name": "Kubernetes Blog", "url": "https://kubernetes.io/blog/", "focus": "Official Kubernetes updates", "type": "Website", "tier": "Niche" },
      { "name": "CNCF Blog", "url": "https://www.cncf.io/blog/", "focus": "Cloud Native Computing Foundation", "type": "Website", "tier": "Niche" },
      { "name": "Cloudcast", "url": "https://www.cloudcast.fm/", "focus": "Deep cloud computing discussions", "type": "Podcast", "tier": "Primary" },
      { "name": "Screaming in the Cloud", "url": "https://www.lastweekinaws.com/podcast/", "focus": "AWS and cloud industry interviews", "type": "Podcast", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Software Engineering",
    "emoji": "💻",
    "outlets": [
      { "name": "InfoQ", "url": "https://www.infoq.com/", "focus": "Software architecture and development", "type": "Website", "tier": "Primary" },
      { "name": "Stack Overflow Blog", "url": "https://stackoverflow.blog/", "focus": "Developer community insights", "type": "Website", "tier": "Primary" },
      { "name": "Hacker News", "url": "https://news.ycombinator.com/", "focus": "Community-curated tech and startup news", "type": "Website", "tier": "Primary" },
      { "name": "DZone", "url": "https://dzone.com/", "focus": "Developer knowledge sharing", "type": "Website", "tier": "Niche" },
      { "name": "The Pragmatic Engineer", "url": "https://blog.pragmaticengineer.com/", "focus": "Engineering management and career", "type": "Newsletter", "tier": "Primary" },
      { "name": "Software Engineering Daily", "url": "https://softwareengineeringdaily.com/", "focus": "Daily technical interviews", "type": "Podcast", "tier": "Primary" },
      { "name": "GitHub Blog", "url": "https://github.blog/", "focus": "Developer product and culture", "type": "Website", "tier": "Primary" },
      { "name": "Google Developer Blog", "url": "https://developers.googleblog.com/", "focus": "Google platform and tools", "type": "Website", "tier": "Primary" },
      { "name": "Apple Developer Blog", "url": "https://developer.apple.com/news/", "focus": "Apple ecosystem development", "type": "Website", "tier": "Primary" },
      { "name": "Netflix TechBlog", "url": "https://netflixtechblog.com/", "focus": "Netflix engineering deep-dives", "type": "Website", "tier": "Primary" },
      { "name": "Uber Engineering", "url": "https://www.uber.com/en-US/blog/engineering/", "focus": "Uber infrastructure and systems", "type": "Website", "tier": "Primary" },
      { "name": "Discord Engineering", "url": "https://discord.com/category/engineering", "focus": "Real-time communication systems", "type": "Website", "tier": "Niche" },
      { "name": "Slack Engineering", "url": "https://slack.engineering/", "focus": "Engineering at scale", "type": "Website", "tier": "Niche" },
      { "name": "Shopify Engineering", "url": "https://shopify.engineering/", "focus": "E-commerce platform engineering", "type": "Website", "tier": "Niche" },
      { "name": "Airbnb Engineering", "url": "https://medium.com/airbnb-engineering", "focus": "Travel and marketplace engineering", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Consumer Electronics",
    "emoji": "📱",
    "outlets": [
      { "name": "CNET", "url": "https://www.cnet.com/", "focus": "Product reviews and consumer guides", "type": "Website", "tier": "Primary" },
      { "name": "Engadget", "url": "https://www.engadget.com/", "focus": "Gadget news and reviews", "type": "Website", "tier": "Primary" },
      { "name": "Wired", "url": "https://www.wired.com/", "focus": "Tech culture and hardware", "type": "Website", "tier": "Primary" },
      { "name": "The Verge", "url": "https://www.theverge.com/", "focus": "Consumer tech and policy", "type": "Website", "tier": "Primary" },
      { "name": "TechCrunch", "url": "https://techcrunch.com/", "focus": "Startup and consumer tech", "type": "Website", "tier": "Primary" },
      { "name": "Ars Technica", "url": "https://arstechnica.com/", "focus": "Deep tech analysis", "type": "Website", "tier": "Primary" },
      { "name": "9to5Google", "url": "https://9to5google.com/", "focus": "Pixel and Google ecosystem", "type": "Website", "tier": "Niche" },
      { "name": "9to5Mac", "url": "https://9to5mac.com/", "focus": "Apple product news", "type": "Website", "tier": "Niche" },
      { "name": "Android Authority", "url": "https://www.androidauthority.com/", "focus": "Android ecosystem and devices", "type": "Website", "tier": "Niche" },
      { "name": "MacRumors", "url": "https://www.macrumors.com/", "focus": "Apple rumors and updates", "type": "Website", "tier": "Niche" },
      { "name": "Tom's Guide", "url": "https://www.tomsguide.com/", "focus": "Hardware reviews and guides", "type": "Website", "tier": "Niche" },
      { "name": "AnandTech", "url": "https://www.anandtech.com/", "focus": "In-depth chip and system analysis", "type": "Website", "tier": "Primary" },
      { "name": "The Vergecast", "url": "https://www.theverge.com/the-vergecast", "focus": "Weekly tech discussion", "type": "Podcast", "tier": "Primary" },
      { "name": "Waveform (MKBHD)", "url": "https://www.youtube.com/@MKBHD", "focus": "Tech reviews and interviews", "type": "Podcast", "tier": "Primary" },
      { "name": "Morning Brew Tech", "url": "https://www.morningbrew.com/tech", "focus": "Daily tech business news", "type": "Newsletter", "tier": "Primary" }
    ]
  },
  {
    "vertical": "FinTech",
    "emoji": "💰",
    "outlets": [
      { "name": "Finextra", "url": "https://www.finextra.com/", "focus": "Financial technology news", "type": "Website", "tier": "Primary" },
      { "name": "The Financial Brand", "url": "https://thefinancialbrand.com/", "focus": "Digital banking strategy", "type": "Website", "tier": "Primary" },
      { "name": "FinTech Futures", "url": "https://www.fintechfutures.com/", "focus": "Future of finance", "type": "Website", "tier": "Niche" },
      { "name": "LendIt Fintech", "url": "https://www.lenditfintech.com/", "focus": "Financial services innovation", "type": "Website", "tier": "Primary" },
      { "name": "Fintech Nexus", "url": "https://www.fintechnexus.com/", "focus": "Payments and lending news", "type": "Website", "tier": "Niche" },
      { "name": "TechCrunch Fintech", "url": "https://techcrunch.com/category/finance/", "focus": "Fintech startup news", "type": "Website", "tier": "Primary" },
      { "name": "Stripe Blog", "url": "https://stripe.com/blog", "focus": "Online payments and economics", "type": "Website", "tier": "Primary" },
      { "name": "Square/Cash App Blog", "url": "https://squareup.com/us/en/townsquare", "focus": "Seller and payment tools", "type": "Website", "tier": "Niche" },
      { "name": "Plum Fintech Podcast", "url": "https://plumfintech.com/", "focus": "Fintech industry interviews", "type": "Podcast", "tier": "Niche" },
      { "name": "Breaking Banks", "url": "https://breakingbanks.com/", "focus": "Global fintech disruption", "type": "Podcast", "tier": "Primary" }
    ]
  },
  {
    "vertical": "HealthTech",
    "emoji": "🏥",
    "outlets": [
      { "name": "MobiHealthNews", "url": "https://www.mobihealthnews.com/", "focus": "Healthcare IT and digital health", "type": "Website", "tier": "Primary" },
      { "name": "Digital Health", "url": "https://digitalhealth.net/", "focus": "Cutting-edge health technology", "type": "Website", "tier": "Niche" },
      { "name": "Stat News", "url": "https://www.statnews.com/", "focus": "Health, medicine and life sciences", "type": "Website", "tier": "Primary" },
      { "name": "Healthcare IT News", "url": "https://www.healthcareitnews.com/", "focus": "Digital health IT strategy", "type": "Website", "tier": "Primary" },
      { "name": "MedCity News", "url": "https://medcitynews.com/", "focus": "Healthcare business and innovation", "type": "Website", "tier": "Primary" },
      { "name": "MedTech Dive", "url": "https://www.medtechdive.com/", "focus": "Medical device industry", "type": "Website", "tier": "Niche" },
      { "name": "Rock Health", "url": "https://rockhealth.com/", "focus": "Digital health funding and research", "type": "Website", "tier": "Primary" },
      { "name": "FDA Digital Health", "url": "https://www.fda.gov/medical-devices/digital-health-center-excellence", "focus": "Regulatory digital health", "type": "Website", "tier": "Niche" },
      { "name": "NEJM Catalyst", "url": "https://catalyst.nejm.org/", "focus": "Healthcare delivery innovation", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Biotech",
    "emoji": "🧬",
    "outlets": [
      { "name": "Fierce Biotech", "url": "https://www.fiercebiotech.com/", "focus": "Drug discovery and biotech news", "type": "Website", "tier": "Primary" },
      { "name": "BioSpace", "url": "https://www.biospace.com/", "focus": "Biopharma news and careers", "type": "Website", "tier": "Primary" },
      { "name": "Endpoints News", "url": "https://endpointnews.com/", "focus": "Biopharma industry intelligence", "type": "Website", "tier": "Primary" },
      { "name": "Nature Biotechnology", "url": "https://www.nature.com/nbt/", "focus": "High-impact biotech research", "type": "Website", "tier": "Primary" },
      { "name": "GEN (Genetic Engineering News)", "url": "https://www.genengnews.com/", "focus": "Biotechnology industry and science", "type": "Website", "tier": "Primary" },
      { "name": "BioCentury", "url": "https://www.biocentury.com/", "focus": "Business intelligence for biotech", "type": "Website", "tier": "Niche" },
      { "name": "STAT Biotech", "url": "https://www.statnews.com/category/biotech/", "focus": "Biotech investigative reporting", "type": "Website", "tier": "Primary" },
      { "name": "Synbiobeta", "url": "https://www.synbiobeta.com/", "focus": "Synthetic biology community", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Gaming & XR",
    "emoji": "🎮",
    "outlets": [
      { "name": "IGN", "url": "https://www.ign.com/", "focus": "Comprehensive gaming news", "type": "Website", "tier": "Primary" },
      { "name": "Polygon", "url": "https://www.polygon.com/", "focus": "Gaming and pop culture", "type": "Website", "tier": "Primary" },
      { "name": "Kotaku", "url": "https://kotaku.com/", "focus": "Gaming culture and commentary", "type": "Website", "tier": "Primary" },
      { "name": "GamesIndustry.biz", "url": "https://www.gamesindustry.biz/", "focus": "Gaming business and market", "type": "Website", "tier": "Primary" },
      { "name": "Eurogamer", "url": "https://www.eurogamer.net/", "focus": "European gaming perspective", "type": "Website", "tier": "Primary" },
      { "name": "Rock Paper Shotgun", "url": "https://www.rockpapershotgun.com/", "focus": "PC gaming news and reviews", "type": "Website", "tier": "Primary" },
      { "name": "Road to VR", "url": "https://www.roadtovr.com/", "focus": "Virtual and Augmented Reality", "type": "Website", "tier": "Niche" },
      { "name": "UploadVR", "url": "https://www.uploadvr.com/", "focus": "VR and AR specialized news", "type": "Website", "tier": "Niche" },
      { "name": "Mixed News", "url": "https://mixed-news.com/", "focus": "Mixed reality industry", "type": "Website", "tier": "Niche" },
      { "name": "PC Gamer", "url": "https://www.pcgamer.com/", "focus": "PC hardware and gaming", "type": "Website", "tier": "Primary" },
      { "name": "Game Developer (Gamasutra)", "url": "https://www.gamedeveloper.com/", "focus": "Game development and design", "type": "Website", "tier": "Niche" },
      { "name": "Destructoid", "url": "https://www.destructoid.com/", "focus": "Indie and community gaming", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Web3 & Blockchain",
    "emoji": "⛓️",
    "outlets": [
      { "name": "CoinDesk", "url": "https://www.coindesk.com/", "focus": "Crypto and blockchain news", "type": "Website", "tier": "Primary" },
      { "name": "Decrypt", "url": "https://decrypt.co/", "focus": "Accessible crypto reporting", "type": "Website", "tier": "Primary" },
      { "name": "The Block", "url": "https://www.theblock.co/", "focus": "Data-driven blockchain analysis", "type": "Website", "tier": "Niche" },
      { "name": "Cointelegraph", "url": "https://cointelegraph.com/", "focus": "Crypto market news", "type": "Website", "tier": "Primary" },
      { "name": "CoinTelegraph Research", "url": "https://cointelegraph.com/research", "focus": "In-depth blockchain research", "type": "Website", "tier": "Niche" },
      { "name": "Ethereum Blog", "url": "https://blog.ethereum.org/", "focus": "Official Ethereum Foundation updates", "type": "Website", "tier": "Primary" },
      { "name": "Solana Blog", "url": "https://solana.com/news", "focus": "Solana ecosystem news", "type": "Website", "tier": "Niche" },
      { "name": "Bankless", "url": "https://www.bankless.com/", "focus": "Decentralized finance frontier", "type": "Podcast", "tier": "Primary" },
      { "name": "Unchained (Laura Shin)", "url": "https://unchainedcrypto.com/", "focus": "Crypto journalism and interviews", "type": "Podcast", "tier": "Primary" },
      { "name": "Messari", "url": "https://messari.io/", "focus": "Crypto market intelligence", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "SpaceTech",
    "emoji": "🚀",
    "outlets": [
      { "name": "SpaceNews", "url": "https://spacenews.com/", "focus": "Industry standard for space news", "type": "Website", "tier": "Primary" },
      { "name": "NASASpaceFlight", "url": "https://nasaspaceflight.com/", "focus": "Detailed space launch tracking", "type": "Website", "tier": "Primary" },
      { "name": "NASA Blog", "url": "https://blogs.nasa.gov/", "focus": "Official NASA missions and research", "type": "Website", "tier": "Primary" },
      { "name": "Space.com", "url": "https://www.space.com/", "focus": "Consumer space news and features", "type": "Website", "tier": "Primary" },
      { "name": "SpaceX Updates", "url": "https://www.spacex.com/updates/", "focus": "Official SpaceX mission updates", "type": "Website", "tier": "Primary" },
      { "name": "Blue Origin Blog", "url": "https://www.blueorigin.com/news", "focus": "Blue Origin updates", "type": "Website", "tier": "Niche" },
      { "name": "Rocket Lab Blog", "url": "https://www.rocketlabusa.com/updates/", "focus": "Small satellite launch news", "type": "Website", "tier": "Niche" },
      { "name": "The Orbital Index", "url": "https://orbitalindex.com/", "focus": "Weekly space industry newsletter", "type": "Newsletter", "tier": "Primary" },
      { "name": "Payload", "url": "https://payloadspace.com/", "focus": "Space business and policy", "type": "Website", "tier": "Niche" },
      { "name": "European Space Agency", "url": "https://www.esa.int/Science_Exploration", "focus": "European space missions", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "GovTech & RegTech",
    "emoji": "🏛️",
    "outlets": [
      { "name": "GovTech.com", "url": "https://www.govtech.com/", "focus": "Technology in government", "type": "Website", "tier": "Primary" },
      { "name": "Lawfare", "url": "https://www.lawfaremedia.org/", "focus": "National security and law", "type": "Website", "tier": "Primary" },
      { "name": "NextGov", "url": "https://www.nextgov.com/", "focus": "Federal IT and modernization", "type": "Website", "tier": "Primary" },
      { "name": "Route Fifty", "url": "https://www.routefifty.com/", "focus": "State and local government tech", "type": "Website", "tier": "Niche" },
      { "name": "StateScoop", "url": "https://statescoop.com/", "focus": "State government tech", "type": "Website", "tier": "Niche" },
      { "name": "Cipher Brief", "url": "https://www.thecipherbrief.com/", "focus": "National security intelligence", "type": "Website", "tier": "Primary" },
      { "name": "RegTech Analyst", "url": "https://www.regtechanalyst.com/", "focus": "Regulatory technology intelligence", "type": "Website", "tier": "Niche" },
      { "name": "ComplyAdvantage Blog", "url": "https://complyadvantage.com/insights/", "focus": "Financial crime compliance", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "CleanTech & Energy",
    "emoji": "🌿",
    "outlets": [
      { "name": "Canary Media", "url": "https://canarymedia.com/", "focus": "The climate transition", "type": "Website", "tier": "Primary" },
      { "name": "Bloomberg Green", "url": "https://www.bloomberg.com/green", "focus": "Sustainable business and policy", "type": "Website", "tier": "Primary" },
      { "name": "Electrek", "url": "https://electrek.co/", "focus": "EV and clean energy news", "type": "Website", "tier": "Primary" },
      { "name": "CleanTechnica", "url": "https://cleantechnica.com/", "focus": "Clean technology news", "type": "Website", "tier": "Primary" },
      { "name": "pv magazine", "url": "https://pv-magazine-usa.com/", "focus": "Solar energy industry news", "type": "Website", "tier": "Niche" },
      { "name": "Energy Storage News", "url": "https://www.energy-storage.news/", "focus": "Battery and storage industry", "type": "Website", "tier": "Niche" },
      { "name": "Utility Dive", "url": "https://www.utilitydive.com/", "focus": "Utilities and grid transformation", "type": "Website", "tier": "Primary" },
      { "name": "GreenTech Media", "url": "https://www.greentechmedia.com/", "focus": "Global energy transition", "type": "Website", "tier": "Primary" },
      { "name": "Climate Tech VC", "url": "https://www.climatetechvc.com/", "focus": "Climate investment newsletter", "type": "Newsletter", "tier": "Niche" },
      { "name": "Carbon Brief", "url": "https://www.carbonbrief.org/", "focus": "Climate science and policy", "type": "Website", "tier": "Primary" }
    ]
  },
  {
    "vertical": "Data Science & Analytics",
    "emoji": "📊",
    "outlets": [
      { "name": "KDnuggets", "url": "https://www.kdnuggets.com/", "focus": "Data science learning and news", "type": "Website", "tier": "Primary" },
      { "name": "Towards Data Science", "url": "https://towardsdatascience.com/", "focus": "Data science tutorials and insights", "type": "Website", "tier": "Primary" },
      { "name": "Analytics Vidhya", "url": "https://www.analyticsvidhya.com/", "focus": "Data science community", "type": "Website", "tier": "Primary" },
      { "name": "DataBricks Blog", "url": "https://www.databricks.com/blog", "focus": "Data lakes and AI platforms", "type": "Website", "tier": "Primary" },
      { "name": "Fivetran Blog", "url": "https://www.fivetran.com/blog", "focus": "Data integration and pipelines", "type": "Website", "tier": "Niche" },
      { "name": "dbt Blog", "url": "https://www.getdbt.com/blog/", "focus": "Analytics engineering", "type": "Website", "tier": "Niche" },
      { "name": "Mode Analytics Blog", "url": "https://mode.com/blog/", "focus": "Data analysis and visualization", "type": "Website", "tier": "Niche" },
      { "name": "O'Reilly Data", "url": "https://www.oreilly.com/data/", "focus": "Data tech and trends", "type": "Website", "tier": "Primary" },
      { "name": "Data Elixir", "url": "https://dataelixir.com/", "focus": "Weekly data science newsletter", "type": "Newsletter", "tier": "Primary" },
      { "name": "Data Skeptic", "url": "https://www.dataskeptic.com/", "focus": "Data science podcast", "type": "Podcast", "tier": "Niche" }
    ]
  },
  {
    "vertical": "DevOps & SRE",
    "emoji": "🔄",
    "outlets": [
      { "name": "DevOps.com", "url": "https://devops.com/", "focus": "DevOps practices and culture", "type": "Website", "tier": "Primary" },
      { "name": "The New Stack", "url": "https://thenewstack.io/category/devops/", "focus": "Cloud native and DevOps", "type": "Website", "tier": "Primary" },
      { "name": "SRE Weekly", "url": "https://sreweekly.com/", "focus": "Site reliability news", "type": "Newsletter", "tier": "Primary" },
      { "name": "DevOps Weekly", "url": "https://www.devopsweekly.com/", "focus": "Weekly DevOps roundup", "type": "Newsletter", "tier": "Primary" },
      { "name": "HashiCorp Blog", "url": "https://www.hashicorp.com/blog", "focus": "Infrastructure and security tools", "type": "Website", "tier": "Primary" },
      { "name": "Docker Blog", "url": "https://www.docker.com/blog/", "focus": "Container platform updates", "type": "Website", "tier": "Primary" },
      { "name": "GitLab Blog", "url": "https://about.gitlab.com/blog/", "focus": "DevOps lifecycle platform", "type": "Website", "tier": "Primary" },
      { "name": "PagerDuty Blog", "url": "https://www.pagerduty.com/blog/", "focus": "Incident management", "type": "Website", "tier": "Niche" },
      { "name": "Gremlin Blog", "url": "https://www.gremlin.com/blog", "focus": "Chaos engineering", "type": "Website", "tier": "Niche" },
      { "name": "Arrested DevOps", "url": "https://www.arresteddevops.com/", "focus": "DevOps culture podcast", "type": "Podcast", "tier": "Primary" }
    ]
  },
  {
    "vertical": "Quantum Computing",
    "emoji": "⚛️",
    "outlets": [
      { "name": "IBM Quantum Blog", "url": "https://www.ibm.com/quantum/blog", "focus": "IBM quantum computing updates", "type": "Website", "tier": "Primary" },
      { "name": "Google Quantum AI", "url": "https://quantumai.google/", "focus": "Google quantum research", "type": "Website", "tier": "Primary" },
      { "name": "Quanta Magazine", "url": "https://www.quantamagazine.org/tag/quantum-computing/", "focus": "Quantum physics and computing", "type": "Website", "tier": "Primary" },
      { "name": "Nature Quantum Info", "url": "https://www.nature.com/subjects/quantum-information", "focus": "Quantum research publications", "type": "Website", "tier": "Primary" },
      { "name": "Rigetti Blog", "url": "https://www.rigetti.com/blog", "focus": "Quantum hardware and software", "type": "Website", "tier": "Niche" },
      { "name": "IonQ Blog", "url": "https://ionq.com/blog", "focus": "Trapped ion quantum computing", "type": "Website", "tier": "Niche" },
      { "name": "The Quantum Insider", "url": "https://thequantuminsider.com/", "focus": "Quantum industry news", "type": "Website", "tier": "Primary" },
      { "name": "Inside Quantum Technology", "url": "https://insidequantumtechnology.com/", "focus": "Quantum computing market", "type": "Website", "tier": "Niche" },
      { "name": "Quantum Zeitgeist", "url": "https://quantumzeitgeist.com/", "focus": "Quantum news and features", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Robotics & Automation",
    "emoji": "🤖",
    "outlets": [
      { "name": "IEEE Spectrum Robotics", "url": "https://spectrum.ieee.org/topic/robotics/", "focus": "Robotics research and news", "type": "Website", "tier": "Primary" },
      { "name": "The Robot Report", "url": "https://www.therobotreport.com/", "focus": "Robotics industry and business", "type": "Website", "tier": "Primary" },
      { "name": "Robotics Business Review", "url": "https://www.roboticsbusinessreview.com/", "focus": "Robotics market analysis", "type": "Website", "tier": "Primary" },
      { "name": "Boston Dynamics Blog", "url": "https://blog.bostondynamics.com/", "focus": "Legendary robotics engineering", "type": "Website", "tier": "Primary" },
      { "name": "Tesla Optimus Blog", "url": "https://www.tesla.com/optimus", "focus": "Humanoid robot development", "type": "Website", "tier": "Niche" },
      { "name": "Intuitive Surgical Blog", "url": "https://www.intuitive.com/en-us/about-us/news", "focus": "Surgical robotics", "type": "Website", "tier": "Niche" },
      { "name": "Robohub", "url": "https://robohub.org/", "focus": "Robotics news and discussion", "type": "Website", "tier": "Niche" },
      { "name": "Autonomous Vehicle News", "url": "https://www.tu-auto.com/", "focus": "Autonomous driving news", "type": "Website", "tier": "Niche" },
      { "name": "Robotics Podcast", "url": "https://roboticspodcast.com/", "focus": "Robotics industry interviews", "type": "Podcast", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Semiconductors & Hardware",
    "emoji": "🔬",
    "outlets": [
      { "name": "AnandTech", "url": "https://www.anandtech.com/", "focus": "CPU/GPU deep-dives", "type": "Website", "tier": "Primary" },
      { "name": "SemiEngineering", "url": "https://semiengineering.com/", "focus": "Semiconductor design and manufacturing", "type": "Website", "tier": "Primary" },
      { "name": "EE Times", "url": "https://www.eetimes.com/", "focus": "Electronics engineering news", "type": "Website", "tier": "Primary" },
      { "name": "WikiChip", "url": "https://fuse.wikichip.org/", "focus": "Chip architecture and analysis", "type": "Website", "tier": "Niche" },
      { "name": "Tom's Hardware", "url": "https://www.tomshardware.com/", "focus": "PC hardware reviews", "type": "Website", "tier": "Primary" },
      { "name": "ExtremeTech", "url": "https://www.extremetech.com/", "focus": "Hardware and science news", "type": "Website", "tier": "Primary" },
      { "name": "Intel Blog", "url": "https://www.intel.com/content/www/us/en/newsroom/", "focus": "Intel official announcements", "type": "Website", "tier": "Primary" },
      { "name": "AMD Blog", "url": "https://community.amd.com/", "focus": "AMD product news", "type": "Website", "tier": "Primary" },
      { "name": "NVIDIA Blog", "url": "https://blogs.nvidia.com/", "focus": "GPU and AI technology", "type": "Website", "tier": "Primary" },
      { "name": "TSMC Blog", "url": "https://www.tsmc.com/english/news-events", "focus": "Foundry and manufacturing news", "type": "Website", "tier": "Niche" },
      { "name": "Samsung Semiconductor", "url": "https://semiconductor.samsung.com/newsroom/", "focus": "Memory and chip news", "type": "Website", "tier": "Niche" },
      { "name": "Chips and Cheese", "url": "https://chipsandcheese.com/", "focus": "Deep CPU architecture analysis", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Telecommunications & 5G",
    "emoji": "📡",
    "outlets": [
      { "name": "Light Reading", "url": "https://www.lightreading.com/", "focus": "Communications technology news", "type": "Website", "tier": "Primary" },
      { "name": "Fierce Network", "url": "https://www.fierce-network.com/", "focus": "Telecom industry news", "type": "Website", "tier": "Primary" },
      { "name": "RCR Wireless", "url": "https://www.rcrwireless.com/", "focus": "Wireless industry news", "type": "Website", "tier": "Primary" },
      { "name": "Telecom TV", "url": "https://www.telecomtv.com/", "focus": "Telecom video news and analysis", "type": "Website", "tier": "Primary" },
      { "name": "SDxCentral", "url": "https://www.sdxcentral.com/", "focus": "SDN, NFV and telecom", "type": "Website", "tier": "Niche" },
      { "name": "Starlink Updates", "url": "https://www.starlink.com/news", "focus": "Satellite internet news", "type": "Website", "tier": "Niche" },
      { "name": "Qualcomm Blog", "url": "https://www.qualcomm.com/news", "focus": "Mobile connectivity innovations", "type": "Website", "tier": "Primary" },
      { "name": "Cisco Blog", "url": "https://blogs.cisco.com/", "focus": "Networking and telecom", "type": "Website", "tier": "Primary" },
      { "name": "TeleGeography Blog", "url": "https://blog.telegeography.com/", "focus": "Submarine cable and bandwidth", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Automotive Tech & EVs",
    "emoji": "🚗",
    "outlets": [
      { "name": "Electrek", "url": "https://electrek.co/", "focus": "EV and sustainable transport", "type": "Website", "tier": "Primary" },
      { "name": "InsideEVs", "url": "https://insideevs.com/", "focus": "Electric vehicle news", "type": "Website", "tier": "Primary" },
      { "name": "The Drive", "url": "https://www.thedrive.com/", "focus": "Automotive culture and tech", "type": "Website", "tier": "Primary" },
      { "name": "TechCrunch Mobility", "url": "https://techcrunch.com/category/transportation/", "focus": "Transportation technology", "type": "Website", "tier": "Primary" },
      { "name": "Tesla Blog", "url": "https://www.tesla.com/blog", "focus": "Official Tesla updates", "type": "Website", "tier": "Primary" },
      { "name": "Waymo Blog", "url": "https://waymo.com/blog/", "focus": "Autonomous driving leader", "type": "Website", "tier": "Primary" },
      { "name": "Cruise Blog", "url": "https://www.getcruise.com/news/", "focus": "Self-driving technology", "type": "Website", "tier": "Niche" },
      { "name": "Rivian Blog", "url": "https://rivian.com/newsroom", "focus": "Electric adventure vehicle news", "type": "Website", "tier": "Niche" },
      { "name": "Ride hailing analytics", "url": "https://ridehailinganalytics.com/", "focus": "Ride-sharing market data", "type": "Website", "tier": "Niche" },
      { "name": "Autoblog", "url": "https://www.autoblog.com/", "focus": "Consumer car news", "type": "Website", "tier": "Primary" },
      { "name": "Car and Driver", "url": "https://www.caranddriver.com/", "focus": "Automotive reviews and features", "type": "Website", "tier": "Primary" }
    ]
  },
  {
    "vertical": "EdTech",
    "emoji": "🎓",
    "outlets": [
      { "name": "EdSurge", "url": "https://www.edsurge.com/", "focus": "Education technology news", "type": "Website", "tier": "Primary" },
      { "name": "EdTech Magazine", "url": "https://edtechmagazine.com/", "focus": "Higher ed IT and innovation", "type": "Website", "tier": "Primary" },
      { "name": "Campus Technology", "url": "https://campustechnology.com/", "focus": "College tech infrastructure", "type": "Website", "tier": "Niche" },
      { "name": "Forbes Education", "url": "https://www.forbes.com/education/", "focus": "Education business and tech", "type": "Website", "tier": "Primary" },
      { "name": "Coursera Blog", "url": "https://blog.coursera.org/", "focus": "Online learning updates", "type": "Website", "tier": "Niche" },
      { "name": "Duolingo Blog", "url": "https://blog.duolingo.com/", "focus": "Language learning tech", "type": "Website", "tier": "Niche" },
      { "name": "Khan Academy Blog", "url": "https://blog.khanacademy.org/", "focus": "Free education platform", "type": "Website", "tier": "Niche" },
      { "name": "Class Central", "url": "https://www.classcentral.com/", "focus": "MOOCs and online courses", "type": "Website", "tier": "Niche" },
      { "name": "The Tech Edvocate", "url": "https://www.thetechedvocate.org/", "focus": "EdTech advocacy and news", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "InsurTech & LegalTech",
    "emoji": "⚖️",
    "outlets": [
      { "name": "InsurTechNews", "url": "https://insurtechnews.com/", "focus": "Insurance technology news", "type": "Website", "tier": "Primary" },
      { "name": "InsurTech Digital", "url": "https://insurtechdigital.com/", "focus": "Insurance innovation", "type": "Website", "tier": "Primary" },
      { "name": "Digital Insurance", "url": "https://www.dig-in.com/", "focus": "Insurance industry tech", "type": "Website", "tier": "Primary" },
      { "name": "Lemonade Blog", "url": "https://blog.lemonade.com/", "focus": "Insurtech disruption", "type": "Website", "tier": "Niche" },
      { "name": "Artificen Labs", "url": "https://www.artificenlabs.com/", "focus": "Insurance AI news", "type": "Website", "tier": "Niche" },
      { "name": "Law Technology Today", "url": "https://www.lawtechnologytoday.org/", "focus": "Legal tech innovation", "type": "Website", "tier": "Primary" },
      { "name": "Artificial Lawyer", "url": "https://www.artificiallawyer.com/", "focus": "AI in legal industry", "type": "Website", "tier": "Primary" },
      { "name": "Law.com Legal Tech", "url": "https://www.law.com/legaltech/", "focus": "Legal technology news", "type": "Website", "tier": "Primary" },
      { "name": "ABA Journal Tech", "url": "https://www.abajournal.com/topic/technology", "focus": "American Bar tech coverage", "type": "Website", "tier": "Niche" },
      { "name": "Clio Blog", "url": "https://www.clio.com/blog/", "focus": "Legal practice management", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "HRTech & Future of Work",
    "emoji": "👥",
    "outlets": [
      { "name": "HR Dive", "url": "https://www.hrdive.com/", "focus": "HR industry news", "type": "Website", "tier": "Primary" },
      { "name": "HR Tech Weekly", "url": "https://www.hrtechweekly.com/", "focus": "HR technology insights", "type": "Website", "tier": "Primary" },
      { "name": "HR Morning", "url": "https://www.hrmorning.com/", "focus": "Daily HR news", "type": "Website", "tier": "Niche" },
      { "name": "WorkLife (Slack)", "url": "https://slack.com/blog", "focus": "Future of work insights", "type": "Website", "tier": "Primary" },
      { "name": "Remote Work Hub", "url": "https://www.remotehub.com/blog", "focus": "Remote work technology", "type": "Website", "tier": "Niche" },
      { "name": "LinkedIn Talent Blog", "url": "https://business.linkedin.com/talent-solutions/blog", "focus": "Talent acquisition tech", "type": "Website", "tier": "Primary" },
      { "name": "Workable Blog", "url": "https://www.workable.com/blog", "focus": "Recruiting and hiring", "type": "Website", "tier": "Niche" },
      { "name": "Deel Blog", "url": "https://www.deel.com/blog", "focus": "Global hiring and compliance", "type": "Website", "tier": "Niche" },
      { "name": "Lattice Blog", "url": "https://lattice.com/blog", "focus": "Performance management", "type": "Website", "tier": "Niche" },
      { "name": "Gloat Blog", "url": "https://gloat.com/blog/", "focus": "Internal talent marketplace", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "PropTech",
    "emoji": "🏠",
    "outlets": [
      { "name": "Propmodo", "url": "https://www.propmodo.com/", "focus": "Real estate technology", "type": "Website", "tier": "Primary" },
      { "name": "REAL Trends", "url": "https://www.realtrends.com/", "focus": "Real estate business news", "type": "Website", "tier": "Primary" },
      { "name": "The Real Deal", "url": "https://therealdeal.com/", "focus": "Real estate news and analysis", "type": "Website", "tier": "Primary" },
      { "name": "GeekEstate", "url": "https://geekestate.com/", "focus": "Real estate tech blog", "type": "Website", "tier": "Niche" },
      { "name": "Zillow Research", "url": "https://www.zillow.com/research/", "focus": "Housing market data", "type": "Website", "tier": "Niche" },
      { "name": "Opendoor Blog", "url": "https://www.opendoor.com/blog", "focus": "iBuying technology", "type": "Website", "tier": "Niche" },
      { "name": "CoStar News", "url": "https://www.costar.com/article/", "focus": "Commercial real estate", "type": "Website", "tier": "Niche" },
      { "name": "Matterport Blog", "url": "https://matterport.com/blog", "focus": "3D property scanning", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "FoodTech & AgriTech",
    "emoji": "🌾",
    "outlets": [
      { "name": "AgFunderNews", "url": "https://agfundernews.com/", "focus": "Agri-food tech news", "type": "Website", "tier": "Primary" },
      { "name": "Food Navigator", "url": "https://www.foodnavigator.com/", "focus": "Food industry innovation", "type": "Website", "tier": "Primary" },
      { "name": "The Spoon", "url": "https://thespoon.tech/", "focus": "Food tech and kitchen tech", "type": "Website", "tier": "Primary" },
      { "name": "Future Farming", "url": "https://www.futurefarming.com/", "focus": "Precision agriculture", "type": "Website", "tier": "Niche" },
      { "name": "CropLife", "url": "https://www.croplife.com/", "focus": "Crop technology and production", "type": "Website", "tier": "Niche" },
      { "name": "Impossible Foods Blog", "url": "https://impossiblefoods.com/blog", "focus": "Plant-based meat tech", "type": "Website", "tier": "Niche" },
      { "name": "Beyond Meat Blog", "url": "https://www.beyondmeat.com/news/", "focus": "Alternative protein news", "type": "Website", "tier": "Niche" },
      { "name": "Cultivate Podcast", "url": "https://cultivatepodcast.com/", "focus": "Food system innovation", "type": "Podcast", "tier": "Niche" }
    ]
  },
  {
    "vertical": "MarTech & AdTech",
    "emoji": "📈",
    "outlets": [
      { "name": "MarTech.org", "url": "https://martech.org/", "focus": "Marketing technology news", "type": "Website", "tier": "Primary" },
      { "name": "AdExchanger", "url": "https://www.adexchanger.com/", "focus": "Digital advertising technology", "type": "Website", "tier": "Primary" },
      { "name": "Marketing Brew", "url": "https://www.morningbrew.com/marketing", "focus": "Daily marketing news", "type": "Newsletter", "tier": "Primary" },
      { "name": "HubSpot Blog", "url": "https://blog.hubspot.com/", "focus": "Inbound marketing and CRM", "type": "Website", "tier": "Primary" },
      { "name": "Salesforce Blog", "url": "https://www.salesforce.com/blog/", "focus": "CRM and marketing cloud", "type": "Website", "tier": "Primary" },
      { "name": "Search Engine Land", "url": "https://searchengineland.com/", "focus": "SEO and search marketing", "type": "Website", "tier": "Primary" },
      { "name": "Social Media Today", "url": "https://www.socialmediatoday.com/", "focus": "Social media marketing", "type": "Website", "tier": "Primary" },
      { "name": "Digiday", "url": "https://digiday.com/", "focus": "Media and marketing industry", "type": "Website", "tier": "Primary" },
      { "name": "Protocol (Media)", "url": "https://www.protocol.com/", "focus": "Tech industry and policy", "type": "Website", "tier": "Primary" },
      { "name": "The Drum", "url": "https://www.thedrum.com/", "focus": "Creative and marketing news", "type": "Website", "tier": "Primary" }
    ]
  },
  {
    "vertical": "Open Source",
    "emoji": "🔓",
    "outlets": [
      { "name": "Linux Foundation Blog", "url": "https://www.linuxfoundation.org/blog/", "focus": "Open source ecosystem news", "type": "Website", "tier": "Primary" },
      { "name": "Open Source Initiative", "url": "https://opensource.org/", "focus": "Open source advocacy", "type": "Website", "tier": "Primary" },
      { "name": "Red Hat Blog", "url": "https://www.redhat.com/en/blog", "focus": "Enterprise open source", "type": "Website", "tier": "Primary" },
      { "name": "Mozilla Blog", "url": "https://blog.mozilla.org/", "focus": "Internet health and open web", "type": "Website", "tier": "Primary" },
      { "name": "Apache Foundation Blog", "url": "https://blogs.apache.org/", "focus": "Apache project updates", "type": "Website", "tier": "Primary" },
      { "name": "GitHub Blog", "url": "https://github.blog/category/open-source/", "focus": "Open source community", "type": "Website", "tier": "Primary" },
      { "name": "Postgres Blog", "url": "https://www.postgresql.org/about/news/", "focus": "PostgreSQL database news", "type": "Website", "tier": "Niche" },
      { "name": "Python Blog", "url": "https://blog.python.org/", "focus": "Python language updates", "type": "Website", "tier": "Niche" },
      { "name": "Rust Blog", "url": "https://blog.rust-lang.org/", "focus": "Rust language development", "type": "Website", "tier": "Niche" },
      { "name": "CNCF Blog", "url": "https://www.cncf.io/blog/", "focus": "Cloud native open source", "type": "Website", "tier": "Primary" },
      { "name": "FOSSA Blog", "url": "https://fossa.com/blog", "focus": "License compliance and security", "type": "Website", "tier": "Niche" },
      { "name": "Tidelift Blog", "url": "https://tidelift.com/blog", "focus": "Open source sustainability", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Venture Capital & Startups",
    "emoji": "💰",
    "outlets": [
      { "name": "TechCrunch", "url": "https://techcrunch.com/", "focus": "Startup news and funding", "type": "Website", "tier": "Primary" },
      { "name": "Crunchbase News", "url": "https://news.crunchbase.com/", "focus": "Funding and M&A data", "type": "Website", "tier": "Primary" },
      { "name": "PitchBook Blog", "url": "https://pitchbook.com/blog", "focus": "VC, PE and M&A research", "type": "Website", "tier": "Primary" },
      { "name": "CB Insights", "url": "https://www.cbinsights.com/research/", "focus": "Tech market intelligence", "type": "Website", "tier": "Primary" },
      { "name": "SaaStr", "url": "https://www.saastr.com/", "focus": "SaaS business and growth", "type": "Website", "tier": "Primary" },
      { "name": "a16z Blog", "url": "https://a16z.com/content/", "focus": "VC perspective on tech", "type": "Website", "tier": "Primary" },
      { "name": "Sequoia Blog", "url": "https://www.sequoiacap.com/blog/", "focus": "Startup building insights", "type": "Website", "tier": "Primary" },
      { "name": "YC Blog", "url": "https://www.ycombinator.com/blog", "focus": "Y Combinator ecosystem", "type": "Website", "tier": "Primary" },
      { "name": "Greylock Blog", "url": "https://greylock.com/blog/", "focus": "Enterprise startup insights", "type": "Website", "tier": "Niche" },
      { "name": "NFX Blog", "url": "https://www.nfx.com/blog", "focus": "Network effects and growth", "type": "Website", "tier": "Niche" },
      { "name": "StrictlyVC", "url": "https://strictlyvc.com/", "focus": "Daily VC and startup news", "type": "Newsletter", "tier": "Primary" },
      { "name": "The Generalist", "url": "https://www.generalist.com/", "focus": "Deep-dive startup analysis", "type": "Newsletter", "tier": "Primary" },
      { "name": "20VC Podcast", "url": "https://www.thetwentyminutevc.com/", "focus": "VC investor interviews", "type": "Podcast", "tier": "Primary" },
      { "name": "All-In Podcast", "url": "https://www.allinpodcast.co/", "focus": "Tech market and VC discussion", "type": "Podcast", "tier": "Primary" }
    ]
  },
  {
    "vertical": "Tech Policy & Law",
    "emoji": "📜",
    "outlets": [
      { "name": "TechDirt", "url": "https://www.techdirt.com/", "focus": "Tech policy and free speech", "type": "Website", "tier": "Primary" },
      { "name": "EPIC Blog", "url": "https://epic.org/blog/", "focus": "Privacy and digital rights", "type": "Website", "tier": "Primary" },
      { "name": "EFF DeepLinks", "url": "https://www.eff.org/deeplinks", "focus": "Digital rights and civil liberties", "type": "Website", "tier": "Primary" },
      { "name": "Lawfare", "url": "https://www.lawfaremedia.org/", "focus": "National security and tech law", "type": "Website", "tier": "Primary" },
      { "name": "IAPP Blog", "url": "https://iapp.org/news/", "focus": "Privacy professional news", "type": "Website", "tier": "Primary" },
      { "name": "The Center for AI Policy", "url": "https://www.aipolicy.us/", "focus": "AI regulation and safety", "type": "Website", "tier": "Niche" },
      { "name": "EU Digital Policy", "url": "https://www.euractiv.com/sections/digital/", "focus": "European tech regulation", "type": "Website", "tier": "Niche" },
      { "name": "Electronic Frontier Foundation Podcast", "url": "https://www.eff.org/podcasts", "focus": "Privacy and free speech audio", "type": "Podcast", "tier": "Niche" },
      { "name": "The Privacy Advisor (IAPP)", "url": "https://iapp.org/podcast/", "focus": "Privacy news and analysis", "type": "Podcast", "tier": "Niche" }
    ]
  },
  {
    "vertical": "IoT & Edge Computing",
    "emoji": "📶",
    "outlets": [
      { "name": "IoT Agenda", "url": "https://www.techtarget.com/iotagenda/", "focus": "Enterprise IoT news", "type": "Website", "tier": "Primary" },
      { "name": "IoT World Today", "url": "https://www.iotworldtoday.com/", "focus": "IoT industry coverage", "type": "Website", "tier": "Primary" },
      { "name": "Raspberry Pi Blog", "url": "https://www.raspberrypi.com/blog/", "focus": "Maker and IoT computing", "type": "Website", "tier": "Primary" },
      { "name": "Particle Blog", "url": "https://www.particle.io/blog/", "focus": "IoT hardware and connectivity", "type": "Website", "tier": "Niche" },
      { "name": "Samsara Blog", "url": "https://www.samsara.com/blog", "focus": "Industrial IoT and safety", "type": "Website", "tier": "Niche" },
      { "name": "Nordic Semiconductor Blog", "url": "https://blog.nordicsemi.com/", "focus": "Wireless IoT chips", "type": "Website", "tier": "Niche" },
      { "name": "Edge Computing World", "url": "https://edgecomputingworld.com/", "focus": "Edge infrastructure news", "type": "Website", "tier": "Niche" },
      { "name": "STL Partners", "url": "https://stlpartners.com/", "focus": "Edge and telecom research", "type": "Website", "tier": "Niche" },
      { "name": "Hackster.io", "url": "https://www.hackster.io/news", "focus": "Hardware hacking community", "type": "Website", "tier": "Primary" }
    ]
  },
  {
    "vertical": "Design & UX",
    "emoji": "🎨",
    "outlets": [
      { "name": "Smashing Magazine", "url": "https://www.smashingmagazine.com/", "focus": "Web design and development", "type": "Website", "tier": "Primary" },
      { "name": "A List Apart", "url": "https://alistapart.com/", "focus": "Web standards and design", "type": "Website", "tier": "Primary" },
      { "name": "UX Collective", "url": "https://uxdesign.cc/", "focus": "UX design insights", "type": "Website", "tier": "Primary" },
      { "name": "Nielsen Norman Group", "url": "https://www.nngroup.com/articles/", "focus": "UX research and usability", "type": "Website", "tier": "Primary" },
      { "name": "Figma Blog", "url": "https://www.figma.com/blog/", "focus": "Design tool innovation", "type": "Website", "tier": "Primary" },
      { "name": "Dribbble Blog", "url": "https://dribbble.com/stories", "focus": "Design community and trends", "type": "Website", "tier": "Niche" },
      { "name": "Behance Blog", "url": "https://www.behance.net/blog", "focus": "Creative portfolio platform", "type": "Website", "tier": "Niche" },
      { "name": "Adobe Blog", "url": "https://blog.adobe.com/", "focus": "Creative cloud updates", "type": "Website", "tier": "Primary" },
      { "name": "Material Design Blog", "url": "https://material.io/blog", "focus": "Google design system", "type": "Website", "tier": "Niche" },
      { "name": "UXPod", "url": "https://uxpod.com/", "focus": "User experience podcast", "type": "Podcast", "tier": "Niche" }
    ]
  },
  {
    "vertical": "No Code & Low Code",
    "emoji": "🧩",
    "outlets": [
      { "name": "NoCodeJournal", "url": "https://www.nocodejournal.com/", "focus": "No code community news", "type": "Website", "tier": "Primary" },
      { "name": "Makerpad", "url": "https://www.makerpad.co/", "focus": "No code tutorials and tools", "type": "Website", "tier": "Primary" },
      { "name": "Bubble Blog", "url": "https://bubble.io/blog", "focus": "No code web app builder", "type": "Website", "tier": "Primary" },
      { "name": "Zapier Blog", "url": "https://zapier.com/blog/", "focus": "Automation and integrations", "type": "Website", "tier": "Primary" },
      { "name": "Airtable Blog", "url": "https://airtable.com/blog", "focus": "No code database platform", "type": "Website", "tier": "Primary" },
      { "name": "Notion Blog", "url": "https://www.notion.so/blog", "focus": "Productivity and documentation", "type": "Website", "tier": "Primary" },
      { "name": "Retool Blog", "url": "https://retool.com/blog/", "focus": "Low code internal tools", "type": "Website", "tier": "Niche" },
      { "name": "AppSheet Blog", "url": "https://www.appsheet.com/blog", "focus": "Google no code platform", "type": "Website", "tier": "Niche" },
      { "name": "Glide Blog", "url": "https://www.glideapps.com/blog", "focus": "App builder from spreadsheets", "type": "Website", "tier": "Niche" },
      { "name": "NoCode Tech Podcast", "url": "https://www.nocode.tech/podcast", "focus": "No code industry interviews", "type": "Podcast", "tier": "Niche" }
    ]
  },
  {
    "vertical": "API Economy",
    "emoji": "🔌",
    "outlets": [
      { "name": "ProgrammableWeb", "url": "https://www.programmableweb.com/", "focus": "API news and directory", "type": "Website", "tier": "Primary" },
      { "name": "API Evangelist", "url": "https://apievangelist.com/", "focus": "API industry analysis", "type": "Website", "tier": "Primary" },
      { "name": "Nordic APIs", "url": "https://nordicapis.com/", "focus": "API best practices", "type": "Website", "tier": "Primary" },
      { "name": "Stripe Blog", "url": "https://stripe.com/blog/api", "focus": "API-first payments", "type": "Website", "tier": "Primary" },
      { "name": "Twilio Blog", "url": "https://www.twilio.com/blog", "focus": "Communication APIs", "type": "Website", "tier": "Primary" },
      { "name": "Postman Blog", "url": "https://blog.postman.com/", "focus": "API development tools", "type": "Website", "tier": "Primary" },
      { "name": "Apollo GraphQL Blog", "url": "https://www.apollographql.com/blog/", "focus": "GraphQL ecosystem", "type": "Website", "tier": "Niche" },
      { "name": "Swagger Blog", "url": "https://swagger.io/blog/", "focus": "API documentation standards", "type": "Website", "tier": "Niche" },
      { "name": "RapidAPI Blog", "url": "https://rapidapi.com/blog/", "focus": "API marketplace and tools", "type": "Website", "tier": "Niche" },
      { "name": "API Changelog", "url": "https://apichangelog.com/", "focus": "API versioning updates", "type": "Website", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Enterprise SaaS",
    "emoji": "🏢",
    "outlets": [
      { "name": "SaaStr", "url": "https://www.saastr.com/", "focus": "SaaS business and growth", "type": "Website", "tier": "Primary" },
      { "name": "Cloud Wars", "url": "https://cloudwars.com/", "focus": "Enterprise cloud competition", "type": "Website", "tier": "Primary" },
      { "name": "Enterprise Times", "url": "https://www.enterprisetimes.com/", "focus": "Enterprise IT news", "type": "Website", "tier": "Primary" },
      { "name": "ZDNet", "url": "https://www.zdnet.com/", "focus": "Enterprise technology news", "type": "Website", "tier": "Primary" },
      { "name": "Silicon Angle", "url": "https://siliconangle.com/", "focus": "Enterprise IT and cloud", "type": "Website", "tier": "Primary" },
      { "name": "CRM Magazine", "url": "https://www.destinationcrm.com/", "focus": "Customer relationship tech", "type": "Website", "tier": "Niche" },
      { "name": "ServiceNow Blog", "url": "https://www.servicenow.com/blogs/", "focus": "Enterprise workflow automation", "type": "Website", "tier": "Niche" },
      { "name": "SAP Community", "url": "https://community.sap.com/", "focus": "Enterprise resource planning", "type": "Website", "tier": "Niche" },
      { "name": "Oracle Blog", "url": "https://blogs.oracle.com/", "focus": "Database and cloud", "type": "Website", "tier": "Niche" },
      { "name": "Workday Blog", "url": "https://blog.workday.com/", "focus": "HCM and finance cloud", "type": "Website", "tier": "Niche" },
      { "name": "Salesforce 360 Blog", "url": "https://www.salesforce.com/blog/", "focus": "CRM and customer success", "type": "Website", "tier": "Primary" }
    ]
  },
  {
    "vertical": "Tech Careers & Culture",
    "emoji": "🧑‍💻",
    "outlets": [
      { "name": "Levels.fyi Blog", "url": "https://www.levels.fyi/blog/", "focus": "Tech compensation and levels", "type": "Website", "tier": "Primary" },
      { "name": "Blind Blog", "url": "https://www.teamblind.com/blog/", "focus": "Tech workplace community", "type": "Website", "tier": "Primary" },
      { "name": "The Pragmatic Engineer", "url": "https://blog.pragmaticengineer.com/", "focus": "Engineering career growth", "type": "Newsletter", "tier": "Primary" },
      { "name": "TechCrunch", "url": "https://techcrunch.com/category/venture/", "focus": "Startup career culture", "type": "Website", "tier": "Primary" },
      { "name": "LinkedIn Tech News", "url": "https://www.linkedin.com/news/tech/", "focus": "Tech industry hiring trends", "type": "Website", "tier": "Primary" },
      { "name": "Glassdoor Blog", "url": "https://www.glassdoor.com/blog/", "focus": "Company reviews and jobs", "type": "Website", "tier": "Niche" },
      { "name": "Rands in Repose", "url": "https://randsinrepose.com/", "focus": "Engineering leadership essays", "type": "Website", "tier": "Niche" },
      { "name": "Charity Majors Blog", "url": "https://charity.wtf/", "focus": "Engineering culture and ops", "type": "Website", "tier": "Niche" },
      { "name": "Coding Blocks Podcast", "url": "https://www.codingblocks.net/", "focus": "Software career discussions", "type": "Podcast", "tier": "Niche" },
      { "name": "Techish Podcast", "url": "https://www.techishpod.com/", "focus": "Tech culture and diversity", "type": "Podcast", "tier": "Niche" }
    ]
  },
  {
    "vertical": "Science & Research",
    "emoji": "🔬",
    "outlets": [
      { "name": "Nature News", "url": "https://www.nature.com/news/", "focus": "Multidisciplinary science news", "type": "Website", "tier": "Primary" },
      { "name": "Science Magazine", "url": "https://www.science.org/news", "focus": "Leading scientific research", "type": "Website", "tier": "Primary" },
      { "name": "Quanta Magazine", "url": "https://www.quantamagazine.org/", "focus": "Theoretical science explained", "type": "Website", "tier": "Primary" },
      { "name": "ArXiv Blog", "url": "https://blog.arxiv.org/", "focus": "Preprint repository updates", "type": "Website", "tier": "Niche" },
      { "name": "Physics World", "url": "https://physicsworld.com/", "focus": "Physics research news", "type": "Website", "tier": "Niche" },
      { "name": "Chemistry World", "url": "https://www.chemistryworld.com/", "focus": "Chemistry research news", "type": "Website", "tier": "Niche" },
      { "name": "New Scientist", "url": "https://www.newscientist.com/", "focus": "Popular science insights", "type": "Website", "tier": "Primary" },
      { "name": "Wired Science", "url": "https://www.wired.com/category/science/", "focus": "Science and technology", "type": "Website", "tier": "Primary" },
      { "name": "NASA Science Blog", "url": "https://science.nasa.gov/blog/", "focus": "Space agency science", "type": "Website", "tier": "Primary" },
      { "name": "The Scientist", "url": "https://www.the-scientist.com/", "focus": "Life science news", "type": "Website", "tier": "Niche" },
      { "name": "Retraction Watch", "url": "https://retractionwatch.com/", "focus": "Scientific integrity and corrections", "type": "Website", "tier": "Niche" },
      { "name": "Nature Podcast", "url": "https://www.nature.com/nature/articles?type=nature-podcast", "focus": "Science news explained", "type": "Podcast", "tier": "Primary" }
    ]
  }
];

    // ===== DOM refs =====
    const statsBar = document.getElementById('statsBar');
    const scrollBtn = document.getElementById('scrollTopBtn');
    const tabsContainer = document.getElementById('tabsContainer');
    const typeahead = document.getElementById('typeahead');
    const surpriseModal = document.getElementById('surpriseModal');
    const toast = document.getElementById('toast');
    const footerStats = document.getElementById('footerStats');

    // ===== State =====
    let activeType = 'all';
    let activeTier = 'all';
    let activeCategory = 'all';

    // ===== Categories =====
    const categories = [
        { id: 'ai-infra', label: 'AI & Infrastructure', emoji: '⚙️' },
        { id: 'security', label: 'Security & Data', emoji: '🛡️' },
        { id: 'consumer', label: 'Consumer & Design', emoji: '🎨' },
        { id: 'science', label: 'Science & Sustainability', emoji: '🌿' },
        { id: 'business', label: 'Business & Finance', emoji: '💰' },
        { id: 'policy', label: 'Policy & Society', emoji: '📜' },
    ];

    const verticalCategory = {
        "Artificial Intelligence": "ai-infra", "Cloud Computing": "ai-infra",
        "Software Engineering": "ai-infra", "DevOps & SRE": "ai-infra",
        "Open Source": "ai-infra", "API Economy": "ai-infra",
        "Cybersecurity": "security", "Data Science & Analytics": "security",
        "Quantum Computing": "security", "Semiconductors & Hardware": "security",
        "Telecommunications & 5G": "security", "IoT & Edge Computing": "security",
        "Consumer Electronics": "consumer", "Gaming & XR": "consumer",
        "Design & UX": "consumer", "No Code & Low Code": "consumer",
        "Biotech": "science", "HealthTech": "science",
        "Science & Research": "science", "SpaceTech": "science",
        "CleanTech & Energy": "science", "FoodTech & AgriTech": "science",
        "Robotics & Automation": "science",
        "FinTech": "business", "Venture Capital & Startups": "business",
        "Enterprise SaaS": "business", "MarTech & AdTech": "business",
        "InsurTech & LegalTech": "business", "HRTech & Future of Work": "business",
        "PropTech": "business",
        "Tech Policy & Law": "policy", "GovTech & RegTech": "policy",
        "Tech Careers & Culture": "policy", "Web3 & Blockchain": "policy",
        "EdTech": "policy", "Automotive Tech & EVs": "policy",
    };

    // ===== Globals =====
    const totalVerticals = data.length;
    const allOutlets = data.flatMap(v => v.outlets.map(o => ({ ...o, vertical: v.vertical, emoji: v.emoji })));
    const totalOutletsAll = allOutlets.length;
    const websitesAll = allOutlets.filter(o => o.type === 'Website').length;
    const newslettersAll = allOutlets.filter(o => o.type === 'Newsletter').length;
    const podcastsAll = allOutlets.filter(o => o.type === 'Podcast').length;
    footerStats.textContent = `${totalVerticals} Verticals · ${totalOutletsAll} Outlets · ${websitesAll} Websites · ${newslettersAll} Newsletters · ${podcastsAll} Podcasts`;

    // ===== Toast helper =====
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('visible');
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => toast.classList.remove('visible'), 2500);
    }

    // ===== Render tabs =====
    function renderTabs() {
        const allTab = `<button class="tab active" data-category="all">All</button>`;
        const catTabs = categories.map(c =>
            `<button class="tab" data-category="${c.id}"><span class="tab-emoji">${c.emoji}</span> ${c.label}</button>`
        ).join('');
        tabsContainer.innerHTML = allTab + catTabs;
    }

    // ===== Render =====
    function render(filter) {
        const query = (filter || '').toLowerCase();
        const type = activeType;
        const tier = activeTier;
        const cat = activeCategory;

        // Remove skeleton
        document.querySelectorAll('.skeleton-card').forEach(s => s.remove());

        // Filter
        const filteredData = data.map(vertical => {
            const filteredOutlets = vertical.outlets.filter(outlet => {
                const matchesText = !query ||
                    outlet.name.toLowerCase().includes(query) ||
                    vertical.vertical.toLowerCase().includes(query) ||
                    outlet.focus.toLowerCase().includes(query);
                const matchesType = type === 'all' || outlet.type.toLowerCase() === type;
                const matchesTier = tier === 'all' || outlet.tier.toLowerCase() === tier;
                const matchesCat = cat === 'all' || verticalCategory[vertical.vertical] === cat;
                return matchesText && matchesType && matchesTier && matchesCat;
            });
            return { ...vertical, outlets: filteredOutlets };
        }).filter(vertical => vertical.outlets.length > 0);

        // Stats
        const totalOutlets = filteredData.reduce((s, v) => s + v.outlets.length, 0);
        const websites = filteredData.reduce((s, v) => s + v.outlets.filter(o => o.type === 'Website').length, 0);
        const newsletters = filteredData.reduce((s, v) => s + v.outlets.filter(o => o.type === 'Newsletter').length, 0);
        const podcasts = filteredData.reduce((s, v) => s + v.outlets.filter(o => o.type === 'Podcast').length, 0);
        statsBar.innerHTML = `
            <span class="stat"><strong>${filteredData.length}</strong> Verticals</span>
            <span class="stat-divider"></span>
            <span class="stat"><strong>${totalOutlets}</strong> Outlets</span>
            <span class="stat-detail"> &middot; ${websites} Websites &middot; ${newsletters} Newsletters &middot; ${podcasts} Podcasts</span>
        `;

        container.innerHTML = '';

        if (filteredData.length === 0) {
            container.innerHTML = '<div class="loading">No outlets match your filters.</div>';
            return;
        }

        // Cards
        filteredData.forEach((section, idx) => {
            const card = document.createElement('div');
            card.className = 'vertical-card';
            card.style.animationDelay = `${idx * 0.04}s`;

            const outletsHtml = section.outlets.map(o => `
                <li class="outlet-item">
                    <div class="outlet-main">
                        <span class="outlet-name" data-url="${o.url}" data-name="${o.name}">
                            ${o.name} ${o.tier === 'Primary' ? '⭐' : ''}
                            <span class="copy-hint">Copy</span>
                        </span>
                        <span class="outlet-type type-${o.type.toLowerCase()}">${o.type}</span>
                    </div>
                    <span class="outlet-focus">${o.focus}</span>
                </li>
            `).join('');

            card.innerHTML = `
                <div class="vertical-header" data-vertical="${section.vertical}">
                    <span class="vertical-emoji">${section.emoji}</span>
                    <h2>${section.vertical}</h2>
                    <span class="outlet-count">${section.outlets.length}</span>
                    <span class="collapse-icon">▾</span>
                </div>
                <div class="outlet-list-wrapper">
                    <ul class="outlet-list">${outletsHtml}</ul>
                </div>
            `;
            container.appendChild(card);
        });

        // Collapsible handlers
        container.querySelectorAll('.vertical-header').forEach(hdr => {
            hdr.addEventListener('click', () => {
                hdr.closest('.vertical-card').classList.toggle('collapsed');
            });
        });

        // Copy-to-clipboard handlers
        container.querySelectorAll('.outlet-name').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const url = el.dataset.url;
                const name = el.dataset.name;
                navigator.clipboard.writeText(url).then(() => {
                    showToast(`Copied ${name}`);
                }).catch(() => {
                    // Fallback
                    const ta = document.createElement('textarea');
                    ta.value = url;
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                    showToast(`Copied ${name}`);
                });
            });
        });
    }

    // ===== Tabs =====
    tabsContainer.addEventListener('click', (e) => {
        const tab = e.target.closest('.tab');
        if (!tab) return;
        tabsContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.dataset.category;
        render(searchInput.value);
    });

    // ===== Filter pills =====
    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const group = pill.dataset.group;
            const value = pill.dataset.value;
            document.querySelectorAll(`.filter-pill[data-group="${group}"]`).forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            if (group === 'type') activeType = value;
            if (group === 'tier') activeTier = value;
            render(searchInput.value);
        });
    });

    // ===== Typeahead =====
    searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        if (!q || q.length < 1) { typeahead.classList.remove('visible'); return; }

        const matches = [];
        for (const v of data) {
            for (const o of v.outlets) {
                if (o.name.toLowerCase().includes(q) || o.focus.toLowerCase().includes(q)) {
                    matches.push({ ...o, vertical: v.vertical });
                    if (matches.length >= 8) break;
                }
            }
            if (matches.length >= 8) break;
        }

        if (matches.length === 0) { typeahead.classList.remove('visible'); return; }

        typeahead.innerHTML = matches.map(m => `
            <div class="typeahead-item" data-name="${m.name}" data-url="${m.url}">
                <span class="ta-name">${highlight(m.name, q)}</span>
                <span class="outlet-type type-${m.type.toLowerCase()}">${m.type}</span>
                <span class="ta-vertical">${m.vertical}</span>
            </div>
        `).join('');
        typeahead.classList.add('visible');
    });

    function highlight(text, query) {
        const idx = text.toLowerCase().indexOf(query);
        if (idx === -1) return text;
        return text.slice(0, idx) + '<strong>' + text.slice(idx, idx + query.length) + '</strong>' + text.slice(idx + query.length);
    }

    typeahead.addEventListener('click', (e) => {
        const item = e.target.closest('.typeahead-item');
        if (!item) return;
        const url = item.dataset.url;
        const name = item.dataset.name;
        searchInput.value = name;
        typeahead.classList.remove('visible');
        render(name);
        showToast(`Jumped to ${name}`);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-row')) typeahead.classList.remove('visible');
    });

    // ===== Surprise me =====
    document.getElementById('surpriseBtn').addEventListener('click', () => {
        const pick = allOutlets[Math.floor(Math.random() * allOutlets.length)];
        surpriseModal.querySelector('.modal-content').innerHTML = `
            <span class="modal-emoji">${pick.emoji}</span>
            <div class="modal-vertical">${pick.vertical}</div>
            <div class="modal-name">${pick.name}</div>
            <div class="modal-focus">${pick.focus}</div>
            <a href="${pick.url}" target="_blank" class="modal-link" rel="noopener">Visit ${pick.name} →</a>
        `;
        surpriseModal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    });

    surpriseModal.addEventListener('click', (e) => {
        if (e.target === surpriseModal || e.target.closest('.modal-close')) {
            surpriseModal.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && surpriseModal.classList.contains('visible')) {
            surpriseModal.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });

    // ===== Scroll =====
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('visible', window.scrollY > 400);
        document.querySelector('.category-nav').classList.toggle('scrolled', window.scrollY > 100);
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Keyboard =====
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            searchInput.focus();
        }
        if (e.key === 'Escape' && !surpriseModal.classList.contains('visible')) {
            searchInput.value = '';
            activeType = 'all';
            activeTier = 'all';
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.filter-pill[data-value="all"]').forEach(p => p.classList.add('active'));
            render('');
        }
    });

    // ===== Init =====
    renderTabs();
    render('');
}

init();
