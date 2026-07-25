import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  // { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-premium)]",
        scrolled
          ? "border-b border-gold/20 bg-navy-deep/90 py-2.5 backdrop-blur-xl shadow-lg"
          : "border-b border-transparent bg-gradient-to-b from-navy-deep/80 to-transparent py-4",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5">
        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="TPN Tech logo"
            width={48}
            height={48}
            className="h-10 w-10 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:rotate-6 group-hover:scale-110"
          />
          <span className="leading-none">
            <span className="block font-display text-xl text-primary-foreground">TPN Tech</span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-gold font-semibold">STAFFING &amp; TALENT</span>
          </span>
        </Link>

        {/* DESKTOP NAV WITH ACTIVE GOLD HIGHLIGHT BADGE */}
        <nav className="hidden items-center gap-2 lg:flex bg-white/[0.04] border border-white/10 p-1.5 rounded-full backdrop-blur-md">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className:
                  "text-gold font-bold bg-gold/20 border border-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.4)]",
              }}
              className="relative px-4 py-1.5 rounded-full text-sm font-semibold text-primary-foreground/80 transition-all duration-300 hover:text-gold hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/contact"
            className="sheen-on-hover rounded-full px-6 py-2.5 text-sm font-semibold text-navy-deep shadow-gold transition-all duration-300 hover:scale-[1.05]"
            style={{ background: "var(--gradient-gold)" }}
          >
            Hire Talent
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU WITH ACTIVE HIGHLIGHT */}
      <div
        className={cn(
          "overflow-hidden bg-navy-deep/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[var(--ease-premium)] lg:hidden border-b border-gold/20",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1.5 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "text-gold font-bold bg-gold/20 border border-gold/50",
              }}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl text-base font-semibold text-primary-foreground/80 hover:text-gold hover:bg-white/5 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}