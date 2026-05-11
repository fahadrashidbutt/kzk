import Link from "next/link";
import Image from "next/image";
import "../../assets/css/inner-pages.css";
import "./gmb.css";
import FinalCta from "../../components/final-cta/FinalCta";
import gmbHero from "../../assets/images/google-my-business/gmb-banner.jpg";
import gmbGuide from "../../assets/images/google-my-business/Google-My-Business-vec.jpg";

export const metadata = {
  title: "Google Business Profile Services in the USA | KZK Services",
  description:
    "Local-pack rankings, review velocity, and Maps visibility done right. KZK Services optimizes Google Business Profile, manages your listings, and grows local SEO across the USA.",
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Service With Expert Team",
    text: "In terms of marketing your business, our experience speaks for itself. Plus, we do the Google My Business service in a flash and update the listing without wasting a single second.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Compile Report & Comprehensive Management",
    text: "We manage Bing Places, Apple Maps and Google Business Profile end-to-end and send you a monthly report so you can track progress and traffic insights at a glance. It's the kind of reporting that makes our local SEO work in the USA stand out.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Optimize Your Profile End-to-End",
    text: "Profile optimization is the foundation of local-search visibility. We complete every field, structure your services and categories correctly, and make sure your profile is set up to convert searches into walk-ins.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Expand Your Online Presence Now",
    text: "To provide the best Google Business Profile services in the USA, KZK Services is the most cost-effective agency with no spam and no hidden charges. If you ever run into a listing issue, we'll treat you like a VIP and take care of it.",
  },
];

const strategies = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    text: "To make your local business reputation among the number of businesses, we complete every element of your GMB profile. This strategy will increase the visit of customers by 70% at your location.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    text: "Online survey and research reveal that showcasing your business through photos and videos can increase website clicks and profit. That's why we add the videos and photos of a work team, location and your products, and reviews of previous customers.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    text: "To boost the search ranking of your local business, we do the strategy of adding the relevant keyword by selecting them from the keyword planner, Google Analytics, and Google Trends.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    text: "To make your brand trustworthy, we use the way of responding to reviews and adding feedback to show your business legitimacy.",
  },
];

const steps = [
  {
    title: "Market Analysis",
    text: "To completely understand your business niche and competitor, we do in-depth research and make a top-notch marketing campaign. We do this step to help you to get more leads from your website and get more revenue.",
  },
  {
    title: "Compile Strategies & Listing",
    text: "For the online expansion of your business, we compile the all-important strategies to optimize the GMB account based on relevance and prominence. After this, we establish and optimize the listing.",
  },
  {
    title: "Update Content For Engagement",
    text: "Local search ranking lives or dies by content. We publish engaging GBP posts and updates regularly so your listing keeps climbing — and we research the right keywords and weave them in naturally, never stuffed.",
  },
  {
    title: "Maintain & Off-Page SEO",
    text: "After optimizing the GMB list, we manage it by adding reviews, giving feedback on reviews, and replying to messages. Then we move to off-page SEO by inserting backlinks to make a strong online visibility.",
  },
  {
    title: "Cross-Analysis For More Leads",
    text: "Lastly, we focus on increasing conversion and return on investment by cross-checking our campaign and doing testing to enhance the traffic. For this, we keep on visiting further and find new ways.",
  },
];

