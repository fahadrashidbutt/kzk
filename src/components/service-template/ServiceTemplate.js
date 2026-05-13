import Link from "next/link";
import Image from "next/image";
import "../../assets/css/service-template.css";
import defaultBanner from "../../assets/images/banner-bg/banner-bg.jpg";
import FinalCta from "../final-cta/FinalCta";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ServiceTemplate = ({ data, children }) => {
  const {
    badge,
    subtitle,
    intro,
    deliverables,
    process,
    stats,
    faqs,
    bannerImage,
  } = data;

  const heroBanner = bannerImage || defaultBanner;

  // The Tailored grid shows up to 6 cards; the top-center card (index 1) is highlighted.
  const cards = (deliverables || []).slice(0, 6);

  // Derive 4 stats for the 2x2 grid; pad if data has fewer.
  const statTiles = (stats || []).slice(0, 4);

  return (
    <main className="ip-page svc-page">
      {/* HERO BANNER — contained card, not full-bleed */}
      <div className="svc-hero-wrap">
        <section className="svc-hero">
          <div className="svc-hero-image">
            <Image
              src={heroBanner}
              alt={`${badge} services`}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="svc-hero-overlay" />
          <div className="svc-hero-content">
            <h1 className="svc-hero-title">{badge} Services</h1>
            <p className="svc-hero-sub">{subtitle}</p>
            <span className="svc-hero-badge">
              <span className="svc-hero-badge-dot" />
              Custom Solutions For Every Need
            </span>
          </div>
        </section>
      </div>

      {/* ABOUT + STATS */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-about-grid">
            <div className="svc-about-copy">
              <span className="svc-eyebrow">
                <span className="svc-eyebrow-dot" />
                Our Community
              </span>
              <h2 className="svc-about-title">
                Join a <span className="svc-accent">Growing Community</span> of Business and{" "}
                <span className="svc-accent">{badge}</span> Partners
              </h2>
              <p className="svc-about-text">
                {(intro && intro.paragraphs && intro.paragraphs[0]) || subtitle}
              </p>
              <Link href="/contact-us" className="svc-pill-btn">
                Join Us
                <span className="svc-pill-btn-arrow">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            <div className="svc-stats">
              {statTiles.map((s) => (
                <div key={s.label} className="svc-stat-card">
                  <div className="svc-stat-num">{s.num}</div>
                  <div className="svc-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAILORED SERVICES */}
      <section className="svc-section svc-section-soft">
        <div className="svc-container">
          <div className="svc-tailored-head">
            <span className="svc-eyebrow" style={{ justifyContent: "center" }}>
              <span className="svc-eyebrow-dot" />
              {badge} Services
            </span>
            <h2 className="svc-tailored-title">
              Comprehensive <span className="svc-accent">{badge} Services</span>{" "}
              Tailored to Meet Your Unique <span className="svc-accent">Needs</span>
            </h2>
            <p className="svc-tailored-text">{subtitle}</p>
          </div>

          <div className="svc-cards">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className={`svc-card${i === 1 ? " is-active" : ""}`}
              >
                <div className="svc-card-icon">{c.icon}</div>
                <h3 className="svc-card-title">{c.title}</h3>
                <p className="svc-card-text">{c.text}</p>
                <Link href="/contact-us" className="svc-card-cta">
                  Get a Quote
                  <span className="svc-card-cta-arrow">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PROCESS — zigzag pillar cards */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-process-head svc-process-head-center">
            <span className="svc-eyebrow" style={{ justifyContent: "center" }}>
              <span className="svc-eyebrow-dot" />
              Work Process
            </span>
            <h2 className="svc-process-title">
              Our <span className="svc-accent">Proven Process</span> for Excellence
            </h2>
            <p className="svc-tailored-text">
              Every project is different, but our process — refined across
              hundreds of engagements — adapts to fit. Here&apos;s how we move
              from kickoff to launch.
            </p>
          </div>

          <div className="svc-pillars">
            <div className="svc-pillars-rail" aria-hidden="true" />
            {(process || []).map((s, i) => (
              <div key={s.title} className="svc-pillar">
                <div className="svc-pillar-num">0{i + 1}</div>
                <div className="svc-pillar-divider" />
                <h3 className="svc-pillar-title">{s.title}</h3>
                <p className="svc-pillar-text">{s.text}</p>
                <span className="svc-pillar-corner" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONAL CUSTOM SECTION — service pages can drop in extra content
          (e.g. the SEO page's "How It Works + Benefits + Video" block)
          right here, between Work Process and FAQ. */}
      {children}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="svc-section">
          <div className="svc-container">
            <div className="svc-tailored-head">
              <span className="svc-eyebrow" style={{ justifyContent: "center" }}>
                <span className="svc-eyebrow-dot" />
                FAQ
              </span>
              <h2 className="svc-tailored-title">
                Common <span className="svc-accent">Questions</span>
              </h2>
              <p className="svc-tailored-text">
                Quick answers to the things prospective clients usually ask
                before kicking off a {badge.toLowerCase()} engagement.
              </p>
            </div>
            <div className="svc-faq">
              {faqs.map((f, i) => (
                <details key={i} className="svc-faq-item">
                  <summary className="svc-faq-summary">
                    {f.q}
                    <span className="svc-faq-icon">+</span>
                  </summary>
                  <p className="svc-faq-answer">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA — shared site-wide */}
      <FinalCta />
    </main>
  );
};

export default ServiceTemplate;
