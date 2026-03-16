import React from 'react';
import { Landmark, HeartPulse, Scale, ShoppingBag, Factory, Rocket } from 'lucide-react';
import './Industries.css';

const industries = [
  { name: "Financial Services", icon: <Landmark size={24} />, desc: "Securing high-frequency trading and fintech infrastructure." },
  { name: "Healthcare", icon: <HeartPulse size={24} />, desc: "Protecting sensitive patient data and medical IoT devices." },
  { name: "Legal & Professional", icon: <Scale size={24} />, desc: "Ensuring attorney-client privilege through zero-trust architectures." },
  { name: "Retail & E-Commerce", icon: <ShoppingBag size={24} />, desc: "Defending global supply chains and consumer transaction data." },
  { name: "Manufacturing", icon: <Factory size={24} />, desc: "Protecting OT/ICS environments from targeted industrial sabotage." },
  { name: "SMEs & Startups", icon: <Rocket size={24} />, desc: "Enterprise-grade security scaled for rapid-growth organizations." }
];

const Industries = () => {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// SECTOR EXPERTISE</span>
          <h2 className="section-title">Industries We <span className="gradient-text">Empower.</span></h2>
          <p className="section-subtitle">
            We don't believe in generic security. Our solutions are engineered for the specific regulatory and operational demands of your sector.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((ind, idx) => (
            <div key={idx} className="industry-card reveal" style={{ transitionDelay: `${idx * 0.05}s` }}>
              <div className="industry-icon">{ind.icon}</div>
              <h3 className="industry-name">{ind.name}</h3>
              <p className="industry-desc">{ind.desc}</p>
              <div className="industry-hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
