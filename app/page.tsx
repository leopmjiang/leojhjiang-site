import type React from "react";

const metrics = [
  { value: "8+", label: "years in product" },
  { value: "100+", label: "enterprise operations supported" },
  { value: "15+", label: "interconnected apps owned" },
  { value: "4,000+", label: "tickets reduced into focus" },
];

const proofPoints = [
  "Built PM operating models where none existed, turning fragmented execution into structured roadmap delivery.",
  "Owned platform decisions across simulation, AI/ML workflows, real-time operations, data ingestion, and analytics.",
  "Led cross-functional delivery across engineering, data science, QA, support, customer success, and executive stakeholders.",
];

const caseStudies = [
  {
    eyebrow: "Simulation platform",
    title: "From prototype to production-ready product",
    outcome: "Reduced a 2,000+ item backlog to roughly 100 prioritized items and introduced release discipline across a previously unstructured product organization.",
    details: ["Roadmap ownership across 7 to 10 quarterly initiatives", "Requirements, epic structure, acceptance standards, and release planning", "Beta feedback loops with enterprise mining customers"],
  },
  {
    eyebrow: "Execution speed",
    title: "Made simulation trade-offs visible and usable",
    outcome: "Helped reframe simulation execution around speed, fidelity, and decision confidence so users could get answers faster without hiding technical trade-offs.",
    details: ["KPI-only, reduced-fidelity, and high-fidelity execution paths", "Clear user-facing trade-offs between speed and diagnostic depth", "Advanced complexity reserved for power users"],
  },
  {
    eyebrow: "Enterprise platform",
    title: "Scaled FMS roadmap across global operations",
    outcome: "Owned roadmap and release planning for a real-time fleet management platform spanning 15+ applications and 100+ mining operations worldwide.",
    details: ["Delivery across 4 engineering teams", "On-site discovery with dispatch, maintenance, and operator workflows", "Executive visibility into risk, dependencies, and release health"],
  },
];

const capabilities = [
  { icon: "strategy", title: "Product strategy", copy: "Roadmaps, sequencing, MVP definition, prioritization, and trade-off decisions under real delivery pressure." },
  { icon: "technical", title: "Technical product fluency", copy: "Data-intensive platforms, simulation systems, AI-enabled workflows, integrations, and complex operational constraints." },
  { icon: "execution", title: "Execution leadership", copy: "Backlog governance, release planning, acceptance standards, QA alignment, and multi-team dependency management." },
  { icon: "discovery", title: "Customer discovery", copy: "On-site workflow observation, beta programs, demo feedback loops, and enterprise stakeholder alignment." },
  { icon: "systems", title: "Systems thinking", copy: "Comfortable mapping behaviour, constraints, dependencies, and operational consequences across complex platforms." },
  { icon: "ux", title: "UX for complexity", copy: "Wireframes, workflow modelling, progressive disclosure, and interfaces that make technical choices easier to understand." },
];

const timeline = [
  {
    role: "Product Manager",
    company: "Stream Systems",
    period: "2023 to 2026",
    copy: "First structured PM for a cloud-based AI simulation and optimization platform for mining operations. Built product discipline while moving the platform toward production readiness.",
  },
  {
    role: "Product Manager",
    company: "Wenco International Mining Systems",
    period: "2020 to 2023",
    copy: "Owned roadmap for a mission-critical Fleet Management System across 15+ applications used by dispatchers, operators, maintenance teams, and managers globally.",
  },
  {
    role: "Product Owner",
    company: "Wenco International Mining Systems",
    period: "2018 to 2020",
    copy: "Led backlog and sprint execution across up to 4 agile teams, reducing a 4,000+ ticket Jira backlog to under 500 actionable items in 6 months.",
  },
];

