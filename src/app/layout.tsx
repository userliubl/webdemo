import type { Metadata } from "next";
import { BackToTop } from "@/components/BackToTop";
import { SiteHeader } from "@/components/SiteHeader";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { zh } from "@/i18n/dictionaries/zh";
import "./globals.css";

/** 默认 metadata 走中文（静态导出，浏览器 tab 标题构建时已写死） */
export const metadata: Metadata = {
  title: {
    default: zh.meta.title,
    template: `%s · ${zh.meta.title}`,
  },
  description: zh.meta.description,
  keywords: zh.meta.keywords,
  openGraph: {
    title: zh.meta.title,
    description: zh.meta.description,
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
        <LocaleProvider>
          <SiteHeader />
          {children}
          <BackToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
