import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import texture from "@/assets/texture-dark.jpg";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      <img
        src={texture}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/80 to-navy-deep/60" />

      <div className="relative mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="TPN Tech" loading="lazy" width={44} height={44} className="h-11 w-11" />
              <span className="font-display text-2xl">TPN Tech</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              AI-driven staffing and talent solutions. We combine intelligent matching with specialist
              recruiters to build teams that last.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-primary-foreground/65 transition-colors hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Company</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/65 transition-colors hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-primary-foreground/65 transition-colors hover:text-gold">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/65 transition-colors hover:text-gold">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/65 transition-colors hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>1201 Corporate Way, Suite 400, Dallas, TX 75201</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+18005550142" className="transition-colors hover:text-gold">
                  +1 800 555 0142
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:talent@tpntech.com" className="transition-colors hover:text-gold">
                  talent@tpntech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TPN Tech Staffing. All rights reserved.</p>
          <p>Built for teams that hire with intent.</p>
        </div>
      </div>
    </footer>
  );
}