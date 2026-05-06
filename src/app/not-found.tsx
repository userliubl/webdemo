import type { Metadata } from "next";
import NotFoundClient from "./NotFoundClient";
import { zh } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zh.notFound.pageTitle,
  description: zh.notFound.pageDescription,
};

export default function NotFound() {
  return <NotFoundClient />;
}
