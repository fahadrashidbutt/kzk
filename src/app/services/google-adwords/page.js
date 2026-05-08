import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import gaBanner from "../../../assets/images/services/google-award.jpg";

export const metadata = {
  title: "Google AdWords | KZK Services",
  description:
    "Google Ads management — campaign strategy, conversion tracking, ad copy testing and ROAS-focused optimization for businesses across the USA.",
};

const data = {
  bannerImage: gaBanner,
  badge: "Google AdWords",
  titleLead: "Maximize your reach with",
  titleAccent: "expert Google Ads management.",
  subtitle:
    "In the competitive digital marketplace, getting noticed is essential. We help your business reach its target audience efficiently, drive high-quality traffic, and increase conversions.",
  heroIcon: "▲",
  intro: {
    eyebrow: "KZK Google AdWords",
    lead: "Ad spend that pays for itself —",
    accent: "month after month.",
    paragraphs: [
      "In the competitive digital marketplace, getting noticed is essential. At KZK, we specialize in Google AdWords management to help your business reach its target audience efficiently and effectively. Our tailored strategies are designed to maximize your ad spend, drive high-quality traffic, and increase conversions.",
      "Crafting the perfect ad campaign requires a deep understanding of your audience and objectives. We develop customized Google AdWords strategies that align with your business goals. Our team conducts thorough market research and competitor analysis to create ads that capture attention and drive results.",
      "Reaching local customers can significantly boost your business. We offer specialized local Google AdWords campaigns designed to target customers in your specific area. By leveraging location-based keywords and ad placements, we ensure your business stands out in local searches and attracts nearby customers.",
    ],
    bullets: [
      "Custom campaign strategy tied to your real business goals.",
      "Conversion tracking and server-side analytics set up properly.",
      "Continuous A/B testing of ad copy, audiences and bids.",
      "Landing page design tuned for each campaign for higher conversion.",
      "Transparent reporting tied to revenue, not just clicks.",
    ],
  },
  benefits: [
    { icon: "▲", title: "Higher ROAS", text: "Better targeting + creative optimization lifts return on ad spend month over month." },
    { icon: "✦", title: "Lower CAC", text: "Smarter audience selection drops customer acquisition cost." },
    { icon: "◆", title: "Real Conversions", text: "Server-side tracking captures real conversions, not just last-click." },
    { icon: "▣", title: "Brand Search Defense", text: "Ad strategy that protects your brand from competitor bidders." },
    { icon: "◉", title: "Local Visibility", text: "Be the first business shown for high-intent local searches." },
    { icon: "⚡", title: "Rapid Iteration", text: "Daily optimization, weekly reviews, monthly strategy resets." },
  ],
  deliverables: [
    {
      icon: "◐",
      title: "Customized Ad Strategies",
      text: "We develop customized Google AdWords strategies that align with your business goals. Thorough market research and competitor analysis create ads that capture attention and drive results.",
    },
    {
      icon: "▤",
      title: "Targeted Local Campaigns",
      text: "Specialized local AdWords campaigns designed to target customers in your specific area. Location-based keywords and placements ensure your business stands out in local searches.",
    },
    {
      icon: "◰",
      title: "Conversion Tracking & Analysis",
      text: "Robust conversion tracking and analysis to measure the effectiveness of your campaigns. We provide insights and recommendations to refine your strategy and boost conversions.",
    },
    {
      icon: "▦",
      title: "Ad Copy Optimization",
      text: "Continuous improvement is key. We analyze performance data, test different ad copies, and adjust bids to maximize ROI from every campaign you run.",
    },
    {
      icon: "✦",
      title: "Campaign Monitoring",
      text: "Continuous monitoring with real-time tweaks to bids, keywords, and ad placements — keeping a close eye on performance for ongoing success.",
    },
    {
      icon: "◉",
      title: "Reporting & Analytics",
      text: "Detailed reports with click-through rates, conversion rates, and ROI. Clear, actionable data that lets you make informed decisions.",
    },
  ],
  process: [
    {
      title: "Discovery & Audit",
      text: "Understand your business goals, target audience, and existing campaigns. We benchmark current performance and identify the biggest opportunities.",
    },
    {
      title: "Strategy & Setup",
      text: "Build out customized campaigns with proper account structure, ad groups, keywords, audiences, conversion tracking, and remarketing lists.",
    },
    {
      title: "Launch & Optimize",
      text: "Go live with a controlled budget. Test ad copies, refine bids, expand winning audiences, and pause underperformers daily.",
    },
    {
      title: "Report & Iterate",
      text: "Weekly performance check-ins, monthly written report with insights tied to your business outcomes — not just clicks.",
    },
  ],
  tech: [
    "Google Ads",
    "Google Analytics 4",
    "Google Tag Manager",
    "Google Search Console",
    "Looker Studio",
    "SEMrush",
    "Optmyzr",
    "Hotjar",
    "Microsoft Ads",
  ],
  stats: [
    { num: "3×", label: "Avg ROAS" },
    { num: "50%", label: "Lower CPA" },
    { num: "$50M+", label: "Spend Managed" },
    { num: "200+", label: "Active Campaigns" },
  ],
  faqs: [
    {
      q: "What's the minimum ad spend you work with?",
      a: "We typically work with brands spending $3K/month and up. Below that, our management fee starts to eat into the upside — we can recommend tools or self-serve resources for smaller budgets.",
    },
    {
      q: "Do you create the ad creatives and copy?",
      a: "Yes — our team includes copywriters and designers who produce platform-native ad creative. We A/B test multiple variations and continuously refine based on performance data.",
    },
    {
      q: "How quickly will I see results from Google Ads?",
      a: "Google Ads can drive traffic immediately, but real ROI typically materializes in 2–4 weeks once we've gathered enough conversion data to optimize. Stable, scalable performance usually emerges around month 2–3.",
    },
    {
      q: "Do you handle landing pages too?",
      a: "Yes. We can design and build landing pages optimized for each campaign, then split-test them to maximize conversion rate. Most successful campaigns require dedicated landing pages — generic homepage clicks rarely convert well.",
    },
    {
      q: "How do you measure success and ROI?",
      a: "Server-side conversion tracking + GA4 + custom dashboards. We track click-through rate, cost-per-conversion, ROAS, and most importantly, revenue attributed to ad spend. Monthly reports tie everything to your bottom line.",
    },
  ],
};

export default function Page() {
  return <ServiceTemplate data={data} />;
}
