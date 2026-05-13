import "./seo-education.css";

const HOW_STEPS = [
  {
    num: "01",
    title: "Crawl",
    text: "Search engines send bots across the web to discover new and updated pages. We make sure your site is fully crawlable — clean sitemaps, no orphaned pages, no robots blocks.",
  },
  {
    num: "02",
    title: "Index",
    text: "Crawled pages are stored in Google's index — its database of what exists on the web. We optimize structure, schema and Core Web Vitals so the right pages get indexed.",
  },
  {
    num: "03",
    title: "Rank",
    text: "When someone searches, Google's algorithm ranks indexed pages by hundreds of signals — relevance, intent match, authority, freshness, UX, links. We engineer for those signals.",
  },
  {
    num: "04",
    title: "Optimize",
    text: "Rankings shift constantly. We track movement, double down on what's working, refresh what's slipping, and adapt to algorithm updates — every single month.",
  },
];

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Sustainable Traffic Growth",
    text: "Unlike paid ads that stop the moment you stop spending, SEO compounds — every page that ranks keeps earning visits, year after year.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Higher-Intent Visitors",
    text: "People searching for what you sell are already in buying mode. SEO traffic converts 5–10× better than cold social or display traffic, on average.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Brand Authority & Trust",
    text: "Showing up on page one of Google is a credibility signal in itself. Customers trust brands they see ranking organically far more than ad placements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Lower Customer-Acquisition Cost",
    text: "Once SEO is producing, the cost per lead drops dramatically vs. paid channels. Most KZK clients see CAC fall 30–60% inside the first 12 months.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Local & Global Reach",
    text: "From a service area in Essex to international ecommerce — SEO scales with your ambition. Local map pack, national keywords, or 20 countries — same playbook, different levers.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Measurable, Defensible ROI",
    text: "Every ranking, click and revenue dollar is tracked in GA4 + Search Console. No black boxes — you'll see exactly which content, fixes and links drove which outcomes.",
  },
];

