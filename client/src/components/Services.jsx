import React, { useEffect, useMemo, useState } from "react";
import { Shield, Radar, Cloud, BrainCircuit, Network, Building2, ArrowRight, Code2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Services.css";

const SERVICE_TABS = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    heading: "Cybersecurity",
    icon: Shield,
    image: "/generated/secure_shield_concept_1773394778055.png",
    description:
      "Netcradus delivers end-to-end cybersecurity solutions that protect your infrastructure, data, and people from evolving threats.",
    points: [
      "Comprehensive threat landscape assessment and risk profiling",
      "Penetration testing and vulnerability management",
      "Zero Trust architecture design and implementation",
      "Security policy development and governance frameworks",
      "Incident response planning and forensic readiness",
      "Compliance alignment with ISO 27001, GDPR, CERT-In, and NIST",
    ],
    highlights: ["Threat Modeling", "Governance", "Incident Readiness"],
  },
  {
    id: "managed-soc",
    title: "Managed SOC",
    heading: "Managed SOC",
    icon: Radar,
    image: "/generated/jlk.png",
    description:
      "Our 24/7 Security Operations Centre monitors your environment around the clock, detecting and responding to threats before they cause damage.",
    points: [
      "24/7 real-time monitoring across all endpoints and network layers",
      "AI-driven alert triage to eliminate false positives",
      "Dedicated threat analysts for each client environment",
      "Mean Time to Detect (MTTD) under 5 minutes",
      "Integrated ticketing and SLA-backed incident escalation",
      "Monthly threat intelligence and executive reporting",
    ],
    highlights: ["24/7 Monitoring", "SLA Escalation", "Executive Reporting"],
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    heading: "Cloud Security",
    icon: Cloud,
    image: "/generated/cloud_architecture_1773394719675.png",
    description:
      "Secure your cloud workloads, SaaS applications, and hybrid environments with Netcradus cloud-native security controls.",
    points: [
      "Cloud Security Posture Management (CSPM) for AWS, Azure, and GCP",
      "Identity and Access Management (IAM) hardening",
      "Container and Kubernetes security scanning",
      "Data loss prevention (DLP) for cloud storage",
      "API security monitoring and gateway protection",
      "Continuous compliance reporting for cloud-hosted assets",
    ],
    highlights: ["CSPM", "IAM Hardening", "Container Security"],
  },
  {
    id: "ai-data-analytics",
    title: "AI & Data Analytics",
    heading: "AI & Data Analytics",
    icon: BrainCircuit,
    image: "/generated/ai_data_network_1773394527444.png",
    description:
      "Harness the power of AI to gain actionable security intelligence, detect anomalies, and predict threats before they materialize.",
    points: [
      "Behavioral analytics using machine learning models",
      "Shadow AI detection — identify unauthorized AI tools in your environment",
      "Anomaly detection across user, entity, and network behavior (UEBA)",
      "Predictive threat modeling based on global threat intelligence feeds",
      "AI-powered log analysis reducing analyst workload by up to 80%",
      "Custom dashboards and security KPI reporting for leadership teams",
    ],
    highlights: ["UEBA", "Predictive Modeling", "Leadership Dashboards"],
  },
  {
    id: "network-security",
    title: "Network Security",
    heading: "Network Security",
    icon: Network,
    image: "/generated/hacker_code_screen_1773394510636.png",
    description:
      "Protect your network perimeter and internal segments against intrusion, lateral movement, and data exfiltration.",
    points: [
      "Next-generation firewall (NGFW) configuration and management",
      "Intrusion Detection and Prevention Systems (IDS/IPS)",
      "Network traffic analysis and deep packet inspection",
      "Secure SD-WAN and remote access VPN management",
      "Network segmentation and micro-segmentation strategy",
      "Real-time DDoS protection and traffic scrubbing",
    ],
    highlights: ["NGFW", "IDS/IPS", "DDoS Protection"],
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security",
    heading: "Enterprise Security",
    icon: Building2,
    image: "/generated/AI.png",
    description:
      "Tailored, enterprise-grade security programs that align with your business goals, regulatory requirements, and risk appetite.",
    points: [
      "Enterprise Security Architecture design and review",
      "Board-level risk reporting and security scorecards",
      "Mergers & Acquisitions (M&A) security due diligence",
      "Supply chain and third-party vendor risk management",
      "Security awareness training and phishing simulation programs",
      "CISO-as-a-Service for organizations without dedicated security leadership",
    ],
    highlights: ["Security Architecture", "Board Reporting", "Vendor Risk"],
  },
];

