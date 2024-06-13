import "./global.css";
import { Newsreader } from "next/font/google";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

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
  icons: {
    apple: [
      {
        rel: "apple-touch-icon",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
        url: "/apple-touch-icon-light.png?v=2",
        fetchPriority: "high",
      },
      {
        rel: "icon",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
        url: "/apple-touch-icon-dark.png?v=2",
        fetchPriority: "high",
      },
    ],
    icon: [
      {
        rel: "icon",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
        url: "/icon-light.png?v=2",
        fetchPriority: "high",
      },
      {
        rel: "icon",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
        url: "/icon-dark.png?v=2",
        fetchPriority: "high",
      },
    ],
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
