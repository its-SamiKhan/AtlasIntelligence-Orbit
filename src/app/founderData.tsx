import React from "react";

export interface FounderDetails {
  name: string;
  company: string;
  headline: string;
  subBadges: string[];
  location: string;
  website: string;
  bio: string;
  bioTags: string[];
  image: string;
  verified?: boolean;
  keyAtAGlance: { label: string; value: string; icon?: string }[];
  stats: { label: string; value: string; sub: string; icon?: string }[];
  careerJourney: { period: string; title: string; desc: string; logo: string }[];
  whatHeIsBuilding: {
    company: string;
    companyLogo?: string;
    role: string;
    desc: string;
    tags: string[];
    linkText: string;
  };
  influenceGraph: {
    nodes: { label: string; role: string; type: "Companies" | "Investments" | "Board Roles" | "Advisory"; pos: { top: string; left: string } }[];
  };
  coreFocus: string[];
  topInvestments: { name: string; year: string; stage: string }[];
  recentActivity: { text: string; date: string; type: string }[];
  mediaAppearances: { source: string; title: string; date: string; image: string }[];
  connect: {
    twitter: string;
    linkedin: string;
    website: string;
    github: string;
    youtube: string;
    email: string;
  };
  peopleAlsoViewed: { name: string; role: string; avatar: string }[];
}

