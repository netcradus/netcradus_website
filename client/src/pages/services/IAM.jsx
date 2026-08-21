import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Key,
  Shield,
  UserCheck,
  Lock,
  Eye,
  RefreshCw,
  UserPlus,
  UserMinus,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  ShieldAlert,
  Sliders,
  ChevronRight,
  Check,
  Layers,
  Users,
  ShieldCheck,
  Building2,
  Workflow,
  HelpCircle,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const IAMPage = () => {
  usePageMeta(
    SEO_META.iam?.title || "Identity & Access Management (IAM) Services | Netcradus",
    SEO_META.iam?.description || "Secure every identity, enforce least-privilege access, and continuously govern who can access what across the enterprise."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Section 2 — Identity Security Cards
  const identitySecurityCards = [
    {
      title: "Role-Based Access Control",
      subtitle: "RBAC Governance",
      icon: UserCheck,
      bullets: [
        "Assign permissions based on defined organisational roles.",
        "Reduce unnecessary access across departments.",
        "Support consistent, scalable access policies.",
      ],
    },
    {
      title: "Multi-Factor Authentication",
      subtitle: "MFA Enforcement",
      icon: Lock,
      bullets: [
        "Strengthen authentication with additional verification factors.",
        "Reduce the risk associated with compromised credentials.",
        "Secure remote, cloud, and on-premises logins.",
      ],
    },
    {
      title: "Least Privilege",
      subtitle: "Access Minimisation",
      icon: Shield,
      bullets: [
        "Give users only the access required to perform their responsibilities.",
        "Reduce excessive permissions and identity-related risk.",
        "Prevent privilege creep as roles evolve over time.",
      ],
    },
    {
      title: "Access Governance",
      subtitle: "Lifecycle Oversight",
      icon: Eye,
      bullets: [
        "Review access throughout the identity lifecycle.",
        "Identify inappropriate or unnecessary access permissions.",
        "Support controlled access changes, recertification, and revocation.",
      ],
    },
  ];

  // Section 3 — Identity Lifecycle (JML) Cards
  const lifecycleCards = [
    {
      stage: "Joiner",
      label: "Provisioning",
      desc: "Provision appropriate, role-aligned access when a user joins the organisation.",
      icon: UserPlus,
    },
    {
      stage: "Mover",
      label: "Modification",
      desc: "Update and recertify access when a user's role, team, or responsibilities change.",
      icon: RefreshCw,
    },
    {
      stage: "Leaver",
      label: "Revocation",
      desc: "Promptly revoke all systems and application access when a user leaves the organisation.",
      icon: UserMinus,
    },
  ];

  // Section 4 — Governance Workflow Steps
  const governanceWorkflow = [
    { step: "01", name: "Request Access", desc: "User or manager submits a role or resource access request." },
    { step: "02", name: "Approval", desc: "Multi-level authorization by resource owners and security managers." },
    { step: "03", name: "Provisioning", desc: "Automated or controlled privilege assignment based on RBAC rules." },
    { step: "04", name: "Usage", desc: "Active system usage monitored under continuous least-privilege policies." },
    { step: "05", name: "Review", desc: "Periodic access certification and entitlement audits." },
    { step: "06", name: "Renew / Modify / Revoke", desc: "Entitlements renewed, updated for Movers, or revoked for Leavers." },
  ];

  // Section 5 — Risk Reduction Points
  const riskReductionPoints = [
    "Reduce excessive privileges across cloud and enterprise systems",
    "Identify inappropriate or orphaned access accounts",
    "Enforce consistent access policies and authorization logic",
    "Improve audit visibility with centralized access logs",
    "Support periodic internal and external security reviews",
    "Strengthen compliance readiness for data protection frameworks",
  ];

  // Section 6 — Enterprise Features List
  const enterpriseFeatures = [
    { name: "Role-based access", desc: "Structured RBAC policy frameworks", icon: UserCheck },
    { name: "Multi-factor authentication", desc: "Adaptive MFA enforcement", icon: Lock },
    { name: "Least privilege", desc: "Zero excessive entitlement posture", icon: Shield },
    { name: "Identity lifecycle management", desc: "Automated JML workflows", icon: RefreshCw },
    { name: "Access governance", desc: "Continuous policy oversight", icon: Eye },
    { name: "Access reviews", desc: "Periodic certification schedules", icon: FileCheck },
    { name: "Audit visibility", desc: "Complete identity telemetry logs", icon: ShieldCheck },
  ];

  return (
    <div className="bg-[#05060A] text-text-primary transition-colors duration-500 overflow-x-hidden relative">
      
      {/* GLOBAL DYNAMIC BACKGROUND ACCENTS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-[12%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FF6B00_0%,rgba(255,107,0,0.15)_40%,transparent_70%)] opacity-25 blur-[120px]" />
        <div className="absolute top-[45%] -right-[15%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,#3B82F6_0%,rgba(59,130,246,0.15)_45%,transparent_70%)] opacity-25 blur-[140px]" />
        <div className="absolute top-[80%] left-[15%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,#8B5CF6_0%,rgba(139,92,246,0.12)_45%,transparent_70%)] opacity-20 blur-[130px]" />
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* ==================================================
          1. HERO SECTION
         ================================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden z-10">
        {/* Ambient Glow & Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,107,0,0.15)_0%,transparent_60%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Messaging */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/15 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                <Key size={16} className="text-accent" />
                <span className="text-xs font-black tracking-wider uppercase text-accent">
                  Identity & Access Management
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight">
                Secure Every Identity.<br />
                <span className="bg-gradient-to-r from-accent via-accent-bright to-amber-400 bg-clip-text text-transparent">
                  Control Every Access.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-medium">
                Netcradus helps organisations secure identities, enforce least-privilege access and continuously govern who can access what across the enterprise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(255,107,0,0.35)] hover:bg-accent-bright hover:scale-[1.03] transition-all duration-300 no-underline"
                >
                  Explore IAM
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 hover:scale-[1.03] transition-all duration-300 no-underline shadow-lg"
                >
                  Talk to Our Security Team
                </Link>
              </div>
            </div>

            {/* Right Interactive Visual Card */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-[480px]">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-[90px] pointer-events-none" />
                <div className="relative rounded-[28px] border border-white/15 bg-[#0A0D16]/90 backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-sm font-extrabold text-white uppercase tracking-wider">Identity Governance</span>
                    <span className="text-xs text-accent font-bold px-2.5 py-1 rounded bg-accent/15 border border-accent/30">
                      Active Enforcement
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <UserCheck size={18} className="text-accent shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white">Role-Based Access</p>
                          <p className="text-[11px] text-gray-400">RBAC Role Definitions</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Enforced</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Lock size={18} className="text-accent shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white">Multi-Factor Authentication</p>
                          <p className="text-[11px] text-gray-400">Adaptive Verification</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Verified</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Shield size={18} className="text-accent shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white">Least Privilege Guard</p>
                          <p className="text-[11px] text-gray-400">Zero Excessive Rights</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. IDENTITY SECURITY AT EVERY LAYER
         ================================================== */}
      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Identity Security at Every Layer
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Strong identity security starts with knowing who has access, why they have access and whether that access is still appropriate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {identitySecurityCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[22px] border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-accent/40 hover:bg-orange-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/15 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg">
                        <Icon size={22} />
                      </div>
                      <span className="text-[11px] font-bold text-accent uppercase tracking-wider px-3 py-1 rounded-md bg-accent/10 border border-accent/20">
                        {card.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>

                    <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                      {card.bullets.map((bullet, bIdx) => (
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

      {/* ==================================================
          3. IDENTITY LIFECYCLE MANAGEMENT (JML)
         ================================================== */}
      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Lifecycle Control
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Secure Identity Lifecycle Management
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Access should be continuously controlled throughout the identity journey: <strong className="text-white">Joiner → Mover → Leaver</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {lifecycleCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[22px] border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md p-8 shadow-md hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-black text-white">{card.stage}</span>
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon size={20} />
                      </div>
                    </div>

                    <span className="text-xs font-extrabold uppercase tracking-wider text-accent block mb-2">
                      {card.label}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Lifecycle Capabilities Bar */}
          <div className="p-6 rounded-2xl border border-white/12 bg-black/40 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Access provisioning",
              "Access modification",
              "Access revocation",
              "Lifecycle governance",
            ].map((cap, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 p-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          4. CONTINUOUS ACCESS GOVERNANCE & WORKFLOW
         ================================================== */}
      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Access Governance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Continuous Access Governance
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Enforce continuous visibility, role governance, privilege management, and structured approval workflows across enterprise applications.
            </p>
          </div>

          {/* Visual Workflow Pipeline */}
          <div className="mb-16">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent text-center mb-8">
              Access Governance Workflow Cycle
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
              {governanceWorkflow.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl border border-white/12 bg-[#0A0D16]/90 backdrop-blur-md flex flex-col justify-between hover:border-accent/40 transition-all duration-300"
                >
                  <div>
                    <span className="text-xs font-black text-accent block mb-2">Step {item.step}</span>
                    <h4 className="text-sm font-bold text-white mb-2">{item.name}</h4>
                    <p className="text-[11px] text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                  {idx < governanceWorkflow.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-accent opacity-60">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Governance Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Access reviews",
              "Access certification",
              "Permission visibility",
              "Role governance",
              "Privilege management",
              "Approval workflows",
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-white/12 bg-black/50 backdrop-blur-md text-center"
              >
                <FileCheck size={18} className="text-accent mx-auto mb-2" />
                <span className="text-xs font-bold text-white block">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          5. IDENTITY RISK & COMPLIANCE
         ================================================== */}
      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Risk Management
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Reduce Identity-Related Risk
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Uncontrolled privileges and orphaned accounts are among the leading attack vectors. Strong Identity & Access Management helps organisations systematically mitigate access risks.
              </p>
              <p className="text-xs text-gray-400 italic border-l-2 border-accent pl-3">
                * Effective IAM strengthens security reviews and compliance readiness across industry frameworks.
              </p>
            </div>

            {/* Right Points Cards */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {riskReductionPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md flex items-start gap-3 hover:border-accent/30 transition-all duration-300"
                  >
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          6. ENTERPRISE SECURITY
         ================================================== */}
      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Enterprise Readiness
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Built for Enterprise Identity Security
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Scalable, role-aligned identity security tailored to enterprise requirements and regulatory audit reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md flex items-center gap-4 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white capitalize">{item.name}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          7. FINAL CTA
         ================================================== */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden bg-gradient-to-br from-[#0A0D16] via-[#05060A] to-orange-950/30 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.2),transparent_65%)] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/15 backdrop-blur-md">
            <Key size={14} className="text-accent" />
            <span className="text-xs font-bold tracking-wider uppercase text-accent">
              Identity Control
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Secure Your Identity Infrastructure
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
            Build stronger identity controls, reduce unnecessary access and improve visibility across the identity lifecycle.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/services/iam"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/30 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Explore IAM
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-black/40 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Talk to Our Security Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IAMPage;
