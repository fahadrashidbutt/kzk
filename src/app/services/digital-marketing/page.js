import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import ServiceEducation from "@/components/service-education/ServiceEducation";
import dmBanner from "../../../assets/images/services/digital-marketing.jpg";

const educationData = {
  title: "How Digital Marketing Works —",
  titleAccent: "and Why It Matters",
  lead: "Every campaign at KZK runs the same four-phase loop: audit, plan, launch and scale. We pair real performance data with creative testing so spend turns into pipeline — not just impressions.",
  steps: [
    {
      title: "Audit",
      short: "Audit",
      text: "Deep dive into your current funnel, channels, creative and reporting. We diagnose where leads are leaking, what's working, and where the biggest leverage points sit.",
    },
    {
      title: "Plan",
      short: "Plan",
      text: "Channel mix and budget allocation tied to CAC and LTV targets. Creative testing matrix, landing-page strategy and a measurement plan with attribution baked in.",
    },
    {
      title: "Launch",
      short: "Launch",
      text: "Campaigns go live across paid social, paid search, email and remarketing. Every variant is tagged and tracked so we know exactly which combination is winning.",
    },
    {
      title: "Scale",
      short: "Scale",
      text: "Double down on winners, cut losers fast, and keep iterating on creative and audiences. Monthly reports tie ad spend to revenue, not just clicks.",
    },
  ],
  benefitsTitle: "Six reasons digital marketing is",
  benefitsTitleAccent: "the fastest path to predictable growth",
  benefits: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11l18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      ),
      title: "Audience Precision",
      text: "Meta, Google and TikTok let you target by intent, behavior and look-alikes — wasted spend on the wrong audience drops to near zero.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Real-Time Optimization",
      text: "Daily bid, audience and creative adjustments. Campaigns that aren't working get cut in days — not after a quarterly review.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Measurable ROAS",
      text: "Server-side conversion tracking, GA4 attribution and Looker Studio dashboards show exactly which dollar drove which result.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: "Lower CAC Over Time",
      text: "Better creative + tighter targeting + smarter landing pages compound — most KZK clients see CAC drop 30-50% over the first six months.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Cross-Channel Reach",
      text: "Paid social, paid search, email, SMS and remarketing all working together — buyers see the right message at the right moment in their journey.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Brand & Performance Together",
      text: "We don't make you choose. Top-of-funnel awareness and bottom-of-funnel conversion campaigns run side by side — building the brand while moving the pipeline.",
    },
  ],
};

export const metadata = {
  title: "Digital Marketing",
  description:
    "Performance digital marketing — paid ads, social, email and content programs that move pipeline.",
};

const data = {
  bannerImage: dmBanner,
  badge: "Digital Marketing",
  titleLead: "Performance marketing",
  titleAccent: "that pays for itself",
  subtitle:
    "Paid media, social, email and content — all rowing in the same direction. We design integrated programs measured against revenue, not impressions.",
  heroIcon: "✦",
  intro: {
    eyebrow: "Integrated Growth",
    lead: "Channels working together —",
    accent: "not against each other.",
    paragraphs: [
      "Most marketing teams have a paid agency, a social agency, an email agency and a content agency — none of them talking to each other. That’s how budget gets wasted on duplicate audiences and conflicting messages.",
      "We run your full-funnel program in one room: ads, organic social, lifecycle email and content. Same data, same goals, same dashboard.",
    ],
    bullets: [
      "Cohesive funnel from awareness ad to retention email.",
      "Weekly experiments — creative, audiences, landing pages.",
      "Attribution tied to revenue, not platform-reported metrics.",
      "Clear monthly reporting and CAC / LTV trend lines.",
    ],
  },
  benefits: [
    { icon: "▲", title: "Lower CAC", text: "Better targeting and creative drop your customer acquisition cost month over month." },
    { icon: "✦", title: "Higher LTV", text: "Lifecycle email and retention campaigns keep customers buying longer." },
    { icon: "◆", title: "Creative That Works", text: "Scroll-stopping ads built specifically for the platform and audience." },
    { icon: "▣", title: "Full-Funnel Coverage", text: "Awareness → consideration → conversion → retention, all integrated." },
    { icon: "◉", title: "Real Attribution", text: "Server-side tracking and attribution models that survive iOS privacy changes." },
    { icon: "⚡", title: "Rapid Testing", text: "Weekly experiments mean we find what works fast and scale spend confidently." },
  ],
  deliverables: [
    { icon: "◐", title: "Paid Ads", text: "Google, Meta, TikTok, LinkedIn — strategy, platform-native creative, targeting, and continuous optimization." },
    { icon: "▤", title: "Social Media", text: "Organic content calendars, community management, short-form video and influencer programs that build presence." },
    { icon: "◰", title: "Email & SMS", text: "Klaviyo / Customer.io flows — welcome, abandoned-cart, post-purchase and lifecycle — that retain and re-activate." },
    { icon: "▦", title: "Content Marketing", text: "Blogs, newsletters, video and short-form built around real search demand and your buyer's actual questions." },
    { icon: "✦", title: "Conversion Optimization", text: "Landing-page A/B tests, funnel audits, and CRO experiments tied to real revenue lift — not just CTR vanity metrics." },
    { icon: "◉", title: "Analytics & Attribution", text: "Server-side tracking, GA4 + Northbeam setup, and dashboards that show which channel drove which dollar of revenue." },
  ],
  process: [
    { title: "Audit", text: "Spend, creative and channel mix review." },
    { title: "Plan", text: "Strategy, targets and creative directions." },
    { title: "Launch", text: "Test campaigns and creative variants." },
    { title: "Scale", text: "Double down on winners, kill losers." },
  ],
  tech: [
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "LinkedIn Ads",
    "Klaviyo",
    "HubSpot",
    "GA4",
    "Northbeam",
    "Hotjar",
  ],
  stats: [
    { num: "5×", label: "Avg ROAS" },
    { num: "40%", label: "Lower CAC" },
    { num: "$50M+", label: "Spend Managed" },
    { num: "200+", label: "Campaigns Live" },
  ],
  faqs: [
    { q: "What ad spend minimum do you require?", a: "We work with brands spending $5K/mo and up. Below that, the management fee eats the upside — we can recommend tools instead." },
    { q: "Do you produce the ad creative?", a: "Yes. We have in-house designers, motion editors and copywriters producing platform-native creative weekly." },
    { q: "How fast will I see results?", a: "Early signals show in 2–4 weeks. Stable scale and predictable ROAS usually around month 2–3 once we’ve found winning creative and audiences." },
    { q: "Do you handle landing pages?", a: "Yes — we design and build landing pages tuned for each campaign, then split-test them for higher conversion." },
  ],
};

export default function Page() {
  return (
    <ServiceTemplate data={data}>
      <ServiceEducation data={educationData} />
    </ServiceTemplate>
  );
}
