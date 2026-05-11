import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import "../../../assets/css/inner-pages.css";
import "../../../assets/css/portfolio-detail.css";
import { portfolios, getPortfolioBySlug } from "../../../data/portfolio";
import FinalCta from "../../../components/final-cta/FinalCta";

export function generateStaticParams() {
  return portfolios.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);
  if (!portfolio) return { title: "Portfolio" };
  return {
    title: `${portfolio.title} — Case Study`,
    description: portfolio.about.slice(0, 160),
  };
}

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C8.28 9.09 5.11 7.38 3 4.79c-.37.64-.58 1.38-.58 2.17 0 1.49.76 2.81 1.91 3.58a4.27 4.27 0 0 1-1.94-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.3 4.3 0 0 1-1.93.07c.54 1.69 2.12 2.92 3.99 2.95A8.59 8.59 0 0 1 2 19.54a12.13 12.13 0 0 0 6.57 1.92c7.88 0 12.19-6.53 12.19-12.19 0-.18 0-.37-.01-.56.84-.6 1.56-1.36 2.13-2.22l-.42.51z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 0C5.4 0 0 5.4 0 12.04c0 5.09 3.18 9.45 7.66 11.21-.11-.95-.2-2.41.04-3.45.22-.94 1.41-5.97 1.41-5.97s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 4-.28 1.2.6 2.18 1.78 2.18 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.07-4.88-5.02-4.88-3.42 0-5.43 2.57-5.43 5.22 0 1.03.4 2.14.89 2.74.1.12.11.23.08.35-.09.39-.3 1.2-.34 1.37-.05.22-.18.27-.41.16-1.5-.7-2.44-2.89-2.44-4.65 0-3.79 2.75-7.27 7.93-7.27 4.16 0 7.4 2.97 7.4 6.93 0 4.13-2.61 7.46-6.22 7.46-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.34-1.49 3.13.55.18 1.4.27 2.07.27C18.6 24.04 24 18.64 24 12.04 24 5.4 18.6 0 12.04 0z" />
  </svg>
);

export default async function PortfolioDetailPage({ params }) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);
  if (!portfolio) notFound();

  const idx = portfolios.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? portfolios[idx - 1] : null;
  const next = idx < portfolios.length - 1 ? portfolios[idx + 1] : null;

  return (
    <main className="ip-page pd-page">
      {/* HERO */}
      <section className="pd-hero">
        <div className="ip-hero-bg">
          <div className="ip-orb ip-orb-1" />
          <div className="ip-orb ip-orb-2" />
          <div className="ip-orb ip-orb-3" />
          <div className="ip-hero-grid" />
        </div>

        <div className="pd-hero-content">
          <Link href="/portfolio" className="pd-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="pd-hero-meta">
            <span className="pd-hero-cat">{portfolio.category}</span>
            <span className="pd-hero-dot" />
            <span className="pd-hero-year">{portfolio.year}</span>
          </div>

          <h1 className="pd-hero-title">{portfolio.title}</h1>

          <div className="pd-hero-info">
            <div className="pd-hero-info-item">
              <div className="pd-hero-info-label">Location</div>
              <div className="pd-hero-info-value">{portfolio.location}</div>
            </div>
            <div className="pd-hero-info-item">
              <div className="pd-hero-info-label">Website</div>
              <a
                href={portfolio.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-hero-info-link"
              >
                {portfolio.website}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT IMAGE */}
      <section className="pd-imagewrap">
        <div className="pd-image">
          <Image
            src={portfolio.image}
            alt={portfolio.title}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="ip-section">
        <div className="ip-container pd-about">
          <div className="pd-about-side">
            <span className="ip-section-tag">About Project</span>
            <div className="pd-tags">
              {portfolio.tags.map((t) => (
                <span key={t} className="ip-pill">{t}</span>
              ))}
            </div>
          </div>
          <div className="pd-about-body">
            <h2 className="pd-about-title">
              The story behind{" "}
              <span className="ip-grad">{portfolio.title}</span>
            </h2>
            <p className="pd-about-text">{portfolio.about}</p>

            {portfolio.metrics && portfolio.metrics.length > 0 && (
              <div className="pd-metrics">
                {portfolio.metrics.map((m) => (
                  <div key={m.label} className="pd-metric">
                    <div className="pd-metric-num">{m.num}</div>
                    <div className="pd-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURES (only if present) */}
      {portfolio.features.length > 0 && (
        <section className="ip-section ip-section-alt">
          <div className="ip-container">
            <div className="ip-section-head">
              <span className="ip-section-tag">What We Delivered</span>
              <h2 className="ip-section-title">
                Built around the <span className="ip-grad">essentials</span>
              </h2>
            </div>
            <div className="pd-features">
              {portfolio.features.map((f) => (
                <div key={f} className="pd-feature">
                  <span className="pd-feature-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SHARE */}
      <section className="ip-section">
        <div className="ip-container pd-share">
          <div className="pd-share-label">
            <span className="ip-section-tag">Share</span>
            <h3 className="pd-share-title">
              Like this case study? Share it with someone.
            </h3>
          </div>
          <div className="pd-share-buttons">
            <a
              href={portfolio.share.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-share-btn"
              aria-label="Share on Twitter"
            >
              <TwitterIcon />
              <span>Twitter</span>
            </a>
            <a
              href={portfolio.share.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-share-btn"
              aria-label="Share on Facebook"
            >
              <FacebookIcon />
              <span>Facebook</span>
            </a>
            <a
              href={portfolio.share.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-share-btn"
              aria-label="Share on Pinterest"
            >
              <PinterestIcon />
              <span>Pinterest</span>
            </a>
          </div>
        </div>
      </section>

      {/* PREV / NEXT NAV */}
      <section className="pd-pn-section">
        <div className="ip-container pd-pn">
          {prev ? (
            <Link href={`/portfolio/${prev.slug}`} className="pd-pn-card pd-pn-prev">
              <div className="pd-pn-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
              <div className="pd-pn-body">
                <span className="pd-pn-label">Previous Project</span>
                <span className="pd-pn-title">{prev.title}</span>
              </div>
            </Link>
          ) : <span />}

          {next ? (
            <Link href={`/portfolio/${next.slug}`} className="pd-pn-card pd-pn-next">
              <div className="pd-pn-body">
                <span className="pd-pn-label">Next Project</span>
                <span className="pd-pn-title">{next.title}</span>
              </div>
              <div className="pd-pn-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          ) : <span />}
        </div>
      </section>

      {/* FINAL CTA — shared site-wide */}
      <FinalCta />
    </main>
  );
}
