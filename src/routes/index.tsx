import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Cpu,
  Gauge,
  Quote,
  ShieldCheck,
  Target,
  Users,
  Zap,
  Award,
  Users2,
  Search,
  Layers,
  FileCheck,
  Globe,
  CheckCircle2,
  Heart,
  Landmark,
  Factory,
  ShoppingBag,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Briefcase,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import bannerAbout from "@/assets/banner-about.jpg";
import bannerCareers from "@/assets/banner-careers.jpg";
import svcAiImage from "@/assets/svc-ai.jpg";
import svcExecutive from "@/assets/svc-executive.jpg";
import { services } from "@/data/services";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TPN Tech | AI-Driven Staffing & Talent Solutions" },
      {
        name: "description",
        content:
          "AI-matched shortlists in 48 hours. TPN Tech delivers IT, contract, permanent and executive talent, vetted by specialist recruiters.",
      },
      { property: "og:title", content: "TPN Tech | AI-Driven Staffing & Talent Solutions" },
      {
        property: "og:description",
        content: "AI recruitment engine plus human judgement — staffing built for teams that hire with intent.",
      },
    ],
  }),
  component: Index,
});

/* Map service slugs to lucide icons for the gold badge */
const serviceIcons: Record<string, React.ElementType> = {
  "ai-recruitment": BrainCircuit,
  "it-technology-staffing": Cpu,
  "permanent-hiring": Users,
  "contract-staffing": Layers,
  "executive-search": Search,
  "payroll-compliance": FileCheck,
  "training-upskilling": Award,
};

const industries = [
  { icon: Cpu, name: "Technology & SaaS" },
  { icon: Landmark, name: "Banking & Fintech" },
  { icon: Heart, name: "Healthcare & Life Sciences" },
  { icon: ShoppingBag, name: "Retail & E-commerce" },
  { icon: Factory, name: "Manufacturing & Energy" },
  { icon: Target, name: "Professional Services" },
];

const processSteps = [
  { icon: Search, step: "01", title: "Discovery Call", body: "We interview your hiring team and turn the role into a measurable, structured requirement profile." },
  { icon: Users2, step: "02", title: "Talent Match", body: "The AI engine sources, ranks and scores candidates across our talent pool and live market data." },
  { icon: Zap, step: "03", title: "Rapid Onboarding", body: "Specialist recruiters interview and verify every shortlisted person before they reach you." },
  { icon: Layers, step: "04", title: "Ongoing Partnership", body: "You interview a short, strong list — we manage offer, joining, follow-up and long-term retention." },
];

const whyUsValueProps = [
  { icon: Award, title: "Enterprise Delivery", desc: "Enterprise-focused delivery discipline across every engagement." },
  { icon: Globe, title: "Global Delivery", desc: "World-class capabilities deployed across global operations." },
  { icon: Users, title: "Expert Specialists", desc: "Experienced technology specialists across every domain." },
  { icon: Zap, title: "Flexible Models", desc: "Flexible engagement structures built around your needs." },
  { icon: ShieldCheck, title: "Quality Hiring", desc: "Rigorous, quality-driven hiring processes." },
  { icon: CheckCircle2, title: "Clear Visibility", desc: "Strong alignment and full accountability." },
];

const specialistRoles = [
  {
    icon: Code2,
    title: "Software & Cloud",
    skills: ["Full-Stack", "DevOps", "Kubernetes", "Python/Go"],
    desc: "Vetted senior engineers ready to commit code from week one.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Science",
    skills: ["ML Engineers", "LLM Fine-Tuning", "Data Mesh"],
    desc: "Specialists skilled in generative AI models and MLOps pipelines.",
  },
  {
    icon: Building2,
    title: "Enterprise Apps",
    skills: ["SAP S/4HANA", "Oracle Cloud", "Salesforce"],
    desc: "Certified functional experts for ERP, CRM, and HCM rollouts.",
  },
  {
    icon: Briefcase,
    title: "Tech Leadership",
    skills: ["CTOs & CISOs", "VPs Engineering", "Product Leads"],
    desc: "Discreet placement of vetted leaders for tech & culture goals.",
  },
];

const partnerBrands = [
  { name: "FINTECH CORE", icon: Landmark },
  { name: "HEALTHPULSE", icon: Heart },
  { name: "CLOUDSCALE INC", icon: Cpu },
  { name: "OMNITECH", icon: Globe },
  { name: "NEXUS CLOUD", icon: Zap },
  { name: "SAAS PRIME", icon: Target },
  { name: "DATA MESH AI", icon: BrainCircuit },
  { name: "CYBERSHIELD", icon: ShieldCheck },
];

