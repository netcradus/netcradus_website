import React, { useEffect, useState } from "react";
import { Download, Check, ArrowRight, Shield, Eye, Cpu, Zap, Search, Key, Cloud, Activity, Monitor, Info, AlertTriangle, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";
import PageHero from "./PageHero";
import AmbientMesh from "./AmbientMesh";
import ImageLightbox from "./ImageLightbox";

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
      "Automated cross-vector telemetry correlation",
      "Reduction of alert noise by up to 98%",
      "MITRE ATT&CK framework technique mapping",
      "Root-cause incident reconstruction timelines",
      "Prioritized threat severity scoring algorithms"
    ]
  },
  {
    title: "Automated Incident Response",
    image: "/assets/incidents.png",
    paragraphs: [
      "Neutralize cyber threats instantly using automated response playbooks. Cyrix XDR SOAR capabilities execute immediate, policy-driven response actions the moment a malicious threat is confirmed—minimizing dwell time and containing incidents before they cause business disruption.",
      "From isolating compromised hosts and disabling breached user accounts to updating firewall rules and quarantine zones, the system provides zero-touch incident remediation. Manual approvals can be built into critical playbooks to preserve analyst control."
    ],
    bullets: [
      "Zero-touch host isolation and user credential suspension",
      "Dynamic SOAR workflow and playbook builder",
      "Bi-directional integrations with JIRA and ServiceNow",
      "Custom approval gates for business-critical workflows",
      "Automated network firewall and API access adjustments"
    ]
  },
  {
    title: "Threat Hunting",
    image: "/assets/threat-hunting.png",
    paragraphs: [
      "Proactively search for hidden adversaries and advanced persistent threats (APTs) residing silently within your corporate environment. Cyrix XDR provides analysts with powerful threat hunting capabilities, utilizing historical telemetry and global indicators of compromise to uncover hidden threats.",
      "With rapid search queries, interactive relationship graphs, and automated script execution, hunting teams can test hypotheses, verify system integrity, and eliminate malicious actors who have bypassed initial security defenses."
    ],
    bullets: [
      "Ad-hoc query search across historical log archives",
      "Continuous threat indicators of compromise (IoC) scanning",
      "Pre-built advanced threat hunting playbooks",
      "Adversarial simulation and path stress testing",
      "Automated security posture vulnerability checks"
    ]
  },
  {
    title: "Identity Protection",
    image: "/assets/netxdr6.png",
    paragraphs: [
      "Compromised credentials represent the primary entry point for modern corporate breaches. Cyrix XDR monitors user behavior, access requests, and credential usage in real time to detect compromised accounts, privilege misuse, and lateral movement attempts before they lead to data theft.",
      "By correlating access patterns with geographic locations, system usage, and device signatures, Cyrix XDR establishes dynamic identity risk profiles. Any abnormal behavior triggers step-up authentication or automatic access revocation."
    ],
    bullets: [
      "User and Entity Behavior Analytics (UEBA) profiles",
      "Real-time detection of compromised user credentials",
      "Adaptive step-up MFA and access permission controls",
      "Privileged access monitoring and behavior auditing",
      "Geographic and session anomaly risk scoring"
    ]
  },
  {
    title: "Cloud Security Monitoring",
    image: "/assets/netxdr7.png",
    paragraphs: [
      "Secure your hybrid and multi-cloud environments against complex configurations and cloud-native threats. Cyrix XDR integrates with AWS, Azure, Google Cloud, and SaaS platforms to deliver continuous visibility, risk detection, and compliance auditing across containerized workloads and databases.",
      "The platform automatically identifies insecure API integrations, excessive user permissions, and compliance drifts. By correlating cloud API telemetry with endpoint logs, Cyrix XDR provides complete protection across distributed networks."
    ],
    bullets: [
      "Multi-cloud workload and container security auditing",
      "Continuous cloud compliance and configuration scanning",
      "Real-time monitoring of cloud API access logs",
      "Detection of credential abuse and excessive privileges",
      "Serverless and virtual machine integrity monitoring"
    ]
  },
  {
    title: "Network Detection",
    image: "/assets/netxdr8.png",
    paragraphs: [
      "Identify command-and-control communication, lateral movement, and data exfiltration at the network layer. Cyrix XDR monitors network telemetry, flow logs, and packets to spot anomalies and suspicious connections in real time without impacting throughput.",
      "By identifying abnormal traffic patterns and malicious lateral movement between server segments, the platform detects threats that bypass traditional perimeter defenses. Integrated network security playbooks trigger automatic port blocks or segment isolation."
    ],
    bullets: [
      "Real-time flow log analysis and packet inspections",
      "Lateral movement and internal scanning detection",
      "Command-and-control (C2) communication filtering",
      "Automated network segment firewall blocking",
      "Anomalous data transfer volume alerts"
    ]
  },
  {
    title: "Endpoint Security",
    image: "/assets/netxdr9.png",
    paragraphs: [
      "Protect your workforce devices, servers, and virtual machines from ransomware, fileless malware, and unauthorized access. Cyrix XDR Endpoint Security delivers continuous telemetry, endpoint detection, and device control across Windows, macOS, Linux, and mobile operating systems.",
      "The agent-based system operates with minimal system overhead, monitoring process memory, network connections, and system changes to block threats locally. If an endpoint is compromised, the agent isolates the device to prevent lateral spread."
    ],
    bullets: [
      "Anti-ransomware process locking and rollbacks",
      "Fileless malware and memory exploit prevention",
      "Cross-platform support for Windows, macOS, and Linux",
      "Host-based firewall and device control settings",
      "Offline protection with local machine learning models"
    ]
  },
  {
    title: "Threat Intelligence",
    image: "/assets/acis-threat-intel.png",
    paragraphs: [
      "Enrich your security alerts with global context and predictive threat intelligence. Cyrix XDR automatically integrates global threat feeds, adversary profiles, and active campaign data to help security teams prioritize alerts based on threat severity.",
      "By understanding who is targeting your industry and what tactics they use, the system enables predictive defense. Threat profiles are updated continuously to proactively protect endpoints and networks against emerging campaigns."
    ],
    bullets: [
      "Continuous ingestion of global threat intelligence feeds",
      "Adversary profile mapping and campaign indicators",
      "Prioritization based on attack source and history",
      "Automatic tagging of emerging threat patterns",
      "Collaboration across threat sharing networks"
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
      "Asset business value and impact mapping",
      "Automated vulnerability risk calculations",
      "Real-time compliance drift and health checks",
      "Prioritized remediation work lists for analysts",
      "Detailed compliance reports for ISO and SOC audits"
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
      "Hundreds of native connectors for cloud, SaaS, and OS",
      "REST API and syslog data ingestion normalization",
      "Bi-directional workflows with ITSM tools",
      "Flexible webhook configurations for custom alerts",
      "Zero-friction onboarding and tool consolidation"
    ]
  }
];



