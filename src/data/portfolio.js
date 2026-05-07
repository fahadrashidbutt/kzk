import portfolio1 from "../assets/images/portfolio/portfolio-1.webp";
import portfolio2 from "../assets/images/portfolio/portfolio-2.webp";
import portfolio3 from "../assets/images/portfolio/portfolio-3.webp";
import portfolio4 from "../assets/images/portfolio/portfolio-4.webp";
import portfolio5 from "../assets/images/portfolio/portfolio-5.webp";

export const portfolios = [
  {
    slug: "uptown-bus",
    title: "Uptown Bus",
    category: "Website Development",
    location: "Maryland, Virginia and the Washington D.C",
    website: "www.uptownbus.com",
    websiteUrl: "https://www.uptownbus.com",
    image: portfolio1,
    year: "2024",
    about:
      "Uptown Bus offers luxury party bus rental and limo bus rental in Maryland, Virginia and the Washington D.C. area. We accommodate any and every special occasion from sweet sixteens and proms to bachelor or bachelorette parties and weddings. We even offer our shuttle services for classy corporate and government events.",
    features: [],
    tags: ["Web", "SEO", "Branding"],
    metrics: [
      { num: "+312%", label: "Organic Traffic" },
      { num: "5×", label: "Conversions" },
      { num: "98", label: "Lighthouse" },
    ],
    share: {
      twitter:
        "https://twitter.com/share?url=https://kzkservices.com/portfolio/marketing-strategy/&text=Uptown%20Bus",
      facebook:
        "http://www.facebook.com/sharer.php?u=https://kzkservices.com/portfolio/marketing-strategy/",
      pinterest:
        "https://pinterest.com/pin/create/button/?url=https://kzkservices.com/portfolio/marketing-strategy/",
    },
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
      "The Great Mile is a customer-centric company with years of experience in the industry. Our team comprises highly skilled professionals who are dedicated to providing top-notch support services across multiple channels. We have a proven track record of delivering exceptional results for our clients, and we are confident that we can do the same for you. The Great Mile offers a wide range of services including customer service, technical support, back-office solutions, and IT consulting. Their commitment to leveraging advanced technology, such as artificial intelligence and machine learning, enables them to deliver innovative solutions tailored to the unique needs of businesses across various sectors. With a focus on quality and customer satisfaction.",
    features: [],
    tags: ["Web", "Performance"],
    share: {
      twitter:
        "https://twitter.com/share?url=https://kzkservices.com/portfolio/workspace-design/&text=The%20Great%20Mile",
      facebook:
        "http://www.facebook.com/sharer.php?u=https://kzkservices.com/portfolio/workspace-design/",
      pinterest:
        "https://pinterest.com/pin/create/button/?url=https://kzkservices.com/portfolio/workspace-design/",
    },
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
      "We view a world with green energy that empowers every corner of life, advancing towards environmental harmony and economic growth. We are committed to bringing about a brighter tomorrow by becoming part of the renewable energy revolution. We have 174 in-house employees and we have local offices in Texas, Virginia, West Virginia, Maryland, Pennsylvania, North Carolina, Georgia, and Washington. We are electrical licensed contractors in all of the mentioned states. We do not subcontract any of the jobs and we do each and every part of the project under our own name. We are also offering easy installment plans to make solar affordable and accessible to more and more people.",
    features: [],
    tags: ["Web", "UI/UX"],
    share: {
      twitter:
        "https://twitter.com/share?url=https://kzkservices.com/portfolio/lanscape/&text=Cosmo%20Solaris",
      facebook:
        "http://www.facebook.com/sharer.php?u=https://kzkservices.com/portfolio/lanscape/",
      pinterest:
        "https://pinterest.com/pin/create/button/?url=https://kzkservices.com/portfolio/lanscape/",
    },
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
      "Drive n Deliver is a dynamic dispatch company dedicated to providing efficient and reliable services to meet the unique transportation needs of our clients. With a passion for logistics and a commitment to excellence, we have established ourselves as a trusted partner in the industry.",
    features: [
      "Best Logistics",
      "Cargo security",
      "24-Hour Support",
      "Any Payment Method",
    ],
    tags: ["Web", "App"],
    share: {
      twitter:
        "https://twitter.com/share?url=https://kzkservices.com/portfolio/marketing-research/&text=Drive%20n%20Deliver",
      facebook:
        "http://www.facebook.com/sharer.php?u=https://kzkservices.com/portfolio/marketing-research/",
      pinterest:
        "https://pinterest.com/pin/create/button/?url=https://kzkservices.com/portfolio/marketing-research/",
    },
  },
  {
    slug: "katy-limo",
    title: "Katy Limo",
    category: "Website Development",
    location: "Houston and Katy",
    website: "www.katy.limo",
    websiteUrl: "https://www.katy.limo",
    image: portfolio5,
    year: "2024",
    about:
      "Our Katy limo, car transportation is reliable and on-time every time: courteous service, English speaking drivers, non-smoking vehicles and clean vehicles. We give you up-front pricing with no surprises.",
    features: [],
    tags: ["Web", "Transportation"],
    share: {
      twitter:
        "https://twitter.com/share?url=https://kzkservices.com/portfolio/organizational-audit/&text=Katy%20Limo",
      facebook:
        "http://www.facebook.com/sharer.php?u=https://kzkservices.com/portfolio/organizational-audit/",
      pinterest:
        "https://pinterest.com/pin/create/button/?url=https://kzkservices.com/portfolio/organizational-audit/",
    },
  },
];

export const getPortfolioBySlug = (slug) =>
  portfolios.find((p) => p.slug === slug);
