import { CaseStudiesSection } from "@/components/portfolio/CaseStudiesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Hero } from "@/components/portfolio/Hero";
import { MetricsSection } from "@/components/portfolio/MetricsSection";
import { ProofSection } from "@/components/portfolio/ProofSection";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { StrengthsSection } from "@/components/portfolio/StrengthsSection";
import { ToolbeltSection } from "@/components/portfolio/ToolbeltSection";
import { WhatIBuildSection } from "@/components/portfolio/WhatIBuildSection";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <MetricsSection />
      <WhatIBuildSection />
      <ProofSection />
      <CaseStudiesSection />
      <StrengthsSection />
      <ExperienceSection />
      <ToolbeltSection />
      <ContactSection />
    </main>
  );
}
