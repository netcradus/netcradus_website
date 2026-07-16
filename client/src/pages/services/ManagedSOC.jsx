import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye,
  Search,
  Zap,
  BellOff,
  FileText,
  TrendingDown,
  Shield,
  Database,
  Radar,
  AlertTriangle,
  Monitor,
  Radio,
  GitBranch,
  Activity,
  FileSpreadsheet,
  DownloadCloud,
  BrainCircuit,
  Flame,
  Key,
  Network,
  Cloud,
  Building2,
  Heart,
  Factory,
  Landmark,
  GraduationCap,
  ShoppingCart,
  PhoneCall,
  Truck,
  Clock,
  Users,
  FileCheck,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Workflow,
  Cpu,
  Globe,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const ManagedSOCPage = () => {
  usePageMeta(SEO_META.services.title, SEO_META.services.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden">
      
      {/* SECTION 1 — HERO */}
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
                  Managed Security Operations Center
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white">
                24×7 Managed SOC<br />
                <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
                  Services for Continuous Defense
                </span>
              </h1>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
                Cyber threats don't operate on a schedule—and neither should your security. Our Managed Security Operations Center (SOC) provides around-the-clock monitoring, threat detection, incident investigation, and rapid response to protect your organization from evolving cyber threats.
              </p>
              
              <p className="text-base text-text-secondary leading-relaxed max-w-xl">
                By combining advanced security technologies with experienced analysts, we help you detect suspicious activities in real time, reduce response times, and strengthen your overall security posture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm tracking-wide shadow-lg shadow-accent/20 hover:bg-accent-bright hover:scale-102 transition-all duration-300 no-underline"
                >
                  Start Your Managed SOC Assessment
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/20 hover:scale-102 transition-all duration-300 no-underline"
                >
                  Talk to a Security Expert
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="absolute w-[350px] h-[350px] rounded-full bg-accent/8 blur-[80px] pointer-events-none z-0" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[500px]"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                  <img
                    src="/img/managed soc.png"
                    alt="Managed SOC Command Center"
                    className="w-full h-auto object-contain rounded-[20px]"
                    style={{ filter: "drop-shadow(0 15px 30px rgba(255, 107, 0, 0.15))" }}
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS A MANAGED SOC? */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-3xl pointer-events-none" />
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <img
                    src="/generated/corporate_office_cyber_1773394698579.png"
                    alt="Managed SOC Definition"
                    className="w-full h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Security Ops Overview
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                What is a Managed SOC?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                A Managed Security Operations Center (SOC) is a dedicated team of cybersecurity experts that continuously monitors your IT infrastructure, networks, endpoints, cloud environments, and applications for potential security threats.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Using advanced tools such as SIEM, XDR, EDR, SOAR, and Threat Intelligence, a Managed SOC identifies, investigates, and responds to security incidents before they can impact your business.
              </p>
              <p className="text-base text-text-secondary leading-relaxed font-semibold text-white/90">
                Instead of building and maintaining an in-house SOC—which requires significant investment in technology, personnel, and infrastructure—organizations can rely on a Managed SOC provider to deliver enterprise-grade security as a service.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY YOUR BUSINESS NEEDS A MANAGED SOC */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Smarter Defense</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Why Your Business Needs a Managed SOC</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Outsourcing your security operations center grants enterprise-grade defense mechanisms at a fraction of the build cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "24×7 Continuous Monitoring", desc: "Constant surveillance of network infrastructure, logging anomalous spikes and activities around the clock.", icon: Eye },
              { title: "Early Threat Detection", desc: "Identify active exploit paths and system deviations before payload execution happens.", icon: Search },
              { title: "Faster Incident Response", desc: "Execute sub-second isolation steps on affected workloads to block lateral movements.", icon: Zap },
              { title: "Reduce Alert Fatigue", desc: "Filter false-positives to isolate actual breaches and deliver highly validated incident warnings.", icon: BellOff },
              { title: "Compliance Support", desc: "Maintain regulatory posturing matching local government requirements and security audits.", icon: FileText },
              { title: "Cost-Effective Security", desc: "Avoid hiring, retention, infrastructure, and tool license overheads using a managed SOC service model.", icon: TrendingDown }
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

      {/* SECTION 4 — OUR MANAGED SOC SERVICES */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Comprehensive Offerings</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Our Managed SOC Services</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deploy full-suite security operations matching the demands of modern complex network environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Security Monitoring", desc: "24/7 endpoint, user activity and cloud infrastructure monitoring.", icon: Shield },
              { title: "SIEM Management", desc: "Intelligent event logging, baseline tuning and query optimizations.", icon: Database },
              { title: "Threat Detection & Analysis", desc: "AI-powered anomaly evaluation and vulnerability indexing.", icon: Radar },
              { title: "Incident Response", desc: "Expert containment containment playbooks and operational cleanups.", icon: AlertTriangle },
              { title: "Endpoint Detection & Response (EDR)", desc: "Deep host telemetry analysis and file manipulation tracing.", icon: Monitor },
              { title: "Extended Detection & Response (XDR)", desc: "Unified logging across endpoints, identity, application and clouds.", icon: Radio },
              { title: "Threat Intelligence", desc: "Continuous mapping of threat indicators and global swarm signatures.", icon: GitBranch },
              { title: "Vulnerability Management", desc: "Proactive scanning, prioritization and threat posture mapping.", icon: Activity },
              { title: "Security Reporting", desc: "Detailed metric summaries, threat histories and compliance compliance logs.", icon: FileSpreadsheet }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-8 shadow-sm hover:border-accent/25 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-6 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW OUR MANAGED SOC WORKS */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Process Flow</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">How Our Managed SOC Works</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Our structured operational cycle ensures continuous protection from data ingestion to adaptive recovery.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent via-accent-bright to-orange-700 z-0 opacity-40" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", name: "Collect", desc: "Gather logs and telemetry from firewalls, servers, endpoints, cloud platforms, applications, and network devices.", icon: DownloadCloud },
                { step: "02", name: "Analyze", desc: "Correlate events using AI-driven analytics, behavioral analysis, and threat intelligence.", icon: BrainCircuit },
                { step: "03", name: "Detect", desc: "Identify suspicious behavior, anomalies, and potential cyber attacks in real time.", icon: Search },
                { step: "04", name: "Respond", desc: "Investigate incidents, contain threats, and provide actionable remediation recommendations.", icon: Shield },
                { step: "05", name: "Improve", desc: "Continuously optimize security rules, detection capabilities, and incident response processes.", icon: Flame }
              ].map((process, idx) => {
                const Icon = process.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-border bg-surface text-accent mb-6 shadow-lg shadow-black/30 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-black text-accent tracking-widest uppercase mb-1">
                      Step {process.step}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">{process.name}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-[200px] mx-auto">
                      {process.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — KEY BENEFITS */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Value Metric</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Key Benefits</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Discover the strategic advantages that managed cybersecurity operations bring to your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "24×7 Security Monitoring",
              "Real-Time Threat Detection",
              "Rapid Incident Response",
              "Reduced Mean Time to Detect (MTTD)",
              "Reduced Mean Time to Respond (MTTR)",
              "AI-Powered Security Analytics",
              "Compliance-Ready Reporting",
              "Reduced False Positives",
              "Improved Security Visibility",
              "Lower Operational Costs",
              "Expert Security Analysts",
              "Scalable Enterprise Security"
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

      {/* SECTION 7 — TECHNOLOGIES WE SUPPORT */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Security Tech Stack</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Technologies We Support</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We leverage, support and integrate with top-tier cybersecurity tools to provide unified protection structures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "SIEM Systems", desc: "Log correlation, query alerts and telemetry archiving.", icon: Database },
              { title: "XDR Solutions", desc: "Cross-vector data detection and threat mapping.", icon: Radio },
              { title: "EDR Platforms", desc: "Endpoint tracking and host payload isolation.", icon: Monitor },
              { title: "SOAR Engine", desc: "Automated response playbooks and script configurations.", icon: Workflow },
              { title: "UEBA Integration", desc: "Behavioral tracking of credentials and access entities.", icon: Cpu },
              { title: "Threat Intel Platforms", desc: "External indicator mapping and swarm signature checks.", icon: Globe },
              { title: "Cloud Monitoring", desc: "Workload tracking and cloud posture evaluations.", icon: Cloud },
              { title: "Identity Monitoring", desc: "Access log reviews and privilege escalation scans.", icon: Key },
              { title: "Network Detection", desc: "Perimeter log indexing and internal segmentation reviews.", icon: Network },
              { title: "Security Automation", desc: "Sub-second response actions and automated triggers.", icon: Zap }
            ].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl border border-border bg-surface hover:border-accent/15 hover:bg-orange-500/5 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{tech.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8 — INDUSTRIES WE SECURE */}
      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Verticals Covered</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Industries We Secure</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deliver custom SIEM, SOAR, and SOC surveillance models tailored to industry regulations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Banking & Finance", icon: Building2 },
              { name: "Healthcare", icon: Heart },
              { name: "Manufacturing", icon: Factory },
              { name: "Government", icon: Landmark },
              { name: "Education", icon: GraduationCap },
              { name: "Retail & E-commerce", icon: ShoppingCart },
              { name: "IT & SaaS", icon: Monitor },
              { name: "Telecommunications", icon: PhoneCall },
              { name: "Logistics", icon: Truck },
              { name: "Energy & Utilities", icon: Flame }
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

      {/* SECTION 9 — WHY CHOOSE NETCRADUS MANAGED SOC? */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Netcradus Advantage</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Choose Netcradus Managed SOC?
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                At Netcradus, we deliver enterprise-grade Managed SOC services designed to provide complete visibility, rapid threat detection, and proactive incident response.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Our team works as an extension of your organization, helping you reduce cyber risk while ensuring continuous protection and compliance.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                With a focus on automation, AI-powered analytics, and expert-led monitoring, we help organizations stay resilient against today's most sophisticated cyber threats.
              </p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "24×7 SOC Operational Monitoring", icon: Clock },
                { title: "AI-Powered Event Analytics", icon: Cpu },
                { title: "Expert Analysts & Handlers", icon: Users },
                { title: "Sub-Second Threat Response", icon: Zap },
                { title: "Ensured Audit Compliance", icon: FileCheck },
                { title: "Enterprise-Grade Asset Protection", icon: ShieldAlert }
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

      {/* SECTION 10 — FINAL CTA */}
      <section className="py-20 border-t border-border/20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready for 24×7 Security Monitoring?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Protect your business with a Managed SOC that never sleeps. Gain continuous visibility, faster threat detection, and expert incident response—all from a trusted cybersecurity partner.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Start Your Managed SOC Assessment
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Talk to a Security Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManagedSOCPage;