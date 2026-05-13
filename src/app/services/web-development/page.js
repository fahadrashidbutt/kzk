import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import ServiceEducation from "@/components/service-education/ServiceEducation";
import wdBanner from "../../../assets/images/services/web-development.jpg";

const educationData = {
  title: "How Web Development Works —",
  titleAccent: "and Why It Matters",
  lead: "A great website isn't shipped in a single sprint. It's the output of a disciplined four-phase cycle — discovery, design, build and launch — that we run on every engagement, from a five-page marketing site to a full SaaS product.",
  steps: [
    {
      title: "Discover",
      short: "Discover",
      text: "Goal-setting workshop, audience and competitor research, technical audit of any existing site. We leave with a clear definition of done and a measurable success target.",
    },
    {
      title: "Design",
      short: "Design",
      text: "Wireframes → high-fidelity prototype in Figma. You see every page before a line of code is written, with conversion-focused layouts and a design system you can keep using.",
    },
    {
      title: "Build",
      short: "Build",
      text: "Modern Next.js + React + Node stack, weekly demos and full QA across browsers and devices. You watch the site come to life in real time, in a staging environment you can click around.",
    },
    {
      title: "Launch & Grow",
      short: "Launch & Grow",
      text: "Deploy to edge hosting, integrate analytics, and stay engaged after launch with monitoring, A/B tests and continuous-improvement sprints.",
    },
  ],
  benefitsTitle: "Six reasons modern web development is",
  benefitsTitleAccent: "the highest-leverage investment you'll make",
  benefits: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Speed That Converts",
      text: "Every 100ms of load-time cut lifts conversion by ~1%. Edge-rendered, image-optimized builds hit sub-second loads on real-world devices and networks.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: "Built-In SEO",
      text: "Semantic HTML, structured data, automatic sitemaps and 100/100 Lighthouse SEO scores by default — your content earns its place in search results.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      title: "Easy to Update",
      text: "Headless CMS (Sanity, Contentful or Strapi) means your marketing team publishes pages, blog posts and campaigns without filing developer tickets.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Conversion-Focused",
      text: "Every layout, headline and CTA is designed around the action you want a visitor to take — not just looking good in a portfolio shot.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Secure & Reliable",
      text: "Automated dependency updates, HTTPS everywhere, CSP headers and 99.99% uptime hosting — no late-night incident calls.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Scalable Foundation",
      text: "Cloud-native architecture that grows with your traffic, your content library and your team — without a rebuild every two years.",
    },
  ],
};

export const metadata = {
  title: "Web Development",
  description:
    "Custom websites and web apps engineered for speed, SEO and conversion — from marketing sites to complex platforms.",
};

const data = {
  bannerImage: wdBanner,
  badge: "Web Development",
  titleLead: "Modern websites that load fast",
  titleAccent: "and convert visitors into customers",
  subtitle:
    "From marketing sites to product platforms, we build with the latest stack — Next.js, React and Node — so your site is fast, SEO-friendly and ready to scale.",
  heroIcon: "▣",
  intro: {
    eyebrow: "What We Build",
    lead: "Sites that don’t just look good —",
    accent: "they outperform.",
    paragraphs: [
      "We don’t copy-paste templates. Every site is engineered from the ground up for the metrics that actually matter: Core Web Vitals, conversion rate, SEO visibility and long-term maintainability.",
      "Whether you need a high-converting landing page, a content-rich marketing site or a full-blown SaaS platform, our team handles strategy, design, development, deployment and ongoing care.",
    ],
    bullets: [
      "Sub-second load times on real-world devices and networks.",
      "100/100 Lighthouse SEO and accessibility scores by default.",
      "Headless CMS so your team can update content without dev help.",
      "Clean, well-tested code you actually own — no agency lock-in.",
    ],
  },
  benefits: [
    {
      icon: "⚡",
      title: "Blazing Performance",
      text: "Edge-rendered, image-optimized, code-split builds that load in under a second.",
    },
    {
      icon: "◆",
      title: "Pixel-Perfect Design",
      text: "Beautiful, responsive layouts that feel polished on every screen and device.",
    },
    {
      icon: "▲",
      title: "SEO Foundation",
      text: "Semantic HTML, structured data, sitemaps and meta — search engines love it.",
    },
    {
      icon: "▣",
      title: "Built to Scale",
      text: "Cloud-native architecture that grows with your traffic, content and team.",
    },
    {
      icon: "✦",
      title: "Conversion-Focused",
      text: "Every layout, headline and CTA is designed around the action you want users to take.",
    },
    {
      icon: "◉",
      title: "Easy to Update",
      text: "Editor-friendly CMS so non-technical teammates can publish without filing tickets.",
    },
  ],
  deliverables: [
    {
      icon: "◐",
      title: "Marketing Websites",
      text: "Multi-page sites with rich content, blogs, landing pages and lead capture flows tuned for SEO.",
    },
    {
      icon: "▤",
      title: "Web Applications",
      text: "Authenticated dashboards, SaaS products and internal tools with custom workflows and integrations.",
    },
    {
      icon: "◰",
      title: "E-commerce Storefronts",
      text: "Shopify, WooCommerce or fully custom storefronts — built to convert and easy for your team to manage.",
    },
    {
      icon: "▦",
      title: "Headless CMS",
      text: "Content modeled in Sanity, Contentful or Strapi so your team owns updates end to end without filing tickets.",
    },
    {
      icon: "✦",
      title: "Landing Pages",
      text: "High-converting, ad-ready landing pages with A/B testing built in — perfect for paid campaigns.",
    },
    {
      icon: "◉",
      title: "Maintenance & Care",
      text: "Hosting, monitoring, security patches and ongoing enhancements — your site stays fast, secure and modern.",
    },
  ],
  process: [
    { title: "Discover", text: "Goals, audience and competitive context." },
    { title: "Design", text: "Wireframes → high-fidelity prototype." },
    { title: "Build", text: "Modern code, weekly demos, full QA." },
    { title: "Launch & Grow", text: "Deploy, measure, iterate." },
  ],
  tech: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind",
    "Sanity",
    "Shopify",
    "Vercel",
    "AWS",
  ],
  stats: [
    { num: "150+", label: "Sites Shipped" },
    { num: "98", label: "Avg Lighthouse" },
    { num: "<1s", label: "Avg Load Time" },
    { num: "5★", label: "Client Rating" },
  ],
  faqs: [
    {
      q: "Do you work with existing codebases or only greenfield projects?",
      a: "Both. We refactor, rebuild and ship features into existing Next.js / React codebases as well as start fresh.",
    },
    {
      q: "How long does a typical website take?",
      a: "Marketing sites run 4–8 weeks. Larger platforms run 8–16+ weeks depending on scope. We share a detailed timeline up front.",
    },
    {
      q: "Do you handle hosting and maintenance?",
      a: "Yes — we offer monthly care plans covering hosting, monitoring, security updates and minor enhancements.",
    },
    {
      q: "Will I be locked into a proprietary system?",
      a: "Never. You own all code, accounts and assets. Our work is portable and uses industry-standard tools.",
    },
  ],
};

export default function Page() {
  return (
    <ServiceTemplate data={data}>
      <ServiceEducation data={educationData} />
    </ServiceTemplate>
  );
}
