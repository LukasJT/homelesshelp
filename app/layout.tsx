import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ConsentBanner } from "@/components/ConsentBanner";
import { AdSenseScript } from "@/components/AdSenseScript";

export const metadata: Metadata = {
  title: {
    default: "HomelessHelp — Find shelters. Volunteer. Understand homelessness.",
    template: "%s — HomelessHelp",
  },
  description:
    "Free directory of homeless shelters and crisis resources across the US and Canada — plus a volunteer guide, donation playbook, and plain-language education on what works.",
  metadataBase: new URL("https://homelesshelp.net"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      fr: "/fr",
    },
  },
  openGraph: {
    title: "HomelessHelp",
    description:
      "Find shelters and crisis hotlines, or learn how to volunteer and donate effectively to help people experiencing homelessness.",
    url: "https://homelesshelp.net",
    siteName: "HomelessHelp",
    locale: "en_US",
    alternateLocale: ["es_US", "fr_CA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomelessHelp",
    description:
      "Find shelters and crisis hotlines, or learn how to volunteer and donate effectively to help people experiencing homelessness.",
  },
  other: {
    "application-name": "HomelessHelp",
    "theme-color": "#0f766e",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="HomelessHelp Learn"
          href="/feed.xml"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <AdSenseScript />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ConsentBanner />
      </body>
    </html>
  );
}
