import React, { useEffect, useMemo, useState } from "react";
import {
  Shield,
  Radar,
  Cloud,
  BrainCircuit,
  Network,
  Building2,
  ArrowRight,
  Code2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ServiceDetailLayout from "./ServiceDetailLayout";
import "./Services.css";

export const SERVICE_TABS = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    heading: "Cybersecurity Engineering & Defense",
    icon: Shield,
    image: "/img/cybersecurity.png",
    description:
      "Netcradus delivers end-to-end cybersecurity solutions designed to shield your hybrid infrastructure, harden your data assets, and build comprehensive digital resilience against sophisticated modern threat vectors.",
    points: [
      "Threat Assessment & Profiling: In-depth threat modeling and risk profiling to expose infrastructure vulnerabilities.",
      "Vulnerability Management: Active ethical hacking and systems assessments to identify and patch security flaws.",
      "Zero Trust Architecture: Segmented, role-based network designs implementing continuous validation controls.",
      "Policy & Governance: Enterprise policy authoring and governance models aligned with top-tier security standards.",
      "Incident Readiness: Resilient contingency playbooks and forensic preparation to contain threat breaches.",
      "Standards & Compliance: Clean compliance strategy mapping controls to ISO 27001, GDPR, CERT-In, and NIST.",
    ],
    highlights: ["Threat Modeling", "Governance", "Incident Readiness"],
  },
  {
    id: "managed-soc",
    title: "Managed SOC",
    heading: "24/7 Security Operations Centre (SOC)",
    icon: Radar,
    image: "/img/managed soc.png",
    description:
      "Our around-the-clock Security Operations Centre monitors, analyses, and defends your environments in real time, detecting anomalies and containing breaches before they impact your operations.",
    points: [
      "24/7 Threat Monitoring: Continuous real-time analysis across endpoints, servers, and multi-cloud network layers.",
      "AI-Driven Alert Triage: Advanced ML analytics to classify alerts, suppress noise, and eliminate false positives.",
      "Dedicated Threat Analysts: Certified threat hunters actively defending and investigating your environment.",
      "Rapid Containment SLAs: Industry-leading response times with a Mean Time to Detect (MTTD) under 5 minutes.",
      "Incident Management: Fully integrated ticketing, transparent playbooks, and structured escalation lines.",
      "Threat Intelligence Reporting: Executive posture summaries and continuous vulnerability threat feeds.",
    ],
    highlights: ["24/7 Monitoring", "SLA Escalation", "Executive Reporting"],
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    heading: "Cloud Infrastructure & Data Protection",
    icon: Cloud,
    image: "/img/cloud security.png",
    description:
      "Secure your hybrid workloads, cloud-native deployments, and SaaS applications with robust, automated security controls and posture management.",
    points: [
      "Posture Management (CSPM): Automated misconfiguration audits and drift monitoring across AWS, Azure, and GCP.",
      "Identity & IAM Hardening: Least-privilege access enforcement and federated identity configurations.",
      "Container & DevOps Security: Real-time vulnerability shielding for Kubernetes and CI/CD pipelines.",
      "Data Loss Prevention (DLP): Automated discovery and protection of sensitive datasets in cloud storage.",
      "API Security & Gateway Defense: Active threat inspection, rate limiting, and parameter verification for APIs.",
      "Continuous Compliance Mapping: Live compliance scorecards mapping assets to industry-standard benchmarks.",
    ],
    highlights: ["CSPM", "IAM Hardening", "Container Security"],
  },
  {
    id: "ai-data-analytics",
    title: "AI Security",
    heading: "AI System & LLM Model Security",
    icon: BrainCircuit,
    image: "/img/ai security.png",
    description:
      "Protect machine learning pipelines, LLM interfaces, and automated AI agents from model poisoning, prompt injection, and operational abuse.",
    points: [
      "AI Posture Assessment: Auditing AI models, pipelines, and training datasets against specialized vulnerability lists.",
      "Prompt Injection Defense: Robust filtering layers to sanitize prompt inputs and prevent system override attacks.",
      "Model Penetration Testing: Active red-teaming targeting model weights, inputs, and inference channels.",
      "LLM Guardrails & Security: Enforcing boundaries on model outputs to prevent hallucination exploits.",
      "AI Data Leakage Prevention: Ensuring training sets and prompts do not compromise corporate proprietary data.",
      "Shadow AI Discovery: Scanning internal enterprise traffic to locate and govern unauthorized AI tool usage.",
    ],
    highlights: ["AI Risk Audits", "LLM Security", "Shadow AI Detection"],
  },
  {
    id: "network-security",
    title: "Network Security",
    heading: "Network Perimeter & Segmentation Defense",
    icon: Network,
    image: "/img/network security.png",
    description:
      "Shield your network perimeter and segmented internal zones to block lateral movement, neutralize intrusions, and prevent unauthorized data exfiltration.",
    points: [
      "Next-Gen Firewall Operations: High-availability firewall configurations, rule management, and traffic grooming.",
      "IDS & IPS Implementation: Deep packet inspection and real-time signature matching to block intrusion attempts.",
      "Traffic & Packet Analysis: Behavioral anomaly detection to catch abnormal lateral movements.",
      "Secure Remote Access: Resilient SD-WAN architectures and identity-verified zero-trust VPN gateways.",
      "Micro-Segmentation Strategy: Isolating critical environments to contain potential asset compromises.",
      "Active DDoS Shielding: Edge mitigation layers designed to block high-volume distributed traffic spikes.",
    ],
    highlights: ["NGFW", "IDS/IPS", "DDoS Protection"],
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security",
    heading: "Enterprise Security Programs & Governance",
    icon: Building2,
    video: "/img/enterprise-security.mp4",
    description:
      "Tailor comprehensive, high-alignment security initiatives designed around your business goals, corporate risk profile, and industry regulations.",
    points: [
      "Enterprise Architecture Design: Creating future-proof blueprints for hardware, software, and directory security.",
      "Board-Level Risk Reporting: Clean security metrics, maturity index timelines, and risk scorecards.",
      "M&A Due Diligence: Independent threat audits of target infrastructure during corporate acquisitions.",
      "Supply Chain Verification: Rigorous vendor assessments to prevent third-party security weak links.",
      "Awareness & Simulation: Targeted staff phishing campaigns and security training modules.",
      "CISO-as-a-Service: Executive advisory and security steering for growing mid-market enterprises.",
    ],
    highlights: ["Security Architecture", "Board Reporting", "Vendor Risk"],
  },
  {
    id: "vapt-services",
    title: "VAPT Services",
    heading: "Vulnerability Assessment & Penetration Testing",
    icon: Shield,
    image: "/img/vapt.png",
    description:
      "Expose vulnerability gaps and exploit paths in your applications, databases, and network backbones before cyber adversaries can target them.",
    points: [
      "Certified Ethical Hackers: Penetration testing conducted by certified, expert-level security analysts.",
      "Hybrid Testing Methods: Combining deep manual audits with advanced automated scanning.",
      "Full OWASP Top 10 Coverage: Testing targeting common and advanced application level logic flaws.",
      "Proof of Concept Exploits: Validating security issues with non-destructive, detailed proofs of concept.",
      "Actionable Remediation Reports: Clear fix instructions and line-of-code guidelines for developers.",
      "Post-Assessment Validation: Comprehensive re-testing to confirm all vulnerabilities were closed.",
    ],
    highlights: [
      "Network Security Testing",
      "API Security Assessment",
      "Website & Web Application VAPT",
    ],
  },
  //     "Netcradus builds intelligent visitor and hospital management systems that digitize access, approvals, patient workflows, and administrative operations for secure, high-performance environments.",
  //   points: [
  //     "Secure digital visitor onboarding with biometric verification, ID validation, and officer approval workflows",
  //     "Risk-aware visitor screening, blacklist checks, and real-time gate pass issuance",
  //     "Centralized patient registration, appointment scheduling, admissions, and discharge management",
  //     "Integrated billing, prescription management, lab workflow tracking, and staff coordination",
  //     "Role-based dashboards for security officers, reception teams, clinicians, and administrators",
  //     "Audit-ready logs, data protection controls, and seamless integration with existing access systems",
  //   ],
  //   highlights: [
  //     "Secure Access",
  //     "Smart Healthcare Workflows",
  //     "Operational Control",
  //   ],
  // },
];

