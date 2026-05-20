import { tools } from "@/data/portfolio";
import { Section, SectionHeader } from "./ui";

export function ToolbeltSection() {
  return (
    <Section id="field-notes">
      <SectionHeader
        eyebrow="Field notes"
        title="Curiosity, tools, and experiments that shape how I build."
        subtitle="From analytics tooling to lightweight prototypes, this is where ongoing experimentation supports better product judgment."
      />

      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="inline-flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-neutral-300 transition hover:-translate-y-0.5 hover:border-orange-400/50 hover:bg-white/[0.07] hover:text-white"
          >
            {"logo" in tool ? (
              <img
                src={tool.logo}
                alt=""
                className="h-5 w-5 rounded-sm object-contain"
              />
            ) : (
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-orange-400/20 bg-orange-400/10 px-1 text-[0.65rem] font-bold text-orange-300">
                {tool.fallback}
              </span>
            )}
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
