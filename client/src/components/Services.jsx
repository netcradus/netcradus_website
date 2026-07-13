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
    heading: "Cybersecurity",
    icon: Shield,
    image: "/img/cybersecurity.png",
    description:
      "Netcradus delivers end-to-end cybersecurity solutions that protect your infrastructure, data, and people from evolving threats.",
    points: [
      "Comprehensive threat landscape assessment and risk profiling",
      "Penetration testing and vulnerability management",
      "Zero Trust architecture design and implementation",
      "Security policy development and governance frameworks",
      "Incident response planning and forensic readiness",
      "Compliance alignment with ISO/IEC 27001:2022, GDPR, CERT-In, and NIST",
    ],
    highlights: ["Threat Modeling", "Governance", "Incident Readiness"],
  },
  {
    id: "managed-soc",
    title: "Managed SOC",
    heading: "Managed SOC",
    icon: Radar,
    image: "/img/managed soc.png",
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
    image: "/img/cloud security.png",
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
    title: "AI Security",
    heading: "AI Security",
    icon: BrainCircuit,
    image: "/img/ai security.png",
    description:
      "Protect your machine learning pipelines, LLM deployments, and enterprise AI agents from specialized threat vectors.",
    points: [
      "AI Security Assessment",
      "AI Risk Audits",
      "Prompt Injection Testing",
      "AI Model Penetration Testing",
      "LLM Security Reviews",
      "AI Data Leakage Testing",
      "Secure AI Deployment Consulting",
      "AI Governance & Compliance",
      "Employee AI Usage Monitoring",
      "Shadow AI Detection in Companies",
    ],
    highlights: ["AI Risk Audits", "LLM Security", "Shadow AI Detection"],
  },
  {
    id: "network-security",
    title: "Network Security",
    heading: "Network Security",
    icon: Network,
    image: "/img/network security.png",
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

    icon: Building2,
    video: "/img/enterprise-security.mp4",
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
  // add vapt services as a new tab
  {
    id: "vapt-services",
    title: "VAPT Services",
    heading: "VAPT Services",
    icon: Shield,
    image: "/img/vapt.png",
    description:
      "Protect your website, web applications, network, and cloud infrastructure with Netcradus VAPT (Vulnerability Assessment & Penetration Testing) services. We identify security gaps and help you fix them before they become costly breaches.",
    points: [
      "Expert Ethical Hackers",
      "Manual + Automated Testing",
      "OWASP Top 10 Coverage",
      "Detailed Reports with Fixes",
      "Post-Assessment Support",
      "Comprehensive VAPT Report",
      "Risk Severity Ratings",
      "Proof of Concept (PoC)",
      "Remediation Recommendations",
      "Re-Testing & Validation",
    ],
    highlights: [
      "Network Security Testing",
      "API Security Assessment",
      "Website & Web Application VAPT",
    ],
  },
  // {
  //   id: "vms-hms",
  //   title: "Products",
  //   heading: "Visitor & Hospital Management Systems",
  //   icon: Code2,
  //   image: "/img/visitor and hms.png",
  //   description:
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
