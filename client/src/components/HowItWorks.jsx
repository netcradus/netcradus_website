import React from 'react';
import { Search, ShieldAlert, Zap, Rocket } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    num: "01",
    label: "Dossier Ingestion",
    title: "Strategic Consultation",
    desc: "A focused briefing to map your risk perimeter, tactical objectives, and hardware footprint.",
    icon: <Search size={24} />
  },
  {
    num: "02",
    label: "Reconnaissance",
    title: "Holistic Discovery",
    desc: "Deep integration where our architects map every node and vulnerability in your environment.",
    icon: <ShieldAlert size={24} />
  },
  {
    num: "03",
    label: "Deployment",
    title: "Surgical Implementation",
    desc: "Precision execution of the security blueprint, deploying ACIS and hardened infrastructure.",
    icon: <Zap size={24} />
  },
  {
    num: "04",
    label: "Ascension",
    title: "Continuous Optimization",
    desc: "24/7 operative oversight evolving your defense into a self-healing, autonomous ecosystem.",
    icon: <Rocket size={24} />
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// OPERATIONAL PROTOCOL</span>
          <h2 className="section-title">The Path to <span className="gradient-text">Immunity.</span></h2>
          <p className="section-subtitle">
            A high-velocity engagement model designed for rapid time-to-value and surgical precision in defense.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative h-64 md:h-80 lg:h-96 reveal">
            <img src="/generated/hacker_code_screen_1773394510636.png" alt="Cybersecurity Threat Monitoring" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-color)]"></div>
        </div>

        <div className="steps-container">
          <div className="steps-progress-line"></div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="step-header">
                  <div className="step-num mono">{step.num}</div>
                  <div className="step-icon-wrap">{step.icon}</div>
                </div>
                <div className="step-content">
                  <span className="step-label mono">{step.label}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
