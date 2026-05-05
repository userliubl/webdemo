import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";
import { zh } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zh.team.pageTitle,
  description: zh.team.pageDescription,
};

export default function TeamPage() {
  return <TeamPageClient />;
}
