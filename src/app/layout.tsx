import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Noto_Sans_Ethiopic } from "next/font/google";
import { COMPANY } from "@/data/constants";
import { translations } from "@/data/translations";
import { AppProviders } from "@/components/providers/AppProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { BackToTop } from "@/components/layout/BackToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const heading = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const ethiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "600"],
  variable: "--font-noto",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: translations.en.meta.home.title,
    template: "%s",
  },
  description: translations.en.meta.home.description,
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const langScript = `(function(){try{var l=localStorage.getItem("ebron-lang");if(l==="en"||l==="am"){document.documentElement.lang=l;document.cookie="ebron-lang="+l+"; path=/; max-age=31536000; SameSite=Lax";}}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${heading.variable} ${body.variable} ${ethiopic.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">
        <AppProviders>
          <SkipLink />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
        </AppProviders>
        <JsonLd />
      </body>
    </html>
  );
}
