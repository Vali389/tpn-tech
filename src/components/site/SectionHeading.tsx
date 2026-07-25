import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <Reveal>
        <span
          className={cn(
            "eyebrow inline-flex items-center gap-2",
            tone === "light" ? "text-gold" : "text-gold",
          )}
        >
          <span className="h-px w-8 bg-gold/70" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={cn(
            "mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.85rem]",
            tone === "light" ? "text-primary-foreground" : "text-navy",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={170}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed max-w-4xl",
              align === "center" ? "mx-auto" : "",
              tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}