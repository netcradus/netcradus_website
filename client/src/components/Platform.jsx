import React, { useEffect } from "react";
import { Download, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";
import PageHero from "./PageHero";

const platformSections = [
  {
    id: "acis-overview",
    title: "The Autonomous Cyber Immune System",
    description:
      "ACIS is Netcradus's flagship AI-powered cybersecurity platform. It continuously monitors, detects, and responds to threats autonomously — reducing human dependency and improving response times from hours to seconds.",
    features: [
      "Real-time threat detection",
      "AI-driven analysis",
      "Automated response",
      "Continuous learning",
      "Compliance-ready",
    ],
    image: "/generated/ChatGPT Image 1.png",
    cardClass: "lg:grid-cols-[1.05fr_0.95fr]",
    cta: true,
  },
  {
    id: "acis-lite",
    title: "Affordable Security for Growing Businesses",
    description:
      "ACIS Lite delivers core autonomous threat detection and response capabilities for startups and SMEs. Get enterprise-grade protection without enterprise-level cost.",
    features: [
      "Core AI-SIEM",
      "Basic SOAR automation",
      "Up to 500 endpoints",
      "Email and Slack alerting",
      "Monthly compliance reports",
    ],
    image: "/generated/j.png",
    tier: "Lite",
  },
  {
    id: "acis-pro",
    title: "Advanced Protection for Scale-Up Organizations",
    description:
      "ACIS Pro extends Lite with deeper analytics, custom playbooks, and priority SOC support — built for companies scaling their security operations.",
    features: [
      "Full AI-SIEM",
      "Advanced SOAR",
      "Up to 5,000 endpoints",
      "Shadow AI detection",
      "Custom dashboards",
      "Dedicated analyst support",
    ],
    image: "/generated/han.png",
    tier: "Pro",
    featured: true,
  },
  {
    id: "acis-enterprise",
    title: "Autonomous Security at Enterprise Scale",
    description:
      "ACIS Enterprise is a fully customizable, white-glove deployment of the ACIS platform for large organizations with complex infrastructure and compliance requirements.",
    features: [
      "Unlimited endpoints",
      "Custom integrations",
      "On-premise or hybrid deployment",
      "24/7 dedicated SOC team",
      "SLA guarantees",
      "Regulatory compliance packs (ISO/IEC 27001:2022, GDPR, CERT-In)",
    ],
    image: "/generated/corporate_office_cyber_1773394698579.png",
    tier: "Enterprise",
  },
  {
    id: "ai-siem-engine",
    title: "Intelligence at the Core of Your Security Stack",
    description:
      "The AI-SIEM Engine is the analytical brain of ACIS — processing millions of log events per second, correlating signals, and surfacing only the alerts that matter.",
    features: [
      "Multi-source log ingestion",
      "ML-based anomaly detection",
      "UEBA",
      "Real-time threat correlation",
      "Sub-minute alert generation",
    ],
    image: "/generated/jlk.png",
  },
  {
    id: "soar-automation",
    title: "Respond Faster. Automatically.",
    description:
      "Netcradus SOAR Automation eliminates manual response steps by executing predefined and AI-generated playbooks the moment a threat is confirmed.",
    features: [
      "200+ pre-built playbooks",
      "Custom workflow builder",
      "Bi-directional integrations (JIRA, ServiceNow, Slack, PagerDuty)",
      "Audit trail for compliance",
      "Zero-touch incident containment",
    ],
    image: "/generated/cyber.png",
  },
];

export default function Platform() {
  usePageMeta(SEO_META.platform.title, SEO_META.platform.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tierCards = platformSections.filter((section) => section.tier);

  return (
    <div className="bg-background transition-colors duration-500">
      <PageHero
        label="// PLATFORM"
        title="The Netcradus Cybersecurity Platform"
        subtitle="Explore ACIS, its deployment tiers, and the intelligence engines that power autonomous cyber defense at enterprise scale."
        backgroundImage="/img/platform bg.png"
        media={
          <div className="flex items-center justify-center">
            <div
              className="w-full"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 82%, transparent 100%), linear-gradient(to right, black 0%, black 94%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 82%, transparent 100%), linear-gradient(to right, black 0%, black 94%, transparent 100%)",
                maskComposite: "intersect",
              }}
            >
              <img src="/img/platform hero image.png" alt="ACIS platform" className="max-w-full object-contain" />
            </div>
          </div>
        }
      />

      <section className="sticky top-20 z-20 border-y border-border bg-background/80 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap gap-3 px-4 sm:px-6 lg:px-16 xl:px-24">
          {[
            "ACIS Overview",
            "ACIS Lite",
            "ACIS Pro",
            "ACIS Enterprise",
            "AI-SIEM Engine",
            "SOAR Automation",
            "AI Security",
          ].map((label, index) => (
            <a
              key={label}
              href={label === "AI Security" ? "#ai-security" : `#${platformSections[index].id}`}
              className="rounded-full border border-border bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-accent/30 hover:text-accent hover:shadow-[0_0_20px_rgba(232,64,10,0.1)]"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid gap-6 lg:grid-cols-3">
            {tierCards.map((tier) => (
              <article
                key={tier.id}
                id={tier.id}
                className={`premium-card rounded-[28px] border p-8 backdrop-blur-md ${
                  tier.featured
                    ? "border-accent/30 bg-[linear-gradient(180deg,rgba(232,64,10,0.08),transparent_55%),var(--color-surface)] shadow-[0_0_40px_rgba(232,64,10,0.12)]"
                    : "border-border bg-[var(--color-surface)]/88"
                }`}
              >
                <div className="mb-4 inline-flex rounded-full border border-accent/15 bg-accent/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  {tier.tier}
                </div>
                <h2 className="text-3xl font-black tracking-tight text-text-primary">{tier.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="mx-auto max-w-screen-2xl space-y-8 px-4 pb-24 sm:px-6 lg:px-16 xl:px-24">
          {platformSections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className={`grid gap-8 rounded-[32px] border border-border bg-[var(--color-surface)]/88 p-6 shadow-[0_18px_60px_rgba(232,64,10,0.06)] backdrop-blur-md md:p-8 lg:items-center ${section.cardClass || ""} ${
                index % 2 === 1 ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 inline-flex rounded-full border border-accent/15 bg-accent/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  {section.tier || section.title}
                </div>
                <h2 className="text-3xl font-black tracking-tight text-text-primary md:text-5xl">{section.title}</h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">{section.description}</p>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-[20px] border border-border bg-[var(--color-surface-raised)]/70 px-4 py-3 text-sm text-text-secondary shadow-[0_0_22px_rgba(232,64,10,0.04)]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                {section.cta ? (
                  <a
                    href="/assets/acis-whitepaper.pdf"
                    download
                    className="btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em]"
                  >
                    Download ACIS White Paper
                    <Download size={16} />
                  </a>
                ) : null}
                {section.id === "soar-automation" ? (
                  <div id="integrations-api" className="mt-8 rounded-[24px] border border-accent/15 bg-accent/6 p-6">
                    <h3 className="text-xl font-black text-text-primary">Integrations / API</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      Connect ACIS with enterprise tooling across ticketing, collaboration, alerting, and orchestration systems using managed integrations and API-led workflows.
                    </p>
                    <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-bright">
                      Request integration details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                ) : null}
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_40%),var(--color-surface)] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(232,64,10,0.12),transparent_55%)]" />
                  <img src={section.image} alt={section.title} className="relative h-[320px] w-full rounded-[22px] object-cover" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-security" className="py-24 border-t border-border">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent font-display md:text-[12px]">
              // AI Security
            </span>
            <h2 className="text-3xl font-black tracking-tight text-text-primary md:text-5xl">Models We Protect</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Secure your generative AI and machine learning infrastructure against specialized attack vectors.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            <div className="rounded-[20px] border-l-4 border-l-emerald-500 border-y border-r border-border bg-[var(--color-surface)]/88 p-6 shadow-sm">
              <img src="/img/openai.png" alt="OpenAI GPT" className="mb-4 h-16 w-16 object-contain" />
              <h3 className="text-xl font-bold text-text-primary mb-2">OpenAI GPT</h3>
              <p className="text-sm text-text-secondary font-medium">Protected by ACIS</p>
            </div>
            <div className="rounded-[20px] border-l-4 border-l-[#F37021] border-y border-r border-border bg-[var(--color-surface)]/88 p-6 shadow-sm">
              <img src="/img/claude.png" alt="Anthropic Claude" className="mb-4 h-16 w-16 object-contain" />
              <h3 className="text-xl font-bold text-text-primary mb-2">Anthropic Claude</h3>
              <p className="text-sm text-text-secondary font-medium">Protected by ACIS</p>
            </div>
            <div className="rounded-[20px] border-l-4 border-l-blue-500 border-y border-r border-border bg-[var(--color-surface)]/88 p-6 shadow-sm">
              <img src="/img/gemini.png" alt="Google Gemini" className="mb-4 h-16 w-16 object-contain" />
              <h3 className="text-xl font-bold text-text-primary mb-2">Google Gemini</h3>
              <p className="text-sm text-text-secondary font-medium">Protected by ACIS</p>
            </div>
            <div className="rounded-[20px] border-l-4 border-l-zinc-500 border-y border-r border-border bg-[var(--color-surface)]/88 p-6 shadow-sm">
              <img src="/img/opensource llms.png" alt="Open-source LLMs" className="mb-4 h-16 w-16 object-contain" />
              <h3 className="text-xl font-bold text-text-primary mb-2">Open-source LLMs</h3>
              <p className="text-sm text-text-secondary font-medium">Protected by ACIS</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-[var(--color-surface)]/88 p-8 shadow-[0_18px_60px_rgba(232,64,10,0.06)] backdrop-blur-md lg:p-12">
            <h3 className="mb-8 text-2xl font-black text-text-primary">AI Threats We Mitigate</h3>
            <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  Prompt Injection
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  Jailbreaking
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  Model Poisoning
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  Data Leakage
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  Training Data Attacks
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  Adversarial AI
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  AI Hallucination Abuse
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  Deepfake Threats
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  AI-generated Malware
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-text-secondary">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  AI Phishing Automation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
