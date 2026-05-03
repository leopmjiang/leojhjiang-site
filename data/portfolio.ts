export const contact = {
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com",
};

export const operatingSystem = [
  "Customer Discovery",
  "Roadmap Strategy",
  "UX Prototyping",
  "Technical Tradeoffs",
  "Delivery Alignment",
  "Outcome Measurement",
];

export const strengths = [
  {
    title: "Product Strategy",
    detail:
      "Turning ambiguous business goals into clear product direction, tradeoffs, and execution plans.",
  },
  {
    title: "Complex Systems",
    detail:
      "Experience with operational platforms, simulation workflows, data-heavy products, and multi-user environments.",
  },
  {
    title: "Execution Discipline",
    detail:
      "Roadmaps, backlog structure, prioritization, release planning, and cross-functional alignment.",
  },
  {
    title: "UX & Discovery",
    detail:
      "Prototype-first product development grounded in customer workflows and real operational constraints.",
  },
];

export const caseStudies = [
  {
    label: "Simulation Platform",
    title: "Helping operators evaluate what-if scenarios before execution",
    outcome:
      "Converted complex operational workflows into a structured simulation product experience.",
  },
  {
    label: "Roadmap Discipline",
    title: "Balancing customer commitments, platform work, and delivery capacity",
    outcome:
      "Improved focus by translating broad demand into clear themes, initiatives, and delivery priorities.",
  },
  {
    label: "Workflow UX",
    title: "Designing tools for users working in constrained operational environments",
    outcome:
      "Used prototypes, SME feedback, and customer validation to reduce ambiguity before development.",
  },
];

