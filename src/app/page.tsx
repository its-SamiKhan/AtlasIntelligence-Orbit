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

export default function HomePage() {
  // States
  const [query, setQuery] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showingAllNews, setShowingAllNews] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [showAllStartups, setShowAllStartups] = useState(false);
  const [modalQuery, setModalQuery] = useState("");
  
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

  // Scroll to top of the page when search query or filter category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentFilter, query]);

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
    setCurrentFilter(filter);
    showToast(`Switched category to: ${filter.toUpperCase()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync sidebar navigation clicking
  const handleSidebarClick = (tab: string) => {
    setSidebarOpen(false);
    
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
                      onClick={() => showToast(`Loading profile: ${res.title}...`)}
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
                          setQuery(founder.name);
                          setCurrentFilter("founders");
                          showToast(`Viewing profile for ${founder.name}...`);
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
        </div>




        {/* Footer layout aligned flat in one horizontal row */}
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