const TYPING_SEQUENCES = [
  "Protecting Endpoints...",
  "Monitoring Cloud...",
  "Stopping Ransomware...",
  "Correlating Threats...",
  "Powered by ACIS + CYRIX XDR"
];

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
    title: "Scale Fearlessly with AI-Powered Cyber Defense",
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

  const [translateXAmount, setTranslateXAmount] = useState(-150);
  const [activeTab, setActiveTab] = useState("acis-overview");
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

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "acis-overview",
        "acis-lite",
        "acis-pro",
        "acis-enterprise",
        "ai-siem-engine",
        "soar-automation",
        "netxdr"
      ];

      let currentActive = "acis-overview";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveTab(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background transition-colors duration-500">
      {/* Custom Hero section */}
      <section
        className="relative overflow-x-hidden py-24 md:py-32"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.64), rgba(0,0,0,0.64)), url('/img/platform bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <AmbientMesh />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,107,0,0.08),transparent_30%)]" />

        <div className="container relative z-10 mx-auto grid max-w-screen-2xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 xl:px-24">
          {/* Left Column: Content */}
          <div className="max-w-3xl">
            {/* 1. Next-Gen Cyber Defence Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/8 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FF6B00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-ping" />
              Next-Generation Cyber Defence
            </div>

            {/* 2. Primary Heading */}
            <h1 className="text-4xl font-black leading-tight tracking-tighter text-white md:text-6.5xl">
              The Netcradus <br />
              <span className="text-white">Cybersecurity Platform</span>
            </h1>

            {/* 3. Description paragraph */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
              Experience the power of ACIS (Autonomous Cyber Immune System) and CYRIX XDR, combining AI-driven threat detection, autonomous response, real-time visibility, and intelligent cyber defence in one unified security platform.
            </p>

            {/* 5. Four premium feature pills */}
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-lg">
              {[
                { text: "AI Powered Detection", icon: "🛡" },
                { text: "Autonomous Response", icon: "⚡" },
                { text: "Unified Visibility", icon: "🌐" },
                { text: "Enterprise Ready", icon: "🔒" }
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6B00]/40 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:text-white"
                >
                  <span>{pill.icon}</span>
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>

            {/* 6. Typewriter loop effect */}
            <div className="mt-6 flex items-center gap-2 font-mono text-xs sm:text-sm text-gray-400 min-h-[24px]">
              <span className="text-[#FF6B00] font-bold">&gt;_</span>
              <span>{typingText}</span>
              <span className="h-4 w-1.5 bg-[#FF6B00] animate-pulse" />
            </div>

            {/* 7. Extra operation badges */}
            <div className="mt-4 flex items-center gap-4 text-[10px] font-bold text-gray-500">
              <span className="flex items-center gap-1.5"><span className="text-[#FF6B00]">ACIS</span> → Detect</span>
              <span className="text-gray-700">|</span>
              <span className="flex items-center gap-1.5"><span className="text-[#00E5FF]">CYRIX XDR</span> → Correlate</span>
              <span className="text-gray-700">|</span>
              <span className="flex items-center gap-1.5"><span className="text-white">SOC</span> → Protect</span>
            </div>

            {/* 8. CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#acis-overview"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("acis-overview", 600);
                }}
                className="rounded-xl bg-[#FF6B00] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:bg-[#ff8533] hover:shadow-[#FF6B00]/35 hover:-translate-y-0.5"
              >
                Explore ACIS
              </a>
              <a
                href="#netxdr"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("netxdr", 600);
                  setActiveTab("netxdr");
                }}
                className="rounded-xl border border-[#FF6B00]/50 bg-transparent px-6 py-3.5 text-sm font-bold text-[#FF6B00] transition-all duration-300 hover:bg-[#FF6B00]/8 hover:-translate-y-0.5"
              >
                Discover CYRIX XDR
              </a>
            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="relative flex items-center justify-center overflow-visible min-h-[480px] lg:-translate-y-12">
            {/* Animated orange connection lines representing AI Communication */}
            <div className="absolute right-[45%] top-1/2 -translate-y-1/2 w-[240px] h-[160px] pointer-events-none z-0 hidden lg:block overflow-visible">
              <svg className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="rayGrad" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 220 40 L 40 20"
                  stroke="url(#rayGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="6, 6"
                  className="animate-pulse"
                >
                  <animate attributeName="stroke-dashoffset" values="40;0" dur="2.5s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 220 80 L 10 80"
                  stroke="url(#rayGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="6, 6"
                  className="animate-pulse"
                >
                  <animate attributeName="stroke-dashoffset" values="40;0" dur="2.2s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 220 120 L 30 140"
                  stroke="url(#rayGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="6, 6"
                  className="animate-pulse"
                >
                  <animate attributeName="stroke-dashoffset" values="40;0" dur="2.8s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>

            {/* Soft orange halo glow directly behind robot to stand out */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#FF6B00]/12 blur-[90px] pointer-events-none z-0" />

            {/* Glowing network particles & rotating circular rings behind robot */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20">
              <div className="absolute w-[520px] h-[520px] border border-dashed border-[#FF6B00]/40 rounded-full animate-spin-cw" />
              <div className="absolute w-[640px] h-[640px] border border-dashed border-[#00E5FF]/20 rounded-full animate-spin-ccw" />
              <div className="absolute w-[400px] h-[400px] border border-[#FF6B00]/15 rounded-full animate-ping" style={{ animationDuration: "6s" }} />
            </div>

            {/* Floating and Breathing Robot Image Wrapper */}
            <motion.div
              className="w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[640px] z-10 relative lg:-mb-32 lg:translate-y-12"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 85%, transparent 100%), linear-gradient(to right, black 0%, black 95%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 85%, transparent 100%), linear-gradient(to right, black 0%, black 95%, transparent 100%)",
                maskComposite: "intersect",
              }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.02, 1],
                x: [0, translateXAmount, translateXAmount, 0, 0]
              }}
              transition={{
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 9, times: [0, 0.4, 0.5, 0.9, 1], ease: "easeInOut", repeat: Infinity }
              }}
            >
              <img 
                src="/img/platform hero image.png" 
                alt="ACIS platform" 
                className="w-full object-contain cursor-zoom-in hover:opacity-90 transition-opacity" 
                onClick={() => setLightboxImage({ src: "/img/platform hero image.png", alt: "ACIS platform" })}
                onError={(e) => { e.currentTarget.src = "/assets/acis-dashboard.png"; }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Improved Sticky Navigation Tabs */}
      <section className="sticky top-20 z-20 border-y border-white/5 bg-black/60 py-3 backdrop-blur-xl">
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
                    className="relative h-[320px] w-full rounded-[22px] object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxImage({ src: section.image, alt: section.title })}
                    onError={(e) => { e.currentTarget.src = "/assets/acis-dashboard.png"; }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div id="netxdr" className="scroll-mt-[160px]">
        <section
          className="mt-8 pt-12 pb-0 border-t border-border/20"
        >
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
            <article className="grid gap-8 rounded-[32px] border border-border bg-[var(--color-surface)]/88 p-6 shadow-[0_18px_60px_rgba(232,64,10,0.06)] backdrop-blur-md md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

              {/* Left Column: Heading, Paragraph, and Feature Chips */}
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
                    className="relative h-[320px] w-full rounded-[22px] object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
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
                        className="relative h-[320px] w-full rounded-[22px] object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
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
