import Link from "next/link";
import "../../assets/css/inner-pages.css";
import "../../assets/css/about-section.css";
import AboutUnique from "../../components/about-unique/AboutUnique";
import FinalCta from "../../components/final-cta/FinalCta";

export const metadata = {
  title: "About Us | KZK Services",
  description:
    "KZK Services is a digital agency crafting websites, apps and growth strategies that deliver measurable results.",
};

const values = [
  {
    icon: "✦",
    title: "Excellence",
    text: "We obsess over the details so the outcome speaks for itself — fast, beautiful, and built to last.",
  },
  {
    icon: "◆",
    title: "Transparency",
    text: "Clear timelines, open communication, no hidden fees. You always know where your project stands.",
  },
  {
    icon: "◉",
    title: "Partnership",
    text: "We treat your goals like ours. Long after launch, we stick around to keep the momentum going.",
  },
  {
    icon: "▲",
    title: "Innovation",
    text: "We pair proven craft with the latest tooling so you ship modern experiences that won't age fast.",
  },
];

const FOUNDED_YEAR = 2013;
const yearsOfCraft = new Date().getFullYear() - FOUNDED_YEAR;

const stats = [
  { num: "150+", label: "Projects Delivered" },
  { num: "50+", label: "Experts on Team" },
  { num: "98%", label: "Client Retention" },
  { num: `${yearsOfCraft}+`, label: "Years of Craft" },
];

const Page = () => {
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
          <span className="ip-badge">About KZK</span>
          <h1 className="ip-title">
            Crafting digital experiences <br />
            that <span className="ip-grad">move brands forward</span>
          </h1>
          <p className="ip-subtitle">
            We&apos;re a multidisciplinary studio of designers, engineers and
            strategists who help ambitious teams design, build and grow on the
            web.
          </p>
          <div className="ip-hero-actions">
            <Link href="/portfolio" className="ip-btn-primary">
              See Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact-us" className="ip-btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION — unique animated section */}
      <AboutUnique />

      {/* VALUES */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-head">
            <span className="ip-section-tag">What We Stand For</span>
            <h2 className="ip-section-title">
              The values that <span className="ip-grad">shape our work</span>
            </h2>
            <p className="ip-section-text">
              Four principles guide every line of code, every pixel and every
              campaign we ship.
            </p>
          </div>

          <div className="ip-grid ip-grid-4">
            {values.map((v) => (
              <div key={v.title} className="ip-card">
                <div className="ip-card-icon">{v.icon}</div>
                <h3 className="ip-card-title">{v.title}</h3>
                <p className="ip-card-text">{v.text}</p>
              </div>
            ))}
          </div>

          <div className="ip-stats">
            {stats.map((s) => (
              <div key={s.label} className="ip-stat">
                <div className="ip-stat-num">{s.num}</div>
                <div className="ip-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — shared site-wide */}
      <FinalCta />
    </main>
  );
};

export default Page;
