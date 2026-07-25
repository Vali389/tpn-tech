import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send, ShieldCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";
import bannerContact from "@/assets/contact-hero-image.jpg";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TPN Tech | Talk to a Staffing Specialist" },
      {
        name: "description",
        content:
          "Book a calibration call with TPN Tech. Tell us the role, the timeline and the bar — we will come back with a plan.",
      },
      { property: "og:title", content: "Contact TPN Tech | Talk to a Staffing Specialist" },
      {
        property: "og:description",
        content: "Reach the TPN Tech staffing team by phone, email or the enquiry form.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, label: "Global HQ Office", value: "1201 Corporate Way, Suite 400, Dallas, TX 75201" },
  { icon: Phone, label: "Direct Client Line", value: "+1 800 555 0142" },
  { icon: Mail, label: "Dedicated Email Desk", value: "talent@tpntech.com" },
  { icon: Clock, label: "Operating Hours", value: "Mon – Fri, 8:00 – 19:00 CT (24/7 SLA Support)" },
];

const inputClass =
  "w-full rounded-xl border border-gold/30 bg-[#091124] px-4 py-3 text-sm text-primary-foreground outline-none transition-all duration-300 placeholder:text-primary-foreground/50 focus:border-gold focus:ring-2 focus:ring-gold/30 shadow-inner";

function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Enquiry received successfully!", {
        description: "A TPN Tech executive partner will review your requirements and reply within 1 business hour.",
      });
    }, 700);
  };

  return (
    <div className="overflow-x-hidden">
      <PageBanner
        image={bannerContact}
        eyebrow="Contact"
        title="Tell us the role. We will bring the plan."
        description="One calibration call is enough to start. Share the requirement, the timeline and the constraints — we will tell you honestly what is achievable."
      />

      {/* ━━━ CONTACT FORM SECTION WITH RICH BACKGROUND IMAGE & DARK GLASS CARDS ━━━ */}
      <section className="relative overflow-hidden py-28 bg-navy-deep text-primary-foreground border-y border-gold/20">
        {/* Background Image Overlay with Sharp Vignette */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={bannerContact}
            alt="TPN Tech Contact Office"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(9, 17, 36, 0.92) 0%, rgba(12, 22, 44, 0.88) 50%, rgba(9, 17, 36, 0.95) 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 z-10">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            {/* LEFT COLUMN: REACH US & EXECUTIVE DESK DETAILS */}
            <div>
              <SectionHeading
                tone="light"
                align="left"
                eyebrow="Reach us directly"
                title="Direct lines, no call centres"
                description="Your enquiry goes straight to a named partner recruiter, not an automated queue."
              />

              <div className="mt-10 space-y-4">
                {details.map((d, i) => (
                  <Reveal key={d.label} delay={i * 100} variant="left">
                    <div className="group flex items-center gap-5 rounded-2xl border border-gold/30 bg-[#0c162c]/90 p-5 backdrop-blur-md transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-1.5 hover:border-gold hover:bg-[#122144] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-navy-deep shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-transform duration-500 group-hover:scale-110"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        <d.icon className="h-6 w-6 stroke-[2.5]" />
                      </div>
                      <div>
                        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                          {d.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-primary-foreground/90">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Executive Response Guarantee Card */}
              <Reveal delay={450} variant="left">
                <div className="mt-8 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent p-6 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="h-5 w-5 text-gold stroke-[2.5]" />
                    <h4 className="text-base font-bold text-gold">1-Hour SLA Guarantee</h4>
                  </div>
                  <p className="text-xs text-primary-foreground/80 leading-relaxed">
                    Enterprise mandates submitted before 17:00 CT receive a dedicated recruiter calibration call within 60 minutes.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* RIGHT COLUMN: HIGH-CONTRAST DARK GLASS ENQUIRY FORM */}
            <Reveal variant="zoom" delay={120}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border-2 border-gold/40 bg-gradient-to-br from-[#0c162c] via-[#0f1d3b] to-[#172a54] p-8 sm:p-10 shadow-[0_0_50px_rgba(212,175,55,0.25)] backdrop-blur-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-3xl font-bold text-primary-foreground">Send an Enquiry</h2>
                  <Sparkles className="h-6 w-6 text-gold animate-pulse" />
                </div>
                <p className="text-sm text-primary-foreground/75 mb-8">
                  Fill out your talent needs below. Fields marked with an asterisk (<span className="text-gold">*</span>) are required.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    required
                    name="name"
                    placeholder="Enter full name *"
                    className={inputClass}
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter work email *"
                    className={inputClass}
                  />

                  <input
                    name="company"
                    placeholder="Enter company name"
                    className={inputClass}
                  />

                  <select name="service" className={inputClass} defaultValue="">
                    <option value="" className="bg-[#0c162c] text-primary-foreground">
                      Select a service requirement
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug} className="bg-[#0c162c] text-primary-foreground">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Enter your message or talent requirements *"
                    className={`resize-none ${inputClass}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="sheen-on-hover group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold text-navy-deep shadow-gold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {sending ? (
                    "Transmitting Enquiry…"
                  ) : (
                    <>
                      Submit Talent Enquiry
                      <Send className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}