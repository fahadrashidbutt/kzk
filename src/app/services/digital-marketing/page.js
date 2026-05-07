import ServiceTemplate from "@/components/service-template/ServiceTemplate";

export const metadata = {
  title: "Digital Marketing | KZK Services",
  description:
    "Performance digital marketing — paid ads, social, email and content programs that move pipeline.",
};

const data = {
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
    { icon: "◐", title: "Paid Ads", text: "Google, Meta, TikTok, LinkedIn — strategy, creative, targeting, optimization." },
    { icon: "▤", title: "Social Media", text: "Organic content calendars, community management and influencer programs." },
    { icon: "◰", title: "Email & SMS", text: "Klaviyo / Customer.io flows that convert and retain customers." },
    { icon: "▦", title: "Content Marketing", text: "Blogs, newsletters, video and short-form built around real keywords." },
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
  return <ServiceTemplate data={data} />;
}
