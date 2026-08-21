import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Server,
  Code,
  Activity,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Eye,
  FileCheck,
  Database,
  Building2,
  Globe,
  FileText,
  HelpCircle,
  Key,
  Users,
  Terminal,
  Cpu,
  Layers,
  Search,
  Zap,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const CyberSecurityPage = () => {
  usePageMeta(
    SEO_META.services?.title || "Cybersecurity Services | Netcradus",
    SEO_META.services?.description || "Security, privacy, and compliance built into Netcradus."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Trust Indicator badges below hero for verified standards
  const trustIndicators = [
    { name: "ISO/IEC 27001", tag: "InfoSec Management" },
    { name: "ISO/IEC 27701", tag: "Privacy Management" },
    { name: "SOC 2 Type II", tag: "Trust Criteria" },
    { name: "DPDP Act 2023", tag: "India Data Privacy" },
    { name: "UK GDPR", tag: "UK Privacy Standard" },
    { name: "EU GDPR", tag: "EU Privacy Standard" },
  ];

  // Section 1 — Comprehensive Cybersecurity Pillars
  const comprehensivePillars = [
    {
      title: "Identity & Access Management",
      icon: Key,
      items: ["RBAC (Role-Based Access Control)", "MFA (Multi-Factor Authentication)", "Least privilege access model"],
    },
    {
      title: "Data Protection",
      icon: Lock,
      items: ["End-to-end encryption in transit & at rest", "Data minimisation protocols", "Secure deletion & retention governance"],
    },
    {
      title: "Infrastructure Security",
      icon: Server,
      items: ["Network security & perimeter defense", "Endpoint protection & surveillance", "Continuous vulnerability management"],
    },
    {
      title: "Application Security",
      icon: Code,
      items: ["Secure SDLC integration", "VAPT (Vulnerability Assessment & Pen Testing)", "Code security audits & penetration testing"],
    },
    {
      title: "Monitoring & Response",
      icon: Activity,
      items: ["AI-powered SIEM & telemetry correlation", "Real-time threat detection", "24/7 incident response & security monitoring"],
    },
  ];

  // Section 2 — Security & Compliance Standards
  const complianceStandards = [
    {
      code: "ISO/IEC 27001",
      title: "Information Security Management System",
      desc: "Establishes, implements, maintains, and continually improves our Information Security Management System (ISMS).",
    },
    {
      code: "ISO/IEC 27701",
      title: "Privacy Information Management System",
      desc: "Extends our ISMS to govern Privacy Information Management (PIMS) for processing personal data securely.",
    },
    {
      code: "SOC 2 Type II",
      title: "Trust Services Criteria",
      desc: "Evaluates operational controls relating to security, availability, confidentiality, and processing integrity.",
    },
    {
      code: "DPDP Act 2023",
      title: "Digital Personal Data Protection",
      desc: "Aligns data handling, user consent mechanisms, and processing rights with India's DPDP framework.",
    },
    {
      code: "UK GDPR",
      title: "UK Data Protection Standard",
      desc: "Fulfills data protection and privacy requirements applicable to UK-related processing and subjects.",
    },
    {
      code: "EU GDPR",
      title: "EU General Data Protection Regulation",
      desc: "Adheres to EU data protection principles, transfer safeguards, and individual data subject rights.",
    },
  ];

  // Section 3 — Enterprise Trust Elements
  const enterpriseTrustItems = [
    "Certifications",
    "Compliance framework",
    "Security controls",
    "Privacy governance",
    "Subprocessors",
    "Data locations",
    "Business continuity",
    "Incident response",
    "Security documentation",
  ];

  // Section 4 — Security Documents List (Sensitive documentation tagged "Available upon request")
  const customerDocuments = [
    { name: "ISO 27001 Certificate", type: "Certification Document", status: "Available upon request" },
    { name: "ISO 27701 Certificate", type: "Privacy Certification", status: "Available upon request" },
    { name: "SOC 2 Type II Report", type: "Audit Report", status: "Available upon request" },
    { name: "DPDPA Readiness Documentation", type: "Compliance Report", status: "Available upon request" },
    { name: "Security Whitepaper", type: "Technical Overview", status: "Available upon request" },
    { name: "Data Processing Agreement (DPA)", type: "Legal Template", status: "Available upon request" },
    { name: "Business Continuity Information", type: "Operational Overview", status: "Available upon request" },
    { name: "Penetration Test Summary", type: "Executive Summary", status: "Available upon request" },
  ];

  return (
    <div className="bg-[#05060A] text-text-primary transition-colors duration-500 overflow-x-hidden relative">
      
      {/* GLOBAL DYNAMIC CYBER BACKGROUND ACCENTS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glow 1: Vibrant Orange Glow */}
        <div className="absolute top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FF6B00_0%,rgba(255,107,0,0.15)_40%,transparent_70%)] opacity-25 blur-[120px]" />
        {/* Glow 2: Cyan / Blue Tech Glow */}
        <div className="absolute top-[40%] -right-[15%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,#3B82F6_0%,rgba(139,92,246,0.15)_45%,transparent_70%)] opacity-25 blur-[140px]" />
        {/* Glow 3: Deep Magenta Ambient Light */}
        <div className="absolute top-[75%] left-[20%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,#D946EF_0%,rgba(217,70,239,0.12)_45%,transparent_70%)] opacity-20 blur-[130px]" />
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* ========================================
          HERO SECTION
         ======================================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden z-10">
        {/* High Visibility Looping Ambient Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none z-0"
        >
          <source src="/videos/cybersecurity services.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Light Gradient Overlay to Ensure High Video Visibility + Sharp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-[#05060A] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,107,0,0.18)_0%,transparent_60%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/15 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <Shield size={16} className="text-accent" />
              <span className="text-xs font-black tracking-wider uppercase text-accent">
                Cybersecurity & Compliance
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Security, Privacy & Compliance <br />
              <span className="bg-gradient-to-r from-accent via-accent-bright to-amber-400 bg-clip-text text-transparent">
                Built Into Netcradus
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Netcradus maintains a security and privacy framework designed to protect customer data, systems and information throughout their lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(255,107,0,0.35)] hover:bg-accent-bright hover:scale-[1.03] transition-all duration-300 no-underline"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 hover:scale-[1.03] transition-all duration-300 no-underline shadow-lg"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Professional Trust Indicator Bar Below Hero */}
          <div className="mt-14 pt-8 border-t border-white/15 relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-accent mb-4 drop-shadow">
              Verified Compliance Standards & Frameworks
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {trustIndicators.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center p-3.5 rounded-xl border border-white/15 bg-black/50 backdrop-blur-md hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-md"
                >
                  <span className="text-sm font-black text-white">{item.name}</span>
                  <span className="text-[10px] text-gray-300 mt-0.5 font-medium">{item.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 1 — COMPREHENSIVE CYBERSECURITY
         ======================================== */}
      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Security Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Comprehensive Cybersecurity
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Netcradus approaches cybersecurity across identity, data, infrastructure, applications, monitoring and incident response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comprehensivePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[22px] border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-accent/40 hover:bg-orange-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-xl bg-accent/15 text-accent mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white shadow-lg">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4">{pillar.title}</h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                      {pillar.items.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 2 — SECURITY & COMPLIANCE
         ======================================== */}
      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Governance & Frameworks
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Security & Compliance
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Security and privacy are embedded into the way Netcradus designs, develops and operates its technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-[22px] border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <div className="inline-block px-3.5 py-1 rounded-md bg-accent/15 border border-accent/30 text-accent font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm">
                  {item.code}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3 — ENTERPRISE TRUST
         ======================================== */}
      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Customer Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Enterprise Trust
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Security and compliance information for enterprise customers and security review teams.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {enterpriseTrustItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-xl border border-white/15 bg-black/50 backdrop-blur-md text-xs font-semibold text-white shadow-sm"
                  >
                    <ShieldCheck size={14} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/trust"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm tracking-wide shadow-lg shadow-accent/25 hover:bg-accent-bright hover:scale-[1.02] transition-all duration-300 no-underline"
                >
                  Visit Trust Center →
                </Link>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-[90px] pointer-events-none" />
                <div className="relative rounded-[28px] border border-white/15 bg-[#0A0D16]/90 backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-sm font-extrabold text-white uppercase tracking-wider">Trust Program</span>
                    <span className="text-xs text-accent font-bold">Continuous Assurance</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Our dedicated security office supports RFP reviews, vendor risk assessments, data protection impact assessments, and technical architecture validations for global enterprise partners.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                      <Lock size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Enterprise Review Ready</h4>
                      <p className="text-[11px] text-gray-300 mt-0.5">Comprehensive audit reports available under standard NDA.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 4 — SECURITY DOCUMENTS
         ======================================== */}
      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Compliance Vault
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Customer Security Documents
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Detailed security and compliance documentation is available to customers and qualified enterprise prospects upon request.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-[20px] border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-md"
              >
                <div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">
                    {doc.type}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-3 leading-snug">{doc.name}</h3>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="inline-block text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                    {doc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Request Documentation Access
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 5 — SECURITY CONTACT
         ======================================== */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden bg-gradient-to-br from-[#0A0D16] via-[#05060A] to-orange-950/30 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.2),transparent_65%)] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/15 backdrop-blur-md">
            <HelpCircle size={14} className="text-accent" />
            <span className="text-xs font-bold tracking-wider uppercase text-accent">
              Security Assistance
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Questions About Security?
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
            Our security and compliance team can provide additional information for customer security reviews and due diligence.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/30 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Contact Security →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CyberSecurityPage;