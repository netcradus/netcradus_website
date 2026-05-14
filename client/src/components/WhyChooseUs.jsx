const whyChooseItems = [
  "24/7 SOC & SIEM Monitoring",
  "Advanced Threat Detection",
  "Enterprise-Grade Cybersecurity Solutions",
  "Global Business Security Expertise",
  "Proactive Cyber Defense Approach",
  "Real-Time Threat Monitoring",
  "AI-Powered Security Operations",
  "End-to-End Digital Protection",
  "Scalable Security for Modern Businesses",
  "VAPT & Vulnerability Assessment",
  "Cloud & Network Security Solutions",
  "Fast Incident Response & Risk Management",
  "Protection Against Modern Cyber Threats",
  "Business-Focused Cybersecurity Strategy",
  "Trusted Partner for Digital Resilience",
];

const businessProblems = [
  "Protection from Cyber Attacks",
  "Prevention of Data Breaches",
  "24/7 Threat Monitoring & Detection",
  "Ransomware Attack Prevention",
  "Securing Cloud Infrastructure",
  "Reducing Business Downtime",
  "Protecting Customer & Financial Data",
  "Early Detection of Security Vulnerabilities",
  "Preventing Unauthorized System Access",
  "Phishing & Email Threat Protection",
  "Improving Regulatory & Security Compliance",
  "Faster Incident Response & Recovery",
  "Securing Remote Work Environments",
  "Reducing Cybersecurity Risks for Businesses",
  "Protecting Business Reputation & Trust",
  "Continuous Security Monitoring for Enterprises",
  "Preventing Financial Loss from Cyber Threats",
  "Strengthening Digital Infrastructure Security",
  "Managing Security Operations Efficiently",
  "Helping Businesses Stay Operational & Secure",
];

const differentiators = [
  "24/7 Real-Time SOC & SIEM Monitoring",
  "Focus on Proactive Threat Prevention Not Just Detection",
  "Global Enterprise-Focused Security Solutions",
  "End-to-End Cybersecurity + Software Expertise",
  "Advanced Threat Intelligence & Behavioral Analytics",
  "Customized Security Solutions for Modern Businesses",
  "Scalable Security Infrastructure for Global Companies",
  "Faster Threat Detection & Incident Response",
  "Cloud Network & Endpoint Security Under One Roof",
  "Business-Centric Cybersecurity Strategy",
  "Continuous Monitoring with Intelligent Automation",
  "Secure Digital Transformation for Enterprises",
  "Strong Focus on Digital Resilience & Business Continuity",
  "UK + India Presence for Global Service Capability",
  "Modern Security Architecture Built for Evolving Threats",
  "Integration of AI Automation & Threat Hunting",
  "Tailored Cybersecurity Solutions Instead of Generic Services",
  "Enterprise-Grade Security with Agile Support Model",
  "Long-Term Partnership & Client-Focused Approach",
];

const sections = [
  {
    title: "Why should clients choose Netcradus",
    accent: "Choose Netcradus",
    summary:
      "A managed security partner built for organizations that need enterprise-grade defense, round-the-clock visibility, and business-aware execution.",
    items: whyChooseItems,
  },
  {
    title: "Business Problems We Solve",
    accent: "Problems We Solve",
    summary:
      "Focused outcomes for risk reduction, uptime protection, cloud security, compliance support, and stronger day-to-day cyber resilience.",
    items: businessProblems,
  },
  {
    title: "What Sets Us Apart",
    accent: "What Sets Us Apart",
    summary:
      "A differentiated delivery model that combines proactive monitoring, security engineering, global support capability, and long-term partnership.",
    items: differentiators,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-netcradus"
      className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500"
    >
      <div className="absolute left-[-5rem] top-24 h-64 w-64 rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute right-[-4rem] bottom-8 h-72 w-72 rounded-full bg-accent/8 blur-[140px]" />

      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Why Netcradus
          </span>
          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Security outcomes built for <span className="text-accent italic">modern businesses.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Netcradus helps enterprises strengthen cyber resilience with continuous monitoring,
            faster response, and practical security strategy aligned to business risk.
          </p>
        </div>

        <div className="grid gap-8">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="group relative overflow-hidden rounded-[30px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.08),transparent_24%,var(--color-surface)_75%)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)] transition-all duration-500 hover:border-accent/25 hover:shadow-[0_24px_58px_rgba(232,64,10,0.12)] lg:p-10"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-60" />
              <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="flex items-start justify-between gap-4 lg:block">
                    <div>
                      <span className="inline-flex rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                        {section.accent}
                      </span>
                      <h3 className="mt-5 text-2xl font-black tracking-tight text-text-primary md:text-3xl">
                        {section.title}
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-sm font-black text-accent lg:mt-8">
                      0{index + 1}
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-text-secondary md:text-base">
                    {section.summary}
                  </p>
                </div>
                <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-[88px] items-start gap-3 rounded-[20px] border border-white/40 bg-[var(--color-surface-raised)]/75 px-4 py-4 text-sm leading-relaxed text-text-secondary transition-colors duration-300 group-hover:border-accent/10 dark:border-white/10"
                    >
                      <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent shadow-[0_0_14px_rgba(232,64,10,0.28)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
