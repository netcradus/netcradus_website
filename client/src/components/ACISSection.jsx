import React, { useState } from 'react';
import { Target, ShieldCheck, Zap, Activity, Cpu, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DottedGlobe from "./DottedGlobe";
import './ACISSection.css';

const ARCHITECTURE_LAYERS = [
  {
    title: "Layer 1 — AI-Powered SIEM",
    content:
      "A real-time intelligent log and event analysis engine that continuously ingests telemetry across endpoints, networks, and cloud systems. Using advanced behavioral analytics, anomaly detection, and correlation models, it establishes dynamic baselines and detects threats with high precision and minimal false positives.",
    icon: Activity,
  },
  {
    title: "Layer 2 — Autonomous SOAR & Response Engine",
    content:
      "An autonomous orchestration layer that executes real-time threat response without human intervention. It prioritizes incidents, triggers playbooks, isolates compromised systems, and ensures sub-second containment across distributed infrastructure environments.",
    icon: Cpu,
  },
  {
    title: "Layer 3 — AI Red Team Simulator",
    content:
      "A continuous adversarial simulation engine powered by reinforcement learning that mimics real-world attack vectors. It proactively identifies vulnerabilities, stress-tests defenses, and strengthens system resilience through intelligent attack path modeling.",
    icon: ShieldAlert,
  },
  {
    title: "Layer 4 — Self-Healing & Deception Engine",
    content:
      "A dynamic defense layer that automatically isolates compromised nodes, deploys deception traps, and rebuilds secure states. It misleads attackers while ensuring system continuity through automated remediation and adaptive recovery mechanisms.",
    icon: ShieldCheck,
  },
  {
    title: "Layer 5 — Threat Intelligence Swarm",
    content:
      "A distributed network of AI agents that continuously share and learn from global threat intelligence. This layer enables predictive defense by correlating emerging attack patterns and adapting security posture across the entire ecosystem.",
    icon: Target,
  },
];

const ACISSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const phases = [
    { step: "Phase 1", title: "Deep Environmental Learning", desc: "AI maps normal network behavior and establishes a baseline." },
    { step: "Phase 2", title: "Continuous Surveillance", desc: "Real-time monitoring for anomalies and suspicious activity patterns." },
    { step: "Phase 3", title: "Threat Classification", desc: "Machine learning identifies attack vectors and risk levels." },
    { step: "Phase 4", title: "Autonomous Response", desc: "Instant surgical neutralization of threats at the network edge." },
    { step: "Phase 5", title: "Immunity & Learning", desc: "System updates global threat intelligence and adapts for future defense." },
  ];

  return (
    <section id="acis" className="acis-section">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="acis-grid">
          <div className="acis-content reveal">
            <div className="acis-badge mono">
              <span className="pulse-dot"></span>
              Autonomous Response Active
            </div>
            <h2 className="acis-title">
              ACIS &mdash; Autonomous Cyber <span className="text-accent italic">Immune System.</span>
            </h2>
            <p className="acis-desc mb-12 max-w-xl">
              ACIS is our revolutionary, proprietary AI-driven cybersecurity platform. Designed to eliminate the lag between threat detection and response, ACIS operates autonomously to identify, isolate, and neutralize cyber threats without requiring manual human intervention.
            </p>
            <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="premium-card p-8 border-l-4 border-l-accent">
                <h4 className="font-bold text-text-primary mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-accent" size={20} /> 
                  Sub-second Containment
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">Detects and neutralizes threats in real-time, preventing lateral movement before it starts.</p>
              </div>
              <div className="premium-card p-8 border-l-4 border-l-accent">
                <h4 className="font-bold text-text-primary mb-3 flex items-center gap-2">
                  <Zap className="text-accent" size={20} /> 
                  AI-Powered UEBA
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">Sophisticated User and Entity Behavior Analytics to spot anomalies that traditional tools miss.</p>
              </div>
            </div>

            <div className="acis-pills flex flex-wrap gap-2 mb-8">
              <span className="pill">Adaptive Learning</span>
              <span className="pill">Real-time Isolation</span>
              <span className="pill">Zero-Trust Ready</span>
              <span className="pill">UK Data Sovereignty</span>
            </div>

            <div className="acis-features space-y-5 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-bold tracking-widest uppercase text-text-secondary">Self-Learning AI Algorithms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-bold tracking-widest uppercase text-text-secondary">Micro-Segmentation Control</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-bold tracking-widest uppercase text-text-secondary">Instant Threat Neutralization</span>
              </div>
            </div>

<a
  href="https://acis.netcradus.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary acis-btn inline-flex items-center gap-2 no-underline px-4 py-2"
>
  Explore ACIS
  <ArrowRight size={18} className="arrow-icon" />
</a>         </div>

          <div className="acis-mockup reveal flex justify-center items-center overflow-visible" style={{ transitionDelay: '0.2s' }}>
            <DottedGlobe />
          </div>
        </div>

        {/* Architecture Section from previous designs */}
        <div className="architecture-interactive reveal mt-24">
          <div className="section-label text-center">// SYSTEM ARCHITECTURE</div>
          <h3 className="section-title text-center">Multi-Layered Intelligence.</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
            <div className="arch-layout m-0 w-full relative z-10">
              <div className="arch-nav flex flex-col gap-3">
                {ARCHITECTURE_LAYERS.map((layer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLayer(idx)}
                    className={`arch-tab group flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 backdrop-blur-md
${
  activeLayer === idx
    ? "bg-gradient-to-r from-accent/20 to-transparent border-accent shadow-[0_0_25px_rgba(232,64,10,0.2)] scale-[1.03]"
    : "bg-surface border-border hover:border-accent/40 hover:scale-[1.02]"
}`}
                  >
         <div className={`p-3 rounded-xl transition-all duration-500 
${activeLayer === idx 
  ? 'bg-accent text-white shadow-[0_0_15px_rgba(232,64,10,0.6)]' 
  : 'bg-surface-raised group-hover:bg-accent/10'}`}>
  <layer.icon size={20} />
</div>

<div className="flex flex-col items-start">
  <span className="text-[10px] text-accent font-bold tracking-widest">
    3.{idx + 1}
  </span>
  <span className={`text-xs font-bold tracking-[0.15em] uppercase 
  ${activeLayer === idx ? 'text-text-primary' : 'text-text-secondary'}`}>
    {layer.title}
  </span>
</div>
                  </button>
                ))}
              </div>
              <div className="premium-card p-10 mt-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
                <h4 className="font-display font-black text-2xl text-text-primary mb-6 uppercase tracking-wider">{ARCHITECTURE_LAYERS[activeLayer].title}</h4>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">{ARCHITECTURE_LAYERS[activeLayer].content}</p>
                <Link to="/services" className="btn-primary px-8 py-3 text-xs inline-flex items-center gap-3 no-underline">
                  View Specifications 
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
<div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative">       
 <img
  src="/img/acis.jpg"
  alt="ACIS Architecture"
  className="w-full h-full object-cover object-center"
/>
            </div>
          </div>
        </div>

        <div className="acis-timeline reveal">
          <div className="section-label text-center">// DEVELOPMENT PHASES</div>
          <h3 className="timeline-section-title text-center">Implementation Journey</h3>
          <div className="timeline-grid">
            {phases.map((phase, idx) => (
              <div key={idx} className="timeline-item">
                <span className="phase-label mono">{phase.step}</span>
                <h4 className="phase-title">{phase.title}</h4>
                <p className="phase-desc">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ACISSection;
