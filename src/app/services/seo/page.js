import ServiceTemplate from "@/components/service-template/ServiceTemplate";

export const metadata = {
  title: "SEO Services | KZK Services",
  description:
    "Data-driven SEO that grows organic traffic, qualified leads and revenue — technical, on-page and off-page. Local, national and ecommerce SEO programs built to compound.",
};

const data = {
  badge: "SEO",
  titleLead: "Rank higher.",
  titleAccent: "Earn traffic that actually converts.",
  subtitle:
    "We don't chase vanity keywords — we build SEO programs that drive qualified search traffic to the pages that move your business forward, month after month.",
  heroIcon: "▲",
  intro: {
    eyebrow: "Real SEO, No Fluff",
    lead: "Search visibility that compounds —",
    accent: "month after month.",
    paragraphs: [
      "SEO has changed. Stuffed keywords, thin pages, and bought-link networks don't move the needle anymore — and Google's helpful-content and spam updates have actively penalized them. What works in 2026: technically clean sites with strong Core Web Vitals, content that actually answers a searcher's question better than anything else on the SERP, and authority earned through real digital PR, partnerships, and original research that other people want to cite.",
      "We run SEO as an integrated program — technical, on-page, content, and off-page — so the work compounds instead of stalling out after the first few wins. Your dedicated team includes a senior SEO strategist, a technical SEO engineer, an in-house content team, and an outreach specialist. You get a single point of contact and one monthly report that ties everything to revenue, not just rank tracking.",
      "Whether you're a local service business trying to win the map pack, an ecommerce brand fighting for category-page rankings, or a B2B SaaS company chasing high-intent keywords — our playbook adapts. Every engagement starts with a 60-point technical and content audit so we know exactly where the leverage is before we spend a dollar of your budget.",
    ],
    bullets: [
      "Technical SEO audit fixing crawl, index, schema and Core Web Vitals issues.",
      "Keyword strategy mapped to your funnel — not just search volume.",
      "Content that ranks because it's the best answer, not the longest one.",
      "Link building through real relationships, digital PR and outreach.",
      "Local SEO with GBP optimization and citation cleanup for service-area businesses.",
      "Monthly reports tied to organic revenue, not just rankings.",
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
    {
      icon: "◐",
      title: "Technical SEO Audit",
      text: "60-point audit covering crawl errors, Core Web Vitals, schema, sitemaps, indexing, JavaScript rendering and mobile usability — with prioritized fix list.",
    },
    {
      icon: "▤",
      title: "On-Page Optimization",
      text: "Content structure, internal links, meta titles & descriptions, heading hierarchy, image SEO and conversion tuning on every key page.",
    },
    {
      icon: "◰",
      title: "Content Strategy",
      text: "Keyword clusters mapped to your funnel — pillar pages, supporting articles and refresh schedule. We write or work with your team.",
    },
    {
      icon: "▦",
      title: "Link Building",
      text: "Outreach, digital PR, original-research campaigns and partnerships that earn real backlinks from publications people actually read.",
    },
    {
      icon: "◉",
      title: "Local SEO & GBP",
      text: "Google Business Profile optimization, NAP consistency, citation building and review velocity — for businesses with a physical or service-area footprint.",
    },
    {
      icon: "✦",
      title: "Reporting & Analytics",
      text: "GA4 + Search Console set up properly, attribution reports, custom Looker Studio dashboards and monthly revenue-tied insights.",
    },
  ],
  process: [
    {
      title: "Audit & Benchmark",
      text: "Deep technical, content and backlink audit. Competitor gap analysis. Baseline rankings, traffic and revenue snapshot. We share what's holding you back and where the biggest wins live.",
    },
    {
      title: "Strategy & Roadmap",
      text: "12-month strategy with prioritized keyword map, content calendar, technical fix list and link acquisition plan. You sign off before any work starts.",
    },
    {
      title: "Execute & Optimize",
      text: "Fix, write, optimize and build links every single month. Senior team only — no junior hand-offs. Weekly stand-ups, biweekly demos, full transparency.",
    },
    {
      title: "Report & Iterate",
      text: "Monthly report tying organic traffic, qualified leads and revenue to specific work done. Data drives the next sprint. Algorithm changes get caught early.",
    },
  ],
  tech: [
    "Ahrefs",
    "SEMrush",
    "Google Search Console",
    "Google Analytics 4",
    "Screaming Frog",
    "Surfer SEO",
    "Clearscope",
    "Looker Studio",
    "PageSpeed Insights",
    "Schema.org",
    "Google Business Profile",
    "Hotjar",
  ],
  stats: [
    { num: "300%", label: "Avg Traffic Lift" },
    { num: "12mo", label: "ROI Timeline" },
    { num: "Top 3", label: "Target Position" },
    { num: "200+", label: "Campaigns Run" },
  ],
  faqs: [
    {
      q: "How long until I see real SEO results?",
      a: "Early wins (technical fixes, on-page optimization, low-competition keywords) typically show inside 30–60 days. Compounding ranking gains on competitive head terms usually emerge between months 4–6, with measurable revenue impact at 6–12 months. We share a realistic month-by-month projection during the strategy phase so there are no surprises.",
    },
    {
      q: "Do you guarantee #1 rankings?",
      a: "No serious agency does — Google's algorithm is opaque, constantly updated, and full of competitive variables outside anyone's control. What we guarantee is process, quality of work, and transparent reporting tied to your actual business outcomes (organic traffic, qualified leads, organic revenue) — not vanity rank-tracker screenshots.",
    },
    {
      q: "Will you write the content for me, or do I need to?",
      a: "Either works. Our in-house writers and editors produce SEO-strong, brand-aligned content (product copy, blog posts, pillar pages, landing pages). If you have an internal team, we provide briefs, keyword targets and editing — whatever fits your workflow.",
    },
    {
      q: "Can you fix a Google penalty or algorithm-update drop?",
      a: "Often, yes. We audit the cause (manual penalty, helpful-content update, link spam, core update fluctuation), build a recovery plan, and submit reconsideration requests where applicable. We've recovered traffic for sites hit by HCU, link penalties, and major core updates.",
    },
    {
      q: "Do you do local SEO or only national / ecommerce?",
      a: "Both. Local SEO for service-area businesses (plumbers, lawyers, dentists, contractors) is a dedicated service line — Google Business Profile optimization, citations, NAP consistency, review velocity, local content. National and ecommerce SEO have separate playbooks tuned to category pages and high-intent commercial terms.",
    },
    {
      q: "What's the minimum monthly budget?",
      a: "Our entry tier starts at $2,500/mo for local SEO, $4,000/mo for national content + technical, and $6,000/mo for ecommerce or B2B SaaS programs that need original research and outreach. Smaller budgets often work better with a one-time audit + your in-house team executing — we can recommend that path if it's a better fit.",
    },
    {
      q: "How is reporting structured?",
      a: "One Looker Studio dashboard with live data: organic traffic, ranking movement on tracked keywords, top-converting landing pages, organic-attributed revenue, and backlink growth. Plus a monthly written report (PDF + 30-min Loom walkthrough) that ties what we did to what changed.",
    },
    {
      q: "Will I be locked into a long contract?",
      a: "Three-month minimum to give the work time to register, then month-to-month after that with 30 days notice. SEO is a long game — clients who stay 12+ months see disproportionately better results, but we don't trap anyone with year-long commitments.",
    },
  ],
};

export default function Page() {
  return <ServiceTemplate data={data} />;
}