export const experienceGroups = [
  {
    group: "Product Leadership",
    description:
      "Product management, product ownership, roadmap strategy, discovery, and delivery execution.",
    roles: [
      {
        id: "stream-pm",
        company: "Stream Systems",
        role: "Product Manager",
        period: "2023–2026",
        description:
          "Led product strategy and roadmap execution for a cloud-based AI simulation platform used by mining operators to evaluate operational scenarios before execution.",
        products: [
          {
            name: "Simulation Product",
            audience: "Mine planners and operations teams",
            summary:
              "Helped users build base cases and run what-if scenarios to evaluate operational plans before execution.",
          },
          {
            name: "Scenario & Results Workflow",
            audience: "Planning and operational stakeholders",
            summary:
              "Defined the user flow from baseline data, configuration, scenario setup, simulation run, and results review.",
          },
          {
            name: "AI/ML Simulation Platform",
            audience: "Enterprise mining operators",
            summary:
              "Supported a platform that used historical operational data to generate behavioural profiles and simulation inputs.",
          },
        ],
        skills: [
          { name: "Product strategy", score: 9 },
          { name: "Roadmap prioritization", score: 9 },
          { name: "Customer discovery", score: 8 },
          { name: "UX workflow design", score: 8 },
          { name: "Technical tradeoff analysis", score: 8 },
          { name: "Stakeholder alignment", score: 9 },
        ],
      },
      {
        id: "wenco-pm-po",
        company: "Wenco International Mining Systems",
        role: "Product Manager / Product Owner",
        period: "2017–2023",
        description:
          "Owned product roadmaps and agile backlogs across enterprise fleet management products used by mining operations globally.",
        products: [
          {
            name: "Fleet Management System",
            audience:
              "Dispatchers, operators, maintenance teams, and mine operations",
            summary:
              "Managed roadmap and backlog priorities for operational workflows used across active mine sites.",
          },
          {
            name: "Web & Mobile Workflows",
            audience: "Field users and operational supervisors",
            summary:
              "Expanded product experiences beyond dispatcher-centric tools into broader web and mobile workflows.",
          },
          {
            name: "Platform Modernization Initiatives",
            audience: "Engineering, product, and enterprise customers",
            summary:
              "Balanced customer-facing features with technical debt, platform stability, and long-term product scalability.",
          },
        ],
        skills: [
          { name: "Backlog management", score: 10 },
          { name: "Agile delivery", score: 9 },
          { name: "Requirements writing", score: 9 },
          { name: "Release planning", score: 8 },
          { name: "Customer problem framing", score: 8 },
          { name: "Cross-team coordination", score: 9 },
        ],
      },
    ],
  },
  {
    group: "Technical Delivery & Quality",
    description:
      "Hands-on engineering, QA, systems thinking, troubleshooting, and delivery support.",
    roles: [
      {
        id: "qa-engineer",
        company: "Wenco International Mining Systems",
        role: "Quality Assurance Engineer",
        period: "Earlier role",
        description:
          "Worked closely with engineering and product teams to validate product quality, investigate defects, and improve release confidence.",
        products: [
          {
            name: "Fleet Management QA",
            audience: "Engineering, product, and operations users",
            summary:
              "Validated fleet management workflows and helped identify issues before customer release.",
          },
          {
            name: "Release Validation",
            audience: "Internal delivery teams and enterprise customers",
            summary:
              "Supported release readiness by testing high-impact workflows and communicating product risks.",
          },
        ],
        skills: [
          { name: "Test planning", score: 8 },
          { name: "Defect investigation", score: 9 },
          { name: "Systems thinking", score: 8 },
          { name: "Product quality judgement", score: 8 },
          { name: "Engineering collaboration", score: 8 },
        ],
      },
      {
        id: "bes-developer",
        company: "BES Software",
        role: "Software Developer",
        period: "Earlier role",
        description:
          "Built software features and strengthened technical fluency that later helped bridge product, engineering, and customer needs.",
        products: [
          {
            name: "Application Development",
            audience: "Business and end users",
            summary:
              "Contributed to software implementation work with a focus on functional requirements and practical usability.",
          },
          {
            name: "Technical Foundations",
            audience: "Product and engineering teams",
            summary:
              "Built hands-on experience that supports stronger technical conversations and better product tradeoff decisions.",
          },
        ],
        skills: [
          { name: "Software development", score: 8 },
          { name: "Problem solving", score: 8 },
          { name: "Technical analysis", score: 7 },
          { name: "Debugging", score: 7 },
          { name: "Implementation thinking", score: 8 },
        ],
      },
    ],
  },
  {
    group: "Other Experience",
    description:
      "Customer-facing roles that strengthened communication, service mindset, and real-time prioritization.",
    roles: [
      {
        id: "guess-sales",
        company: "GUESS",
        role: "Sales Associate",
        period: "Earlier role",
        description:
          "Developed customer-facing communication, active listening, and service skills in a fast-paced retail environment.",
        products: [
          {
            name: "Customer Service & Sales",
            audience: "Retail customers",
            summary:
              "Helped customers identify products, handled questions, and supported a positive in-store experience.",
          },
        ],
        skills: [
          { name: "Customer communication", score: 9 },
          { name: "Active listening", score: 8 },
          { name: "Service mindset", score: 9 },
          { name: "Prioritization", score: 7 },
        ],
      },
      {
        id: "starbucks-barista",
        company: "Starbucks",
        role: "Barista",
        period: "Earlier role",
        description:
          "Built speed, consistency, teamwork, and customer service habits in a high-volume operating environment.",
        products: [
          {
            name: "High-Volume Service Operations",
            audience: "Customers and store team",
            summary:
              "Balanced quality, speed, service, and teamwork during daily store operations.",
          },
        ],
        skills: [
          { name: "Teamwork", score: 9 },
          { name: "Customer service", score: 9 },
          { name: "Operating under pressure", score: 8 },
          { name: "Process consistency", score: 8 },
        ],
      },
    ],
  },
];

export type ExperienceGroup = (typeof experienceGroups)[number];
export type ExperienceRole = ExperienceGroup["roles"][number];
export type Skill = ExperienceRole["skills"][number];
