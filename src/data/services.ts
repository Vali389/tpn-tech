import svcAi from "@/assets/svc-ai.jpg";
import svcIt from "@/assets/svc-it.jpg";
import svcPermanent from "@/assets/svc-permanent.jpg";
import svcContract from "@/assets/svc-contract.jpg";
import svcExecutive from "@/assets/svc-executive.jpg";
import svcPayroll from "@/assets/svc-payroll.jpg";
import svcTraining from "@/assets/svc-training.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  image: string;
  popular?: boolean;
  accent: "gold" | "teal";
  intro: string;
  capabilities: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "ai-recruitment",
    title: "AI Recruitment",
    tagline: "AI-matched shortlists in 48 hours",
    summary:
      "Our AI engine parses every résumé, scores skill fit and surfaces the ten people worth your time — screened by human recruiters before they reach you.",
    image: svcAi,
    popular: true,
    accent: "teal",
    intro:
      "AI Recruitment is the core of how TPN Tech works. Every requirement you send is converted into a structured skill graph, matched against our live talent pool and enriched with market signals — then reviewed by a specialist recruiter. Machines do the searching; people do the judging.",
    capabilities: [
      {
        title: "Semantic résumé parsing",
        body: "Beyond keywords — we model real skills, seniority, project depth and domain adjacency for every candidate profile.",
      },
      {
        title: "Predictive fit scoring",
        body: "Each shortlist candidate carries a transparent fit score across skills, stability, compensation range and notice period.",
      },
      {
        title: "Bias-controlled screening",
        body: "Structured, auditable scorecards keep early-stage screening consistent and defensible across every hiring panel.",
      },
      {
        title: "Automated interview scheduling",
        body: "Calendar orchestration, reminders and feedback capture so no strong candidate goes cold in your pipeline.",
      },
    ],
    process: [
      { step: "01", title: "Intake", body: "A 45-minute calibration call turns your role into a measurable requirement profile." },
      { step: "02", title: "AI sourcing", body: "The engine searches our pool plus live market data and ranks matched profiles." },
      { step: "03", title: "Human screening", body: "Specialist recruiters interview, verify and write a plain-English brief per candidate." },
      { step: "04", title: "Shortlist & close", body: "You get five to ten interview-ready profiles, plus offer and onboarding support." },
    ],
    outcomes: [
      "First shortlist within 48 working hours",
      "Transparent scoring on every profile",
      "Fewer, better interviews per hire",
    ],
  },
  {
    slug: "it-technology-staffing",
    title: "IT & Technology Staffing",
    tagline: "Engineers, data and cloud talent on demand",
    summary:
      "Full-stack, DevOps, data, cybersecurity and AI/ML specialists — sourced, vetted and delivered against your real technical bar.",
    image: svcIt,
    popular: true,
    accent: "teal",
    intro:
      "Technology hiring fails when the screening is generic. Our technical recruiters come from engineering backgrounds and run role-specific evaluations — architecture discussions, code review conversations and live problem walkthroughs — before a profile ever reaches your inbox.",
    capabilities: [
      { title: "Software engineering", body: "Frontend, backend, mobile and full-stack engineers across modern and legacy stacks." },
      { title: "Cloud & DevOps", body: "AWS, Azure and GCP platform engineers, SRE, Kubernetes and CI/CD specialists." },
      { title: "Data & AI", body: "Data engineers, analysts, ML engineers and applied AI specialists with production experience." },
      { title: "Cybersecurity", body: "SOC analysts, cloud security architects, GRC and identity specialists." },
    ],
    process: [
      { step: "01", title: "Tech calibration", body: "We map your stack, team shape and the bar an offer must clear." },
      { step: "02", title: "Targeted sourcing", body: "AI-assisted search across niche technical communities and our engineer pool." },
      { step: "03", title: "Engineer-led vetting", body: "Practical evaluation by recruiters who understand the work, not just the keywords." },
      { step: "04", title: "Delivery", body: "Profiles with evidence: projects, decisions made, and why they fit your team." },
    ],
    outcomes: ["Role-specific technical vetting", "Coverage across 40+ tech disciplines", "Replacement guarantee on every placement"],
  },
  /* ━━━ COMMENTED OUT SERVICES AS REQUESTED ━━━
  {
    slug: "permanent-hiring",
    title: "Permanent Hiring",
    tagline: "Long-term hires who actually stay",
    summary:
      "End-to-end permanent recruitment with structured assessment, culture calibration and a guarantee period on every placement.",
    image: svcPermanent,
    popular: true,
    accent: "gold",
    intro:
      "A permanent hire is a multi-year decision. We run a deliberate process — requirement definition, market mapping, structured interviews and reference validation — designed to protect against the expensive mis-hire rather than simply filling the seat quickly.",
    capabilities: [
      { title: "Market mapping", body: "A picture of who exists, what they earn and how reachable they are before you commit." },
      { title: "Structured assessment", body: "Consistent scorecards across every candidate so panels compare like with like." },
      { title: "Culture calibration", body: "We interview your team first, then screen for working style, not just credentials." },
      { title: "Offer management", body: "Compensation benchmarking, negotiation support and counter-offer defence." },
    ],
    process: [
      { step: "01", title: "Discovery", body: "Role scope, success measures, team dynamics and non-negotiables." },
      { step: "02", title: "Search", body: "Active and passive market outreach backed by AI ranking." },
      { step: "03", title: "Assessment", body: "Structured interviews, references and background verification." },
      { step: "04", title: "Onboarding", body: "Offer close, joining follow-up and 90-day check-ins." },
    ],
    outcomes: ["90-day replacement guarantee", "Benchmarked salary guidance", "Documented, auditable hiring trail"],
  },
  {
    slug: "contract-staffing",
    title: "Contract & Contingent Staffing",
    tagline: "Scale teams up and down without friction",
    summary:
      "Contract, contract-to-hire and project teams deployed fast — with compliance, payroll and performance managed by us.",
    image: svcContract,
    accent: "gold",
    intro:
      "When delivery timelines move, headcount has to move with them. We deploy contract professionals and full project pods on your terms, carrying the employment, compliance and payroll burden so your managers can focus on output.",
    capabilities: [
      { title: "Contract deployment", body: "Vetted professionals on our payroll, working inside your delivery process." },
      { title: "Contract-to-hire", body: "Try the fit in the real role, convert to permanent with a pre-agreed path." },
      { title: "Project pods", body: "Pre-formed squads with a lead, ready to own a workstream end to end." },
      { title: "Compliance ownership", body: "Contracts, statutory filings, insurance and audit-ready documentation." },
    ],
    process: [
      { step: "01", title: "Demand plan", body: "Skills, duration, rate bands and ramp schedule." },
      { step: "02", title: "Bench + search", body: "Available bench profiles first, targeted search for the rest." },
      { step: "03", title: "Deployment", body: "Onboarding, access, tooling and day-one readiness." },
      { step: "04", title: "Manage", body: "Timesheets, performance reviews, extensions and exits handled by us." },
    ],
    outcomes: ["Deployment in as little as 5 days", "Zero compliance overhead for you", "Flexible extension and exit terms"],
  },
  {
    slug: "executive-search",
    title: "Executive Search",
    tagline: "Leadership hiring, handled discreetly",
    summary:
      "Confidential search for CXO, VP and director-level mandates — deep market mapping, rigorous assessment, absolute discretion.",
    image: svcExecutive,
    accent: "gold",
    intro:
      "Leadership mandates are won on research and trust. Our executive practice runs confidential, mapped searches with a named partner leading every engagement from brief to onboarding — and a shortlist that is argued, not merely assembled.",
    capabilities: [
      { title: "Confidential mandates", body: "Discreet approaches that protect both your brand and the candidate's position." },
      { title: "Leadership assessment", body: "Competency interviews, leadership referencing and scenario evaluation." },
      { title: "Succession advisory", body: "Bench strength analysis and internal-versus-external readiness reviews." },
      { title: "Board & advisory", body: "Independent directors and advisors for growth-stage and established businesses." },
    ],
    process: [
      { step: "01", title: "Mandate brief", body: "Strategy, mandate scope and the leadership profile that fits it." },
      { step: "02", title: "Market map", body: "A complete view of the addressable leadership market." },
      { step: "03", title: "Engage", body: "Discreet approach, deep assessment, structured comparison." },
      { step: "04", title: "Integrate", body: "Offer construction plus first 100-day integration support." },
    ],
    outcomes: ["Named partner on every mandate", "Full confidentiality protocol", "Six-month leadership guarantee"],
  },
  {
    slug: "payroll-compliance",
    title: "Payroll & Compliance",
    tagline: "Employer of record, done properly",
    summary:
      "Payroll processing, statutory compliance, benefits administration and audit-ready reporting for your extended workforce.",
    image: svcPayroll,
    accent: "gold",
    intro:
      "Growing a distributed or contingent workforce creates administrative risk long before it creates value. We take on payroll, statutory obligations and documentation as your employer of record, with reporting your finance team can reconcile without chasing.",
    capabilities: [
      { title: "Payroll processing", body: "Accurate, on-time payroll cycles with full breakdowns and query handling." },
      { title: "Statutory compliance", body: "Registrations, contributions, filings and remittances managed end to end." },
      { title: "Benefits administration", body: "Insurance, leave policy and reimbursement management for deployed staff." },
      { title: "Audit reporting", body: "Monthly dashboards and audit-ready documentation on demand." },
    ],
    process: [
      { step: "01", title: "Transition", body: "Data migration, policy mapping and compliance gap review." },
      { step: "02", title: "Setup", body: "Payroll calendar, approval workflows and reporting formats." },
      { step: "03", title: "Run", body: "Cycle processing, disbursement and statutory filings." },
      { step: "04", title: "Report", body: "Reconciliation packs, dashboards and continuous compliance monitoring." },
    ],
    outcomes: ["100% on-time payroll cycles", "Single point of compliance accountability", "Audit-ready documentation always"],
  },
  {
    slug: "training-upskilling",
    title: "Training & Upskilling",
    tagline: "Make hired talent productive faster",
    summary:
      "Role-ready training programs, technical bootcamps and AI-literacy tracks that shorten ramp-up time for new and existing teams.",
    image: svcTraining,
    accent: "teal",
    intro:
      "Hiring solves capacity; training solves capability. Our programs are built with your engineering and delivery leads so learners work on your context, your tools and your standards — measured on output, not attendance.",
    capabilities: [
      { title: "Technical bootcamps", body: "Intensive stack-specific programs for new joiners and lateral movers." },
      { title: "AI literacy tracks", body: "Practical AI tooling for engineers, analysts and operations teams." },
      { title: "Leadership development", body: "First-time manager and senior leadership programs with coaching." },
      { title: "Hire-train-deploy", body: "We hire to your profile, train to your standard and deploy job-ready people." },
    ],
    process: [
      { step: "01", title: "Skill audit", body: "Where the gaps actually are, measured rather than assumed." },
      { step: "02", title: "Curriculum", body: "Program designed around your tooling, standards and delivery cadence." },
      { step: "03", title: "Deliver", body: "Instructor-led sessions, labs and project work with real review." },
      { step: "04", title: "Measure", body: "Competency assessment and post-program performance tracking." },
    ],
    outcomes: ["Faster time-to-productivity", "Programs built on your real stack", "Measured competency outcomes"],
  },
  */
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);