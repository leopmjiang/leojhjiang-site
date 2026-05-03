import { Hero } from "@/components/portfolio/Hero";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { StrengthsSection } from "@/components/portfolio/StrengthsSection";
import { CaseStudiesSection } from "@/components/portfolio/CaseStudiesSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function PortfolioHomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteHeader />
      <Hero />
      <StrengthsSection />
      <CaseStudiesSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