const tools = [
  { name: "Jira", logo: "https://cdn.simpleicons.org/jira" },
  { name: "Confluence", logo: "https://cdn.simpleicons.org/confluence" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Miro", logo: "https://cdn.simpleicons.org/miro" },
  { name: "SQL", fallback: "SQL" },
  { name: "Power BI", logo: "/logos/powerbi.svg" },
  { name: "Tableau", logo: "/logos/tableau.svg" },
  { name: "Aha!", logo: "/logos/aha.svg" },
  { name: "ProductPlan", fallback: "PP" },
  { name: "Streamlit", logo: "https://cdn.simpleicons.org/streamlit" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "Draw.io", logo: "https://cdn.simpleicons.org/diagramsdotnet" },
];

const capabilityIcons: Record<string, React.ReactNode> = {
  strategy: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h11v5H4z"/><path d="M9 14h11v5H9z"/><path d="M15 7h3a2 2 0 0 1 2 2v5"/><path d="M9 16H6a2 2 0 0 1-2-2v-4"/></svg>
  ),
  technical: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9 4 12l4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></svg>
  ),
  execution: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.5 17 19 7"/><path d="M4 5h16v14H4z"/></svg>
  ),
  discovery: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/><path d="M9 11h4"/><path d="M11 9v4"/></svg>
  ),
  systems: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="7" r="2.5"/><circle cx="18" cy="7" r="2.5"/><circle cx="12" cy="17" r="2.5"/><path d="M8.2 8.6 10.6 15"/><path d="m15.8 8.6-2.4 6.4"/><path d="M8.5 7h7"/></svg>
  ),
  ux: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 9h8"/><path d="M8 13h5"/><path d="M16 16h1"/></svg>
  ),
};

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Leo Jiang home">
          <img src="/images/leo-logo.jpg" alt="Leo Jiang logo" />
          <span>Leo Jiang</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="mailto:leo.jh.jiang@gmail.com">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <div className="pill">Senior Product Manager, enterprise SaaS, technical platforms, AI-enabled workflows</div>
          <h1 className="hero-title">I turn ambiguous, high-constraint systems into products teams can ship and customers can trust.</h1>
          <p className="hero-lede">
            Product manager with 8+ years building complex B2B platforms across simulation, real-time operations, data-intensive workflows, and mining technology. I bring structure to messy product environments, align technical and business stakeholders, and make trade-offs visible before they become delivery risk.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#work">View case studies</a>
            <a className="secondary-btn" href="https://www.linkedin.com/in/leojhjiang/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Profile summary">
          <div className="portrait-orbit">
            <img src="/images/leo-headshot.jpeg" alt="Headshot of Leo Jiang" />
          </div>
          <div className="signal-card">
            <span className="signal-label">Current positioning</span>
            <strong>Technical Product Manager for complex operational platforms</strong>
            <p>Best fit: platform PM, technical PM, senior product manager, product owner for enterprise workflow products.</p>
          </div>
        </aside>
      </section>

      <section className="metrics-grid" aria-label="Career metrics">
        {metrics.map((item) => (
          <div className="metric-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section-grid proof-section">
        <div>
          <p className="section-kicker">Why recruiters should keep reading</p>
          <h2 className="proof-title">Not a generic PM. A product operator for technical, messy, high-stakes environments.</h2>
        </div>
        <div className="proof-list">
          {proofPoints.map((point) => (
            <div className="proof-item" key={point}>
              <span aria-hidden="true">✦</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Selected product stories</p>
          <h2>Case studies I can walk through in detail</h2>
          <p>Each story is grounded in real users, constraints, trade-offs, delivery pressure, and measurable product discipline.</p>
        </div>
        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <article className="case-card" key={study.title}>
              <div className="case-index">0{index + 1}</div>
              <p className="eyebrow">{study.eyebrow}</p>
              <h3>{study.title}</h3>
              <p>{study.outcome}</p>
              <ul>
                {study.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section-block capabilities-section">
        <div className="section-heading compact">
          <p className="section-kicker">Operating range</p>
          <h2>Where I create leverage</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title}>
              <div className="capability-icon" aria-hidden="true">{capabilityIcons[capability.icon]}</div>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-grid experience-section">
        <div className="sticky-heading">
          <p className="section-kicker">Experience</p>
          <h2>Built in environments where product decisions affect real operations.</h2>
          <p>My background sits at the intersection of product management, systems engineering, enterprise SaaS, and field-heavy operational workflows.</p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-card" key={`${item.company}-${item.role}`}>
              <div>
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
              </div>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="toolbelt section-block">
        <div className="section-heading compact">
          <p className="section-kicker">Toolbelt</p>
          <h2>Hands-on enough to bridge strategy and execution</h2>
        </div>
        <div className="tool-grid">
          {tools.map((tool) => (
            <span className="tool-chip" key={tool.name}>
              {tool.logo ? <img src={tool.logo} alt="" aria-hidden="true" /> : <strong aria-hidden="true">{tool.fallback}</strong>}
              {tool.name}
            </span>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <div>
          <p className="section-kicker">Open to senior product roles</p>
          <h2>Looking for a PM who can make complex products understandable, shippable, and commercially credible?</h2>
          <p>I am especially interested in technical product, platform product, AI-enabled workflow, enterprise SaaS, and operational systems roles.</p>
        </div>
        <div className="cta-actions">
          <a className="primary-btn" href="mailto:leo.jh.jiang@gmail.com">Email me</a>
          <a className="secondary-btn" href="https://www.linkedin.com/in/leojhjiang/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
