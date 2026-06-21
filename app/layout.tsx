import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "HomelessHelp — Find help. Give help. Understand homelessness.",
    template: "%s — HomelessHelp",
  },
  description:
    "A directory of shelters and crisis resources across the US and Canada, plus guides on how to help and learn about homelessness.",
  metadataBase: new URL("https://homelesshelp.net"),
  openGraph: {
    title: "HomelessHelp",
    description:
      "Find shelters, crisis hotlines, and ways to help people experiencing homelessness.",
    url: "https://homelesshelp.net",
    siteName: "HomelessHelp",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
