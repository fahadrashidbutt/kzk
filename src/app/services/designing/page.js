import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import designBanner from "../../../assets/images/services/desiging.jpg";

export const metadata = {
  title: "Designing",
  description:
    "Brand identity, UI/UX and product design that looks beautiful and converts — from logo to launch.",
};

const data = {
  bannerImage: designBanner,
  badge: "Design",
  titleLead: "Design that looks beautiful",
  titleAccent: "and earns its place",
  subtitle:
    "Logos, brand systems, websites and product UI — designed to be loved by users and to drive the metrics your business cares about.",
  heroIcon: "◆",
  intro: {
    eyebrow: "Design With Intent",
    lead: "Beautiful is the baseline —",
    accent: "performance is the point.",
    paragraphs: [
      "Design that wins awards but doesn’t convert is just decoration. Our team blends brand craft with conversion thinking so the work feels premium and pulls its weight.",
      "From the first sketch of a logo to a fully shipped product UI, every decision is grounded in user research, competitive context and the actions you want people to take.",
    ],
    bullets: [
      "Brand systems that scale across web, app, social and print.",
      "UX research and prototyping before a single pixel ships.",
      "Component libraries devs love and designers maintain easily.",
      "Motion, micro-interactions and details that elevate the whole.",
    ],
  },
  benefits: [
    { icon: "◆", title: "Distinct Identity", text: "Brands that don’t blend in — visual systems built around what makes you different." },
    { icon: "✦", title: "Higher Conversion", text: "UX patterns and visual hierarchy that move users toward action." },
    { icon: "▲", title: "Consistent System", text: "Tokens, components and guidelines so every surface stays on-brand." },
    { icon: "▣", title: "Production-Ready", text: "Hand-off in Figma with specs, tokens and Storybook integration." },
    { icon: "◉", title: "Accessible by Default", text: "WCAG-compliant color, contrast, typography and interaction patterns." },
    { icon: "⚡", title: "Motion That Matters", text: "Micro-interactions and transitions that feel intentional, not decorative." },
  ],
  deliverables: [
    { icon: "◐", title: "Brand Identity", text: "Logo, typography, color, voice, photography direction and full brand guidelines — a system, not just a logo." },
    { icon: "▤", title: "UI/UX Design", text: "Web and app interfaces with user research, wireframes, hi-fi prototypes and developer-ready Figma hand-off." },
    { icon: "◰", title: "Design Systems", text: "Reusable component libraries with tokens, variants, accessibility specs and documentation in Figma + Storybook." },
    { icon: "▦", title: "Marketing Design", text: "Social creative, ad sets, sales decks, illustration, packaging and event graphics — all on-brand." },
    { icon: "✦", title: "Motion & Animation", text: "Lottie animations, micro-interactions, scroll-driven storytelling and product-demo motion that elevates the whole." },
    { icon: "◉", title: "Web Design", text: "Marketing-site visual design with conversion-tuned hierarchy — shipped to dev or built by our engineers in-house." },
  ],
  process: [
    { title: "Research", text: "Audience, competitors and brand audit." },
    { title: "Concept", text: "Directions, mood boards, key visuals." },
    { title: "Design", text: "Iterate, prototype, validate, refine." },
    { title: "Deliver", text: "Files, tokens, guidelines, hand-off." },
  ],
  tech: [
    "Figma",
    "Adobe CC",
    "Framer",
    "After Effects",
    "Webflow",
    "Storybook",
    "Lottie",
  ],
  stats: [
    { num: "120+", label: "Brand Projects" },
    { num: "20+", label: "Design Awards" },
    { num: "100%", label: "WCAG Compliant" },
    { num: "5★", label: "Client Rating" },
  ],
  faqs: [
    { q: "Can you work with our existing brand?", a: "Absolutely. Whether you need a refresh, an extension into new surfaces or just dev-ready UI on top of an existing system, we plug in cleanly." },
    { q: "Do you deliver in Figma or Sketch?", a: "Figma is our default. We deliver fully organized files with components, variants, tokens and auto-layout — ready for dev hand-off." },
    { q: "How many revisions do I get?", a: "We work in directions rather than counting rounds. Each phase has structured feedback windows so we converge on the right answer fast." },
    { q: "Do you handle development too?", a: "Yes — our engineering team can take the design straight into Next.js or React Native, so the final product matches the spec exactly." },
  ],
};

export default function Page() {
  return <ServiceTemplate data={data} />;
}
