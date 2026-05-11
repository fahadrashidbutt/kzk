// app/layout.js
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://kzkservices.com";
const SITE_TITLE =
  "KZK Services | Premier Digital Agency for SEO, Web & App Development";
const SITE_DESCRIPTION =
  "KZK Services is a US digital agency blending SEO, web development, app development, design and growth strategy into one team that helps ambitious brands outrank, outperform and outlast their competition.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | KZK Services",
  },
  description: SITE_DESCRIPTION,
  applicationName: "KZK Services",
  keywords: [
    "digital agency",
    "SEO services",
    "web development",
    "app development",
    "Google Business Profile",
    "digital marketing",
    "USA",
  ],
  authors: [{ name: "KZK Services" }],
  creator: "KZK Services",
  publisher: "KZK Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "KZK Services",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} ${openSans.variable}`}>
      <body suppressHydrationWarning>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}