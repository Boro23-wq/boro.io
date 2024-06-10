import "./global.css";
import Head from "next/head";
import { Newsreader } from "next/font/google";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import DynamicFavicon from "./components/dynamic-favicon";

const newsreader = Newsreader({
  style: ["italic"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Home | Boro",
    template: "%s | Boro",
  },
  description: "Developer, and blogger.",
  openGraph: {
    title: "Sintu Boro",
    description: "Developer, and blogger.",
    url: baseUrl,
    siteName: "Sintu Boro",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://example.com/icon.png", // Default icon
    apple: "/favicons/apple-icon.png", // Apple touch icon
    other: [
      {
        rel: "icon",
        url: "favicons/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "favicons/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "favicons/favicon-60x60.png",
        sizes: "60x60",
      },
      {
        rel: "icon",
        url: "favicons/favicon-192x192.png",
        sizes: "192x192",
      },
      { rel: "shortcut icon", url: "favicons/favicon.ico" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]'",
        GeistSans.className,
        newsreader.variable
      )}
    >
      <Head>
        <DynamicFavicon />
      </Head>
      <body className="antialiased max-w-2xl mx-4 mt-14 lg:mx-auto">
        <div className="blur" aria-hidden="true"></div>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
