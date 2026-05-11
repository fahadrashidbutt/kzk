"use client";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "../../assets/css/portfolio.css";
import { portfolios } from "../../data/portfolio";
import FinalCta from "../../components/final-cta/FinalCta";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const heroRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const projectsRef = useRef([]);

  // Use the real portfolios with the slug as the key
  const projects = portfolios;

  // useLayoutEffect — its cleanup runs synchronously during React's unmount
  // commit phase BEFORE the DOM is torn down. This is the only timing that
  // guarantees GSAP releases every node it's pinning/animating before React
  // tries to remove those nodes (which is what produces the
  // "removeChild: not a child of this node" runtime error on navigation).
  useLayoutEffect(() => {
    // Floating particles. Tracked in an array so cleanup can drop our
    // imperatively-created nodes BEFORE React removes their container,
    // avoiding the "removeChild not a child of this node" race on navigation.
    const particleContainer = document.querySelector(".hero-particles");
    const ownedParticles = [];
    if (particleContainer) {
      // Reduced from 80 → 36 — the GPU cost of 80 animated nodes is the
      // single biggest source of frame drops on the page.
      for (let i = 0; i < 36; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 10 + "s";
        particle.style.animationDuration = 6 + Math.random() * 4 + "s";
        particle.style.width = Math.random() * 3 + 1 + "px";
        particle.style.height = particle.style.width;
        particleContainer.appendChild(particle);
        ownedParticles.push(particle);
      }
    }

    // Window-level parallax. Throttled to one tween per animation frame so
    // it can never compete with the horizontal-scroll scrub.
    let pendingMouse = null;
    let rafId = 0;
    const applyParallax = () => {
      rafId = 0;
      if (!pendingMouse) return;
      const { x, y } = pendingMouse;
      gsap.to(".floating-orb-1", { x: x * 0.4, y: y * 0.4, duration: 1, ease: "power2.out", overwrite: "auto" });
      gsap.to(".floating-orb-2", { x: x * -0.3, y: y * -0.3, duration: 1, ease: "power2.out", overwrite: "auto" });
      gsap.to(".floating-orb-3", { x: x * 0.2, y: y * 0.6, duration: 1, ease: "power2.out", overwrite: "auto" });
    };
    const handleMouseMove = (e) => {
      pendingMouse = {
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      };
      if (!rafId) rafId = requestAnimationFrame(applyParallax);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // (Previously: per-card 3D tilt with mousemove + GSAP rotate tweens.
    // Removed — its tweens competed with the horizontal-scroll scrub on
    // every mouse move, which is what caused the slide-change jerk. The
    // hover-zoom on the image still provides interactive feedback.)

    // All GSAP / ScrollTrigger animations are scoped to a context so ctx.revert()
    // safely tears down pin-spacers and triggers without racing React unmounts.
    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(".hero-glow-bg",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
        )
        .fromTo(".hero-line-left",
          { width: 0 },
          { width: "100px", duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".hero-line-right",
          { width: 0 },
          { width: "100px", duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(".text-char",
          { y: 150, opacity: 0, rotationX: -90, filter: "blur(15px)" },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.02,
            ease: "back.out(1.2)",
          },
          "-=0.3"
        )
        .fromTo(".hero-description",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(".hero-buttons",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.2)" },
          "-=0.3"
        )
        .fromTo(".hero-scroll-indicator",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.2"
        );

      // Floating orbs idle animation
      gsap.to(".floating-orb-1", { y: 80, x: 40, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".floating-orb-2", { y: -60, x: -50, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".floating-orb-3", { y: 50, x: -30, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut" });

      // Hero scroll-fade — `gsap.set` (NOT gsap.to with duration:0) so we
      // don't create a fresh tween on every scroll frame. Tween-per-frame was
      // saturating GSAP's queue and causing visible jank.
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          const heroContent = document.querySelector(".hero-content-center");
          const heroTitle = document.querySelector(".hero-title-large");
          if (heroContent) {
            gsap.set(heroContent, { y: -100 * p, opacity: 1 - p * 0.7 });
          }
          if (heroTitle) {
            gsap.set(heroTitle, { scale: 1 - p * 0.2 });
          }
        },
      });

      // Horizontal scroll. No snap — the track follows the user's scroll
      // exactly and stops wherever they release. `scrub: 0.6` adds a hair
      // of inertial smoothing so mouse-wheel detents (~120px discrete
      // chunks) get interpolated into continuous motion instead of
      // stepping. `pinType: "transform"` keeps everything on the GPU
      // compositor and avoids pin-spacer DOM mutation.
      const horizontalSection = horizontalSectionRef.current;
      if (horizontalSection) {
        const sections = gsap.utils.toArray(".project-showcase");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalSection,
            start: "top top",
            end: () => "+=" + (sections.length - 1) * window.innerWidth,
            scrub: 0.6,
            pin: true,
            pinType: "transform",
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      // Featured projects cards entrance
      projectsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 120, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Featured section header
      gsap.fromTo(".featured-header",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".featured-section", start: "top 80%" },
        }
      );

      // CTA wrapper
      gsap.fromTo(".cta-wrapper",
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: ".cta-section", start: "top 85%" },
        }
      );
    });

    return () => {
      // 1. Stop any pending mousemove RAF so it can't fire after unmount.
      if (rafId) {
        try { cancelAnimationFrame(rafId); } catch {}
      }
      pendingMouse = null;

      // 2. Detach the window listener BEFORE we revert anything so a late
      //    mousemove can't trigger gsap.to on disappearing elements.
      try { window.removeEventListener("mousemove", handleMouseMove); } catch {}

      // 3. Revert the gsap.context FIRST. Inside useLayoutEffect cleanup
      //    this runs synchronously during React's commit phase, before the
      //    DOM is torn down — so ctx.revert() can safely undo pin spacers,
      //    transforms, and ScrollTrigger DOM attachments while every node
      //    is still in the React-controlled tree.
      try { ctx.revert(); } catch {}

      // 4. Drop the particles we appended imperatively, also while the
      //    container is still mounted. If left behind, React's reconciler
      //    sees DOM-foreign children when it tears down the parent and
      //    can throw the "removeChild not a child" runtime error.
      ownedParticles.forEach((p) => {
        try { p.remove(); } catch {}
      });
    };
  }, []);

  const addToProjectsRef = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-particles"></div>
        
        <div className="floating-orbs">
          <div className="floating-orb floating-orb-1"></div>
          <div className="floating-orb floating-orb-2"></div>
          <div className="floating-orb floating-orb-3"></div>
        </div>
        
        <div className="hero-glow-bg"></div>
        
        <div className="hero-container">
          <div className="hero-content-center">
            <div className="hero-title-wrapper">
              <div className="hero-line-left"></div>
              <span className="hero-subtitle">CREATIVE STUDIO</span>
              <div className="hero-line-right"></div>
            </div>
            
            <h1 className="hero-title-large split-text">
              {"Digital Craftsmanship".split("").map((c, i) =>
                c === " " ? (
                  <span key={i} className="space-char">{" "}</span>
                ) : (
                  <span
                    key={i}
                    className="text-char"
                    style={{ animationDelay: `${i * 0.03}s` }}
                  >
                    {c}
                  </span>
                )
              )}
            </h1>
            
            <p className="hero-description">
              We create immersive digital experiences that push boundaries,<br />
              inspire action, and transform businesses into industry leaders.
            </p>
            
            <div className="hero-buttons">
              <a href="#featured-work" className="hero-btn-primary">
                Explore Our Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <Link href="/contact-us" className="hero-btn-secondary">
                Let&apos;s Collaborate
              </Link>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to discover</span>
        </div>
      </section>

      {/* Horizontal Scroll Section with 3D Effects */}
      <section className="horizontal-section" ref={horizontalSectionRef}>
        <div className="horizontal-container">
          <div className="horizontal-sticky">
            <div className="horizontal-wrapper">
              {projects.map((project, index) => (
                <div key={project.slug} className="project-showcase">
                  <div className="project-showcase-inner">
                    <div className="project-number">0{index + 1}</div>
                    <div className="project-content">
                      <div className="project-info-left">
                        <span className="project-category">
                          {project.category}
                        </span>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.about}</p>
                        <div className="project-tags">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="project-tag">{tag}</span>
                          ))}
                        </div>
                        <Link href={`/portfolio/${project.slug}`} className="project-link-btn">
                          View Case Study
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </div>
                      <div className="project-image-right">
                        <Link href={`/portfolio/${project.slug}`} className="project-image-wrapper">
                          <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} priority={index === 0} />
                          <div className="project-image-glow" />
                          <span className="project-image-year">{project.year}</span>
                          <span className="project-image-arrow" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 17L17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="featured-section" id="featured-work">
        <div className="featured-header">
          <span className="featured-badge">Featured Work</span>
          <h2 className="featured-title">Selected <span className="gradient">Projects</span></h2>
          <p className="featured-subtitle">A collection of our finest work across various industries</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              href={`/portfolio/${project.slug}`}
              key={project.slug}
              className="project-card"
              ref={addToProjectsRef}
            >
              <div className="project-card-image">
                <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
                <div className="project-card-overlay">
                  <div className="project-card-overlay-content">
                    <span className="overlay-category">{project.category}</span>
                    <h3 className="overlay-title">{project.title}</h3>
                    <p className="overlay-description">{project.about.substring(0, 60)}...</p>
                    <span className="overlay-btn">Discover →</span>
                  </div>
                </div>
              </div>
              <div className="project-card-info">
                <div className="card-meta">
                  <span className="card-category">{project.category}</span>
                  <span className="card-year">{project.year}</span>
                </div>
                <h3 className="card-title">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA — shared site-wide */}
      <FinalCta />
    </>
  );
}