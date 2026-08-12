import React, { useEffect, useState } from "react";
import { Download, Check, ArrowRight, Shield, Eye, Cpu, Zap, Search, Key, Cloud, Activity, Monitor, Info, AlertTriangle, Layers, Users, FileText, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";
import PageHero from "./PageHero";
import AmbientMesh from "./AmbientMesh";
import ImageLightbox from "./ImageLightbox";
import RadialPlatformWheel from "./RadialPlatformWheel";
import PlatformShowcaseSlider from "./PlatformShowcaseSlider";
import PlatformDirectory from "./PlatformDirectory";

const smoothScrollTo = (targetId, duration = 600) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY - 160;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(animation);
};

const netxdrCapabilities = [
  {
    title: "Unified Visibility",
    image: "/assets/netxdr2.png",
    paragraphs: [
      "Achieve ultimate control over your security operations with centralized visibility across endpoints, multi-cloud workspaces, identity databases, and network infrastructures. Cyrix XDR unifies disparate logs and telemetry data streams into a single, intuitive interface, eliminating security blind spots and operational siloes.",
      "This complete contextual intelligence allows security analysts to trace malicious activity from the initial point of entry all the way through affected resources. Integrated maps, visual graphs, and live connection logs provide complete visibility into the health and security posture of your organization."
    ],
    bullets: [
      "Single pane of glass console for multi-layered environments",
      "Comprehensive endpoint, network, cloud, and user audit trail",
      "Cross-vector data aggregation and normalized search",
      "Real-time visual attack path and connection mapping",
      "Interactive live infrastructure security score boards"
    ]
  },
  {
    title: "Intelligent Event Correlation",
    image: "/assets/netxdr3.png",
    paragraphs: [
      "Enterprises generate millions of logs per second, making manual investigation impossible. Cyrix XDR's correlation engine automatically aggregates and analyzes relationships between isolated events across cloud, endpoint, and network telemetry to surface actual incidents while filtering out system noise.",
      "By grouping alerts based on risk, severity, and MITRE ATT&CK techniques, the platform provides security teams with structured incident alerts. This significantly reduces alert fatigue, allowing analysts to focus on real threats and make faster, more informed decisions."
    ],
    bullets: [
      "AI-assisted alert grouping and noise reduction",
      "Cross-domain telemetry correlation across network & identity",
      "Automated threat timeline generation and incident mapping",
      "MITRE ATT&CK tactical mapping and kill chain profiling",
      "Smart alert risk prioritization and context enrichment"
    ]
  },
  {
    title: "Automated Incident Response",
    image: "/assets/netxdr4.png",
    paragraphs: [
      "Stop attacks in seconds using automated, pre-approved playbook responses that execute instantly upon threat detection. Cyrix XDR allows teams to isolate compromised devices, revoke compromised identity tokens, and block malicious IP addresses across firewalls without manual intervention.",
      "Customizable workflow playbooks allow security administrators to define granular response logic for different alert types and threat severity levels. This drastically reduces Mean Time to Respond (MTTR) while keeping human oversight for high-impact actions."
    ],
    bullets: [
      "Instant endpoint network isolation and quarantine",
      "Automated user session termination and access revocation",
      "Customizable multi-step orchestration response playbooks",
      "Integration with firewalls, cloud IAM, and IT ticketing",
      "Human-in-the-loop approval controls for critical actions"
    ]
  },
  {
    title: "Threat Hunting",
    image: "/assets/netxdr5.png",
    paragraphs: [
      "Empower your security team with advanced threat hunting tools that search historical and live event logs for subtle indicators of compromise. Cyrix XDR's query builder allows analysts to execute complex hypotheses, trace adversary techniques, and identify stealthy threats that evade traditional defenses.",
      "Pre-built threat hunting packages and community IOC feeds are automatically updated to reflect emerging threat actor behavior. Analysts can save, schedule, and automate custom threat queries to convert manual hunting successes into permanent detection rules."
    ],
    bullets: [
      "Fast, high-speed telemetry search query builder",
      "Pre-indexed YARA, Sigma, and MITRE threat hunting queries",
      "Historical log retrospection against newly discovered IOCs",
      "Automated conversion of hunt findings into detection rules",
      "Visual investigation workbench for complex attack paths"
    ]
  },
  {
    title: "Endpoint Security",
    image: "/assets/netxdr1.png",
    paragraphs: [
      "Protect every desktop, server, laptop, and cloud workload with lightweight, high-performance endpoint protection. Cyrix XDR monitors system memory, process execution, registry modifications, and file modifications in real time to prevent ransomware, exploit payloads, and fileless malware attacks.",
      "The agent-based system operates with minimal system overhead, monitoring process memory, network connections, and system changes to block threats locally. If an endpoint is compromised, the agent isolates the device to prevent lateral spread."
    ],
    bullets: [
      "Next-gen antivirus (NGAV) with behavioral AI blocking",
      "Anti-ransomware deception files and immediate rollback",
      "Fileless malware detection and script execution auditing",
      "Device control, USB access restrictions, and firewall management",
      "Cross-platform support for Windows, macOS, Linux, & Containers"
    ]
  },
  {
    title: "Threat Intelligence",
    image: "/public/threat intelligence.png",
    paragraphs: [
      "Enrich your security alerts with global context and predictive threat intelligence. Cyrix XDR automatically integrates global threat feeds, adversary profiles, and active campaign data to help security teams prioritize alerts based on threat severity.",
      "By understanding who is targeting your industry and what tactics they use, the system enables predictive defense. Threat profiles are updated continuously to proactively protect endpoints and networks against emerging campaigns."
    ],
    bullets: [
      "Global threat intelligence feeds updated in real time",
      "Adversary group profiling and threat actor campaign tracking",
      "Automated IP, domain, and hash reputation lookups",
      "Contextual alert enrichment with threat severity scores",
      "Integration with commercial and open-source threat feeds"
    ]
  },
  {
    title: "Risk Prioritization",
    image: "/assets/acis-alerts.png",
    paragraphs: [
      "Manage risk effectively by prioritizing vulnerabilities, critical configurations, and active threats based on business impact. Cyrix XDR automatically evaluates the business value of affected assets and the severity of threats to compile a real-time risk list.",
      "This focus helps security teams direct resources to critical systems first, preventing operational downtime and data breaches. Vulnerability management reports are generated instantly to support security compliance audits."
    ],
    bullets: [
      "Contextual asset critical scoring and risk ranking",
      "Vulnerability exposure prioritization based on active exploits",
      "Automated remediation recommendations for security teams",
      "Compliance audit reporting for ISO 27001, SOC 2, and NIST",
      "Continuous posture management for cloud and on-premises infrastructure"
    ]
  },
  {
    title: "Seamless Integrations",
    image: "/assets/acis-log-explorer.png",
    paragraphs: [
      "Create a unified security ecosystem by integrating Cyrix XDR with your existing tools, cloud platforms, identity providers, and business software. Cyrix XDR supports hundreds of native out-of-the-box integrations, ensuring rapid setup and data ingestion.",
      "This comprehensive connector library supports REST APIs, syslog databases, and cloud webhooks to normalize security telemetry. The system ensures complete compatibility without requiring you to replace your existing tools."
    ],
    bullets: [
      "Native integrations with AWS, Azure, GCP, and M365",
      "Out-of-the-box connectors for major firewall and identity vendors",
      "RESTful API access for custom script automation",
      "Standard syslog, CEF, and JSON telemetry log ingestion",
      "Two-way ticketing integration with ServiceNow and Jira"
    ]
  }
];

