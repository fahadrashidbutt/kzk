import Link from "next/link";
import "../assets/css/inner-pages.css";

export const metadata = {
  title: "Page not found",
  description: "The page you're looking for has moved or never existed.",
};

export default function NotFound() {
  return (
    <main className="ip-page">
      <section className="ip-hero">
        <div className="ip-hero-bg">
          <div className="ip-orb ip-orb-1" />
          <div className="ip-orb ip-orb-2" />
          <div className="ip-orb ip-orb-3" />
          <div className="ip-hero-grid" />
        </div>
        <div className="ip-hero-content">
          <span className="ip-badge">404</span>
          <h1 className="ip-title">
            This page <span className="ip-grad">drifted into orbit</span>
          </h1>
          <p className="ip-subtitle">
            The page you're looking for has moved or never existed. Try one
            of the links below — or get in touch and we'll point you the
            right way.
          </p>
          <div className="ip-hero-actions">
            <Link href="/" className="ip-btn-primary">
              Back to Home
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact-us" className="ip-btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
