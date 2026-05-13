import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import ServiceEducation from "@/components/service-education/ServiceEducation";
import gaBanner from "../../../assets/images/services/google-award.jpg";

const educationData = {
  title: "How Google Ads Works —",
  titleAccent: "and Why It Matters",
  lead: "Profitable Google Ads is a discipline, not a launch button. We run a tight four-phase cycle: setup, launch, optimize, scale — with every dollar tied back to a conversion and every campaign reviewed weekly.",
  steps: [
    {
      title: "Setup",
      short: "Setup",
      text: "Account audit (or fresh build), conversion tracking via GA4 + server-side, keyword research, negative-keyword library and ad copy testing matrix all locked in before launch.",
    },
    {
      title: "Launch",
      short: "Launch",
      text: "Campaigns go live across Search, Performance Max, Shopping or YouTube — whichever the data says wins fastest. Every ad group structured for clear cost-per-conversion tracking.",
    },
    {
      title: "Optimize",
      short: "Optimize",
      text: "Daily bid adjustments, weekly creative iteration, search-term mining and negative-keyword pruning. Bad placements get cut in days, not after a quarterly review.",
    },
    {
      title: "Scale",
      short: "Scale",
      text: "Once cost-per-conversion is below target, we scale budget and explore adjacent keywords, audiences and channels — protecting ROAS as spend grows.",
    },
  ],
  benefitsTitle: "Six reasons Google Ads is",
  benefitsTitleAccent: "the fastest way to fill your pipeline",
  benefits: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Immediate Traffic",
      text: "SEO takes months. Google Ads delivers qualified buyers searching for your service the moment a campaign launches — same day.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: "Pure Buying Intent",
      text: "Search-ads visitors are actively looking to buy. No demographic guessing — just \"someone typed exactly what I sell into Google.\"",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Granular Control",
      text: "Budgets, bids, ad copy, audiences and placements — all adjustable in real time. No black-box decisions; every dial is yours to turn.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Transparent ROAS",
      text: "Server-side conversion tracking shows exact revenue per ad dollar. Reports tie every campaign to bottom-line impact, not just clicks.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Geo-Targeted Reach",
      text: "Run a campaign in a single zip code or 20 countries — the same dashboard handles both. Perfect for local services and national brands alike.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
      title: "Fast A/B Iteration",
      text: "Ad copy, landing pages and offers tested side-by-side every week. Winners win bigger, losers get cut — the program compounds month over month.",
    },
  ],
};

export const metadata = {
  title: "Google AdWords",
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
  return (
    <ServiceTemplate data={data}>
      <ServiceEducation data={educationData} />
    </ServiceTemplate>
  );
}