const TYPING_SEQUENCES = [
  "Securing Enterprise AI...",
  "Monitoring Cloud...",
  "Stopping Ransomware...",
  "Correlating Threats...",
  "Powered by ACIS + CYRIX XDR"
];

const platformSections = [
  {
    id: "acis-overview",
    title: "The Autonomous Cyber Immune System",
    description: "ACIS is Netcradus's flagship AI security engine — a self-learning cyber immune system designed to monitor, detect, and neutralize complex threats across your entire digital surface in real time without human latency.",
    features: [
      "Self-Learning AI Defense Core",
      "Zero-Day Threat Neutralization",
      "Machine-Speed Incident Containment",
      "Continuous Behavior Profiling",
      "Cross-Vector Threat Intelligence",
      "Autonomous SOAR Playbooks"
    ],
    cardClass: "border-[#FF6B00]/30 shadow-[0_18px_60px_rgba(255,107,0,0.12)]",
    cta: true,
    image: "/assets/acis-dashboard.png",
  },
  {
    id: "acis-lite",
    title: "ACIS Lite",
    description: "Ideal for growing organizations and mid-market enterprises looking for core threat detection, essential log monitoring, and automated alerts without operational complexity.",
    features: [
      "Core AI Threat Monitoring",
      "Essential SIEM Log Ingestion",
      "Automated Security Alerts",
      "Standard Compliance Reporting"
    ],
    cardClass: "border-[#FF6B00]/20",
    image: "/assets/acis-alerts.png",
  },
  {
    id: "acis-pro",
    title: "ACIS Pro",
    description: "Built for scaling enterprises needing proactive threat hunting, multi-cloud visibility, advanced event correlation, and automated incident containment playbooks.",
    features: [
      "Advanced Event Correlation",
      "Multi-Cloud Telemetry Ingestion",
      "Hypothesis-Driven Threat Hunting",
      "Automated Response Playbooks"
    ],
    cardClass: "border-[#FF6B00]/30",
    image: "/assets/acis-log-explorer.png",
  },
  {
    id: "acis-enterprise",
    title: "ACIS Enterprise",
    description: "Complete autonomous cyber defense suite for multi-national organizations, mission-critical infrastructure, and high-compliance enterprise environments.",
    features: [
      "Full Autonomous Immunization",
      "Custom ML Model Fine-Tuning",
      "24×7 SOC Escalation Bridge",
      "Dedicated Cyber Analyst Support"
    ],
    cardClass: "border-[#FF6B00]/40 shadow-[0_18px_60px_rgba(255,107,0,0.15)]",
    image: "/assets/acis-soar.png",
  },
  {
    id: "ai-siem-engine",
    title: "AI-SIEM Engine",
    description: "High-speed log ingestion and intelligent correlation engine processing millions of events per second to extract true security signals from background noise.",
    features: [
      "High-Throughput Telemetry Ingestion",
      "AI Noise Filtering & Deduplication",
      "MITRE ATT&CK Kill-Chain Mapping",
      "Instant Log Retrospection"
    ],
    cardClass: "border-[#FF6B00]/25",
    image: "/assets/acis-threat-intel.png",
  },
  {
    id: "soar-automation",
    title: "SOAR Automation",
    description: "Orchestrate security workflows across your existing security stack with automated playbooks, ticket creation, and machine-speed threat containment.",
    features: [
      "Drag-and-Drop Playbook Builder",
      "Bi-Directional API Connectors",
      "Automated Device Quarantine",
      "Ticketing & Incident Lifecycle"
    ],
    cardClass: "border-[#FF6B00]/30",
    image: "/assets/acis-compliance.png",
  },
];

