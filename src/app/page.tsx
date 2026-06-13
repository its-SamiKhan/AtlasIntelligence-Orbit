"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MARKETS,
  STARTUPS,
  FOUNDERS,
  INVESTORS,
  PRODUCTS,
  FUNDINGS,
  REPORTS,
  NEWS,
  JOBS,
  Startup,
  Founder,
  Investor,
  Product,
  NewsItem,
  Funding,
  Report,
  JobItem
} from "../data";
import { FOUNDERS_DETAILS, FounderDetails, ALL_FOUNDERS_LIST } from "./founderData";

export const TRENDING_MARKETS = [
  { id: 'ai-agents', name: 'AI Agents', growth: '↑ 24%', color: '#f2135d', bgColor: 'rgba(242, 19, 93, 0.05)', sparkline: 'M 2 12 Q 12 17 22 8 T 48 3' },
  { id: 'ai-coding', name: 'AI Coding', growth: '↑ 32%', color: '#f2135d', bgColor: 'rgba(242, 19, 93, 0.05)', sparkline: 'M 2 13 Q 10 18 20 10 T 48 4' },
  { id: 'ai-search', name: 'AI Search', growth: '↑ 18%', color: '#2563eb', bgColor: 'rgba(37, 99, 235, 0.05)', sparkline: 'M 2 14 Q 14 16 26 12 T 48 3' },
  { id: 'ai-video', name: 'AI Video', growth: '↑ 27%', color: '#7c3aed', bgColor: 'rgba(124, 58, 237, 0.05)', sparkline: 'M 2 15 Q 12 18 22 8 T 48 3' },
  { id: 'ai-infrastructure', name: 'AI Infrastructure', growth: '↑ 21%', color: '#4f46e5', bgColor: 'rgba(79, 70, 229, 0.05)', sparkline: 'M 2 14 Q 14 16 26 13 T 48 4' },
  { id: 'ai-security', name: 'AI Security', growth: '↑ 16%', color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.05)', sparkline: 'M 2 15 Q 10 18 20 12 T 48 3' }
];

const MARKET_ICONS: Record<string, React.ReactNode> = {
  "ai-video": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  "ai-agents": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M12 8v3M8 15h.01M16 15h.01M9 19h6" />
    </svg>
  ),
  "ai-coding": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="10" y1="21" x2="14" y2="3" />
    </svg>
  ),
  "ai-search": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  "ai-infrastructure": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="6" rx="1" />
      <rect x="2" y="10" width="20" height="6" rx="1" />
      <rect x="2" y="18" width="20" height="4" rx="1" />
      <line x1="6" y1="5" x2="6.01" y2="5" />
      <line x1="6" y1="13" x2="6.01" y2="13" />
    </svg>
  ),
  "ai-healthcare": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  "ai-security": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "ai-robotics": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  "ai-finance": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
};

const jobLogos = {
  OpenAI: (
    <div style={{ backgroundColor: '#000000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    </div>
  ),
  Anthropic: (
    <div style={{ backgroundColor: '#EAD9C9', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#191919">
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
      </svg>
    </div>
  ),
  Meta: (
    <div style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#0064e0">
        <path d="M16.8 5c-1.3 0-2.6.7-3.4 1.7-.4.5-.8 1.1-1.1 1.7-.1.2-.4.2-.5 0-.3-.6-.7-1.2-1.1-1.7-.8-1-2.1-1.7-3.4-1.7C5 5 3 6.9 3 9.4c0 2.2 1.4 3.9 3.2 4.6 1.4.5 3 .2 4.1-.7.2-.2.5-.2.7 0 1.1.9 2.7 1.2 4.1.7 1.8-.7 3.2-2.4 3.2-4.6C19.7 6.9 17.7 5 16.8 5zm-9.5 7.4c-1.2 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3c.7 0 1.3.4 1.7.9.6.7.7 1.8.1 2.5-.4.5-1 1.2-1.8 1.2zm8 0c-.8 0-1.4-.7-1.8-1.2-.6-.7-.5-1.8.1-2.5.4-.5 1-.9 1.7-.9 1.2 0 2.3 1 2.3 2.3s-1.1 2.3-2.3 2.3z"/>
      </svg>
    </div>
  ),
  Perplexity: (
    <div style={{ backgroundColor: '#1b132c', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '18px', fontFamily: 'var(--font-heading)' }}>S</span>
    </div>
  )
};

const investorLogos = {
  Sequoia: (
    <div style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M12 2L4 18h6v4h4v-4h6z" fill="#008a47" />
      </svg>
    </div>
  ),
  a16z: (
    <div style={{ backgroundColor: '#ff5a00', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: '#ffffff', fontSize: '9px', fontWeight: '900', fontFamily: 'sans-serif' }}>a16z</span>
    </div>
  ),
  Lightspeed: (
    <div style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M3 21h18L15 3h-4z" fill="#ff3b30" />
      </svg>
    </div>
  ),
  YC: (
    <div style={{ backgroundColor: '#ff6600', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Y</span>
    </div>
  )
};

function getKeyIcon(label: string) {
  const labelLower = label.toLowerCase();
  if (labelLower.includes("focus")) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  if (labelLower.includes("role")) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    );
  }
  if (labelLower.includes("influence")) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    );
  }
  if (labelLower.includes("ecosystem")) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }
  if (labelLower.includes("active")) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }
  if (labelLower.includes("presence") || labelLower.includes("public")) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function getStatIcon(label: string) {
  const labelLower = label.toLowerCase();
  if (labelLower.includes("founded") || labelLower.includes("companies")) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
        <line x1="9" y1="16" x2="15" y2="16" />
        <path d="M8 6h2M8 10h2M14 6h2M14 10h2" />
      </svg>
    );
  }
  if (labelLower.includes("funding")) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }
  if (labelLower.includes("investments") || labelLower.includes("invested")) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    );
  }
  if (labelLower.includes("board") || labelLower.includes("advisory")) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  if (labelLower.includes("team") || labelLower.includes("employees")) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (labelLower.includes("impact") || labelLower.includes("global") || labelLower.includes("users")) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

const INVESTMENT_LOGOS: Record<string, { bg: string; logo: React.ReactNode }> = {
  stripe: {
    bg: '#635bff',
    logo: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
      </svg>
    )
  },
  airbnb: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF5A5F">
        <path d="M11.985 15.36c-1.977 0-2.941-1.516-2.941-3.038 0-1.523.964-3.038 2.941-3.038 1.977 0 2.94 1.515 2.94 3.038.001 1.522-.963 3.038-2.94 3.038zm5.75-4.38c-.195-.672-.455-1.32-.776-1.928C15.63 6.672 13.89 5 12 5c-1.89 0-3.63 1.672-4.96 4.052-.32.608-.58 1.256-.775 1.928a.5.5 0 0 0 .34.62c.16.047.336.016.47-.085 1.058-.798 2.286-1.225 3.543-1.225 1.048 0 2.081.32 2.95.898 1.01.682 1.82 1.665 2.386 2.9l.184.409a.5.5 0 0 0 .918-.003l.174-.388a11.3 11.3 0 0 0 .786-2.925.498.498 0 0 0-.295-.501z"/>
      </svg>
    )
  },
  databricks: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FF3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  confluent: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#003666" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17"/>
        <circle cx="12" cy="12" r="3" fill="#003666"/>
      </svg>
    )
  },
  rain: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF1A1A">
        <path d="M17.5 19A4.5 4.5 0 0 0 22 14.5c0-2.3-1.7-4.2-4-4.5A7 7 0 0 0 5 11.5c-2.3.3-4 2.2-4 4.5A4.5 4.5 0 0 0 5.5 19h12z"/>
      </svg>
    )
  },
  kokomo: {
    bg: '#000',
    logo: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.5">
        <rect x="6" y="6" width="12" height="12" rx="2"/>
        <path d="M9 12h6M12 9v6"/>
      </svg>
    )
  },
  scaleai: {
    bg: '#000',
    logo: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff">
        <path d="M2 2h20v4H2zm0 8h20v4H2zm0 8h20v4H2z"/>
      </svg>
    )
  },
  snorkelai: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8v16a4 4 0 0 1-4 4 4 4 0 0 1-4-4V2z"/><path d="M12 10V2"/>
      </svg>
    )
  },
  exa: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
      </svg>
    )
  },
  deepmindself: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 40 40" width="20" height="20" fill="#1a73e8">
        <polygon points="20,4 36,20 20,36 4,20"/>
      </svg>
    )
  },
  coreweave: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  recursionpharma: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ef4444" strokeWidth="2">
        <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="#ef4444"/>
      </svg>
    )
  },
  aurora: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f59e0b" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
      </svg>
    )
  },
  coda: {
    bg: '#000',
    logo: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
      </svg>
    )
  },
  convoy: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10b981" strokeWidth="2">
        <path d="M2 20h20M2 16h20M2 12h20M2 8h20"/>
      </svg>
    )
  },
  nauto: {
    bg: '#fff',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3b82f6" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>
      </svg>
    )
  }
};

const getFocusAreaIcon = (area: string) => {
  const norm = area.toLowerCase();
  
  // 1. Safety & Alignment (Blue)
  if (norm.includes('safety') || norm.includes('alignment') || norm.includes('scaling policies')) {
    return {
      bg: '#eff6ff',
      icon: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    };
  }
  
  // 2. Compute / Infrastructure / Chips / Hardware (Blue)
  if (norm.includes('compute') || norm.includes('infrastructure') || norm.includes('chip') || norm.includes('hardware') || norm.includes('gpu')) {
    return {
      bg: '#eff6ff',
      icon: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <path d="M9 9h6M9 15h6M9 12h6"/>
        </svg>
      )
    };
  }
  
  // 3. AGI & Research & Science (Purple)
  if (norm.includes('agi') || norm.includes('general intelligence') || norm.includes('science') || norm.includes('neuroscience') || norm.includes('theory') || norm.includes('interpretability') || norm.includes('learning')) {
    return {
      bg: '#f5f3ff',
      icon: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <circle cx="12" cy="12" r="3" fill="#7c3aed"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
        </svg>
      )
    };
  }
  
  // 4. Governance & Policy (Purple)
  if (norm.includes('governance') || norm.includes('policy')) {
    return {
      bg: '#f5f3ff',
      icon: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v20M2 12h20"/>
        </svg>
      )
    };
  }
  
  // 5. Product, Innovation, Business, UX (Purple)
  if (norm.includes('product') || norm.includes('innovation') || norm.includes('ux') || norm.includes('design') || norm.includes('building') || norm.includes('consumer') || norm.includes('blitzscaling') || norm.includes('network effects')) {
    return {
      bg: '#f5f3ff',
      icon: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    };
  }
  
  // Default: Purple target
  return {
    bg: '#f5f3ff',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="3" fill="#7c3aed"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
    )
  };
};