const softwareHighlights = [
  {
    title: "Secure Product Engineering",
    description:
      "Custom enterprise applications, portal platforms, and workflow systems built with security-first delivery practices.",
  },
  {
    title: "Modernization and Integration",
    description:
      "Legacy modernization, API integration, and resilient delivery pipelines aligned to enterprise change programs.",
  },
  {
    title: "DevSecOps Enablement",
    description:
      "Security controls embedded into build, release, and infrastructure workflows to support continuous delivery at scale.",
  },
];

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("cybersecurity");

  const activeService = useMemo(
    () => SERVICE_TABS.find((tab) => tab.id === activeTab) || SERVICE_TABS[0],
    [activeTab],
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");

    if (tab && SERVICE_TABS.some((entry) => entry.id === tab)) {
      setActiveTab(tab);

      setTimeout(() => {
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.search]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="reveal mb-16 text-center">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent font-display md:text-[12px]"></span>
          <h2 className="mb-6 text-4xl font-display font-black text-text-primary md:text-6xl">
            Intelligent security, engineered for{" "}
            <span className="text-accent italic">resilience.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            A focused capability portfolio built for organizations that need
            cyber defense, visibility, automation, and operational scale without
            compromising control.
          </p>
        </div>

        <div
          className="service-content-pillar reveal"
          style={{ transitionDelay: "0.35s" }}
        >
          <ServiceDetailLayout service={activeService} />
        </div>
      </div>
    </section>
  );
};

export default Services;
