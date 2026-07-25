import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cpu,
  Landmark,
  Heart,
  ShoppingBag,
  Factory,
  Target,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries Served | TPN Tech Staffing" },
      {
        name: "description",
        content:
          "Specialist recruitment pods across Technology, Financial Services, Healthcare, Retail, Manufacturing, and Professional Services.",
      },
      { property: "og:title", content: "Industries Served | TPN Tech Staffing" },
      {
        property: "og:description",
        content: "Deep domain expertise in the sectors driving digital transformation.",
      },
    ],
  }),
  component: IndustriesPage,
});

const industryCards = [
  {
    icon: Cpu,
    name: "Technology & SaaS",
    description:
      "Helping software companies, SaaS platforms, and digital products scale engineering teams and accelerate delivery.",
  },
  {
    icon: Landmark,
    name: "Banking & Fintech",
    description:
      "Enabling secure, compliant, and scalable digital banking, payment gateways, and financial technology initiatives.",
  },
  {
    icon: Heart,
    name: "Healthcare & Life Sciences",
    description:
      "Supporting digital health, clinical systems, health-tech platforms, and patient-centered tech innovation.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description:
      "Enhancing customer experience, omnichannel commerce, inventory AI, and data-driven supply chain platforms.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Energy",
    description:
      "Supporting ERP transformation, IoT automation, smart factory architectures, and digital operations.",
  },
  {
    icon: Target,
    name: "Professional Services",
    description:
      "Deploying high-caliber technical consultants, project leads, and specialized delivery squads on demand.",
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

function IndustriesPage() {
  return (
    <div className="overflow-x-hidden bg-navy-deep min-h-screen">
      {/* ━━━ HERO WITH FLOATING STARS ━━━ */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-75 pointer-events-none" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, oklch(0.14 0.06 265 / 0.88) 0%, oklch(0.14 0.06 265 / 0.65) 50%, oklch(0.14 0.06 265 / 0.45) 100%)",
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
        </div>

        <GoldStar className="absolute top-[25%] left-[8%] w-4 h-4 text-gold opacity-40 star-float pointer-events-none" />
        <GoldStar className="absolute top-[40%] right-[12%] w-3.5 h-3.5 text-gold opacity-65 star-float pointer-events-none" style={{ animationDelay: "0.8s" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center fade-up z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold" />
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase">Industries</p>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h1 className="text-primary-foreground text-4xl md:text-6xl font-semibold leading-[1.1] max-w-4xl mx-auto">
            Deep Expertise Across the <span className="gold-text italic">Sectors</span> You Serve
          </h1>
          <p className="mt-6 text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We bring specialized knowledge and proven delivery to the industries driving digital transformation.
          </p>
        </div>
      </section>

      {/* ━━━ INDUSTRIES GRID (EXACT IMAGE 3 HOVER EFFECT) ━━━ */}
      <section className="py-28 bg-[color:var(--muted)] border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryCards.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 90}>
                <div className="group flex flex-col justify-between h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 ease-[var(--ease-premium)] hover:bg-[#091124] hover:border-gold/50 hover:shadow-[0_20px_50px_rgba(9,17,36,0.3)] hover:-translate-y-2">
                  <div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-gold transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <ind.icon className="h-7 w-7 text-navy-deep" />
                    </div>
                    <h3 className="text-2xl font-semibold text-navy mb-4 transition-colors duration-500 group-hover:text-gold">
                      {ind.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/80">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border group-hover:border-white/10 transition-colors duration-500">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-500 group-hover:text-gold"
                    >
                      Hire Sector Talent
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
