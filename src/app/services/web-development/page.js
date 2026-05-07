import ServiceTemplate from "@/components/service-template/ServiceTemplate";

export const metadata = {
  title: "Web Development | KZK Services",
  description:
    "Custom websites and web apps engineered for speed, SEO and conversion — from marketing sites to complex platforms.",
};

const data = {
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
      text: "Multi-page sites with rich content, blogs, landing pages and lead capture flows.",
    },
    {
      icon: "▤",
      title: "Web Applications",
      text: "Authenticated dashboards, SaaS products and internal tools with custom workflows.",
    },
    {
      icon: "◰",
      title: "E-commerce",
      text: "Shopify, WooCommerce or fully custom storefronts — built to convert and easy to manage.",
    },
    {
      icon: "▦",
      title: "Headless CMS",
      text: "Content modeled in Sanity, Contentful or Strapi so your team owns updates end to end.",
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
  return <ServiceTemplate data={data} />;
}