export default function Platform() {
  usePageMeta({
    title: SEO_META.platform.title,
    description: SEO_META.platform.description,
  });

  const [activeTab, setActiveTab] = useState("acis-overview");
  const [translateXAmount, setTranslateXAmount] = useState(-150);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Typewriter effect states
  const [typingText, setTypingText] = useState("");
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTranslateXAmount(-20);
      } else if (window.innerWidth < 1024) {
        setTranslateXAmount(-50);
      } else if (window.innerWidth < 1280) {
        setTranslateXAmount(-100);
      } else {
        setTranslateXAmount(-150);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typewriter effect hook
  useEffect(() => {
    const currentFullText = TYPING_SEQUENCES[sequenceIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypingText(currentFullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypingText(currentFullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    }

    if (!isDeleting && charIndex === currentFullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSequenceIndex((prev) => (prev + 1) % TYPING_SEQUENCES.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, sequenceIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const allSections = [
        ...platformSections.map(s => s.id),
        "netxdr"
      ];

      for (const sectionId of allSections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background transition-colors duration-500">
      
      {/* 1. Custom Hero section */}
      <section className="relative overflow-x-hidden bg-[#06030b] py-16 md:py-24 border-b border-white/5">
        <AmbientMesh />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          {/* Header & Hero Text */}
          <div className="max-w-7xl mx-auto text-center mb-10 px-2">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-ping" />
              Next-Generation Cyber Defence
            </div>

            {/* Primary Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,82,160,0.35)]">
              Unified &amp; Built to Secure the <span className="bg-gradient-to-r from-white via-[#ff8ad8] to-[#ff52a0] bg-clip-text text-transparent">AI Revolution</span>
            </h1>

            {/* Description paragraph */}
            <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-gray-300 md:text-lg">
              Experience the power of ACIS (Autonomous Cyber Immune System) and CYRIX XDR, combining AI-driven threat detection, autonomous response, real-time visibility, and intelligent cyber defence in one unified security platform.
            </p>

            {/* Typewriter sequence pill */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-[#FF6B00] shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                <span>{typingText}</span>
                <span className="animate-ping font-bold text-white">|</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#acis-overview"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("acis-overview");
                }}
                className="btn-primary rounded-xl px-8 py-3.5 text-sm font-bold uppercase tracking-wider"
              >
                Explore ACIS
              </a>
              <a
                href="#netxdr"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("netxdr");
                }}
                className="rounded-xl border border-[#FF6B00]/50 bg-transparent px-8 py-3.5 text-sm font-bold text-[#FF6B00] transition-all duration-300 hover:bg-[#FF6B00]/10 hover:-translate-y-0.5"
              >
                Discover CYRIX XDR
              </a>
            </div>
          </div>

          {/* Radial Security Platform Wheel Component Showcase */}
          <div className="w-full mt-4">
            <RadialPlatformWheel />
          </div>
        </div>
      </section>

      {/* 2. Platform Directory Grid (7 NetCradus Platforms) */}
      <PlatformDirectory />

      {/* 3. Interactive Showcase Slider Section */}
      <PlatformShowcaseSlider onOpenLightbox={(img) => setLightboxImage(img)} />

      {/* 4. Improved Sticky Navigation Tabs */}
      <section className="sticky top-20 z-20 border-y border-white/5 bg-black/80 py-3 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-16 xl:px-24 md:overflow-x-visible md:justify-between">
          {[
            { label: "ACIS Overview", id: "acis-overview" },
            { label: "ACIS Lite", id: "acis-lite" },
            { label: "ACIS Pro", id: "acis-pro" },
            { label: "ACIS Enterprise", id: "acis-enterprise" },
            { label: "AI-SIEM Engine", id: "ai-siem-engine" },
            { label: "SOAR Automation", id: "soar-automation" },
            { label: "Cyrix XDR", id: "netxdr" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.label}
                href={`#${tab.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(tab.id, 600);
                  setActiveTab(tab.id);
                }}
                className={`relative flex-shrink-0 md:flex-1 min-h-[48px] px-6 lg:px-8 flex items-center justify-center text-center rounded-xl border text-xs lg:text-sm font-semibold transition-all duration-300 backdrop-blur-md no-underline whitespace-nowrap ${isActive
                  ? "border-[#FF6B00]/40 bg-[#FF6B00]/10 text-white shadow-[0_0_20px_rgba(255,107,0,0.15)]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:border-[#FF6B00]/20 hover:text-white hover:shadow-[0_0_15px_rgba(255,107,0,0.06)]"
                  }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#FF6B00]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </section>

      {/* 5. Original ACIS Platform Sections */}
      <section className="pt-12 pb-0">
        <div className="mx-auto max-w-screen-2xl space-y-8 px-4 sm:px-6 lg:px-16 xl:px-24">
          {platformSections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className={`scroll-mt-[160px] grid gap-8 rounded-[32px] border border-border bg-[var(--color-surface)]/88 p-6 shadow-[0_18px_60px_rgba(232,64,10,0.06)] backdrop-blur-md md:p-8 lg:items-center ${section.cardClass || ""} ${index % 2 === 1 ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
                }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
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

              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_40%),var(--color-surface)] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(232,64,10,0.12),transparent_55%)]" />
                  <img
                    src={section.image}
                    alt={section.title}
                    className="relative max-h-[360px] w-full rounded-[22px] object-contain cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxImage({ src: section.image, alt: section.title })}
                    onError={(e) => { e.currentTarget.src = "/assets/acis-dashboard.png"; }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Original Cyrix XDR Section & Capabilities */}
      <div id="netxdr" className="scroll-mt-[160px]">
        <section
          className="mt-8 pt-12 pb-0 border-t border-border/20"
        >
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
            <article className="grid gap-8 rounded-[32px] border border-border bg-[var(--color-surface)]/88 p-6 shadow-[0_18px_60px_rgba(232,64,10,0.06)] backdrop-blur-md md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

              {/* Left Column */}
              <div className="text-left">
                <div className="mb-4 inline-flex rounded-full border border-accent/15 bg-accent/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  CYRIX XDR
                </div>
                <h2 className="text-3xl font-black tracking-tight text-text-primary md:text-5xl">
                  One Platform for Complete Threat Detection & Response
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
                  Cyrix XDR continuously monitors endpoints, networks, cloud workloads, user identities, and business applications from a single intelligent platform. Using AI-powered analytics, behavioral detection, and real-time event correlation, it identifies sophisticated cyber threats faster, prioritizes critical risks, and automates response actions. This enables security teams to reduce alert fatigue, accelerate investigations, and strengthen enterprise-wide cyber resilience.
                </p>

                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {[
                    "AI-Powered Threat Detection",
                    "Unified Visibility",
                    "Intelligent Event Correlation",
                    "Automated Incident Response",
                    "Threat Hunting",
                    "Identity Protection",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="rounded-[20px] border border-border bg-[var(--color-surface-raised)]/70 px-4 py-3 text-sm text-text-secondary shadow-[0_0_22px_rgba(232,64,10,0.04)] hover:border-accent/40 hover:text-white hover:shadow-[0_0_15px_rgba(232,64,10,0.08)] transition-all duration-300 cursor-default"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Image */}
              <div className="w-full">
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_40%),var(--color-surface)] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(232,64,10,0.12),transparent_55%)]" />
                  <img
                    src="/assets/netxdr6.png"
                    alt="One Platform for Complete Threat Detection & Response"
                    className="relative max-h-[360px] w-full rounded-[22px] object-contain cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxImage({ src: "/assets/netxdr6.png", alt: "One Platform for Complete Threat Detection & Response" })}
                    onError={(e) => { e.currentTarget.src = "/assets/acis-dashboard.png"; }}
                  />
                </div>
              </div>

            </article>
          </div>
        </section>

        {netxdrCapabilities.map((feat, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <section
              key={index}
              className={`scroll-mt-[160px] mt-8 pt-12 border-t border-border/20 ${index === netxdrCapabilities.length - 1 ? "pb-24" : "pb-12"
                }`}
            >
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
                <article className="grid gap-8 rounded-[32px] border border-border bg-[var(--color-surface)]/88 p-6 shadow-[0_18px_60px_rgba(232,64,10,0.06)] backdrop-blur-md md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

                  {/* Text Column */}
                  <div className={`text-left ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent font-display md:text-[12px]">
                      // Cyrix XDR Capability
                    </span>
                    <h3 className="text-3xl font-black tracking-tight text-white md:text-5xl leading-tight">
                      {feat.title}
                    </h3>
                    <div className="mt-5 space-y-4 max-w-3xl">
                      {feat.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="text-base leading-relaxed text-text-secondary md:text-lg">
                          {para}
                        </p>
                      ))}
                    </div>

                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {feat.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="rounded-[20px] border border-border bg-[var(--color-surface-raised)]/70 px-4 py-3 text-sm text-text-secondary shadow-[0_0_22px_rgba(232,64,10,0.04)] hover:border-accent/40 hover:text-white hover:shadow-[0_0_15px_rgba(232,64,10,0.08)] transition-all duration-300 cursor-default"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Column */}
                  <div className={`w-full ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_40%),var(--color-surface)] p-4">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(232,64,10,0.12),transparent_55%)]" />
                      <img
                        src={feat.image}
                        alt={feat.title}
                        className="relative max-h-[360px] w-full rounded-[22px] object-contain cursor-zoom-in hover:opacity-90 transition-opacity"
                        onClick={() => setLightboxImage({ src: feat.image, alt: feat.title })}
                        onError={(e) => { e.currentTarget.src = "/assets/acis-dashboard.png"; }}
                      />
                    </div>
                  </div>

                </article>
              </div>
            </section>
          );
        })}
      </div>

      {/* Image Lightbox Modal */}
      <ImageLightbox
        src={lightboxImage?.src}
        alt={lightboxImage?.alt}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
