import React from "react";

const phases = [
  {
    title: "Phase 1",
    subtitle: "Deep Environmental Learning",
    desc: `In this foundational phase, the system performs deep analysis of your entire digital ecosystem to understand what “normal” looks like. It continuously observes network traffic, user behavior, device communication, and application interactions.

Using advanced behavioral analytics and unsupervised machine learning, it builds a dynamic baseline model that evolves with your organization. This includes identifying usage trends, peak activity windows, and typical access patterns.

This phase ensures that the system develops a precise understanding of normal operations, enabling highly accurate anomaly detection in later stages.`,
    points: [
      "Behavioral fingerprinting of users and devices",
      "Network traffic pattern analysis",
      "Dynamic baseline modeling",
      "Adaptive learning as infrastructure grows",
    ],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    title: "Phase 2",
    subtitle: "Continuous Surveillance",
    desc: `Once the baseline is established, the system transitions into continuous real-time monitoring mode. Every interaction across the network is analyzed, including login attempts, data transfers, API calls, and internal communications.

Unlike traditional rule-based systems, this AI-driven surveillance is context-aware and adaptive. It detects even subtle deviations from normal behavior that may indicate potential threats.

The system continuously learns and refines its monitoring thresholds to minimize false positives while ensuring no suspicious activity goes unnoticed.`,
    points: [
      "24/7 real-time monitoring of all activities",
      "Detection of abnormal behavior patterns",
      "Context-aware anomaly detection",
      "Adaptive thresholds to reduce false alerts",
    ],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Phase 3",
    subtitle: "Threat Classification",
    desc: `Not every anomaly is a threat, and this phase ensures accurate identification and prioritization. The system applies machine learning models and threat intelligence to classify detected anomalies into meaningful threat categories.

It identifies attack vectors, assigns severity levels, and evaluates potential impact based on asset criticality and exploit likelihood.

By filtering out noise and focusing only on genuine threats, this phase helps organizations avoid alert fatigue and respond efficiently to high-risk incidents.`,
    points: [
      "AI-based threat identification and categorization",
      "Attack vector analysis and mapping",
      "Risk scoring based on impact and likelihood",
      "Reduction of false positives and alert fatigue",
    ],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Phase 4",
    subtitle: "Autonomous Response",
    desc: `In this phase, the system takes immediate action without waiting for human intervention. Once a threat is confirmed, AI-driven automation executes precise responses to neutralize it instantly.

Actions may include isolating compromised devices, blocking malicious IPs, terminating suspicious sessions, or revoking access credentials.

Operating at the network edge, the system ensures threats are contained before they can spread, significantly reducing damage and response time from hours to milliseconds.`,
    points: [
      "Automatic threat containment and neutralization",
      "Isolation of compromised systems",
      "Blocking malicious traffic in real-time",
      "Edge-level response for faster protection",
    ],
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
  {
    title: "Phase 5",
    subtitle: "Immunity & Learning",
    desc: `The final phase transforms the system into a continuously evolving defense mechanism. Every detected threat contributes to improving the system’s intelligence.

The AI retrains itself using new data, updates threat models, and strengthens defenses against similar future attacks.

This creates a self-learning cybersecurity ecosystem that adapts to emerging threats, evolving user behavior, and global attack patterns — effectively functioning like an immune system for your infrastructure.`,
    points: [
      "Continuous learning from past incidents",
      "Real-time threat intelligence updates",
      "Adaptive defense against evolving threats",
      "Self-healing and strengthening architecture",
    ],
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
  },
];

export default function PhasePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20 px-4 sm:px-6 lg:px-16">
      
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          AI Defense Lifecycle
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          A fully autonomous cybersecurity architecture designed to learn, detect, respond, and evolve — ensuring complete protection across every layer of your infrastructure.
        </p>
      </div>

      {/* Phases */}
      <div className="space-y-24 max-w-6xl mx-auto">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 group">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={`${phase.img}?auto=format&fit=crop&w=900&q=80`}
                  alt={phase.subtitle}
                  className="w-full h-[260px] md:h-[360px] object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <span className="text-sm uppercase tracking-widest text-orange-500">
                {phase.title}
              </span>

              <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
                {phase.subtitle}
              </h2>

              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {phase.desc}
              </p>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-2">
                {phase.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="w-2 h-2 mt-2 rounded-full bg-orange-500"></span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Decorative line */}
              <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}