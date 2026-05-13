import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import ServiceEducation from "@/components/service-education/ServiceEducation";
import adBanner from "../../../assets/images/services/app-development.jpg";

const educationData = {
  title: "How App Development Works —",
  titleAccent: "and Why It Matters",
  lead: "A 5★-rated app is the output of a disciplined four-phase cycle: strategy → design → build & test → launch & care. Every screen, every transition and every push notification gets the same level of craft.",
  steps: [
    {
      title: "Strategy",
      short: "Strategy",
      text: "User-flow mapping, feature prioritization and a clear MVP scope. We decide together what ships in v1 — and what's deferred — so we never over-build before product-market fit.",
    },
    {
      title: "Design",
      short: "Design",
      text: "Native iOS and Android design language done right. Every screen prototyped in Figma, every interaction storyboarded. You approve the look and feel before we touch code.",
    },
    {
      title: "Build & Test",
      short: "Build & Test",
      text: "React Native or full native Swift / Kotlin builds, automated test suites, beta builds in TestFlight and Play Console. You and your stakeholders click around the real app weekly.",
    },
    {
      title: "Launch & Care",
      short: "Launch & Care",
      text: "Store submission, day-one monitoring with Sentry, OTA updates and an ongoing care plan covering crash analytics, store re-submissions and feature releases.",
    },
  ],
  benefitsTitle: "Six reasons a custom mobile app is",
  benefitsTitleAccent: "still the strongest engagement channel",
  benefits: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Native Feel, Cross-Platform Reach",
      text: "React Native (or native Swift/Kotlin where it matters) means one codebase ships to both stores while every gesture and animation still feels native.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      title: "Push & Re-engagement",
      text: "Push notifications, deep links and in-app messaging let you re-engage users where email can't reach — typically lifting retention by 40-60%.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Crash-Free Stability",
      text: "Sentry crash reporting, automated test coverage and OTA hotfixes keep your App Store rating in 4.7★+ territory year after year.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Offline-First Reliability",
      text: "Smart caching and offline data sync so your app keeps working in dead zones — train tunnels, basements, anywhere your users actually live.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Monetization Built In",
      text: "In-app purchases, subscriptions, RevenueCat integration, ad placements or all of the above — wired in cleanly, tracked properly, billed reliably.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Analytics & Iteration",
      text: "Funnel tracking, feature flags and A/B tests baked in. Every release is informed by real user behavior, not opinions in a meeting room.",
    },
  ],
};

export const metadata = {
  title: "App Development",
  description:
    "Native and cross-platform mobile apps engineered for iOS and Android — from MVP to scaled product.",
};

const data = {
  bannerImage: adBanner,
  badge: "App Development",
  titleLead: "Native-feeling mobile apps,",
  titleAccent: "shipped on iOS & Android",
  subtitle:
    "From MVP to scaled product, we design and build mobile apps users love and stores feature — using React Native, Swift and Kotlin.",
  heroIcon: "▢",
  intro: {
    eyebrow: "Mobile Done Right",
    lead: "Apps that feel fast on day one —",
    accent: "and stay that way.",
    paragraphs: [
      "Mobile users are unforgiving. Slow startup, janky animations, broken offline behavior — any one of those will cost you a 1-star review. We design and engineer around those failure modes from day one.",
      "Whether you’re launching a brand-new product or rebuilding a legacy app, our team handles UX research, design, native development, store submission and post-launch ops.",
    ],
    bullets: [
      "60fps animations and instant tap response on real devices.",
      "Offline-first sync so the app keeps working in spotty signal.",
      "Push, deep links, biometric auth and analytics out of the box.",
      "App Store / Play Store optimization for higher install rates.",
    ],
  },
  benefits: [
    { icon: "⚡", title: "60fps Smooth", text: "Buttery interactions tuned per platform — no laggy hybrid feel." },
    { icon: "◆", title: "Native UX", text: "Platform-correct gestures, navigation and components on iOS and Android." },
    { icon: "▲", title: "One Codebase", text: "React Native lets us ship 90% of the code to both stores at once." },
    { icon: "▣", title: "Scalable Backend", text: "APIs, auth, storage and real-time data on Firebase or AWS." },
    { icon: "✦", title: "App Store Ready", text: "Store assets, descriptions and submission handled end to end." },
    { icon: "◉", title: "Crash-Free", text: "Sentry, OTA updates and proactive monitoring keep ratings high." },
  ],
  deliverables: [
    { icon: "◐", title: "iOS Apps", text: "Swift / SwiftUI native builds when raw performance, custom gestures and platform feel are the priority." },
    { icon: "▤", title: "Android Apps", text: "Kotlin native builds with Material 3 and Jetpack Compose — modern Android done right." },
    { icon: "◰", title: "Cross-Platform Apps", text: "React Native or Flutter for one shared codebase shipped to both stores — 90% code reuse, real native feel." },
    { icon: "▦", title: "Backend & APIs", text: "Auth, payments, push notifications, analytics and admin dashboards — the full stack behind your app." },
    { icon: "✦", title: "App Store Optimization", text: "Store listings, screenshots, copy and ASO strategy that wins higher install rates and reviews." },
    { icon: "◉", title: "Care & Updates", text: "Monitoring, crash analytics, OTA updates and store re-submissions — your app stays at 4.8★ year after year." },
  ],
  process: [
    { title: "Discover", text: "Users, journeys and core flows mapped." },
    { title: "Prototype", text: "Clickable design tested with real users." },
    { title: "Build", text: "Sprints with weekly TestFlight builds." },
    { title: "Launch", text: "Store submission, monitoring, iteration." },
  ],
  tech: [
    "React Native",
    "Swift",
    "Kotlin",
    "Flutter",
    "Firebase",
    "AWS Amplify",
    "GraphQL",
    "Sentry",
    "Expo",
  ],
  stats: [
    { num: "60+", label: "Apps Shipped" },
    { num: "4.8★", label: "Avg Store Rating" },
    { num: "1M+", label: "End Users" },
    { num: "99.9%", label: "Crash-Free" },
  ],
  faqs: [
    { q: "Native or cross-platform — which is right for me?", a: "Depends on the product. We recommend cross-platform (React Native) for 80% of cases. For graphics-heavy or hardware-deep apps we go native. We help you pick during discovery." },
    { q: "Do you handle App Store and Play Store submission?", a: "Yes — including review responses, screenshots, copy, ASO and ongoing release management." },
    { q: "How long does a typical app take?", a: "MVPs run 8–12 weeks. Full products typically 12–20 weeks. We give you a detailed timeline before kickoff." },
    { q: "Can you take over an existing app?", a: "Absolutely. We do code audits, performance work and rebuilds on apps that have been kicked around by previous teams." },
  ],
};

export default function Page() {
  return (
    <ServiceTemplate data={data}>
      <ServiceEducation data={educationData} />
    </ServiceTemplate>
  );
}
