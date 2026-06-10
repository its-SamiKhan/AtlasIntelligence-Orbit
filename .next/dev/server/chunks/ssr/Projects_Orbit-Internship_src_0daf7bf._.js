module.exports = [
"[project]/Projects/Orbit-Internship/src/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOUNDERS",
    ()=>FOUNDERS,
    "FUNDINGS",
    ()=>FUNDINGS,
    "INVESTORS",
    ()=>INVESTORS,
    "JOBS",
    ()=>JOBS,
    "MARKETS",
    ()=>MARKETS,
    "NEWS",
    ()=>NEWS,
    "PRODUCTS",
    ()=>PRODUCTS,
    "REPORTS",
    ()=>REPORTS,
    "STARTUPS",
    ()=>STARTUPS
]);
const MARKETS = [
    {
        id: 'ai-agents',
        name: 'AI Agents',
        icon: '🤖',
        color: '#ff4b91',
        bgColor: '#fff0f5'
    },
    {
        id: 'ai-coding',
        name: 'AI Coding',
        icon: '💻',
        color: '#f2135d',
        bgColor: '#ffeef2'
    },
    {
        id: 'ai-search',
        name: 'AI Search',
        icon: '🔍',
        color: '#1d4ed8',
        bgColor: '#eff6ff'
    },
    {
        id: 'ai-infrastructure',
        name: 'AI Infrastructure',
        icon: '⚙️',
        color: '#7c3aed',
        bgColor: '#f5f3ff'
    },
    {
        id: 'ai-healthcare',
        name: 'AI Healthcare',
        icon: '❤️',
        color: '#ea580c',
        bgColor: '#fff7ed'
    },
    {
        id: 'ai-security',
        name: 'AI Security',
        icon: '🛡️',
        color: '#059669',
        bgColor: '#ecfdf5'
    },
    {
        id: 'ai-robotics',
        name: 'AI Robotics',
        icon: '🤖',
        color: '#4f46e5',
        bgColor: '#eef2ff'
    },
    {
        id: 'ai-finance',
        name: 'AI Finance',
        icon: '💵',
        color: '#0891b2',
        bgColor: '#ecfeff'
    }
];
const STARTUPS = [
    {
        id: 'openai',
        name: 'OpenAI',
        description: 'Building AGI that benefits all of humanity.',
        funding: '$11.3B',
        founded: '2015',
        category: 'Foundation',
        categoryClass: 'foundation',
        website: 'https://openai.com',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M21.7,11.2c0.2-1.3-0.2-2.7-1.1-3.6c-0.6-0.7-1.5-1.1-2.4-1.2c-0.4-0.8-1.1-1.5-2-1.8c-1.3-0.5-2.8-0.3-3.9,0.5C11.5,4.5,10.2,4.3,9,4.8C7.9,5.2,7,6.1,6.6,7.2C5.3,7.4,4.2,8.2,3.6,9.4c-0.6,1.2-0.6,2.7-0.1,3.9c-0.2,1.3,0.2,2.7,1.1,3.6c0.6,0.7,1.5,1.1,2.4,1.2c0.4,0.8,1.1,1.5,2,1.8c0.7,0.3,1.4,0.4,2.2,0.2c0.6,0.5,1.3,0.7,2.1,0.7c0.8,0,1.6-0.3,2.2-0.8c0.8,0.3,1.6,0.3,2.4,0c0.9-0.4,1.6-1.1,2-2c1.3-0.2,2.4-1,2.9-2.2C22,14.5,22,12.8,21.7,11.2z M12,14.6c-0.4,0-0.7-0.1-1-0.3l-4.4-2.5c-0.5-0.3-0.7-0.9-0.4-1.4c0.3-0.5,0.9-0.7,1.4-0.4l4.4,2.5V7.4c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1v5.1l4.4-2.5c0.5-0.3,1.1-0.1,1.4,0.4c0.3,0.5,0.1,1.1-0.4,1.4l-4.4,2.5c-0.3,0.2-0.6,0.3-1,0.3V14.6z" />
    </svg>`
    },
    {
        id: 'anthropic',
        name: 'Anthropic',
        description: 'AI safety and research company.',
        funding: '$7B+',
        founded: '2021',
        category: 'AI Safety',
        categoryClass: 'safety',
        website: 'https://www.anthropic.com',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.5 14h-5v-2h5v2zm2-4h-9v-2h9v2zm0-4h-9V7h9v2z" />
      <text x="12" y="16.5" font-family="sans-serif" font-size="11" font-weight="900" text-anchor="middle" fill="#000">AI</text>
    </svg>`
    },
    {
        id: 'cursor',
        name: 'Cursor',
        description: 'The AI-first code editor.',
        funding: '$505M',
        founded: '2022',
        category: 'AI Coding',
        categoryClass: 'coding',
        website: 'https://cursor.com',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="m8 3 4 8 4-8" />
      <path d="m4 21 8-10 8 10" />
      <line x1="12" y1="11" x2="12" y2="21" />
    </svg>`
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        description: 'Answer anything. Start searching.',
        funding: '$525M',
        founded: '2022',
        category: 'Search',
        categoryClass: 'search',
        website: 'https://www.perplexity.ai',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>`
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'AI image generation for creators.',
        funding: '—',
        founded: '2022',
        category: 'Generative AI',
        categoryClass: 'generative',
        website: 'https://www.midjourney.com',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 17c5-3 8-3 13 0M4 14c3-1.5 6-1.5 9 0M2 11c7-3 12-3 18 0M8 6l3 4M15 6l-2 4M3 21h18" />
      <path d="M12 2v4M8 6h8" />
    </svg>`
    },
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        description: 'Hyper-realistic AI voice generation.',
        funding: '$100M',
        founded: '2022',
        category: 'Generative AI',
        categoryClass: 'generative',
        website: 'https://elevenlabs.io',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 10h4v4H3zM10 6h4v12h-4zM17 10h4v4h-4z" />
    </svg>`
    },
    {
        id: 'xai',
        name: 'xAI',
        description: 'Understanding the universe with Grok.',
        funding: '$6.0B',
        founded: '2023',
        category: 'Foundation',
        categoryClass: 'foundation',
        website: 'https://x.ai',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M18.2 3h-2.5l-4.5 6.3L6.8 3H4.3l5.6 7.8L4 19h2.5l5-7 5.4 7h2.5l-6-8.2z" />
    </svg>`
    },
    {
        id: 'mistral',
        name: 'Mistral AI',
        description: 'Open weight LLMs for global developers.',
        funding: '$640M',
        founded: '2023',
        category: 'Foundation',
        categoryClass: 'foundation',
        website: 'https://mistral.ai',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
    </svg>`
    },
    {
        id: 'adept',
        name: 'Adept',
        description: 'Building useful general AI agents that can operate any software tool.',
        funding: '$425M',
        founded: '2022',
        category: 'AI Agents',
        categoryClass: 'agents',
        website: 'https://www.adept.ai',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M12 2v4M8 5h8" />
      <circle cx="8" cy="16" r="1" />
      <circle cx="16" cy="16" r="1" />
    </svg>`
    },
    {
        id: 'figure',
        name: 'Figure',
        description: 'Developing autonomous humanoid robots for labor and service.',
        funding: '$854M',
        founded: '2022',
        category: 'AI Robotics',
        categoryClass: 'robotics',
        website: 'https://www.figure.ai',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v8M8 10h8M10 21v-6h4v6" />
    </svg>`
    },
    {
        id: 'abnormal',
        name: 'Abnormal Security',
        description: 'AI-native email security and threat detection platform.',
        funding: '$284M',
        founded: '2018',
        category: 'AI Security',
        categoryClass: 'security',
        website: 'https://abnormalsecurity.com',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>`
    },
    {
        id: 'tempus',
        name: 'Tempus',
        description: 'AI-enabled precision medicine and genomic data profiling.',
        funding: '$620M',
        founded: '2015',
        category: 'AI Healthcare',
        categoryClass: 'healthcare',
        website: 'https://www.tempus.com',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>`
    },
    {
        id: 'alphasense',
        name: 'AlphaSense',
        description: 'AI-powered market intelligence and financial search platform.',
        funding: '$620M',
        founded: '2011',
        category: 'AI Finance',
        categoryClass: 'finance',
        website: 'https://www.alpha-sense.com',
        logo: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>`
    }
];
const FOUNDERS = [
    {
        name: 'Sam Altman',
        role: 'CEO',
        company: 'OpenAI',
        bio: 'Entrepreneur, investor, and programmer. Co-founder and CEO of OpenAI.',
        website: 'https://blog.samaltman.com',
        socials: {
            twitter: 'samaltman',
            linkedin: 'sam-altman'
        }
    },
    {
        name: 'Dario Amodei',
        role: 'Co-founder & CEO',
        company: 'Anthropic',
        bio: 'Italian-American AI researcher and entrepreneur. Co-founder of Anthropic.',
        website: 'https://anthropic.com',
        socials: {
            twitter: 'darioamodei',
            linkedin: 'dario-amodei'
        }
    },
    {
        name: 'Aravind Srinivas',
        role: 'Co-founder & CEO',
        company: 'Perplexity',
        bio: 'Former researcher at OpenAI, Google, and DeepMind. Building Perplexity.',
        website: 'https://perplexity.ai',
        socials: {
            twitter: 'aravsrinivas',
            linkedin: 'aravind-srinivas'
        }
    },
    {
        name: 'Arvid Lunnemar',
        role: 'Co-founder',
        company: 'Cursor (Anysphere)',
        bio: 'Co-founder and engineer at Cursor, building the future of programming tools.',
        website: 'https://cursor.sh',
        socials: {
            twitter: 'arvidlunnemar',
            linkedin: 'arvid'
        }
    }
];
const INVESTORS = [
    {
        name: 'Sequoia Capital',
        focus: 'Early & Growth Stage',
        portfolio: [
            'OpenAI',
            'Perplexity',
            'Linear',
            'Scale AI'
        ],
        website: 'https://sequoiacap.com'
    },
    {
        name: 'Andreessen Horowitz',
        focus: 'All Stages, AI-First',
        portfolio: [
            'OpenAI',
            'Mistral AI',
            'Luma AI',
            'Character.ai'
        ],
        website: 'https://a16z.com'
    },
    {
        name: 'Lightspeed Venture Partners',
        focus: 'Seed & Venture',
        portfolio: [
            'Mistral AI',
            'Stability AI',
            'Context.ai'
        ],
        website: 'https://lsvp.com'
    },
    {
        name: 'Valor Equity Partners',
        focus: 'Growth & Expansion',
        portfolio: [
            'xAI',
            'Tesla',
            'SpaceX'
        ],
        website: 'https://valorep.com'
    }
];
const PRODUCTS = [
    {
        name: 'ChatGPT',
        company: 'OpenAI',
        category: 'AI Agents',
        description: 'Conversational assistant with advanced reasoning capabilities and general agents.',
        website: 'https://chatgpt.com',
        pricing: 'Freemium'
    },
    {
        name: 'Claude',
        company: 'Anthropic',
        category: 'AI Agents',
        description: 'Helpful, harmless, and honest assistant with large context windows.',
        website: 'https://claude.ai',
        pricing: 'Freemium'
    },
    {
        name: 'Cursor',
        company: 'Anysphere',
        category: 'AI Coding',
        description: 'An AI-first code editor designed for pair programming and refactoring.',
        website: 'https://cursor.com',
        pricing: 'Freemium'
    },
    {
        name: 'Perplexity Pro',
        company: 'Perplexity',
        category: 'AI Search',
        description: 'Conversational answer engine delivering real-time cited answers.',
        website: 'https://perplexity.ai',
        pricing: 'Subscription'
    },
    {
        name: 'Figure 02',
        company: 'Figure',
        category: 'AI Robotics',
        description: 'Commercial-scale humanoid robot designed for industrial work.',
        website: 'https://www.figure.ai',
        pricing: 'Enterprise'
    },
    {
        name: 'Abnormal Email Security',
        company: 'Abnormal Security',
        category: 'AI Security',
        description: 'AI-native email security and email account takeover protection.',
        website: 'https://abnormalsecurity.com',
        pricing: 'Subscription'
    },
    {
        name: 'Tempus One',
        company: 'Tempus',
        category: 'AI Healthcare',
        description: 'Voice-enabled AI clinical assistant helping physicians query patient records.',
        website: 'https://www.tempus.com',
        pricing: 'Enterprise'
    },
    {
        name: 'AlphaSense Search',
        company: 'AlphaSense',
        category: 'AI Finance',
        description: 'Semantic search and analysis platform for corporate and financial research.',
        website: 'https://www.alpha-sense.com',
        pricing: 'Subscription'
    }
];
const FUNDINGS = [
    {
        company: 'Perplexity',
        amount: '$250M',
        stage: 'Series C',
        investor: 'Sequoia Capital',
        date: '2h ago',
        logo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fund-logo">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>`
    },
    {
        company: 'Thinking Machines Lab',
        amount: '$2.0B',
        stage: 'Series A',
        investor: 'Andreessen Horowitz',
        date: '1d ago',
        logo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="fund-logo">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v12M6 12h12" />
    </svg>`
    },
    {
        company: 'Mistral AI',
        amount: '$600M',
        stage: 'Series C',
        investor: 'Lightspeed',
        date: '2d ago',
        logo: `<svg viewBox="0 0 24 24" fill="currentColor" class="fund-logo">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
    </svg>`
    },
    {
        company: 'xAI',
        amount: '$6.0B',
        stage: 'Series B',
        investor: 'Valor Equity Partners',
        date: '3d ago',
        logo: `<svg viewBox="0 0 24 24" fill="currentColor" class="fund-logo">
      <path d="M18.2 3h-2.5l-4.5 6.3L6.8 3H4.3l5.6 7.8L4 19h2.5l5-7 5.4 7h2.5l-6-8.2z" />
    </svg>`
    }
];
const REPORTS = [
    {
        title: 'Top 100 AI Startups 2026',
        description: 'The definitive ranking of the most promising AI startups globally.',
        badge: '2026 Report',
        gradient: 'linear-gradient(135deg, #0f0c20 0%, #15102a 100%)',
        borderGradient: '#ff4b91'
    },
    {
        title: 'State of AI Funding Q1 2026',
        description: 'Investor guide to benchmarking trends and capital allocation.',
        badge: 'Q1 2026 Report',
        gradient: 'linear-gradient(135deg, #09132c 0%, #0c1c42 100%)',
        borderGradient: '#3b82f6'
    },
    {
        title: 'AI Agents Landscape 2026',
        description: 'Mapping the rise of autonomous agents across industries.',
        badge: '2026 Report',
        gradient: 'linear-gradient(135deg, #051a14 0%, #0b2d23 100%)',
        borderGradient: '#10b981'
    },
    {
        title: 'AI Coding Landscape 2026',
        description: 'Deep dive into AI-native dev tools and platforms.',
        badge: '2026 Report',
        gradient: 'linear-gradient(135deg, #180927 0%, #291040 100%)',
        borderGradient: '#8b5cf6'
    }
];
const NEWS = [
    {
        id: 1,
        time: '2h ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'OpenAI launches GPT-4.5 with major reasoning and coding upgrades',
        comments: 128
    },
    {
        id: 2,
        time: '4h ago',
        type: 'FUNDING',
        typeClass: 'funding',
        title: 'Anthropic raises $2.5B in Series C at a $18B valuation',
        comments: 96
    },
    {
        id: 3,
        time: '6h ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'Perplexity unveils Comet, an AI-powered browser for research',
        comments: 74
    },
    {
        id: 4,
        time: '9h ago',
        type: 'PARTNERSHIP',
        typeClass: 'partnership',
        title: 'NVIDIA and Microsoft expand AI infrastructure partnership',
        comments: 62
    },
    {
        id: 5,
        time: '12h ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'Runway Gen-4 launches with next-gen video generation model',
        comments: 48
    },
    {
        id: 6,
        time: '15h ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'ElevenLabs releases new Voice Design API for game developers',
        comments: 34
    },
    {
        id: 7,
        time: '18h ago',
        type: 'FUNDING',
        typeClass: 'funding',
        title: 'Scale AI secures $1.2B strategic funding round from technology consortium',
        comments: 89
    },
    {
        id: 8,
        time: '1d ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'Meta open-sources Llama 4-Dense models with native 1M context length',
        comments: 215
    },
    {
        id: 9,
        time: '2d ago',
        type: 'PARTNERSHIP',
        typeClass: 'partnership',
        title: 'Google Cloud and Mistral AI announce deep hosting agreement',
        comments: 41
    }
];
const JOBS = [
    {
        title: 'Senior AI Research Scientist',
        company: 'OpenAI',
        salary: '$280K - $380K',
        location: 'San Francisco, CA',
        remote: 'Hybrid',
        experience: '5+ years'
    },
    {
        title: 'Full Stack Engineer (AI Editor)',
        company: 'Cursor',
        salary: '$180K - $250K',
        location: 'San Francisco, CA',
        remote: 'Remote Friendly',
        experience: '3+ years'
    },
    {
        title: 'Technical Staff, Alignment Science',
        company: 'Anthropic',
        salary: '$220K - $310K',
        location: 'Seattle, WA',
        remote: 'Hybrid',
        experience: '4+ years'
    },
    {
        title: 'Backend Software Engineer, Search Core',
        company: 'Perplexity',
        salary: '$190K - $260K',
        location: 'San Francisco, CA',
        remote: 'In-office',
        experience: '3+ years'
    }
];
}),
"[project]/Projects/Orbit-Internship/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Orbit-Internship/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Orbit-Internship/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Orbit-Internship/src/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const MARKET_ICONS = {
    "ai-agents": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "11",
                width: "18",
                height: "10",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v3M8 15h.01M16 15h.01M9 19h6"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "ai-coding": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 18 22 12 16 6"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "8 6 2 12 8 18"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "21",
                x2: "14",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "ai-search": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "ai-infrastructure": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "6",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "10",
                width: "20",
                height: "6",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "18",
                width: "20",
                height: "4",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "5",
                x2: "6.01",
                y2: "5"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "13",
                x2: "6.01",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "ai-healthcare": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }, void 0, false, {
            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "ai-security": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }, void 0, false, {
            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "ai-robotics": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "ai-finance": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "1",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function HomePage() {
    // States
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentFilter, setCurrentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showingAllNews, setShowingAllNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        message: ""
    });
    const toastTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Carousel Refs
    const marketsCarouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fundingCarouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Toast Helper
    const showToast = (message)=>{
        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
        }
        setToast({
            show: true,
            message
        });
        toastTimeoutRef.current = setTimeout(()=>{
            setToast({
                show: false,
                message: ""
            });
        }, 3000);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current);
            }
        };
    }, []);
    // Carousel Scroll Controllers
    const handleScroll = (ref, direction)=>{
        const container = ref.current;
        if (!container) return;
        const scrollAmt = container.clientWidth / 2;
        if (direction === "next") {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                container.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                container.scrollBy({
                    left: scrollAmt,
                    behavior: "smooth"
                });
            }
        } else {
            container.scrollBy({
                left: -scrollAmt,
                behavior: "smooth"
            });
        }
    };
    // Sync pill clicking to filter state
    const handlePillClick = (filter)=>{
        setCurrentFilter(filter);
        showToast(`Switched category to: ${filter.toUpperCase()}`);
    };
    // Sync sidebar navigation clicking
    const handleSidebarClick = (tab)=>{
        setSidebarOpen(false);
        if (tab === "discover") {
            setQuery("");
            setCurrentFilter("all");
            showToast("Returned to homepage Dashboard");
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            setCurrentFilter(tab);
            showToast(`Navigating to ${tab.toUpperCase()} section...`);
        }
    };
    // Search execution
    const triggerSearch = ()=>{
        showToast(`Searching for "${query}" in category "${currentFilter}"`);
    };
    // Filter search matches
    const filterMatches = (title, subtitle, desc, itemQuery)=>{
        return title && title.toLowerCase().includes(itemQuery) || subtitle && subtitle.toLowerCase().includes(itemQuery) || desc && desc.toLowerCase().includes(itemQuery);
    };
    // Compile search results
    const getSearchResults = ()=>{
        const searchTerms = query.toLowerCase().trim();
        const results = [];
        // 1. Startups
        if (currentFilter === "all" || currentFilter === "startups") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STARTUPS"].forEach((item)=>{
                if (searchTerms === "" || filterMatches(item.name, item.category, item.description, searchTerms)) {
                    results.push({
                        type: "Startup",
                        title: item.name,
                        subtitle: `${item.category} • Founded ${item.founded}`,
                        desc: item.description,
                        footerText: `Funding: ${item.funding}`,
                        link: item.website
                    });
                }
            });
        }
        // 2. Founders
        if (currentFilter === "all" || currentFilter === "founders") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOUNDERS"].forEach((item)=>{
                if (searchTerms === "" || filterMatches(item.name, `${item.role} at ${item.company}`, item.bio, searchTerms)) {
                    results.push({
                        type: "Founder",
                        title: item.name,
                        subtitle: `${item.role} @ ${item.company}`,
                        desc: item.bio,
                        footerText: `Socials: @${item.socials.twitter}`,
                        link: item.website
                    });
                }
            });
        }
        // 3. Investors
        if (currentFilter === "all" || currentFilter === "investors") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVESTORS"].forEach((item)=>{
                if (searchTerms === "" || filterMatches(item.name, item.focus, item.portfolio.join(", "), searchTerms)) {
                    results.push({
                        type: "Investor",
                        title: item.name,
                        subtitle: `Focus: ${item.focus}`,
                        desc: `Invested in: ${item.portfolio.join(", ")}`,
                        footerText: "Venture Capital",
                        link: item.website
                    });
                }
            });
        }
        // 4. Products
        if (currentFilter === "all" || currentFilter === "products") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].forEach((item)=>{
                if (searchTerms === "" || filterMatches(item.name, item.category, item.description, searchTerms)) {
                    results.push({
                        type: "Product",
                        title: item.name,
                        subtitle: `${item.category} by ${item.company}`,
                        desc: item.description,
                        footerText: `Pricing: ${item.pricing}`,
                        link: item.website
                    });
                }
            });
        }
        // 5. News
        if (currentFilter === "all" || currentFilter === "news") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NEWS"].forEach((item)=>{
                if (searchTerms === "" || filterMatches(item.title, item.type, "", searchTerms)) {
                    results.push({
                        type: "News",
                        title: item.title,
                        subtitle: `${item.type} • ${item.time}`,
                        desc: "Latest report tracking industry movements and breaking AI announcements.",
                        footerText: `${item.comments} Comments`
                    });
                }
            });
        }
        // 6. Funding Rounds
        if (currentFilter === "all" || currentFilter === "funding") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FUNDINGS"].forEach((item)=>{
                if (searchTerms === "" || filterMatches(item.company, `${item.stage} ${item.amount}`, `Lead Investor: ${item.investor}`, searchTerms)) {
                    results.push({
                        type: "Funding Round",
                        title: `${item.company} raises ${item.amount}`,
                        subtitle: `${item.stage} • ${item.date}`,
                        desc: `Lead Investor: ${item.investor}. This round represents strategic expansion of infrastructure capacity.`,
                        footerText: "Funding Tracker"
                    });
                }
            });
        }
        // 7. Jobs
        if (currentFilter === "all" || currentFilter === "jobs") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOBS"].forEach((item)=>{
                if (searchTerms === "" || filterMatches(item.title, `${item.company} ${item.location}`, `${item.salary} • ${item.remote}`, searchTerms)) {
                    results.push({
                        type: "Job",
                        title: item.title,
                        subtitle: `${item.company} • ${item.location} (${item.remote})`,
                        desc: `Requirements: ${item.experience} experience. Compensation: ${item.salary}.`,
                        footerText: "Apply URL"
                    });
                }
            });
        }
        // 8. Research Reports
        if (currentFilter === "research") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REPORTS"].forEach((item)=>{
                if (searchTerms === "" || filterMatches(item.title, item.badge, item.description, searchTerms)) {
                    results.push({
                        type: "Research Report",
                        title: item.title,
                        subtitle: item.badge,
                        desc: item.description,
                        footerText: "Download Available"
                    });
                }
            });
        }
        return results;
    };
    const searchResults = getSearchResults();
    const isSearchActive = query.trim() !== "" || currentFilter !== "all";
    const newsList = showingAllNews ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NEWS"] : __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NEWS"].slice(0, 5);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `sidebar ${sidebarOpen ? "open" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "logo-link",
                            onClick: (e)=>{
                                e.preventDefault();
                                handleSidebarClick("discover");
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "logo-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "28",
                                        height: "28",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                cx: "12",
                                                cy: "12",
                                                rx: "3",
                                                ry: "10",
                                                transform: "rotate(-45 12 12)"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                cx: "12",
                                                cy: "12",
                                                rx: "3",
                                                ry: "10",
                                                transform: "rotate(45 12 12)"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-text",
                                    children: [
                                        "Atlas ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "logo-weight-light",
                                            children: "Intelligence"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "sidebar-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: [
                                {
                                    id: "discover",
                                    label: "Discover",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "9 22 9 12 15 12 15 22"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "news",
                                    label: "News",
                                    badge: "NEW",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 8h2M16 12h2M16 16h2M6 8h6M6 12h6M6 16h6"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "startups",
                                    label: "Startups",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "4",
                                                y: "2",
                                                width: "16",
                                                height: "20",
                                                rx: "2",
                                                ry: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "9",
                                                y1: "22",
                                                x2: "9",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "15",
                                                y1: "22",
                                                x2: "15",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "9",
                                                y1: "16",
                                                x2: "15",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "founders",
                                    label: "Founders",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "9",
                                                cy: "7",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "investors",
                                    label: "Investors",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "7",
                                                width: "20",
                                                height: "14",
                                                rx: "2",
                                                ry: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 355,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "products",
                                    label: "Products",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "funding",
                                    label: "Funding",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 366,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "8",
                                                x2: "12",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "jobs",
                                    label: "Jobs",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "7",
                                                width: "20",
                                                height: "14",
                                                rx: "2",
                                                ry: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "research",
                                    label: "Research",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "14 2 14 8 20 8"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "16",
                                                y1: "13",
                                                x2: "8",
                                                y2: "13"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "16",
                                                y1: "17",
                                                x2: "8",
                                                y2: "17"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 17
                                    }, this)
                                }
                            ].map((tab)=>{
                                const isActive = tab.id === "discover" && currentFilter === "all" && query === "" || tab.id === currentFilter;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: `nav-item ${isActive ? "active" : ""}`,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            handleSidebarClick(tab.id);
                                        },
                                        children: [
                                            tab.icon,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 21
                                            }, this),
                                            tab.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nav-badge",
                                                children: tab.badge
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 19
                                    }, this)
                                }, tab.id, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "btn-signin",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    showToast("Sign-in modal: Opening authentication credentials...");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "18",
                                        height: "18",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "7",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sign in"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary btn-create-account",
                                onClick: ()=>showToast("Registration modal: Opening account setup..."),
                                children: "Create account"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sidebar-tagline",
                                children: [
                                    "One platform.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 55
                                    }, this),
                                    "Complete intelligence."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-socials",
                                children: [
                                    {
                                        label: "Twitter",
                                        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    },
                                    {
                                        label: "LinkedIn",
                                        path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                    },
                                    {
                                        label: "Discord",
                                        path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"
                                    },
                                    {
                                        label: "YouTube",
                                        path: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.389-.507a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                    }
                                ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        "aria-label": social.label,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            showToast(`Redirecting to our ${social.label}...`);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: social.path
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this)
                                    }, social.label, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `sidebar-overlay ${sidebarOpen ? "open" : ""}`,
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-wishlist",
                                onClick: ()=>showToast("Wishlist updated. Tracking 5 products."),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "16",
                                        height: "16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Wishlist"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mobile-menu-toggle",
                                "aria-label": "Toggle Navigation",
                                onClick: ()=>setSidebarOpen(true),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    height: "24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "3",
                                            y1: "12",
                                            x2: "21",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "3",
                                            y1: "6",
                                            x2: "21",
                                            y2: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "3",
                                            y1: "18",
                                            x2: "21",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "hero-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "orbital-background"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "hero-title",
                                                children: [
                                                    "The Intelligence Layer",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 64
                                                    }, this),
                                                    "For The AI Economy"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 483,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hero-subtitle",
                                                children: "Track every AI company, founder, investor, funding round, product launch and market movement."
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 484,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "search-container",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "search-input-wrapper",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                viewBox: "0 0 24 24",
                                                                className: "search-icon",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "11",
                                                                        cy: "11",
                                                                        r: "8"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "21",
                                                                        y1: "21",
                                                                        x2: "16.65",
                                                                        y2: "16.65"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "main-search-input",
                                                                value: query,
                                                                onChange: (e)=>setQuery(e.target.value),
                                                                onKeyPress: (e)=>e.key === "Enter" && triggerSearch(),
                                                                placeholder: "Search startups, founders, investors, products, news, jobs...",
                                                                autoComplete: "off"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-primary btn-search",
                                                        onClick: triggerSearch,
                                                        children: "Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 487,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "search-pills",
                                                children: [
                                                    {
                                                        id: "all",
                                                        label: "All",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "7",
                                                                    height: "9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "14",
                                                                    y: "3",
                                                                    width: "7",
                                                                    height: "5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "14",
                                                                    y: "12",
                                                                    width: "7",
                                                                    height: "9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 513,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "3",
                                                                    y: "16",
                                                                    width: "7",
                                                                    height: "5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 21
                                                        }, this)
                                                    },
                                                    {
                                                        id: "startups",
                                                        label: "Startups",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "4",
                                                                    y: "2",
                                                                    width: "16",
                                                                    height: "20",
                                                                    rx: "2",
                                                                    ry: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "9",
                                                                    y1: "22",
                                                                    x2: "9",
                                                                    y2: "16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "15",
                                                                    y1: "22",
                                                                    x2: "15",
                                                                    y2: "16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 21
                                                        }, this)
                                                    },
                                                    {
                                                        id: "founders",
                                                        label: "Founders",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "9",
                                                                    cy: "7",
                                                                    r: "4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 21
                                                        }, this)
                                                    },
                                                    {
                                                        id: "investors",
                                                        label: "Investors",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "2",
                                                                    y: "7",
                                                                    width: "20",
                                                                    height: "14",
                                                                    rx: "2",
                                                                    ry: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 21
                                                        }, this)
                                                    },
                                                    {
                                                        id: "products",
                                                        label: "Products",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 21
                                                        }, this)
                                                    },
                                                    {
                                                        id: "news",
                                                        label: "News",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 21
                                                        }, this)
                                                    },
                                                    {
                                                        id: "funding",
                                                        label: "Funding",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "12",
                                                                    y1: "8",
                                                                    x2: "12",
                                                                    y2: "16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 21
                                                        }, this)
                                                    },
                                                    {
                                                        id: "jobs",
                                                        label: "Jobs",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "2",
                                                                    y: "7",
                                                                    width: "20",
                                                                    height: "14",
                                                                    rx: "2",
                                                                    ry: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 554,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 21
                                                        }, this)
                                                    }
                                                ].map((pill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `pill-btn ${currentFilter === pill.id ? "active" : ""}`,
                                                        onClick: ()=>handlePillClick(pill.id),
                                                        children: [
                                                            pill.icon,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: pill.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, pill.id, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            isSearchActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "search-results-section",
                                id: "search-results-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "section-title",
                                                children: "Search Results"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-text",
                                                onClick: ()=>{
                                                    setQuery("");
                                                    setCurrentFilter("all");
                                                    showToast("Cleared search queries");
                                                },
                                                children: "Clear Search"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 577,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "results-grid",
                                        children: searchResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "no-results-msg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No results found matching your query. Try adjusting your terms or filters."
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 591,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 590,
                                            columnNumber: 19
                                        }, this) : searchResults.map((res, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "generic-result-card",
                                                onClick: ()=>showToast(`Loading profile: ${res.title}...`),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "result-card-type",
                                                        children: res.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "result-card-title",
                                                        children: res.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "result-card-subtitle",
                                                        children: res.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "result-card-desc",
                                                        children: res.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "result-card-footer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: res.footerText
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "btn-text",
                                                                children: "View details →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 606,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 595,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 574,
                                columnNumber: 13
                            }, this) : /* Main Dashboard Content (Only rendered if search/filter is not active) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dashboard-modules",
                                id: "dashboard-main-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "dashboard-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "section-title",
                                                        children: "Featured AI Companies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "section-link",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            showToast("Viewing all startups...");
                                                        },
                                                        children: [
                                                            "View all startups ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 621,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 620,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "companies-grid",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STARTUPS"].slice(0, 5).map((startup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "company-card",
                                                        onClick: ()=>showToast(`Redirecting to ${startup.name} profile...`),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "company-logo",
                                                                dangerouslySetInnerHTML: {
                                                                    __html: startup.logo
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "company-name",
                                                                children: startup.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "company-desc",
                                                                children: startup.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 633,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "company-metadata",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "company-meta-item",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Funding"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 636,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "company-meta-val",
                                                                                children: startup.funding
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 637,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 635,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "company-meta-item",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Founded"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 640,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "company-meta-val",
                                                                                children: startup.founded
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 641,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "company-tag",
                                                                        children: startup.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 643,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, startup.id, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 624,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "dashboard-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "section-title",
                                                        children: "Explore Markets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "section-link",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            showToast("Viewing all market maps...");
                                                        },
                                                        children: [
                                                            "View all markets ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 655,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 652,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "carousel-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "markets-carousel",
                                                        ref: marketsCarouselRef,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKETS"].map((market)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "market-item",
                                                                onClick: ()=>{
                                                                    setQuery(market.name);
                                                                    showToast(`Filtering markets for ${market.name}`);
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "market-icon-wrapper",
                                                                        children: MARKET_ICONS[market.id] || market.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 669,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "market-name",
                                                                        children: market.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 672,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, market.id, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "carousel-nav-btn next",
                                                        onClick: ()=>handleScroll(marketsCarouselRef, "next"),
                                                        "aria-label": "Next",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "18",
                                                            height: "18",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "9 18 15 12 9 6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 681,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 658,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "dashboard-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-header",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "section-title",
                                                                children: "Funding Intelligence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "section-link",
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    showToast("Viewing all funding deals...");
                                                                },
                                                                children: [
                                                                    "View all funding ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 693,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "section-subtitle",
                                                        children: "Largest rounds this week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 690,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "carousel-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "funding-carousel",
                                                        ref: fundingCarouselRef,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FUNDINGS"].map((fund, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "funding-card",
                                                                onClick: ()=>showToast(`Viewing funding round details for ${fund.company}...`),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "funding-card-header",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "fund-logo-wrapper",
                                                                                dangerouslySetInnerHTML: {
                                                                                    __html: fund.logo
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 708,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "funding-company-details",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "funding-company-name",
                                                                                        children: fund.company
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 710,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "funding-stage",
                                                                                        children: fund.stage
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 711,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 709,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 707,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "funding-amount-wrapper",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "funding-amount",
                                                                                children: fund.amount
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 715,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "funding-stage-pill",
                                                                                children: fund.stage
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 716,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 714,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "funding-investor-details",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "funding-investor-info",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "funding-investor-label",
                                                                                        children: "Lead investor"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 720,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "funding-investor-name",
                                                                                        children: fund.investor
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 721,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 719,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "funding-time",
                                                                                children: fund.date
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 723,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 718,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 702,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "carousel-nav-btn next",
                                                        onClick: ()=>handleScroll(fundingCarouselRef, "next"),
                                                        "aria-label": "Next",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "18",
                                                            height: "18",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "9 18 15 12 9 6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 734,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 699,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 689,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "dashboard-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "section-title",
                                                        children: "Research & Reports"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "section-link",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            showToast("Viewing all research reports...");
                                                        },
                                                        children: [
                                                            "View all reports ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 745,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 742,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "reports-grid",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REPORTS"].map((report, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "report-card",
                                                        style: {
                                                            background: report.gradient,
                                                            border: `1px solid rgba(255,255,255,0.03)`
                                                        },
                                                        onClick: ()=>showToast(`Preparing download for: ${report.title}...`),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "report-badge",
                                                                children: report.badge
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 756,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "report-title",
                                                                children: report.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 757,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "report-desc",
                                                                children: report.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 758,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "report-card-footer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "report-meta-tag",
                                                                        children: "PDF Report"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 760,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "report-arrow-icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 24 24",
                                                                            width: "16",
                                                                            height: "16",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2.5",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    x1: "5",
                                                                                    y1: "12",
                                                                                    x2: "19",
                                                                                    y2: "12"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 763,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                    points: "12 5 19 12 12 19"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 764,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 762,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 761,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 759,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 741,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "dashboard-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-header",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "section-title",
                                                                children: "AI Pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 777,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "section-link",
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    showToast("Viewing all pulse entries...");
                                                                },
                                                                children: [
                                                                    "View all news ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 779,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 778,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "section-subtitle",
                                                        children: "Latest news and product launches"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pulse-list-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pulse-list",
                                                        children: newsList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pulse-item",
                                                                onClick: ()=>showToast(`Opening article: "${item.title}"`),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pulse-icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 24 24",
                                                                            width: "16",
                                                                            height: "16",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 794,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M16 8h2M16 12h2M16 16h2M6 8h6M6 12h6M6 16h6"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 795,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 793,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 792,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "pulse-time",
                                                                        children: item.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 798,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pulse-tag-wrapper",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `pulse-tag ${item.typeClass}`,
                                                                            children: item.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 800,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 799,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "pulse-title",
                                                                        children: item.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 802,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pulse-comments-wrapper",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                viewBox: "0 0 24 24",
                                                                                width: "14",
                                                                                height: "14",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 805,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 804,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: item.comments
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 807,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 803,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 787,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 785,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-show-more",
                                                        onClick: ()=>setShowingAllNews(!showingAllNews),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: showingAllNews ? "Show less" : "Show more"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 813,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                viewBox: "0 0 24 24",
                                                                width: "16",
                                                                height: "16",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                style: {
                                                                    transform: showingAllNews ? "rotate(180deg)" : "rotate(0deg)",
                                                                    transition: "transform var(--transition-fast)"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "6 9 12 15 18 9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 825,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 814,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 784,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 774,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 615,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-brand",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "logo-link",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    handleSidebarClick("discover");
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "logo-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "28",
                                                            height: "28",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 842,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    rx: "3",
                                                                    ry: "10",
                                                                    transform: "rotate(-45 12 12)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 843,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    rx: "3",
                                                                    ry: "10",
                                                                    transform: "rotate(45 12 12)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 844,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 841,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "logo-text",
                                                        children: [
                                                            "Atlas ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "logo-weight-light",
                                                                children: "Intelligence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 847,
                                                                columnNumber: 51
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 839,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "footer-description",
                                                children: "The intelligence layer for the AI economy. Track companies, people, funding, products and market movements."
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 849,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "footer-socials",
                                                children: [
                                                    {
                                                        label: "Twitter",
                                                        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                    },
                                                    {
                                                        label: "LinkedIn",
                                                        path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                    },
                                                    {
                                                        label: "Discord",
                                                        path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"
                                                    },
                                                    {
                                                        label: "YouTube",
                                                        path: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.389-.507a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                                    }
                                                ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        "aria-label": social.label,
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            showToast(`Redirecting to our ${social.label}...`);
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: social.path
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 867,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, social.label, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 850,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 838,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "footer-col-title",
                                                children: "Platform"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 876,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                handleSidebarClick("discover");
                                                            },
                                                            children: "Discover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 878,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 878,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                handleSidebarClick("startups");
                                                            },
                                                            children: "Startups"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 879,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                handleSidebarClick("products");
                                                            },
                                                            children: "Products"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 880,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 880,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                handleSidebarClick("funding");
                                                            },
                                                            children: "Funding"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 881,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 881,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                handleSidebarClick("jobs");
                                                            },
                                                            children: "Jobs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 882,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 877,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 875,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "footer-col-title",
                                                children: "Resources"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 888,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                handleSidebarClick("research");
                                                            },
                                                            children: "Research"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 890,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 890,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Opening Reports archive...");
                                                            },
                                                            children: "Reports"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 891,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Exploring AI Market categories...");
                                                            },
                                                            children: "Markets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 892,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Opening API Reference documentation...");
                                                            },
                                                            children: "API"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 893,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 893,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 889,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 887,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "footer-col-title",
                                                children: "Company"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 899,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("About Us page...");
                                                            },
                                                            children: "About Us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 901,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 901,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Careers opportunities page...");
                                                            },
                                                            children: "Careers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 902,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Atlas Blog articles...");
                                                            },
                                                            children: "Blog"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 903,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Opening Contact modal...");
                                                            },
                                                            children: "Contact Us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 900,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 898,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "footer-col-title",
                                                children: "Legal"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 910,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Terms of Service...");
                                                            },
                                                            children: "Terms of Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 912,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Privacy Policy statement...");
                                                            },
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 913,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 913,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                showToast("Security standards handbook...");
                                                            },
                                                            children: "Security"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 914,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 914,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 911,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 909,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-subscribe",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "subscribe-title",
                                                children: "Stay Updated"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 920,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "subscribe-text",
                                                children: "Get the latest AI economy insights in your inbox."
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                className: "subscribe-form",
                                                onSubmit: (e)=>{
                                                    e.preventDefault();
                                                    const form = e.currentTarget;
                                                    const input = form.querySelector("input");
                                                    showToast(`Thank you! ${input.value} has been subscribed to Atlas insights.`);
                                                    input.value = "";
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        placeholder: "Enter your email",
                                                        required: true,
                                                        className: "subscribe-input",
                                                        "aria-label": "Email for newsletter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn-primary btn-subscribe",
                                                        children: "Subscribe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 933,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 922,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 919,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 836,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-bottom",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "copyright",
                                    children: "© 2026 Atlas Intelligence. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 939,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 938,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 835,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `toast ${toast.show ? "show" : ""}`,
                id: "notification-toast",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "toast-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "toast-message",
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 947,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                    lineNumber: 946,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 945,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Projects_Orbit-Internship_src_0daf7bf._.js.map