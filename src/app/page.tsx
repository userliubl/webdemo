import { AmbientBackground } from "@/components/AmbientBackground";
import { AboutBlock } from "@/components/AboutBlock";
import { Hero } from "@/components/Hero";
import { PaperList } from "@/components/PaperList";
import { ResearchGrid } from "@/components/ResearchGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { TeamGrid } from "@/components/TeamGrid";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-transparent">
      <AmbientBackground />
      <main className="relative">
        <Hero />
        <AboutBlock />
        <ResearchGrid />
        <TeamGrid />
        <PaperList />
      </main>
      <SiteFooter />
    </div>
  );
}
