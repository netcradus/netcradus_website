import { Award, BadgeCheck, BriefcaseBusiness, Building2, Quote } from "lucide-react";

const logos = [];

const testimonials = [
  {
    name: "Security Leader",
    role: "Enterprise Technology Team",
    quote:
      "Client testimonial ready. Add approved customer proof points here to reinforce trust and buying confidence.",
  },
  {
    name: "Operations Head",
    role: "Global Business Services",
    quote:
      "Use this space for verified outcomes tied to managed SOC, SIEM visibility, incident response, or compliance improvement.",
  },
];

const certifications = [
  { icon: BadgeCheck, label: "Security Certifications" },
  { icon: Award, label: "Industry Awards" },
  { icon: Building2, label: "Enterprise References" },
  { icon: BriefcaseBusiness, label: "Compliance Credentials" },
];

export default function TrustSignals() {
  return (
    <section
      id="trust-signals"
      className="relative overflow-hidden bg-background py-24 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Trust Signals
          </span>
          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Proof points that support <span className="text-accent italic">buyer confidence.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            This section is structured to showcase social proof, delivery outcomes, and
            compliance credibility as real assets and approvals are added.
          </p>
        </div>

        <div className="grid gap-8">
          

          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.06),transparent_40%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
              <h3 className="text-2xl font-black tracking-tight text-text-primary">Testimonials</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {testimonials.map((item) => (
                  <article
                    key={item.name}
                    className="rounded-[24px] border border-border bg-[var(--color-surface-raised)]/70 p-6"
                  >
                    <Quote className="text-accent" size={24} />
                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                      {item.quote}
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <h4 className="text-base font-bold text-text-primary">{item.name}</h4>
                      <p className="text-sm text-text-secondary">{item.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.08),transparent_45%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
              <h3 className="text-2xl font-black tracking-tight text-text-primary">
                Case Study Highlight
              </h3>
              <div className="mt-6 space-y-5 rounded-[24px] border border-accent/20 bg-accent/5 p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    A healthcare client faced repeated phishing-based credential theft
                    affecting staff accounts.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Deployed 24/7 SOC monitoring with AI-driven phishing detection and
                    staff security training protocols.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    Result
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Reduced phishing attack incidents by 72% within 90 days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-border bg-[var(--color-surface)]/85 p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
              <h3 className="text-2xl font-black tracking-tight text-text-primary">
                Certifications &amp; Awards
              </h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {certifications.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-[22px] border border-border bg-[var(--color-surface-raised)]/70 px-4 py-4 text-sm text-text-secondary"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/20 bg-accent/8 text-accent">
                      <Icon size={18} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-border bg-[linear-gradient(90deg,rgba(232,64,10,0.12),transparent_55%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
              <h3 className="text-2xl font-black tracking-tight text-text-primary">
                Follow Netcradus on LinkedIn
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
                Use LinkedIn as the live proof stream for company updates, team growth,
                security insights, event participation, and customer-facing momentum.
              </p>
              <a
                href="https://www.linkedin.com/company/netcradus-limited/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] no-underline"
              >
                Visit LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
