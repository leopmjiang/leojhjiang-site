import { labHighlights, proofPoints } from "@/data/portfolio";
import { Section } from "./ui";

export function ProofSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Why this portfolio is structured this way
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Product-builder range without losing recruiter clarity.
          </h2>
        </div>

        <div className="grid gap-4">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="grid grid-cols-[2rem_1fr] gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="text-orange-300" aria-hidden="true">
                ✦
              </span>
              <p className="text-neutral-300">{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="text-lg font-semibold text-white">Builder Lab preview</h3>
        <ul className="mt-4 space-y-2 text-sm text-neutral-300">
          {labHighlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
