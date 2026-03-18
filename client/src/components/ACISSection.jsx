import React, { useState } from 'react';
import { Target, ShieldCheck, Zap, Activity, Cpu, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AcisOrbit from "./AcisOrbit";
import './ACISSection.css';

const ARCHITECTURE_LAYERS = [
  {
    title: "Layer 1 - SIEM",
    content: "Real-time log normalization using LSTM networks and Isolation Forest algorithms to establish behavioral baselines.",
    icon: Activity
  },
  {
    title: "Layer 2 - SOAR",
    content: "Autonomous threat containment with sub-10 second response orchestration across the dynamic edge nodes.",
    icon: Cpu
  },
  {
    title: "Layer 3 - Red Simulator",
    content: "Continuous, non-disruptive penetration testing via reinforcement learning attack path mapping.",
    icon: ShieldAlert
  }
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
      <div className="container">
        <div className="acis-grid">
          <div className="acis-content reveal">
            <div className="acis-badge mono">
              <span className="pulse-dot"></span>
              Autonomous Response Active
            </div>
            <h2 className="acis-title">
              ACIS — Autonomous Cyber <span>Immune System.</span>
            </h2>            <p className="acis-desc mt-6 mb-8 text-lg">
              ACIS is our revolutionary, proprietary AI-driven cybersecurity platform. Designed to eliminate the lag between threat detection and response, ACIS operates autonomously to identify, isolate, and neutralize cyber threats without requiring manual human intervention.
            </p>
            <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="feature-card glass p-6 rounded-2xl border border-[var(--border-color)]">
                <h4 className="font-bold mb-2 flex items-center gap-2"><ShieldCheck className="text-primary" size={18} /> Sub-second Containment</h4>
                <p className="text-sm opacity-70">Detects and neutralizes threats in real-time, preventing lateral movement before it starts.</p>
              </div>
              <div className="feature-card glass p-6 rounded-2xl border border-[var(--border-color)]">
                <h4 className="font-bold mb-2 flex items-center gap-2"><Zap className="text-primary" size={18} /> AI-Powered UEBA</h4>
                <p className="text-sm opacity-70">Sophisticated User and Entity Behavior Analytics to spot anomalies that traditional tools miss.</p>
              </div>
            </div>

            <div className="acis-pills">
              <span className="pill">Adaptive Learning</span>
              <span className="pill">Real-time Isolation</span>
              <span className="pill">Zero-Trust Ready</span>
              <span className="pill">UK Data Sovereignty</span>
            </div>

            <div className="acis-features">
              <div className="acis-feature">
                <Target className="acis-icon" size={20} />
                <span>Self-Learning AI Algorithms</span>
              </div>
              <div className="acis-feature">
                <ShieldCheck className="acis-icon" size={20} />
                <span>Micro-Segmentation Control</span>
              </div>
              <div className="acis-feature">
                <Zap className="acis-icon" size={20} />
                <span>Instant Threat Neutralization</span>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary inline-block no-underline">Download Technical Whitepaper</Link>
          </div>

          <div className="acis-mockup reveal" style={{ transitionDelay: '0.2s' }}>
            <AcisOrbit />
          </div>
        </div>

        {/* Architecture Section from previous designs */}
        <div className="architecture-interactive reveal mt-24">
          <div className="section-label text-center">// SYSTEM ARCHITECTURE</div>
          <h3 className="section-title text-center">Multi-Layered Intelligence.</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
            <div className="arch-layout m-0 w-full relative z-10">
              <div className="arch-nav">
                {ARCHITECTURE_LAYERS.map((layer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLayer(idx)}
                    className={`arch-tab ${activeLayer === idx ? 'active' : ''}`}
                  >
                    <div className="arch-tab-icon">{<layer.icon size={18} />}</div>
                    <span className="mono">{layer.title}</span>
                  </button>
                ))}
              </div>
              <div className="arch-content glass">
                <h4 className="mono">{ARCHITECTURE_LAYERS[activeLayer].title}</h4>
                <p>{ARCHITECTURE_LAYERS[activeLayer].content}</p>
                <Link to="/services" className="text-btn inline-flex items-center no-underline">Technical Specs <ArrowRight size={14} className="ml-2" /></Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-color)] relative h-[400px]">
              <img src="/generated/secure_shield_concept_1773394778055.png" alt="AI Neural Network Analyzing Data" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-color)] to-transparent mix-blend-overlay opacity-50"></div>
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
