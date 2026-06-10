(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const k=[{id:"ai-agents",name:"AI Agents",icon:"🤖",color:"#ff4b91",bgColor:"#fff0f5"},{id:"ai-coding",name:"AI Coding",icon:"💻",color:"#f2135d",bgColor:"#ffeef2"},{id:"ai-search",name:"AI Search",icon:"🔍",color:"#1d4ed8",bgColor:"#eff6ff"},{id:"ai-infrastructure",name:"AI Infrastructure",icon:"⚙️",color:"#7c3aed",bgColor:"#f5f3ff"},{id:"ai-healthcare",name:"AI Healthcare",icon:"❤️",color:"#ea580c",bgColor:"#fff7ed"},{id:"ai-security",name:"AI Security",icon:"🛡️",color:"#059669",bgColor:"#ecfdf5"},{id:"ai-robotics",name:"AI Robotics",icon:"🤖",color:"#4f46e5",bgColor:"#eef2ff"},{id:"ai-finance",name:"AI Finance",icon:"💵",color:"#0891b2",bgColor:"#ecfeff"}],I=[{id:"openai",name:"OpenAI",description:"Building AGI that benefits all of humanity.",funding:"$11.3B",founded:"2015",category:"Foundation",categoryClass:"foundation",website:"https://openai.com",logo:`<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M21.7,11.2c0.2-1.3-0.2-2.7-1.1-3.6c-0.6-0.7-1.5-1.1-2.4-1.2c-0.4-0.8-1.1-1.5-2-1.8c-1.3-0.5-2.8-0.3-3.9,0.5C11.5,4.5,10.2,4.3,9,4.8C7.9,5.2,7,6.1,6.6,7.2C5.3,7.4,4.2,8.2,3.6,9.4c-0.6,1.2-0.6,2.7-0.1,3.9c-0.2,1.3,0.2,2.7,1.1,3.6c0.6,0.7,1.5,1.1,2.4,1.2c0.4,0.8,1.1,1.5,2,1.8c0.7,0.3,1.4,0.4,2.2,0.2c0.6,0.5,1.3,0.7,2.1,0.7c0.8,0,1.6-0.3,2.2-0.8c0.8,0.3,1.6,0.3,2.4,0c0.9-0.4,1.6-1.1,2-2c1.3-0.2,2.4-1,2.9-2.2C22,14.5,22,12.8,21.7,11.2z M12,14.6c-0.4,0-0.7-0.1-1-0.3l-4.4-2.5c-0.5-0.3-0.7-0.9-0.4-1.4c0.3-0.5,0.9-0.7,1.4-0.4l4.4,2.5V7.4c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1v5.1l4.4-2.5c0.5-0.3,1.1-0.1,1.4,0.4c0.3,0.5,0.1,1.1-0.4,1.4l-4.4,2.5c-0.3,0.2-0.6,0.3-1,0.3V14.6z" />
    </svg>`},{id:"anthropic",name:"Anthropic",description:"AI safety and research company.",funding:"$7B+",founded:"2021",category:"AI Safety",categoryClass:"safety",website:"https://www.anthropic.com",logo:`<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.5 14h-5v-2h5v2zm2-4h-9v-2h9v2zm0-4h-9V7h9v2z" />
      <text x="12" y="16.5" font-family="'Outfit', sans-serif" font-size="11" font-weight="900" text-anchor="middle" fill="#000">AI</text>
    </svg>`},{id:"cursor",name:"Cursor",description:"The AI-first code editor.",funding:"$505M",founded:"2022",category:"AI Coding",categoryClass:"coding",website:"https://cursor.com",logo:`<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="m8 3 4 8 4-8" />
      <path d="m4 21 8-10 8 10" />
      <line x1="12" y1="11" x2="12" y2="21" />
    </svg>`},{id:"perplexity",name:"Perplexity",description:"Answer anything. Start searching.",funding:"$525M",founded:"2022",category:"Search",categoryClass:"search",website:"https://www.perplexity.ai",logo:`<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>`},{id:"midjourney",name:"Midjourney",description:"AI image generation for creators.",funding:"—",founded:"2022",category:"Generative AI",categoryClass:"generative",website:"https://www.midjourney.com",logo:`<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 17c5-3 8-3 13 0M4 14c3-1.5 6-1.5 9 0M2 11c7-3 12-3 18 0M8 6l3 4M15 6l-2 4M3 21h18" />
      <path d="M12 2v4M8 6h8" />
    </svg>`},{id:"elevenlabs",name:"ElevenLabs",description:"Hyper-realistic AI voice generation.",funding:"$100M",founded:"2022",category:"Generative AI",categoryClass:"generative",website:"https://elevenlabs.io",logo:`<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 10h4v4H3zM10 6h4v12h-4zM17 10h4v4h-4z" />
    </svg>`},{id:"xai",name:"xAI",description:"Understanding the universe with Grok.",funding:"$6.0B",founded:"2023",category:"Foundation",categoryClass:"foundation",website:"https://x.ai",logo:`<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M18.2 3h-2.5l-4.5 6.3L6.8 3H4.3l5.6 7.8L4 19h2.5l5-7 5.4 7h2.5l-6-8.2z" />
    </svg>`},{id:"mistral",name:"Mistral AI",description:"Open weight LLMs for global developers.",funding:"$640M",founded:"2023",category:"Foundation",categoryClass:"foundation",website:"https://mistral.ai",logo:`<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
    </svg>`}],F=[{name:"Sam Altman",role:"CEO",company:"OpenAI",bio:"Entrepreneur, investor, and programmer. Co-founder and CEO of OpenAI.",website:"https://blog.samaltman.com",socials:{twitter:"samaltman",linkedin:"sam-altman"}},{name:"Dario Amodei",role:"Co-founder & CEO",company:"Anthropic",bio:"Italian-American AI researcher and entrepreneur. Co-founder of Anthropic.",website:"https://anthropic.com",socials:{twitter:"darioamodei",linkedin:"dario-amodei"}},{name:"Aravind Srinivas",role:"Co-founder & CEO",company:"Perplexity",bio:"Former researcher at OpenAI, Google, and DeepMind. Building Perplexity.",website:"https://perplexity.ai",socials:{twitter:"aravsrinivas",linkedin:"aravind-srinivas"}},{name:"Arvid Lunnemar",role:"Co-founder",company:"Cursor (Anysphere)",bio:"Co-founder and engineer at Cursor, building the future of programming tools.",website:"https://cursor.sh",socials:{twitter:"arvidlunnemar",linkedin:"arvid"}}],q=[{name:"Sequoia Capital",focus:"Early & Growth Stage",portfolio:["OpenAI","Perplexity","Linear","Scale AI"],website:"https://sequoiacap.com"},{name:"Andreessen Horowitz",focus:"All Stages, AI-First",portfolio:["OpenAI","Mistral AI","Luma AI","Character.ai"],website:"https://a16z.com"},{name:"Lightspeed Venture Partners",focus:"Seed & Venture",portfolio:["Mistral AI","Stability AI","Context.ai"],website:"https://lsvp.com"},{name:"Valor Equity Partners",focus:"Growth & Expansion",portfolio:["xAI","Tesla","SpaceX"],website:"https://valorep.com"}],N=[{name:"ChatGPT",company:"OpenAI",category:"Generative AI",description:"Conversational assistant with advanced reasoning capabilities.",website:"https://chatgpt.com",pricing:"Freemium"},{name:"Claude",company:"Anthropic",category:"Generative AI",description:"Helpful, harmless, and honest assistant with large context windows.",website:"https://claude.ai",pricing:"Freemium"},{name:"Cursor",company:"Anysphere",category:"AI Coding",description:"An AI-first code editor designed for pair programming and refactoring.",website:"https://cursor.com",pricing:"Freemium"},{name:"Perplexity Pro",company:"Perplexity",category:"AI Search",description:"Conversational answer engine delivering real-time cited answers.",website:"https://perplexity.ai",pricing:"Subscription"}],R=[{company:"Perplexity",amount:"$250M",stage:"Series C",investor:"Sequoia Capital",date:"2h ago",logo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fund-logo">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>`},{company:"Thinking Machines Lab",amount:"$2.0B",stage:"Series A",investor:"Andreessen Horowitz",date:"1d ago",logo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="fund-logo">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v12M6 12h12" />
    </svg>`},{company:"Mistral AI",amount:"$600M",stage:"Series C",investor:"Lightspeed",date:"2d ago",logo:`<svg viewBox="0 0 24 24" fill="currentColor" class="fund-logo">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
    </svg>`},{company:"xAI",amount:"$6.0B",stage:"Series B",investor:"Valor Equity Partners",date:"3d ago",logo:`<svg viewBox="0 0 24 24" fill="currentColor" class="fund-logo">
      <path d="M18.2 3h-2.5l-4.5 6.3L6.8 3H4.3l5.6 7.8L4 19h2.5l5-7 5.4 7h2.5l-6-8.2z" />
    </svg>`}],O=[{title:"Top 100 AI Startups 2026",description:"The definitive ranking of the most promising AI startups globally.",badge:"2026 Report",gradient:"linear-gradient(135deg, #0f0c20 0%, #15102a 100%)",borderGradient:"#ff4b91"},{title:"State of AI Funding Q1 2026",description:"Investor guide to benchmarking trends and capital allocation.",badge:"Q1 2026 Report",gradient:"linear-gradient(135deg, #09132c 0%, #0c1c42 100%)",borderGradient:"#3b82f6"},{title:"AI Agents Landscape 2026",description:"Mapping the rise of autonomous agents across industries.",badge:"2026 Report",gradient:"linear-gradient(135deg, #051a14 0%, #0b2d23 100%)",borderGradient:"#10b981"},{title:"AI Coding Landscape 2026",description:"Deep dive into AI-native dev tools and platforms.",badge:"2026 Report",gradient:"linear-gradient(135deg, #180927 0%, #291040 100%)",borderGradient:"#8b5cf6"}],$=[{id:1,time:"2h ago",type:"PRODUCT LAUNCH",typeClass:"product-launch",title:"OpenAI launches GPT-4.5 with major reasoning and coding upgrades",comments:128},{id:2,time:"4h ago",type:"FUNDING",typeClass:"funding",title:"Anthropic raises $2.5B in Series C at a $18B valuation",comments:96},{id:3,time:"6h ago",type:"PRODUCT LAUNCH",typeClass:"product-launch",title:"Perplexity unveils Comet, an AI-powered browser for research",comments:74},{id:4,time:"9h ago",type:"PARTNERSHIP",typeClass:"partnership",title:"NVIDIA and Microsoft expand AI infrastructure partnership",comments:62},{id:5,time:"12h ago",type:"PRODUCT LAUNCH",typeClass:"product-launch",title:"Runway Gen-4 launches with next-gen video generation model",comments:48},{id:6,time:"15h ago",type:"PRODUCT LAUNCH",typeClass:"product-launch",title:"ElevenLabs releases new Voice Design API for game developers",comments:34},{id:7,time:"18h ago",type:"FUNDING",typeClass:"funding",title:"Scale AI secures $1.2B strategic funding round from technology consortium",comments:89},{id:8,time:"1d ago",type:"PRODUCT LAUNCH",typeClass:"product-launch",title:"Meta open-sources Llama 4-Dense models with native 1M context length",comments:215},{id:9,time:"2d ago",type:"PARTNERSHIP",typeClass:"partnership",title:"Google Cloud and Mistral AI announce deep hosting agreement",comments:41}],H=[{title:"Senior AI Research Scientist",company:"OpenAI",salary:"$280K - $380K",location:"San Francisco, CA",remote:"Hybrid",experience:"5+ years"},{title:"Full Stack Engineer (AI Editor)",company:"Cursor",salary:"$180K - $250K",location:"San Francisco, CA",remote:"Remote Friendly",experience:"3+ years"},{title:"Technical Staff, Alignment Science",company:"Anthropic",salary:"$220K - $310K",location:"Seattle, WA",remote:"Hybrid",experience:"4+ years"},{title:"Backend Software Engineer, Search Core",company:"Perplexity",salary:"$190K - $260K",location:"San Francisco, CA",remote:"In-office",experience:"3+ years"}],b=document.getElementById("featured-companies-container"),f=document.getElementById("markets-carousel-container"),m=document.getElementById("funding-carousel-container"),w=document.getElementById("reports-container"),C=document.getElementById("pulse-list-container"),v=document.getElementById("btn-show-more-news"),p=document.getElementById("main-search-input"),D=document.getElementById("btn-search-trigger"),g=document.querySelectorAll(".pill-btn"),A=document.querySelectorAll(".nav-item"),S=document.getElementById("search-results-panel"),h=document.getElementById("search-results-grid"),E=document.getElementById("dashboard-main-content"),z=document.getElementById("btn-clear-search"),x=document.getElementById("markets-carousel-next"),T=document.getElementById("funding-carousel-next"),B=document.querySelector(".mobile-menu-toggle"),L=document.querySelector(".sidebar"),u=document.querySelector(".sidebar-overlay"),M=document.getElementById("notification-toast"),G=M.querySelector(".toast-message");let s="all",y=!1;document.addEventListener("DOMContentLoaded",()=>{j(),U(),V(),K(),P(),W()});function c(t){G.textContent=t,M.classList.add("show"),setTimeout(()=>{M.classList.remove("show")},3e3)}function j(){b&&(b.innerHTML=I.slice(0,5).map(t=>`
      <div class="company-card" data-id="${t.id}">
        <div class="company-logo">
          ${t.logo}
        </div>
        <h3 class="company-name">${t.name}</h3>
        <p class="company-desc">${t.description}</p>
        <div class="company-metadata">
          <div class="company-meta-item">
            <span>Funding</span>
            <span class="company-meta-val">${t.funding}</span>
          </div>
          <div class="company-meta-item">
            <span>Founded</span>
            <span class="company-meta-val">${t.founded}</span>
          </div>
          <span class="company-tag">${t.category}</span>
        </div>
      </div>
    `).join(""),b.querySelectorAll(".company-card").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.id,a=I.find(e=>e.id===o);c(`Redirecting to ${a.name} profile...`)})}))}function U(){f&&(f.innerHTML=k.map(t=>`
      <div class="market-item" data-id="${t.id}">
        <div class="market-icon-wrapper" style="background-color: ${t.bgColor}; color: ${t.color};">
          ${t.icon}
        </div>
        <span class="market-name">${t.name}</span>
      </div>
    `).join(""),f.querySelectorAll(".market-item").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.id,a=k.find(e=>e.id===o);p.value=a.name,d(),c(`Filtering by market: ${a.name}`)})}))}function V(){m&&(m.innerHTML=R.map(t=>`
      <div class="funding-card">
        <div class="funding-card-header">
          <div class="fund-logo-wrapper">
            ${t.logo}
          </div>
          <div class="funding-company-details">
            <h4 class="funding-company-name">${t.company}</h4>
            <span class="funding-stage">${t.stage}</span>
          </div>
        </div>
        <div class="funding-amount-wrapper">
          <span class="funding-amount">${t.amount}</span>
          <span class="funding-stage-pill">${t.stage}</span>
        </div>
        <div class="funding-investor-details">
          <div class="funding-investor-info">
            <span class="funding-investor-label">Lead investor</span>
            <span class="funding-investor-name">${t.investor}</span>
          </div>
          <span class="funding-time">${t.date}</span>
        </div>
      </div>
    `).join(""),m.querySelectorAll(".funding-card").forEach(t=>{t.addEventListener("click",()=>{const o=t.querySelector(".funding-company-name").textContent;c(`Viewing funding details for ${o}...`)})}))}function K(){w&&(w.innerHTML=O.map(t=>`
      <div class="report-card" style="background: ${t.gradient}; --report-accent: ${t.borderGradient};">
        <span class="report-badge">${t.badge}</span>
        <h3 class="report-title">${t.title}</h3>
        <p class="report-desc">${t.description}</p>
        <div class="report-card-footer">
          <span class="report-meta-tag">PDF Report</span>
          <div class="report-arrow-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    `).join(""),w.querySelectorAll(".report-card").forEach(t=>{t.addEventListener("click",()=>{const o=t.querySelector(".report-title").textContent;c(`Downloading Research Report: ${o}...`)})}))}function P(){if(!C)return;const t=y?$:$.slice(0,5);if(C.innerHTML=t.map(o=>`
      <div class="pulse-item" data-id="${o.id}">
        <div class="pulse-icon">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M16 8h2M16 12h2M16 16h2M6 8h6M6 12h6M6 16h6" />
          </svg>
        </div>
        <span class="pulse-time">${o.time}</span>
        <div class="pulse-tag-wrapper">
          <span class="pulse-tag ${o.typeClass}">${o.type}</span>
        </div>
        <h3 class="pulse-title">${o.title}</h3>
        <div class="pulse-comments-wrapper">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>${o.comments}</span>
        </div>
      </div>
    `).join(""),C.querySelectorAll(".pulse-item").forEach(o=>{o.addEventListener("click",()=>{const a=o.querySelector(".pulse-title").textContent;c(`Opening article: "${a}"`)})}),v){const o=v.querySelector("span"),a=v.querySelector("svg");y?(o.textContent="Show less",a.style.transform="rotate(180deg)"):(o.textContent="Show more",a.style.transform="rotate(0deg)")}}function W(){p.addEventListener("input",()=>{d()}),D.addEventListener("click",()=>{d()}),p.addEventListener("keypress",n=>{n.key==="Enter"&&d()}),z.addEventListener("click",()=>{p.value="",d()}),g.forEach(n=>{n.addEventListener("click",()=>{g.forEach(i=>i.classList.remove("active")),n.classList.add("active"),s=n.dataset.filter,A.forEach(i=>{i.dataset.tab===s?i.classList.add("active"):i.classList.remove("active")}),d()})}),A.forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),L.classList.remove("open"),u.classList.remove("open");const r=n.dataset.tab;A.forEach(l=>l.classList.remove("active")),n.classList.add("active"),g.forEach(l=>{l.dataset.filter===r?l.classList.add("active"):l.classList.remove("active")}),s=r,r==="discover"?(p.value="",s="all",g.forEach(l=>l.classList.remove("active")),document.querySelector('[data-filter="all"]').classList.add("active"),S.classList.add("hidden"),E.classList.remove("hidden"),window.scrollTo({top:0,behavior:"smooth"})):d()})}),v.addEventListener("click",()=>{y=!y,P()}),x&&x.addEventListener("click",()=>{const n=f,i=n.clientWidth/2;n.scrollLeft+n.clientWidth>=n.scrollWidth-10?n.scrollTo({left:0,behavior:"smooth"}):n.scrollBy({left:i,behavior:"smooth"})}),T&&T.addEventListener("click",()=>{const n=m,i=n.clientWidth/2;n.scrollLeft+n.clientWidth>=n.scrollWidth-10?n.scrollTo({left:0,behavior:"smooth"}):n.scrollBy({left:i,behavior:"smooth"})}),B&&B.addEventListener("click",()=>{L.classList.toggle("open"),u.classList.toggle("open")}),u&&u.addEventListener("click",()=>{L.classList.remove("open"),u.classList.remove("open")});const t=document.querySelector(".btn-watchlist");t&&t.addEventListener("click",()=>{c("Watchlist updated. Tracking 5 companies.")});const o=document.querySelector(".btn-create-account");o&&o.addEventListener("click",()=>{c("Registration modal: Opening account setup...")});const a=document.querySelector(".btn-signin");a&&a.addEventListener("click",n=>{n.preventDefault(),c("Sign-in modal: Opening authentication credentials...")});const e=document.getElementById("newsletter-form");e&&e.addEventListener("submit",n=>{n.preventDefault();const i=e.querySelector(".subscribe-input"),r=i.value.trim();c(`Thank you! ${r} has been subscribed to Atlas insights.`),i.value=""})}function d(){const t=p.value.toLowerCase().trim();if(t===""&&s==="all"){S.classList.add("hidden"),E.classList.remove("hidden");return}E.classList.add("hidden"),S.classList.remove("hidden");let o=[];const a=(e,n,i,r)=>e&&e.toLowerCase().includes(r)||n&&n.toLowerCase().includes(r)||i&&i.toLowerCase().includes(r);(s==="all"||s==="startups")&&I.forEach(e=>{(t===""||a(e.name,e.category,e.description,t))&&o.push({type:"Startup",title:e.name,subtitle:`${e.category} • Founded ${e.founded}`,desc:e.description,footerText:`Funding: ${e.funding}`,link:e.website})}),(s==="all"||s==="founders")&&F.forEach(e=>{(t===""||a(e.name,e.role+" at "+e.company,e.bio,t))&&o.push({type:"Founder",title:e.name,subtitle:`${e.role} @ ${e.company}`,desc:e.bio,footerText:`Socials: @${e.socials.twitter}`,link:e.website})}),(s==="all"||s==="investors")&&q.forEach(e=>{(t===""||a(e.name,e.focus,e.portfolio.join(", "),t))&&o.push({type:"Investor",title:e.name,subtitle:`Focus: ${e.focus}`,desc:`Invested in: ${e.portfolio.join(", ")}`,footerText:"Venture Capital",link:e.website})}),(s==="all"||s==="products")&&N.forEach(e=>{(t===""||a(e.name,e.category,e.description,t))&&o.push({type:"Product",title:e.name,subtitle:`${e.category} by ${e.company}`,desc:e.description,footerText:`Pricing: ${e.pricing}`,link:e.website})}),(s==="all"||s==="news")&&$.forEach(e=>{(t===""||a(e.title,e.type,"",t))&&o.push({type:"News",title:e.title,subtitle:`${e.type} • ${e.time}`,desc:"Latest report tracking industry movements and breaking AI announcements.",footerText:`${e.comments} Comments`,link:"#"})}),(s==="all"||s==="funding")&&R.forEach(e=>{(t===""||a(e.company,e.stage+" "+e.amount,`Lead Investor: ${e.investor}`,t))&&o.push({type:"Funding Round",title:`${e.company} raises ${e.amount}`,subtitle:`${e.stage} • ${e.date}`,desc:`Lead Investor: ${e.investor}. This round represents strategic expansion of infrastructure capacity.`,footerText:"Funding Tracker",link:"#"})}),(s==="all"||s==="jobs")&&H.forEach(e=>{(t===""||a(e.title,e.company+" "+e.location,`${e.salary} • ${e.remote}`,t))&&o.push({type:"Job",title:e.title,subtitle:`${e.company} • ${e.location} (${e.remote})`,desc:`Requirements: ${e.experience} experience. Compensation: ${e.salary}.`,footerText:"Apply URL",link:"#"})}),s==="research"&&O.forEach(e=>{(t===""||a(e.title,e.badge,e.description,t))&&o.push({type:"Research Report",title:e.title,subtitle:e.badge,desc:e.description,footerText:"Download Available",link:"#"})}),J(o)}function J(t){if(h){if(t.length===0){h.innerHTML=`
      <div class="no-results-msg">
        <p>No results found matching your query. Try adjusting your terms or filters.</p>
      </div>
    `;return}h.innerHTML=t.map(o=>`
      <div class="generic-result-card">
        <span class="result-card-type">${o.type}</span>
        <h3 class="result-card-title">${o.title}</h3>
        <span class="result-card-subtitle">${o.subtitle}</span>
        <p class="result-card-desc">${o.desc}</p>
        <div class="result-card-footer">
          <span>${o.footerText}</span>
          <span class="btn-text">View details &rarr;</span>
        </div>
      </div>
    `).join(""),h.querySelectorAll(".generic-result-card").forEach((o,a)=>{o.addEventListener("click",()=>{const e=t[a];c(`Loading details for: ${e.title}...`)})})}}
