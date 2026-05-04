import type { Metadata } from "next";
import { BackToTop } from "@/components/BackToTop";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";
import { siteMeta } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s · ${siteMeta.title}`,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen font-sans antialiased">
        <SiteHeader />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
