import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, icon: Icon }: { service: Service; icon?: React.ElementType }) {
  const isTeal = service.accent === "teal";
  const bgAccent = isTeal ? "bg-teal" : "bg-gold";

  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-elegant transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_20px_40px_rgba(212,175,55,0.18)]"
      )}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

        {/* Gold icon badge — top-left, matching reference */}
        {Icon && (
          <div
            className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-gold transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Icon className="h-6 w-6 text-navy-deep" />
          </div>
        )}

        {service.popular ? (
          <span
            className={cn(
              "absolute right-4 top-4 rounded-full px-3 py-1 text-[0.62rem] font-bold tracking-[0.18em] text-navy-deep transition-transform duration-500 group-hover:scale-105",
              bgAccent,
            )}
          >
            POPULAR
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-7 z-20">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-gold mb-2 transition-colors duration-300">
          {service.tagline}
        </p>
        <h3 className="text-xl font-semibold text-navy mb-3 transition-colors duration-500 group-hover:text-gold">
          {service.title}
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-500 group-hover:text-gold">
          Explore Service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <span
        className={cn(
          "absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-x-100",
          bgAccent,
        )}
      />
    </Link>
  );
}