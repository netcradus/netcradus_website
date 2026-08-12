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
      <section className="relative overflow-x-hidden bg-[#06030b] py-16 md:py-24 border-b border-white/5">
        <AmbientMesh />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          {/* Header & Hero Text */}
          <div className="max-w-7xl mx-auto text-center mb-10 px-2">
            {/* 1. Next-Gen Cyber Defence Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-ping" />
              Next-Generation Cyber Defence
            </div>

            {/* 2. Primary Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,82,160,0.35)]">
              Unified &amp; Built to Secure the <span className="bg-gradient-to-r from-white via-[#ff8ad8] to-[#ff52a0] bg-clip-text text-transparent">AI Revolution</span>
            </h1>
          </div>

          {/* Radial Security Platform Wheel Component Showcase */}
          <div className="w-full mt-4">
            <RadialPlatformWheel />
          </div>
        </div>
      </section>

      {/* Platform Directory Section */}
      <PlatformDirectory />

      {/* NEW INTERACTIVE SHOWCASE SLIDER SECTION WITH REAL IMAGES & SIDE-BY-SIDE DETAILS */}
      <PlatformShowcaseSlider onOpenLightbox={(img) => setLightboxImage(img)} />

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
