import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ShieldCheck, FileText, UserCheck, Layers, Gauge, Target, Award, Lock, Clock, Sparkles } from "lucide-react";
import { getService, services, type Service } from "@/data/services";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { BrainCircuit, Cpu, Users, Search, FileCheck } from "lucide-react";
import bannerCareers from "@/assets/banner-careers.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found | TPN Tech" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.title} | TPN Tech Staffing` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.title} | TPN Tech Staffing` },
        { property: "og:description", content: service.summary },
      ],
    };
  },
  component: ServiceDetail,
  errorComponent: ServiceError,
  notFoundComponent: ServiceNotFound,
});

/* Map service slugs to lucide icons */
const serviceIcons: Record<string, React.ElementType> = {
  "ai-recruitment": BrainCircuit,
  "it-technology-staffing": Cpu,
  "permanent-hiring": Users,
  "contract-staffing": Layers,
  "executive-search": Search,
  "payroll-compliance": FileCheck,
  "training-upskilling": Award,
};

function GoldStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
      </svg>
    </div>
  );
}

function ServiceNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center bg-navy-deep">
      <h1 className="text-3xl text-primary-foreground">Service not found</h1>
      <p className="mt-3 text-sm text-primary-foreground/70">That service does not exist or has been renamed.</p>
      <Link to="/services" className="mt-6 text-sm font-semibold text-gold">
        Back to all services
      </Link>
    </div>
  );
}