export default function HomePage() {
  // States
  const [query, setQuery] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showingAllNews, setShowingAllNews] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [showAllStartups, setShowAllStartups] = useState(false);
  const [modalQuery, setModalQuery] = useState("");
  const [selectedFounder, setSelectedFounder] = useState<FounderDetails | null>(null);
  
  const [toast, setToast] = useState({ show: false, message: "" });
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Carousel Refs
  const marketsCarouselRef = useRef<HTMLDivElement>(null);
  const fundingCarouselRef = useRef<HTMLDivElement>(null);

  // Toast Helper
  const showToast = (message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast({ show: true, message });
    toastTimeoutRef.current = setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3000);
  };

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved === "false") {
      setSidebarCollapsed(false);
    } else {
      setSidebarCollapsed(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  // Scroll to top of the page when search query, filter category, or selected founder changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentFilter, query, selectedFounder]);

  // Carousel Scroll Controllers
  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "next" | "prev") => {
    const container = ref.current;
    if (!container) return;
    
    const scrollAmt = container.clientWidth / 2;
    if (direction === "next") {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmt, behavior: "smooth" });
      }
    } else {
      container.scrollBy({ left: -scrollAmt, behavior: "smooth" });
    }
  };

  // Sync pill clicking to filter state
  const handlePillClick = (filter: string) => {
    setSelectedFounder(null);
    setCurrentFilter(filter);
    showToast(`Switched category to: ${filter.toUpperCase()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync sidebar navigation clicking
  const handleSidebarClick = (tab: string) => {
    setSidebarOpen(false);
    setSelectedFounder(null);
    
    if (tab === "discover") {
      setQuery("");
      setCurrentFilter("all");
      showToast("Returned to homepage Dashboard");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (tab === "markets") {
      setQuery("");
      setCurrentFilter("all");
      showToast("Scrolling to Market Maps...");
      setTimeout(() => {
        const el = document.getElementById("explore-markets-section");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    } else {
      setCurrentFilter(tab);
      showToast(`Navigating to ${tab.toUpperCase()} section...`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Search execution
  const triggerSearch = () => {
    setSelectedFounder(null);
    showToast(`Searching for "${query}" in category "${currentFilter}"`);
  };

  // Filter search matches
  const filterMatches = (title: string, subtitle: string, desc: string, itemQuery: string) => {
    return (
      (title && title.toLowerCase().includes(itemQuery)) ||
      (subtitle && subtitle.toLowerCase().includes(itemQuery)) ||
      (desc && desc.toLowerCase().includes(itemQuery))
    );
  };

  // Compile search results
  const getSearchResults = () => {
    const searchTerms = query.toLowerCase().trim();
    const results: Array<{
      type: string;
      title: string;
      subtitle: string;
      desc: string;
      footerText: string;
      link?: string;
    }> = [];

    // Intelligent helper to map market queries to data category classes/labels
    const matchesQuery = (itemName: string, itemCategory: string, itemDescription: string, itemCategoryClass?: string) => {
      if (searchTerms === "") return true;

      const cat = itemCategory.toLowerCase();
      const cls = (itemCategoryClass || "").toLowerCase();

      if (searchTerms === "ai agents") {
        return cat.includes("agent") || cls.includes("agents") || cat.includes("safety");
      }
      if (searchTerms === "generative ai") {
        return cat.includes("generative") || cls.includes("generative") || cat.includes("video") || cls.includes("video");
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
      if (searchTerms === "ai security") {
        return cat.includes("security") || cls.includes("security");
      }
      if (searchTerms === "ai healthcare") {
        return cat.includes("healthcare") || cls.includes("healthcare");
      }
      if (searchTerms === "ai legal") {
        return cat.includes("legal") || cls.includes("legal");
      }
      if (searchTerms === "ai education") {
        return cat.includes("education") || cls.includes("education");
      }
      if (searchTerms === "ai sales") {
        return cat.includes("sales") || cls.includes("sales");
      }
      if (searchTerms === "ai marketing") {
        return cat.includes("marketing") || cls.includes("marketing");
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
      STARTUPS.forEach((item) => {
        if (matchesQuery(item.name, item.category, item.description, item.categoryClass)) {
          results.push({
            type: "Startup",
            title: item.name,
            subtitle: `${item.category} • Founded ${item.founded}`,
            desc: item.description,
            footerText: `Funding: ${item.funding}`,
            link: item.website,
          });
        }
      });
    }

    // 2. Founders
    if (currentFilter === "all" || currentFilter === "founders") {
      FOUNDERS.forEach((item) => {
        if (searchTerms === "" || filterMatches(item.name, `${item.role} at ${item.company}`, item.bio, searchTerms)) {
          results.push({
            type: "Founder",
            title: item.name,
            subtitle: `${item.role} @ ${item.company}`,
            desc: item.bio,
            footerText: `Socials: @${item.socials.twitter}`,
            link: item.website,
          });
        }
      });
    }

    // 3. Investors
    if (currentFilter === "all" || currentFilter === "investors") {
      INVESTORS.forEach((item) => {
        if (searchTerms === "" || filterMatches(item.name, item.focus, item.portfolio.join(", "), searchTerms)) {
          results.push({
            type: "Investor",
            title: item.name,
            subtitle: `Focus: ${item.focus}`,
            desc: `Invested in: ${item.portfolio.join(", ")}`,
            footerText: "Venture Capital",
            link: item.website,
          });
        }
      });
    }

    // 4. Products
    if (currentFilter === "all" || currentFilter === "products") {
      PRODUCTS.forEach((item) => {
        if (matchesQuery(item.name, item.category, item.description)) {
          results.push({
            type: "Product",
            title: item.name,
            subtitle: `${item.category} by ${item.company}`,
            desc: item.description,
            footerText: `Pricing: ${item.pricing}`,
            link: item.website,
          });
        }
      });
    }

    // 5. News
    if (currentFilter === "all" || currentFilter === "news") {
      NEWS.forEach((item) => {
        if (searchTerms === "" || filterMatches(item.title, item.type, "", searchTerms)) {
          results.push({
            type: "News",
            title: item.title,
            subtitle: `${item.type} • ${item.time}`,
            desc: "Latest report tracking industry movements and breaking AI announcements.",
            footerText: `${item.comments} Comments`,
          });
        }
      });
    }

    // 6. Funding Rounds
    if (currentFilter === "all" || currentFilter === "funding") {
      FUNDINGS.forEach((item) => {
        if (searchTerms === "" || filterMatches(item.company, `${item.stage} ${item.amount}`, `Lead Investor: ${item.investor}`, searchTerms)) {
          results.push({
            type: "Funding Round",
            title: `${item.company} raises ${item.amount}`,
            subtitle: `${item.stage} • ${item.date}`,
            desc: `Lead Investor: ${item.investor}. This round represents strategic expansion of infrastructure capacity.`,
            footerText: "Funding Tracker",
          });
        }
      });
    }

    // 7. Jobs
    if (currentFilter === "all" || currentFilter === "jobs") {
      JOBS.forEach((item) => {
        if (searchTerms === "" || filterMatches(item.title, `${item.company} ${item.location}`, `${item.salary} • ${item.remote}`, searchTerms)) {
          results.push({
            type: "Job",
            title: item.title,
            subtitle: `${item.company} • ${item.location} (${item.remote})`,
            desc: `Requirements: ${item.experience} experience. Compensation: ${item.salary}.`,
            footerText: "Apply URL",
          });
        }
      });
    }

    // 8. Research Reports
    if (currentFilter === "research") {
      REPORTS.forEach((item) => {
        if (searchTerms === "" || filterMatches(item.title, item.badge, item.description, searchTerms)) {
          results.push({
            type: "Research Report",
            title: item.title,
            subtitle: item.badge,
            desc: item.description,
            footerText: "Download Available",
          });
        }
      });
    }

    return results;
  };

  const searchResults = getSearchResults();
  const isSearchActive = query.trim() !== "" || currentFilter !== "all";
  
  const newsList = showingAllNews ? NEWS : NEWS.slice(0, 5);
  
  const filteredStartups = STARTUPS.filter((startup) => {
    const term = modalQuery.toLowerCase().trim();
    if (!term) return true;
    return (
      startup.name.toLowerCase().includes(term) ||
      startup.description.toLowerCase().includes(term) ||
      startup.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className={`app-container ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      {/* Sidebar Navigation */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""} ${sidebarCollapsed ? "collapsed" : ""}`} style={{ position: 'fixed', insetY: 0, zIndex: 50 }}>
        {/* Collapse/Expand Toggle Button sitting on the border, styled exactly like TalentDash */}
        <button
          onClick={() => {
            const nextVal = !sidebarCollapsed;
            setSidebarCollapsed(nextVal);
            localStorage.setItem("sidebar-collapsed", String(nextVal));
          }}
          className="desktop-sidebar-toggle"
          title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`toggle-chevron-icon ${sidebarCollapsed ? "rotated" : ""}`}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="sidebar-header">
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); handleSidebarClick("discover"); }} style={{ overflow: 'hidden' }}>
            <div className="logo-icon" style={{ minWidth: '28px' }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(-45 12 12)"/>
                <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(45 12 12)"/>
              </svg>
            </div>
            {!sidebarCollapsed && <span className="logo-text" style={{ whiteSpace: 'nowrap' }}>Graph <span className="logo-weight-light">One</span></span>}
          </a>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {[
              { id: "discover", label: "Discover", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              )},
              { id: "startups", label: "Startups", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="22" x2="9" y2="16" />
                  <line x1="15" y1="22" x2="15" y2="16" />
                  <line x1="9" y1="16" x2="15" y2="16" />
                </svg>
              )},
              { id: "founders", label: "Founders", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              )},
              { id: "investors", label: "Investors", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              )},
              { id: "products", label: "Products", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              )},
              { id: "funding", label: "Funding", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                </svg>
              )},
              { id: "jobs", label: "Jobs", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              )},
              { id: "markets", label: "Market Maps", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
              )},
              { id: "news", label: "News", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M16 8h2M16 12h2M16 16h2M6 8h6M6 12h6M6 16h6" />
                </svg>
              )}
            ].map((tab) => {
              const isActive = (tab.id === "discover" && currentFilter === "all" && query === "") || (tab.id === currentFilter);
              return (
                <li key={tab.id}>
                  <a
                     href="#"
                     className={`nav-item ${isActive ? "active" : ""}`}
                     onClick={(e) => {
                       e.preventDefault();
                       handleSidebarClick(tab.id);
                     }}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    {tab.badge && <span className="nav-badge">{tab.badge}</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer" style={sidebarCollapsed ? { borderTop: 'none', padding: '16px 0 0' } : {}}>

          {/* Pro Plan Card Widget */}
          {!sidebarCollapsed ? (
            <div style={{
              background: 'linear-gradient(135deg, rgba(242, 19, 93, 0.04) 0%, rgba(242, 19, 93, 0.01) 100%)',
              border: '1.5px dashed rgba(242, 19, 93, 0.25)',
              borderRadius: '12px',
              padding: '14px',
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              <span style={{
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
              }}>
                PRO PLAN
              </span>
              <h4 style={{
                fontSize: '12px',
                fontWeight: '800',
                color: 'var(--text-main)',
                margin: '0 0 3px',
                fontFamily: 'var(--font-heading)'
              }}>
                Unlock Premium Data
              </h4>
              <p style={{
                fontSize: '10px',
                color: 'var(--text-muted)',
                margin: '0 0 10px',
                lineHeight: '1.3'
              }}>
                Get real-time funding lists, full investor details & alerts.
              </p>
              <button
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '7px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
                onClick={() => showToast("Upgrade modal: Opening premium tier checkout...")}
              >
                Upgrade Now
              </button>
            </div>
          ) : (
            <button
              onClick={() => showToast("Upgrade modal: Opening premium tier checkout...")}
              style={{
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
              }}
              title="Upgrade to Pro"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </button>
          )}
          
          <p className="sidebar-tagline">One platform.<br />Complete intelligence.</p>
          
          <div className="sidebar-socials">
            {[
              { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
              { label: "Discord", path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" },
              { label: "YouTube", path: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.389-.507a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
            ].map((social) => (
              <a
                href="#"
                aria-label={social.label}
                key={social.label}
                onClick={(e) => {
                  e.preventDefault();
                  showToast(`Redirecting to our ${social.label}...`);
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Drawer mobile sidebar overlay */}
      <div className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)} />

      {/* Main Content Layout */}
      <div className="main-layout">
        {/* Top Header */}
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="mobile-menu-toggle" aria-label="Toggle Navigation" onClick={() => setSidebarOpen(true)}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <a href="#" className="logo-link mobile-only-logo" onClick={(e) => { e.preventDefault(); handleSidebarClick("discover"); }} style={{ display: 'none' }}>
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(-45 12 12)"/>
                  <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(45 12 12)"/>
                </svg>
              </div>
              <span className="logo-text">Graph <span className="logo-weight-light">One</span></span>
            </a>
          </div>

          <div className="topbar-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button className="btn-wishlist" onClick={() => showToast("Wishlist updated. Tracking 5 products.")}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>Wishlist</span>
            </button>

            <button
              onClick={() => showToast("Sign-in modal: Opening authentication credentials...")}
              style={{
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
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              Sign in
            </button>

            <button
              className="btn-primary"
              style={{
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onClick={() => showToast("Registration modal: Opening account setup...")}
            >
              Create account
            </button>
          </div>
        </header>

        {/* Dashboard page container */}
        <div className="content-container">
          {selectedFounder ? (
            <div className="founder-profile-detail-container" style={{ padding: '24px 0', background: 'transparent' }}>
              {/* Topbar: Breadcrumbs + Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px', borderBottom: '1px solid var(--border-color)', background: '#fff', borderRadius: '12px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setSelectedFounder(null); }} style={{ color: 'var(--text-muted)', fontWeight: '500', textDecoration: 'none' }}>Home</a>
                  <span style={{ color: 'var(--text-light)', fontSize: '11px' }}>›</span>
                  <a href="#" onClick={(e) => { e.preventDefault(); setSelectedFounder(null); setCurrentFilter('founders'); }} style={{ color: 'var(--text-muted)', fontWeight: '500', textDecoration: 'none' }}>People</a>
                  <span style={{ color: 'var(--text-light)', fontSize: '11px' }}>›</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{selectedFounder.name}</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => showToast('Profile link copied!')} style={{ padding: '7px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: '#fff', fontSize: '12.5px', fontWeight: '600', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                    Share Profile
                  </button>
                  <button onClick={() => showToast('Claim profile: Opening verification flow...')} style={{ padding: '7px 14px', borderRadius: '8px', border: 'none', background: 'var(--primary)', fontSize: '12.5px', fontWeight: '600', color: '#fff', cursor: 'pointer' }}>
                    Claim This Profile
                  </button>
                </div>
              </div>

              {/* Row 1: Profile Header & Key At A Glance (SAME HEIGHT) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '20px', alignItems: 'stretch', marginBottom: '20px' }}>
                {/* Profile Header */}
                <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', overflow: 'hidden', alignItems: 'stretch' }}>
                  <img src={selectedFounder.image} alt={selectedFounder.name}
                    style={{ width: '240px', objectFit: 'cover', display: 'block', flexShrink: 0 }}
                  />
                  <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text-main)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
                          {selectedFounder.name}
                        </h1>
                        {selectedFounder.verified && (
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                            <circle cx="12" cy="12" r="11" fill="#1d9bf0"/>
                            <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 5px', fontWeight: '500' }}>{selectedFounder.headline}</p>
                      <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: '0 0 16px' }}>
                        {selectedFounder.subBadges.map((b, i) => (
                          <React.Fragment key={i}>{i > 0 && <span style={{ margin: '0 6px', color: 'var(--text-light)' }}>•</span>}<span>{b}</span></React.Fragment>
                        ))}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--text-muted)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                          {selectedFounder.location}
                        </span>
                        <span style={{ color: '#e2e8f0' }}>|</span>
                        <a href={`https://${selectedFounder.website}`} target="_blank" rel="noreferrer"
                          style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', textDecoration: 'none' }}>
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                          {selectedFounder.website}
                        </a>
                        {selectedFounder.connect.twitter !== 'Not Public' && (
                          <>
                            <span style={{ color: '#e2e8f0' }}>|</span>
                            <a href={`https://twitter.com/${selectedFounder.connect.twitter}`} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }} title="Twitter / X">
                              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                          </>
                        )}
                        {selectedFounder.connect.linkedin !== 'Not Public' && (
                          <>
                            <span style={{ color: '#e2e8f0' }}>|</span>
                            <a href={`https://linkedin.com${selectedFounder.connect.linkedin}`} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }} title="LinkedIn">
                              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                          </>
                        )}
                      </div>
                      <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: '0 0 20px', lineHeight: '1.6' }}>{selectedFounder.bio}</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {selectedFounder.bioTags.map((tag, i) => (
                        <span key={i} style={{ fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '4px', background: '#f1f5f9', color: 'var(--text-main)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key At A Glance */}
                <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 16px', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>Key At A Glance</h3>
                  <div>
                    {selectedFounder.keyAtAGlance.map((g, i) => {
                      const colors = [
                        { bg: 'rgba(242, 19, 93, 0.08)', text: 'var(--primary)' },
                        { bg: 'rgba(37, 99, 235, 0.08)', text: '#2563eb' },
                        { bg: 'rgba(124, 58, 237, 0.08)', text: '#7c3aed' },
                        { bg: 'rgba(16, 185, 129, 0.08)', text: '#10b981' },
                        { bg: 'rgba(245, 158, 11, 0.08)', text: '#d97706' },
                        { bg: 'rgba(99, 102, 241, 0.08)', text: '#4f46e5' }
                      ];
                      const color = colors[i % colors.length];
                      return (
                        <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '6px 0', borderBottom: i < selectedFounder.keyAtAGlance.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: color.bg, color: color.text, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            {getKeyIcon(g.label)}
                          </div>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: '2px' }}>{g.label}</div>
                            <div style={{ fontSize: '13px', color: 'var(--text-main)', fontWeight: '700' }}>{g.value}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Stats Row Card */}
              <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
                  {selectedFounder.stats.map((st, i) => {
                    const colors = [
                      { bg: 'rgba(242, 19, 93, 0.08)', text: 'var(--primary)' },
                      { bg: 'rgba(37, 99, 235, 0.08)', text: '#2563eb' },
                      { bg: 'rgba(124, 58, 237, 0.08)', text: '#7c3aed' },
                      { bg: 'rgba(16, 185, 129, 0.08)', text: '#10b981' },
                      { bg: 'rgba(245, 158, 11, 0.08)', text: '#d97706' },
                      { bg: 'rgba(99, 102, 241, 0.08)', text: '#4f46e5' }
                    ];
                    const color = colors[i % colors.length];
                    return (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: i < 5 ? '1px solid var(--border-color)' : 'none', paddingRight: '12px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: color.bg, color: color.text, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                          {getStatIcon(st.label)}
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-0.5px', lineHeight: 1.1 }}>{st.value}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '700', marginTop: '4px' }}>{st.label}</div>
                        <div style={{ fontSize: '10px', color: 'var(--text-light)', marginTop: '2px' }}>{st.sub}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Main split details grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '20px', alignItems: 'start' }}>
                {/* Left Side Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Career Journey */}
                  <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                      <h2 style={{ fontSize: '17px', fontWeight: '800', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Career Journey</h2>
                      <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>View full timeline</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
                      {selectedFounder.careerJourney.map((j, i) => {
                        const lc: Record<string, React.ReactNode> = {
                          openai: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff">
                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                              </svg>
                            </div>
                          ),
                          worldcoin: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 100 100" width="28" height="28">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="#000" strokeWidth="6"/>
                                <circle cx="50" cy="50" r="28" fill="none" stroke="#000" strokeWidth="5"/>
                                <circle cx="50" cy="50" r="10" fill="#000"/>
                                <line x1="50" y1="2" x2="50" y2="22" stroke="#000" strokeWidth="5"/>
                                <line x1="50" y1="78" x2="50" y2="98" stroke="#000" strokeWidth="5"/>
                                <line x1="2" y1="50" x2="22" y2="50" stroke="#000" strokeWidth="5"/>
                                <line x1="78" y1="50" x2="98" y2="50" stroke="#000" strokeWidth="5"/>
                              </svg>
                            </div>
                          ),
                          yc: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#ff6600', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: '#fff', fontSize: '22px', fontWeight: '900', fontFamily: 'Georgia, serif', lineHeight: 1 }}>Y</span>
                            </div>
                          ),
                          loopt: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#1d4ed8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
                                <ellipse cx="11" cy="16" rx="7" ry="7" stroke="#fff" strokeWidth="2.5"/>
                                <ellipse cx="21" cy="16" rx="7" ry="7" stroke="#fff" strokeWidth="2.5"/>
                              </svg>
                            </div>
                          ),
                          anthropic: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#cc785c', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 100 60" width="30" height="18" fill="#fff">
                                <polygon points="0,60 25,0 37,0 12,60" />
                                <polygon points="63,0 75,0 100,60 88,60" />
                                <rect x="28" y="25" width="44" height="10" rx="5"/>
                              </svg>
                            </div>
                          ),
                          google: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="22" height="22">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-4.65z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                              </svg>
                            </div>
                          ),
                          baidu: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#2932e1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
                                <path d="M12 10.9c-.8 0-1.5-.7-1.5-1.5S11.2 7.9 12 7.9s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-4.8-.3c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm9.6 0c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zM7.4 13c-.7-.8-.6-2 .1-2.8.8-.7 2-.7 2.7.1.7.8.7 2-.1 2.8-.8.7-2 .6-2.7-.1zm9.2 0c-.7.7-1.9.8-2.7.1-.8-.8-.8-2-.1-2.8.7-.8 1.9-.8 2.7-.1.8.8.8 2 .1 2.8zm-4.6 5.3c-2.4 0-5.6-1.5-5.6-4.2 0-2.3 2.3-3.4 5.6-3.4s5.6 1.1 5.6 3.4c0 2.7-3.2 4.2-5.6 4.2z"/>
                              </svg>
                            </div>
                          ),
                          perplexity: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#1b132c', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#22c55e" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 .188a.5.5 0 0 1 .503.5V4.03l3.022-2.92.059-.048a.51.51 0 0 1 .49-.054.5.5 0 0 1 .306.46v3.247h1.117l.1.01a.5.5 0 0 1 .403.49v5.558a.5.5 0 0 1-.503.5H12.38v3.258a.5.5 0 0 1-.312.462.51.51 0 0 1-.55-.11l-3.016-3.018v3.448c0 .275-.225.5-.503.5a.5.5 0 0 1-.503-.5v-3.448l-3.018 3.019a.51.51 0 0 1-.548.11.5.5 0 0 1-.312-.463v-3.258H2.503a.5.5 0 0 1-.503-.5V5.215l.01-.1.493-.4H3.62V1.469l.006-.074a.5.5 0 0 1 .302-.387.51.51 0 0 1 .547.102l3.023 2.92V.687c0-.276.225-.5.503-.5M4.626 9.333v3.984l2.87-2.872v-4.01zm3.877 1.113 2.871 2.871V9.333l-2.87-2.897zm3.733-1.668a.5.5 0 0 1 .145.35v1.145h.612V5.715H9.201zm-9.23 1.495h.613V9.13c0-.131.052-.257.145-.35l3.033-3.064h-3.79zm1.62-5.558H6.76L4.626 2.652zm4.613 0h2.134V2.652z"/>
                              </svg>
                            </div>
                          ),
                          deepmind: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#1a73e8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 40 40" width="24" height="24" fill="#fff">
                                <polygon points="20,4 36,20 20,36 4,20"/>
                              </svg>
                            </div>
                          ),
                          cursor: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
                                <path d="M4 2l16 10-8 2-4 8z" />
                              </svg>
                            </div>
                          ),
                          nvidia: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#76b900" viewBox="0 0 16 16">
                                <path d="M1.635 7.146S3.08 5.012 5.97 4.791v-.774C2.77 4.273 0 6.983 0 6.983s1.57 4.536 5.97 4.952v-.824c-3.23-.406-4.335-3.965-4.335-3.965M5.97 9.475v.753c-2.44-.435-3.118-2.972-3.118-2.972S4.023 5.958 5.97 5.747v.828h-.004c-1.021-.123-1.82.83-1.82.83s.448 1.607 1.824 2.07M6 2l-.03 2.017A7 7 0 0 1 6.252 4c3.637-.123 6.007 2.983 6.007 2.983s-2.722 3.31-5.557 3.31q-.39-.002-.732-.065v.883q.292.039.61.04c2.638 0 4.546-1.348 6.394-2.943.307.246 1.561.842 1.819 1.104-1.757 1.47-5.852 2.657-8.173 2.657a7 7 0 0 1-.65-.034V14H16l.03-12zm-.03 3.747v-.956a6 6 0 0 1 .282-.015c2.616-.082 4.332 2.248 4.332 2.248S8.73 9.598 6.743 9.598c-.286 0-.542-.046-.773-.123v-2.9c1.018.123 1.223.572 1.835 1.593L9.167 7.02s-.994-1.304-2.67-1.304a5 5 0 0 0-.527.031"/>
                              </svg>
                            </div>
                          ),
                          greylock: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a5f', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 40 40" width="26" height="26" fill="#fff">
                                <path d="M6 34L20 6l14 28H6zm14-20l-8 16h16l-8-16z"/>
                              </svg>
                            </div>
                          ),
                          linkedin: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#0077b5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </div>
                          ),
                          apple: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.1 1.07-2.6 1.67-.53.63-.99 1.77-.87 2.88 1.13.09 2.15-.68 2.48-1.49z" />
                              </svg>
                            </div>
                          ),
                          paypal: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#003087', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
                                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c.013-.116.026-.234.036-.355.437-4.248-2.602-6.22-7.096-6.22H6.975c-.524 0-.968.382-1.05.9L3.04 18.507a.541.541 0 0 0 .535.625h3.779l.95-6.02-.03.196c.082-.518.526-.9 1.05-.9h2.19c4.298 0 7.664-1.747 8.647-6.797.023-.111.043-.224.061-.337z"/>
                              </svg>
                            </div>
                          ),
                          amd: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#ED1C24', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: '#fff', fontSize: '11px', fontWeight: '900', fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px' }}>AMD</span>
                            </div>
                          ),
                          berkeley: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#003262', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1px' }}>
                              <span style={{ color: '#FDB515', fontSize: '10px', fontWeight: '900', fontFamily: 'Georgia, serif', lineHeight: 1 }}>UC</span>
                              <span style={{ color: '#FDB515', fontSize: '9px', fontWeight: '700', fontFamily: 'Georgia, serif', lineHeight: 1 }}>Berkeley</span>
                            </div>
                          ),
                          mit: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#A31F34', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: '#fff', fontSize: '12px', fontWeight: '900', fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px' }}>MIT</span>
                            </div>
                          ),
                          ucl: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#500A64', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: '#fff', fontSize: '12px', fontWeight: '900', fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px' }}>UCL</span>
                            </div>
                          ),
                          bullfrog: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#166534', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1px' }}>
                              <svg viewBox="0 0 24 24" width="22" height="22" fill="#4ade80">
                                <ellipse cx="12" cy="14" rx="8" ry="6"/>
                                <circle cx="8" cy="10" r="3"/>
                                <circle cx="16" cy="10" r="3"/>
                                <circle cx="7" cy="9" r="1.5" fill="#166534"/>
                                <circle cx="15" cy="9" r="1.5" fill="#166534"/>
                              </svg>
                            </div>
                          ),
                          elixir: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#7c2d8a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1px' }}>
                              <span style={{ color: '#fff', fontSize: '10px', fontWeight: '700', fontFamily: 'Georgia, serif', lineHeight: 1 }}>Elixir</span>
                              <span style={{ color: '#e879f9', fontSize: '8px', fontWeight: '600', fontFamily: 'Georgia, serif', lineHeight: 1 }}>Studios</span>
                            </div>
                          ),
                          lsi: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: '#fff', fontSize: '12px', fontWeight: '900', fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px' }}>LSI</span>
                            </div>
                          ),
                          socialnet: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#0d9488', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
                                <circle cx="12" cy="8" r="3"/>
                                <circle cx="5" cy="16" r="3"/>
                                <circle cx="19" cy="16" r="3"/>
                                <line x1="12" y1="11" x2="5" y2="13" stroke="#fff" strokeWidth="1.5"/>
                                <line x1="12" y1="11" x2="19" y2="13" stroke="#fff" strokeWidth="1.5"/>
                              </svg>
                            </div>
                          )
                        };
                        const logoElement = lc[j.logo] || (
                          <div style={{ width: '40px', height: '40px', backgroundColor: '#6b7280', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold' }}>{(j.logo || '?')[0].toUpperCase()}</span>
                          </div>
                        );
                        return (
                          <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 30px 1px 1fr 40px', gap: '16px', alignItems: 'center', position: 'relative' }}>
                            {/* Period (Left column, right-aligned) */}
                            <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600', textAlign: 'right' }}>
                              {j.period}
                            </div>
                            
                            {/* Dot Column with Timeline Line */}
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', alignSelf: 'stretch' }}>
                              {/* Top half of timeline line */}
                              {i > 0 && (
                                <div style={{ position: 'absolute', top: 0, bottom: '50%', width: '1.5px', background: '#e2e8f0', zIndex: 0 }} />
                              )}
                              {/* Bottom half of timeline line */}
                              {i < selectedFounder.careerJourney.length - 1 && (
                                <div style={{ position: 'absolute', top: '50%', bottom: 0, width: '1.5px', background: '#e2e8f0', zIndex: 0 }} />
                              )}
                              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563eb', zIndex: 1 }} />
                            </div>

                            {/* Divider Line */}
                            <div style={{ alignSelf: 'stretch', background: '#f1f5f9' }} />

                            {/* Title and Description */}
                            <div style={{ padding: '4px 8px' }}>
                              <h4 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 4px', fontFamily: 'var(--font-heading)' }}>{j.title}</h4>
                              <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>{j.desc}</p>
                            </div>

                            {/* Logo */}
                            <div>
                              {logoElement}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Influence Graph */}
                  <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <h2 style={{ fontSize: '17px', fontWeight: '800', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Influence Graph</h2>
                      <button onClick={e => e.preventDefault()} style={{ fontSize: '12px', color: 'var(--text-main)', fontWeight: '500', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '5px 14px', background: '#fff', cursor: 'pointer', letterSpacing: '0.01em' }}>Explore Full Graph</button>
                    </div>
                    <div style={{ width: '100%', height: '360px', background: '#fff', borderRadius: '0', position: 'relative', overflow: 'visible' }}>
                      {/* Background connecting curves */}
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}>
                        {selectedFounder.influenceGraph.nodes.map((node, nIdx) => {
                          const lineColor = node.type === 'Companies' ? '#2563eb' : node.type === 'Investments' ? '#10b981' : node.type === 'Board Roles' ? '#7c3aed' : '#f97316';
                          const nx = parseFloat(node.pos.left);
                          const ny = parseFloat(node.pos.top);
                          return (
                            <line
                              key={nIdx}
                              x1="50"
                              y1="46"
                              x2={nx}
                              y2={ny}
                              stroke={lineColor}
                              strokeWidth="0.7"
                              strokeDasharray="3.5,3"
                              strokeLinecap="round"
                            />
                          );
                        })}
                      </svg>

                      {/* Surrounding Nodes */}
                      {selectedFounder.influenceGraph.nodes.map((node, nIdx) => {
                        const nodeColor = node.type === 'Companies' ? '#2563eb' : node.type === 'Investments' ? '#10b981' : node.type === 'Board Roles' ? '#7c3aed' : '#f97316';
                        const nx = parseFloat(node.pos.left);
                        const isLeft = nx < 50;

                        // Logo fetch keys mapping
                        const getLogoKey = (lbl: string): string => {
                          const normalized = lbl.toLowerCase();
                          if (normalized.includes('openai')) return 'openai';
                          if (normalized.includes('worldcoin')) return 'worldcoin';
                          if (normalized.includes('y combinator') || normalized === 'yc') return 'yc';
                          if (normalized.includes('loopt')) return 'loopt';
                          if (normalized.includes('anthropic')) return 'anthropic';
                          if (normalized.includes('google deepmind') || normalized.includes('deepmind')) return 'deepmind';
                          if (normalized.includes('perplexity')) return 'perplexity';
                          if (normalized.includes('cursor')) return 'cursor';
                          if (normalized.includes('nvidia')) return 'nvidia';
                          if (normalized.includes('greylock')) return 'greylock';
                          if (normalized.includes('linkedin')) return 'linkedin';
                          if (normalized.includes('apple')) return 'apple';
                          if (normalized.includes('paypal')) return 'paypal';
                          if (normalized.includes('amd')) return 'amd';
                          if (normalized.includes('berkeley')) return 'berkeley';
                          if (normalized.includes('mit')) return 'mit';
                          if (normalized.includes('ucl')) return 'ucl';
                          if (normalized.includes('bullfrog')) return 'bullfrog';
                          if (normalized.includes('elixir')) return 'elixir';
                          if (normalized.includes('lsi')) return 'lsi';
                          if (normalized.includes('socialnet')) return 'socialnet';
                          if (normalized.includes('google')) return 'google';
                          if (normalized.includes('reddit')) return 'reddit';
                          if (normalized.includes('stripe')) return 'stripe';
                          if (normalized.includes('airbnb')) return 'airbnb';
                          if (normalized.includes('helion')) return 'helion';
                          if (normalized.includes('microsoft')) return 'microsoft';
                          if (normalized.includes('inflection')) return 'inflection';
                          if (normalized.includes('tsmc')) return 'tsmc';
                          if (normalized.includes('a16z')) return 'a16z';
                          if (normalized.includes('founders fund') || normalized.includes('foundersfund')) return 'foundersfund';
                          if (normalized.includes('bezos')) return 'bezos';
                          if (normalized.includes('harvard')) return 'harvard';
                          if (normalized.includes('stanford')) return 'stanford';
                          if (normalized.includes('congress')) return 'congress';
                          if (normalized.includes('model forum') || normalized.includes('frontier model')) return 'frontier';
                          if (normalized.includes('nobel')) return 'nobel';
                          if (normalized.includes('royal society') || normalized === 'rs') return 'royal';
                          return normalized;
                        };

                        const logoKey = getLogoKey(node.label);

                        // Define SVGs for graph nodes
                        const graphLogos: Record<string, React.ReactNode> = {
                          openai: (<svg viewBox="0 0 24 24" width="22" height="22" fill="#000"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></svg>),
                          worldcoin: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#000" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round"/></svg>),
                          yc: (<span style={{ color: '#ff6600', fontSize: '19px', fontWeight: '900', fontFamily: 'Georgia, serif' }}>Y</span>),
                          reddit: (<svg viewBox="0 0 24 24" width="22" height="22" fill="#ff4500"><path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.68-6.3-1.78l1.7-4.13 4.2.82c.04.83.73 1.5 1.57 1.5 1.1 0 2-1 2-2s-.9-2-2-2c-.67 0-1.28.34-1.64.87l-4.52-.9c-.2-.04-.4.07-.47.27l-1.9 4.62c-2.52.06-4.8.72-6.5 1.74-.5-.72-1.35-1.18-2.3-1.18-1.65 0-3 1.35-3 3 0 1.05.54 1.98 1.37 2.52-.1.35-.15.7-.15 1.07 0 3.92 4.4 7.1 9.8 7.1s9.8-3.18 9.8-7.1c0-.36-.05-.72-.15-1.07.8-.54 1.37-1.47 1.37-2.52zM7.5 14c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.2c-1.3 1.3-3.7 1.4-5.3 1.4s-4-.1-5.3-1.4c-.2-.2-.2-.5 0-.7s.5-.2.7 0c1 .1 3 1.1 4.6 1.1s3.6-1 4.6-1.1c.2-.2.5-.2.7 0s.2.5 0 .7zm-.3-2.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>),
                          stripe: (<svg viewBox="0 0 24 24" width="18" height="18" fill="#635bff"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/></svg>),
                          airbnb: (<svg viewBox="0 0 24 24" width="22" height="22" fill="#FF5A5F"><path d="M11.985 15.36c-1.977 0-2.941-1.516-2.941-3.038 0-1.523.964-3.038 2.941-3.038 1.977 0 2.94 1.515 2.94 3.038.001 1.522-.963 3.038-2.94 3.038zm5.75-4.38c-.195-.672-.455-1.32-.776-1.928C15.63 6.672 13.89 5 12 5c-1.89 0-3.63 1.672-4.96 4.052-.32.608-.58 1.256-.775 1.928a.5.5 0 0 0 .34.62c.16.047.336.016.47-.085 1.058-.798 2.286-1.225 3.543-1.225 1.048 0 2.081.32 2.95.898 1.01.682 1.82 1.665 2.386 2.9l.184.409a.5.5 0 0 0 .918-.003l.174-.388a11.3 11.3 0 0 0 .786-2.925.498.498 0 0 0-.295-.501z"/></svg>),
                          helion: (<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="9" stroke="#7c3aed" strokeWidth="1.5"/><path d="M12 7.5v9M8.5 12h7" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/></svg>),
                          anthropic: (<svg viewBox="0 0 100 60" width="26" height="15" fill="#cc785c"><polygon points="0,60 25,0 37,0 12,60" /><polygon points="63,0 75,0 100,60 88,60" /><rect x="28" y="25" width="44" height="10" rx="5"/></svg>),
                          google: (<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-4.65z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" /></svg>),
                          baidu: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#2932e1"><path d="M12 10.9c-.8 0-1.5-.7-1.5-1.5S11.2 7.9 12 7.9s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-4.8-.3c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm9.6 0c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zM7.4 13c-.7-.8-.6-2 .1-2.8.8-.7 2-.7 2.7.1.7.8.7 2-.1 2.8-.8.7-2 .6-2.7-.1zm9.2 0c-.7.7-1.9.8-2.7.1-.8-.8-.8-2-.1-2.8.7-.8 1.9-.8 2.7-.1.8.8.8 2 .1 2.8zm-4.6 5.3c-2.4 0-5.6-1.5-5.6-4.2 0-2.3 2.3-3.4 5.6-3.4s5.6 1.1 5.6 3.4c0 2.7-3.2 4.2-5.6 4.2z"/></svg>),
                          perplexity: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#20b14b" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 .188a.5.5 0 0 1 .503.5V4.03l3.022-2.92.059-.048a.51.51 0 0 1 .49-.054.5.5 0 0 1 .306.46v3.247h1.117l.1.01a.5.5 0 0 1 .403.49v5.558a.5.5 0 0 1-.503.5H12.38v3.258a.5.5 0 0 1-.312.462.51.51 0 0 1-.55-.11l-3.016-3.018v3.448c0 .275-.225.5-.503.5a.5.5 0 0 1-.503-.5v-3.448l-3.018 3.019a.51.51 0 0 1-.548.11.5.5 0 0 1-.312-.463v-3.258H2.503a.5.5 0 0 1-.503-.5V5.215l.01-.1.493-.4H3.62V1.469l.006-.074a.5.5 0 0 1 .302-.387.51.51 0 0 1 .547.102l3.023 2.92V.687c0-.276.225-.5.503-.5M4.626 9.333v3.984l2.87-2.872v-4.01zm3.877 1.113 2.871 2.871V9.333l-2.87-2.897zm3.733-1.668a.5.5 0 0 1 .145.35v1.145h.612V5.715H9.201zm-9.23 1.495h.613V9.13c0-.131.052-.257.145-.35l3.033-3.064h-3.79zm1.62-5.558H6.76L4.626 2.652zm4.613 0h2.134V2.652z"/></svg>),
                          cursor: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#333"><path d="M4 2l16 10-8 2-4 8z" /></svg>),
                          deepmind: (<svg viewBox="0 0 40 40" width="20" height="20" fill="#1a73e8"><polygon points="20,4 36,20 20,36 4,20"/></svg>),
                          nvidia: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#76b900" viewBox="0 0 16 16"><path d="M1.635 7.146S3.08 5.012 5.97 4.791v-.774C2.77 4.273 0 6.983 0 6.983s1.57 4.536 5.97 4.952v-.824c-3.23-.406-4.335-3.965-4.335-3.965M5.97 9.475v.753c-2.44-.435-3.118-2.972-3.118-2.972S4.023 5.958 5.97 5.747v.828h-.004c-1.021-.123-1.82.83-1.82.83s.448 1.607 1.824 2.07M6 2l-.03 2.017A7 7 0 0 1 6.252 4c3.637-.123 6.007 2.983 6.007 2.983s-2.722 3.31-5.557 3.31q-.39-.002-.732-.065v.883q.292.039.61.04c2.638 0 4.546-1.348 6.394-2.943.307.246 1.561.842 1.819 1.104-1.757 1.47-5.852 2.657-8.173 2.657a7 7 0 0 1-.65-.034V14H16l.03-12zm-.03 3.747v-.956a6 6 0 0 1 .282-.015c2.616-.082 4.332 2.248 4.332 2.248S8.73 9.598 6.743 9.598c-.286 0-.542-.046-.773-.123v-2.9c1.018.123 1.223.572 1.835 1.593L9.167 7.02s-.994-1.304-2.67-1.304a5 5 0 0 0-.527.031"/></svg>),
                          greylock: (<svg viewBox="0 0 40 40" width="20" height="20" fill="#1e3a5f"><path d="M6 34L20 6l14 28H6zm14-20l-8 16h16l-8-16z"/></svg>),
                          linkedin: (<svg viewBox="0 0 24 24" width="22" height="22" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>),
                          apple: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#333"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.1 1.07-2.6 1.67-.53.63-.99 1.77-.87 2.88 1.13.09 2.15-.68 2.48-1.49z" /></svg>),
                          paypal: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#003087"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c.013-.116.026-.234.036-.355.437-4.248-2.602-6.22-7.096-6.22H6.975c-.524 0-.968.382-1.05.9L3.04 18.507a.541.541 0 0 0 .535.625h3.779l.95-6.02-.03.196c.082-.518.526-.9 1.05-.9h2.19c4.298 0 7.664-1.747 8.647-6.797.023-.111.043-.224.061-.337z"/></svg>),
                          amd: (<span style={{ color: '#ED1C24', fontSize: '11px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}>AMD</span>),
                          berkeley: (<span style={{ color: '#003262', fontSize: '11px', fontWeight: '900', fontFamily: 'Georgia, serif' }}>Cal</span>),
                          mit: (<span style={{ color: '#A31F34', fontSize: '11px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}>MIT</span>),
                          ucl: (<span style={{ color: '#500A64', fontSize: '11px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}>UCL</span>),
                          bullfrog: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#166534"><ellipse cx="12" cy="14" rx="8" ry="6"/><circle cx="8" cy="10" r="3"/><circle cx="16" cy="10" r="3"/></svg>),
                          elixir: (<span style={{ color: '#7c2d8a', fontSize: '11px', fontWeight: '700', fontFamily: 'Georgia, serif' }}>ELX</span>),
                          lsi: (<span style={{ color: '#1e3a8a', fontSize: '11px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}>LSI</span>),
                          socialnet: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#0d9488"><circle cx="12" cy="8" r="3"/><circle cx="5" cy="16" r="3"/><circle cx="19" cy="16" r="3"/><line x1="12" y1="11" x2="5" y2="13" stroke="#0d9488" strokeWidth="1.5"/><line x1="12" y1="11" x2="19" y2="13" stroke="#0d9488" strokeWidth="1.5"/></svg>),
                          microsoft: (<svg viewBox="0 0 23 23" width="20" height="20"><path fill="#f35325" d="M1 1h10v10H1z" /><path fill="#81bc06" d="M12 1h10v10H12z" /><path fill="#05a6f0" d="M1 12h10v10H1z" /><path fill="#ffba08" d="M12 12h10v10H12z" /></svg>),
                          inflection: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#6366f1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/></svg>),
                          tsmc: (<span style={{ color: '#1d4ed8', fontSize: '9px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}>TSMC</span>),
                          a16z: (<span style={{ color: '#1e293b', fontSize: '10px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}>a16z</span>),
                          foundersfund: (<span style={{ color: '#1e293b', fontSize: '11px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}>FF</span>),
                          bezos: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#d97706"><path d="M21.2 13.6c.2-.9-.4-1.8-1.3-2l-6-1.3L12 4l-1.9 6.3-6 1.3c-.9.2-1.5 1.1-1.3 2 .1.6.5 1 1 1.3l4.7 3.1-1.2 6.4 5.7-3.3 5.7 3.3-1.2-6.4 4.7-3.1c.5-.3.8-.8 1-1.3z"/></svg>),
                          harvard: (<span style={{ color: '#A51C30', fontSize: '12px', fontWeight: '900', fontFamily: 'Georgia, serif' }}>H</span>),
                          stanford: (<span style={{ color: '#8C1515', fontSize: '12px', fontWeight: '900', fontFamily: 'Georgia, serif' }}>S</span>),
                          congress: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#1d4ed8"><path d="M12 2L2 7h20L12 2zM4 9v8h2V9H4zm5 0v8h2V9H9zm5 0v8h2V9h-2zm5 0v8h2V9h-2zM2 19h20v2H2z"/></svg>),
                          frontier: (<span style={{ color: '#374151', fontSize: '8px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}>FMF</span>),
                          nobel: (<svg viewBox="0 0 24 24" width="20" height="20" fill="#d97706"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>),
                          royal: (<span style={{ color: '#374151', fontSize: '12px', fontWeight: '900', fontFamily: 'Georgia, serif' }}>RS</span>)
                        }

                        const logoElement = graphLogos[logoKey] || (
                          <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>{node.label[0]}</span>
                        );

                        // Circle background and borders
                        const isLightBg = ['google', 'nvidia', 'worldcoin'].includes(logoKey);
                        const isDarkBg = ['openai', 'cursor', 'apple', 'anthropic', 'deepmind', 'linkedin', 'paypal', 'amd', 'inflection', 'baidu', 'mit', 'ucl', 'lsi', 'mit', 'greylock', 'foundersfund', 'tsmc', 'a16z', 'congress', 'frontier', 'stanford', 'harvard', 'bezos', 'nobel', 'royal', 'airbnb', 'helion', 'bullfrog', 'elixir', 'socialnet', 'perplexity', 'yc', 'reddit', 'stripe'].includes(logoKey);
                        const circleBg = isLightBg ? '#fff' : isDarkBg ? (logoKey === 'openai' ? '#000' : logoKey === 'cursor' ? '#000' : logoKey === 'apple' ? '#000' : logoKey === 'anthropic' ? '#cc785c' : logoKey === 'deepmind' ? '#1a73e8' : logoKey === 'linkedin' ? '#0077b5' : logoKey === 'paypal' ? '#003087' : logoKey === 'amd' ? '#ED1C24' : logoKey === 'baidu' ? '#2932e1' : logoKey === 'mit' ? '#A31F34' : logoKey === 'ucl' ? '#500A64' : logoKey === 'lsi' ? '#1e3a8a' : logoKey === 'greylock' ? '#1e3a5f' : logoKey === 'perplexity' ? '#1b132c' : logoKey === 'yc' ? '#ff6600' : logoKey === 'reddit' ? '#fff5f0' : logoKey === 'stripe' ? '#635bff' : logoKey === 'helion' ? '#4a1d96' : logoKey === 'socialnet' ? '#0d9488' : logoKey === 'bullfrog' ? '#166534' : logoKey === 'elixir' ? '#7c2d8a' : '#374151') : (node.type === 'Companies' ? '#2563eb' : node.type === 'Investments' ? '#10b981' : node.type === 'Board Roles' ? '#7c3aed' : '#f97316');
                        const circleBorder = isLightBg ? `1.5px solid ${nodeColor}` : 'none';

                        return (
                          <div key={nIdx} style={{ position: 'absolute', top: node.pos.top, left: node.pos.left, transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', zIndex: 3 }}>
                            {/* Left Text (only for left-side nodes) */}
                            {isLeft && (
                              <div style={{ position: 'absolute', right: '62px', width: '120px', textAlign: 'right' }}>
                                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.3' }}>{node.label}</div>
                                <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '500', lineHeight: '1.3' }}>{node.role}</div>
                              </div>
                            )}

                            {/* Center Logo Circle */}
                            <div style={{ width: '52px', height: '52px', background: '#fff', border: `1.5px solid ${nodeColor}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.07)', flexShrink: 0 }}>
                              {logoElement}
                            </div>

                            {/* Right Text (only for right-side & bottom-center nodes) */}
                            {!isLeft && (
                              <div style={{ position: 'absolute', left: '62px', width: '120px', textAlign: 'left' }}>
                                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.3' }}>{node.label}</div>
                                <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '500', lineHeight: '1.3' }}>{node.role}</div>
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Central Founder Avatar Node */}
                      <div style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>
                        <div style={{ position: 'relative', width: '96px', height: '96px', borderRadius: '50%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', padding: '3px', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%) border-box', border: '2px solid transparent' }}>
                          <div style={{ width: '88px', height: '88px', borderRadius: '50%', overflow: 'hidden', border: '2.5px solid #f2135d' }}>
                            <img src={selectedFounder.image} alt={selectedFounder.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', marginTop: '10px', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>{selectedFounder.name}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px', flexWrap: 'wrap' }}>
                      {[{ label: 'Companies', color: '#2563eb' }, { label: 'Investments', color: '#10b981' }, { label: 'Board Roles', color: '#7c3aed' }, { label: 'Advisory', color: '#f97316' }].map((lg, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: lg.color, display: 'block' }} />
                          {lg.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Investments */}
                  {selectedFounder.topInvestments.length > 0 && (
                    <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '17px', fontWeight: '800', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Top Investments</h2>
                        <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>View all</a>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {selectedFounder.topInvestments.map((inv, i) => {
                          const key = inv.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                          const mapped = INVESTMENT_LOGOS[key];
                          const bg = mapped ? mapped.bg : '#f2135d';
                          const content = mapped ? mapped.logo : (
                            <span style={{ color: '#fff', fontSize: '13px', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>{inv.name[0]}</span>
                          );
                          const borderStyle = bg === '#fff' ? '1px solid var(--border-color)' : 'none';
                          return (
                            <div key={i} style={{ padding: '10px 14px', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: bg, border: borderStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                                {content}
                              </div>
                              <div>
                                <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)' }}>{inv.name}</div>
                                <div style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>{inv.year} · {inv.stage}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Media & Appearances */}
                  {selectedFounder.mediaAppearances.length > 0 && (
                    <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '17px', fontWeight: '800', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Media & Appearances</h2>
                        <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>View all</a>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(selectedFounder.mediaAppearances.length, 4)}, 1fr)`, gap: '16px' }}>
                        {selectedFounder.mediaAppearances.map((media, i) => (
                          <div key={i} style={{ cursor: 'pointer' }} onClick={() => showToast(`Opening: ${media.title} — ${media.source}`)}>
                            <img src={media.image} alt={media.title} style={{ width: '100%', height: '88px', objectFit: 'cover', borderRadius: '8px', marginBottom: '8px', display: 'block' }} />
                            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{media.source}</span>
                            <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-main)', margin: '3px 0 3px', lineHeight: '1.4' }}>{media.title}</h4>
                            <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>{media.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* What He Is Building Now */}
                  <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 12px', fontFamily: 'var(--font-heading)' }}>What He Is Building Now</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      {(() => {
                        const buildingLogos: Record<string, React.ReactNode> = {
                          openai: (
                            <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', borderRadius: '9px' }}>
                              <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                              </svg>
                            </div>
                          ),
                          anthropic: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#191919', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: '#e8d5c0', fontSize: '16px', fontWeight: '900', fontFamily: 'serif' }}>A</span>
                            </div>
                          ),
                          perplexity: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#1b132c', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#22c55e" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 .188a.5.5 0 0 1 .503.5V4.03l3.022-2.92.059-.048a.51.51 0 0 1 .49-.054.5.5 0 0 1 .306.46v3.247h1.117l.1.01a.5.5 0 0 1 .403.49v5.558a.5.5 0 0 1-.503.5H12.38v3.258a.5.5 0 0 1-.312.462.51.51 0 0 1-.55-.11l-3.016-3.018v3.448c0 .275-.225.5-.503.5a.5.5 0 0 1-.503-.5v-3.448l-3.018 3.019a.51.51 0 0 1-.548.11.5.5 0 0 1-.312-.463v-3.258H2.503a.5.5 0 0 1-.503-.5V5.215l.01-.1.493-.4H3.62V1.469l.006-.074a.5.5 0 0 1 .302-.387.51.51 0 0 1 .547.102l3.023 2.92V.687c0-.276.225-.5.503-.5M4.626 9.333v3.984l2.87-2.872v-4.01zm3.877 1.113 2.871 2.871V9.333l-2.87-2.897zm3.733-1.668a.5.5 0 0 1 .145.35v1.145h.612V5.715H9.201zm-9.23 1.495h.613V9.13c0-.131.052-.257.145-.35l3.033-3.064h-3.79zm1.62-5.558H6.76L4.626 2.652zm4.613 0h2.134V2.652z"/>
                              </svg>
                            </div>
                          ),
                          cursor: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#000', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
                                <path d="M6 2l12 12h-6l-4 6V2z" />
                              </svg>
                            </div>
                          ),
                          deepmind: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg viewBox="0 0 24 24" width="22" height="22">
                                <path fill="#4285F4" d="M12 2L2 12h5v5h5v5l10-10H17v-5h-5V2z" />
                              </svg>
                            </div>
                          ),
                          nvidia: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#76b900" viewBox="0 0 16 16">
                                <path d="M1.635 7.146S3.08 5.012 5.97 4.791v-.774C2.77 4.273 0 6.983 0 6.983s1.57 4.536 5.97 4.952v-.824c-3.23-.406-4.335-3.965-4.335-3.965M5.97 9.475v.753c-2.44-.435-3.118-2.972-3.118-2.972S4.023 5.958 5.97 5.747v.828h-.004c-1.021-.123-1.82.83-1.82.83s.448 1.607 1.824 2.07M6 2l-.03 2.017A7 7 0 0 1 6.252 4c3.637-.123 6.007 2.983 6.007 2.983s-2.722 3.31-5.557 3.31q-.39-.002-.732-.065v.883q.292.039.61.04c2.638 0 4.546-1.348 6.394-2.943.307.246 1.561.842 1.819 1.104-1.757 1.47-5.852 2.657-8.173 2.657a7 7 0 0 1-.65-.034V14H16l.03-12zm-.03 3.747v-.956a6 6 0 0 1 .282-.015c2.616-.082 4.332 2.248 4.332 2.248S8.73 9.598 6.743 9.598c-.286 0-.542-.046-.773-.123v-2.9c1.018.123 1.223.572 1.835 1.593L9.167 7.02s-.994-1.304-2.67-1.304a5 5 0 0 0-.527.031"/>
                              </svg>
                            </div>
                          ),
                          inflection: (
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#6366f1', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>I</span>
                            </div>
                          )
                        };
                        const logo = selectedFounder.whatHeIsBuilding.companyLogo || '';
                        const fallbackLogo = (
                          <div style={{ width: '40px', height: '40px', borderRadius: '9px', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '900', flexShrink: 0, fontFamily: 'var(--font-heading)' }}>
                            {selectedFounder.whatHeIsBuilding.company[0]}
                          </div>
                        );
                        return buildingLogos[logo] || fallbackLogo;
                      })()}
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>{selectedFounder.whatHeIsBuilding.company}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{selectedFounder.whatHeIsBuilding.role}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '0 0 10px', lineHeight: '1.55' }}>{selectedFounder.whatHeIsBuilding.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px' }}>
                      {selectedFounder.whatHeIsBuilding.tags.map((tag, i) => (
                        <span key={i} style={{ fontSize: '11px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px', background: '#f1f5f9', color: 'var(--text-muted)' }}>{tag}</span>
                      ))}
                    </div>
                    <a href={`https://${selectedFounder.website}`} target="_blank" rel="noreferrer" style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary)', textDecoration: 'none' }}>
                      {selectedFounder.whatHeIsBuilding.linkText} →
                    </a>
                  </div>

                  {/* Core Focus Areas */}
                  <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 12px', fontFamily: 'var(--font-heading)' }}>Core Focus Areas</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {selectedFounder.coreFocus.map((f, i) => {
                        const { bg, icon } = getFocusAreaIcon(f);
                        return (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              {icon}
                            </div>
                            <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: '500' }}>{f}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)', margin: 0, fontFamily: 'var(--font-heading)' }}>Recent Activity</h3>
                      <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '11.5px', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>View all</a>
                    </div>
                     {selectedFounder.recentActivity.map((act, i) => {
                      const tcMap: Record<string, { bg: string; icon: React.ReactNode }> = {
                        'Product Launch': { bg: '#fff7ed', icon: (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 3.5s2-1 3.5-2.5M12 2C6.5 2 2 6.5 2 12c0 1.5.5 3 1.5 4l6.5-6.5L14.5 5 19 10l-4.5 4.5-6.5 6.5c1 .5 2.5 1 4 1 5.5 0 10-4.5 10-10C22 6.5 17.5 2 12 2z"/></svg>) },
                        'Funding': { bg: '#f0fdf4', icon: (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>) },
                        'Investment': { bg: '#eff6ff', icon: (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>) },
                        'Speaking': { bg: '#fefce8', icon: (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>) },
                        'Recognition': { bg: '#faf5ff', icon: (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>) },
                        'Research': { bg: '#f0f9ff', icon: (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8M3 22h18M12 6a4 4 0 0 1 4 4v8M9 6v12M12 2h3"/></svg>) },
                        'Advisory': { bg: '#f8fafc', icon: (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>) }
                      };
                      const t = tcMap[act.type] || { bg: '#f8fafc', icon: (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#475569" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>) };
                      return (
                        <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '8px 0', borderBottom: i < selectedFounder.recentActivity.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{t.icon}</div>
                          <div>
                            <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-main)', margin: '0 0 2px', lineHeight: '1.4' }}>{act.text}</p>
                            <div style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>
                              {act.date} · <span style={{ color: 'var(--primary)', fontWeight: '700' }}>{act.type}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Connect & Follow */}
                  <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 10px', fontFamily: 'var(--font-heading)' }}>Connect & Follow</h3>
                    {([
                      { label: 'X (Twitter)', value: selectedFounder.connect.twitter, href: selectedFounder.connect.twitter !== 'Not Public' ? `https://twitter.com/${selectedFounder.connect.twitter}` : null, icon: (<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>) },
                      { label: 'LinkedIn', value: selectedFounder.connect.linkedin, href: selectedFounder.connect.linkedin !== 'Not Public' ? `https://linkedin.com${selectedFounder.connect.linkedin}` : null, icon: (<svg viewBox="0 0 24 24" width="14" height="14" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>) },
                      { label: 'Website', value: selectedFounder.connect.website, href: selectedFounder.connect.website !== 'Not Public' ? `https://${selectedFounder.connect.website}` : null, icon: (<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>) },
                      { label: 'GitHub', value: selectedFounder.connect.github, href: selectedFounder.connect.github !== 'Not Public' ? `https://${selectedFounder.connect.github}` : null, icon: (<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>) },
                      { label: 'YouTube', value: selectedFounder.connect.youtube, href: selectedFounder.connect.youtube !== 'Not Public' ? (selectedFounder.connect.youtube.startsWith('http') ? selectedFounder.connect.youtube : `https://${selectedFounder.connect.youtube}`) : null, icon: (<svg viewBox="0 0 24 24" width="14" height="14" fill="#ff0000"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.389-.507a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
                      { label: 'Email', value: selectedFounder.connect.email, href: selectedFounder.connect.email !== 'Not Public' ? `mailto:${selectedFounder.connect.email}` : null, icon: (<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>) }
                    ] as { label: string; value: string; href: string | null; icon: React.ReactNode }[]).map((item, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: i < 5 ? '1px solid var(--border-color)' : 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '12.5px', fontWeight: '600' }}>
                          {item.icon}
                          {item.label}
                        </div>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>{item.value}</a>
                        ) : (
                          <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* People Also Viewed */}
              <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px', marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '800', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>People Also Viewed</h3>
                  <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>View all</a>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
                  {selectedFounder.peopleAlsoViewed.map((p, i) => {
                    const lf = FOUNDERS_DETAILS[p.name];
                    return (
                      <div key={i}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: '#f8fafc', borderRadius: '10px', cursor: lf ? 'pointer' : 'default', border: '1px solid var(--border-color)' }}
                        onClick={() => { if (lf) { setSelectedFounder(lf); window.scrollTo({ top: 0 }); } }}
                      >
                        <img src={p.avatar} alt={p.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.role}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : currentFilter === 'founders' ? (
            /* FOUNDERS LISTING GRID */
            <div style={{ padding: '24px 0' }}>
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', marginBottom: '16px' }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentFilter('all'); window.scrollTo({ top: 0 }); }} style={{ color: 'var(--text-muted)', fontWeight: '500', textDecoration: 'none' }}>Home</a>
                  <span style={{ color: 'var(--text-light)', fontSize: '11px' }}>›</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>People</span>
                </div>
                <h1 style={{ fontSize: '26px', fontWeight: '900', margin: '0 0 6px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>Founders</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>Discover the builders shaping the AI economy</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {ALL_FOUNDERS_LIST.map((founder, i) => (
                  <div key={i}
                    style={{ padding: '20px', background: '#fff', borderRadius: '12px', cursor: 'pointer', border: '1px solid var(--border-color)' }}
                    onClick={() => { const d = FOUNDERS_DETAILS[founder.name]; if (d) { setSelectedFounder(d); window.scrollTo({ top: 0 }); } }}
                  >
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <img src={founder.image} alt={founder.name} style={{ width: '58px', height: '58px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                          <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-main)' }}>{founder.name}</span>
                          {founder.verified && (
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
                              <circle cx="12" cy="12" r="11" fill="#1d9bf0"/>
                              <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <p style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '600', margin: '0 0 1px' }}>{founder.role}</p>
                        <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', margin: 0 }}>{founder.company}</p>
                      </div>
                      <span style={{ fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', background: founder.badgeColor + '18', color: founder.badgeColor, whiteSpace: 'nowrap', flexShrink: 0 }}>{founder.badge}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                      {founder.tags.map((tag, t) => (
                        <span key={t} style={{ fontSize: '10.5px', padding: '3px 9px', borderRadius: '4px', background: '#f1f5f9', color: 'var(--text-muted)', fontWeight: '600' }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                        {founder.location}
                      </span>
                      <button onClick={(e) => { e.stopPropagation(); const d = FOUNDERS_DETAILS[founder.name]; if (d) { setSelectedFounder(d); window.scrollTo({ top: 0 }); } }}
                        style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', background: 'rgba(242,19,93,0.08)', border: 'none', padding: '5px 12px', borderRadius: '6px', cursor: 'pointer' }}>
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Refined Hero section */}
              <section className="hero-section">
            <div className="orbital-background"></div>
            <h1 className="hero-title" style={{ position: 'absolute', top: '20px', left: '40px', margin: 0, marginTop: 0 }}>The <span style={{ color: '#f2135d' }}>Intelligence Layer</span><br />For The AI Economy</h1>
            <div className="hero-flex-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 1, gap: '24px', paddingTop: '100px' }}>
              <div className="hero-content" style={{ flex: 1, minWidth: 0 }}>
                
                {/* Search Box */}
                <div className="search-container" style={{ marginBottom: '8px', marginTop: '175px' }}>
                  <div className="search-input-wrapper">
                    <svg viewBox="0 0 24 24" className="search-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                      type="text"
                      id="main-search-input"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && triggerSearch()}
                      placeholder="Search startups, founders, investors, products, news, jobs..."
                      autoComplete="off"
                    />
                  </div>
                  <button className="btn-primary btn-search" onClick={triggerSearch}>Search</button>
                </div>

                {/* Secondary Tagline below search container */}
                <div style={{
                  fontSize: '15.5px',
                  fontWeight: '700',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-heading)',
                  width: '100%',
                  marginTop: '16px'
                }}>
                  Unifying the AI Economy in <span style={{ color: '#f2135d' }}>One Single Place.</span>
                </div>
              </div>

              {/* Connection Map on the right side of the hero section */}
              <div className="hero-map-column" style={{ flexShrink: 0, width: '640px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '15px', marginTop: '-80px' }}>
                {/* Section Header above the diagram */}
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <div style={{ display: 'inline-block', marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '9.5px',
                      fontWeight: '800',
                      color: '#f2135d',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      border: '1.2px solid rgba(242, 19, 93, 0.2)',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      backgroundColor: 'rgba(242, 19, 93, 0.02)',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      Why Graph One?
                    </span>
                  </div>
                  <h2 style={{
                    fontSize: '26px',
                    fontWeight: '900',
                    color: 'var(--text-main)',
                    lineHeight: '1.15',
                    letterSpacing: '-0.8px',
                    margin: '0',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    Everything About AI. <span style={{ color: '#f2135d' }}>Connected.</span>
                  </h2>
                </div>

                <div className="hero-map-wrapper" style={{ width: '100%', height: '360px', position: 'relative', transform: 'scale(0.85)', transformOrigin: 'center center' }}>
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {/* SVG Connection Lines */}
                    <svg
                      viewBox="0 0 1000 360"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1,
                      }}
                    >
                      <defs>
                        <filter id="hero-glow-map" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      {/* Centered Atlas at (500, 180). Arranged as a 5-point star layout. */}
                      <line x1="500" y1="180" x2="500" y2="30" stroke="rgba(242, 19, 93, 0.95)" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="500" y1="180" x2="750" y2="150" stroke="rgba(242, 19, 93, 0.95)" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="500" y1="180" x2="720" y2="310" stroke="rgba(242, 19, 93, 0.95)" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="500" y1="180" x2="280" y2="310" stroke="rgba(242, 19, 93, 0.95)" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="500" y1="180" x2="250" y2="150" stroke="rgba(242, 19, 93, 0.95)" strokeWidth="2" strokeDasharray="4 4" />

                      <circle cx="500" cy="105" r="6" fill="#f2135d" filter="url(#hero-glow-map)" />
                      <circle cx="625" cy="165" r="6" fill="#f2135d" filter="url(#hero-glow-map)" />
                      <circle cx="610" cy="245" r="6" fill="#f2135d" filter="url(#hero-glow-map)" />
                      <circle cx="390" cy="245" r="6" fill="#f2135d" filter="url(#hero-glow-map)" />
                      <circle cx="375" cy="165" r="6" fill="#f2135d" filter="url(#hero-glow-map)" />
                    </svg>

                    {/* Center Atlas Brand Hub Logo */}
                    <div style={{
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
                    }}>
                      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                        <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(-45 12 12)"/>
                        <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(45 12 12)"/>
                      </svg>
                    </div>

                    {/* Card 1: Investors (Top Center) */}
                    <div
                      onClick={() => { handlePillClick("investors"); showToast("Filtering early-stage AI agent startups..."); }}
                      style={{
                        position: 'absolute', top: '0%', left: '50%',
                        transform: 'translateX(-50%)', zIndex: 5, width: '210px',
                        backgroundColor: '#ffffff', border: '1px solid var(--border-color)',
                        borderRadius: '16px', padding: '14px 18px', display: 'flex',
                        alignItems: 'center', gap: '12px', textAlign: 'left',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)', cursor: 'pointer', transition: 'all 0.25s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(-50%) translateY(-3px)'; e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(-50%)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(242, 19, 93, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f2135d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 3px' }}>Investors</h4>
                        <p style={{ fontSize: '10.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.3' }}>
                          Find early-stage AI agent startups
                        </p>
                      </div>
                    </div>

                    {/* Card 2: Recruiters (Top Right) */}
                    <div
                      onClick={() => { handlePillClick("startups"); showToast("Highlighting fastest growing AI companies..."); }}
                      style={{
                        position: 'absolute', top: '32%', right: '2%', zIndex: 5, width: '210px',
                        backgroundColor: '#ffffff', border: '1px solid var(--border-color)',
                        borderRadius: '16px', padding: '14px 18px', display: 'flex',
                        alignItems: 'center', gap: '12px', textAlign: 'left',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)', cursor: 'pointer', transition: 'all 0.25s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) translateX(3px)'; e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(242, 19, 93, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f2135d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 3px' }}>Recruiters</h4>
                        <p style={{ fontSize: '10.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.3' }}>
                          Track fastest-growing AI teams
                        </p>
                      </div>
                    </div>

                    {/* Card 3: Job Seekers (Bottom Right) */}
                    <div
                      onClick={() => { handlePillClick("jobs"); showToast("Searching startups hiring globally..."); }}
                      style={{
                        position: 'absolute', bottom: '2%', right: '15%', zIndex: 5, width: '210px',
                        backgroundColor: '#ffffff', border: '1px solid var(--border-color)',
                        borderRadius: '16px', padding: '14px 18px', display: 'flex',
                        alignItems: 'center', gap: '12px', textAlign: 'left',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)', cursor: 'pointer', transition: 'all 0.25s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(3px) translateX(3px)'; e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(242, 19, 93, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f2135d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 3px' }}>Job Seekers</h4>
                        <p style={{ fontSize: '10.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.3' }}>
                          Discover global AI engineering roles
                        </p>
                      </div>
                    </div>

                    {/* Card 4: Researchers (Bottom Left) */}
                    <div
                      onClick={() => { handlePillClick("all"); showToast("Filtering top AI infrastructure startups..."); }}
                      style={{
                        position: 'absolute', bottom: '2%', left: '15%', zIndex: 5, width: '210px',
                        backgroundColor: '#ffffff', border: '1px solid var(--border-color)',
                        borderRadius: '16px', padding: '14px 18px', display: 'flex',
                        alignItems: 'center', gap: '12px', textAlign: 'left',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)', cursor: 'pointer', transition: 'all 0.25s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(3px) translateX(-3px)'; e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(242, 19, 93, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f2135d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 3px' }}>Researchers</h4>
                        <p style={{ fontSize: '10.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.3' }}>
                          Analyze top AI infrastructure
                        </p>
                      </div>
                    </div>

                    {/* Card 5: Founders (Top Left) */}
                    <div
                      onClick={() => { handlePillClick("founders"); showToast("Querying recent AI coding funding rounds..."); }}
                      style={{
                        position: 'absolute', top: '32%', left: '2%', zIndex: 5, width: '210px',
                        backgroundColor: '#ffffff', border: '1px solid var(--border-color)',
                        borderRadius: '16px', padding: '14px 18px', display: 'flex',
                        alignItems: 'center', gap: '12px', textAlign: 'left',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)', cursor: 'pointer', transition: 'all 0.25s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) translateX(-3px)'; e.currentTarget.style.borderColor = 'rgba(242, 19, 93, 0.35)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 19, 93, 0.05)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(242, 19, 93, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f2135d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 3px' }}>Founders</h4>
                        <p style={{ fontSize: '10.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.3' }}>
                          Research recent AI startup funding
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Stats Dashboard Banner */}
          <div className="stats-banner">
            {/* Card 1: AI Startups */}
            <div className="stats-card" style={{ cursor: 'pointer' }} onClick={() => { handlePillClick("startups"); showToast("Viewing AI Startups database..."); }}>
              <div className="stats-icon-wrapper" style={{ backgroundColor: 'rgba(242, 19, 93, 0.06)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f2135d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div className="stats-content">
                <span className="stats-number">25,000+</span>
                <span className="stats-title">AI Startups</span>
                <span className="stats-desc">Tracked globally</span>
              </div>
            </div>

            {/* Card 2: Founders */}
            <div className="stats-card" style={{ cursor: 'pointer' }} onClick={() => { handlePillClick("founders"); showToast("Viewing Founders database..."); }}>
              <div className="stats-icon-wrapper" style={{ backgroundColor: 'rgba(124, 58, 237, 0.06)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="stats-content">
                <span className="stats-number">100,000+</span>
                <span className="stats-title">Founders</span>
                <span className="stats-desc">Across the world</span>
              </div>
            </div>

            {/* Card 3: Investors */}
            <div className="stats-card" style={{ cursor: 'pointer' }} onClick={() => { handlePillClick("investors"); showToast("Viewing Investors database..."); }}>
              <div className="stats-icon-wrapper" style={{ backgroundColor: 'rgba(16, 185, 129, 0.06)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div className="stats-content">
                <span className="stats-number">12,000+</span>
                <span className="stats-title">Investors</span>
                <span className="stats-desc">VCs & Angels</span>
              </div>
            </div>

            {/* Card 4: Jobs */}
            <div className="stats-card" style={{ cursor: 'pointer' }} onClick={() => { handlePillClick("jobs"); showToast("Viewing AI Jobs board..."); }}>
              <div className="stats-icon-wrapper" style={{ backgroundColor: 'rgba(249, 115, 22, 0.06)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  <path d="M12 11v6" />
                  <path d="M9 14h6" />
                </svg>
              </div>
              <div className="stats-content">
                <span className="stats-number">50,000+</span>
                <span className="stats-title">Jobs</span>
                <span className="stats-desc">AI job opportunities</span>
              </div>
            </div>

            {/* Card 5: Funding Tracked */}
            <div className="stats-card" style={{ cursor: 'pointer' }} onClick={() => { handlePillClick("funding"); showToast("Viewing Funding database..."); }}>
              <div className="stats-icon-wrapper" style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8" />
                  <path d="M9 11h6" />
                </svg>
              </div>
              <div className="stats-content">
                <span className="stats-number">$500B+</span>
                <span className="stats-title">Funding Tracked</span>
                <span className="stats-desc">Across 10,000+ rounds</span>
              </div>
            </div>
          </div>

          {/* Dynamic Search Results Panel */}
          {isSearchActive ? (
            <section className="search-results-section" id="search-results-panel">
              <div className="section-header">
                <h2 className="section-title">Search Results</h2>
                <button
                  className="btn-text"
                  onClick={() => {
                    setQuery("");
                    setCurrentFilter("all");
                    showToast("Cleared search queries");
                  }}
                >
                  Clear Search
                </button>
              </div>
              <div className="results-grid">
                {searchResults.length === 0 ? (
                  <div className="no-results-msg">
                    <p>No results found matching your query. Try adjusting your terms or filters.</p>
                  </div>
                ) : (
                  searchResults.map((res, idx) => (
                    <div
                      key={idx}
                      className="generic-result-card"
                      onClick={() => {
                        if (res.type === "Founder") {
                          const d = FOUNDERS_DETAILS[res.title];
                          if (d) {
                            setSelectedFounder(d);
                            showToast(`Opening profile: ${res.title}`);
                            return;
                          }
                        }
                        showToast(`Loading profile: ${res.title}...`);
                      }}
                    >
                      <span className="result-card-type">{res.type}</span>
                      <h3 className="result-card-title">{res.title}</h3>
                      <span className="result-card-subtitle">{res.subtitle}</span>
                      <p className="result-card-desc">{res.desc}</p>
                      <div className="result-card-footer">
                        <span>{res.footerText}</span>
                        <span className="btn-text">View details &rarr;</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          ) : (
            /* Main Dashboard Content (Only rendered if search/filter is not active) */
            <div className="dashboard-modules" id="dashboard-main-content">
              
              {/* Trending AI Startups */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2 className="section-title">Trending AI Startups</h2>
                  <a href="#" className="section-link" onClick={(e) => { e.preventDefault(); setShowAllStartups(true); }}>
                    View all startups <span>&rarr;</span>
                  </a>
                </div>
                
                <div className="trending-startups-carousel">
                  {[
                    { id: 'openai', catName: 'AI Research', raised: '$18.0B', employees: '4,500+' },
                    { id: 'anthropic', catName: 'AI Assistant', raised: '$7.3B', employees: '1,300+' },
                    { id: 'perplexity', catName: 'AI Search', raised: '$1.0B', employees: '250+' },
                    { id: 'cursor', catName: 'AI Coding', raised: '$105M', employees: '100+' },
                    { id: 'elevenlabs', catName: 'Voice AI', raised: '$180M', employees: '180+' },
                    { id: 'mistral', catName: 'Foundation Models', raised: '$645M', employees: '300+' }
                  ].map((item) => {
                    const startup = STARTUPS.find((s) => s.id === item.id);
                    if (!startup) return null;
                    return (
                      <div
                        key={startup.id}
                        className="trending-startup-card"
                        onClick={() => {
                          showToast(`Opening ${startup.name} website...`);
                          window.open(startup.website, "_blank", "noopener,noreferrer");
                        }}
                      >
                        <div>
                          <div className="trending-card-top">
                            <div className="trending-card-logo" dangerouslySetInnerHTML={{ __html: startup.logo }} />
                            <div className="trending-card-title-group">
                              <h3 className="trending-card-name">{startup.name}</h3>
                              <span className="trending-card-category">{item.catName}</span>
                            </div>
                          </div>
                          <p className="trending-card-desc">{startup.description}</p>
                        </div>
                        <div className="trending-card-metrics">
                          <div className="trending-metric-item">
                            <span className="trending-metric-val">{item.raised}</span>
                            <span className="trending-metric-lbl">Raised</span>
                          </div>
                          <div className="trending-metric-item">
                            <span className="trending-metric-val">{item.employees}</span>
                            <span className="trending-metric-lbl">Employees</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Two Column Widgets: Funding Activity & Research Reports */}
              <div className="dashboard-widgets-grid">
                {/* Recent Funding Activity widget */}
                <div 
                  className="widget-card" 
                  onClick={() => { handleSidebarClick("funding"); }}
                  style={{ 
                    cursor: 'pointer', 
                    minHeight: '180px', 
                    height: '180px',
                    backgroundImage: "url('/assets/recent_funding_bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none'
                  }}
                >
                  <div className="widget-card-left">
                    <div className="widget-card-title-row">
                      <div className="widget-icon-box" style={{ backgroundColor: 'rgba(242, 19, 93, 0.08)', color: '#f2135d' }}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <h3 className="widget-title">Recent Funding Activity</h3>
                    </div>
                    <p className="widget-desc">Track the latest funding rounds across the AI ecosystem.</p>
                    <button className="widget-btn">Explore Funding &rarr;</button>
                  </div>
                </div>

                {/* Research Reports widget */}
                <div 
                  className="widget-card" 
                  onClick={() => { handleSidebarClick("research"); }}
                  style={{ 
                    cursor: 'pointer', 
                    minHeight: '180px', 
                    height: '180px',
                    backgroundImage: "url('/assets/research_reports_bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none'
                  }}
                >
                  <div className="widget-card-left">
                    <div className="widget-card-title-row">
                      <div className="widget-icon-box" style={{ backgroundColor: 'rgba(124, 58, 237, 0.08)', color: '#7c3aed' }}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <h3 className="widget-title">Research Reports</h3>
                    </div>
                    <p className="widget-desc">In-depth reports and insights on AI trends, markets and companies.</p>
                    <button className="widget-btn">View Reports &rarr;</button>
                  </div>
                </div>
              </div>

              {/* Browse AI Categories */}
              <section className="dashboard-section" id="browse-categories-section">
                <div className="section-header">
                  <h2 className="section-title">Browse AI Categories</h2>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '16px',
                  width: '100%',
                  marginTop: '16px',
                  marginBottom: '24px'
                }} className="categories-grid-responsive">
                  {[
                    { name: "AI Agents", color: "#2563eb", bgColor: "rgba(37, 99, 235, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="10" rx="2" />
                        <circle cx="12" cy="5" r="2" />
                        <path d="M12 7v4M8 15h.01M16 15h.01" />
                      </svg>
                    ) },
                    { name: "Generative AI", color: "#7c3aed", bgColor: "rgba(124, 58, 237, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                      </svg>
                    ) },
                    { name: "AI Coding", color: "#f2135d", bgColor: "rgba(242, 19, 93, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    ) },
                    { name: "AI Search", color: "#f97316", bgColor: "rgba(249, 115, 22, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    ) },
                    { name: "AI Infrastructure", color: "#2563eb", bgColor: "rgba(37, 99, 235, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" />
                        <rect x="2" y="14" width="20" height="8" rx="2" />
                        <line x1="6" y1="6" x2="6.01" y2="6" />
                        <line x1="6" y1="18" x2="6.01" y2="18" />
                      </svg>
                    ) },
                    { name: "AI Security", color: "#7c3aed", bgColor: "rgba(124, 58, 237, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ) },
                    { name: "AI Healthcare", color: "#ef4444", bgColor: "rgba(239, 68, 68, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    ) },
                    { name: "AI Legal", color: "#4f46e5", bgColor: "rgba(79, 70, 229, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22V8M5 12h14M5 12a4 4 0 0 1 0-8M19 12a4 4 0 0 0 0-8" />
                      </svg>
                    ) },
                    { name: "AI Education", color: "#10b981", bgColor: "rgba(16, 185, 129, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    ) },
                    { name: "AI Sales", color: "#f43f5e", bgColor: "rgba(244, 63, 94, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" />
                      </svg>
                    ) },
                    { name: "AI Marketing", color: "#ec4899", bgColor: "rgba(236, 72, 153, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 5h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8M3 17V7a2 2 0 0 1 2-2h6v14H5a2 2 0 0 1-2-2zM14 9l-2 2 2 2" />
                      </svg>
                    ) },
                    { name: "AI Finance", color: "#059669", bgColor: "rgba(5, 150, 105, 0.05)", icon: (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    ) }
                  ].map((cat, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setQuery(cat.name);
                        setCurrentFilter("all");
                        showToast(`Showing real data for category: ${cat.name}`);
                      }}
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      className="category-card-item"
                    >
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: cat.bgColor,
                        color: cat.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        flexShrink: 0
                      }}>
                        {cat.icon}
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '13.5px',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>{cat.name}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    className="explore-categories-btn"
                    onClick={() => {
                      setQuery("");
                      setCurrentFilter("all");
                      showToast("Showing all AI category items...");
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 24px',
                      borderRadius: '10px',
                      backgroundColor: '#ffffff',
                      border: '1px solid transparent',
                      fontSize: '13.5px',
                      fontWeight: '700',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    Explore all categories <span>&rarr;</span>
                  </button>
                </div>
              </section>

              {/* Top AI Jobs & Top Investors in AI Side by Side */}
              <div className="sbs-dashboard-grid">
                
                {/* Top AI Jobs Column */}
                <div>
                  <div className="sbs-header-row">
                    <h2 className="sbs-title">Top AI Jobs</h2>
                    <a href="#" className="sbs-link" onClick={(e) => { e.preventDefault(); handleSidebarClick("jobs"); }}>
                      View all jobs <span>&rarr;</span>
                    </a>
                  </div>
                  <div className="sbs-cards-grid">
                    {/* Job 1 */}
                    <div className="premium-job-card" onClick={() => { setQuery("OpenAI"); setCurrentFilter("jobs"); showToast("Searching jobs at OpenAI"); }}>
                      <div className="job-card-logo">
                        {jobLogos.OpenAI}
                      </div>
                      <h4 className="job-card-title">Senior AI Engineer</h4>
                      <span className="job-card-company">OpenAI</span>
                      <div className="job-card-meta">
                        <span className="job-card-meta-item">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
                          Remote
                        </span>
                        <span className="job-card-meta-item">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                          $250k - $400k
                        </span>
                      </div>
                      <span className="job-card-badge">Full-time</span>
                    </div>

                    {/* Job 2 */}
                    <div className="premium-job-card" onClick={() => { setQuery("Anthropic"); setCurrentFilter("jobs"); showToast("Searching jobs at Anthropic"); }}>
                      <div className="job-card-logo">
                        {jobLogos.Anthropic}
                      </div>
                      <h4 className="job-card-title">Machine Learning Engineer</h4>
                      <span className="job-card-company">Anthropic</span>
                      <div className="job-card-meta">
                        <span className="job-card-meta-item">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
                          Remote
                        </span>
                        <span className="job-card-meta-item">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                          $200k - $300k
                        </span>
                      </div>
                      <span className="job-card-badge">Full-time</span>
                    </div>

                    {/* Job 3 */}
                    <div className="premium-job-card" onClick={() => { setQuery("Meta"); setCurrentFilter("jobs"); showToast("Searching jobs at Meta AI"); }}>
                      <div className="job-card-logo">
                        {jobLogos.Meta}
                      </div>
                      <h4 className="job-card-title">Research Scientist</h4>
                      <span className="job-card-company">Meta AI</span>
                      <div className="job-card-meta">
                        <span className="job-card-meta-item">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                          London, UK
                        </span>
                        <span className="job-card-meta-item">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                          $180k - $250k
                        </span>
                      </div>
                      <span className="job-card-badge">Full-time</span>
                    </div>

                    {/* Job 4 */}
                    <div className="premium-job-card" onClick={() => { setQuery("Perplexity"); setCurrentFilter("jobs"); showToast("Searching jobs at Perplexity"); }}>
                      <div className="job-card-logo" dangerouslySetInnerHTML={{ __html: FUNDINGS[0].logo }} />
                      <h4 className="job-card-title">Applied AI Manager</h4>
                      <span className="job-card-company">Perplexity</span>
                      <div className="job-card-meta">
                        <span className="job-card-meta-item">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
                          Remote
                        </span>
                        <span className="job-card-meta-item">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                          $150k - $220k
                        </span>
                      </div>
                      <span className="job-card-badge">Full-time</span>
                    </div>
                  </div>
                </div>

                {/* Top Investors in AI Column */}
                <div>
                  <div className="sbs-header-row">
                    <h2 className="sbs-title">Top Investors in AI</h2>
                    <a href="#" className="sbs-link" onClick={(e) => { e.preventDefault(); handleSidebarClick("investors"); }}>
                      View all investors <span>&rarr;</span>
                    </a>
                  </div>
                  <div className="sbs-cards-grid">
                    {[
                      {
                        name: "Sequoia Capital",
                        investments: "120+ AI investments",
                        portfolio: "Portfolio includes OpenAI, ElevenLabs, Glean, Harvey, Cursor",
                        logoSvg: (
                          <svg viewBox="0 0 100 100" width="32" height="32" style={{ display: 'block' }}>
                            <path d="M50 8 L32 38 H42 L26 62 H39 L15 85 H85 L61 62 H74 L58 38 H68 Z" fill="#0f5132" />
                            <rect x="47" y="85" width="6" height="8" fill="#5c4033" />
                          </svg>
                        )
                      },
                      {
                        name: "a16z",
                        investments: "130+ AI investments",
                        portfolio: "Portfolio includes OpenAI, Perplexity, Character.ai, ElevenLabs, Shield AI",
                        logoSvg: (
                          <svg viewBox="0 0 100 100" width="32" height="32" style={{ display: 'block' }}>
                            <rect width="100" height="100" fill="#000000" rx="12" />
                            <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">a16z</text>
                          </svg>
                        )
                      },
                      {
                        name: "Lightspeed",
                        investments: "75+ AI investments",
                        portfolio: "Portfolio includes Anthropic, Mistral AI, Glean, Snorkel AI, Poolside",
                        logoSvg: (
                          <svg viewBox="0 0 100 100" width="32" height="32" style={{ display: 'block' }}>
                            <g fill="#f97316">
                              <rect x="25" y="15" width="10" height="70" transform="skewX(-25)" />
                              <rect x="45" y="25" width="10" height="50" transform="skewX(-25)" />
                              <rect x="65" y="35" width="10" height="30" transform="skewX(-25)" />
                            </g>
                          </svg>
                        )
                      },
                      {
                        name: "Y Combinator",
                        investments: "450+ AI investments",
                        portfolio: "Portfolio includes Cohere, Jasper, Hebbia, Codeium, Sanas",
                        logoSvg: (
                          <svg viewBox="0 0 100 100" width="32" height="32" style={{ display: 'block' }}>
                            <rect width="100" height="100" fill="#ff6600" rx="12" />
                            <path d="M32 25 L47 54 V75 H53 V54 L68 25 H58 L50 44 L42 25 Z" fill="#ffffff" />
                          </svg>
                        )
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="premium-investor-card" onClick={() => { setQuery(item.name); setCurrentFilter("investors"); showToast(`Showing portfolio for ${item.name}`); }}>
                        <div className="investor-card-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', minWidth: '32px' }}>
                          {item.logoSvg}
                        </div>
                        <h4 className="investor-card-name">{item.name}</h4>
                        <span className="investor-card-count">{item.investments}</span>
                        <p className="investor-card-portfolio">{item.portfolio}</p>
                        <button className="investor-card-btn" onClick={(e) => { e.stopPropagation(); setQuery(item.name); setCurrentFilter("investors"); }}>
                          View Profile
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Founder Spotlight & AI Pulse Side by Side */}
              <div className="sbs-dashboard-grid">
                
                {/* Founder Spotlight Column */}
                <div className="sbs-dashboard-section" style={{
                  backgroundImage: "url('/assets/pulse_light_bg.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}>
                  <div className="sbs-header-row">
                    <h2 className="sbs-title">Founder Spotlight</h2>
                    <a href="#" className="sbs-link" onClick={(e) => { e.preventDefault(); handleSidebarClick("founders"); }}>
                      View all founders <span>&rarr;</span>
                    </a>
                  </div>
                  
                  <div className="founders-spotlight-row" style={{ flex: 1, alignContent: 'center', gap: 0 }}>
                    {[
                      {
                        name: "Sam Altman",
                        company: "OpenAI",
                        bio: "Building safe AGI that benefits all of humanity.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Disrupt_SF_TechCrunch_Disrupt_San_Francisco_2019_-_Day_2_%2848838377432%29.jpg"
                      },
                      {
                        name: "Dario Amodei",
                        company: "Anthropic",
                        bio: "AI systems that are helpful, honest, and harmless.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg"
                      },
                      {
                        name: "Aravind Srinivas",
                        company: "Perplexity",
                        bio: "Making the world's information accessible.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Aravind_Srinivas_TC_Day_3.jpg"
                      },
                      {
                        name: "Michael Truell",
                        company: "Cursor",
                        bio: "AI tools for developers to build the future.",
                        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                      }
                    ].map((founder, idx) => (
                      <div
                        key={idx}
                        className="founder-spotlight-card"
                        onClick={() => {
                          const d = FOUNDERS_DETAILS[founder.name];
                          if (d) {
                            setSelectedFounder(d);
                            showToast(`Viewing profile for ${founder.name}...`);
                          } else {
                            setQuery(founder.name);
                            setCurrentFilter("founders");
                            showToast(`Searching for ${founder.name}...`);
                          }
                        }}
                        style={{ 
                          backgroundColor: 'transparent', 
                          border: 'none', 
                          borderRight: idx < 3 ? '1px solid rgba(0, 0, 0, 0.08)' : 'none', 
                          boxShadow: 'none', 
                          padding: '10px 16px' 
                        }}
                      >
                        <img src={founder.image} alt={founder.name} className="founder-spotlight-avatar" />
                        <h4 className="founder-spotlight-name">{founder.name}</h4>
                        <span className="founder-spotlight-company">{founder.company}</span>
                        <p className="founder-spotlight-bio">{founder.bio}</p>
                        <a 
                          href="#" 
                          className="founder-spotlight-social" 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            showToast(`Redirecting to LinkedIn profile of ${founder.name}...`);
                          }}
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Pulse Column */}
                <div className="sbs-dashboard-section" style={{
                  backgroundImage: "url('/assets/pulse_light_bg.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}>
                  <div className="sbs-header-row">
                    <h2 className="sbs-title">AI Pulse</h2>
                    <a href="#" className="sbs-link" onClick={(e) => { e.preventDefault(); handleSidebarClick("news"); }}>
                      View all updates <span>&rarr;</span>
                    </a>
                  </div>
                  
                  <div className="pulse-updates-list" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    {[
                      { id: 'anthropic', text: "Anthropic raises $3.5B in Series E at $61.5B valuation", time: "2h ago" },
                      { id: 'cursor', text: "Cursor raises $300M Series B led by a16z", time: "6h ago" },
                      { id: 'perplexity', text: "Perplexity launches Enterprise Pro for teams", time: "1d ago" },
                      { id: 'mistral', text: "Mistral AI releases Mixtral 8x22B open weights", time: "1d ago" },
                      { id: 'openai', text: "OpenAI acquires Global Illumination", time: "2d ago" }
                    ].map((update, idx) => {
                      const startup = STARTUPS.find((s) => s.id === update.id);
                      return (
                        <div 
                          key={idx} 
                          className="pulse-update-row"
                          onClick={() => {
                            if (startup) {
                              setQuery(startup.name);
                              setCurrentFilter("news");
                              showToast(`Showing news for ${startup.name}`);
                            }
                          }}
                          style={{ 
                            backgroundColor: 'transparent', 
                            border: 'none', 
                            borderBottom: idx < 4 ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
                            padding: '12px 0' 
                          }}
                        >
                          <div className="pulse-update-logo" dangerouslySetInnerHTML={{ __html: startup?.logo || "" }} />
                          <span className="pulse-update-text">{update.text}</span>
                          <span className="pulse-update-time">{update.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* Feature Promotion Banner */}
          <div className="promo-banner">
            <div className="promo-banner-left">
              <h2 className="promo-banner-title">Stay ahead in the AI economy.</h2>
              <p className="promo-banner-desc">
                Join thousands of founders, investors and researchers who rely on Graph One for real-time AI insights.
              </p>
              <button className="promo-banner-btn" onClick={() => showToast("Registration modal: Opening account setup...")}>
                Create account
              </button>
            </div>
            
            <div className="promo-banner-right">
              <div className="promo-feature-card">
                <div className="promo-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 15l3-3 3 3 4-4" />
                    <path d="M17 8h-3v3" />
                  </svg>
                </div>
                <h3 className="promo-feature-title">Real-time Data</h3>
                <p className="promo-feature-desc">Live updates on funding, companies and markets.</p>
              </div>

              <div className="promo-feature-card">
                <div className="promo-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </div>
                <h3 className="promo-feature-title">Advanced Filters</h3>
                <p className="promo-feature-desc">Powerful search and custom analytics.</p>
              </div>

              <div className="promo-feature-card">
                <div className="promo-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="promo-feature-title">Global Coverage</h3>
                <p className="promo-feature-desc">Comprehensive data across 98 countries.</p>
              </div>

              <div className="promo-feature-card">
                <div className="promo-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="promo-feature-title">Save & Track</h3>
                <p className="promo-feature-desc">Bookmark, track and get alerts on what matters.</p>
              </div>
            </div>
          </div>
            </>
          )}
        </div>




        {/* Footer layout aligned flat in one horizontal row */}
        {!selectedFounder && (
          <footer className="footer" style={{ marginTop: '16px' }}>
          <div className="footer-top">
            {/* Column 1: Logo Brand Description */}
            <div className="footer-brand">
              <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); handleSidebarClick("discover"); }}>
                <div className="logo-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(-45 12 12)"/>
                    <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(45 12 12)"/>
                  </svg>
                </div>
                <span className="logo-text">Graph <span className="logo-weight-light">One</span></span>
              </a>
              <p className="footer-description">The intelligence layer for the AI economy. Track companies, people, funding, products and market movements.</p>
              <div className="footer-socials">
                {[
                  { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                  { label: "Discord", path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" },
                  { label: "YouTube", path: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.389-.507a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
                ].map((social) => (
                  <a
                    href="#"
                    aria-label={social.label}
                    key={social.label}
                    onClick={(e) => {
                      e.preventDefault();
                      showToast(`Redirecting to our ${social.label}...`);
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Platform Links */}
            <div className="footer-col">
              <h3 className="footer-col-title">Platform</h3>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleSidebarClick("discover"); }}>Discover</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleSidebarClick("startups"); }}>Startups</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleSidebarClick("products"); }}>Products</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleSidebarClick("funding"); }}>Funding</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleSidebarClick("jobs"); }}>Jobs</a></li>
              </ul>
            </div>

            {/* Column 3: Resources & Company Links */}
            <div className="footer-col">
              <h3 className="footer-col-title">Resources</h3>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleSidebarClick("research"); }}>Research</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast("About Us page..."); }}>About Us</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast("Careers opportunities page..."); }}>Careers</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast("Terms of Service..."); }}>Terms of Service</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast("Privacy Policy statement..."); }}>Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 4: Stay Updated Form */}
            <div className="footer-subscribe">
              <h3 className="subscribe-title">Stay Updated</h3>
              <p className="subscribe-text">Get the latest AI economy insights in your inbox.</p>
              <form
                className="subscribe-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const input = form.querySelector("input") as HTMLInputElement;
                  showToast(`Thank you! ${input.value} has been subscribed to Graph One insights.`);
                  input.value = "";
                }}
              >
                <input type="email" placeholder="Enter your email" required className="subscribe-input" aria-label="Email for newsletter" />
                <button type="submit" className="btn-primary btn-subscribe">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; 2026 Graph One. All rights reserved.</p>
          </div>
        </footer>
        )}
      </div>

      {/* All Startups Popup Modal */}
      {showAllStartups && (
        <div className="modal-overlay" onClick={() => { setShowAllStartups(false); setModalQuery(""); }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 className="modal-title">All AI Startups</h2>
                <p className="modal-subtitle">Browse and filter the complete database of active AI companies</p>
              </div>
              <button className="modal-close-btn" aria-label="Close" onClick={() => { setShowAllStartups(false); setModalQuery(""); }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="modal-search-bar">
              <svg viewBox="0 0 24 24" className="modal-search-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Filter startups by name, description, or category..."
                value={modalQuery}
                onChange={(e) => setModalQuery(e.target.value)}
              />
            </div>

            <div className="modal-grid">
              {filteredStartups.map((startup) => (
                <div
                  key={startup.id}
                  className="company-card modal-company-card"
                  onClick={() => {
                    showToast(`Redirecting to ${startup.name} profile...`);
                    setShowAllStartups(false);
                    setModalQuery("");
                  }}
                >
                  <div className="company-logo" dangerouslySetInnerHTML={{ __html: startup.logo }} />
                  <h3 className="company-name">{startup.name}</h3>
                  <p className="company-desc">{startup.description}</p>
                  <div className="company-metadata">
                    <div className="company-meta-item">
                      <span>Funding</span>
                      <span className="company-meta-val">{startup.funding}</span>
                    </div>
                    <div className="company-meta-item">
                      <span>Founded</span>
                      <span className="company-meta-val">{startup.founded}</span>
                    </div>
                    <span className="company-tag">{startup.category}</span>
                  </div>
                </div>
              ))}
              {filteredStartups.length === 0 && (
                <div className="modal-no-results">
                  <p>No startups found matching your filter terms.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Notification Toast Alert */}
      <div className={`toast ${toast.show ? "show" : ""}`} id="notification-toast">
        <div className="toast-content">
          <span className="toast-message">{toast.message}</span>
        </div>
      </div>
    </div>
  );
}
