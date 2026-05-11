import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import adBanner from "../../../assets/images/services/app-development.jpg";

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
  return <ServiceTemplate data={data} />;
}