const sidebarServices = [
  { label: "Content Marketing", path: "/services/content-marketing" },
  { label: "Google AdWords", path: "/services/google-adwords" },
  { label: "Web Development", path: "/services/web-development" },
  { label: "SEO Optimization", path: "/services/seo" },
  { label: "App Development", path: "/services/app-development" },
  { label: "Digital Marketing", path: "/services/digital-marketing" },
  { label: "Google My Business", path: "/google-my-business" },
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function GoogleMyBusinessPage() {
  return (
    <main className="ip-page gmb-page">
      {/* HERO */}
      <section className="gmb-hero">
        <div className="ip-hero-bg">
          <div className="ip-orb ip-orb-1" />
          <div className="ip-orb ip-orb-2" />
          <div className="ip-orb ip-orb-3" />
          <div className="ip-hero-grid" />
        </div>
        <div className="gmb-hero-content">
          <nav className="gmb-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="gmb-breadcrumb-sep">/</span>
            <Link href="/#services">Services</Link>
            <span className="gmb-breadcrumb-sep">/</span>
            <span className="gmb-breadcrumb-current">Google My Business</span>
          </nav>
          <span className="gmb-hero-eyebrow">
            <span className="gmb-hero-eyebrow-dot" />
            Local SEO Service
          </span>
          <h1 className="gmb-hero-title">
            Google My <span className="ip-grad">Business</span>
          </h1>
          <p className="gmb-hero-sub">
            Local-pack rankings, review velocity, and Maps visibility done the
            right way — so the people searching for your service find{" "}
            <strong>you</strong>, not your competitor.
          </p>
          <div className="gmb-hero-actions">
            <Link href="/contact-us" className="ip-btn-primary">
              Free GBP Audit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/portfolio" className="ip-btn-secondary">
              See Results
            </Link>
          </div>
        </div>
      </section>

      {/* HERO IMAGE BANNER */}
      <div className="gmb-hero-image-wrap">
        <div className="gmb-hero-image">
          <Image
            src={gmbHero}
            alt="KZK Google My Business services"
            priority
          />
          <div className="gmb-hero-image-glow" />
        </div>
      </div>

      {/* GETTING STARTED INTRO */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="gmb-lead">
            <span className="gmb-lead-tag">★ Getting Started</span>
            <h2 className="gmb-lead-title">
              KZK Google Business Profile{" "}
              <span className="ip-grad">Services for the USA</span>
            </h2>
            <p className="gmb-lead-text">
              Stop wasting time on inefficient SEO. Market your local business
              with strong listings across Google, Facebook and Yelp. KZK
              Services helps brands rank better in local search with
              full-service Google Business Profile optimization — managing
              every part of the listing, from brand visibility to local-pack
              presence in the markets your customers actually search.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — main + sidebar */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="gmb-why-grid">
            <div className="gmb-why-main">
              <span className="ip-section-tag">Why Choose KZK</span>
              <h2 className="gmb-why-title">
                Why Choose KZK For Google My Business{" "}
                <span className="ip-grad">Services In USA?</span>
              </h2>
              <p className="gmb-why-text">
                KZK Services is a leader in delivering affordable, effective
                Google Business Profile services across the USA. We've solved
                countless local-search problems and we can do the same for
                you. Our goal is simple: help you grow your business, ship the
                best possible solutions, and earn lasting customer
                satisfaction. Here are the standout features that make KZK a
                wise choice.
              </p>

              <div className="gmb-features">
                {features.map((f, i) => (
                  <div key={f.title} className="gmb-feature">
                    <span className="gmb-feature-num">0{i + 1}</span>
                    <div className="gmb-feature-icon">{f.icon}</div>
                    <h3 className="gmb-feature-title">{f.title}</h3>
                    <p className="gmb-feature-text">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="gmb-sidebar">
              <div className="gmb-side-card">
                <div className="gmb-side-card-title">Services List</div>
                <ul className="gmb-services-list">
                  {sidebarServices.map((s) => (
                    <li key={s.label}>
                      <Link href={s.path}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="gmb-side-card gmb-side-contact">
                <div className="gmb-side-card-title">Contact Info</div>
                <div className="gmb-contact-list">
                  <div className="gmb-contact-item">
                    <span className="gmb-contact-icon">
                      <PinIcon />
                    </span>
                    <a
                      href="https://maps.app.goo.gl/HfsYAibPTE7x2h6Q9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      1519 Hopewell Ave, Essex, MD 21221
                    </a>
                  </div>
                  <div className="gmb-contact-item">
                    <span className="gmb-contact-icon">
                      <PhoneIcon />
                    </span>
                    <a href="tel:+14435298897">(443) 529-8897</a>
                  </div>
                  <div className="gmb-contact-item">
                    <span className="gmb-contact-icon">
                      <MailIcon />
                    </span>
                    <a href="mailto:sales@kzkservices.com">sales@kzkservices.com</a>
                  </div>
                </div>
                <Link href="/contact-us" className="gmb-side-cta">
                  Get a Quote
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 5 STRATEGIES */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="gmb-strategies-head">
            <span className="ip-section-tag">5 KZK Strategies</span>
            <h2 className="ip-section-title">
              Google My Business Profile{" "}
              <span className="ip-grad">Optimization</span>
            </h2>
            <p className="ip-section-text">
              To give you more insights into the expertise of KZK Google My
              Business services in USA, here we share our cutting-edge
              techniques for optimizing the GMB profile to maximize your
              conversions and make your brand identity:
            </p>
          </div>

          <div className="gmb-strategies">
            {strategies.map((s, i) => (
              <div key={i} className="gmb-strategy">
                <div className="gmb-strategy-head">
                  <span className="gmb-strategy-num">0{i + 1}</span>
                  <span className="gmb-strategy-icon">{s.icon}</span>
                </div>
                <p className="gmb-strategy-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE GUIDE — split with image + step timeline */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="gmb-guide-grid">
            <div className="gmb-guide-image">
              <Image
                src={gmbGuide}
                alt="KZK guides you through every step of GMB optimization"
              />
              <div className="gmb-guide-image-glow" />
              <div className="gmb-guide-floating">
                <span className="gmb-guide-floating-dot" />
                Live process. Live results.
              </div>
            </div>
            <div className="gmb-guide-content">
              <span className="ip-section-tag">Our Process</span>
              <h2 className="gmb-guide-title">
                How We Guide You Through{" "}
                <span className="ip-grad">Every Step?</span>
              </h2>
              <p className="gmb-guide-text">
                It is your listing that represents your brand! Let&apos;s make
                sure it&apos;s perfect together! After completing a brief
                consultation and verification, we will tell you what is needed
                to have your listing indexed by Google, and in this way, we
                will help you achieve the desired success for you.
              </p>

              <ol className="gmb-steps">
                {steps.map((s, i) => (
                  <li key={s.title} className="gmb-step">
                    <span className="gmb-step-num">0{i + 1}</span>
                    <div className="gmb-step-body">
                      <h3 className="gmb-step-title">{s.title}</h3>
                      <p className="gmb-step-text">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — shared site-wide */}
      <FinalCta />
    </main>
  );
}