export const FOUNDERS_DETAILS: Record<string, FounderDetails> = {
  "Sam Altman": {
    name: "Sam Altman",
    company: "OpenAI",
    headline: "CEO @ OpenAI",
    verified: true,
    subBadges: ["Entrepreneur", "Investor", "Former President @ Y Combinator"],
    location: "San Francisco, CA, USA",
    website: "samaltman.com",
    bio: "Sam Altman is the CEO of OpenAI, leading the mission to ensure that artificial general intelligence benefits all of humanity. He is an investor in hundreds of companies and was the former President of Y Combinator.",
    bioTags: ["AI & AGI", "Entrepreneurship", "Venture Capital", "Technology", "Policy"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg",
    keyAtAGlance: [
      { label: "Focus", value: "AI Research, Safety, Infrastructure", icon: "🎯" },
      { label: "Current Role", value: "CEO, OpenAI", icon: "💼" },
      { label: "Influence", value: "Shaping the future of AI globally", icon: "🌐" },
      { label: "Ecosystem", value: "Founder, Investor, Board Member, Advisor", icon: "🔗" },
      { label: "Active in", value: "Startups, Venture, Policy, Research", icon: "⚡" },
      { label: "Public Presence", value: "10K+ media mentions across top publications", icon: "📣" }
    ],
    stats: [
      { label: "Companies Founded", value: "4", sub: "2 Exited", icon: "🏢" },
      { label: "Total Funding Raised", value: "$20B+", sub: "Across ventures", icon: "💰" },
      { label: "Investments Made", value: "300+", sub: "Across AI & Tech", icon: "📈" },
      { label: "Board & Advisory", value: "10+", sub: "Boards & Advisor", icon: "🔷" },
      { label: "Team Built", value: "1,000+", sub: "People across orgs", icon: "👥" },
      { label: "Global Impact", value: "Millions", sub: "Users impacted", icon: "🌍" }
    ],
    careerJourney: [
      { period: "2023 - Present", title: "CEO, OpenAI", desc: "Leading OpenAI in building safe and beneficial AGI. Responsible for ChatGPT, GPT-4, and the next generation of AI systems.", logo: "openai" },
      { period: "2019 - 2023", title: "Co-founder, Worldcoin", desc: "Co-founded Worldcoin to build the world's largest identity and financial network.", logo: "worldcoin" },
      { period: "2014 - 2019", title: "President, Y Combinator", desc: "President of Y Combinator, where he oversaw growth of the world's leading startup accelerator.", logo: "yc" },
      { period: "2005 - 2012", title: "Founder, Loopt", desc: "Founded Loopt, a location-based social networking app (acquired by Green Dot Corp.).", logo: "loopt" }
    ],
    whatHeIsBuilding: {
      company: "OpenAI",
      companyLogo: "openai",
      role: "CEO",
      desc: "Building frontier AI models that push the boundaries of intelligence while ensuring safety and alignment.",
      tags: ["ChatGPT", "GPT-4", "DALL-E", "Codex", "Sora"],
      linkText: "View OpenAI Profile"
    },
    influenceGraph: {
      nodes: [
        { label: "OpenAI", role: "CEO", type: "Companies", pos: { top: "14%", left: "28%" } },
        { label: "Worldcoin", role: "Co-founder", type: "Companies", pos: { top: "48%", left: "20%" } },
        { label: "Y Combinator", role: "Former President", type: "Advisory", pos: { top: "82%", left: "28%" } },
        { label: "Reddit", role: "Board Member", type: "Board Roles", pos: { top: "14%", left: "72%" } },
        { label: "Stripe", role: "Investor", type: "Investments", pos: { top: "48%", left: "80%" } },
        { label: "Airbnb", role: "Investor", type: "Investments", pos: { top: "82%", left: "72%" } },
        { label: "Helion Energy", role: "Board Member", type: "Board Roles", pos: { top: "92%", left: "50%" } }
      ]
    },
    coreFocus: [
      "Artificial General Intelligence",
      "AI Safety & Alignment",
      "Compute Infrastructure",
      "Product Innovation",
      "Global Governance & Policy"
    ],
    topInvestments: [
      { name: "Stripe", year: "2014", stage: "Series B" },
      { name: "Airbnb", year: "2011", stage: "Series B" },
      { name: "Databricks", year: "2013", stage: "Series A" },
      { name: "Confluent", year: "2014", stage: "Series A" },
      { name: "Rain", year: "2021", stage: "Series A" },
      { name: "Kokomo", year: "2023", stage: "Seed" }
    ],
    recentActivity: [
      { text: "OpenAI unveils GPT-4o", date: "May 13, 2024", type: "Product Launch" },
      { text: "Worldcoin raises $115M", date: "May 07, 2024", type: "Funding" },
      { text: "Invested in Exa", date: "Apr 18, 2024", type: "Investment" },
      { text: "Speaks at AI Summit 2024", date: "Apr 24, 2024", type: "Speaking" },
      { text: "Joins TIME100 AI list", date: "Apr 10, 2024", type: "Recognition" }
    ],
    mediaAppearances: [
      { source: "Forbes", title: "Inside OpenAI's Crisis and Rebirth", date: "Nov 29, 2023", image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=320" },
      { source: "The Verge", title: "Worldcoin launches global token network", date: "Jul 24, 2023", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=320" },
      { source: "The Economist", title: "The future of generative AI", date: "Apr 12, 2024", image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=320" },
      { source: "Lex Fridman Podcast", title: "#419 - Sam Altman: OpenAI, AGI, and GPT-4o", date: "Mar 18, 2024", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=320" }
    ],
    connect: {
      twitter: "@sama",
      linkedin: "/in/sama",
      website: "samaltman.com",
      github: "github.com/samaltman",
      youtube: "youtube.com/@sama",
      email: "Not Public"
    },
    peopleAlsoViewed: [
      { name: "Elon Musk", role: "Founder, xAI", avatar: "/assets/elon_musk.jpg" },
      { name: "Dario Amodei", role: "CEO, Anthropic", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg" },
      { name: "Demis Hassabis", role: "CEO, DeepMind", avatar: "/assets/demis_hassabis.jpg" },
      { name: "Reid Hoffman", role: "Partner, Greylock", avatar: "/assets/reid_hoffman.jpg" },
      { name: "Jensen Huang", role: "CEO, NVIDIA", avatar: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg" }
    ]
  },
  "Dario Amodei": {
    name: "Dario Amodei",
    company: "Anthropic",
    headline: "CEO @ Anthropic",
    verified: true,
    subBadges: ["Researcher", "Co-founder", "Former VP of Research @ OpenAI"],
    location: "San Francisco, CA, USA",
    website: "anthropic.com",
    bio: "Dario Amodei is the CEO and co-founder of Anthropic, a public benefit corporation dedicated to building helpful, honest, and harmless artificial intelligence systems. He previously led safety-focused research at OpenAI.",
    bioTags: ["AI Safety", "Constitutional AI", "Scaling Laws", "Deep Learning", "Public Benefit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg",
    keyAtAGlance: [
      { label: "Focus", value: "Safety, Constitutional AI, Scaling", icon: "🎯" },
      { label: "Current Role", value: "CEO, Anthropic", icon: "💼" },
      { label: "Influence", value: "Leading global AI alignment conversation", icon: "🌐" },
      { label: "Ecosystem", value: "Founder, Researcher, Safety Advocate", icon: "🔗" },
      { label: "Active in", value: "Research, Policy, Public Benefit", icon: "⚡" },
      { label: "Public Presence", value: "5K+ media mentions, congressional testimony", icon: "📣" }
    ],
    stats: [
      { label: "Companies Founded", value: "1", sub: "Anthropic", icon: "🏢" },
      { label: "Total Funding Raised", value: "$7B+", sub: "Across ventures", icon: "💰" },
      { label: "Investments Made", value: "10+", sub: "Focused on research", icon: "📈" },
      { label: "Board & Advisory", value: "2+", sub: "Anthropic Board", icon: "🔷" },
      { label: "Team Built", value: "500+", sub: "Top tier researchers", icon: "👥" },
      { label: "Global Impact", value: "Millions", sub: "Claude AI users", icon: "🌍" }
    ],
    careerJourney: [
      { period: "2021 - Present", title: "CEO & Co-founder, Anthropic", desc: "Co-founded Anthropic to build aligned AI models like Claude.", logo: "anthropic" },
      { period: "2016 - 2020", title: "VP of Research, OpenAI", desc: "Directed core research scaling efforts, GPT-2, GPT-3, and reinforcement learning.", logo: "openai" },
      { period: "2015 - 2016", title: "Research Scientist, Baidu", desc: "Worked on Deep Speech and voice recognition systems under Andrew Ng.", logo: "baidu" },
      { period: "2014 - 2015", title: "Software Engineer, Google", desc: "Focused on machine learning infrastructure and search optimization.", logo: "google" }
    ],
    whatHeIsBuilding: {
      company: "Anthropic",
      companyLogo: "anthropic",
      role: "CEO",
      desc: "Building frontier Claude models with an emphasis on interpretability and alignment.",
      tags: ["Claude", "Claude 3.5 Sonnet", "Constitutional AI", "XML Tags", "Artifacts"],
      linkText: "View Anthropic Profile"
    },
    influenceGraph: {
      nodes: [
        { label: "Anthropic", role: "CEO & Co-founder", type: "Companies", pos: { top: "14%", left: "28%" } },
        { label: "OpenAI", role: "VP of Research", type: "Advisory", pos: { top: "48%", left: "20%" } },
        { label: "Baidu", role: "Research Scientist", type: "Advisory", pos: { top: "82%", left: "28%" } },
        { label: "Google", role: "Software Engineer", type: "Advisory", pos: { top: "14%", left: "72%" } },
        { label: "Stanford University", role: "Postdoc Scholar", type: "Advisory", pos: { top: "48%", left: "80%" } },
        { label: "US Congress", role: "AI Advisor", type: "Advisory", pos: { top: "82%", left: "72%" } },
        { label: "Frontier Model Forum", role: "Board Member", type: "Board Roles", pos: { top: "92%", left: "50%" } }
      ]
    },
    coreFocus: [
      "AI Safety & Alignment",
      "Constitutional AI",
      "Neural Network Interpretability",
      "Scaling Laws & Compute",
      "Responsible Scaling Policies"
    ],
    topInvestments: [
      { name: "Snorkel AI", year: "2021", stage: "Series B" },
      { name: "Scale AI", year: "2020", stage: "Series D" }
    ],
    recentActivity: [
      { text: "Anthropic launches Claude 3.5 Sonnet", date: "Jun 20, 2024", type: "Product Launch" },
      { text: "Anthropic raises $500M from Menlo Ventures", date: "May 15, 2024", type: "Funding" },
      { text: "Dario testifies before Senate on AI safety", date: "Jul 25, 2023", type: "Speaking" }
    ],
    mediaAppearances: [
      { source: "Wired", title: "Inside the Battle for AI Safety: The Anthropic Story", date: "Aug 24, 2023", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=320" },
      { source: "NYT", title: "The Builder of Claude: Who is Dario Amodei?", date: "Apr 04, 2024", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=320" }
    ],
    connect: {
      twitter: "@darioamodei",
      linkedin: "/in/darioamodei",
      website: "anthropic.com",
      github: "github.com/anthropic",
      youtube: "Not Public",
      email: "Not Public"
    },
    peopleAlsoViewed: [
      { name: "Sam Altman", role: "CEO, OpenAI", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg" },
      { name: "Demis Hassabis", role: "CEO, DeepMind", avatar: "/assets/demis_hassabis.jpg" },
      { name: "Aravind Srinivas", role: "CEO, Perplexity", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/65/Aravind_Srinivas_TC_Day_3.jpg" }
    ]
  },
  "Aravind Srinivas": {
    name: "Aravind Srinivas",
    company: "Perplexity",
    headline: "CEO @ Perplexity",
    verified: true,
    subBadges: ["Researcher", "Founder", "Former Scientist @ OpenAI"],
    location: "San Francisco, CA, USA",
    website: "perplexity.ai",
    bio: "Aravind Srinivas is the CEO and co-founder of Perplexity, a conversational AI search engine that answers queries directly. He is dedicated to changing how the world gathers information.",
    bioTags: ["AI Search", "LLMs", "RAG", "Productivity", "Information Retrieval"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Aravind_Srinivas_TC_Day_3.jpg",
    keyAtAGlance: [
      { label: "Focus", value: "Conversational Search, RAG", icon: "🎯" },
      { label: "Current Role", value: "CEO, Perplexity", icon: "💼" },
      { label: "Influence", value: "Redefining web search in the AI era", icon: "🌐" },
      { label: "Ecosystem", value: "Founder, Researcher, Investor", icon: "🔗" },
      { label: "Active in", value: "Search, LLM App Architectures", icon: "⚡" },
      { label: "Public Presence", value: "Frequent podcast guest, active on X", icon: "📣" }
    ],
    stats: [
      { label: "Companies Founded", value: "1", sub: "Perplexity", icon: "🏢" },
      { label: "Total Funding Raised", value: "$165M", sub: "Valued at $1B+", icon: "💰" },
      { label: "Investments Made", value: "5+", sub: "Angel investments", icon: "📈" },
      { label: "Board & Advisory", value: "1", sub: "Perplexity Board", icon: "🔷" },
      { label: "Team Built", value: "60+", sub: "High density engineering", icon: "👥" },
      { label: "Global Impact", value: "10M+", sub: "Monthly active queries", icon: "🌍" }
    ],
    careerJourney: [
      { period: "2022 - Present", title: "CEO & Co-founder, Perplexity", desc: "Co-founded Perplexity to build a conversational answer engine.", logo: "perplexity" },
      { period: "2021 - 2022", title: "Research Scientist, OpenAI", desc: "Worked on reinforcement learning and language model training.", logo: "openai" },
      { period: "2020 - 2021", title: "Research Intern, Google", desc: "Investigated visual representation learning models.", logo: "google" },
      { period: "2017 - 2021", title: "PhD Student, UC Berkeley", desc: "Researched deep learning, reinforcement learning, and computer vision under Pieter Abbeel and Sergey Levine.", logo: "berkeley" }
    ],
    whatHeIsBuilding: {
      company: "Perplexity",
      companyLogo: "perplexity",
      role: "CEO",
      desc: "Developing a fully conversational, source-backed search engine that provides direct answers.",
      tags: ["Perplexity Pro", "Copilot", "RAG", "Conversational Search"],
      linkText: "View Perplexity Profile"
    },
    influenceGraph: {
      nodes: [
        { label: "Perplexity", role: "CEO & Co-founder", type: "Companies", pos: { top: "14%", left: "28%" } },
        { label: "OpenAI", role: "Research Scientist", type: "Advisory", pos: { top: "48%", left: "20%" } },
        { label: "Google", role: "Research Intern", type: "Advisory", pos: { top: "82%", left: "28%" } },
        { label: "UC Berkeley", role: "PhD Researcher", type: "Advisory", pos: { top: "14%", left: "72%" } },
        { label: "Bezos Expeditions", role: "Backed by", type: "Investments", pos: { top: "48%", left: "80%" } },
        { label: "IIT Madras", role: "Alumni", type: "Advisory", pos: { top: "82%", left: "72%" } },
        { label: "Exa AI", role: "Investor", type: "Investments", pos: { top: "92%", left: "50%" } }
      ]
    },
    coreFocus: [
      "Conversational Answer Engines",
      "Retrieval-Augmented Generation",
      "Transformer Architectures",
      "User Experience in Search",
      "Real-time Data Aggregation"
    ],
    topInvestments: [
      { name: "Exa", year: "2023", stage: "Seed" }
    ],
    recentActivity: [
      { text: "Perplexity launches Pages feature", date: "May 30, 2024", type: "Product Launch" },
      { text: "Perplexity raises $63M led by Daniel Gross", date: "Apr 23, 2024", type: "Funding" }
    ],
    mediaAppearances: [
      { source: "Bloomberg", title: "Can Perplexity Challenge Google's Search Dominance?", date: "Jan 04, 2024", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=320" }
    ],
    connect: {
      twitter: "@aravsrinivas",
      linkedin: "/in/aravindsrinivas",
      website: "perplexity.ai",
      github: "github.com/perplex",
      youtube: "Not Public",
      email: "Not Public"
    },
    peopleAlsoViewed: [
      { name: "Sam Altman", role: "CEO, OpenAI", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg" },
      { name: "Dario Amodei", role: "CEO, Anthropic", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg" }
    ]
  },
  "Michael Truell": {
    name: "Michael Truell",
    company: "Cursor",
    headline: "CEO @ Cursor",
    verified: false,
    subBadges: ["Developer", "Co-founder", "AI Tools Pioneer"],
    location: "San Francisco, CA, USA",
    website: "cursor.sh",
    bio: "Michael Truell is the CEO and co-founder of Cursor, the AI-first code editor designed to make developers exceptionally fast. He has built Cursor to streamline developer workflows.",
    bioTags: ["AI Coding", "Developer Tools", "IDE Extensions", "Productivity", "Agentic Coding"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=240",
    keyAtAGlance: [
      { label: "Focus", value: "AI-first IDE, Autocomplete", icon: "🎯" },
      { label: "Current Role", value: "CEO, Cursor", icon: "💼" },
      { label: "Influence", value: "Pioneering the future of software engineering", icon: "🌐" },
      { label: "Ecosystem", value: "Developer, Founder", icon: "🔗" },
      { label: "Active in", value: "Developer Workflows, LLM Tools", icon: "⚡" },
      { label: "Public Presence", value: "Strong developer community following", icon: "📣" }
    ],
    stats: [
      { label: "Companies Founded", value: "1", sub: "Cursor", icon: "🏢" },
      { label: "Total Funding Raised", value: "$300M", sub: "Series B", icon: "💰" },
      { label: "Investments Made", value: "2+", sub: "Developer startups", icon: "📈" },
      { label: "Board & Advisory", value: "1", sub: "Cursor Board", icon: "🔷" },
      { label: "Team Built", value: "20+", sub: "Core compiler engineers", icon: "👥" },
      { label: "Global Impact", value: "500K+", sub: "Active engineers", icon: "🌍" }
    ],
    careerJourney: [
      { period: "2023 - Present", title: "CEO & Co-founder, Cursor", desc: "Building the world's most advanced AI-first IDE.", logo: "cursor" },
      { period: "2018 - 2022", title: "Undergraduate Researcher & Student, MIT", desc: "Studied Computer Science and Mathematics. Awarded Gold Medal at the International Olympiad in Informatics (IOI).", logo: "mit" }
    ],
    whatHeIsBuilding: {
      company: "Cursor",
      companyLogo: "cursor",
      role: "CEO",
      desc: "Creating an AI code editor that enables natural language code edits, indexing, and auto-completions.",
      tags: ["Composer", "Copilot++", "Cmd+K", "Inline Edit"],
      linkText: "View Cursor Profile"
    },
    influenceGraph: {
      nodes: [
        { label: "Cursor", role: "CEO & Co-founder", type: "Companies", pos: { top: "14%", left: "28%" } },
        { label: "MIT", role: "Researcher", type: "Advisory", pos: { top: "48%", left: "20%" } },
        { label: "OpenAI", role: "API Partner", type: "Companies", pos: { top: "82%", left: "28%" } },
        { label: "Y Combinator", role: "W23 Alumni", type: "Advisory", pos: { top: "14%", left: "72%" } },
        { label: "a16z", role: "Series B Lead", type: "Investments", pos: { top: "48%", left: "80%" } },
        { label: "Founders Fund", role: "Series A Lead", type: "Investments", pos: { top: "82%", left: "72%" } },
        { label: "Harvard University", role: "Collaborator", type: "Advisory", pos: { top: "92%", left: "50%" } }
      ]
    },
    coreFocus: [
      "AI Code Completion",
      "Agentic Code Execution",
      "IDE Integration",
      "Context-aware AI Chat",
      "Developer Productivity Tools"
    ],
    topInvestments: [],
    recentActivity: [
      { text: "Cursor launches Composer feature", date: "May 28, 2024", type: "Product Launch" },
      { text: "Cursor raises $300M led by a16z", date: "Jan 15, 2024", type: "Funding" }
    ],
    mediaAppearances: [
      { source: "TechCrunch", title: "Cursor raises Series B at $3B valuation", date: "Jan 16, 2024", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=320" }
    ],
    connect: {
      twitter: "@truell",
      linkedin: "/in/truell",
      website: "cursor.sh",
      github: "github.com/truell20",
      youtube: "Not Public",
      email: "Not Public"
    },
    peopleAlsoViewed: [
      { name: "Sam Altman", role: "CEO, OpenAI", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg" },
      { name: "Aravind Srinivas", role: "CEO, Perplexity", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/65/Aravind_Srinivas_TC_Day_3.jpg" }
    ]
  },
  "Demis Hassabis": {
    name: "Demis Hassabis",
    company: "Google DeepMind",
    headline: "CEO @ Google DeepMind",
    verified: true,
    subBadges: ["Researcher", "Co-founder", "Nobel Laureate", "Chess Prodigy"],
    location: "London, United Kingdom",
    website: "deepmind.google",
    bio: "Demis Hassabis is the CEO and co-founder of DeepMind, now merged into Google DeepMind. A child chess prodigy, game designer, and neuroscience PhD, he leads the team behind AlphaFold, AlphaGo, and Gemini.",
    bioTags: ["AGI", "Reinforcement Learning", "Protein Folding", "Game AI", "Neuroscience"],
    image: "/assets/demis_hassabis.jpg",
    keyAtAGlance: [
      { label: "Focus", value: "AGI, Scientific Discovery, RL", icon: "🎯" },
      { label: "Current Role", value: "CEO, Google DeepMind", icon: "💼" },
      { label: "Influence", value: "Pioneering science-driven AGI research", icon: "🌐" },
      { label: "Ecosystem", value: "Researcher, Founder, Nobel Laureate", icon: "🔗" },
      { label: "Active in", value: "Science, RL, Protein Research", icon: "⚡" },
      { label: "Public Presence", value: "Nobel Prize 2024, prolific speaker", icon: "📣" }
    ],
    stats: [
      { label: "Companies Founded", value: "1", sub: "DeepMind (acq. by Google)", icon: "🏢" },
      { label: "Research Papers", value: "200+", sub: "Published works", icon: "📄" },
      { label: "Awards Won", value: "50+", sub: "Incl. Nobel Prize", icon: "🏆" },
      { label: "Board & Advisory", value: "5+", sub: "Boards worldwide", icon: "🔷" },
      { label: "Team Built", value: "4,000+", sub: "Researchers globally", icon: "👥" },
      { label: "Global Impact", value: "Billions", sub: "Via protein structure", icon: "🌍" }
    ],
    careerJourney: [
      { period: "2023 - Present", title: "CEO, Google DeepMind", desc: "Merged DeepMind with Google Brain to form Google DeepMind, the world's largest AI research lab.", logo: "deepmind" },
      { period: "2010 - 2023", title: "Co-founder & CEO, DeepMind", desc: "Founded DeepMind with Shane Legg and Mustafa Suleyman. Acquired by Google in 2014.", logo: "deepmind" },
      { period: "2004 - 2009", title: "PhD, Neuroscience, UCL", desc: "Researched memory and imagination in the human hippocampus.", logo: "ucl" },
      { period: "1998 - 2003", title: "Founder, Elixir Studios", desc: "Founded independent game design studio, creating BAFTA-nominated games.", logo: "elixir" },
      { period: "1994 - 1998", title: "Game Designer, Bullfrog", desc: "Worked as a game designer on Theme Park and later Black & White.", logo: "bullfrog" }
    ],
    whatHeIsBuilding: {
      company: "Google DeepMind",
      companyLogo: "deepmind",
      role: "CEO",
      desc: "Building next-generation AI systems capable of reasoning across science, medicine, and language.",
      tags: ["Gemini", "AlphaFold 3", "AlphaCode", "Gato", "Veo"],
      linkText: "View DeepMind Profile"
    },
    influenceGraph: {
      nodes: [
        { label: "Google DeepMind", role: "CEO & Co-founder", type: "Companies", pos: { top: "14%", left: "28%" } },
        { label: "DeepMind", role: "Co-founder", type: "Companies", pos: { top: "48%", left: "20%" } },
        { label: "Bullfrog Productions", role: "Game Designer", type: "Companies", pos: { top: "82%", left: "28%" } },
        { label: "Nobel Foundation", role: "Chemistry 2024", type: "Board Roles", pos: { top: "14%", left: "72%" } },
        { label: "UCL", role: "Neuroscience PhD", type: "Advisory", pos: { top: "48%", left: "80%" } },
        { label: "Cambridge University", role: "CS Alumni", type: "Advisory", pos: { top: "82%", left: "72%" } },
        { label: "Royal Society", role: "Fellow", type: "Advisory", pos: { top: "92%", left: "50%" } }
      ]
    },
    coreFocus: [
      "Artificial General Intelligence",
      "Reinforcement Learning",
      "Scientific Discovery via AI",
      "Computational Neuroscience",
      "Protein Structure Prediction"
    ],
    topInvestments: [
      { name: "DeepMind (self)", year: "2010", stage: "Founded" }
    ],
    recentActivity: [
      { text: "Awarded Nobel Prize in Chemistry 2024", date: "Oct 09, 2024", type: "Recognition" },
      { text: "Google DeepMind releases Gemini 2.0 Flash", date: "Dec 11, 2024", type: "Product Launch" },
      { text: "AlphaFold 3 released publicly", date: "May 08, 2024", type: "Research" }
    ],
    mediaAppearances: [
      { source: "Nature", title: "AlphaFold: The AI that solved protein folding", date: "Oct 09, 2024", image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=320" },
      { source: "BBC", title: "Nobel-winning AI scientist Demis Hassabis on the future of AGI", date: "Oct 10, 2024", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=320" }
    ],
    connect: {
      twitter: "@demishassabis",
      linkedin: "/in/demishassabis",
      website: "deepmind.google",
      github: "Not Public",
      youtube: "Not Public",
      email: "Not Public"
    },
    peopleAlsoViewed: [
      { name: "Sam Altman", role: "CEO, OpenAI", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg" },
      { name: "Dario Amodei", role: "CEO, Anthropic", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg" },
      { name: "Jensen Huang", role: "CEO, NVIDIA", avatar: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg" }
    ]
  },
  "Jensen Huang": {
    name: "Jensen Huang",
    company: "NVIDIA",
    headline: "CEO & Co-founder @ NVIDIA",
    verified: true,
    subBadges: ["Co-founder", "Engineer", "AI Infrastructure Pioneer"],
    location: "Santa Clara, CA, USA",
    website: "nvidia.com",
    bio: "Jensen Huang is the co-founder and CEO of NVIDIA, the world's most valuable semiconductor company. He pioneered GPU computing and has made NVIDIA the foundational layer of modern AI infrastructure.",
    bioTags: ["GPU Computing", "AI Infrastructure", "Semiconductors", "CUDA", "Data Centers"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg",
    keyAtAGlance: [
      { label: "Focus", value: "GPU Computing, AI Chips, Data Centers", icon: "🎯" },
      { label: "Current Role", value: "CEO & Co-founder, NVIDIA", icon: "💼" },
      { label: "Influence", value: "Powers virtually all modern AI training", icon: "🌐" },
      { label: "Ecosystem", value: "Founder, Engineer, Chip Designer", icon: "🔗" },
      { label: "Active in", value: "Semiconductors, AI Infrastructure", icon: "⚡" },
      { label: "Public Presence", value: "Iconic GTC keynotes, TIME100 member", icon: "📣" }
    ],
    stats: [
      { label: "Companies Founded", value: "1", sub: "NVIDIA (1993)", icon: "🏢" },
      { label: "Market Cap", value: "$3T+", sub: "World's largest AI co.", icon: "💰" },
      { label: "GPU Architectures", value: "15+", sub: "Spanning 30 years", icon: "📈" },
      { label: "Board & Advisory", value: "3+", sub: "Tech boards", icon: "🔷" },
      { label: "Team Built", value: "32,000+", sub: "Global employees", icon: "👥" },
      { label: "Global Impact", value: "Billions", sub: "AI workloads powered", icon: "🌍" }
    ],
    careerJourney: [
      { period: "1993 - Present", title: "CEO & Co-founder, NVIDIA", desc: "Built NVIDIA from a graphics chip company into the world's AI computing platform.", logo: "nvidia" },
      { period: "1985 - 1993", title: "Director of Microprocessor, LSI Logic", desc: "Led microprocessor design before co-founding NVIDIA.", logo: "lsi" },
      { period: "1983 - 1985", title: "Engineer, AMD", desc: "Worked as a microprocessor design engineer.", logo: "amd" }
    ],
    whatHeIsBuilding: {
      company: "NVIDIA",
      companyLogo: "nvidia",
      role: "CEO",
      desc: "Building the AI computing platform that powers the world's largest models and data centers.",
      tags: ["H100", "Blackwell", "CUDA", "NIM", "DGX Cloud"],
      linkText: "View NVIDIA Profile"
    },
    influenceGraph: {
      nodes: [
        { label: "NVIDIA", role: "CEO & Co-founder", type: "Companies", pos: { top: "14%", left: "28%" } },
        { label: "Stanford University", role: "MS Alumni", type: "Advisory", pos: { top: "48%", left: "20%" } },
        { label: "Oregon State", role: "BS Alumni", type: "Advisory", pos: { top: "82%", left: "28%" } },
        { label: "AMD", role: "Design Engineer", type: "Advisory", pos: { top: "14%", left: "72%" } },
        { label: "LSI Logic", role: "Former Director", type: "Advisory", pos: { top: "48%", left: "80%" } },
        { label: "OpenAI", role: "DGX-1 Donor", type: "Investments", pos: { top: "82%", left: "72%" } },
        { label: "TSMC", role: "Mfg Partner", type: "Advisory", pos: { top: "92%", left: "50%" } }
      ]
    },
    coreFocus: [
      "AI Chip Architecture",
      "GPU Computing (CUDA)",
      "Data Center AI Infrastructure",
      "Autonomous Vehicles (Drive)",
      "Robotics & Physical AI"
    ],
    topInvestments: [
      { name: "CoreWeave", year: "2023", stage: "Series C" },
      { name: "Recursion Pharma", year: "2022", stage: "PIPE" }
    ],
    recentActivity: [
      { text: "NVIDIA announces Blackwell Ultra GPU", date: "Mar 18, 2025", type: "Product Launch" },
      { text: "NVIDIA market cap hits $3T milestone", date: "Jun 18, 2024", type: "Recognition" },
      { text: "NVIDIA GTC Spring Keynote 2024", date: "Mar 18, 2024", type: "Speaking" }
    ],
    mediaAppearances: [
      { source: "TIME", title: "TIME100 AI: Jensen Huang", date: "Sept 07, 2023", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=320" },
      { source: "Forbes", title: "The Chip King of AI: Jensen Huang", date: "Feb 12, 2024", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=320" }
    ],
    connect: {
      twitter: "@jensenhuang",
      linkedin: "/in/jsenhuang",
      website: "nvidia.com",
      github: "Not Public",
      youtube: "Not Public",
      email: "Not Public"
    },
    peopleAlsoViewed: [
      { name: "Sam Altman", role: "CEO, OpenAI", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg" },
      { name: "Demis Hassabis", role: "CEO, DeepMind", avatar: "/assets/demis_hassabis.jpg" },
      { name: "Dario Amodei", role: "CEO, Anthropic", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg" }
    ]
  },
  "Reid Hoffman": {
    name: "Reid Hoffman",
    company: "Greylock Partners",
    headline: "Partner @ Greylock Partners",
    verified: true,
    subBadges: ["Co-founder", "Investor", "Author", "LinkedIn Co-founder"],
    location: "Palo Alto, CA, USA",
    website: "reidhoffman.org",
    bio: "Reid Hoffman is a Partner at Greylock Partners and co-founder of LinkedIn. He is one of Silicon Valley's most prolific investors, backing companies like Airbnb, Asana, Aurora, and numerous AI companies.",
    bioTags: ["Venture Capital", "LinkedIn", "Network Effects", "AI Investment", "Book Author"],
    image: "/assets/reid_hoffman.jpg",
    keyAtAGlance: [
      { label: "Focus", value: "AI Investment, Network Effects", icon: "🎯" },
      { label: "Current Role", value: "Partner, Greylock Partners", icon: "💼" },
      { label: "Influence", value: "Backed transformative tech companies", icon: "🌐" },
      { label: "Ecosystem", value: "Founder, Investor, Author, Board Member", icon: "🔗" },
      { label: "Active in", value: "AI Startups, Policy, Books", icon: "⚡" },
      { label: "Public Presence", value: "Podcast, Author of Blitzscaling", icon: "📣" }
    ],
    stats: [
      { label: "Companies Founded", value: "3", sub: "LinkedIn, SocialNet, Inflection", icon: "🏢" },
      { label: "Portfolio Size", value: "500+", sub: "Companies backed", icon: "💰" },
      { label: "AI Investments", value: "50+", sub: "AI-focused companies", icon: "📈" },
      { label: "Board Seats", value: "20+", sub: "Active & past boards", icon: "🔷" },
      { label: "Books Written", value: "3", sub: "Blitzscaling, etc.", icon: "👥" },
      { label: "Global Impact", value: "Billions", sub: "Via LinkedIn users", icon: "🌍" }
    ],
    careerJourney: [
      { period: "2009 - Present", title: "Partner, Greylock Partners", desc: "Leading AI and consumer internet investments as a senior partner.", logo: "greylock" },
      { period: "2003 - 2009", title: "Co-founder & Executive Chair, LinkedIn", desc: "Co-founded LinkedIn and grew it to 100M+ users before going public.", logo: "linkedin" },
      { period: "2000 - 2002", title: "EVP, PayPal", desc: "Served as Executive Vice President before LinkedIn.", logo: "paypal" },
      { period: "1997 - 2000", title: "CEO, SocialNet.com", desc: "Founded SocialNet, an early online social networking platform.", logo: "socialnet" },
      { period: "1994 - 1996", title: "Product Manager, Apple Computer", desc: "Worked on Apple's eWorld early online service.", logo: "apple" }
    ],
    whatHeIsBuilding: {
      company: "Inflection AI",
      companyLogo: "inflection",
      role: "Co-founder & Investor",
      desc: "Investing in the next wave of AI companies transforming education, healthcare, and productivity.",
      tags: ["Inflection AI", "Pi", "AI Policy", "Greylock AI Fund"],
      linkText: "View Greylock Profile"
    },
    influenceGraph: {
      nodes: [
        { label: "Greylock", role: "Partner", type: "Companies", pos: { top: "14%", left: "28%" } },
        { label: "LinkedIn", role: "Co-founder", type: "Companies", pos: { top: "48%", left: "20%" } },
        { label: "PayPal", role: "EVP & Board Member", type: "Companies", pos: { top: "82%", left: "28%" } },
        { label: "Microsoft", role: "Board Member", type: "Board Roles", pos: { top: "14%", left: "72%" } },
        { label: "Airbnb", role: "Board Member", type: "Board Roles", pos: { top: "48%", left: "80%" } },
        { label: "OpenAI", role: "Co-founder & Backer", type: "Investments", pos: { top: "82%", left: "72%" } },
        { label: "Inflection AI", role: "Co-founder", type: "Companies", pos: { top: "92%", left: "50%" } }
      ]
    },
    coreFocus: [
      "AI-first Company Building",
      "Network Effects Theory",
      "Blitzscaling Methodology",
      "Consumer & Enterprise AI",
      "Tech Policy & Governance"
    ],
    topInvestments: [
      { name: "Airbnb", year: "2010", stage: "Series A" },
      { name: "Aurora", year: "2018", stage: "Series B" },
      { name: "Coda", year: "2017", stage: "Series A" },
      { name: "Convoy", year: "2015", stage: "Series A" },
      { name: "Nauto", year: "2016", stage: "Series A" }
    ],
    recentActivity: [
      { text: "Keynotes on AI Policy at Davos 2024", date: "Jan 18, 2024", type: "Speaking" },
      { text: "Inflection AI merges with Microsoft", date: "Mar 19, 2024", type: "Funding" },
      { text: "Launches AI Governance initiative", date: "Feb 12, 2024", type: "Advisory" }
    ],
    mediaAppearances: [
      { source: "Harvard Business Review", title: "Blitzscaling in the Age of AI", date: "Mar 15, 2024", image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=320" }
    ],
    connect: {
      twitter: "@reidhoffman",
      linkedin: "/in/reidhoffman",
      website: "reidhoffman.org",
      github: "Not Public",
      youtube: "youtube.com/@reidhoffman",
      email: "Not Public"
    },
    peopleAlsoViewed: [
      { name: "Sam Altman", role: "CEO, OpenAI", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg" },
      { name: "Jensen Huang", role: "CEO, NVIDIA", avatar: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg" }
    ]
  }
};

// List of all founders for the listing page
export const ALL_FOUNDERS_LIST = [
  {
    name: "Sam Altman",
    role: "CEO @ OpenAI",
    company: "OpenAI",
    badge: "AGI Pioneer",
    badgeColor: "#f2135d",
    location: "San Francisco, CA",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg",
    tags: ["AGI", "AI Safety", "Venture Capital"],
    verified: true,
    followers: "2.1M",
    connections: "500+"
  },
  {
    name: "Dario Amodei",
    role: "CEO @ Anthropic",
    company: "Anthropic",
    badge: "AI Safety",
    badgeColor: "#2563eb",
    location: "San Francisco, CA",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg",
    tags: ["Claude", "Constitutional AI", "Safety"],
    verified: true,
    followers: "420K",
    connections: "500+"
  },
  {
    name: "Aravind Srinivas",
    role: "CEO @ Perplexity",
    company: "Perplexity",
    badge: "Search AI",
    badgeColor: "#7c3aed",
    location: "San Francisco, CA",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Aravind_Srinivas_TC_Day_3.jpg",
    tags: ["AI Search", "RAG", "LLMs"],
    verified: true,
    followers: "320K",
    connections: "500+"
  },
  {
    name: "Demis Hassabis",
    role: "CEO @ Google DeepMind",
    company: "Google DeepMind",
    badge: "Nobel Laureate",
    badgeColor: "#10b981",
    location: "London, UK",
    image: "/assets/demis_hassabis.jpg",
    tags: ["AlphaFold", "AGI", "Reinforcement Learning"],
    verified: true,
    followers: "680K",
    connections: "500+"
  },
  {
    name: "Jensen Huang",
    role: "CEO @ NVIDIA",
    company: "NVIDIA",
    badge: "AI Infrastructure",
    badgeColor: "#f97316",
    location: "Santa Clara, CA",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg",
    tags: ["GPU", "AI Chips", "CUDA"],
    verified: true,
    followers: "1.8M",
    connections: "500+"
  },
  {
    name: "Reid Hoffman",
    role: "Partner @ Greylock",
    company: "Greylock Partners",
    badge: "VC Investor",
    badgeColor: "#4f46e5",
    location: "Palo Alto, CA",
    image: "/assets/reid_hoffman.jpg",
    tags: ["LinkedIn", "Venture Capital", "Blitzscaling"],
    verified: true,
    followers: "560K",
    connections: "500+"
  },
  {
    name: "Michael Truell",
    role: "CEO @ Cursor",
    company: "Cursor",
    badge: "Dev Tools",
    badgeColor: "#f2135d",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=240",
    tags: ["AI Coding", "IDE", "Developer Tools"],
    verified: false,
    followers: "85K",
    connections: "500+"
  }
];
