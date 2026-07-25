import { Reveal } from "./Reveal";

function GoldStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
      </svg>
    </div>
  );
}

export function PageBanner({
  image,
  eyebrow,
  title,
  description,
}: {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-navy-deep pt-28">
      {/* CRISP & UNBLURRED BACKGROUND IMAGE */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          width={1920}
          height={700}
          className="hero-zoom h-full w-full object-cover opacity-75"
        />
      </div>

      {/* CLEAN DARK VIGNETTE OVERLAY - NO BLUR */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(9, 17, 36, 0.45) 0%, rgba(9, 17, 36, 0.75) 60%, rgba(9, 17, 36, 0.95) 100%)",
        }}
      />

      {/* Floating Gold Stars */}
      <GoldStar className="absolute top-[25%] left-[8%] w-4 h-4 text-gold opacity-50 star-float pointer-events-none" />
      <GoldStar className="absolute top-[40%] right-[12%] w-3.5 h-3.5 text-gold opacity-75 star-float pointer-events-none" style={{ animationDelay: "0.8s" }} />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 z-10">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-[0.25em]">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] text-primary-foreground font-semibold sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-primary-foreground/85">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}