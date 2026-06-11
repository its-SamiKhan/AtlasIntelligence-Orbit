export interface Market {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  funding: string;
  founded: string;
  category: string;
  categoryClass: string;
  website: string;
  logo: string;
}

export interface Founder {
  name: string;
  role: string;
  company: string;
  bio: string;
  website: string;
  socials: {
    twitter: string;
    linkedin: string;
  };
}

export interface Investor {
  name: string;
  focus: string;
  portfolio: string[];
  website: string;
}

export interface Product {
  name: string;
  company: string;
  category: string;
  description: string;
  website: string;
  pricing: string;
}

export interface Funding {
  company: string;
  amount: string;
  stage: string;
  investor: string;
  date: string;
  logo: string;
}

export interface Report {
  title: string;
  description: string;
  badge: string;
  gradient: string;
  borderGradient: string;
}

export interface NewsItem {
  id: number;
  time: string;
  type: string;
  typeClass: string;
  title: string;
  comments: number;
  logo: string;
}

export interface JobItem {
  title: string;
  company: string;
  salary: string;
  location: string;
  remote: string;
  experience: string;
}

export const MARKETS: Market[] = [
  { id: 'ai-agents', name: 'AI Agents', icon: '🤖', color: '#ff4b91', bgColor: '#fff0f5' },
  { id: 'ai-coding', name: 'AI Coding', icon: '💻', color: '#f2135d', bgColor: '#ffeef2' },
  { id: 'ai-search', name: 'AI Search', icon: '🔍', color: '#1d4ed8', bgColor: '#eff6ff' },
  { id: 'ai-infrastructure', name: 'AI Infrastructure', icon: '⚙️', color: '#7c3aed', bgColor: '#f5f3ff' },
  { id: 'ai-healthcare', name: 'AI Healthcare', icon: '❤️', color: '#ea580c', bgColor: '#fff7ed' },
  { id: 'ai-security', name: 'AI Security', icon: '🛡️', color: '#059669', bgColor: '#ecfdf5' },
  { id: 'ai-robotics', name: 'AI Robotics', icon: '🤖', color: '#4f46e5', bgColor: '#eef2ff' },
  { id: 'ai-finance', name: 'AI Finance', icon: '💵', color: '#0891b2', bgColor: '#ecfeff' }
];

export const STARTUPS: Startup[] = [
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

export const FOUNDERS: Founder[] = [
  {
    name: 'Sam Altman',
    role: 'CEO',
    company: 'OpenAI',
    bio: 'Entrepreneur, investor, and programmer. Co-founder and CEO of OpenAI.',
    website: 'https://blog.samaltman.com',
    socials: { twitter: 'samaltman', linkedin: 'sam-altman' }
  },
  {
    name: 'Dario Amodei',
    role: 'Co-founder & CEO',
    company: 'Anthropic',
    bio: 'Italian-American AI researcher and entrepreneur. Co-founder of Anthropic.',
    website: 'https://anthropic.com',
    socials: { twitter: 'darioamodei', linkedin: 'dario-amodei' }
  },
  {
    name: 'Aravind Srinivas',
    role: 'Co-founder & CEO',
    company: 'Perplexity',
    bio: 'Former researcher at OpenAI, Google, and DeepMind. Building Perplexity.',
    website: 'https://perplexity.ai',
    socials: { twitter: 'aravsrinivas', linkedin: 'aravind-srinivas' }
  },
  {
    name: 'Arvid Lunnemar',
    role: 'Co-founder',
    company: 'Cursor (Anysphere)',
    bio: 'Co-founder and engineer at Cursor, building the future of programming tools.',
    website: 'https://cursor.sh',
    socials: { twitter: 'arvidlunnemar', linkedin: 'arvid' }
  }
];

export const INVESTORS: Investor[] = [
  {
    name: 'Sequoia Capital',
    focus: 'Early & Growth Stage',
    portfolio: ['OpenAI', 'Perplexity', 'Linear', 'Scale AI'],
    website: 'https://sequoiacap.com'
  },
  {
    name: 'Andreessen Horowitz',
    focus: 'All Stages, AI-First',
    portfolio: ['OpenAI', 'Mistral AI', 'Luma AI', 'Character.ai'],
    website: 'https://a16z.com'
  },
  {
    name: 'Lightspeed Venture Partners',
    focus: 'Seed & Venture',
    portfolio: ['Mistral AI', 'Stability AI', 'Context.ai'],
    website: 'https://lsvp.com'
  },
  {
    name: 'Valor Equity Partners',
    focus: 'Growth & Expansion',
    portfolio: ['xAI', 'Tesla', 'SpaceX'],
    website: 'https://valorep.com'
  }
];

export const PRODUCTS: Product[] = [
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

export const FUNDINGS: Funding[] = [
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

export const REPORTS: Report[] = [
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

export const NEWS: NewsItem[] = [
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

export const JOBS: JobItem[] = [
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
