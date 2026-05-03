import { strengths } from "@/data/portfolio";
import { Card, Section, SectionHeader } from "./ui";

export function StrengthsSection() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="What I bring"
        title="Product leadership across strategy, systems, UX, and delivery."
        subtitle="I bring a mix of product strategy, technical fluency, workflow design, and delivery discipline shaped by enterprise software environments."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {strengths.map((item) => (
          <Card
            key={item.title}
            className="p-6 transition hover:-translate-y-1 hover:border-orange-400/50 hover:bg-orange-400/10"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {item.detail}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
