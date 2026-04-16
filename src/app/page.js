"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/homepage.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const whyChooseRef = useRef(null);
  const cardsRef = useRef([]);
  const numbersRef = useRef([]);
  const badgeRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = 6 + Math.random() * 4 + 's';
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();

    // Hero Section - Scroll-triggered repeating animation
    const heroTimeline = gsap.timeline({ paused: true });
    
    heroTimeline
      .fromTo(badgeRef.current,
        { 
          y: -50, 
          opacity: 0,
          scale: 0.8
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1, 
          ease: "back.out(1.2)" 
        }
      )
      .fromTo(titleRef.current,
        { 
          y: 100, 
          opacity: 0,
          rotationX: -90,
          skewY: 10
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          skewY: 0,
          duration: 1.2, 
          ease: "power4.out" 
        },
        "-=0.5"
      )
      .fromTo(subtitleRef.current,
        { 
          y: 50, 
          opacity: 0,
          scale: 0.95
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8, 
          ease: "power3.out" 
        },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { 
          scale: 0, 
          opacity: 0,
          rotation: -10
        },
        { 
          scale: 1, 
          opacity: 1, 
          rotation: 0,
          duration: 0.8, 
          ease: "back.out(1.7)" 
        },
        "-=0.4"
      )
      .fromTo(".hero-stats .stat-item",
        { 
          y: 100, 
          opacity: 0,
          scale: 0.8
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out" 
        },
        "-=0.3"
      )
      .fromTo(scrollIndicatorRef.current,
        { 
          opacity: 0,
          y: -20
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.2"
      );
    
    // Reset function for hero animations
    const resetHeroAnimation = () => {
      heroTimeline.progress(0);
      gsap.set(badgeRef.current, { y: -50, opacity: 0, scale: 0.8 });
      gsap.set(titleRef.current, { y: 100, opacity: 0, rotationX: -90, skewY: 10 });
      gsap.set(subtitleRef.current, { y: 50, opacity: 0, scale: 0.95 });
      gsap.set(ctaRef.current, { scale: 0, opacity: 0, rotation: -10 });
      gsap.set(".hero-stats .stat-item", { y: 100, opacity: 0, scale: 0.8 });
      gsap.set(scrollIndicatorRef.current, { opacity: 0, y: -20 });
    };
    
    // Play hero animation when entering viewport
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        heroTimeline.play();
      },
      onLeaveBack: () => {
        heroTimeline.reverse();
      },
      onLeave: () => {
        heroTimeline.reverse();
      },
      onEnterBack: () => {
        heroTimeline.play();
      }
    });
    
    // Also play hero animation on initial load
    setTimeout(() => {
      if (window.scrollY === 0) {
        heroTimeline.play();
      }
    }, 100);

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;
      
      gsap.to(".orb-1", {
        x: xPos * 0.5,
        y: yPos * 0.5,
        duration: 1,
        ease: "power2.out"
      });
      
      gsap.to(".orb-2", {
        x: xPos * -0.3,
        y: yPos * -0.3,
        duration: 1,
        ease: "power2.out"
      });
      
      gsap.to(".orb-3", {
        x: xPos * 0.2,
        y: yPos * 0.2,
        duration: 1,
        ease: "power2.out"
      });
      
      gsap.to(".hero-title", {
        x: xPos * 0.1,
        y: yPos * 0.1,
        duration: 1,
        ease: "power2.out"
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // Why Choose Us Section - Scroll-triggered animations that reverse on scroll up
    // Section header animation
    ScrollTrigger.create({
      trigger: whyChooseRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(".section-tag", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        });
        gsap.to(".section-title", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
        gsap.to(".section-description", {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(".section-tag", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in"
        });
        gsap.to(".section-title", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.in"
        });
        gsap.to(".section-description", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.in"
        });
      }
    });
    
    // Set initial state for section header
    gsap.set(".section-tag", { y: 50, opacity: 0 });
    gsap.set(".section-title", { y: 50, opacity: 0 });
    gsap.set(".section-description", { y: 50, opacity: 0 });
    
    // Cards Animation with scroll trigger - reverses on scroll up
    cardsRef.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.fromTo(card,
            { 
              x: index % 2 === 0 ? -100 : 100, 
              opacity: 0, 
              scale: 0.8,
              rotation: index % 2 === 0 ? -10 : 10
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out"
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(card, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            scale: 0.8,
            rotation: index % 2 === 0 ? -10 : 10,
            duration: 0.6,
            ease: "power3.in"
          });
        }
      });
    });
    
    // Numbers Animation with scroll trigger - reverses on scroll up
    numbersRef.current.forEach((number) => {
      const target = parseInt(number.getAttribute("data-target"));
      let animationRunning = false;
      let currentValue = 0;
      
      ScrollTrigger.create({
        trigger: number,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          if (!animationRunning) {
            animationRunning = true;
            currentValue = 0;
            number.innerText = "0";
            gsap.to({ val: 0 }, {
              val: target,
              duration: 2.5,
              snap: { val: 1 },
              onUpdate: function() {
                number.innerText = Math.floor(this.targets()[0].val);
                currentValue = Math.floor(this.targets()[0].val);
              },
              onComplete: () => {
                animationRunning = false;
              },
              ease: "power2.out"
            });
          }
        },
        onLeaveBack: () => {
          if (!animationRunning) {
            animationRunning = true;
            gsap.to({ val: currentValue }, {
              val: 0,
              duration: 1,
              snap: { val: 1 },
              onUpdate: function() {
                number.innerText = Math.floor(this.targets()[0].val);
              },
              onComplete: () => {
                number.innerText = "0";
                animationRunning = false;
              },
              ease: "power2.in"
            });
          }
        }
      });
    });
    
    // Stats grid numbers animation
    const statsNumbers = document.querySelectorAll('.stat-number-large');
    statsNumbers.forEach((number) => {
      const target = parseInt(number.getAttribute("data-target"));
      let animationRunning = false;
      let currentValue = 0;
      
      ScrollTrigger.create({
        trigger: number,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          if (!animationRunning) {
            animationRunning = true;
            currentValue = 0;
            number.innerText = "0";
            gsap.to({ val: 0 }, {
              val: target,
              duration: 2.5,
              snap: { val: 1 },
              onUpdate: function() {
                number.innerText = Math.floor(this.targets()[0].val);
                currentValue = Math.floor(this.targets()[0].val);
              },
              onComplete: () => {
                animationRunning = false;
              },
              ease: "power2.out"
            });
          }
        },
        onLeaveBack: () => {
          if (!animationRunning) {
            animationRunning = true;
            gsap.to({ val: currentValue }, {
              val: 0,
              duration: 1,
              snap: { val: 1 },
              onUpdate: function() {
                number.innerText = Math.floor(this.targets()[0].val);
              },
              onComplete: () => {
                number.innerText = "0";
                animationRunning = false;
              },
              ease: "power2.in"
            });
          }
        }
      });
    });
    
    // Smooth scroll for scroll indicator
    if (scrollIndicatorRef.current) {
      scrollIndicatorRef.current.addEventListener('click', () => {
        gsap.to(window, {
          duration: 1,
          scrollTo: whyChooseRef.current,
          ease: "power3.inOut"
        });
      });
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  
  const addToNumbersRef = (el) => {
    if (el && !numbersRef.current.includes(el)) {
      numbersRef.current.push(el);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="animated-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="grid-pattern"></div>
          <div className="particles"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge" ref={badgeRef}>
            KZK SERVICES
          </div>
          <h1 className="hero-title" ref={titleRef}>
            We Build Digital
            <span className="gradient-text"> Excellence</span>
          </h1>
          <p className="hero-subtitle" ref={subtitleRef}>
            Transform your business with cutting-edge web solutions, 
            innovative designs, and result-driven strategies
          </p>
          <div className="hero-buttons" ref={ctaRef}>
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Our Work</button>
          </div>
        </div>
        
        <div className="scroll-indicator" ref={scrollIndicatorRef}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow-down"></div>
        </div>
        
        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-number" ref={addToNumbersRef} data-target="150">0</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={addToNumbersRef} data-target="50">0</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={addToNumbersRef} data-target="28">0</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={addToNumbersRef} data-target="5">0</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section" ref={whyChooseRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us?</span>
            <h2 className="section-title">
              To thrive in business today, <br />
              <span className="gradient-text">you'll need a good plan</span>
            </h2>
            <p className="section-description">
              The KZK team is not just letting the words slip. But we are THE BEST because of some reasons. 
              Move your eyeballs below to read it.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card" ref={addToCardsRef}>
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Best Quality Designs</h3>
              <p className="feature-description">
                We make the perfect and best quality websites to divert the masses' attention towards you. 
                Our team joins the head and discusses everything (whether it's a header or footer) while developing a website.
              </p>
            </div>
            
            <div className="feature-card" ref={addToCardsRef}>
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">24x7 Live Support</h3>
              <p className="feature-description">
                The KZK LLC customer care team is always actively responding to our potential customers and resolving their issues within minutes.
              </p>
            </div>
            
            <div className="feature-card" ref={addToCardsRef}>
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Result Oriented Projects</h3>
              <p className="feature-description">
                Here, we guarantee our customers that the cold sales must convert into profit and pull cash for you. 
                So with us, there is no issue of 0% desired result or downfall of your business in the market.
              </p>
            </div>
            
            <div className="feature-card" ref={addToCardsRef}>
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Award Winning Support Team</h3>
              <p className="feature-description">
                Our support team is the one thing that makes us a popular agency in the market. 
                Because our team will never go into sleeping or rest mode, however, they are always up to give support to the business owners.
              </p>
            </div>
            
            <div className="feature-card" ref={addToCardsRef}>
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Best ROI Techniques</h3>
              <p className="feature-description">
                The KZK LLC keeps a separate team in its directory, that focus on the technical details to bring a return for your investments.
              </p>
            </div>
            
            <div className="feature-card" ref={addToCardsRef}>
              <div className="feature-icon">💼</div>
              <h3 className="feature-title">Experienced Professionals</h3>
              <p className="feature-description">
                All the team is experienced and certified. No one does fluff or use spammy ways, which in saves you from the long term harms. 
                So you can trust us related to the team members.
              </p>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-block">
              <div className="stat-number-large" data-target="28">0</div>
              <div className="stat-label-large">+</div>
              <div className="stat-description">Accolades Earned</div>
            </div>
            <div className="stat-block">
              <div className="stat-number-large" data-target="56">0</div>
              <div className="stat-label-large">K+</div>
              <div className="stat-description">Lines of Code</div>
            </div>
            <div className="stat-block">
              <div className="stat-number-large" data-target="50">0</div>
              <div className="stat-label-large">+</div>
              <div className="stat-description">Expert Advisor</div>
            </div>
            <div className="stat-block">
              <div className="stat-number-large" data-target="150">0</div>
              <div className="stat-label-large">+</div>
              <div className="stat-description">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}