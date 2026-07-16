import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Key,
  Lock,
  ArrowRight,
  Database,
  Radio,
  Monitor,
  Workflow,
  Cpu,
  Globe,
  CircleDollarSign,
  Zap,
  FileCheck,
  Users,
  TrendingUp,
  ShieldAlert,
  FileText,
  EyeOff,
  Network,
  Building2,
  Heart,
  Factory,
  Landmark,
  GraduationCap,
  ShoppingCart,
  PhoneCall,
  Truck,
  Flame,
  CheckCircle2,
  FileSpreadsheet,
  Settings,
  Target,
  Crosshair,
  ShieldCheck,
  Search,
  Server,
  AlertTriangle,
  Cloud,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const VAPTPage = () => {
  usePageMeta(SEO_META.services.title, SEO_META.services.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden">
      
      {/* SECTION 1 — HERO (Matches the uploaded reference UI) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 bg-white text-gray-900 overflow-hidden">
        {/* Wave background curves at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,60 C320,100 720,10 1080,70 C1200,90 1320,100 1440,80 L1440,100 L0,100 Z"
              fill="#0f172a"
            />
            <path
              d="M0,70 C360,110 760,20 1100,80 C1220,100 1340,110 1440,90"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="4"
              opacity="0.3"
            />
            <path
              d="M100,80 C460,120 860,30 1200,90 C1320,110 1400,115 1440,100"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: UI Text & Bullet Icons */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-blue-900 leading-none">
                  VAPT
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.3em] text-green-600">
                  SERVICES
                </h2>
                {/* Horizontal line gradient from green to blue */}
                <div className="w-64 h-[3px] bg-gradient-to-r from-green-500 via-green-400 to-blue-600 rounded-full mt-4" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                Identify Vulnerabilities Before Attackers Do
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                Cybercriminals are constantly searching for security weaknesses in networks, applications, APIs, cloud environments, and IT infrastructure. Even a small vulnerability can lead to data breaches, ransomware attacks, financial loss, and business disruption.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                At Netcradus, our Vulnerability Assessment & Penetration Testing (VAPT) services help organizations identify, evaluate, and remediate security vulnerabilities before they can be exploited. Our security experts simulate real-world cyber attacks to uncover hidden weaknesses and provide actionable recommendations to strengthen your security posture.
              </p>

              {/* 4 horizontal icons with descriptions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-gray-100">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-800">
                    <Target size={22} />
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-tight">
                    Identify<br />Vulnerabilities
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-700">
                    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <path d="M8 12h6" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-tight">
                    Assess<br />Risk
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-800">
                    <Crosshair size={22} />
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-tight">
                    Penetration<br />Testing
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-700">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-tight">
                    Strengthen<br />Security
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm tracking-wide shadow-lg shadow-accent/20 hover:bg-accent-bright hover:scale-102 transition-all duration-300 no-underline"
                >
                  Request a VAPT Assessment
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 font-bold text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 no-underline"
                >
                  Talk to a Security Consultant
                </Link>
              </div>
            </div>

            {/* Right Column: Concentric target web visual (cropped from vapt.png) */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.06)] bg-gray-50">
                <img
                  src="/img/vapt.png"
                  alt="VAPT Target Network Illustration"
                  className="absolute inset-0 w-full h-full object-cover object-[72%_center]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS VAPT? */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-3xl pointer-events-none" />
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <img
                    src="/generated/hacker_code_screen_1773394510636.png"
                    alt="Ethical Hacking and VAPT Auditing"
                    className="w-full h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Security Audit
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                What is VAPT?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Vulnerability Assessment & Penetration Testing (VAPT) is a comprehensive security testing process that combines two essential approaches:
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-md font-extrabold text-white">Vulnerability Assessment (VA)</h4>
                  <p className="text-sm text-text-secondary mt-1">
                    A systematic process of identifying, classifying, and prioritizing security vulnerabilities across your IT infrastructure, applications, networks, cloud environments, and endpoints.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-md font-extrabold text-white">Penetration Testing (PT)</h4>
                  <p className="text-sm text-text-secondary mt-1">
                    An authorized simulation of real-world cyber attacks where ethical hackers attempt to exploit identified vulnerabilities to determine their actual business impact.
                  </p>
                </div>
              </div>

              <p className="text-base text-text-secondary leading-relaxed font-semibold text-white/90 pt-2">
                Together, VAPT provides organizations with a clear understanding of their security risks and practical guidance to eliminate them before attackers can take advantage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY YOUR BUSINESS NEEDS VAPT */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Proactive Defense</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Why Your Business Needs VAPT</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Cyber threats are constantly evolving, and new vulnerabilities emerge every day. Regular VAPT helps organizations proactively identify security gaps before they become serious incidents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Detect Gaps Early", desc: "Detect security weaknesses before attackers exploit them.", icon: Search },
              { title: "Protect Vital Data", desc: "Protect sensitive customer and business data.", icon: Lock },
              { title: "Mitigate Breach Risks", desc: "Reduce the risk of ransomware and cyber attacks.", icon: ShieldAlert },
              { title: "Harden Security Posture", desc: "Strengthen your overall security posture.", icon: Shield },
              { title: "Regulatory Alignment", desc: "Meet regulatory and compliance requirements.", icon: FileCheck },
              { title: "Reputation Protection", desc: "Minimize financial and reputational damage.", icon: CircleDollarSign },
              { title: "Build Stakeholder Trust", desc: "Build customer and stakeholder confidence.", icon: Users },
              { title: "Secure Modern Scale", desc: "Enable digital transformations with minimal operational perimeter exposures.", icon: TrendingUp }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-6 shadow-sm hover:border-accent/30 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-xl bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-md font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR VAPT SERVICES */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Auditing Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Our VAPT Services</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deliver dedicated manual ethical hacking assessments and automated scanning loops across all major interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Web App Pen Testing", desc: "Identify vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), Authentication Bypass, and Business Logic Flaws.", icon: Globe },
              { title: "Mobile App Security", desc: "Assess Android and iOS applications for security vulnerabilities, insecure storage, API weaknesses, and data leakage.", icon: Monitor },
              { title: "Network Pen Testing", desc: "Evaluate internal and external network infrastructure to identify exploitable security gaps.", icon: Server },
              { title: "API Security Testing", desc: "Test REST, SOAP, GraphQL, and other APIs for authentication flaws, authorization issues, and injection attacks.", icon: Network },
              { title: "Cloud Security Assessment", desc: "Assess AWS, Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud environments for misconfigurations and security risks.", icon: Cloud },
              { title: "Wireless Security Testing", desc: "Evaluate Wi-Fi infrastructure for weak encryption, rogue access points, and unauthorized access.", icon: Radio },
              { title: "Internal & External PT", desc: "Simulate attacks from both inside and outside your organization to evaluate real-world security.", icon: Crosshair },
              { title: "Configuration Review", desc: "Review operating systems, databases, servers, firewalls, and cloud services against security best practices.", icon: Settings }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-6 shadow-sm hover:border-accent/25 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT WE TEST */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Comprehensive Scope</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">What We Test</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Our certified security professionals evaluate every component of your modern enterprise attack surface.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Web Applications",
              "Mobile Applications",
              "APIs",
              "Corporate Networks",
              "Cloud Infrastructure",
              "Firewalls & VPNs",
              "Active Directory",
              "Wireless Networks",
              "Email Security",
              "Servers & Databases",
              "Identity & Access Management (IAM)",
              "Container & Kubernetes Environments"
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface hover:border-accent/15 transition-all duration-300"
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0">
                  <CheckCircle2 size={13} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — OUR VAPT METHODOLOGY */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Auditing Roadmap</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Our VAPT Methodology</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We follow a strict, multi-phase assessment workflow to securely detect, validated, and confirm remediations.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent via-accent-bright to-orange-700 z-0 opacity-40" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {[
                { step: "01", name: "Planning & Scoping", desc: "Define objectives, identify target systems, and establish testing rules.", icon: Database },
                { step: "02", name: "Info Gathering", desc: "Collect technical information about applications, infrastructure, and attack surfaces.", icon: Search },
                { step: "03", name: "Vulnerability Ass.", desc: "Use automated tools and manual analysis to identify security weaknesses.", icon: Settings },
                { step: "04", name: "Penetration Testing", desc: "Safely exploit vulnerabilities to validate risk and determine real-world impact.", icon: Crosshair },
                { step: "05", name: "Reporting", desc: "Deliver a detailed report with risk ratings, proof of concept, technical findings, and remediation recommendations.", icon: FileSpreadsheet },
                { step: "06", name: "Re-Testing", desc: "Verify that identified vulnerabilities have been successfully resolved after remediation.", icon: CheckCircle2 }
              ].map((process, idx) => {
                const Icon = process.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-border bg-surface text-accent mb-6 shadow-lg shadow-black/30 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-black text-accent tracking-widest uppercase mb-1">
                      Step {process.step}
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2">{process.name}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed max-w-[180px] mx-auto">
                      {process.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — COMMON VULNERABILITIES WE IDENTIFY */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Identified Risks</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Common Vulnerabilities We Identify</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We test systems against critical risk vectors, compliance vulnerabilities, and logic flaws.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "SQL Injection (SQLi)",
              "Cross-Site Scripting (XSS)",
              "Cross-Site Request Forgery (CSRF)",
              "Authentication & Authorization Flaws",
              "Remote Code Execution (RCE)",
              "Broken Access Control",
              "Security Misconfigurations",
              "Sensitive Data Exposure",
              "Weak Password Policies",
              "Server Misconfigurations",
              "API Vulnerabilities",
              "Cloud Configuration Issues"
            ].map((vulnerability, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-border bg-surface hover:border-accent/20 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-accent mb-4 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                  <ShieldAlert size={18} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">{vulnerability}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — BENEFITS OF OUR VAPT SERVICES */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Value Delivery</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Benefits of Our VAPT Services</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Harden perimeters, identify issues, and satisfy compliance expectations under expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Identify critical vulnerabilities before attackers do",
              "Validate your organization's security posture",
              "Reduce the risk of cyber attacks and data breaches",
              "Improve compliance with ISO 27001, PCI DSS, HIPAA, GDPR, SOC 2, and other standards",
              "Receive expert, developer-friendly remediation guidance",
              "Enhance customer trust and corporate reputation",
              "Strengthen application, network, and cloud security",
              "Support secure software development and digital transformation"
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-surface shadow-sm hover:border-accent/15 transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
                  <CheckCircle2 size={15} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — INDUSTRIES WE SERVE */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Target Verticals</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Industries We Serve</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We design custom assessment scopes and threat indexing aligned to major global sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Banking & Finance", icon: Building2 },
              { name: "Healthcare", icon: Heart },
              { name: "Government", icon: Landmark },
              { name: "Manufacturing", icon: Factory },
              { name: "Education", icon: GraduationCap },
              { name: "Retail & E-commerce", icon: ShoppingCart },
              { name: "Information Tech.", icon: Monitor },
              { name: "Telecommunications", icon: PhoneCall },
              { name: "Logistics", icon: Truck },
              { name: "Energy & Utilities", icon: Flame },
              { name: "Startups & SaaS", icon: Rocket }
            ].map((industry, idx) => {
              const Icon = industry.icon || Shield;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-border bg-surface hover:border-accent/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-115 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">{industry.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHY CHOOSE NETCRADUS? */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Netcradus Edge</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Choose Netcradus?
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                At Netcradus, our certified security professionals combine automated scanning with expert manual testing to uncover vulnerabilities that automated tools alone often miss. Every assessment includes detailed technical findings, risk prioritization, and practical remediation guidance to help you strengthen your security posture effectively.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                We tailor every engagement to your environment, ensuring accurate testing, minimal disruption, and results that support both security improvement and compliance objectives.
              </p>
            </div>

            {/* Right Highlight Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Certified Ethical Hackers (CEH/OSCP)", icon: Target },
                { title: "Manual + Automated validation checks", icon: Zap },
                { title: "OWASP Top 10 assessment scope", icon: ShieldCheck },
                { title: "Detailed proof-of-concept POC writeups", icon: FileSpreadsheet },
                { title: "Free verification re-testing validation loops", icon: CheckCircle2 },
                { title: "Audit-ready compliance GRC reporting", icon: FileCheck }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-accent/15 transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent shrink-0">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <section className="py-20 border-t border-border/20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Secure Your Business Before Attackers Find the Weakness
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Don't wait for a cyber incident to expose hidden vulnerabilities. Proactively identify and eliminate security risks with Netcradus VAPT Services and build a stronger, more resilient security foundation.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Request a VAPT Assessment
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Talk to a Security Consultant
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

// Simple visual fallback for Rocket icon
const Rocket = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L18 5l-4-4L4.5 16.5z" />
    <path d="m12 12 4 4" />
    <path d="M9 15c-1.5 1.5-2.5 3.5-2.5 3.5s2-1 3.5-2.5" />
  </svg>
);

export default VAPTPage;