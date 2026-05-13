import ServiceTemplate from "@/components/service-template/ServiceTemplate";
import ServiceEducation from "@/components/service-education/ServiceEducation";
import designBanner from "../../../assets/images/services/desiging.jpg";

const educationData = {
  title: "How Design Works —",
  titleAccent: "and Why It Matters",
  lead: "Great design isn't a single Figma file. It's a four-phase loop — discover, sketch, refine, deliver — that turns raw business goals into a brand and product experience customers actually remember.",
  steps: [
    {
      title: "Discover",
      short: "Discover",
      text: "Brand workshop, audience interviews, competitive teardown and a mood board. We agree on the visual direction and personality before any pixels get pushed.",
    },
    {
      title: "Sketch",
      short: "Sketch",
      text: "Low-fidelity wireframes and brand-mark exploration. Multiple directions on the table, fast iteration cycles, your team voting on the strongest path forward.",
    },
    {
      title: "Refine",
      short: "Refine",
      text: "High-fidelity mockups, full design system, micro-interactions and edge cases. Every screen and asset polished to production quality with your sign-off at each milestone.",
    },
    {
      title: "Deliver",
      short: "Deliver",
      text: "Organized Figma files, exported assets, dev-ready specs and a brand guidelines doc. Your team can keep building consistently long after we ship the final deliverable.",
    },
  ],
  benefitsTitle: "Six reasons great design is",
  benefitsTitleAccent: "your unfair competitive advantage",
  benefits: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: "Brand Recognition",
      text: "A distinct visual identity makes you memorable. Customers who recognize your brand convert at 2–3× the rate of cold visitors — and they stick around longer.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Instant Trust",
      text: "75% of users judge credibility based on visual design alone (Stanford study). Polished design says \"we take our craft seriously\" before a word is read.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: "Conversion Lift",
      text: "Hierarchy, contrast and white space guide users to the next action. Most redesigns we ship measure a 15–40% lift on the primary conversion metric.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      title: "Design System Scale",
      text: "A real design system means every new page, ad and product feature ships consistently — no Frankenstein UI as the team grows.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Faster Iteration",
      text: "Strong design systems and clean Figma files mean tweaks ship in hours, not weeks — your team can experiment without breaking the brand.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Accessibility By Default",
      text: "WCAG-compliant color, type and touch targets aren't an afterthought — they're built into every component from day one.",
    },
  ],
};

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
  return (
    <ServiceTemplate data={data}>
      <ServiceEducation data={educationData} />
    </ServiceTemplate>
  );
}
