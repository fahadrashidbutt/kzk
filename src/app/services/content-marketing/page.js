import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import ServiceEducation from "@/components/service-education/ServiceEducation";
import cmBanner from "../../../assets/images/services/content.jpg";

const educationData = {
  title: "How Content Marketing Works —",
  titleAccent: "and Why It Matters",
  lead: "Content that compounds revenue isn't written on a whim. It's the output of a four-phase loop: strategy, research, create, and publish & optimize. Done right, every article keeps earning traffic and leads for years.",
  steps: [
    {
      title: "Strategy",
      short: "Strategy",
      text: "Audience mapping, content pillars, channel mix and a 6-month editorial calendar tied to your funnel — not vanity topics that look smart on Twitter.",
    },
    {
      title: "Research",
      short: "Research",
      text: "Keyword clusters, SERP teardowns and competitor gap analysis. We know what to write, who else is ranking for it, and how to make ours the best answer.",
    },
    {
      title: "Create",
      short: "Create",
      text: "Senior in-house writers and editors produce the work — long-form posts, landing pages, social content, newsletters and lead magnets — all in your brand voice.",
    },
    {
      title: "Publish & Optimize",
      short: "Publish & Optimize",
      text: "Distribute across owned, earned and paid channels, then track engagement, conversions and rankings. Underperformers get refreshed; winners get amplified.",
    },
  ],
  benefitsTitle: "Six reasons content marketing",
  benefitsTitleAccent: "still beats every other growth channel",
  benefits: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      title: "Compounding Returns",
      text: "Unlike ads, content doesn't stop earning when budget runs out. A well-ranked article keeps driving qualified traffic for years after it's published.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Authority & Trust",
      text: "Publishing the best answer on a topic earns expert status. Customers buy from brands they trust, and content is the fastest way to build that trust.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: "SEO Power",
      text: "Search engines reward depth and freshness. A strong content program is the foundation of every organic ranking we win.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Higher-Intent Leads",
      text: "Readers who find you via a how-to guide are already qualifying themselves. They convert at 3-5× the rate of cold-traffic leads.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      ),
      title: "Distribution Leverage",
      text: "One great piece becomes 20+ assets — social, email, video clips, newsletter. We squeeze every drop of distribution out of every investment.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Measurable ROI",
      text: "Every piece is tagged, tracked and tied to a funnel stage. You see exactly which articles drive which leads and revenue, every month.",
    },
  ],
};

export const metadata = {
  title: "Content Marketing",
  description:
    "Content marketing services in the USA — strategy, blog & editorial writing, social, email and SEO content that builds audience, authority and revenue.",
};

