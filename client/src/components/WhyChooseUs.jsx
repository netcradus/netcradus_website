import {useState, useEffect, useRef } from "react";

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
    title: "The Gaps We Fill",
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
    const [activeSection, setActiveSection] = useState(0);

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);
  };
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;

    if (!section || !glow) {
      return undefined;
    }

    const cards = Array.from(section.querySelectorAll(".why-choose-magnetic-card"));
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frameId = 0;

    const animateGlow = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      glow.style.transform = `translate3d(${current.x - 25}px, ${current.y - 25}px, 0)`;
      frameId = window.requestAnimationFrame(animateGlow);
    };

    const updateCards = (event) => {
      const sectionRect = section.getBoundingClientRect();
      target.x = event.clientX - sectionRect.left;
      target.y = event.clientY - sectionRect.top;
      glow.style.opacity = "1";

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const distance = Math.hypot(deltaX, deltaY);
        const proximity = Math.max(0, 1 - Math.min(distance, 150) / 150);
        const shiftX = (deltaX / 150) * 8 * proximity;
        const shiftY = (deltaY / 150) * 8 * proximity;
        const scale = 1 + proximity * 0.05;
        const spread = proximity * 20;

        card.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0) scale(${scale})`;
        card.style.boxShadow = `0 18px 46px rgba(232, 64, 10, 0.08), 0 0 ${spread}px rgba(232, 64, 10, 0.35)`;
        card.style.transition = "transform 0.14s linear, box-shadow 0.14s linear";
      });
    };

    const resetCards = () => {
      glow.style.opacity = "0";
      cards.forEach((card) => {
        card.style.transform = "translate3d(0, 0, 0) scale(1)";
        card.style.boxShadow = "0 18px 46px rgba(232, 64, 10, 0.05)";
        card.style.transition = "transform 0.4s ease-out, box-shadow 0.4s ease-out";
      });
    };

    frameId = window.requestAnimationFrame(animateGlow);
    section.addEventListener("mousemove", updateCards);
    section.addEventListener("mouseleave", resetCards);

    return () => {
      window.cancelAnimationFrame(frameId);
      section.removeEventListener("mousemove", updateCards);
      section.removeEventListener("mouseleave", resetCards);
    };
  }, []);

  return (
    <section
      id="why-netcradus"
      ref={sectionRef}
      className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url('/img/key features bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div ref={glowRef} className="why-choose-cursor-glow" aria-hidden="true" />
      <div className="absolute left-[-5rem] top-24 h-64 w-64 rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute right-[-4rem] bottom-8 h-72 w-72 rounded-full bg-accent/8 blur-[140px]" />

      <div className="relative container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
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

      <div className="relative overflow-visible">
        <div className="relative mx-auto w-full px-3 sm:px-4 lg:px-6 overflow-visible">
          <button
            onClick={prevSection}
            className="absolute left-3 sm:left-4 lg:left-6 top-[140px] -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xl font-bold text-accent transition duration-300 hover:bg-accent hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label="Previous"
          >
            &lt;
          </button>

          <button
            onClick={nextSection}
            className="absolute right-3 sm:right-4 lg:right-6 top-[140px] -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xl font-bold text-accent transition duration-300 hover:bg-accent hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label="Next"
          >
            &gt;
          </button>

          <div className="lg:pl-14 lg:pr-14">
            <div className="transition-all duration-500 ease-in-out" key={activeSection}>
              {(() => {
                const section = sections[activeSection];

                return (
                  <div
                    className={`group why-choose-magnetic-card relative overflow-hidden rounded-[30px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.08),transparent_24%,var(--color-surface)_75%)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)] hover:border-accent/25 lg:p-10 ${
                      activeSection % 2 === 1
                        ? "why-choose-align-right"
                        : "why-choose-align-left"
                    }`}
                  >
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-60" />

                    <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10">
                      <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="why-choose-card-top flex items-start justify-between gap-4 lg:block">
                          <div className="why-choose-card-meta why-choose-card-heading">
                            <span className="inline-flex rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                              {section.accent}
                            </span>

                            <h3 className="mt-5 text-2xl font-black tracking-tight text-text-primary md:text-3xl">
                              {section.title}
                            </h3>

                            <div className="why-choose-card-line" aria-hidden="true" />
                          </div>

                          <div className="why-choose-card-index flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-sm font-black text-accent lg:mt-8">
                            0{activeSection + 1}
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
                );
              })()}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