function ServiceError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center bg-navy-deep">
      <h1 className="text-3xl text-primary-foreground">This page didn't load</h1>
      <Link to="/services" className="mt-6 text-sm font-semibold text-gold">
        Back to all services
      </Link>
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = serviceIcons[service.slug];

  return (
    <div className="overflow-x-hidden bg-navy-deep min-h-screen">
      {/* ━━━ SECTION 1: HERO (DARK NAVY WITH CONIC GLOW & FLOATING STARS) ━━━ */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-navy-deep pt-28 pb-16">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            width={1024}
            height={768}
            className="hero-zoom absolute inset-0 h-full w-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, oklch(0.14 0.06 265 / 0.88) 0%, oklch(0.14 0.06 265 / 0.65) 50%, oklch(0.14 0.06 265 / 0.45) 100%)",
            }}
          />
          {/* Conic gradient spinning glow */}
          <div
            className="absolute -top-[30%] -right-[15%] w-[800px] h-[800px] pointer-events-none spin-slow opacity-60"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, oklch(0.86 0.10 88 / 0.3) 20deg, transparent 60deg, transparent 180deg, oklch(0.74 0.14 82 / 0.22) 200deg, transparent 240deg, transparent 360deg)",
              filter: "blur(40px)",
              borderRadius: "9999px",
            }}
          />
        </div>

        <GoldStar className="absolute top-[25%] left-[8%] w-4 h-4 text-gold opacity-40 star-float pointer-events-none" />
        <GoldStar className="absolute top-[40%] right-[12%] w-3.5 h-3.5 text-gold opacity-65 star-float pointer-events-none" style={{ animationDelay: "0.8s" }} />

        <div className="relative mx-auto w-full max-w-7xl px-5 z-10 fade-up">
          <Reveal>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/70 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              All Staffing Services
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6">
              {Icon && (
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.5)] shrink-0"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon className="h-8 w-8 text-navy-deep stroke-[2.5]" />
                </div>
              )}
              <div>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-gold block mb-2">
                  {service.tagline}
                </span>
                <h1 className="text-4xl leading-[1.08] text-primary-foreground font-semibold sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-primary-foreground/80 font-normal">
              {service.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━ SECTION 2: INTRO & OUTCOMES (LIGHT CEMENT BG) ━━━ */}
      <section className="py-24 relative overflow-hidden bg-[color:var(--muted)] border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.3fr_0.7fr] items-start">
          <Reveal>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Overview</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy leading-tight">
                Built for engineering teams that hire with intent
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                {service.intro}
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} variant="zoom">
            <div className="rounded-2xl border-t-4 border-t-gold border-x border-b border-border bg-card p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-navy mb-1">Service SLA Commitments</h3>
              <p className="text-xs text-muted-foreground mb-6">What you can hold us to on every placement</p>
              <ul className="space-y-4">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm md:text-base text-navy font-medium">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold stroke-[2.5]" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="sheen-on-hover group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-all duration-300 hover:scale-[1.03]"
                style={{ background: "var(--gradient-gold)" }}
              >
                Start This Engagement
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ SECTION 3: CAPABILITIES (COMMENTED OUT AS REQUESTED) ━━━ */}
      {false && (
      <section className="bg-gradient-to-br from-[#091124] via-[#0e1b38] to-[#091124] py-28 text-primary-foreground border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle at 75% 25%, oklch(0.74 0.14 82 / 0.4), transparent 55%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <SectionHeading
            tone="light"
            eyebrow="Capabilities"
            title="Core Workstreams Included in This Service"
            description="Concrete capabilities engineered to deliver calibrated candidates and operational momentum."
            className="max-w-5xl"
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {service.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="group h-full flex flex-col justify-between rounded-2xl border border-gold/30 bg-gradient-to-br from-[#0c162c] via-[#0f1d3b] to-[#172a54] p-8 shadow-lg transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] card-streak relative overflow-hidden">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold mb-6 transition-transform duration-500 group-hover:scale-110">
                      <span className="font-mono text-xs font-bold text-gold">0{i + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                      {c.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-primary-foreground/80">
                      {c.body}
                    </p>
                  </div>
                  <span className="mt-8 block h-0.5 w-12 origin-left scale-x-100 bg-gold transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-x-[4]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ━━━ SECTION 4: DELIVERY PROCESS (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
      <section className="py-28 bg-navy-deep relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 30%, oklch(0.74 0.14 82 / 0.4), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <SectionHeading
            tone="light"
            eyebrow="Delivery process"
            title="How This Engagement Runs"
            description="Predictable stages, clear ownership, and a named point of contact throughout."
            className="max-w-5xl"
          />

          <div className="relative mt-20">
            <div className="hidden lg:block absolute top-[36px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 z-0 shadow-[0_0_15px_rgba(212,175,55,0.6)]" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {service.process.map((p, i) => (
                <Reveal key={p.step} delay={i * 110}>
                  <div className="group h-full flex flex-col justify-between rounded-2xl border-t-4 border-t-gold border-x border-b border-white/15 bg-gradient-to-br from-[#0c162c] via-[#0f1d3b] to-[#172a54] backdrop-blur-md p-7 shadow-lg transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-2.5 hover:border-gold hover:bg-gradient-to-br hover:from-[#112042] hover:to-[#1e366b] hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] card-streak relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-navy-deep shadow-[0_0_20px_rgba(212,175,55,0.6)] font-mono font-extrabold text-base transition-all duration-500 group-hover:scale-110"
                          style={{ background: "var(--gradient-gold)" }}
                        >
                          {p.step}
                        </div>
                        <span className="font-mono text-[10px] font-bold tracking-widest text-gold bg-gold/15 px-3 py-1 rounded-full border border-gold/30">
                          PHASE 0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-primary-foreground/80">
                        {p.body}
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

      {/* ━━━ SECTION 5: CANDIDATE VETTING MATRIX (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
      <section className="py-28 bg-[color:var(--muted)] border-b border-border">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Quality Control"
            title="Rigorous 4-Stage Candidate Vetting & Briefing"
            description="No candidate is submitted without structured technical evaluation and clear written scorecards."
            className="max-w-5xl"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BrainCircuit, title: "Skill-Graph Taxonomy", body: "Matches candidate code repositories, frameworks, and architecture patterns beyond résumé keywords." },
              { icon: UserCheck, title: "45-Min Recruiter Call", body: "Specialist recruiters interview candidates to evaluate communication, problem solving, and culture fit." },
              { icon: ShieldCheck, title: "Audit-Ready Verification", body: "Verification of credentials, employment history, certifications, and right-to-work compliance." },
              { icon: FileText, title: "Executive Written Brief", body: "Every profile arrives with a 1-page briefing outlining salary expectations, notice period, and key strengths." },
            ].map((vet, i) => (
              <Reveal key={vet.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border-t-4 border-t-gold border-x border-b border-border bg-card p-7 shadow-sm transition-all duration-500 hover:border-gold hover:shadow-xl hover:-translate-y-1.5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-navy-deep mb-6 shadow-gold transition-transform duration-500 group-hover:scale-110"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <vet.icon className="h-6 w-6 text-navy-deep stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">{vet.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{vet.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ━━━ SECTION 6: FLEXIBLE SOURCING & ENGAGEMENT MODELS (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
      <section className="py-28 bg-gradient-to-br from-[#091124] via-[#0e1b38] to-[#091124] text-primary-foreground border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 relative z-10">
          <SectionHeading
            tone="light"
            eyebrow="Engagement options"
            title="Flexible Models Built Around Your Operating Cadence"
            description="Choose the delivery structure that fits your project timelines and budget parameters."
            className="max-w-5xl"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                model: "Staff Augmentation",
                desc: "Add vetted engineers or specialists directly to your daily standups and sprint boards.",
                features: ["48-Hour Shortlist", "Flexible Monthly Contracts", "Direct Engineering Oversight"],
              },
              {
                model: "Dedicated Pods",
                desc: "Deploy autonomous engineering or project squads led by a senior delivery manager.",
                features: ["SLA-Driven Milestones", "Complete Team Onboarding", "Scale Up / Down on Demand"],
              },
              {
                model: "Permanent Search",
                desc: "Hire core tech leads and executive leadership with long-term retention warranties.",
                features: ["90-180 Day Warranty", "Discreet Market Mapping", "Structured Salary Negotiation"],
              },
            ].map((m, i) => (
              <Reveal key={m.model} delay={i * 100}>
                <div className="group flex flex-col justify-between h-full rounded-2xl border border-gold/30 bg-gradient-to-br from-[#0c162c] via-[#0f1d3b] to-[#172a54] p-8 shadow-lg transition-all duration-500 hover:border-gold hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] hover:-translate-y-2 card-streak relative overflow-hidden">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-3 group-hover:text-gold transition-colors">{m.model}</h3>
                    <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">{m.desc}</p>
                    <ul className="space-y-3 border-t border-white/15 pt-5">
                      {m.features.map((f) => (
                        <li key={f} className="text-xs md:text-sm font-medium text-primary-foreground flex items-center gap-2">
                          <Check className="h-4 w-4 text-gold shrink-0 stroke-[2.5]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-navy-deep"
                  >
                    Select Model
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ━━━ SECTION 7: RELATED SERVICES (DARK NAVY) ━━━ */}
      <section className="bg-navy-deep py-28 border-t border-white/10 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            tone="light"
            eyebrow="Explore options"
            title="Related Staffing Solutions"
            description="Complementary capabilities designed to support your broader talent agenda."
          />

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {related.map((rel, i) => (
              <Reveal key={rel.slug} delay={i * 90}>
                <ServiceCard service={rel} icon={serviceIcons[rel.slug]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 8: CTA BANNER (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
      <section className="relative overflow-hidden">
        <img
          src={bannerCareers}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="ken-burns h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-4xl px-5 text-center">
            <Reveal>
              <h2 className="text-3xl text-primary-foreground sm:text-4xl font-semibold">
                Ready to launch your {service.title} search?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
                Book a 15-minute calibration call with a domain specialist. No obligation, no retainer upfront.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="sheen-on-hover group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-all duration-300 hover:scale-[1.04]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Book a calibration call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/25 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  View All Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}