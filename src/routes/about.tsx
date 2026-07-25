import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Handshake, Layers, ShieldCheck, Calendar, Sparkles, CheckCircle2, Rocket, Award, BrainCircuit } from "lucide-react";
import bannerAbout from "@/assets/banner-about.jpg";
import bannerCareers from "@/assets/banner-careers.jpg";
import texture from "@/assets/texture-dark.jpg";
import svcExecutive from "@/assets/svc-executive.jpg";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TPN Tech | AI Staffing Company" },
      {
        name: "description",
        content:
          "TPN Tech is a staffing firm built around an AI matching engine and specialist recruiters. Learn how we work and what we stand for.",
      },
      { property: "og:title", content: "About TPN Tech | AI Staffing Company" },
      {
        property: "og:description",
        content: "Our story, our operating principles and the people behind TPN Tech staffing.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Compass,
    title: "Judgement over volume",
    body: "We would rather send five argued profiles than fifty forwarded résumés. Our recruiters are measured on hire quality, not submissions.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence, always",
    body: "Every shortlist carries a written rationale, a fit score and verified references. Nothing arrives unexplained.",
  },
  {
    icon: Handshake,
    title: "Candidate respect",
    body: "People hear back. Feedback is honest, timelines are real, and no one is ghosted after an interview.",
  },
  {
    icon: Layers,
    title: "Domain depth",
    body: "Recruiters sit in vertical pods with people who have worked in the sector they hire for.",
  },
];

const timeline = [
  { icon: Rocket, year: "2016", title: "Desk Founded", body: "Started as a three-person technical recruitment desk serving two enterprise tech clients." },
  { icon: Layers, year: "2019", title: "Vertical Pods", body: "Restructured operations into sector-specific recruiting pods with real domain specialists." },
  { icon: BrainCircuit, year: "2022", title: "AI Engine v1", body: "Launched our first skill-graph matching engine to replace keyword resume searching." },
  { icon: Award, year: "2025", title: "Full-Stack Partner", body: "Expanded globally into payroll, compliance, and hire-train-deploy talent solutions." },
];

function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <PageBanner
        image={bannerAbout}
        eyebrow="About us"
        title="A staffing firm that argues its shortlists"
        description="We built TPN Tech because hiring teams were drowning in résumés and starving for judgement. The engine finds people. Our recruiters decide who is worth your time."
      />

      <section className="py-24 bg-[color:var(--muted)] border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              <img
                src={svcExecutive}
                alt="TPN Tech leadership team in a strategy meeting"
                loading="lazy"
                width={1024}
                height={768}
                className="h-[480px] w-full object-cover shadow-2xl opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title="Ten years of hiring, rebuilt around better tooling"
              description="TPN Tech works with technology, financial services, healthcare and industrial clients across the US and India. Our teams run permanent search, contract deployment, executive mandates and workforce compliance under a single delivery standard."
            />
            <Reveal delay={200}>
              <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                We are deliberately not the largest firm in the market. Every mandate has a named owner, every
                client has a direct line, and we turn down searches we cannot staff properly. That constraint is
                the product.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy border-b-2 border-gold pb-1 transition-all hover:gap-4 hover:text-gold"
              >
                Work with us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ PRINCIPLES ━━━ */}
      <section className="relative overflow-hidden bg-navy-deep py-28 text-primary-foreground border-b border-white/10">
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-30 pointer-events-none"
        />
        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <SectionHeading tone="light" eyebrow="Principles" title="Four rules we do not bend" className="max-w-5xl" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 110}>
                <div className="group h-full rounded-2xl border border-gold/30 bg-[#0c162c] p-8 transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-2 hover:border-gold hover:bg-[#122144] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold mb-5 transition-transform duration-500 group-hover:scale-110">
                    <v.icon className="h-6 w-6 text-gold stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-3 group-hover:text-gold transition-colors">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/75">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ OUR JOURNEY (ULTRA-MODERN INTERACTIVE STEPPER) ━━━ */}
      <section className="py-28 bg-gradient-to-br from-[#091124] via-[#0e1b38] to-[#091124] text-primary-foreground relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 30%, oklch(0.74 0.14 82 / 0.4), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <SectionHeading
            tone="light"
            eyebrow="Our journey"
            title="How the firm took shape over a decade"
            description="From a three-person desk to an AI-driven global staffing partner."
            className="max-w-5xl"
          />

          <div className="relative mt-24">
            {/* Glowing horizontal gold connecting line */}
            <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 z-0 shadow-[0_0_20px_rgba(212,175,55,0.8)]" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 120}>
                  <div className="group h-full flex flex-col justify-between rounded-2xl border-t-4 border-t-gold border-x border-b border-white/15 bg-gradient-to-br from-[#0c162c] via-[#0f1d3b] to-[#172a54] backdrop-blur-md p-8 shadow-xl transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-3 hover:border-gold hover:bg-gradient-to-br hover:from-[#112042] hover:to-[#1e366b] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] card-streak relative overflow-hidden">
                    <div>
                      {/* Top Node & Year Pill */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-navy-deep shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-500 group-hover:scale-110"
                          style={{ background: "var(--gradient-gold)" }}
                        >
                          <t.icon className="h-7 w-7 text-navy-deep stroke-[2.5]" />
                        </div>
                        <span className="font-mono text-sm font-extrabold tracking-widest text-navy-deep bg-[var(--gradient-gold)] px-4 py-1.5 rounded-full shadow-gold">
                          {t.year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                        {t.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-primary-foreground/80">
                        {t.body}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-gold/80 font-semibold">
                        MILESTONE 0{i + 1}
                      </span>
                      <Sparkles className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ━━━ CTA BANNER (COMMENTED OUT AS REQUESTED) ━━━ */}
      {/* 
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
      */}
    </div>
  );
}