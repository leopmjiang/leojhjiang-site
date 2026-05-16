import { caseStudies } from "@/data/portfolio";
import { Card, Section, SectionHeader } from "./ui";

export function CaseStudiesSection() {
  return (
    <Section id="case-studies">
      <SectionHeader
        eyebrow="Selected work"
        title="Case studies I can walk through in detail."
        subtitle="Each story is framed around the problem, users, constraints, trade-offs, product decisions, and outcome."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Card
            key={study.title}
            className="group flex min-h-[26rem] flex-col bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-orange-400/60"
          >
            <div className="text-6xl font-semibold tracking-tighter text-white/10">
              0{index + 1}
            </div>
            <span className="mt-2 w-fit rounded-full bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">
              {study.label}
            </span>
            <h3 className="mt-6 text-xl font-semibold leading-7 text-white group-hover:text-orange-200">
              {study.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              {study.outcome}
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-neutral-400">
              {study.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
