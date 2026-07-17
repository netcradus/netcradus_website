import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CircleDollarSign,
  Zap,
  FileCheck,
  Users,
  TrendingUp,
  ShieldAlert,
  ShieldX,
  MailWarning,
  Database,
  UserX,
  CloudAlert,
  Globe,
  Skull,
  Link as LinkIcon,
  Cpu,
  Cloud,
  Laptop,
  BrainCircuit,
  FileText,
  EyeOff,
  Network,
  Building2,
  Heart,
  Factory,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Monitor,
  PhoneCall,
  Truck,
  Flame,
  Hotel,
  Rocket,
  Radar,
  AlertTriangle,
  CheckSquare,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const CyberSecurityPage = () => {
  usePageMeta(SEO_META.services.title, SEO_META.services.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden">

      {/* SECTION 1 – HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Background Gradients & Effects */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 30% 30%, rgba(255,107,0,0.1) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(59,130,246,0.06) 0%, transparent 50%)
            `
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                <span className="text-xs font-bold tracking-wider uppercase text-accent">
                  Cyber Security Services
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white">
                Secure Your Business.<br />
                <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
                  Protect Your Future.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
                Cyber threats are no longer limited to large enterprises. Every business connected to the internet is a potential target. Whether you're a startup, SME, or global organization, cybersecurity is essential to protect your data, operations, reputation, and customers.
              </p>

              <p className="text-base text-text-secondary leading-relaxed max-w-xl">
                At Netcradus, we help organizations stay ahead of evolving cyber threats with intelligent security solutions, proactive monitoring, and expert-driven defense strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm tracking-wide shadow-lg shadow-accent/20 hover:bg-accent-bright hover:scale-102 transition-all duration-300 no-underline"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/20 hover:scale-102 transition-all duration-300 no-underline"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            {/* Right Illustration: Direct Loop Video Component */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="absolute w-[350px] h-[350px] rounded-full bg-accent/8 blur-[80px] pointer-events-none z-0" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[500px]"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                  {/* Looping Inline Video Player */}
                  <div className="relative overflow-hidden rounded-[20px] aspect-video w-full bg-[#0f172a] flex items-center justify-center shadow-[0_15px_30px_rgba(255,107,0,0.15)]">
                    <video
                      src="/img/Netcradus cyber security.mp4"
                      className="w-full h-full object-cover rounded-[20px]"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 – WHAT IS CYBER SECURITY */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Image */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-3xl pointer-events-none" />
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <img
                    src="/generated/cyber_server_room_1773394493658.png"
                    alt="Cyber Security Definition"
                    className="w-full h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Core Definition
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                What is Cyber Security?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Cyber Security is the practice of protecting digital assets—including computers, servers, networks, cloud infrastructure, applications, and sensitive data—from cyber attacks, unauthorized access, and data breaches.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                It combines advanced technologies, security processes, and human expertise to detect, prevent, and respond to cyber threats before they disrupt business operations.
              </p>
              <p className="text-base text-text-secondary leading-relaxed font-semibold text-white/90">
                Today, cybersecurity is not just an IT requirement—it's a critical business investment that enables organizations to operate securely in an increasingly connected world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 – WHY CYBER SECURITY MATTERS */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Vital Protection
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Cyber Security Matters
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Every click, login, online transaction, and cloud application creates new opportunities for cybercriminals.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Modern cybersecurity provides continuous protection by identifying vulnerabilities, detecting threats in real time, and responding before attacks can escalate.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                "Cybersecurity isn't just about preventing attacks—it's about ensuring your business can continue to grow without interruption."
              </p>
            </div>

            {/* Right Column: Statistics Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[24px] border border-accent/20 bg-gradient-to-br from-white/5 to-orange-500/5 p-8 backdrop-blur-md shadow-[0_15px_30px_rgba(255,107,0,0.03)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                <h3 className="text-xl font-extrabold text-white mb-6">Security Landscape In Numbers</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">$4.45M</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Average Cost of a Data Breach</h4>
                      <p className="text-xs text-text-secondary mt-1">Financial impact spanning loss, response and compliance penalties.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">300%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Increase in AI-Powered Threats</h4>
                      <p className="text-xs text-text-secondary mt-1">AI automation is leveraging rapid automated code generation and phishing vectors.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-black text-accent">95%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Human Error Vector</h4>
                      <p className="text-xs text-text-secondary mt-1">Ninety-five percent of security breaches begin with social engineering or weak credentials.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 – WHY EVERY BUSINESS NEEDS CYBER SECURITY */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Essential Pillars</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Why Every Business Needs Cyber Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Cybersecurity acts as the digital shield that protects assets, reputational trust, and daily operational structures in a hyper-connected market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Protect Sensitive Information", desc: "Keep customer records, financial data, and intellectual property secure under continuous access control governance.", icon: Lock },
              { title: "Prevent Financial Losses", desc: "Mitigate expensive downtime, regulatory penalties, loss of transaction fees, and containment expenses.", icon: CircleDollarSign },
              { title: "Ensure Business Continuity", desc: "Maintain operational run-time, minimizing disruptions with automated incident remediation processes.", icon: Zap },
              { title: "Stay Compliant", desc: "Adhere to state standards and regional industry regulatory audits (such as GDPR, ISO 27001, MSME).", icon: FileCheck },
              { title: "Build Customer Trust", desc: "Increase stakeholder retention by demonstrating a robust, continuous security posture and response system.", icon: Users },
              { title: "Enable Digital Growth", desc: "Safely deploy new micro-services, APIs, and business networks with minimal perimeter exposure.", icon: TrendingUp }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-8 shadow-sm hover:border-accent/30 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-xl bg-orange-500/10 text-accent mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 – THE CYBER THREAT LANDSCAPE */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Active Threats</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">The Cyber Threat Landscape</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Cyber attacks are becoming more sophisticated every year. Understanding the threats is the first step toward effective defense.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Ransomware Attacks", icon: ShieldAlert },
              { name: "Phishing & Social Eng.", icon: MailWarning },
              { name: "Data Breaches", icon: Database },
              { name: "Insider Threats", icon: UserX },
              { name: "Cloud Misconfig.", icon: CloudAlert },
              { name: "API & Web Attacks", icon: Globe },
              { name: "Business Email Comp.", icon: ShieldX },
              { name: "Zero-Day Exploits", icon: Skull },
              { name: "Supply Chain Attacks", icon: LinkIcon },
              { name: "AI-Powered Attacks", icon: Cpu }
            ].map((threat, idx) => {
              const Icon = threat.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-border bg-surface hover:border-accent/20 hover:bg-orange-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-accent mb-4 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-tight">{threat.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHY CYBER SECURITY IS IN HIGH DEMAND */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-5 text-left space-y-5">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Market Drivers</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Cyber Security is in High Demand
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                Digital transformation has accelerated across every industry, but so have cyber threats. Today's modern, decentralized network structure requires adaptive controls.
              </p>
            </div>

            {/* Right Content Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Increased Cloud Adoption", icon: Cloud },
                { title: "Hybrid Work Structures", icon: Laptop },
                { title: "AI-Driven Threats", icon: BrainCircuit },
                { title: "Compliance Audits", icon: FileText },
                { title: "IoT Device Expansion", icon: Cpu },
                { title: "Customer Privacy Mandates", icon: EyeOff },
                { title: "Digital Service Proliferation", icon: Network },
                { title: "Ransomware Proliferation", icon: TrendingUp }
              ].map((driver, idx) => {
                const Icon = driver.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/15 transition-all duration-300"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-500/10 text-accent shrink-0">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm font-bold text-white">{driver.title}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 – INDUSTRIES WE PROTECT */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Sectors Secured</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Industries We Protect</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deliver tailored, compliance-aligned cyber protection structures across all major global sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Banking & Finance", icon: Building2 },
              { name: "Healthcare", icon: Heart },
              { name: "Manufacturing", icon: Factory },
              { name: "Government", icon: Landmark },
              { name: "Education", icon: GraduationCap },
              { name: "Retail & E-commerce", icon: ShoppingCart },
              { name: "Information Tech.", icon: Monitor },
              { name: "Telecom", icon: PhoneCall },
              { name: "Logistics", icon: Truck },
              { name: "Energy & Utilities", icon: Flame },
              { name: "Hospitality", icon: Hotel },
              { name: "Startups & SMEs", icon: Rocket }
            ].map((industry, idx) => {
              const Icon = industry.icon;
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

      {/* SECTION 8 – BENEFITS OF INVESTING IN CYBER SECURITY */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Value Realization</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Benefits of Investing in Cyber Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Proactive cybersecurity yields direct returns by avoiding damage, safeguarding operational margins, and maintaining marketplace reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Prevent cyber attacks before they impact your business",
              "Protect confidential business and customer data",
              "Minimize operational downtime",
              "Improve security compliance posturing",
              "Strengthen customer & stakeholder confidence",
              "Reduce long-term risk and breach containment costs",
              "Gain complete operational and network visibility",
              "Execute faster incident containment response",
              "Enable secure corporate innovation programs"
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-surface shadow-sm hover:border-accent/15 transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
                  <CheckCircle2 size={15} />
                </div>
                <span className="text-sm font-bold text-white leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 – THE FUTURE OF CYBER SECURITY */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Next Horizon</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                The Future of Cyber Security
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                The future belongs to organizations that anticipate threats—not just react to them. Adaptive learning, automated responses, and unified telemetry are replacing manual mitigation.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Zero Trust Architecture",
                  "XDR Platforms",
                  "Threat Intelligence Swarms",
                  "Security Automation",
                  "Predictive Analytics"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-[var(--color-surface-raised)]/80 px-4 py-2 text-xs font-semibold text-text-secondary"
                  >
                    • {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Futuristic Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[450px]">
                <div className="absolute inset-0 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                  <img
                    src="/generated/cloud_architecture_1773394719675.png"
                    alt="Futuristic Cyber Security Concept"
                    className="w-full h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10 – WHY CHOOSE NETCRADUS */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Our Advantage</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Why Choose Netcradus?</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-semibold italic text-accent">
              Enterprise-Grade Security. Trusted Expertise. Future-Ready Protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Managed SOC", desc: "24/7 endpoint/network surveillance.", icon: Radar },
              { name: "VAPT Services", desc: "Continuous threat modeling & audits.", icon: ShieldAlert },
              { name: "Cloud Security", desc: "Secure multi-cloud cloud native environments.", icon: Cloud },
              { name: "Network Security", desc: "Perimeter controls & segment isolations.", icon: Network },
              { name: "Incident Response", desc: "Rapid breach isolation & playbook recovery.", icon: AlertTriangle },
              { name: "Compliance Guard", desc: "Ensured regional & corporate auditing posture.", icon: CheckSquare },
              { name: "AI Threat Detection", desc: "Machine learning behavioral anomalies scoring.", icon: Cpu },
              { name: "Security Consulting", desc: "Strategic advisory and expert posturing.", icon: FileSpreadsheet }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl border border-border bg-surface hover:border-accent/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11 – FINAL CTA */}
      <section className="py-20 border-t border-border/20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.12),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Secure Your Business?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Don't wait for a cyber attack to take action. Ensure protection of your organization with continuous, proactive monitoring.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2 relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-semibold text-base shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline whitespace-nowrap"
            >
              Schedule a Security Assessment
              <ArrowRight size={16} className="text-white" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/25 hover:border-[#FF6B00] text-white hover:text-[#FF6B00] hover:bg-[rgba(255,107,0,0.08)] font-semibold text-base transition-all duration-300 no-underline whitespace-nowrap"
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CyberSecurityPage;