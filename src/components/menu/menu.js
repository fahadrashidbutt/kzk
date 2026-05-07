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
  { path: "/google-my-business", label: "Google My Business" },
  { path: "/contact-us", label: "Contact" },
];

const servicesLinks = [
  { path: "/services/web-development", label: "Web Development" },
  { path: "/services/app-development", label: "App Development" },
  { path: "/services/seo", label: "SEO" },
  { path: "/services/digital-marketing", label: "Digital Marketing" },
  { path: "/services/designing", label: "Designing" },
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
          <Image src={LogoKZK} alt="KZK Services" width={56} height={56} priority />
          <span className="kzk-nav-logo-text">
            KZK<span className="kzk-nav-logo-x">×</span>SERVICES
          </span>
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
            <div className="kzk-nav-dd-panel" role="menu">
              {servicesLinks.map((s) => (
                <Link
                  key={s.path}
                  href={s.path}
                  className="kzk-nav-dd-link"
                  role="menuitem"
                >
                  {s.label}
                </Link>
              ))}
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
          <Link href="/contact-us" className="kzk-nav-pay">
            Pay Now
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
      <div className={`kzk-nav-mobile ${mobileOpen ? "is-open" : ""}`}>
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
          <Link href="/contact-us" className="kzk-nav-mobile-pay">
            Pay Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
