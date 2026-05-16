import { metrics } from "@/data/portfolio";
import { Section } from "./ui";

export function MetricsSection() {
  return (
    <Section ariaLabel="Career metrics" className="pt-0">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20"
          >
            <strong className="block text-4xl font-semibold tracking-tight text-orange-300">
              {item.value}
            </strong>
            <span className="mt-2 block text-sm text-neutral-400">{item.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
