"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import growBusiness from "../../assets/images/vec/about-us.jpg";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "End-to-End",
    text: "Strategy, design, engineering, growth — all under one roof.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Performance First",
    text: "Sub-second loads, top Core Web Vitals, accessible by default.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Senior-Only",
    text: "No juniors learning on your project. Just craft, every time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Long-Term",
    text: "We don't disappear after launch. We stay for the journey.",
  },
];

const FOUNDED_YEAR = 2013;
const yearsOfCraft = new Date().getFullYear() - FOUNDED_YEAR;

const stats = [
  { num: yearsOfCraft, suffix: "+", label: "Years of Craft", pos: "tl" },
  { num: 150, suffix: "+", label: "Projects Shipped", pos: "tr" },
  { num: 98, suffix: "%", label: "Client Retention", pos: "br" },
];

const AboutUnique = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Eyebrow
      gsap.fromTo(
        ".about-uniq-eyebrow",
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-uniq-eyebrow", start: "top 92%" },
        }
      );

      // Heading lines stagger
      gsap.fromTo(
        ".about-uniq-heading > span",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: ".about-uniq-heading", start: "top 85%" },
        }
      );

      // Image scale-fade
      gsap.fromTo(
        ".about-uniq-image",
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-uniq-hero", start: "top 80%" },
        }
      );

      // Image parallax inside frame
      gsap.to(".about-uniq-image-inner", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-uniq-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Stat badges float in with stagger from different directions
      gsap.fromTo(
        ".about-uniq-badge",
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.3,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".about-uniq-hero", start: "top 80%" },
        }
      );

      // Floating "available" tag
      gsap.fromTo(
        ".about-uniq-floating-tag",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-uniq-hero", start: "top 80%" },
        }
      );

      // Animated number counters — query the DOM directly so we don't depend
      // on the ref-callback array (which can carry stale entries across React's
      // dev double-mount) and use closure for the tween target.
      section.querySelectorAll(".about-uniq-badge [data-target]").forEach((node) => {
        const target = parseInt(node.getAttribute("data-target"), 10);
        if (Number.isNaN(target)) return;
        const counter = { val: 0 };
        ScrollTrigger.create({
          trigger: node,
          start: "top 95%",
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              val: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                node.textContent = String(Math.floor(counter.val));
              },
              onComplete: () => {
                node.textContent = String(target);
              },
            });
          },
        });
      });

      // Story section — sticky title fade, paragraphs stagger
      gsap.fromTo(
        ".about-uniq-story-eyebrow, .about-uniq-story-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-uniq-story", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".about-uniq-story-p",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-uniq-story", start: "top 80%" },
        }
      );

      // DNA eyebrow
      gsap.fromTo(
        ".about-uniq-dna-eyebrow",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-uniq-dna", start: "top 85%" },
        }
      );

      // Capability cards stagger up
      gsap.fromTo(
        ".about-uniq-cap",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-uniq-caps", start: "top 88%" },
        }
      );
    }, section);

    return () => {
      try {
        ctx.revert();
      } catch {
        // ScrollTrigger DOM cleanup can race React's unmount on navigation;
        // the error is benign and the tree is being torn down anyway.
      }
    };
  }, []);

  return (
    <section className="about-uniq" ref={sectionRef}>
      <div className="about-uniq-bg-deco" aria-hidden="true" />
      <div className="about-uniq-bg-grid" aria-hidden="true" />
      <span className="about-uniq-watermark" aria-hidden="true">EST. 2013</span>

      <div className="about-uniq-container">
        {/* Header */}
        <div className="about-uniq-head">
          <span className="about-uniq-eyebrow">
            <span className="about-uniq-eyebrow-line" />
            About KZK
            <span className="about-uniq-eyebrow-line" />
          </span>
          <h2 className="about-uniq-heading">
            <span>We don&apos;t just</span>
            <span>build websites.</span>
            <span className="about-uniq-grad">We build legacies.</span>
          </h2>
        </div>

        {/* Hero image with floating stat badges */}
        <div className="about-uniq-hero">
          <div className="about-uniq-image">
            <div className="about-uniq-image-inner">
              <Image
                src={growBusiness}
                alt="The KZK team at work"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="about-uniq-image-glow" />
          </div>

          {/* Floating stat badges */}
          {stats.map((s) => (
            <div
              key={s.label}
              className={`about-uniq-badge about-uniq-badge-${s.pos}`}
            >
              <div className="about-uniq-badge-num">
                <span data-target={s.num}>0</span>
                <span className="about-uniq-badge-suffix">{s.suffix}</span>
              </div>
              <div className="about-uniq-badge-label">{s.label}</div>
            </div>
          ))}

          {/* Available tag */}
          <div className="about-uniq-floating-tag">
            <span className="about-uniq-floating-dot" />
            Available for new projects
          </div>
        </div>

        {/* Our Story — magazine-style 2-column with drop cap */}
        <div className="about-uniq-story">
          <div className="about-uniq-story-head">
            <span className="about-uniq-story-eyebrow">— Our Story —</span>
            <h3 className="about-uniq-story-title">
              Built around outcomes,<br />
              not deliverables.
            </h3>
          </div>
          <div className="about-uniq-story-body">
            <p className="about-uniq-story-p about-uniq-story-p-first">
              We&apos;re a tight, senior team of designers, engineers, and
              strategists who treat your goals like our own. From the first
              sketch to ongoing care after launch — we stay close, ship fast,
              and obsess over the outcome.
            </p>
            <p className="about-uniq-story-p">
              Online marketing is a multiplier on real product quality. We
              build both — the foundation and the audience that finds it.
              That&apos;s why our partnerships compound year over year.
            </p>
          </div>
        </div>

        {/* Our DNA — capability cards */}
        <div className="about-uniq-dna">
          <span className="about-uniq-dna-eyebrow">— Our DNA —</span>
          <div className="about-uniq-caps">
            {capabilities.map((c, i) => (
              <div key={c.title} className="about-uniq-cap">
                <span className="about-uniq-cap-num">0{i + 1}</span>
                <div className="about-uniq-cap-icon">{c.icon}</div>
                <h4 className="about-uniq-cap-title">{c.title}</h4>
                <p className="about-uniq-cap-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUnique;