const data = {
  bannerImage: cmBanner,
  badge: "Content Marketing",
  titleLead: "Compelling content that builds",
  titleAccent: "audience and authority.",
  subtitle:
    "Boost your brand's visibility, engage your target audience, and drive conversions with strategic content that resonates and converts.",
  heroIcon: "▦",
  intro: {
    eyebrow: "KZK Content Marketing",
    lead: "Content that earns attention —",
    accent: "and earns its place.",
    paragraphs: [
      "Boost your brand's visibility, engage your target audience, and drive conversions with compelling and strategic content. At KZK, we specialize in content marketing services in the USA, designed to elevate your online presence and build meaningful connections with your audience. Investing in content marketing can significantly enhance your brand's reputation and drive sustainable business growth.",
      "Our skilled and dedicated team has collaborated with top brands globally, delivering measurable results through effective content marketing. Our experts understand the importance of creating tailored content that resonates with your audience and drives engagement. We utilize comprehensive research and data analysis to craft content that aligns with your brand's goals and attracts the right audience.",
      "In today's digital landscape, content is king. We specialize in crafting compelling and strategic content that resonates with your audience and drives engagement. Whether you're looking to enhance your online visibility, build authority, or drive conversions, our tailored content strategies are here to help you achieve your goals.",
    ],
    bullets: [
      "Comprehensive content audit and competitor benchmark.",
      "Editorial calendar mapped to keyword strategy and audience funnel.",
      "Senior writers and editors — no AI-generated filler.",
      "Distribution across blog, social, email and outreach channels.",
      "Monthly performance reports tied to organic traffic and conversions.",
    ],
  },
  benefits: [
    { icon: "✦", title: "More Qualified Traffic", text: "Content tuned to real search intent — not vanity keywords." },
    { icon: "▲", title: "Authority Building", text: "Earn citations, mentions and backlinks from real publications." },
    { icon: "◆", title: "Better Conversion", text: "Content + strong CTAs turn readers into leads and customers." },
    { icon: "▣", title: "Brand Voice", text: "Consistent voice across blog, social, email and ad copy." },
    { icon: "◉", title: "Compounding Growth", text: "Articles keep ranking and driving traffic months after publishing." },
    { icon: "⚡", title: "Real Reporting", text: "Dashboards tie content performance directly to revenue." },
  ],
  deliverables: [
    {
      icon: "◐",
      title: "Comprehensive Content Strategy",
      text: "We meticulously research and identify key topics, trends, and keywords that resonate with your target audience. Utilizing advanced tools, we create a strategic roadmap to optimize your content for maximum impact.",
    },
    {
      icon: "▤",
      title: "Targeted Local Content",
      text: "We craft content that speaks directly to your community. By focusing on local interests and incorporating location-specific keywords, we help your business connect with local customers and drive engagement.",
    },
    {
      icon: "◰",
      title: "Outreach & Link Building",
      text: "Effective link-building strategies through competitor analysis and securing high-quality backlinks. Our focus on ethical practices ensures your website gains credibility and trust.",
    },
    {
      icon: "▦",
      title: "Technical Content Optimization",
      text: "We delve into technical optimization, using tools like Screaming Frog and Googlebot to audit and refine your site's infrastructure. This ensures your content is easily accessible and ranks well.",
    },
    {
      icon: "✦",
      title: "Blog & Editorial Writing",
      text: "Long-form articles, pillar pages, blog posts, and editorial content written by experienced writers who balance SEO with reader engagement.",
    },
    {
      icon: "◉",
      title: "Social & Email Content",
      text: "Social media calendars, email newsletters, and lifecycle content that keeps your brand top-of-mind across every channel where your audience lives.",
    },
  ],
  process: [
    {
      title: "Audit & Research",
      text: "Deep audit of your existing content, audience analysis, competitor benchmarking, and content gap identification.",
    },
    {
      title: "Strategy & Planning",
      text: "Editorial calendar, keyword strategy, content topics, and distribution plan tailored to your funnel and audience.",
    },
    {
      title: "Create & Publish",
      text: "Our team writes, edits, and publishes content on schedule — articles, blogs, social posts, and email campaigns.",
    },
    {
      title: "Measure & Optimize",
      text: "Track performance, A/B test headlines, refresh top performers, and refine the strategy based on real data.",
    },
  ],
  tech: [
    "WordPress",
    "HubSpot",
    "Mailchimp",
    "Ahrefs",
    "SEMrush",
    "Surfer SEO",
    "Google Analytics",
    "Screaming Frog",
    "Canva",
    "Hemingway Editor",
    "Grammarly",
    "Google Search Console",
  ],
  stats: [
    { num: "500+", label: "Articles Published" },
    { num: "4×", label: "Avg Traffic Lift" },
    { num: "90+", label: "Brands Served" },
    { num: "98%", label: "Client Retention" },
  ],
  faqs: [
    {
      q: "How long until content marketing shows results?",
      a: "Early signals (engagement, social shares, on-page metrics) show in 30–60 days. SEO-driven traffic from new content typically compounds over 4–6 months, with meaningful brand authority and sustained organic traffic at 6–12 months.",
    },
    {
      q: "Do you write the content for me, or do I write it?",
      a: "Both options work. We have in-house writers, editors, and SEO strategists who produce content end-to-end. If you have an internal team, we can also provide briefs, keyword targets, and editing — whatever fits your workflow.",
    },
    {
      q: "What types of content do you produce?",
      a: "Blog posts, long-form pillar pages, landing-page copy, social media content, email newsletters, video scripts, white papers, case studies, and product copy. We tailor the mix to your audience and channel strategy.",
    },
    {
      q: "How do you measure content performance?",
      a: "We track organic traffic, keyword rankings, time-on-page, scroll depth, conversions tied to specific pieces, social engagement, and email opens/CTR. Monthly Looker Studio dashboard ties everything to revenue impact.",
    },
    {
      q: "Can you help with content strategy or just writing?",
      a: "Both. Many clients start with strategy + audit (one-time engagement) and then move to ongoing content production. Some prefer just writing services if they already have a strategy. We're flexible.",
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
