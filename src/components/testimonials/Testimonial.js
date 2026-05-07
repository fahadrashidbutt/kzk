"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./testimonial.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    title: "Saved Our Business",
    text:
      "Lost my customers because of the non-friendly website. Luckily, KZK LLC saved me from future losses and strengthened my business's backbone with its services. Will never leave them and continue to thrive in the online market with them.",
    name: "Sarah Mitchell",
    date: "1 week ago",
  },
  {
    title: "Doubled My Sales",
    text:
      "Most of the audience that comes to my website is irrelevant and generates no money for me. All this fuss made me scroll through the agency market, and I came across KZK LLC. They do magic and double my sales in weeks.",
    name: "David Chen",
    date: "2 weeks ago",
  },
  {
    title: "Top-Class SEO",
    text:
      "The KZK team amp my website ranking with top-class SEO and ad marketing. They just nail it with their performance. I would continue to move with them to generate more revenue for my business!",
    name: "Jason Martin",
    date: "1 month ago",
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Stars = ({ count = 5 }) => (
  <span className="kzk-tt-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="kzk-tt-star">
        <StarIcon />
      </span>
    ))}
  </span>
);

const Testimonial = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!section || !track || !wrap) return;

    // Header reveal animations (managed by gsap.context for cleanup)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".kzk-tt-eyebrow",
        { y: -16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 88%" },
        }
      );
      gsap.fromTo(
        ".kzk-tt-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".kzk-tt-subtitle",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".kzk-tt-hint",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      );
    }, section);

    // Marquee + drag state
    let totalWidth = track.scrollWidth / 2;
    let offset = 0;
    let isDragging = false;
    let isHovering = false;
    let dragStartX = 0;
    let dragStartOffset = 0;
    const speedPxPerSec = 45;

    const wrap_ = (x) => {
      while (x > 0) x -= totalWidth;
      while (x <= -totalWidth) x += totalWidth;
      return x;
    };

    const tick = (time, deltaTime) => {
      if (!isDragging && !isHovering) {
        offset -= speedPxPerSec * (deltaTime / 1000);
      }
      offset = wrap_(offset);
      gsap.set(track, { x: offset });
    };

    gsap.ticker.add(tick);

    // Recompute width on resize
    const onResize = () => {
      totalWidth = track.scrollWidth / 2;
    };
    window.addEventListener("resize", onResize);

    // Hover pause (mouse only — touch doesn't fire mouseenter)
    const onMouseEnter = () => {
      isHovering = true;
    };
    const onMouseLeave = () => {
      isHovering = false;
    };
    wrap.addEventListener("mouseenter", onMouseEnter);
    wrap.addEventListener("mouseleave", onMouseLeave);

    // Drag (pointer events — works for mouse, touch, pen)
    const onPointerDown = (e) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartOffset = offset;
      wrap.classList.add("is-dragging");
      try {
        wrap.setPointerCapture(e.pointerId);
      } catch (_) {
        // Some browsers may reject; safe to ignore
      }
    };
    const onPointerMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      offset = dragStartOffset + dx;
    };
    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      wrap.classList.remove("is-dragging");
      try {
        wrap.releasePointerCapture(e.pointerId);
      } catch (_) {
        // ignore
      }
    };
    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerup", onPointerUp);
    wrap.addEventListener("pointercancel", onPointerUp);

    return () => {
      try { gsap.ticker.remove(tick); } catch {}
      try { window.removeEventListener("resize", onResize); } catch {}
      try { wrap.removeEventListener("mouseenter", onMouseEnter); } catch {}
      try { wrap.removeEventListener("mouseleave", onMouseLeave); } catch {}
      try { wrap.removeEventListener("pointerdown", onPointerDown); } catch {}
      try { wrap.removeEventListener("pointermove", onPointerMove); } catch {}
      try { wrap.removeEventListener("pointerup", onPointerUp); } catch {}
      try { wrap.removeEventListener("pointercancel", onPointerUp); } catch {}
      try {
        ctx.revert();
      } catch {
        // Cleanup can race React's unmount on navigation — benign.
      }
    };
  }, []);

  // Render one full set of cards (summary + 3 reviews) with set-prefixed keys
  const renderSet = (setId) => (
    <>
      <div key={`s-${setId}`} className="kzk-tt-card kzk-tt-summary">
        <div className="kzk-tt-summary-label">Excellent</div>
        <Stars count={5} />
        <div className="kzk-tt-summary-meta">
          Based on <strong>200+ reviews</strong>
        </div>
        <div className="kzk-tt-summary-brand">
          <span className="kzk-tt-summary-brand-icon">
            <StarIcon />
          </span>
          KZK Trusted Agency
        </div>
      </div>
      {testimonials.map((t, i) => (
        <div key={`${setId}-${i}`} className="kzk-tt-card">
          <div className="kzk-tt-card-head">
            <Stars count={5} />
            <span className="kzk-tt-date">{t.date}</span>
          </div>
          <h3 className="kzk-tt-card-title">{t.title}</h3>
          <p className="kzk-tt-card-text">{t.text}</p>
          <div className="kzk-tt-card-name">{t.name}</div>
        </div>
      ))}
    </>
  );

  return (
    <section className="kzk-tt-section" ref={sectionRef}>
      <div className="kzk-tt-bg-deco" aria-hidden="true" />

      <div className="kzk-tt-container">
        <div className="kzk-tt-head">
          <span className="kzk-tt-eyebrow">
            <span className="kzk-tt-eyebrow-line" />
            Testimonials
            <span className="kzk-tt-eyebrow-line" />
          </span>
          <h2 className="kzk-tt-title">What customers say about us</h2>
          <p className="kzk-tt-subtitle">
            We do our best to provide you the best experience ever
          </p>
        </div>
      </div>

      <div className="kzk-tt-marquee-outer">
        <div className="kzk-tt-marquee" ref={wrapRef}>
          <div className="kzk-tt-marquee-track" ref={trackRef}>
            {renderSet("a")}
            {renderSet("b")}
          </div>
        </div>
      </div>

      {/* <div className="kzk-tt-container">
        <div className="kzk-tt-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Drag to explore reviews
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default Testimonial;
