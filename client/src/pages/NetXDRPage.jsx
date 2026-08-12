import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  Shield,
  Radar,
  Monitor,
  Search,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  Activity,
  Cpu,
  Database,
  AlertTriangle,
  Lock,
  Eye,
  Server,
  Smartphone,
  Laptop,
  Terminal,
  ExternalLink,
  Sparkles,
  RefreshCw,
  FileCheck,
  Network
} from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';

export default function NetXDRPage() {
  usePageMeta({
    title: "NetCradus XDR | Endpoint, Threat Hunting & Real-Time Detection",
    description: "AI-powered unified endpoint protection, proactive threat hunting, and real-time threat detection designed to identify, investigate, and respond to cyber threats before they impact your organization."
  });

  const [lightboxImage, setLightboxImage] = useState(null);

  // 3 Feature Cards/Sections Data
  const mainSections = [
    {
      id: "endpoints",
      badge: "ENDPOINT SECURITY",
      title: "Protect Every Endpoint.",
      description: "NetCradus XDR protects endpoints across your entire digital environment, including Windows, Linux, macOS, servers, laptops, workstations, cloud workloads, and IoT devices.",
      image: "/assets/netxdr-endpoints-management.png",
      url: "app.netcradus.com/xdr-endpoints-management",
      accent: "#FF6B00",
      capabilities: [
        "Real-time endpoint protection",
        "Process & behavior monitoring",
        "Malware detection",
        "File integrity monitoring",
        "Endpoint vulnerability assessment",
        "Application & device control",
        "Suspicious activity detection",
        "Endpoint isolation",
        "Automated remediation",
        "Endpoint telemetry collection"
      ]
    },
    {
      id: "hunting",
      badge: "PROACTIVE THREAT HUNTING",
      title: "Find Threats Before They Become Incidents.",
      description: "Threat Hunting proactively searches your environment for threats that traditional security alerts may miss.",
      image: "/assets/netxdr-threat-hunting-ioc.png",
      url: "app.netcradus.com/xdr-threat-hunting-ioc",
      accent: "#7C3AED",
      capabilities: [
        "Proactive threat discovery",
        "AI/ML-driven anomaly analysis",
        "MITRE ATT&CK mapping",
        "Behavioral threat analysis",
        "Lateral movement detection",
        "Privilege escalation detection",
        "Credential abuse detection",
        "Persistence detection",
        "Hypothesis-driven hunting",
        "Threat intelligence enrichment",
        "Historical event investigation"
      ]
    },
    {
      id: "detection",
      badge: "REAL-TIME DETECTION",
      title: "Detect Threats in Real Time.",
      description: "NetCradus XDR correlates security telemetry and behavioral signals to detect threats quickly and accurately.",
      image: "/assets/netxdr-realtime-detections.png",
      url: "app.netcradus.com/xdr-detections",
      accent: "#EC4899",
      capabilities: [
        "Real-time threat detection",
        "Behavioral detection",
        "Multi-source telemetry correlation",
        "IOC detection",
        "Anomaly detection",
        "Suspicious process detection",
        "Command-line analysis",
        "Alert prioritization",
        "Risk-based detection",
        "Custom detection rules",
        "Automated response integration"
      ]
    }
  ];

  // How It Works Steps
  const flowSteps = [
    { number: "01", name: "Endpoints", desc: "Monitors Windows, Linux, macOS, Servers & IoT", icon: Monitor },
    { number: "02", name: "Telemetry Collection", desc: "Real-time process, network & system event streaming", icon: Database },
    { number: "03", name: "Behavior Analysis", desc: "AI/ML baseline scoring & anomaly identification", icon: Cpu },
    { number: "04", name: "Threat Hunting", desc: "MITRE ATT&CK mapping & hypothesis queries", icon: Search },
    { number: "05", name: "Detection & Correlation", desc: "Multi-vector alert grouping & risk prioritization", icon: Radar },
    { number: "06", name: "Investigation", desc: "Full attack path graph & root cause analysis", icon: Eye },
    { number: "07", name: "Response", desc: "Automated host isolation & active containment", icon: Zap }
  ];

  // Key Benefits
  const keyBenefits = [
    {
      title: "Unified Visibility",
      desc: "Gain visibility across endpoints, users, workloads and security telemetry.",
      icon: Eye,
      color: "#FF6B00"
    },
    {
      title: "Proactive Threat Hunting",
      desc: "Discover hidden threats before they become major security incidents.",
      icon: Search,
      color: "#7C3AED"
    },
    {
      title: "Real-Time Detection",
      desc: "Identify malicious activity using behavioral and multi-layer detection.",
      icon: Radar,
      color: "#EC4899"
    },
    {
      title: "Faster Response",
      desc: "Give security teams the context needed to investigate and respond faster.",
      icon: Zap,
      color: "#3B82F6"
    },
    {
      title: "Reduced Risk",
      desc: "Continuously identify suspicious activity and reduce attack exposure.",
      icon: Shield,
      color: "#10B981"
    }
  ];

  return (
    <div className="bg-[#05060A] text-white min-h-screen pt-24 pb-20 relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#EC4899]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-screen-2xl">
        
        {/* 1. Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors no-underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link to="/platform" className="hover:text-[#FF6B00] transition-colors no-underline">Platform</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-[#FF6B00]">NetCradus XDR</span>
        </nav>

        {/* 2. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Hero Text & Key Feature Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.25em]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
              NETCRADUS ENTERPRISE DEFENSE
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
                NetCradus XDR
              </h1>
              <p className="mt-2 text-lg sm:text-2xl font-extrabold text-[#FF6B00]">
                Endpoint + Threat Hunting + Detection
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">
              "AI-powered unified endpoint protection, proactive threat hunting, and real-time threat detection designed to identify, investigate, and respond to cyber threats before they impact your organization."
            </p>

            {/* 3 Hero Highlight Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#FF6B00]/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mb-2">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Unified Protection</h4>
                <p className="text-xs text-gray-400">Protect endpoints across all environments.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7C3AED]/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 text-[#c495ff] flex items-center justify-center mb-2">
                  <Search className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Proactive Hunting</h4>
                <p className="text-xs text-gray-400">Find threats others miss, before impact.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#EC4899]/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#EC4899]/20 text-[#ff8ad8] flex items-center justify-center mb-2">
                  <Radar className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Real-time Detection</h4>
                <p className="text-xs text-gray-400">Detect and respond to threats in real time.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-[#FF6B00] text-white text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:bg-[#ff7b1a] hover:scale-[1.03] transition-all no-underline inline-flex items-center gap-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/platform"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-white/15 hover:border-white/30 transition-all no-underline inline-flex items-center gap-2"
              >
                <span>Explore Platform</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Tech Visual Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-3xl border border-white/15 bg-[#0f0a1c] p-4 sm:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden group">
              {/* Top Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-gray-400 ml-2">app.netcradus.com/netxdr-console</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[11px] font-bold uppercase tracking-wider">
                  SHIELD ACTIVE
                </span>
              </div>

              {/* Central Endpoint Connectivity Visual */}
              <div className="relative rounded-2xl overflow-hidden bg-[#07040d] p-3 border border-white/10 cursor-pointer group/img" onClick={() => setLightboxImage({ src: "/assets/acis-soc-dashboard.png", alt: "NetCradus XDR Console" })}>
                <img
                  src="/assets/acis-soc-dashboard.png"
                  alt="NetCradus XDR Platform Dashboard"
                  className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white bg-black/60 backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4" />
                  <span>Click to view high-res dashboard</span>
                </div>
              </div>

              {/* Endpoint Device Nodes Strip */}
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-4 gap-2 text-center text-xs text-gray-300 font-medium">
                <div className="p-2 rounded-xl bg-white/5 border border-white/8 flex flex-col items-center">
                  <Laptop className="w-4 h-4 text-[#FF6B00] mb-1" />
                  <span className="text-[10px]">Windows</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/8 flex flex-col items-center">
                  <Server className="w-4 h-4 text-[#7C3AED] mb-1" />
                  <span className="text-[10px]">Linux Servers</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/8 flex flex-col items-center">
                  <Layers className="w-4 h-4 text-[#EC4899] mb-1" />
                  <span className="text-[10px]">Cloud VPCs</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/8 flex flex-col items-center">
                  <Smartphone className="w-4 h-4 text-emerald-400 mb-1" />
                  <span className="text-[10px]">Mobile &amp; IoT</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Main Content: 3 Large Feature Sections (Endpoints, Threat Hunting, Detection) */}
        <div className="space-y-20 mb-28">
          {mainSections.map((sec, index) => {
            const isImageLeft = index % 2 === 1;
            return (
              <section
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 bg-[#0f091a]/90 border border-white/12 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span 
                      className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-white"
                      style={{ backgroundColor: `${sec.accent}33`, border: `1px solid ${sec.accent}66` }}
                    >
                      {sec.badge}
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                      {sec.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
                      {sec.description}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                        Key Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sec.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs font-semibold text-gray-200">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: sec.accent }} />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Visual Column */}
                  <div className={`lg:col-span-6 w-full ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
                      {/* Browser Bar */}
                      <div className="h-9 bg-[#171026] px-4 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                        </div>
                        <div className="bg-[#0b0614] px-4 py-0.5 rounded-md border border-white/10 text-[11px] font-mono text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: sec.accent }} />
                          <span>{sec.url}</span>
                        </div>
                        <div className="w-4" />
                      </div>

                      {/* Real Platform Image Screenshot */}
                      <div 
                        className="relative cursor-pointer overflow-hidden p-2 bg-[#07040d] group/img"
                        onClick={() => setLightboxImage({ src: sec.image, alt: sec.title })}
                      >
                        <img
                          src={sec.image}
                          alt={sec.title}
                          className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover/img:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white bg-black/60 backdrop-blur-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>Inspect module screenshot</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

        {/* 4. "How It Works" Section */}
        <section className="mb-28 bg-[#0c0817] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.25em] mb-3">
              END-TO-END TELEMETRY PIPELINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How NetCradus XDR Works
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 font-medium">
              From raw endpoint event streaming to automated response containment.
            </p>
          </div>

          {/* Connected Flow Diagram Grid */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative z-10">
            {flowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  {/* Node Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-[#1a122e] border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.2)] group-hover:scale-110 group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 mb-3 relative z-10">
                    <StepIcon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#FF6B00] tracking-widest mb-1">
                    STEP {step.number}
                  </span>
                  <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                    {step.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    {step.desc}
                  </p>

                  {/* Connector Arrow for Desktop */}
                  {idx < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-7 -right-4 w-8 h-[2px] bg-gradient-to-r from-[#FF6B00] to-transparent z-0" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. "Key Benefits" Section (5 Premium Cards) */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.25em] text-[#ff8ad8] mb-3">
              ENTERPRISE ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Key Benefits of NetCradus XDR
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 font-medium">
              Engineered to reduce alert fatigue and accelerate incident response.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {keyBenefits.map((ben, bIdx) => {
              const BenIcon = ben.icon;
              return (
                <div
                  key={bIdx}
                  className="group relative bg-[#120b22] border border-white/12 rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:-translate-y-2 transition-all duration-300"
                  style={{ borderColor: `${ben.color}44` }}
                >
                  <div>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-md"
                      style={{ backgroundColor: `${ben.color}22`, color: ben.color }}
                    >
                      <BenIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{ben.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-medium">
                      "{ben.desc}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Final CTA Section */}
        <section className="relative bg-gradient-to-br from-[#1b0b2e] via-[#0c0817] to-[#170a1e] border border-[#FF6B00]/30 rounded-3xl p-10 sm:p-16 text-center overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              CONVERGED CYBERSECURITY CORE
            </span>

            <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              One Platform. Complete Protection.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto">
              NetCradus XDR unifies endpoint protection, threat hunting, and real-time detection into one intelligent security platform—giving security teams the visibility and control needed to detect, investigate, and respond to threats faster.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="px-9 py-4 rounded-full bg-[#FF6B00] text-white text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:bg-[#ff7b1a] hover:scale-[1.04] transition-all no-underline inline-flex items-center gap-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/platform"
                className="px-9 py-4 rounded-full bg-white/5 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-white/15 hover:border-white/40 transition-all no-underline inline-flex items-center gap-2"
              >
                <span>Explore Platform</span>
              </Link>
            </div>
          </div>
        </section>

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