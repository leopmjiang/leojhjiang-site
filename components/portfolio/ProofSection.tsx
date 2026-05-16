import { proofPoints } from "@/data/portfolio";
import { Section } from "./ui";

export function ProofSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Why recruiters should keep reading
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Not a generic PM. A product operator for technical, messy, high-stakes environments.
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
    </Section>
  );
}
