import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { SITE, SOCIALS } from "@/lib/site";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "CodeHubb — Web Design, E-Commerce, Apps & AI Solutions",
    template: "%s | CodeHubb",
  },
  description:
    "CodeHubb designs and builds fast, conversion-focused websites, e-commerce stores, mobile apps and AI solutions for businesses in Pakistan and worldwide.",
  keywords: [
    "web design agency",
    "website development Pakistan",
    "ecommerce website",
    "mobile app development",
    "AI chatbot",
    "WhatsApp checkout",
  ],
  authors: [{ name: "CodeHubb" }],
  creator: "CodeHubb",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.domain,
    siteName: "CodeHubb",
    title: "CodeHubb — Web Design, E-Commerce, Apps & AI Solutions",
    description:
      "Fast, conversion-focused websites, stores, apps and AI solutions. Design. Develop. Dominate.",
    images: [
      {
        url: "/images/mindcrafts-logo.jpg",
        width: 2186,
        height: 529,
        alt: "MindCrafts AI — Think. Create. Automate.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeHubb — Web Design, E-Commerce, Apps & AI Solutions",
    description:
      "Fast, conversion-focused websites, stores, apps and AI solutions.",
    images: ["/images/mindcrafts-logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#04141d",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodeHubb",
  url: SITE.domain,
  slogan: SITE.tagline,
  email: SITE.email,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: SITE.whatsappUrl,
  },
  department: {
    "@type": "Organization",
    name: SITE.division,
    description: `The AI division of CodeHubb — AI chatbots, automation and AI integrations.`,
  },
  sameAs: [
    SOCIALS.facebook,
    SOCIALS.github,
    SOCIALS.linkedin,
    SOCIALS.whatsappChannel,
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('codehubb-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
        }}
      />
      <body>
        <JsonLd data={orgJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          className="wa-float"
          href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hi CodeHubb!")}`}
          target="_blank"
          rel="noopener"
          aria-label="Chat with CodeHubb on WhatsApp"
        >
          ✆
        </a>
      </body>
    </html>
  );
}
