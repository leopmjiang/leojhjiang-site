import { whatIBuild } from "@/data/portfolio";
import { Card, Section, SectionHeader } from "./ui";

export function WhatIBuildSection() {
  return (
    <Section id="builder-lab-preview">
      <SectionHeader
        eyebrow="What I build"
        title="A recruiter-first portfolio with builder depth"
        subtitle="Career, case studies, prototypes, games, and field notes all support one message: practical product judgment in complex systems."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {whatIBuild.map((item) => (
          <Card key={item.title} className="p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">{item.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
