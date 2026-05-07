import Link from "next/link";
import "../../assets/css/inner-pages.css";

const ServiceTemplate = ({ data }) => {
  const {
    badge,
    titleLead,
    titleAccent,
    subtitle,
    heroIcon,
    intro,
    benefits,
    deliverables,
    process,
    tech,
    stats,
    faqs,
  } = data;

  return (
    <main className="ip-page">
      {/* HERO */}
      <section className="ip-hero">
        <div className="ip-hero-bg">
          <div className="ip-orb ip-orb-1" />
          <div className="ip-orb ip-orb-2" />
          <div className="ip-orb ip-orb-3" />
          <div className="ip-hero-grid" />
        </div>
        <div className="ip-hero-content">
          <span className="ip-badge">{badge}</span>
          <h1 className="ip-title">
            {titleLead} <br />
            <span className="ip-grad">{titleAccent}</span>
          </h1>
          <p className="ip-subtitle">{subtitle}</p>
          <div className="ip-hero-actions">
            <Link href="/contact-us" className="ip-btn-primary">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/portfolio" className="ip-btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-split">
            <div>
              <span className="ip-split-eyebrow">{intro.eyebrow}</span>
              <h2 className="ip-split-title">
                {intro.lead} <span className="ip-grad">{intro.accent}</span>
              </h2>
              {intro.paragraphs.map((p, i) => (
                <p key={i} className="ip-split-text">{p}</p>
              ))}
              <ul className="ip-bullets">
                {intro.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="ip-split-visual">
              <span className="ip-split-visual-icon">{heroIcon}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-head">
            <span className="ip-section-tag">Why Us</span>
            <h2 className="ip-section-title">
              Built for <span className="ip-grad">real outcomes</span>
            </h2>
            <p className="ip-section-text">
              We blend craft and strategy so the work doesn&apos;t just look
              great — it performs.
            </p>
          </div>
          <div className="ip-grid ip-grid-3">
            {benefits.map((b) => (
              <div key={b.title} className="ip-card">
                <div className="ip-card-icon">{b.icon}</div>
                <h3 className="ip-card-title">{b.title}</h3>
                <p className="ip-card-text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-section-head">
            <span className="ip-section-tag">What You Get</span>
            <h2 className="ip-section-title">
              Everything you need, <span className="ip-grad">in one engagement</span>
            </h2>
          </div>
          <div className="ip-grid ip-grid-2">
            {deliverables.map((d) => (
              <div key={d.title} className="ip-card">
                <div className="ip-card-icon">{d.icon}</div>
                <h3 className="ip-card-title">{d.title}</h3>
                <p className="ip-card-text">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-head">
            <span className="ip-section-tag">Process</span>
            <h2 className="ip-section-title">
              How a project <span className="ip-grad">comes together</span>
            </h2>
          </div>
          <div className="ip-steps">
            {process.map((s, i) => (
              <div key={s.title} className="ip-step">
                <div className="ip-step-num">0{i + 1}</div>
                <h3 className="ip-step-title">{s.title}</h3>
                <p className="ip-step-text">{s.text}</p>
              </div>
            ))}
          </div>

          {tech && tech.length > 0 && (
            <div style={{ marginTop: 60, textAlign: "center" }}>
              <span className="ip-section-tag">Stack & Tools</span>
              <div className="ip-pills" style={{ justifyContent: "center", marginTop: 16 }}>
                {tech.map((t) => (
                  <span key={t} className="ip-pill">{t}</span>
                ))}
              </div>
            </div>
          )}

          {stats && (
            <div className="ip-stats">
              {stats.map((s) => (
                <div key={s.label} className="ip-stat">
                  <div className="ip-stat-num">{s.num}</div>
                  <div className="ip-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {faqs && (
        <section className="ip-section">
          <div className="ip-container">
            <div className="ip-section-head">
              <span className="ip-section-tag">FAQ</span>
              <h2 className="ip-section-title">
                Common <span className="ip-grad">questions</span>
              </h2>
            </div>
            <div className="ip-faq">
              {faqs.map((f, i) => (
                <details key={i} className="ip-faq-item">
                  <summary className="ip-faq-summary">
                    {f.q}
                    <span className="ip-faq-icon">+</span>
                  </summary>
                  <p className="ip-faq-answer">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ServiceTemplate;
