"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoKZK from "../../assets/images/logo/logo.webp";
import "./menu.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact-us", label: "Contact" },
];

const servicesLinks = [
  {
    path: "/services/web-development",
    label: "Web Development",
    desc: "Blazing-fast sites engineered for SEO and conversion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    path: "/services/app-development",
    label: "App Development",
    desc: "Native-feeling iOS and Android apps users love.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    path: "/services/seo",
    label: "SEO",
    desc: "Higher rankings, more qualified traffic, real revenue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    path: "/services/digital-marketing",
    label: "Digital Marketing",
    desc: "Paid, social and email programs that move pipeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
  },
  {
    path: "/services/designing",
    label: "Designing",
    desc: "Brand, UI/UX and product design that earns its place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    path: "/services/content-marketing",
    label: "Content Marketing",
    desc: "Articles and assets that compound traffic month over month.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    path: "/services/google-adwords",
    label: "Google AdWords",
    desc: "Performance-driven paid search that lifts ROAS.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    path: "/google-my-business",
    label: "Google My Business",
    desc: "Local-pack rankings, reviews and Maps visibility done right.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const Menu = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClickAway = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    if (servicesOpen) document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [servicesOpen]);

  const isActive = (p) =>
    p === "/" ? pathname === "/" : pathname.startsWith(p);
  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className={`kzk-nav ${scrolled ? "kzk-nav-scrolled" : ""}`}>
      <div className="kzk-nav-inner">
        <Link href="/" className="kzk-nav-logo" aria-label="KZK Services home">
          <Image src={LogoKZK} alt="KZK Services" width={72} height={72} priority />
        </Link>

        <nav className="kzk-nav-links" aria-label="Main">
          {navLinks.slice(0, 1).map((l) => (
            <Link
              key={l.path}
              href={l.path}
              className={`kzk-nav-link ${isActive(l.path) ? "is-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}

          <div
            className={`kzk-nav-dd ${servicesOpen ? "is-open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`kzk-nav-link kzk-nav-dd-trigger ${
                isServicesActive ? "is-active" : ""
              }`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg width="10" height="10" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="kzk-nav-mega" role="menu">
              <div className="kzk-nav-mega-header">
                <span className="kzk-nav-mega-eyebrow">All Services</span>
                <span className="kzk-nav-mega-tag">8 ways we help you grow</span>
              </div>
              <div className="kzk-nav-mega-grid">
                {servicesLinks.map((s) => (
                  <Link
                    key={s.path}
                    href={s.path}
                    className="kzk-nav-mega-item"
                    role="menuitem"
                  >
                    <span className="kzk-nav-mega-icon" aria-hidden="true">
                      {s.icon}
                    </span>
                    <span className="kzk-nav-mega-body">
                      <span className="kzk-nav-mega-label">{s.label}</span>
                      <span className="kzk-nav-mega-desc">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.path}
              href={l.path}
              className={`kzk-nav-link ${isActive(l.path) ? "is-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="kzk-nav-cta">
          <Link href="/pay-now" className="kzk-nav-pay">
            Pay Now
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <button
            type="button"
            className={`kzk-nav-burger ${mobileOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`kzk-nav-mobile ${mobileOpen ? "is-open" : ""}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav className="kzk-nav-mobile-list" aria-label="Mobile">
          {navLinks.slice(0, 1).map((l) => (
            <Link key={l.path} href={l.path} className="kzk-nav-mobile-link">
              {l.label}
            </Link>
          ))}
          <div className="kzk-nav-mobile-group">
            <div className="kzk-nav-mobile-grouptitle">Services</div>
            {servicesLinks.map((s) => (
              <Link key={s.path} href={s.path} className="kzk-nav-mobile-sublink">
                {s.label}
              </Link>
            ))}
          </div>
          {navLinks.slice(1).map((l) => (
            <Link key={l.path} href={l.path} className="kzk-nav-mobile-link">
              {l.label}
            </Link>
          ))}
          <Link href="/pay-now" className="kzk-nav-mobile-pay">
            Pay Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
