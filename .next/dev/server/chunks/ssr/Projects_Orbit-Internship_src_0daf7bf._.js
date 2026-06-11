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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g transform="translate(4, 4) scale(0.66)" fill="#000000">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#EAD9C9" />
      <g transform="translate(4, 4) scale(0.66)" fill="#191919">
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g transform="translate(4, 4) scale(0.66)" fill="#000000">
        <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#E2F6F3" />
      <g transform="translate(4, 4) scale(0.66)" fill="#139D8C">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mj-grad-card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE259" />
          <stop offset="50%" stop-color="#FFA751" />
          <stop offset="100%" stop-color="#FF6584" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g transform="translate(4, 4) scale(0.66)" stroke="#000000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M2 16.5c4-2 7-2 11 0c2.5 1.25 5 1.25 7 0L20 19H4L2 16.5z" fill="#000000" />
        <path d="M11.5 2L4 14.5h7.5V2z" fill="url(#mj-grad-card)" stroke="#000000" />
        <path d="M12.5 4l5.5 10.5h-5.5V4z" fill="url(#mj-grad-card)" stroke="#000000" />
        <path d="M1 21.5c3-1 6-1 9 0s6 1 9 0" stroke="#000000" stroke-width="1.2" />
        <path d="M3 23c2.5-0.8 5-0.8 7.5 0s5 0.8 7.5 0" stroke="#000000" stroke-width="0.8" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g transform="translate(4, 4) scale(0.66)" fill="#000000">
        <path d="M4 18h3V6H4v12zm6-4h3V6h-3v8zm6 4h3V6h-3v12z" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#000000" />
      <g transform="translate(4, 4) scale(0.66)" fill="#ffffff">
        <path d="M18.2 3h-2.5l-4.5 6.3L6.8 3H4.3l5.6 7.8L4 19h2.5l5-7 5.4 7h2.5l-6-8.2z" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g transform="translate(4, 4) scale(0.66)" fill="#FF5F1F">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g transform="translate(4, 4) scale(0.66)" stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M12 2v4M8 5h8" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g transform="translate(4, 4) scale(0.66)" stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v8M8 10h8M10 21v-6h4v6" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#0F172A" />
      <g transform="translate(4, 4) scale(0.66)" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#000000" />
      <g transform="translate(4, 4) scale(0.66)" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#0B132B" />
      <g transform="translate(4, 4) scale(0.66)" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </g>
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
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#E2F6F3" />
      <g transform="translate(4, 4) scale(0.66)" fill="#139D8C">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
      </g>
    </svg>`
    },
    {
        company: 'Scale AI',
        amount: '$1.0B',
        stage: 'Series F',
        investor: 'Accel',
        date: '1d ago',
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#000000" />
      <g transform="translate(4, 4) scale(0.66)" fill="#ffffff">
        <path d="M5 6h14v2H5zm0 4h9v2H5zm0 4h14v4H5z" />
      </g>
    </svg>`
    },
    {
        company: 'Mistral AI',
        amount: '$600M',
        stage: 'Series C',
        investor: 'Lightspeed',
        date: '2d ago',
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g transform="translate(4, 4) scale(0.66)" fill="#FF5F1F">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
      </g>
    </svg>`
    },
    {
        company: 'xAI',
        amount: '$6.0B',
        stage: 'Series B',
        investor: 'Valor Equity Partners',
        date: '3d ago',
        logo: `<svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#000000" />
      <g transform="translate(4, 4) scale(0.66)" fill="#ffffff">
        <path d="M18.2 3h-2.5l-4.5 6.3L6.8 3H4.3l5.6 7.8L4 19h2.5l5-7 5.4 7h2.5l-6-8.2z" />
      </g>
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
        comments: 142,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#10a37f" />
      <g transform="translate(4, 4) scale(0.66)" fill="#ffffff">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </g>
    </svg>`
    },
    {
        id: 2,
        time: '4h ago',
        type: 'FUNDING',
        typeClass: 'funding',
        title: 'Anthropic raises $2.5B in Series C at a $18B valuation',
        comments: 289,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#EAD9C9" />
      <g transform="translate(4, 4) scale(0.66)" fill="#191919">
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
      </g>
    </svg>`
    },
    {
        id: 3,
        time: '6h ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'Perplexity unveils Comet, an AI-powered browser for research',
        comments: 94,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#E2F6F3" />
      <g transform="translate(4, 4) scale(0.66)" fill="#139D8C">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
      </g>
    </svg>`
    },
    {
        id: 4,
        time: '9h ago',
        type: 'PARTNERSHIP',
        typeClass: 'partnership',
        title: 'NVIDIA and Microsoft expand AI infrastructure partnership',
        comments: 312,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#76B900" />
      <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c2.2 0 4.2-.9 5.7-2.3L15.3 15C14.4 15.6 13.2 16 12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.2 0 2.3.5 3.1 1.3l2.4-2.4C16 5.4 14.1 4 12 4z" fill="#ffffff" />
    </svg>`
    },
    {
        id: 5,
        time: '1d ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'Perplexity launches Deep Research agent for automated long-form synthesis',
        comments: 118,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#139D8C" />
      <g transform="translate(4, 4) scale(0.66)" fill="#ffffff">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
      </g>
    </svg>`
    },
    {
        id: 6,
        time: '2d ago',
        type: 'FUNDING',
        typeClass: 'funding',
        title: 'NVIDIA starts shipping Blackwell Ultra GPUs to address enterprise AI training demand',
        comments: 184,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#000000" />
      <path d="M12 4C7.58 4 4 7.58 4 12c0 2.97 1.62 5.56 4.03 6.97l.88-1.56C7.26 16.35 6.18 14.3 6.18 12c0-3.21 2.61-5.82 5.82-5.82 2.18 0 4.08 1.2 5.07 2.97h-2.88c-.68-.81-1.7-1.31-2.81-1.31-2.02 0-3.65 1.63-3.65 3.65s1.63 3.65 3.65 3.65c1.47 0 2.73-.87 3.33-2.11h-4.04v-1.71h5.82v5.82h-1.71v-2.08c-1.01 1.22-2.52 1.97-4.22 1.97-3.08 0-5.59-2.51-5.59-5.59S8.92 6.41 12 6.41c2.14 0 4.01 1.21 4.98 3l1.51-.88C17.22 5.92 14.81 4 12 4z" fill="#76B900" />
    </svg>`
    },
    {
        id: 7,
        time: '2d ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'xAI releases Grok 3 with live multimodal search and enhanced mathematical logic',
        comments: 206,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#000000" />
      <path d="M16.5 4h-2.5l-3.5 5.25L7 4H4.5l4.75 7L4 19h2.5l4-6 4.25 6H17.25l-5.25-7.5z" fill="#ffffff" />
    </svg>`
    },
    {
        id: 8,
        time: '3d ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'Mistral AI launches Pixtral Large 123B multimodal model under open weights',
        comments: 65,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <g fill="#FF5F1F" transform="translate(4, 4) scale(0.66)">
        <path d="M1 22V2h4l6 8 6-8h4v20h-4V8l-6 8-6-8v14H1z" />
      </g>
    </svg>`
    },
    {
        id: 9,
        time: '4d ago',
        type: 'PRODUCT LAUNCH',
        typeClass: 'product-launch',
        title: 'Apple Intelligence goes live globally with deep Siri and writing tools integration',
        comments: 177,
        logo: `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#000000" />
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.1.09 2.26-.54 2.95-1.39z" fill="#ffffff" />
    </svg>`
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
    "TRENDING_MARKETS",
    ()=>TRENDING_MARKETS,
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
const TRENDING_MARKETS = [
    {
        id: 'ai-agents',
        name: 'AI Agents',
        growth: '↑ 24%',
        color: '#f2135d',
        bgColor: 'rgba(242, 19, 93, 0.05)',
        sparkline: 'M 2 12 Q 12 17 22 8 T 48 3'
    },
    {
        id: 'ai-coding',
        name: 'AI Coding',
        growth: '↑ 32%',
        color: '#f2135d',
        bgColor: 'rgba(242, 19, 93, 0.05)',
        sparkline: 'M 2 13 Q 10 18 20 10 T 48 4'
    },
    {
        id: 'ai-search',
        name: 'AI Search',
        growth: '↑ 18%',
        color: '#2563eb',
        bgColor: 'rgba(37, 99, 235, 0.05)',
        sparkline: 'M 2 14 Q 14 16 26 12 T 48 3'
    },
    {
        id: 'ai-video',
        name: 'AI Video',
        growth: '↑ 27%',
        color: '#7c3aed',
        bgColor: 'rgba(124, 58, 237, 0.05)',
        sparkline: 'M 2 15 Q 12 18 22 8 T 48 3'
    },
    {
        id: 'ai-infrastructure',
        name: 'AI Infrastructure',
        growth: '↑ 21%',
        color: '#4f46e5',
        bgColor: 'rgba(79, 70, 229, 0.05)',
        sparkline: 'M 2 14 Q 14 16 26 13 T 48 4'
    },
    {
        id: 'ai-security',
        name: 'AI Security',
        growth: '↑ 16%',
        color: '#10b981',
        bgColor: 'rgba(16, 185, 129, 0.05)',
        sparkline: 'M 2 15 Q 10 18 20 12 T 48 3'
    }
];
const MARKET_ICONS = {
    "ai-video": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                d: "M23 7l-7 5 7 5V7z"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "5",
                width: "15",
                height: "14",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
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
                lineNumber: 42,
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
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v3M8 15h.01M16 15h.01M9 19h6"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 41,
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
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "8 6 2 12 8 18"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "21",
                x2: "14",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 48,
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
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 55,
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
                lineNumber: 62,
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
                lineNumber: 63,
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
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "5",
                x2: "6.01",
                y2: "5"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "13",
                x2: "6.01",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 61,
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
            lineNumber: 71,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 70,
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
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 75,
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
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 80,
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
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function HomePage() {
    // States
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentFilter, setCurrentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showingAllNews, setShowingAllNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAllStartups, setShowAllStartups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalQuery, setModalQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
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
        const saved = localStorage.getItem("sidebar-collapsed");
        if (saved === "false") {
            setSidebarCollapsed(false);
        } else {
            setSidebarCollapsed(true);
        }
    }, []);
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
        } else if (tab === "markets") {
            setQuery("");
            setCurrentFilter("all");
            showToast("Scrolling to Market Maps...");
            setTimeout(()=>{
                const el = document.getElementById("explore-markets-section");
                if (el) el.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 150);
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
        // Intelligent helper to map market queries to data category classes/labels
        const matchesQuery = (itemName, itemCategory, itemDescription, itemCategoryClass)=>{
            if (searchTerms === "") return true;
            const cat = itemCategory.toLowerCase();
            const cls = (itemCategoryClass || "").toLowerCase();
            if (searchTerms === "ai agents") {
                return cat.includes("agent") || cls.includes("agents") || cat.includes("safety");
            }
            if (searchTerms === "ai coding") {
                return cat.includes("coding") || cls.includes("coding");
            }
            if (searchTerms === "ai search") {
                return cat.includes("search") || cls.includes("search");
            }
            if (searchTerms === "ai video") {
                return cat.includes("video") || cls.includes("video") || cat.includes("generative") || cls.includes("generative");
            }
            if (searchTerms === "ai infrastructure") {
                return cat.includes("foundation") || cls.includes("foundation") || cat.includes("infrastructure");
            }
            if (searchTerms === "ai healthcare") {
                return cat.includes("healthcare") || cls.includes("healthcare");
            }
            if (searchTerms === "ai security") {
                return cat.includes("security") || cls.includes("security");
            }
            if (searchTerms === "ai robotics") {
                return cat.includes("robotics") || cls.includes("robotics");
            }
            if (searchTerms === "ai finance") {
                return cat.includes("finance") || cls.includes("finance");
            }
            return filterMatches(itemName, itemCategory, itemDescription, searchTerms);
        };
        // 1. Startups
        if (currentFilter === "all" || currentFilter === "startups") {
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STARTUPS"].forEach((item)=>{
                if (matchesQuery(item.name, item.category, item.description, item.categoryClass)) {
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
                if (matchesQuery(item.name, item.category, item.description)) {
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
    const filteredStartups = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STARTUPS"].filter((startup)=>{
        const term = modalQuery.toLowerCase().trim();
        if (!term) return true;
        return startup.name.toLowerCase().includes(term) || startup.description.toLowerCase().includes(term) || startup.category.toLowerCase().includes(term);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `app-container ${sidebarCollapsed ? "sidebar-collapsed" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `sidebar ${sidebarOpen ? "open" : ""} ${sidebarCollapsed ? "collapsed" : ""}`,
                style: {
                    position: 'fixed',
                    insetY: 0,
                    zIndex: 50
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            const nextVal = !sidebarCollapsed;
                            setSidebarCollapsed(nextVal);
                            localStorage.setItem("sidebar-collapsed", String(nextVal));
                        },
                        className: "desktop-sidebar-toggle",
                        title: sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: `toggle-chevron-icon ${sidebarCollapsed ? "rotated" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "15 18 9 12 15 6"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "logo-link",
                            onClick: (e)=>{
                                e.preventDefault();
                                handleSidebarClick("discover");
                            },
                            style: {
                                overflow: 'hidden'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "logo-icon",
                                    style: {
                                        minWidth: '28px'
                                    },
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
                                                lineNumber: 413,
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
                                                lineNumber: 414,
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
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-text",
                                    style: {
                                        whiteSpace: 'nowrap'
                                    },
                                    children: [
                                        "Atlas ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "logo-weight-light",
                                            children: "Intelligence"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 418,
                                            columnNumber: 102
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 409,
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
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "9 22 9 12 15 12 15 22"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 426,
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
                                                lineNumber: 433,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "9",
                                                y1: "22",
                                                x2: "9",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "15",
                                                y1: "22",
                                                x2: "15",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "9",
                                                y1: "16",
                                                x2: "15",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 432,
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
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "9",
                                                cy: "7",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 440,
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
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 446,
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
                                            lineNumber: 453,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 452,
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
                                                lineNumber: 458,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "8",
                                                x2: "12",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 457,
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
                                                lineNumber: 464,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "markets",
                                    label: "Market Maps",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "nav-icon",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "8",
                                                y1: "2",
                                                x2: "8",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "16",
                                                y1: "6",
                                                x2: "16",
                                                y2: "22"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 17
                                    }, this)
                                },
                                {
                                    id: "news",
                                    label: "News",
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
                                                lineNumber: 477,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 8h2M16 12h2M16 16h2M6 8h6M6 12h6M6 16h6"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 476,
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
                                                lineNumber: 494,
                                                columnNumber: 21
                                            }, this),
                                            tab.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nav-badge",
                                                children: tab.badge
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 485,
                                        columnNumber: 19
                                    }, this)
                                }, tab.id, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-footer",
                        style: sidebarCollapsed ? {
                            borderTop: 'none',
                            padding: '16px 0 0'
                        } : {},
                        children: [
                            !sidebarCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'linear-gradient(135deg, rgba(242, 19, 93, 0.04) 0%, rgba(242, 19, 93, 0.01) 100%)',
                                    border: '1.5px dashed rgba(242, 19, 93, 0.25)',
                                    borderRadius: '12px',
                                    padding: '14px',
                                    marginBottom: '16px',
                                    textAlign: 'left'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '8.5px',
                                            fontWeight: '900',
                                            color: '#f2135d',
                                            letterSpacing: '0.8px',
                                            textTransform: 'uppercase',
                                            backgroundColor: 'rgba(242, 19, 93, 0.08)',
                                            padding: '2px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block',
                                            marginBottom: '6px',
                                            fontFamily: 'var(--font-heading)'
                                        },
                                        children: "PRO PLAN"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: '12px',
                                            fontWeight: '800',
                                            color: 'var(--text-main)',
                                            margin: '0 0 3px',
                                            fontFamily: 'var(--font-heading)'
                                        },
                                        children: "Unlock Premium Data"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '10px',
                                            color: 'var(--text-muted)',
                                            margin: '0 0 10px',
                                            lineHeight: '1.3'
                                        },
                                        children: "Get real-time funding lists, full investor details & alerts."
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-primary",
                                        style: {
                                            width: '100%',
                                            padding: '7px',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>showToast("Upgrade modal: Opening premium tier checkout..."),
                                        children: "Upgrade Now"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 547,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>showToast("Upgrade modal: Opening premium tier checkout..."),
                                style: {
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(242, 19, 93, 0.08)',
                                    border: '1.5px dashed rgba(242, 19, 93, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#f2135d',
                                    cursor: 'pointer',
                                    margin: '0 auto 16px',
                                    padding: 0
                                },
                                title: "Upgrade to Pro",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    width: "14",
                                    height: "14",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 582,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 581,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sidebar-tagline",
                                children: [
                                    "One platform.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 587,
                                        columnNumber: 55
                                    }, this),
                                    "Complete intelligence."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 587,
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
                                                lineNumber: 606,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 605,
                                            columnNumber: 17
                                        }, this)
                                    }, social.label, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `sidebar-overlay ${sidebarOpen ? "open" : ""}`,
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                },
                                children: [
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
                                                    lineNumber: 624,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "3",
                                                    y1: "6",
                                                    x2: "21",
                                                    y2: "6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "3",
                                                    y1: "18",
                                                    x2: "21",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 623,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "logo-link mobile-only-logo",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            handleSidebarClick("discover");
                                        },
                                        style: {
                                            display: 'none'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "logo-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    width: "26",
                                                    height: "26",
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
                                                            lineNumber: 632,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                            cx: "12",
                                                            cy: "12",
                                                            rx: "3",
                                                            ry: "10",
                                                            transform: "rotate(-45 12 12)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                            cx: "12",
                                                            cy: "12",
                                                            rx: "3",
                                                            ry: "10",
                                                            transform: "rotate(45 12 12)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 630,
                                                columnNumber: 15
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
                                                        lineNumber: 637,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 637,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "topbar-right",
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px'
                                },
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
                                                    lineNumber: 644,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 643,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Wishlist"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 646,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 642,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>showToast("Sign-in modal: Opening authentication credentials..."),
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            color: 'var(--text-muted)',
                                            cursor: 'pointer',
                                            transition: 'color 0.2s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--primary)',
                                        onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--text-muted)',
                                        children: "Sign in"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-primary",
                                        style: {
                                            padding: '8px 16px',
                                            borderRadius: '10px',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>showToast("Registration modal: Opening account setup..."),
                                        children: "Create account"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 669,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 620,
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
                                        lineNumber: 689,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "hero-title",
                                                children: [
                                                    "The ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#f2135d'
                                                        },
                                                        children: "Intelligence Layer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 46
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 106
                                                    }, this),
                                                    "For The AI Economy"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 691,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hero-subtitle",
                                                children: "Track every AI company, founder, investor, funding round, product launch and market movement."
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 692,
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
                                                                        lineNumber: 698,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "21",
                                                                        y1: "21",
                                                                        x2: "16.65",
                                                                        y2: "16.65"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 699,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 697,
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
                                                                lineNumber: 701,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-primary btn-search",
                                                        onClick: triggerSearch,
                                                        children: "Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 695,
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
                                                            strokeWidth: "2.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 719,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 720,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 718,
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
                                                                    lineNumber: 725,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "9",
                                                                    y1: "22",
                                                                    x2: "9",
                                                                    y2: "16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "15",
                                                                    y1: "22",
                                                                    x2: "15",
                                                                    y2: "16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 727,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 724,
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
                                                                    lineNumber: 732,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "9",
                                                                    cy: "7",
                                                                    r: "4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 733,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 731,
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
                                                                    lineNumber: 738,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 737,
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
                                                                lineNumber: 744,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 743,
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
                                                                lineNumber: 749,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 748,
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
                                                                    lineNumber: 754,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "12",
                                                                    y1: "8",
                                                                    x2: "12",
                                                                    y2: "16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 755,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 753,
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
                                                                    lineNumber: 760,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 761,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 759,
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
                                                                lineNumber: 771,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, pill.id, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 715,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 688,
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
                                                lineNumber: 782,
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
                                                lineNumber: 783,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 781,
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
                                                lineNumber: 797,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 796,
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
                                                        lineNumber: 806,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "result-card-title",
                                                        children: res.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "result-card-subtitle",
                                                        children: res.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "result-card-desc",
                                                        children: res.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 809,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "result-card-footer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: res.footerText
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 811,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "btn-text",
                                                                children: "View details →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 812,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 801,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 794,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 780,
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
                                                        lineNumber: 825,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "section-link",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            setShowAllStartups(true);
                                                        },
                                                        children: [
                                                            "View all startups ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 827,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 824,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "companies-grid",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STARTUPS"].slice(0, 5).map((startup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "company-card",
                                                        onClick: ()=>{
                                                            showToast(`Opening ${startup.name} website...`);
                                                            window.open(startup.website, "_blank", "noopener,noreferrer");
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "company-logo",
                                                                dangerouslySetInnerHTML: {
                                                                    __html: startup.logo
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "company-name",
                                                                children: startup.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 841,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "company-desc",
                                                                children: startup.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 842,
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
                                                                                lineNumber: 845,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "company-meta-val",
                                                                                children: startup.funding
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 846,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 844,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "company-meta-item",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Founded"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 849,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "company-meta-val",
                                                                                children: startup.founded
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 850,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 848,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "company-tag",
                                                                        children: startup.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 852,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, startup.id, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 830,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "dashboard-section",
                                        id: "explore-markets-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "section-title",
                                                        children: "Trending This Week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 862,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "section-link",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            showToast("Viewing all trend details...");
                                                        },
                                                        style: {
                                                            color: '#f2135d',
                                                            fontWeight: '600'
                                                        },
                                                        children: [
                                                            "View all trends ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 864,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 861,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "carousel-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "markets-carousel",
                                                        ref: marketsCarouselRef,
                                                        children: TRENDING_MARKETS.map((market)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "market-item",
                                                                onClick: ()=>{
                                                                    setQuery(market.name);
                                                                    setCurrentFilter("startups");
                                                                    showToast(`Showing startups in market: ${market.name}`);
                                                                },
                                                                style: {
                                                                    backgroundColor: market.bgColor,
                                                                    borderColor: 'rgba(15, 23, 42, 0.04)',
                                                                    width: '230px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "market-icon-wrapper",
                                                                        style: {
                                                                            backgroundColor: '#ffffff',
                                                                            color: market.color,
                                                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                                                                        },
                                                                        children: MARKET_ICONS[market.id] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "🤖"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 885,
                                                                            columnNumber: 55
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 884,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            flex: 1,
                                                                            minWidth: 0
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "market-name",
                                                                                style: {
                                                                                    display: 'block',
                                                                                    marginBottom: '2px',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis',
                                                                                    whiteSpace: 'nowrap'
                                                                                },
                                                                                children: market.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 888,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'space-between',
                                                                                    width: '100%'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "market-growth",
                                                                                        style: {
                                                                                            color: '#4b5563',
                                                                                            fontSize: '11px',
                                                                                            fontWeight: '500',
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            gap: '2px'
                                                                                        },
                                                                                        children: market.growth
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 890,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "market-sparkline-wrapper",
                                                                                        style: {
                                                                                            margin: 0
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "46",
                                                                                            height: "16",
                                                                                            viewBox: "0 0 50 20",
                                                                                            fill: "none",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                d: market.sparkline,
                                                                                                stroke: market.color,
                                                                                                strokeWidth: "2",
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                                lineNumber: 895,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 894,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 893,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 889,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 887,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, market.id, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 868,
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
                                                                lineNumber: 909,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 908,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 867,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 860,
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
                                                                lineNumber: 919,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "section-link",
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    handleSidebarClick("funding");
                                                                },
                                                                children: [
                                                                    "View all funding ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 921,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 920,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 918,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "section-subtitle",
                                                        children: "Largest rounds this week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 917,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "funding-grid",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$src$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FUNDINGS"].map((fund, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "funding-card-wrapper",
                                                        onClick: ()=>{
                                                            setQuery(fund.company);
                                                            setCurrentFilter("funding");
                                                            showToast(`Showing funding round for ${fund.company}`);
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "funding-card-inner",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "funding-card-front",
                                                                    style: {
                                                                        padding: '16px',
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'space-between',
                                                                        height: '100%'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                alignItems: 'center',
                                                                                textAlign: 'center',
                                                                                width: '100%'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "fund-logo-wrapper",
                                                                                    style: {
                                                                                        width: '48px',
                                                                                        height: '48px',
                                                                                        borderRadius: '12px',
                                                                                        border: '1px solid #e2e8f0',
                                                                                        padding: '4px',
                                                                                        backgroundColor: '#ffffff'
                                                                                    },
                                                                                    dangerouslySetInnerHTML: {
                                                                                        __html: fund.logo
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 941,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "funding-company-name",
                                                                                    style: {
                                                                                        fontSize: '15px',
                                                                                        fontWeight: '800',
                                                                                        margin: '8px 0 2px',
                                                                                        color: '#0f172a'
                                                                                    },
                                                                                    children: fund.company
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 942,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: '11px',
                                                                                        color: '#64748b',
                                                                                        fontWeight: '500',
                                                                                        display: 'block',
                                                                                        minHeight: '16px'
                                                                                    },
                                                                                    children: fund.company === 'Perplexity' ? 'Conversational AI Search' : fund.company === 'Scale AI' ? 'Data Infrastructure for AI' : fund.company === 'Mistral AI' ? 'Open Frontier Models' : fund.company === 'xAI' ? 'Frontier AGI & Infrastructure' : 'AI Technology'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 943,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 940,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                alignItems: 'center',
                                                                                width: '100%',
                                                                                gap: '4px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: '22px',
                                                                                        fontWeight: '800',
                                                                                        color: '#f2135d',
                                                                                        letterSpacing: '-0.5px',
                                                                                        lineHeight: 1.2
                                                                                    },
                                                                                    children: fund.amount
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 952,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: '9px',
                                                                                        textTransform: 'uppercase',
                                                                                        color: '#94a3b8',
                                                                                        fontWeight: '700',
                                                                                        letterSpacing: '0.5px'
                                                                                    },
                                                                                    children: "Amount Raised"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 955,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 951,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '9.5px',
                                                                                fontWeight: '700',
                                                                                color: '#475569',
                                                                                backgroundColor: '#f1f5f9',
                                                                                padding: '3px 10px',
                                                                                borderRadius: '100px',
                                                                                border: '1px solid #e2e8f0'
                                                                            },
                                                                            children: [
                                                                                fund.stage,
                                                                                " • ",
                                                                                fund.date
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 960,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 939,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "funding-card-back",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "funding-card-header",
                                                                            style: {
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: '8px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "fund-logo-wrapper",
                                                                                    style: {
                                                                                        width: '28px',
                                                                                        height: '28px',
                                                                                        borderRadius: '6px'
                                                                                    },
                                                                                    dangerouslySetInnerHTML: {
                                                                                        __html: fund.logo
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 976,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "funding-company-details",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                            className: "funding-company-name",
                                                                                            style: {
                                                                                                fontSize: '13px',
                                                                                                margin: 0
                                                                                            },
                                                                                            children: fund.company
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 978,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "funding-stage",
                                                                                            style: {
                                                                                                fontSize: '10px',
                                                                                                marginTop: 0
                                                                                            },
                                                                                            children: fund.stage
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 979,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 977,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "funding-stage-pill",
                                                                                    style: {
                                                                                        marginLeft: 'auto',
                                                                                        fontSize: '9.5px',
                                                                                        padding: '2px 8px',
                                                                                        backgroundColor: '#f1f5f9',
                                                                                        color: '#475569',
                                                                                        borderRadius: '100px',
                                                                                        fontWeight: '600'
                                                                                    },
                                                                                    children: fund.amount
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 981,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 975,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                height: '36px',
                                                                                width: '100%',
                                                                                margin: '6px 0',
                                                                                position: 'relative'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                viewBox: "0 0 160 36",
                                                                                width: "100%",
                                                                                height: "100%",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                        x1: "0",
                                                                                        y1: "9",
                                                                                        x2: "160",
                                                                                        y2: "9",
                                                                                        stroke: "#f1f5f9",
                                                                                        strokeWidth: "1",
                                                                                        strokeDasharray: "2 2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 988,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                        x1: "0",
                                                                                        y1: "18",
                                                                                        x2: "160",
                                                                                        y2: "18",
                                                                                        stroke: "#f1f5f9",
                                                                                        strokeWidth: "1",
                                                                                        strokeDasharray: "2 2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 989,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                        x1: "0",
                                                                                        y1: "27",
                                                                                        x2: "160",
                                                                                        y2: "27",
                                                                                        stroke: "#f1f5f9",
                                                                                        strokeWidth: "1",
                                                                                        strokeDasharray: "2 2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                        lineNumber: 990,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    (()=>{
                                                                                        const barHeights = idx === 0 ? [
                                                                                            8,
                                                                                            12,
                                                                                            16,
                                                                                            22,
                                                                                            28,
                                                                                            34
                                                                                        ] : idx === 1 ? [
                                                                                            10,
                                                                                            14,
                                                                                            20,
                                                                                            18,
                                                                                            26,
                                                                                            32
                                                                                        ] : idx === 2 ? [
                                                                                            6,
                                                                                            12,
                                                                                            18,
                                                                                            22,
                                                                                            24,
                                                                                            30
                                                                                        ] : [
                                                                                            8,
                                                                                            10,
                                                                                            15,
                                                                                            20,
                                                                                            25,
                                                                                            33
                                                                                        ];
                                                                                        const barWidth = 14;
                                                                                        const spacing = 10;
                                                                                        return barHeights.map((h, i)=>{
                                                                                            const x = 12 + i * (barWidth + spacing);
                                                                                            const y = 36 - h;
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                x: x,
                                                                                                y: y,
                                                                                                width: barWidth,
                                                                                                height: h,
                                                                                                rx: "2",
                                                                                                fill: "#f2135d",
                                                                                                opacity: 0.3 + i / 5 * 0.7
                                                                                            }, i, false, {
                                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                                lineNumber: 1002,
                                                                                                columnNumber: 37
                                                                                            }, this);
                                                                                        });
                                                                                    })()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 986,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 985,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                margin: '2px 0 6px',
                                                                                fontSize: '10.5px',
                                                                                borderBottom: '1px solid #f1f5f9',
                                                                                paddingBottom: '6px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: '#94a3b8',
                                                                                                fontSize: '9px',
                                                                                                display: 'block',
                                                                                                textTransform: 'uppercase',
                                                                                                fontWeight: '600'
                                                                                            },
                                                                                            children: "Valuation"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 1021,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: '#0f172a',
                                                                                                fontWeight: '700'
                                                                                            },
                                                                                            children: fund.company === 'Perplexity' ? '$3.0B Est.' : fund.company === 'Scale AI' ? '$13.8B' : fund.company === 'Mistral AI' ? '$6.0B' : fund.company === 'xAI' ? '$24.0B' : '--'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 1022,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 1020,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        textAlign: 'right'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: '#94a3b8',
                                                                                                fontSize: '9px',
                                                                                                display: 'block',
                                                                                                textTransform: 'uppercase',
                                                                                                fontWeight: '600'
                                                                                            },
                                                                                            children: "HQ Location"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 1030,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: '#475569',
                                                                                                fontWeight: '600'
                                                                                            },
                                                                                            children: fund.company === 'Mistral AI' ? 'Paris, France' : 'San Francisco, CA'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 1031,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 1029,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 1019,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "funding-investor-details",
                                                                            style: {
                                                                                paddingTop: '8px',
                                                                                fontSize: '10px',
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                alignItems: 'flex-end',
                                                                                borderTop: 'none'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "funding-investor-info",
                                                                                    style: {
                                                                                        display: 'flex',
                                                                                        flexDirection: 'column'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "funding-investor-label",
                                                                                            style: {
                                                                                                fontSize: '9px',
                                                                                                color: '#64748b'
                                                                                            },
                                                                                            children: "Lead investor"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 1039,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "funding-investor-name",
                                                                                            style: {
                                                                                                fontWeight: '700',
                                                                                                color: '#0f172a'
                                                                                            },
                                                                                            children: fund.investor
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                            lineNumber: 1040,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 1038,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "funding-time",
                                                                                    style: {
                                                                                        color: '#94a3b8'
                                                                                    },
                                                                                    children: fund.date
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                    lineNumber: 1042,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 1037,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 974,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 937,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 926,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 916,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "dashboard-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "section-title",
                                                    children: "Founder Spotlight"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                    lineNumber: 1054,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1053,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "spotlight-row",
                                                children: [
                                                    {
                                                        name: "Sam Altman",
                                                        role: "CEO, OpenAI",
                                                        quote: "The future belongs to AI-native companies.",
                                                        details: "Founded OpenAI in 2015 and raised over $17B to build AGI.",
                                                        image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg",
                                                        profileUrl: "https://en.wikipedia.org/wiki/Sam_Altman",
                                                        objectPosition: "center 15%"
                                                    },
                                                    {
                                                        name: "Dario Amodei",
                                                        role: "Co-founder & CEO, Anthropic",
                                                        quote: "AI safety is the core of our development.",
                                                        details: "Co-founded Anthropic in 2021 to build reliable, beneficial AGI, raising over $7B.",
                                                        image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg",
                                                        profileUrl: "https://en.wikipedia.org/wiki/Dario_Amodei",
                                                        objectPosition: "center 10%"
                                                    },
                                                    {
                                                        name: "Aravind Srinivas",
                                                        role: "Co-founder & CEO, Perplexity",
                                                        quote: "We are building the answer engine for everyone.",
                                                        details: "Co-founded Perplexity in 2022 to revolutionize search, raising over $500M.",
                                                        image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Aravind_Srinivas_TC_Day_3.jpg",
                                                        profileUrl: "https://en.wikipedia.org/wiki/Perplexity_AI",
                                                        objectPosition: "center 20%"
                                                    },
                                                    {
                                                        name: "Elon Musk",
                                                        role: "Founder, xAI",
                                                        quote: "Understand the true nature of the universe.",
                                                        details: "Founded xAI in 2023 to build Grok and accelerate scientific discovery.",
                                                        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
                                                        profileUrl: "https://en.wikipedia.org/wiki/Elon_Musk",
                                                        objectPosition: "center 15%"
                                                    }
                                                ].map((founder, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "spotlight-card",
                                                        onClick: ()=>{
                                                            showToast(`Redirecting to ${founder.name}'s biography...`);
                                                            window.open(founder.profileUrl, "_blank", "noopener,noreferrer");
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "spotlight-photo-container",
                                                                style: {
                                                                    backgroundColor: founder.bgColor || "#0f172a"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: founder.image,
                                                                    alt: founder.name,
                                                                    loading: "lazy",
                                                                    style: {
                                                                        objectPosition: founder.objectPosition || "center 25%",
                                                                        objectFit: founder.objectFit || "cover"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1104,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1103,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "spotlight-content",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "spotlight-name",
                                                                        children: founder.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1115,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "spotlight-role",
                                                                        children: founder.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1116,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                                        className: "spotlight-quote",
                                                                        children: [
                                                                            '"',
                                                                            founder.quote,
                                                                            '"'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1117,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "spotlight-details",
                                                                        children: founder.details
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1118,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: founder.profileUrl,
                                                                        className: "spotlight-link",
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            showToast(`Redirecting to ${founder.name}'s biography...`);
                                                                        },
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        children: [
                                                                            "View Profile ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "→"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                                lineNumber: 1120,
                                                                                columnNumber: 40
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1119,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1114,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1056,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1052,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "pulse-dark-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header",
                                                style: {
                                                    marginBottom: '24px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '4px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "section-title pulse-dark-title",
                                                                style: {
                                                                    fontSize: '20px',
                                                                    fontWeight: '800',
                                                                    margin: 0
                                                                },
                                                                children: "AI Pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1132,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pulse-dark-subtitle",
                                                                style: {
                                                                    fontSize: '13px'
                                                                },
                                                                children: "Latest news and product launches"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1133,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1131,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "section-link",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            handleSidebarClick("news");
                                                        },
                                                        style: {
                                                            color: '#f2135d',
                                                            fontWeight: '600',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        },
                                                        children: [
                                                            "View all news ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1136,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1135,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                                    gap: '20px',
                                                    width: '100%',
                                                    position: 'relative',
                                                    zIndex: 2
                                                },
                                                children: newsList.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>showToast(`Opening article: "${item.title}"`),
                                                        style: {
                                                            backgroundColor: '#ffffff',
                                                            border: '1px solid var(--border-color)',
                                                            borderRadius: '16px',
                                                            padding: '20px',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'space-between',
                                                            minHeight: '150px',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.2s',
                                                            boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                                            e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)';
                                                            e.currentTarget.style.boxShadow = '0 6px 15px -4px rgba(242, 19, 93, 0.06)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.transform = 'none';
                                                            e.currentTarget.style.borderColor = 'var(--border-color)';
                                                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.01)';
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        alignItems: 'center',
                                                                        marginBottom: '16px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '9px',
                                                                                fontWeight: '800',
                                                                                letterSpacing: '0.5px',
                                                                                padding: '3px 8px',
                                                                                borderRadius: '4px',
                                                                                backgroundColor: item.typeClass === 'partnership' ? '#ecfdf5' : '#fff0f3',
                                                                                color: item.typeClass === 'partnership' ? '#10b981' : '#f2135d'
                                                                            },
                                                                            children: item.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 1179,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '11px',
                                                                                color: '#94a3b8'
                                                                            },
                                                                            children: item.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                            lineNumber: 1190,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1178,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    style: {
                                                                        fontSize: '13.5px',
                                                                        fontWeight: '700',
                                                                        lineHeight: '1.5',
                                                                        color: 'var(--text-main)',
                                                                        margin: 0
                                                                    },
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1196,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1176,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, item.id, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1149,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 821,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "why-atlas-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: "url('/assets/why_atlas_bg.png')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    pointerEvents: 'none',
                                    zIndex: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 1218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative',
                                    zIndex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'inline-block',
                                            marginBottom: '16px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '11px',
                                                fontWeight: '800',
                                                color: '#f2135d',
                                                letterSpacing: '1.5px',
                                                textTransform: 'uppercase',
                                                border: '1.5px solid rgba(242, 19, 93, 0.2)',
                                                borderRadius: '9999px',
                                                padding: '6px 18px',
                                                backgroundColor: 'rgba(242, 19, 93, 0.02)',
                                                fontFamily: 'var(--font-heading)'
                                            },
                                            children: "Why Atlas Intelligence?"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 1232,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1231,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '42px',
                                            fontWeight: '900',
                                            color: 'var(--text-main)',
                                            lineHeight: '1.15',
                                            letterSpacing: '-1.5px',
                                            marginBottom: '16px',
                                            fontFamily: 'var(--font-heading)'
                                        },
                                        children: [
                                            "Everything About AI. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#f2135d'
                                                },
                                                children: "Connected."
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1258,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1249,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '15px',
                                            color: 'var(--text-muted)',
                                            maxWidth: '600px',
                                            margin: '0 auto 56px',
                                            lineHeight: '1.6'
                                        },
                                        children: "Atlas Intelligence unifies every piece of the AI ecosystem so you can discover, track and stay ahead."
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1262,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            maxWidth: '1000px',
                                            margin: '0 auto 64px',
                                            height: '420px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 1000 420",
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    pointerEvents: 'none',
                                                    zIndex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                            id: "glow",
                                                            x: "-20%",
                                                            y: "-20%",
                                                            width: "140%",
                                                            height: "140%",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                                    stdDeviation: "2",
                                                                    result: "blur"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1297,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                                    in: "SourceGraphic",
                                                                    in2: "blur",
                                                                    operator: "over"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1298,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1296,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1295,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "500",
                                                        y1: "210",
                                                        x2: "500",
                                                        y2: "70",
                                                        stroke: "rgba(242, 19, 93, 0.25)",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "4 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1302,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "500",
                                                        y1: "210",
                                                        x2: "690",
                                                        y2: "126",
                                                        stroke: "rgba(242, 19, 93, 0.25)",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "4 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1304,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "500",
                                                        y1: "210",
                                                        x2: "690",
                                                        y2: "294",
                                                        stroke: "rgba(242, 19, 93, 0.25)",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "4 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1306,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "500",
                                                        y1: "210",
                                                        x2: "500",
                                                        y2: "350",
                                                        stroke: "rgba(242, 19, 93, 0.25)",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "4 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1308,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "500",
                                                        y1: "210",
                                                        x2: "310",
                                                        y2: "294",
                                                        stroke: "rgba(242, 19, 93, 0.25)",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "4 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1310,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "500",
                                                        y1: "210",
                                                        x2: "310",
                                                        y2: "126",
                                                        stroke: "rgba(242, 19, 93, 0.25)",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "4 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1312,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "500",
                                                        cy: "140",
                                                        r: "3",
                                                        fill: "#f2135d",
                                                        filter: "url(#glow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1315,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "595",
                                                        cy: "168",
                                                        r: "3",
                                                        fill: "#f2135d",
                                                        filter: "url(#glow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1316,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "595",
                                                        cy: "252",
                                                        r: "3",
                                                        fill: "#f2135d",
                                                        filter: "url(#glow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1317,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "500",
                                                        cy: "280",
                                                        r: "3",
                                                        fill: "#f2135d",
                                                        filter: "url(#glow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1318,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "405",
                                                        cy: "252",
                                                        r: "3",
                                                        fill: "#f2135d",
                                                        filter: "url(#glow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1319,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "405",
                                                        cy: "168",
                                                        r: "3",
                                                        fill: "#f2135d",
                                                        filter: "url(#glow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1320,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1283,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    zIndex: 10,
                                                    width: '84px',
                                                    height: '84px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#ffffff',
                                                    border: '2px solid rgba(242, 19, 93, 0.25)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: '0 8px 30px rgba(242, 19, 93, 0.12), inset 0 2px 4px rgba(255,255,255,0.9)',
                                                    color: '#f2135d'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    width: "36",
                                                    height: "36",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2.2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1339,
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
                                                            lineNumber: 1340,
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
                                                            lineNumber: 1341,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                    lineNumber: 1338,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1324,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>showToast("Product Vision: Bloomberg for AI"),
                                                style: {
                                                    position: 'absolute',
                                                    top: '0%',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    zIndex: 5,
                                                    width: '210px',
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '16px',
                                                    padding: '14px 18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    textAlign: 'left',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.25s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = 'translateX(-50%) translateY(-3px)';
                                                    e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)';
                                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = 'translateX(-50%)';
                                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '8px',
                                                            backgroundColor: 'rgba(242, 19, 93, 0.06)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "#f2135d",
                                                            strokeWidth: "2.2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1361,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1360,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1359,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '800',
                                                                    color: 'var(--text-main)',
                                                                    margin: '0 0 3px'
                                                                },
                                                                children: "Bloomberg for AI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1365,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '10.5px',
                                                                    color: 'var(--text-muted)',
                                                                    margin: 0,
                                                                    lineHeight: '1.3'
                                                                },
                                                                children: '"If I need info on an AI company, I go to Atlas."'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1366,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1364,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1346,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    handlePillClick("investors");
                                                    showToast("Filtering early-stage AI agent startups...");
                                                },
                                                style: {
                                                    position: 'absolute',
                                                    top: '20%',
                                                    right: '10%',
                                                    zIndex: 5,
                                                    width: '210px',
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '16px',
                                                    padding: '14px 18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    textAlign: 'left',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.25s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)';
                                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = 'none';
                                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '8px',
                                                            backgroundColor: 'rgba(242, 19, 93, 0.06)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "#f2135d",
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
                                                                    lineNumber: 1387,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1387,
                                                                    columnNumber: 58
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1386,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1385,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '800',
                                                                    color: 'var(--text-main)',
                                                                    margin: '0 0 3px'
                                                                },
                                                                children: "Investors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1391,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '10.5px',
                                                                    color: 'var(--text-muted)',
                                                                    margin: 0,
                                                                    lineHeight: '1.3'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "VC wants:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1393,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    " Early-stage AI agent startups."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1392,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1390,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1373,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    handlePillClick("startups");
                                                    showToast("Highlighting fastest growing AI companies...");
                                                },
                                                style: {
                                                    position: 'absolute',
                                                    bottom: '20%',
                                                    right: '10%',
                                                    zIndex: 5,
                                                    width: '210px',
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '16px',
                                                    padding: '14px 18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    textAlign: 'left',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.25s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)';
                                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = 'none';
                                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '8px',
                                                            backgroundColor: 'rgba(242, 19, 93, 0.06)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "#f2135d",
                                                            strokeWidth: "2.2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1413,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1413,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1412,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1411,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '800',
                                                                    color: 'var(--text-main)',
                                                                    margin: '0 0 3px'
                                                                },
                                                                children: "Recruiters"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1417,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '10.5px',
                                                                    color: 'var(--text-muted)',
                                                                    margin: 0,
                                                                    lineHeight: '1.3'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "wants:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1419,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    " Fastest growing AI companies."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1418,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1416,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1399,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    handlePillClick("jobs");
                                                    showToast("Searching startups hiring globally...");
                                                },
                                                style: {
                                                    position: 'absolute',
                                                    bottom: '0%',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    zIndex: 5,
                                                    width: '210px',
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '16px',
                                                    padding: '14px 18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    textAlign: 'left',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.25s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = 'translateX(-50%) translateY(-3px)';
                                                    e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)';
                                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = 'translateX(-50%)';
                                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '8px',
                                                            backgroundColor: 'rgba(242, 19, 93, 0.06)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "#f2135d",
                                                            strokeWidth: "2.2",
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
                                                                    lineNumber: 1440,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1440,
                                                                    columnNumber: 76
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1439,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1438,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '800',
                                                                    color: 'var(--text-main)',
                                                                    margin: '0 0 3px'
                                                                },
                                                                children: "Job Seekers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1444,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '10.5px',
                                                                    color: 'var(--text-muted)',
                                                                    margin: 0,
                                                                    lineHeight: '1.3'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "searching:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1446,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    " AI engineer hiring globally."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1445,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1443,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1425,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    handlePillClick("all");
                                                    showToast("Filtering top AI infrastructure startups...");
                                                },
                                                style: {
                                                    position: 'absolute',
                                                    bottom: '20%',
                                                    left: '10%',
                                                    zIndex: 5,
                                                    width: '210px',
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '16px',
                                                    padding: '14px 18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    textAlign: 'left',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.25s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)';
                                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = 'none';
                                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '8px',
                                                            backgroundColor: 'rgba(242, 19, 93, 0.06)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "#f2135d",
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
                                                                    lineNumber: 1466,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "21",
                                                                    y1: "21",
                                                                    x2: "16.65",
                                                                    y2: "16.65"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1466,
                                                                    columnNumber: 51
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1465,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1464,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '800',
                                                                    color: 'var(--text-main)',
                                                                    margin: '0 0 3px'
                                                                },
                                                                children: "Researchers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1470,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '10.5px',
                                                                    color: 'var(--text-muted)',
                                                                    margin: 0,
                                                                    lineHeight: '1.3'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "wants:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1472,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    " Top AI infrastructure startups."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1469,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1452,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    handlePillClick("founders");
                                                    showToast("Querying recent AI coding funding rounds...");
                                                },
                                                style: {
                                                    position: 'absolute',
                                                    top: '20%',
                                                    left: '10%',
                                                    zIndex: 5,
                                                    width: '210px',
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '16px',
                                                    padding: '14px 18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    textAlign: 'left',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.25s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)';
                                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = 'none';
                                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '8px',
                                                            backgroundColor: 'rgba(242, 19, 93, 0.06)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "#f2135d",
                                                            strokeWidth: "2.2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1492,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "9",
                                                                    cy: "7",
                                                                    r: "4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                    lineNumber: 1492,
                                                                    columnNumber: 73
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1491,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1490,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '800',
                                                                    color: 'var(--text-main)',
                                                                    margin: '0 0 3px'
                                                                },
                                                                children: "Founders"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1496,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '10.5px',
                                                                    color: 'var(--text-muted)',
                                                                    margin: 0,
                                                                    lineHeight: '1.3'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "wants:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                        lineNumber: 1498,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    " Which AI coding startups raised money recently?"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1497,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1495,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1478,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1273,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '40px',
                                            textAlign: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '16px',
                                                fontWeight: '900',
                                                color: 'var(--text-main)',
                                                fontFamily: 'var(--font-heading)',
                                                letterSpacing: '-0.3px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            },
                                            children: [
                                                "Unifying the AI Economy in ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#f2135d'
                                                    },
                                                    children: "One Single Place."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                    lineNumber: 1518,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 1509,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1505,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 1229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 1216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "footer",
                        style: {
                            marginTop: '16px'
                        },
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
                                                                    lineNumber: 1532,
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
                                                                    lineNumber: 1533,
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
                                                                    lineNumber: 1534,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1531,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1530,
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
                                                                lineNumber: 1537,
                                                                columnNumber: 51
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1537,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1529,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "footer-description",
                                                children: "The intelligence layer for the AI economy. Track companies, people, funding, products and market movements."
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1539,
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
                                                                lineNumber: 1557,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                            lineNumber: 1556,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, social.label, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1547,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1540,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1528,
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
                                                lineNumber: 1566,
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
                                                            lineNumber: 1568,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1568,
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
                                                            lineNumber: 1569,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1569,
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
                                                            lineNumber: 1570,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1570,
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
                                                            lineNumber: 1571,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1571,
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
                                                            lineNumber: 1572,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1572,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1567,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1565,
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
                                                lineNumber: 1578,
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
                                                            lineNumber: 1580,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1580,
                                                        columnNumber: 17
                                                    }, this),
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
                                                            lineNumber: 1581,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1581,
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
                                                            lineNumber: 1582,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1582,
                                                        columnNumber: 17
                                                    }, this),
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
                                                            lineNumber: 1583,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1583,
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
                                                            lineNumber: 1584,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1584,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1579,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1577,
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
                                                lineNumber: 1590,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "subscribe-text",
                                                children: "Get the latest AI economy insights in your inbox."
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1591,
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
                                                        lineNumber: 1602,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn-primary btn-subscribe",
                                                        children: "Subscribe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1603,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1592,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1589,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 1526,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-bottom",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "copyright",
                                    children: "© 2026 Atlas Intelligence. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 1609,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                lineNumber: 1608,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                        lineNumber: 1525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this),
            showAllStartups && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>{
                    setShowAllStartups(false);
                    setModalQuery("");
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "modal-title",
                                            children: "All AI Startups"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 1620,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "modal-subtitle",
                                            children: "Browse and filter the complete database of active AI companies"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 1621,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 1619,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-close-btn",
                                    "aria-label": "Close",
                                    onClick: ()=>{
                                        setShowAllStartups(false);
                                        setModalQuery("");
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "20",
                                        height: "20",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1625,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1626,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1624,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 1623,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                            lineNumber: 1618,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-search-bar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    className: "modal-search-icon",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 1633,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                            lineNumber: 1634,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 1632,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Filter startups by name, description, or category...",
                                    value: modalQuery,
                                    onChange: (e)=>setModalQuery(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 1636,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                            lineNumber: 1631,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-grid",
                            children: [
                                filteredStartups.map((startup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "company-card modal-company-card",
                                        onClick: ()=>{
                                            showToast(`Redirecting to ${startup.name} profile...`);
                                            setShowAllStartups(false);
                                            setModalQuery("");
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "company-logo",
                                                dangerouslySetInnerHTML: {
                                                    __html: startup.logo
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1655,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "company-name",
                                                children: startup.name
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1656,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "company-desc",
                                                children: startup.description
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1657,
                                                columnNumber: 19
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
                                                                lineNumber: 1660,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "company-meta-val",
                                                                children: startup.funding
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1661,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1659,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "company-meta-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Founded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1664,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "company-meta-val",
                                                                children: startup.founded
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                                lineNumber: 1665,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1663,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "company-tag",
                                                        children: startup.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                        lineNumber: 1667,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                                lineNumber: 1658,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, startup.id, true, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1646,
                                        columnNumber: 17
                                    }, this)),
                                filteredStartups.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-no-results",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Orbit$2d$Internship$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No startups found matching your filter terms."
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                        lineNumber: 1673,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                                    lineNumber: 1672,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                            lineNumber: 1644,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                    lineNumber: 1617,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 1616,
                columnNumber: 9
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
                        lineNumber: 1684,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                    lineNumber: 1683,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
                lineNumber: 1682,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/Orbit-Internship/src/app/page.tsx",
        lineNumber: 391,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Projects_Orbit-Internship_src_0daf7bf._.js.map