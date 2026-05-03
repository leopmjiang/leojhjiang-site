import { caseStudies } from "@/data/portfolio";
import { Card, Section, SectionHeader } from "./ui";

export function CaseStudiesSection() {
  return (
    <Section id="case-studies">
      <SectionHeader
        eyebrow="Selected work"
        title="Case studies I can walk through in detail."
        subtitle="Each story is framed around the problem, users, constraints, tradeoffs, product decisions, and outcome."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Card
            key={study.title}
            className="group bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-orange-400/60"
          >
            <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">
              {study.label}
            </span>
            <h3 className="mt-6 text-xl font-semibold leading-7 text-white group-hover:text-orange-200">
              {study.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              {study.outcome}
            </p>
            <div className="mt-8 text-sm font-semibold text-orange-300">
              Explore story →
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