const softwareHighlights = [
  {
    title: "Secure Product Engineering",
    description: "Custom enterprise applications, portal platforms, and workflow systems built with security-first delivery practices.",
  },
  {
    title: "Modernization and Integration",
    description: "Legacy modernization, API integration, and resilient delivery pipelines aligned to enterprise change programs.",
  },
  {
    title: "DevSecOps Enablement",
    description: "Security controls embedded into build, release, and infrastructure workflows to support continuous delivery at scale.",
  },
];

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("cybersecurity");

  const activeService = useMemo(
    () => SERVICE_TABS.find((tab) => tab.id === activeTab) || SERVICE_TABS[0],
    [activeTab]
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");

    if (tab && SERVICE_TABS.some((entry) => entry.id === tab)) {
      setActiveTab(tab);

      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.search]);

  return (
    <section id="services" className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="reveal mb-16 text-center">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent font-display md:text-[12px]">
            // OUR CAPABILITIES
          </span>
          <h2 className="mb-6 text-4xl font-display font-black text-text-primary md:text-6xl">
            Intelligent security, engineered for <span className="text-accent italic">resilience.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            A focused capability portfolio built for organizations that need cyber defense, visibility, automation, and operational scale without compromising control.
          </p>
        </div>

        <div className="services-tabs reveal" style={{ transitionDelay: "0.2s" }}>
          {SERVICE_TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.history.replaceState(null, "", `?tab=${tab.id}`);
                }}
                className={`service-tab-btn ${active ? "active" : ""}`}
              >
                <span className="tab-icon">
                  <Icon size={18} />
                </span>
                <span className="tab-text">{tab.title}</span>
              </button>
            );
          })}
        </div>

        <div className="service-content-pillar reveal" style={{ transitionDelay: "0.35s" }}>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {activeService.highlights.map((item) => (
                  <span key={item} className="rounded-full border border-accent/15 bg-accent/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                    {item}
                  </span>
                ))}
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tight text-text-primary md:text-5xl">{activeService.heading}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">{activeService.description}</p>
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                {activeService.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-[22px] border border-border bg-[var(--color-surface-raised)]/70 p-5 text-sm leading-relaxed text-text-secondary shadow-[0_0_24px_rgba(232,64,10,0.04)]"
                  >
                    <div className="mb-3 h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(232,64,10,0.25)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_50%_20%,rgba(232,64,10,0.18),transparent_45%)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_45%),var(--color-surface)] p-4 shadow-[0_22px_70px_rgba(232,64,10,0.08)]">
                <img src={activeService.image} alt={activeService.heading} className="h-[420px] w-full rounded-[24px] object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 grid gap-6 md:grid-cols-3" style={{ transitionDelay: "0.5s" }}>
          {softwareHighlights.map((card) => (
            <article
              key={card.title}
              className="capability-card premium-card rounded-[26px] border border-border bg-[var(--color-surface)]/84 p-8 backdrop-blur-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/15 bg-accent/8 text-accent">
                <Code2 size={20} />
              </div>
              <h4 className="text-2xl font-black tracking-tight text-text-primary">{card.title}</h4>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{card.description}</p>
            </article>
          ))}
        </div>

        <div id="software-engineering" className="reveal mt-12 text-center" style={{ transitionDelay: "0.55s" }}>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] no-underline">
            Discuss your security roadmap
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
