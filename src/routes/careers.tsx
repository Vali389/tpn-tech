import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Coffee, GraduationCap, HeartPulse, Rocket } from "lucide-react";
import bannerCareers from "@/assets/banner-careers.jpg";
import bannerServices from "@/assets/banner-services.jpg";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at TPN Tech | Join Our Staffing Team" },
      {
        name: "description",
        content:
          "Open roles at TPN Tech plus live client mandates. Join a staffing team that pairs AI tooling with real recruiting craft.",
      },
      { property: "og:title", content: "Careers at TPN Tech | Join Our Staffing Team" },
      {
        property: "og:description",
        content: "Recruiting, delivery and technology roles at TPN Tech — plus live openings with our clients.",
      },
    ],
  }),
  component: CareersPage,
});

const perks = [
  { icon: Rocket, title: "Real ownership", body: "Own mandates end to end from your first quarter, with a senior partner backing you." },
  { icon: GraduationCap, title: "Funded learning", body: "Certification budget and internal bootcamps on AI tooling and domain hiring." },
  { icon: HeartPulse, title: "Health & family cover", body: "Comprehensive insurance for you and dependants from day one." },
  { icon: Coffee, title: "Hybrid by default", body: "Three days in office, two remote, with core-hour flexibility across time zones." },
];

const openings = [
  { title: "Senior Technical Recruiter", team: "IT Staffing", location: "Dallas, TX · Hybrid", type: "Full-time" },
  { title: "Executive Search Consultant", team: "Leadership Practice", location: "New York, NY · Hybrid", type: "Full-time" },
  { title: "AI Engineer — Matching Platform", team: "Product & Engineering", location: "Remote (US)", type: "Full-time" },
  { title: "Payroll & Compliance Analyst", team: "Workforce Operations", location: "Bengaluru, IN", type: "Full-time" },
  { title: "Client Delivery Manager", team: "Contract Staffing", location: "Dallas, TX", type: "Full-time" },
  { title: "Talent Sourcing Associate", team: "Sourcing Hub", location: "Remote (IN)", type: "Full-time" },
];

function CareersPage() {
  return (
    <div className="overflow-x-hidden">
      <PageBanner
        image={bannerCareers}
        eyebrow="Careers"
        title="Build a recruiting career with better tools behind you"
        description="We hire recruiters who like the craft and engineers who like the problem. Everyone here works on hiring outcomes, not submission counts."
      />

      <section className="py-24 bg-[color:var(--muted)] border-b border-border">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Life at TPN Tech"
            title="What you get beyond the job title"
            description="A small, senior team where the work is visible and the feedback is direct."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border-t-4 border-t-gold border-x border-b border-border bg-card p-7 transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-2 hover:border-gold hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-navy-deep shadow-gold mb-5 transition-transform duration-500 group-hover:scale-110">
                    <p.icon className="h-6 w-6 stroke-[2.5]" />
                  </span>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGINAL OPEN ROLES SECTION */}
      <section className="relative overflow-hidden py-24">
        <img
          src={bannerServices}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={700}
          className="absolute inset-0 h-full w-full object-cover opacity-80 pointer-events-none"
        />
        <div className="absolute inset-0 bg-navy-deep/88" />
        <div className="relative mx-auto max-w-5xl px-5">
          <SectionHeading tone="light" eyebrow="Open roles" title="Currently hiring" />
          <div className="mt-14 space-y-4">
            {openings.map((job, i) => (
              <Reveal key={job.title} delay={i * 80}>
                <Link
                  to="/contact"
                  className="group flex flex-col gap-4 rounded-2xl border border-primary-foreground/12 bg-navy-deep/60 p-6 backdrop-blur-md transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-1.5 hover:border-gold/45 hover:bg-navy/60 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-lg text-primary-foreground transition-colors duration-300 group-hover:text-gold">
                      {job.title}
                    </h3>
                    <p className="mt-1.5 text-xs tracking-[0.14em] text-primary-foreground/50 uppercase">
                      {job.team} · {job.location} · {job.type}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Apply
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-12 text-center">
            <p className="text-sm text-primary-foreground/60">
              Nothing that fits? Send your profile to{" "}
              <a href="mailto:careers@tpntech.com" className="text-gold underline-offset-4 hover:underline">
                careers@tpntech.com
              </a>{" "}
              — we keep good people on file.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}