const SeoEducation = () => {
  return (
    <section className="svc-section seo-edu-section" id="how-seo-works">
      <div className="svc-container">
        {/* HEADER */}
        <div className="seo-edu-head">
          <span className="svc-eyebrow" style={{ justifyContent: "center" }}>
            <span className="svc-eyebrow-dot" />
            How It Works
          </span>
          <h2 className="seo-edu-title">
            How SEO Works — and{" "}
            <span className="svc-accent">Why It Matters</span>
          </h2>
          <p className="seo-edu-lead">
            SEO is the discipline of making your website the best, most
            findable answer to what your customers are searching for. The
            short animation below shows what that looks like in practice
            — and the four phases at right explain how we make it happen.
          </p>
        </div>

        {/* ANIMATED SVG + HOW IT WORKS STEPS */}
        <div className="seo-edu-grid">
          <div className="seo-edu-visual" aria-label="Animated SEO ranking illustration">
            <svg
              className="seo-anim"
              viewBox="0 0 380 340"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="A simulated search results panel. The KZK Services site starts in position four and climbs to position one as the competitors are pushed down."
            >
              <defs>
                <linearGradient id="seoBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#18a1d7" />
                  <stop offset="60%" stopColor="#3eb5e0" />
                  <stop offset="100%" stopColor="#7dd3ee" />
                </linearGradient>
                <linearGradient id="seoCompBg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.015)" />
                </linearGradient>
                <pattern id="seoDotGrid" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="11" cy="11" r="0.8" fill="rgba(24,161,215,0.16)" />
                </pattern>
              </defs>

              {/* Background grid */}
              <rect x="0" y="0" width="380" height="340" fill="url(#seoDotGrid)" />

              {/* Search bar */}
              <g className="seo-anim-search">
                <rect x="20" y="18" width="340" height="42" rx="21" fill="rgba(13,19,32,0.78)" stroke="rgba(24,161,215,0.3)" strokeWidth="1" />
                <circle cx="44" cy="39" r="6.5" stroke="#3eb5e0" strokeWidth="2" fill="none" />
                <line x1="49" y1="44" x2="54" y2="49" stroke="#3eb5e0" strokeWidth="2" strokeLinecap="round" />
                <text x="68" y="44" fill="rgba(255,255,255,0.9)" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="500">your business</text>
                <rect className="seo-anim-cursor" x="170" y="29" width="2" height="18" fill="#3eb5e0" />
              </g>

              {/* Fixed rank labels on the left — slots #1–#4 don't move,
                  cards slide between them. This makes the climb obvious. */}
              <g className="seo-anim-ranks">
                {[
                  { n: 1, y: 96 },
                  { n: 2, y: 144 },
                  { n: 3, y: 192 },
                  { n: 4, y: 240 },
                ].map(({ n, y }) => (
                  <g key={n} transform={`translate(20, ${y})`}>
                    <rect width="26" height="26" rx="7" fill="rgba(13,19,32,0.85)" stroke="rgba(24,161,215,0.2)" />
                    <text x="13" y="18" textAnchor="middle" fill="rgba(125,211,238,0.85)" fontFamily="system-ui" fontSize="11" fontWeight="800">{`#${n}`}</text>
                  </g>
                ))}
              </g>

              {/* Four result cards. Each animates between rank slots. Drawing
                  order matters: Your Site drawn LAST so its brand glow sits
                  above any competitor it overlaps mid-swap. */}
              <g className="seo-row seo-row-compA">
                <rect width="304" height="40" rx="10" fill="url(#seoCompBg)" stroke="rgba(255,255,255,0.07)" />
                <text x="20" y="18" fill="rgba(255,255,255,0.78)" fontFamily="system-ui" fontSize="13" fontWeight="600">competitor-one.com</text>
                <text x="20" y="32" fill="rgba(255,255,255,0.4)" fontFamily="system-ui" fontSize="10">/services/agency</text>
              </g>
              <g className="seo-row seo-row-compB">
                <rect width="304" height="40" rx="10" fill="url(#seoCompBg)" stroke="rgba(255,255,255,0.07)" />
                <text x="20" y="18" fill="rgba(255,255,255,0.78)" fontFamily="system-ui" fontSize="13" fontWeight="600">another-rival.io</text>
                <text x="20" y="32" fill="rgba(255,255,255,0.4)" fontFamily="system-ui" fontSize="10">/web-design</text>
              </g>
              <g className="seo-row seo-row-compC">
                <rect width="304" height="40" rx="10" fill="url(#seoCompBg)" stroke="rgba(255,255,255,0.07)" />
                <text x="20" y="18" fill="rgba(255,255,255,0.78)" fontFamily="system-ui" fontSize="13" fontWeight="600">directory-site.com</text>
                <text x="20" y="32" fill="rgba(255,255,255,0.4)" fontFamily="system-ui" fontSize="10">/listings</text>
              </g>
              <g className="seo-row seo-row-yoursite">
                <rect width="304" height="40" rx="10" fill="rgba(24,161,215,0.14)" stroke="url(#seoBrandGrad)" strokeWidth="1.5" />
                <rect width="4" height="40" rx="2" fill="url(#seoBrandGrad)" />
                <circle cx="22" cy="20" r="8" fill="url(#seoBrandGrad)" />
                <text x="22" y="24" textAnchor="middle" fill="#0d1320" fontFamily="system-ui" fontSize="10" fontWeight="800">K</text>
                <text x="40" y="18" fill="#fff" fontFamily="system-ui" fontSize="13" fontWeight="700">KZK Services — Your Site</text>
                <text x="40" y="32" fill="rgba(255,255,255,0.75)" fontFamily="system-ui" fontSize="10">www.kzkservices.com</text>
                <g className="seo-anim-arrow" transform="translate(282, 20)">
                  <circle r="11" fill="rgba(24,161,215,0.2)" stroke="rgba(125,211,238,0.6)" />
                  <path d="M0 4 L0 -4 M-3 -1 L0 -4 L3 -1" stroke="#7dd3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </g>

              {/* Status line at the bottom — "Rank: #N" updates as Your Site
                  climbs. Four absolutely-positioned text elements each
                  fade in only during their corresponding rank window. */}
              <g className="seo-anim-status">
                <text x="20" y="312" fill="rgba(255,255,255,0.5)" fontFamily="system-ui" fontSize="11" fontWeight="600" letterSpacing="1.5">
                  YOUR RANK:
                </text>
                <g className="seo-anim-rank-stack" transform="translate(110, 312)">
                  <text className="seo-anim-rank seo-anim-rank-4" fill="url(#seoBrandGrad)" fontFamily="system-ui" fontSize="14" fontWeight="800">#4</text>
                  <text className="seo-anim-rank seo-anim-rank-3" fill="url(#seoBrandGrad)" fontFamily="system-ui" fontSize="14" fontWeight="800">#3</text>
                  <text className="seo-anim-rank seo-anim-rank-2" fill="url(#seoBrandGrad)" fontFamily="system-ui" fontSize="14" fontWeight="800">#2</text>
                  <text className="seo-anim-rank seo-anim-rank-1" fill="url(#seoBrandGrad)" fontFamily="system-ui" fontSize="14" fontWeight="800">#1</text>
                </g>
                <g className="seo-anim-trophy" transform="translate(146, 302)">
                  <path d="M0 0 L3 3 L8 -6 L3 -2 L1 -4 Z" fill="#7dd3ee" />
                </g>
              </g>
            </svg>

            <div className="seo-edu-visual-caption">
              <span className="seo-edu-visual-pill">
                <span className="seo-edu-visual-dot" />
                Live ranking simulation
              </span>
              <p>
                A 7-second loop showing what well-executed SEO actually
                delivers: your site climbing through the search results
                until it owns position #1 for the queries that matter.
              </p>
            </div>
          </div>

          <ol className="seo-edu-steps" aria-label="The four phases of SEO">
            {HOW_STEPS.map((s) => (
              <li key={s.num} className="seo-edu-step">
                <span className="seo-edu-step-num" aria-hidden="true">
                  {s.num}
                </span>
                <div className="seo-edu-step-body">
                  <h3 className="seo-edu-step-title">{s.title}</h3>
                  <p className="seo-edu-step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* BENEFITS */}
        <div className="seo-edu-benefits-head">
          <span className="svc-eyebrow" style={{ justifyContent: "center" }}>
            <span className="svc-eyebrow-dot" />
            Why It Matters
          </span>
          <h3 className="seo-edu-benefits-title">
            Six reasons SEO is the{" "}
            <span className="svc-accent">highest-leverage</span> growth
            channel
          </h3>
        </div>

        <div className="seo-edu-benefits">
          {BENEFITS.map((b) => (
            <div key={b.title} className="seo-edu-benefit">
              <span className="seo-edu-benefit-icon" aria-hidden="true">
                {b.icon}
              </span>
              <h4 className="seo-edu-benefit-title">{b.title}</h4>
              <p className="seo-edu-benefit-text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoEducation;
