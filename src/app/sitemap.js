const SITE_URL = "https://kzkservices.com";

// Static routes (no dynamic data); portfolio detail routes are added below
// by mapping over the canonical portfolio data so the sitemap stays in sync.
const STATIC_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/web-development", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/app-development", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/seo", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/digital-marketing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/designing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/content-marketing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/google-adwords", changeFrequency: "monthly", priority: 0.7 },
  { path: "/google-my-business", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact-us", changeFrequency: "yearly", priority: 0.6 },
  { path: "/pay-now", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap() {
  const { portfolios } = await import("../data/portfolio");
  const now = new Date();

  const portfolioRoutes = portfolios.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const staticRoutes = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
