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

export const metadata = {
  title: {
    default: "KZK Services | Premier Digital Agency for SEO, Web & App Development",
    template: "%s | KZK Services",
  },
  description:
    "KZK Services is a US digital agency blending SEO, web development, app development, design and growth strategy into one team that helps ambitious brands outrank, outperform and outlast their competition.",
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