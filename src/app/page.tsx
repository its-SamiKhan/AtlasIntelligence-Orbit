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

const MARKET_ICONS: Record<string, React.ReactNode> = {
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

export default function HomePage() {
  // States
  const [query, setQuery] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showingAllNews, setShowingAllNews] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

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
  };

  // Sync sidebar navigation clicking
  const handleSidebarClick = (tab: string) => {
    setSidebarOpen(false);
    
    if (tab === "discover") {
      setQuery("");
      setCurrentFilter("all");
      showToast("Returned to homepage Dashboard");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentFilter(tab);
      showToast(`Navigating to ${tab.toUpperCase()} section...`);
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

    // 1. Startups
    if (currentFilter === "all" || currentFilter === "startups") {
      STARTUPS.forEach((item) => {
        if (searchTerms === "" || filterMatches(item.name, item.category, item.description, searchTerms)) {
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
        if (searchTerms === "" || filterMatches(item.name, item.category, item.description, searchTerms)) {
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
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); handleSidebarClick("discover"); }}>
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(-45 12 12)"/>
                <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(45 12 12)"/>
              </svg>
            </div>
            <span className="logo-text">Atlas <span className="logo-weight-light">Intelligence</span></span>
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
              { id: "news", label: "News", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M16 8h2M16 12h2M16 16h2M6 8h6M6 12h6M6 16h6" />
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
              { id: "research", label: "Research", icon: (
                <svg viewBox="0 0 24 24" className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
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

        <div className="sidebar-footer">
          <a
            href="#"
            className="btn-signin"
            onClick={(e) => {
              e.preventDefault();
              showToast("Sign-in modal: Opening authentication credentials...");
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Sign in</span>
          </a>
          <button
            className="btn-primary btn-create-account"
            onClick={() => showToast("Registration modal: Opening account setup...")}
          >
            Create account
          </button>
          
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
          <button className="btn-watchlist" onClick={() => showToast("Watchlist updated. Tracking 5 products.")}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Watchlist</span>
          </button>
          <button className="mobile-menu-toggle" aria-label="Toggle Navigation" onClick={() => setSidebarOpen(true)}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </header>

        {/* Dashboard page container */}
        <div className="content-container">
          {/* Refined Hero section */}
          <section className="hero-section">
            <div className="orbital-background"></div>
            <div className="hero-content">
              <h1 className="hero-title">The Intelligence Layer<br />For The AI Economy</h1>
              <p className="hero-subtitle">Track every AI company, founder, investor, funding round, product launch and market movement.</p>
              
              {/* Search Box */}
              <div className="search-container">
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

              {/* White rounded pill bar */}
              <div className="search-pills">
                {[
                  { id: "all", label: "All", icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  )},
                  { id: "startups", label: "Startups", icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                      <line x1="9" y1="22" x2="9" y2="16" />
                      <line x1="15" y1="22" x2="15" y2="16" />
                    </svg>
                  )},
                  { id: "founders", label: "Founders", icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  )},
                  { id: "investors", label: "Investors", icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  )},
                  { id: "products", label: "Products", icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  )},
                  { id: "news", label: "News", icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    </svg>
                  )},
                  { id: "funding", label: "Funding", icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                    </svg>
                  )},
                  { id: "jobs", label: "Jobs", icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  )}
                ].map((pill) => (
                  <button
                    key={pill.id}
                    className={`pill-btn ${currentFilter === pill.id ? "active" : ""}`}
                    onClick={() => handlePillClick(pill.id)}
                  >
                    {pill.icon}
                    <span>{pill.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

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
              {/* Featured AI Companies */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2 className="section-title">Featured AI Companies</h2>
                  <a href="#" className="section-link" onClick={(e) => { e.preventDefault(); setShowAllStartups(true); }}>
                    View all startups <span>&rarr;</span>
                  </a>
                </div>
                <div className="companies-grid">
                  {STARTUPS.slice(0, 5).map((startup) => (
                    <div
                      key={startup.id}
                      className="company-card"
                      onClick={() => showToast(`Redirecting to ${startup.name} profile...`)}
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
                </div>
              </section>

              {/* Explore Markets */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2 className="section-title">Explore Markets</h2>
                  <a href="#" className="section-link" onClick={(e) => { e.preventDefault(); showToast("Viewing all market maps..."); }}>
                    View all markets <span>&rarr;</span>
                  </a>
                </div>
                <div className="carousel-wrapper">
                  <div className="markets-carousel" ref={marketsCarouselRef}>
                    {MARKETS.map((market) => (
                      <div
                        key={market.id}
                        className="market-item"
                        onClick={() => {
                          setQuery(market.name);
                          showToast(`Filtering markets for ${market.name}`);
                        }}
                      >
                        <div className="market-icon-wrapper" style={{ backgroundColor: market.bgColor, color: market.color, borderColor: market.bgColor }}>
                          {MARKET_ICONS[market.id] || market.icon}
                        </div>
                        <span className="market-name">{market.name}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-nav-btn next"
                    onClick={() => handleScroll(marketsCarouselRef, "next")}
                    aria-label="Next"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </section>

              {/* Funding Intelligence */}
              <section className="dashboard-section">
                <div className="section-header-group">
                  <div className="section-header">
                    <h2 className="section-title">Funding Intelligence</h2>
                    <a href="#" className="section-link" onClick={(e) => { e.preventDefault(); showToast("Viewing all funding deals..."); }}>
                      View all funding <span>&rarr;</span>
                    </a>
                  </div>
                  <p className="section-subtitle">Largest rounds this week</p>
                </div>
                <div className="carousel-wrapper">
                  <div className="funding-carousel" ref={fundingCarouselRef}>
                    {FUNDINGS.map((fund, idx) => (
                      <div
                        key={idx}
                        className="funding-card"
                        onClick={() => showToast(`Viewing funding round details for ${fund.company}...`)}
                      >
                        <div className="funding-card-header">
                          <div className="fund-logo-wrapper" dangerouslySetInnerHTML={{ __html: fund.logo }} />
                          <div className="funding-company-details">
                            <h4 className="funding-company-name">{fund.company}</h4>
                            <span className="funding-stage">{fund.stage}</span>
                          </div>
                        </div>
                        <div className="funding-amount-wrapper">
                          <span className="funding-amount">{fund.amount}</span>
                          <span className="funding-stage-pill">{fund.stage}</span>
                        </div>
                        <div className="funding-investor-details">
                          <div className="funding-investor-info">
                            <span className="funding-investor-label">Lead investor</span>
                            <span className="funding-investor-name">{fund.investor}</span>
                          </div>
                          <span className="funding-time">{fund.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-nav-btn next"
                    onClick={() => handleScroll(fundingCarouselRef, "next")}
                    aria-label="Next"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </section>

              {/* Founder Spotlight */}
              <section className="dashboard-section">
                <div className="section-header">
                  <h2 className="section-title">Founder Spotlight</h2>
                </div>
                <div className="spotlight-row">
                  {[
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
                  ].map((founder, idx) => (
                    <div
                      key={idx}
                      className="spotlight-card"
                      onClick={() => {
                        showToast(`Redirecting to ${founder.name}'s biography...`);
                        window.open(founder.profileUrl, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <div className="spotlight-photo-container" style={{ backgroundColor: founder.bgColor || "#0f172a" }}>
                        <img 
                          src={founder.image} 
                          alt={founder.name} 
                          loading="lazy" 
                          style={{ 
                            objectPosition: founder.objectPosition || "center 25%",
                            objectFit: (founder.objectFit as any) || "cover"
                          }} 
                        />
                      </div>
                      <div className="spotlight-content">
                        <h3 className="spotlight-name">{founder.name}</h3>
                        <p className="spotlight-role">{founder.role}</p>
                        <blockquote className="spotlight-quote">"{founder.quote}"</blockquote>
                        <p className="spotlight-details">{founder.details}</p>
                        <a href={founder.profileUrl} className="spotlight-link" onClick={(e) => { e.stopPropagation(); showToast(`Redirecting to ${founder.name}'s biography...`); }} target="_blank" rel="noopener noreferrer">
                          View Profile <span>&rarr;</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* AI Pulse */}
              <section className="dashboard-section">
                <div className="section-header-group">
                  <div className="section-header">
                    <h2 className="section-title">AI Pulse</h2>
                    <a href="#" className="section-link" onClick={(e) => { e.preventDefault(); handleSidebarClick("news"); }}>
                      View all news <span>&rarr;</span>
                    </a>
                  </div>
                  <p className="section-subtitle">Latest news and product launches</p>
                </div>
                <div className="pulse-list-wrapper">
                  <div className="pulse-list">
                    {newsList.map((item) => (
                      <div
                        key={item.id}
                        className="pulse-item"
                        onClick={() => showToast(`Opening article: "${item.title}"`)}
                      >
                        <div className="pulse-icon" dangerouslySetInnerHTML={{ __html: item.logo }} />
                        <span className="pulse-time">{item.time}</span>
                        <div className="pulse-tag-wrapper">
                          <span className={`pulse-tag ${item.typeClass}`}>{item.type}</span>
                        </div>
                        <h3 className="pulse-title">{item.title}</h3>
                        <div className="pulse-comments-wrapper">
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <span>{item.comments}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="btn-show-more" onClick={() => handleSidebarClick("news")}>
                    <span>View all news</span>
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Footer layout aligned flat in one horizontal row */}
        <footer className="footer">
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
                <span className="logo-text">Atlas <span className="logo-weight-light">Intelligence</span></span>
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
                  showToast(`Thank you! ${input.value} has been subscribed to Atlas insights.`);
                  input.value = "";
                }}
              >
                <input type="email" placeholder="Enter your email" required className="subscribe-input" aria-label="Email for newsletter" />
                <button type="submit" className="btn-primary btn-subscribe">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; 2026 Atlas Intelligence. All rights reserved.</p>
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
