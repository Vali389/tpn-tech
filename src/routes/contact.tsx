import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import bannerContact from "@/assets/banner-contact.jpg";
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
  { icon: MapPin, label: "Office", value: "1201 Corporate Way, Suite 400, Dallas, TX 75201" },
  { icon: Phone, label: "Phone", value: "+1 800 555 0142" },
  { icon: Mail, label: "Email", value: "talent@tpntech.com" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 8:00 – 19:00 CT" },
];

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-hidden transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/25";

function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Enquiry received", {
        description: "A TPN Tech specialist will reply within one business day.",
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

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reach us"
              title="Direct lines, no call centre"
              description="Your enquiry goes straight to a recruiting lead, not a shared inbox."
            />
            <div className="mt-10 space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 100} variant="left">
                  <div className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-gold/45 hover:shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold transition-transform duration-500 group-hover:scale-110">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="eyebrow text-muted-foreground">{d.label}</p>
                      <p className="mt-1.5 text-sm text-foreground/85">{d.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="zoom" delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10"
            >
              <h2 className="text-2xl text-navy">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fields marked with an asterisk are required.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Full name *</span>
                  <input required name="name" placeholder="Jane Whitfield" className={`mt-2 ${inputClass}`} />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Work email *</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    className={`mt-2 ${inputClass}`}
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Company</span>
                  <input name="company" placeholder="Company name" className={`mt-2 ${inputClass}`} />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Service needed</span>
                  <select name="service" className={`mt-2 ${inputClass}`} defaultValue="">
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-5 block">
                <span className="eyebrow text-muted-foreground">How can we help? *</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about the roles, timeline and team context."
                  className={`mt-2 resize-none ${inputClass}`}
                />
              </label>

              <button
                type="submit"
                disabled={sending}
                className="sheen-on-hover group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
                style={{ background: "var(--gradient-gold)" }}
              >
                {sending ? "Sending…" : "Send enquiry"}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}