const faqItems = [
  {
    q: "How quickly can TPN Tech deliver the first candidate shortlist?",
    a: "Our AI matching engine processes live candidate data instantly. Specialist recruiters then conduct human interviews and deliver your first calibrated shortlist within 48 working hours.",
  },
  {
    q: "What is your replacement guarantee on placements?",
    a: "We back every permanent placement with a 90-day (up to 180-day) replacement warranty. If a hire does not meet agreed performance goals, we source a replacement at zero additional fee.",
  },
  {
    q: "How does the AI matching engine eliminate hiring bias?",
    a: "The engine parses requirements into structured skill graphs rather than resume keywords. Candidates are scored on objective competency metrics, and scorecards are fully auditable.",
  },
  {
    q: "Can TPN Tech manage payroll and statutory compliance for contract staff?",
    a: "Yes. As Employer of Record (EOR), we handle employment contracts, statutory withholdings, payroll processing, and benefits administration with complete audit-ready documentation.",
  },
];

const testimonials = [
  {
    quote:
      "We replaced a three-month search with a two-week one. The shortlist arrived with reasoning attached, not just résumés.",
    name: "Priya Raghavan",
    role: "VP Engineering",
    company: "Fintech Core",
  },
  {
    quote:
      "TPN Tech took our entire contingent workforce — payroll, compliance, extensions. Our managers got their week back.",
    name: "Daniel Ortega",
    role: "COO",
    company: "CloudScale Inc",
  },
  {
    quote:
      "The executive mandate was handled with real discretion. Four credible leaders, all of whom we would have hired.",
    name: "Amelia Chen",
    role: "Board Chair",
    company: "HealthPulse Labs",
  },
  {
    quote:
      "Their AI matching engine accurately filtered senior cloud architects in 48 hours. Exceptional speed and precision.",
    name: "Marcus Vance",
    role: "Head of Infrastructure",
    company: "Nexus Cloud",
  },
  {
    quote:
      "We scaled our AI/ML squad from zero to 14 engineers in three weeks. TPN Tech is our exclusive talent partner.",
    name: "Elena Rostova",
    role: "Director of Data Products",
    company: "OmniTech Global",
  },
  {
    quote:
      "Submitting vetted tech leads with clear scorecards saved our panel hundreds of interviewing hours this quarter.",
    name: "David Sterling",
    role: "SVP Technology",
    company: "Enterprise Core",
  },
];

