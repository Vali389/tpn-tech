import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Users,
  Layers,
  Search,
  FileCheck,
  Award,
  ShieldCheck,
  Gauge,
  Target,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import bannerCareers from "@/assets/banner-careers.jpg";
import heroServices from "@/assets/banner-services.jpg";
import { services } from "@/data/services";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { useState } from "react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Staffing Services | TPN Tech" },
      {
        name: "description",
        content:
          "AI recruitment, IT staffing, permanent hiring, contract deployment, executive search, payroll compliance and upskilling from TPN Tech.",
      },
      { property: "og:title", content: "Staffing Services | TPN Tech" },
      {
        property: "og:description",
        content: "Seven staffing services, one AI-plus-human delivery model. Explore what TPN Tech can run for you.",
      },
    ],
  }),
  component: ServicesPage,
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

const serviceFaqs = [
  {
    q: "How does TPN Tech handle candidate vetting for specialized IT roles?",
    a: "Our AI engine scores candidates against role-specific technical taxonomies. Domain-specialist recruiters then conduct a 45-minute technical and behavioral interview before presenting any profile.",
  },
  {
    q: "What engagement models do you support for contract staffing?",
    a: "We support staff augmentation, dedicated project pods, time & materials (T&M), and milestone-based deliverables across onshore, nearshore, and offshore locations.",
  },
  {
    q: "What is your replacement warranty on permanent placements?",
    a: "Every permanent placement includes a 90-day (up to 180-day) replacement warranty. If a hire leaves or underperforms against agreed KPIs, we replace them at no extra charge.",
  },
];

function GoldStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
      </svg>
    </div>
  );
}

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-x-hidden">
      {/* ━━━ SECTION 1: SERVICES HERO (DARK NAVY) ━━━ */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={heroServices} alt="" className="w-full h-full object-cover hero-zoom opacity-30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, oklch(0.14 0.06 265 / 0.85) 0%, oklch(0.14 0.06 265 / 0.55) 50%, oklch(0.14 0.06 265 / 0.35) 100%)",
            }}
          />
          <div
            className="absolute -top-[40%] -right-[20%] w-[900px] h-[900px] pointer-events-none spin-slow opacity-70"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, oklch(0.86 0.10 88 / 0.35) 20deg, transparent 60deg, transparent 180deg, oklch(0.74 0.14 82 / 0.28) 200deg, transparent 240deg, transparent 360deg)",
              filter: "blur(40px)",
              borderRadius: "9999px",
            }}
          />
        </div>

        <GoldStar className="absolute top-[25%] left-[8%] w-4 h-4 text-gold opacity-40 star-float pointer-events-none" />
        <GoldStar className="absolute top-[40%] right-[12%] w-3.5 h-3.5 text-gold opacity-65 star-float pointer-events-none" style={{ animationDelay: "0.8s" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center fade-up z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold" />
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase">What We Do</p>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h1 className="text-primary-foreground text-4xl md:text-6xl font-semibold leading-[1.1] max-w-4xl mx-auto">
            End-to-End Capabilities That Drive <span className="gold-text italic">Outcomes</span>
          </h1>
          <p className="mt-6 text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From a single specialist engineer to an entire contingent workforce — every engagement runs on the same AI-plus-human model.
          </p>
        </div>
      </section>

      {/* ━━━ SECTION 2: SERVICES LIST (ALTERNATING LEFT/RIGHT LAYOUT - LIGHT CEMENT) ━━━ */}
      <section className="py-24 bg-[color:var(--muted)] border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug];
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-14 items-center ${isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <Reveal delay={100}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-elegant object-cover w-full h-[440px]"
                    />
                    {Icon && (
                      <div
                        className="absolute -bottom-5 -left-5 w-20 h-20 rounded-2xl flex items-center justify-center shadow-gold transition-transform duration-500 hover:scale-110"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        <Icon className="w-9 h-9 text-navy-deep" />
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div>
                    <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                      {service.tagline}
                    </p>
                    <h2 className="text-4xl font-semibold text-navy mb-5 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.summary}
                    </p>

                    <ul className="grid grid-cols-2 gap-4 mb-8">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-gold mt-1">◆</span>
                          {cap.title}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="group inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-4 hover:text-gold transition-all"
                    >
                      Explore this service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* ━━━ SECTION 3: SERVICE SLA & DELIVERY GUARANTEE (DARK NAVY GRADIENT) ━━━ */}
      <section className="py-24 bg-gradient-to-br from-[#091124] via-[#0e1b38] to-[#091124] text-primary-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            tone="light"
            eyebrow="Delivery standards"
            title="Service SLAs & Quality Commitments"
            description="Our service level commitments are backed by financial guarantees and transparent reporting."
            className="max-w-5xl"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Gauge, title: "48-Hour Shortlist SLA", desc: "First 3-5 pre-vetted candidate profiles delivered within 48 hours." },
              { icon: ShieldCheck, title: "180-Day Guarantee", desc: "Full replacement warranty for permanent hires up to 6 months." },
              { icon: FileCheck, title: "100% EOR Compliance", desc: "Audit-ready employment, tax, and labor law compliance." },
              { icon: Target, title: "Dedicated Recruiter Pod", desc: "Direct access to domain-specialist account leads for every role." },
            ].map((sla, i) => (
              <Reveal key={sla.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-white/10 bg-[#0c162c] p-6 transition-all duration-500 hover:border-gold hover:bg-[#121f3d] hover:-translate-y-1 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110">
                    <sla.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-gold transition-colors">{sla.title}</h3>
                  <p className="text-xs md:text-sm text-primary-foreground/75 leading-relaxed">{sla.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 4: FREQUENTLY ASKED SERVICES QUESTIONS (LIGHT CEMENT) ━━━ */}
      <section className="py-24 bg-[color:var(--muted)] border-b border-border">
        <div className="mx-auto max-w-4xl px-5">
          <SectionHeading
            eyebrow="Service FAQ"
            title="Frequently Asked Questions About Our Services"
            className="max-w-5xl"
          />

          <div className="mt-12 space-y-4">
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:border-gold/50">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-lg font-semibold text-navy flex items-center gap-3">
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
                      <div className="px-6 pb-6 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border">
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

      {/* ━━━ SECTION 5: CTA BANNER ━━━ */}
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
              <h2 className="text-3xl text-primary-foreground sm:text-4xl">
                Not sure which service you need?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
                Describe the problem in a sentence. We will tell you whether it is a search, a contract pod or a
                training gap — even if the answer is none of ours.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="sheen-on-hover group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Book a calibration call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}