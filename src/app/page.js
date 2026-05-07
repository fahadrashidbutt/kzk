"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/homepage.css";
import "../assets/css/about-section.css";
import Testimonial from "../components/testimonials/Testimonial";
import AboutUnique from "../components/about-unique/AboutUnique";
import { portfolios } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "SEO",
    path: "/services/seo",
    desc: "Higher rankings, more qualified traffic, and content that actually converts visitors into customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    path: "/services/web-development",
    desc: "Modern, blazing-fast websites and web apps engineered for speed, SEO and conversion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "App Development",
    path: "/services/app-development",
    desc: "Native-feeling iOS and Android apps users love and stores feature on their front pages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    path: "/services/digital-marketing",
    desc: "Performance-driven paid, social and email programs that move pipeline and lift ROAS.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
  },
  {
    title: "Designing",
    path: "/services/designing",
    desc: "Brand identity, UI/UX and product design that looks beautiful and earns its place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Google My Business",
    path: "/google-my-business",
    desc: "Local pack rankings, review velocity, and Maps visibility done the right way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const features = [
  {
    icon: "✦",
    title: "Best Quality Designs",
    text: "We craft high-conversion websites that capture attention. Every header, footer and pixel is debated and designed by the team before it ships.",
  },
  {
    icon: "◷",
    title: "24×7 Live Support",
    text: "The KZK customer-care team is on standby around the clock, resolving customer issues within minutes — not days.",
  },
  {
    icon: "◎",
    title: "Result Oriented Projects",
    text: "We guarantee that cold leads convert into paying customers. There’s no zero-result outcome on our watch — only growth.",
  },
  {
    icon: "★",
    title: "Award Winning Support",
    text: "Our support team is the reason clients stay. They never go offline — they’re always there for the business owners we partner with.",
  },
  {
    icon: "▲",
    title: "Best ROI Techniques",
    text: "A dedicated team focuses purely on the technical levers that turn your investment into measurable, repeatable returns.",
  },
  {
    icon: "◆",
    title: "Experienced Professionals",
    text: "Every team member is certified and senior. No fluff, no spammy shortcuts — just craft that protects your brand long-term.",
  },
];

// Show 4 portfolios on homepage: 1 featured + 3 supporting
const projects = portfolios.slice(0, 4);

const heroStats = [
  { num: "150+", label: "Projects Delivered" },
  { num: "4.9★", label: "Average Rating" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "12+", label: "Years Experience" },
  { num: "50+", label: "Experts on Team" },
];

