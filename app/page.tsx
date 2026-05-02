export default function PortfolioHomePage() {
  const strengths = [
    {
      title: "Product Strategy",
      detail: "Turning ambiguous business goals into clear product direction, tradeoffs, and execution plans.",
    },
    {
      title: "Complex Systems",
      detail: "Experience with operational platforms, simulation workflows, data-heavy products, and multi-user environments.",
    },
    {
      title: "Execution Discipline",
      detail: "Roadmaps, backlog structure, prioritization, release planning, and cross-functional alignment.",
    },
    {
      title: "UX & Discovery",
      detail: "Prototype-first product development grounded in customer workflows and real operational constraints.",
    },
  ];

  const experience = [
    {
      company: "Stream Systems",
      role: "Product Manager",
      period: "2023–2026",
      description:
        "Led product strategy and roadmap execution for a cloud-based AI simulation platform used by mining operators to evaluate operational scenarios before execution.",
    },
    {
      company: "Wenco International Mining Systems",
      role: "Product Manager / Product Owner",
      period: "2017–2023",
      description:
        "Owned product roadmaps and agile backlogs across enterprise fleet management products used by mining operations globally.",
    },
  ];

  const caseStudies = [
    {
      label: "Simulation Platform",
      title: "Helping operators evaluate what-if scenarios before execution",
      outcome: "Converted complex operational workflows into a structured simulation product experience.",
    },
    {
      label: "Roadmap Discipline",
      title: "Balancing customer commitments, platform work, and delivery capacity",
      outcome: "Improved focus by translating broad demand into clear themes, initiatives, and delivery priorities.",
    },
    {
      label: "Workflow UX",
      title: "Designing tools for users working in constrained operational environments",
      outcome: "Used prototypes, SME feedback, and customer validation to reduce ambiguity before development.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
              Product Manager · Complex Systems · AI Simulation · Enterprise SaaS
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              I build product clarity for complex, data-driven platforms.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              I’m Leo Jiang, a product manager with experience leading enterprise SaaS products, simulation workflows, operational platforms, and cross-functional delivery from discovery to release.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#case-studies"
                className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
              >
                View case studies
              </a>
              <a
                href="#experience"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-300 hover:text-orange-200"
              >
                See experience
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-[1.5rem] bg-neutral-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-neutral-400">Product operating system</span>
                <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
                  Available now
                </span>
              </div>
              <div className="grid gap-3">
                {[
                  "Customer discovery",
                  "Roadmap strategy",
                  "UX prototyping",
                  "Technical tradeoffs",
                  "Delivery alignment",
                  "Outcome measurement",
                ].map((item, index) => (
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
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">What I bring</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Product leadership across strategy, systems, UX, and delivery.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-orange-400/50 hover:bg-orange-400/10"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-neutral-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="case-studies" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Case studies I can walk through in detail.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-neutral-400">
            Each story is framed around the problem, users, constraints, tradeoffs, product decisions, and outcome.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-orange-400/60"
            >
              <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">
                {study.label}
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-7 text-white group-hover:text-orange-200">
                {study.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-neutral-400">{study.outcome}</p>
              <div className="mt-8 text-sm font-semibold text-orange-300">Explore story →</div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built in enterprise environments where clarity matters.
            </h2>
          </div>
          <div className="space-y-5">
            {experience.map((item) => (
              <article key={item.company} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                    <p className="mt-1 text-sm text-orange-300">{item.role}</p>
                  </div>
                  <span className="text-sm text-neutral-400">{item.period}</span>
                </div>
                <p className="mt-5 text-sm leading-6 text-neutral-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-orange-400/20 bg-orange-400/10 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Looking for a PM who can bring structure to complexity?
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-300">
                I’m interested in product roles focused on B2B SaaS, AI-enabled workflows, operational platforms, and complex user systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@example.com"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-orange-100"
              >
                Contact me
              </a>
              <a
                href="https://www.linkedin.com"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