/* Floating gold star SVG used in the hero */
function GoldStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
      </svg>
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  /* Single row 3-card sliding window */
  const visibleTestimonials = [
    testimonials[activeTestimonial % testimonials.length],
    testimonials[(activeTestimonial + 1) % testimonials.length],
    testimonials[(activeTestimonial + 2) % testimonials.length],
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ━━━ SECTION 1: HERO (DARK NAVY) ━━━ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" aria-hidden="true" className="w-full h-full object-cover hero-zoom" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, oklch(0.14 0.06 265 / 0.82) 0%, oklch(0.14 0.06 265 / 0.50) 50%, oklch(0.14 0.06 265 / 0.30) 100%)",
            }}
          />
          <div
            className="absolute -top-[30%] -right-[15%] w-[800px] h-[800px] pointer-events-none spin-slow opacity-60"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, oklch(0.86 0.10 88 / 0.3) 20deg, transparent 60deg, transparent 180deg, oklch(0.74 0.14 82 / 0.22) 200deg, transparent 240deg, transparent 360deg)",
              filter: "blur(40px)",
              borderRadius: "9999px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 85% 50%, oklch(0.74 0.14 82 / 0.20), transparent 55%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none pulse-glow"
            style={{
              background: "radial-gradient(circle, oklch(0.86 0.10 88 / 0.15), transparent 65%)",
            }}
          />
        </div>

        <GoldStar className="absolute top-[25%] left-[8%] w-4 h-4 text-gold opacity-40 star-float pointer-events-none" />
        <GoldStar className="absolute top-[40%] right-[12%] w-3.5 h-3.5 text-gold opacity-65 star-float pointer-events-none" style={{ animationDelay: "0.8s" }} />
        <GoldStar className="absolute bottom-[20%] left-[20%] w-3 h-3 text-gold opacity-50 star-float pointer-events-none" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-24 w-full">
          <div className="max-w-4xl fade-up">
            <Reveal>
              <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-6 flex items-center gap-3">
                <span className="w-10 h-px bg-gold" />
                AI-Driven Recruitment · Specialist Talent
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="text-primary-foreground text-5xl md:text-7xl font-semibold leading-[1.05] mb-8">
                Hire the right people,{" "}
                <span className="italic gold-text">faster</span> than the market can.
              </h1>
            </Reveal>
            <Reveal delay={230}>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
                TPN Tech blends an AI matching engine with specialist recruiters. Machines search, score and
                rank. Our people interview, verify and decide. You meet a short list worth your time.
              </p>
            </Reveal>
            <Reveal delay={330}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="sheen-on-hover group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_70px_-20px_oklch(0.78_0.13_82_/_0.6)]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Hire Talent
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 border border-gold/60 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold/10"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 2: WHAT WE DO / SERVICES (LIGHT CEMENT BG) ━━━ */}
      <section className="relative py-28 bg-[color:var(--muted)]">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="What we do"
            title="End-to-End Capabilities That Drive Outcomes"
            description="From a single specialist engineer to an entire contingent workforce — every engagement runs on the same AI-plus-human model."
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90}>
                <ServiceCard service={service} icon={serviceIcons[service.slug]} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ━━━ SECTION 3: HOW WE PARTNER (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
      <section className="py-28 bg-navy-deep relative overflow-hidden border-t border-white/10">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 30%, oklch(0.74 0.14 82 / 0.4), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <SectionHeading
            tone="light"
            eyebrow="How we partner"
            title="Your Journey With TPN Tech"
            description="From first conversation to long-term partnership — here's how we help you hire with confidence."
            className="max-w-5xl"
          />

          <div className="relative mt-20">
            <div className="hidden lg:block absolute top-[36px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 z-0 shadow-[0_0_15px_rgba(212,175,55,0.6)]" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {processSteps.map((item, i) => (
                <Reveal key={item.step} delay={i * 120}>
                  <div className="group h-full flex flex-col justify-between rounded-2xl border-t-4 border-t-gold border-x border-b border-white/15 bg-gradient-to-br from-[#0c162c] via-[#0f1d3b] to-[#172a54] backdrop-blur-md p-7 shadow-lg transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-2.5 hover:border-gold hover:bg-gradient-to-br hover:from-[#112042] hover:to-[#1e366b] hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] card-streak relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-500 group-hover:scale-110"
                          style={{ background: "var(--gradient-gold)" }}
                        >
                          <item.icon className="h-6 w-6 text-navy-deep stroke-[2.5]" />
                        </div>
                        <span className="font-mono text-xs font-bold tracking-widest text-gold bg-gold/15 px-3 py-1 rounded-full border border-gold/30">
                          STEP {item.step}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/80 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ━━━ SECTION 4: SPECIALIST TALENT (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
      <section className="relative py-28 bg-[color:var(--muted)] border-y border-border">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Specialist talent"
            title="High-Demand Roles We Match in 48 Hours"
            description="Pre-vetted engineering, data, enterprise, and leadership talent ready for immediate deployment."
            className="max-w-5xl"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specialistRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 90}>
                <div className="group h-full flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1426]/90 backdrop-blur-md p-6 shadow-sm transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-1.5 hover:bg-[#111c36] hover:border-gold/60 hover:shadow-[0_15px_35px_rgba(9,17,36,0.25)]">
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shadow-sm transition-transform duration-500 group-hover:scale-110"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <role.icon className="h-5 w-5 text-navy-deep" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                      {role.title}
                    </h3>
                    <p className="text-xs md:text-sm text-primary-foreground/75 leading-relaxed mb-5">
                      {role.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-medium text-gold/90 bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full transition-colors duration-300 group-hover:border-gold/40 group-hover:text-gold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ━━━ [PREMIUM 50/50 FEATURE SECTION]: LEFT HIGH-IMPACT GLASS IMAGE + RIGHT ENTERPRISE CONTENT ━━━ */}
      <section className="relative py-28 bg-gradient-to-br from-[#0c162c] via-[#0f1d3b] to-[#172a54] text-primary-foreground overflow-hidden border-y border-gold/30">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle at 30% 50%, oklch(0.74 0.14 82 / 0.3), transparent 60%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* LEFT SIDE: ULTRA-PREMIUM GLASS FRAME WITH HIGH-RES IMAGE & FLOATING STAT BADGES */}
            <div className="lg:col-span-6">
              <Reveal variant="left">
                <div className="relative overflow-hidden rounded-3xl border-2 border-gold/40 bg-navy-deep/80 p-3 shadow-[0_0_50px_rgba(212,175,55,0.25)] group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={svcExecutive}
                      alt="TPN Tech Executive Talent Pod in Action"
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                  </div>

                  {/* Top Left Floating SLA Badge */}
                  <div className="absolute top-7 left-7 rounded-full border border-gold/50 bg-[#0c162c]/90 px-4 py-1.5 backdrop-blur-md shadow-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                    <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                      48-HR SHORTLIST SLA
                    </span>
                  </div>

                  {/* Bottom Right Floating Stat Card */}
                  <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-gold/40 bg-[#0c162c]/95 p-6 backdrop-blur-xl shadow-2xl flex items-center gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-navy-deep shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <ShieldCheck className="h-7 w-7 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl font-extrabold text-gold">98.4%</span>
                        <span className="text-xs text-primary-foreground/75 uppercase tracking-wider font-semibold">
                          90-Day Retention
                        </span>
                      </div>
                      <p className="text-xs text-primary-foreground/80 mt-1">
                        Rigorous skill-graph vetting ensures zero candidate misfits.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT SIDE: CORRESPONDING ENTERPRISE CONTENT */}
            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-gold" />
                    <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
                      How We Deliver
                    </p>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] text-primary-foreground mb-6">
                    AI Precision Sourcing Built for Speed
                  </h2>

                  <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-8">
                    We pair intelligent matching algorithms with specialist recruiters to deliver pre-screened, high-caliber talent in record time.
                  </p>

                  <div className="space-y-4 mb-10">
                    {[
                      {
                        title: "Skill-Graph Vetting",
                        desc: "Candidates are benchmarked and verified across technical skills before submission.",
                      },
                      {
                        title: "Compliance & Verification",
                        desc: "Background checks, reference verification, and right-to-work validation handled end-to-end.",
                      },
                      {
                        title: "Dedicated Recruiter Lead",
                        desc: "A named partner who understands your requirements and guarantees 48-hour SLAs.",
                      },
                    ].map((feat, i) => (
                      <div
                        key={i}
                        className="group flex items-start gap-4 p-5 rounded-2xl border border-gold/30 bg-[#0c162c] backdrop-blur-md shadow-md transition-all duration-300 hover:border-gold hover:bg-[#122144] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-navy-deep shrink-0 shadow-gold mt-0.5"
                          style={{ background: "var(--gradient-gold)" }}
                        >
                          <CheckCircle2 className="h-5 w-5 stroke-[2.5]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary-foreground group-hover:text-gold transition-colors">
                            {feat.title}
                          </h3>
                          <p className="text-xs md:text-sm text-primary-foreground/75 leading-relaxed mt-1">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-5">
                    <Link
                      to="/contact"
                      className="sheen-on-hover group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold text-navy-deep shadow-gold transition-all duration-300 hover:scale-[1.03]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      Schedule Talent Consultation
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to="/services"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-gold border-b border-gold/40 pb-1 transition-all hover:border-gold hover:gap-3"
                    >
                      Explore Delivery Services
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 5: WHY TPN TECH (DARK NAVY GRADIENT) ━━━ */}
      <section className="relative py-28 bg-gradient-to-br from-[#091124] via-[#0e1b38] to-[#091124] text-primary-foreground overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.74 0.14 82 / 0.35), transparent 45%), radial-gradient(circle at 20% 80%, oklch(0.24 0.09 265 / 0.5), transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Why TPN Tech</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] text-primary-foreground mb-6">
                  Delivering Business Value Beyond Talent
                </h2>
                <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8">
                  Instead of simply supplying professionals, we become an extension of your organization—bringing expertise, responsiveness, and a commitment to your long-term success.
                </p>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-gold font-semibold border-b-2 border-gold pb-1 text-sm tracking-wide transition-all hover:gap-4 hover:text-gold-soft"
                >
                  Discover Our Approach
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            {/* Right Grid of 6 RICH GRADIENT CARDS */}
            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {whyUsValueProps.map((prop, i) => (
                  <Reveal key={prop.title} delay={i * 90}>
                    <div className="group relative h-full rounded-2xl border border-gold/25 bg-gradient-to-br from-[#0e1b38] via-[#122349] to-[#182d5c] p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-gold hover:bg-gradient-to-br hover:from-[#13244a] hover:to-[#1f3a74] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:-translate-y-1.5 card-streak overflow-hidden">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-gold transition-transform duration-500 group-hover:scale-110"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        <prop.icon className="h-5 w-5 text-navy-deep" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                        {prop.title}
                      </h3>
                      <p className="text-xs md:text-sm text-primary-foreground/75 leading-relaxed">
                        {prop.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 6: AI RECRUITMENT ENGINE (DARK NAVY) ━━━ */}
      <section className="relative overflow-hidden bg-navy-deep py-24 text-primary-foreground border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,251,233,0.03),transparent_40%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                tone="light"
                eyebrow="AI recruitment"
                title="An engine that reads every résumé so your team never has to"
                description="Our matching engine processes thousands of profiles per requirement, scores them against your real criteria, and hands the top of the list to a recruiter who knows the domain."
              />

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: BrainCircuit, title: "Skill-graph matching", body: "Every requirement becomes a structured skill graph, matched against a live pool instead of keyword-searched." },
                  { icon: Gauge, title: "48-hour shortlists", body: "Sourcing and ranking happen in minutes, so recruiters spend their day interviewing rather than searching." },
                  { icon: ShieldCheck, title: "Bias-controlled screening", body: "Structured scorecards keep early-stage evaluation consistent, auditable and defensible." },
                  { icon: Target, title: "Human final call", body: "No profile reaches you without a specialist recruiter interview and a plain-English written brief." },
                ].map((pillar, i) => (
                  <Reveal key={pillar.title} delay={i * 110}>
                    <div className="group rounded-2xl border border-white/10 bg-[#0c162c] p-6 transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-1.5 hover:border-gold/50 hover:bg-[#121f3d] shadow-lg">
                      <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                        <pillar.icon className="h-5 w-5 text-gold" />
                      </div>
                      <h3 className="text-lg text-primary-foreground font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-primary-foreground/70">{pillar.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal variant="zoom" delay={140}>
              <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.15)]">
                <img
                  src={svcAiImage}
                  alt="AI matching network connecting candidate profiles"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-[520px] w-full object-cover rounded-3xl shadow-2xl opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-gold/20 bg-navy-deep/85 p-5 backdrop-blur-md">
                  <p className="text-sm leading-relaxed text-primary-foreground/90">
                    "Machines do the searching. People do the judging." — the operating principle behind every
                    TPN Tech shortlist.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 7: INDUSTRIES (DARK NAVY BUILDING BG) ━━━ */}
      <section className="relative overflow-hidden py-28 bg-navy-deep border-t border-white/10">
        <div className="absolute inset-0">
          <img
            src={bannerAbout}
            alt="Enterprise buildings"
            className="w-full h-full object-cover opacity-85"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(9, 17, 36, 0.55), rgba(9, 17, 36, 0.80))",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="w-8 h-px bg-gold" />
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Industries</p>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] text-primary-foreground max-w-3xl mx-auto mb-6">
              Specialist recruiters, not generalists
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14">
              Each vertical has its own recruitment pod with people who have worked in the sector and understand what the role really demands.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 90}>
                <div className="group relative flex items-center gap-4 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0c162c]/95 to-[#16274e]/95 p-6 backdrop-blur-md transition-all duration-500 ease-[var(--ease-premium)] hover:border-gold hover:bg-gradient-to-br hover:from-[#122144] hover:to-[#1b3266] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-1.5 shadow-lg card-streak overflow-hidden">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-deep group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                    <ind.icon className="h-5 w-5" />
                  </div>
                  <span className="text-base font-semibold text-primary-foreground group-hover:text-gold transition-colors duration-300">
                    {ind.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 8: AUTO-SCROLLING LOGO MARQUEE (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
      <section className="py-16 bg-[color:var(--muted)] border-y border-border overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-5 mb-8 text-center">
          <p className="text-xs md:text-sm font-mono font-semibold tracking-[0.3em] uppercase text-navy">
            Trusted By High-Growth Enterprises & Technology Pioneers
          </p>
        </div>
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-6">
            {[...partnerBrands, ...partnerBrands].map((brand, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center gap-3 px-6 py-5 rounded-2xl border border-border bg-card text-center shrink-0 min-w-[160px] h-[120px] shadow-sm transition-all duration-500 ease-[var(--ease-premium)] hover:bg-[#0c162c] hover:border-gold hover:scale-105 hover:shadow-[0_15px_30px_rgba(9,17,36,0.25)] relative overflow-hidden"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-transform duration-500 group-hover:scale-110"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <brand.icon className="h-5 w-5 text-navy-deep stroke-[2.5]" />
                </div>
                <span className="text-xs font-bold tracking-wider text-navy group-hover:text-gold whitespace-nowrap uppercase transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ━━━ SECTION 9: CLIENT VOICES (SINGLE ROW 3-CARD SLIDING CAROUSEL WITH PREV ON VERY LEFT & NEXT ON VERY RIGHT) ━━━ */}
      <section className="relative py-28 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] overflow-hidden border-t border-border">
        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <div className="text-center mb-14">
            <SectionHeading
              align="center"
              eyebrow="Client voices"
              title="What hiring leaders say after working with us"
              className="max-w-5xl"
            />
          </div>

          {/* SINGLE ROW CAROUSEL LAYOUT: PREV BUTTON (VERY LEFT) | 3 CARDS IN MIDDLE | NEXT BUTTON (VERY RIGHT) */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* PREVIOUS BUTTON - VERY FIRST / LEFT */}
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-navy-deep shadow-gold transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shrink-0 z-20"
              style={{ background: "var(--gradient-gold)" }}
            >
              <ChevronLeft className="h-7 w-7 stroke-[2.5]" />
            </button>

            {/* SINGLE ROW OF 3 CARDS IN MIDDLE */}
            <div className="grid gap-6 md:grid-cols-3 flex-1">
              {visibleTestimonials.map((t, i) => (
                <Reveal key={`${t.name}-${activeTestimonial}-${i}`} delay={i * 90}>
                  <figure className="group h-full flex flex-col justify-between rounded-2xl border-t-4 border-t-gold border-x border-b border-gold/30 bg-gradient-to-br from-[#0c162c] via-[#0f1d3b] to-[#172a54] text-primary-foreground p-7 shadow-lg transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] card-streak relative overflow-hidden">
                    <div>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-transform duration-500 group-hover:scale-110"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        <Quote className="h-6 w-6 text-navy-deep" />
                      </div>
                      <blockquote className="text-sm md:text-base leading-relaxed text-primary-foreground/90 font-medium italic mb-6">
                        "{t.quote}"
                      </blockquote>
                    </div>
                    <figcaption className="border-t border-white/15 pt-5 flex items-center justify-between">
                      <div>
                        <span className="block text-base font-semibold text-gold">{t.name}</span>
                        <span className="block text-xs text-primary-foreground/75 mt-0.5">{t.role} · <strong className="text-gold/90">{t.company}</strong></span>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            {/* NEXT BUTTON - VERY LAST / RIGHT */}
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-navy-deep shadow-gold transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shrink-0 z-20"
              style={{ background: "var(--gradient-gold)" }}
            >
              <ChevronRight className="h-7 w-7 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 10: FREQUENTLY ASKED QUESTIONS (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
      <section className="relative py-28 bg-navy-deep text-primary-foreground border-t border-white/10 overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-5 z-10">
          <SectionHeading
            tone="light"
            eyebrow="Clear Answers"
            title="Frequently Asked Questions"
            description="Everything you need to know about our AI engine, guarantee terms, and delivery models."
          />

          <div className="mt-14 space-y-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="rounded-2xl border border-white/10 bg-[#0c162c]/90 overflow-hidden transition-all duration-300 hover:border-gold/40">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-lg font-semibold text-primary-foreground flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-gold shrink-0" />
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gold transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-sm text-primary-foreground/75 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      */}

      {/* ━━━ SECTION 11: CTA BANNER ━━━ */}
      <section className="relative overflow-hidden py-24 bg-navy-deep text-primary-foreground border-t border-white/10">
        <img
          src={bannerCareers}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-[420px] w-full object-cover opacity-85 absolute inset-0 pointer-events-none"
        />
        <div className="absolute inset-0 bg-navy-deep/85" />
        <div className="relative mx-auto w-full max-w-4xl px-5 text-center z-10">
          <Reveal>
            <h2 className="text-3xl text-primary-foreground sm:text-4xl font-semibold">
              Not sure which service you need?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Describe the problem in a sentence. We will tell you whether it is a search, a contract pod or a
              training gap — even if the answer is none of ours.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="sheen-on-hover group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-all duration-300 hover:scale-[1.04]"
                style={{ background: "var(--gradient-gold)" }}
              >
                Book a calibration call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
