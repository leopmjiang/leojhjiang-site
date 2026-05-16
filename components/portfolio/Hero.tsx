import { hero, operatingSystem } from "@/data/portfolio";
import { Card, Eyebrow, PrimaryLink, SecondaryLink } from "./ui";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryLink href="#case-studies">View case studies</PrimaryLink>
            <SecondaryLink href="#experience">See experience</SecondaryLink>
          </div>
        </div>

        <Card className="overflow-hidden p-5 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1">
            <div className="rounded-[2rem] border border-orange-400/20 bg-orange-400/10 p-3">
              <img
                src="/images/leo-headshot.jpeg"
                alt="Headshot of Leo Jiang"
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-neutral-950/70 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Current positioning
              </span>
              <h2 className="mt-3 text-xl font-semibold leading-7 text-white">
                {hero.positioning}
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {hero.bestFit}
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
