import ServiceTemplate from "@/components/service-template/ServiceTemplate";

export const metadata = {
  title: "SEO Services | KZK Services",
  description:
    "Data-driven SEO that grows organic traffic, qualified leads and revenue — technical, on-page and off-page.",
};

const data = {
  badge: "SEO",
  titleLead: "Rank higher.",
  titleAccent: "Earn traffic that actually converts.",
  subtitle:
    "We don’t chase vanity keywords — we build SEO programs that drive qualified search traffic to the pages that move your business forward.",
  heroIcon: "▲",
  intro: {
    eyebrow: "Real SEO, No Fluff",
    lead: "Search visibility that compounds —",
    accent: "month after month.",
    paragraphs: [
      "SEO has changed. Stuffed keywords and link farms don’t work anymore. What does work: technically clean sites, content that actually answers user intent, and authority earned through real outreach.",
      "We run SEO as an integrated program — technical, on-page and off-page — so the work compounds instead of stalling out after the first few wins.",
    ],
    bullets: [
      "Technical SEO audit fixing crawl, index and Core Web Vitals issues.",
      "Keyword strategy mapped to your funnel — not just search volume.",
      "Content that ranks because it’s the best answer, not the longest one.",
      "Link building through real relationships, digital PR and outreach.",
    ],
  },
  benefits: [
    { icon: "▲", title: "Higher Rankings", text: "Top-3 positions on the keywords that drive your pipeline." },
    { icon: "✦", title: "More Qualified Traffic", text: "Visitors with intent to buy — not random browsers." },
    { icon: "◆", title: "Better Conversion", text: "Optimized landing pages turn the new traffic into leads." },
    { icon: "▣", title: "Technical Health", text: "Fast, crawlable, indexable site — the SEO foundation." },
    { icon: "◉", title: "Authority Building", text: "Real backlinks from publications and sites in your niche." },
    { icon: "⚡", title: "Transparent Reporting", text: "Monthly reports tied to revenue, not just rank tracking." },
  ],
  deliverables: [
    { icon: "◐", title: "Technical SEO Audit", text: "Crawl errors, Core Web Vitals, schema, sitemaps and indexing." },
    { icon: "▤", title: "On-Page Optimization", text: "Content structure, internal links, meta and conversion tuning." },
    { icon: "◰", title: "Content Strategy", text: "Keyword clusters mapped to pages your audience actually searches." },
    { icon: "▦", title: "Link Building", text: "Outreach, digital PR and partnerships that earn real backlinks." },
  ],
  process: [
    { title: "Audit", text: "Tech, content and backlink benchmark." },
    { title: "Strategy", text: "Keyword map and 12-month roadmap." },
    { title: "Execute", text: "Fix, write, optimize, build links." },
    { title: "Report", text: "Monthly insights tied to revenue." },
  ],
  tech: [
    "Ahrefs",
    "SEMrush",
    "Google Search Console",
    "GA4",
    "Screaming Frog",
    "Surfer SEO",
    "Looker Studio",
  ],
  stats: [
    { num: "300%", label: "Avg Traffic Lift" },
    { num: "12mo", label: "ROI Timeline" },
    { num: "Top 3", label: "Target Position" },
    { num: "200+", label: "Campaigns Run" },
  ],
  faqs: [
    { q: "How long until I see SEO results?", a: "Early wins (technical fixes, on-page optimization) show in 30–60 days. Compounding ranking gains usually emerge between months 4–6 with measurable revenue impact at 6–12 months." },
    { q: "Do you guarantee #1 rankings?", a: "No serious agency does — Google’s algorithm is opaque. What we guarantee is process, quality and transparent reporting tied to your business outcomes." },
    { q: "Will you write the content for me?", a: "Yes. We have in-house writers and editors who produce SEO-strong, brand-aligned content. We also work with your team if you prefer." },
    { q: "Can you fix a Google penalty?", a: "Often, yes. We audit the cause, build a recovery plan and submit reconsideration requests where applicable." },
  ],
};

export default function Page() {
  return <ServiceTemplate data={data} />;
}
