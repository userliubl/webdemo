import type { Metadata } from "next";
import WorksPageClient from "./WorksPageClient";
import { zh } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zh.works.pageTitle,
  description: zh.works.pageDescription,
};

export default function WorksPage() {
  return <WorksPageClient />;
}