const processSteps = [
  {
    num: "01",
    title: "Strategy",
    text: "Define goals, audience, and direction through research and alignment.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Design",
    text: "Craft purposeful visuals and intuitive experiences.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="13" height="13" rx="2" />
        <rect x="8" y="8" width="13" height="13" rx="2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    text: "Transform designs into scalable, high-quality builds.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Launch & Optimize",
    text: "Launch, measure performance, and continuously improve through data-driven optimization.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const numbersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(
          ".kzk-hero-pill",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".kzk-hero-title",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power4.out" },
          "-=0.3"
        )
        .fromTo(
          ".kzk-hero-text",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".kzk-hero-actions > *",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".kzk-hero-stats > *",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" },
          "-=0.3"
        );

      // Reveal-on-scroll for headings, generic blocks
      const reveals = gsap.utils.toArray(".kzk-reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

      // Stagger reveal for services grid
      const serviceCards = gsap.utils.toArray(".kzk-service-card");
      if (serviceCards.length) {
        gsap.set(serviceCards, { y: 70, opacity: 0 });
        gsap.to(serviceCards, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".kzk-services-grid", start: "top 82%" },
        });
      }

      // Stagger reveal for process cards
      const processCards = gsap.utils.toArray(".kzk-process-card");
      if (processCards.length) {
        gsap.set(processCards, { y: 70, opacity: 0, scale: 0.96 });
        gsap.to(processCards, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".kzk-process-grid", start: "top 82%" },
        });
      }

      // Stagger reveal for "why choose us" feature cards
      const featureCards = gsap.utils.toArray(".kzk-feature");
      if (featureCards.length) {
        gsap.set(featureCards, { y: 60, opacity: 0 });
        gsap.to(featureCards, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".kzk-features", start: "top 82%" },
        });
      }

      // Featured hero card entrance
      const featCard = document.querySelector(".kzk-feat-card");
      if (featCard) {
        gsap.fromTo(
          featCard,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: featCard, start: "top 85%" },
          }
        );
      }

      // Stagger reveal for supporting project cards
      const projCards = gsap.utils.toArray(".kzk-proj-card");
      if (projCards.length) {
        gsap.set(projCards, { y: 60, opacity: 0 });
        gsap.to(projCards, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".kzk-proj-grid", start: "top 82%" },
        });
      }

      // Subtle parallax on case-study images
      gsap.utils
        .toArray(".kzk-feat-image img, .kzk-proj-image img")
        .forEach((img) => {
          gsap.fromTo(
            img,
            { y: -20 },
            {
              y: 20,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            }
          );
        });

      // Animated counters
      numbersRef.current.forEach((node) => {
        if (!node) return;
        const target = parseInt(node.getAttribute("data-target"), 10);
        ScrollTrigger.create({
          trigger: node,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(
              { val: 0 },
              {
                val: target,
                duration: 2.2,
                snap: { val: 1 },
                ease: "power2.out",
                onUpdate: function () {
                  node.innerText = Math.floor(this.targets()[0].val);
                },
              }
            );
          },
        });
      });
    });

    return () => {
      try {
        ctx.revert();
      } catch {
        // GSAP/ScrollTrigger can race React's unmount on navigation;
        // any DOM-cleanup error here is benign because the tree is about
        // to be removed anyway. Swallow to avoid a fatal runtime overlay.
      }
    };
  }, []);

  const addNum = (el) => {
    if (el && !numbersRef.current.includes(el)) numbersRef.current.push(el);
  };

  return (
    <main className="kzk-home">
      {/* HERO — centered single-column layout */}
      <section className="kzk-hero" ref={heroRef}>
        <div className="kzk-hero-grid-bg" />
        <div className="kzk-hero-glow kzk-hero-glow-1" />
        <div className="kzk-hero-glow kzk-hero-glow-2" />

        <div className="kzk-container kzk-hero-inner">
          <span className="kzk-hero-pill">
            <span className="kzk-hero-pill-tag">NEW</span>
            Now Booking Projects for 2026
          </span>

          <h1 className="kzk-hero-title">
            Unlock your brand’s <br />
            <span className="kzk-grad">online potential.</span>
          </h1>

          <p className="kzk-hero-text">
            KZK Services is your premier digital agency. We blend SEO, web
            development, design and growth strategy into one team that helps
            you outrank, outperform and outlast your competition.
          </p>

          <div className="kzk-hero-actions">
            <Link href="/contact-us" className="kzk-btn-primary kzk-btn-hero">
              Start a Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="kzk-hero-stats">
            {heroStats.map((s) => (
              <div key={s.label} className="kzk-hero-stat">
                <div className="kzk-hero-stat-num">{s.num}</div>
                <div className="kzk-hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT — unique animated section */}
      <AboutUnique />

      {/* SERVICES — featured card grid */}
      <section className="kzk-section kzk-section-soft" id="services">
        <div className="kzk-container">
          <div className="kzk-section-head kzk-reveal">
            <span className="kzk-services-eyebrow">Services</span>
            <h2 className="kzk-section-title">
              What Services We Provide
            </h2>
          </div>

          <div className="kzk-services-grid">
            {services.map((s, i) => (
              <Link
                href={s.path}
                key={s.title}
                className={`kzk-service-card${i === 1 ? " is-featured" : ""}`}
              >
                <div className="kzk-service-card-icon">{s.icon}</div>
                <h3 className="kzk-service-card-title">{s.title}</h3>
                <p className="kzk-service-card-text">{s.desc}</p>
                {i === 1 && (
                  <span className="kzk-service-card-more">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="kzk-section">
        <div className="kzk-container">
          <div className="kzk-section-head kzk-reveal">
            <span className="kzk-eyebrow-bracket">[ Our Process ]</span>
            <h2 className="kzk-section-title">
              A Thoughtful, Strategy-Driven Process
            </h2>
            <p className="kzk-section-text">
              A simple process. Powerful results.
            </p>
          </div>

          <div className="kzk-process-grid">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className={`kzk-process-card${i === 0 ? " is-active" : ""}`}
              >
                <span className="kzk-process-step">Step {step.num}</span>
                <div className="kzk-process-foot">
                  <div className="kzk-process-icon">{step.icon}</div>
                  <h3 className="kzk-process-title">{step.title}</h3>
                  <p className="kzk-process-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="kzk-section">
        <div className="kzk-container">
          <div className="kzk-section-head kzk-reveal">
            <span className="kzk-eyebrow">Why Choose Us</span>
            <h2 className="kzk-section-title">
              Your trusted partner in{" "}
              <span className="kzk-grad">online growth</span>
            </h2>
            <p className="kzk-section-text">
              The KZK team isn’t just talk — here’s why ambitious brands trust
              us with their growth, year after year.
            </p>
          </div>

          <div className="kzk-features">
            {features.map((f) => (
              <div key={f.title} className="kzk-feature">
                <div className="kzk-feature-icon">{f.icon}</div>
                <h3 className="kzk-feature-title">{f.title}</h3>
                <p className="kzk-feature-text">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="kzk-stats kzk-reveal">
            <div className="kzk-stat">
              <div className="kzk-stat-num">
                <span ref={addNum} data-target="28">0</span>+
              </div>
              <div className="kzk-stat-label">Accolades Earned</div>
            </div>
            <div className="kzk-stat">
              <div className="kzk-stat-num">
                <span ref={addNum} data-target="56">0</span>K+
              </div>
              <div className="kzk-stat-label">Lines of Code</div>
            </div>
            <div className="kzk-stat">
              <div className="kzk-stat-num">
                <span ref={addNum} data-target="50">0</span>+
              </div>
              <div className="kzk-stat-label">Expert Advisors</div>
            </div>
            <div className="kzk-stat">
              <div className="kzk-stat-num">
                <span ref={addNum} data-target="150">0</span>+
              </div>
              <div className="kzk-stat-label">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES — hero card + supporting grid */}
      <section className="kzk-section kzk-section-soft">
        <div className="kzk-container">
          <div className="kzk-section-head kzk-reveal">
            <span className="kzk-eyebrow">Recent Work</span>
            <h2 className="kzk-section-title">
              Featured <span className="kzk-grad">Case Studies</span>
            </h2>
            <p className="kzk-section-text">
              A taste of the brands we’ve helped grow online — from local
              transport to lifestyle, hospitality and beyond.
            </p>
          </div>

          {/* Featured hero card */}
          <Link href={`/portfolio/${projects[0].slug}`} className="kzk-feat-card">
            <div className="kzk-feat-image">
              <Image src={projects[0].image} alt={projects[0].title} fill style={{ objectFit: "cover" }} />
              <div className="kzk-feat-image-overlay" />
            </div>
            <div className="kzk-feat-content">
              <span className="kzk-feat-tag">
                <span className="kzk-feat-tag-dot" />
                Featured Case Study
              </span>
              <h3 className="kzk-feat-title">{projects[0].title}</h3>
              <p className="kzk-feat-desc">{projects[0].about}</p>
              {projects[0].metrics && projects[0].metrics.length > 0 && (
                <div className="kzk-feat-metrics">
                  {projects[0].metrics.map((m) => (
                    <div key={m.label} className="kzk-feat-metric">
                      <div className="kzk-feat-metric-num">{m.num}</div>
                      <div className="kzk-feat-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="kzk-feat-tags">
                {projects[0].tags.map((t) => (
                  <span key={t} className="kzk-feat-pill">{t}</span>
                ))}
              </div>
              <span className="kzk-feat-cta">
                Read the case study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Supporting cards grid */}
          <div className="kzk-proj-grid">
            {projects.slice(1).map((p) => (
              <Link href={`/portfolio/${p.slug}`} key={p.title} className="kzk-proj-card">
                <div className="kzk-proj-image">
                  <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                  <div className="kzk-proj-image-overlay" />
                  <span className="kzk-proj-arrow" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </div>
                <div className="kzk-proj-info">
                  <span className="kzk-proj-cat">{p.category}</span>
                  <h3 className="kzk-proj-title">{p.title}</h3>
                  <div className="kzk-proj-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="kzk-proj-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="kzk-cta-row kzk-reveal">
            <Link href="/portfolio" className="kzk-btn-pill kzk-btn-pill-light">
              View All Portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* BIG CTA — bordered card with lined eyebrow */}
      <section className="kzk-section">
        <div className="kzk-container">
          <div className="kzk-final-cta-outer kzk-reveal">
            <div className="kzk-final-cta">
              <span className="kzk-cta-eyebrow">
                <span className="kzk-cta-eyebrow-line" />
                Available For New Project
                <span className="kzk-cta-eyebrow-line" />
              </span>
              <h2 className="kzk-final-cta-title">
                Interested in Working <br />
                with KZK Services?
              </h2>
              <p className="kzk-final-cta-text">
                Tell us about your goals — we’ll come back with a roadmap, a
                timeline and a fixed quote within one business day.
              </p>
              <Link href="/contact-us" className="kzk-final-cta-btn">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
