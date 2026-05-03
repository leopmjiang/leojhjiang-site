import { operatingSystem } from "@/data/portfolio";
import { Card, Eyebrow, PrimaryLink, SecondaryLink } from "./ui";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Eyebrow>
            Product Manager · Complex Systems · AI Simulation · Enterprise SaaS
          </Eyebrow>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            I build product clarity for complex, data-driven platforms.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            I’m Leo Jiang, a product manager with experience leading enterprise
            SaaS products, simulation workflows, operational platforms, and
            cross-functional delivery from discovery to release.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryLink href="#case-studies">View case studies</PrimaryLink>
            <SecondaryLink href="#experience">See experience</SecondaryLink>
          </div>
        </div>

        <Card className="p-5 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm text-neutral-400">
              Product Operating System
            </span>
            <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
              Available now
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {operatingSystem.map((item, index) => (
              <div
                key={item}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-orange-400/50 hover:bg-orange-400/10"
              >
                <span className="font-medium text-neutral-200">{item}</span>
                <span className="text-sm text-neutral-500 group-hover:text-orange-300">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
