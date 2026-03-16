import React from "react";
import { Search, ShieldAlert, Zap, Rocket } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    num: "01",
    label: "Dossier Ingestion",
    title: "Strategic Consultation",
    desc: "A focused briefing to map your risk perimeter, tactical objectives, and infrastructure footprint.",
    icon: <Search size={20} />
  },
  {
    num: "02",
    label: "Reconnaissance",
    title: "Holistic Discovery",
    desc: "Deep integration where our architects map every node and vulnerability in your environment.",
    icon: <ShieldAlert size={20} />
  },
  {
    num: "03",
    label: "Deployment",
    title: "Surgical Implementation",
    desc: "Precision execution deploying ACIS and hardened infrastructure.",
    icon: <Zap size={20} />
  },
  {
    num: "04",
    label: "Ascension",
    title: "Continuous Optimization",
    desc: "24/7 oversight evolving your defense into a self-healing ecosystem.",
    icon: <Rocket size={20} />
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">

      <div className="container">

        <div className="section-header">

          <span className="section-label">
            Operational Protocol
          </span>

          <h2 className="section-title">
            The Path to <span className="gradient-text">Immunity.</span>
          </h2>

          <p className="section-subtitle">
            A high-velocity engagement model designed for rapid time-to-value and surgical precision in defense.
          </p>

        </div>

        <div className="steps-grid">

          {steps.map((step, index) => (
            <div key={index} className="step-card">

              <div className="step-header">
                <div className="step-num">{step.num}</div>
                <div className="step-icon-wrap">{step.icon}</div>
              </div>

              <span className="step-label">{step.label}</span>

              <h3 className="step-title">{step.title}</h3>

              <p className="step-desc">{step.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}