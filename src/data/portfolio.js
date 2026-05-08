import portfolio1 from "../assets/images/portfolio/portfolio-1.webp";
import portfolio2 from "../assets/images/portfolio/portfolio-2.webp";
import portfolio3 from "../assets/images/portfolio/portfolio-3.webp";
import portfolio4 from "../assets/images/portfolio/portfolio-4.webp";
import portfolio5 from "../assets/images/portfolio/portfolio-5.webp";

const SITE_URL = "https://kzkservices.com";

// Build share URLs that point at the actual case-study route for each project
// (e.g. /portfolio/uptown-bus) — never stale demo slugs.
const buildShare = (slug, title) => {
  const url = `${SITE_URL}/portfolio/${slug}/`;
  const text = encodeURIComponent(title);
  return {
    twitter: `https://twitter.com/share?url=${url}&text=${text}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`,
  };
};

const projects = [
  {
    slug: "uptown-bus",
    title: "Uptown Bus",
    category: "Website Development",
    location: "Maryland, Virginia, and the Washington, D.C. area",
    website: "www.uptownbus.com",
    websiteUrl: "https://www.uptownbus.com",
    image: portfolio1,
    year: "2024",
    about:
      "Uptown Bus offers luxury party bus rental and limo bus rental in Maryland, Virginia, and the Washington, D.C. area. We accommodate any and every special occasion — from sweet sixteens and proms to bachelor or bachelorette parties and weddings. We even offer shuttle services for classy corporate and government events.",
    features: [],
    tags: ["Web", "SEO", "Branding"],
    metrics: [
      { num: "+312%", label: "Organic Traffic" },
      { num: "5×", label: "Conversions" },
      { num: "98", label: "Lighthouse" },
    ],
  },
  {
    slug: "the-great-mile",
    title: "The Great Mile",
    category: "Website Development",
    location: "Texas, USA",
    website: "www.thegreatmile.com",
    websiteUrl: "https://www.thegreatmile.com",
    image: portfolio2,
    year: "2024",
    about:
      "The Great Mile is a customer-centric company with years of experience in the industry. Their team comprises highly skilled professionals dedicated to providing top-notch support services across multiple channels. They have a proven track record of delivering exceptional results for clients across customer service, technical support, back-office solutions, and IT consulting. Their commitment to leveraging advanced technology — including artificial intelligence and machine learning — enables them to deliver innovative solutions tailored to the unique needs of businesses across many sectors, all with a relentless focus on quality and customer satisfaction.",
    features: [],
    tags: ["Web", "Performance"],
  },
  {
    slug: "cosmo-solaris",
    title: "Cosmo Solaris",
    category: "Website Development",
    location:
      "Texas, Virginia, West Virginia, Maryland, Pennsylvania, North Carolina, Georgia, and Washington",
    website: "www.cosmosolaris.com",
    websiteUrl: "https://www.cosmosolaris.com",
    image: portfolio3,
    year: "2023",
    about:
      "Cosmo Solaris envisions a world powered by green energy — advancing environmental harmony and economic growth in equal measure. They're committed to building a brighter tomorrow by leading the renewable-energy revolution. With 174 in-house employees and local offices in Texas, Virginia, West Virginia, Maryland, Pennsylvania, North Carolina, Georgia, and Washington, they are licensed electrical contractors in all of those states. They never subcontract: every part of the job is done under their own name. They also offer easy installment plans to make solar more affordable and accessible.",
    features: [],
    tags: ["Web", "UI/UX"],
  },
  {
    slug: "drive-n-deliver",
    title: "Drive n Deliver",
    category: "Website Development",
    location: "Texas, United States",
    website: "www.drivendeliver.us",
    websiteUrl: "https://www.drivendeliver.us",
    image: portfolio4,
    year: "2023",
    about:
      "Drive n Deliver is a dynamic dispatch company dedicated to providing efficient and reliable services that meet the unique transportation needs of their clients. With a passion for logistics and a commitment to excellence, they've established themselves as a trusted partner in the industry.",
    features: [
      "Best Logistics",
      "Cargo Security",
      "24-Hour Support",
      "Any Payment Method",
    ],
    tags: ["Web", "App"],
  },
  {
    slug: "katy-limo",
    title: "Katy Limo",
    category: "Website Development",
    location: "Houston and Katy, Texas",
    website: "www.katy.limo",
    websiteUrl: "https://www.katy.limo",
    image: portfolio5,
    year: "2024",
    about:
      "Katy Limo's car transportation is reliable and on-time, every time: courteous service, English-speaking drivers, and non-smoking, spotlessly clean vehicles. They give you up-front pricing with no surprises.",
    features: [],
    tags: ["Web", "Transportation"],
  },
];

export const portfolios = projects.map((p) => ({
  ...p,
  share: buildShare(p.slug, p.title),
}));

export const getPortfolioBySlug = (slug) =>
  portfolios.find((p) => p.slug === slug);
