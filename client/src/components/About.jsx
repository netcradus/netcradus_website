import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Star, MapPin, Server } from 'lucide-react';
import './About.css';

const VALUES = [
    { name: "Integrity", desc: "Foundation of every engagement with complete transparency.", icon: <ShieldCheck size={20} /> },
    { name: "Innovation", desc: "Perpetually advancing and shaping the future of defense.", icon: <Zap size={20} /> },
    { name: "Excellence", desc: "Uncompromising standards consistently exceeding expectations.", icon: <Star size={20} /> },
];

import cehLogo from '../assets/certs/CEHPRACTICAL.png';
import comptiaLogo from '../assets/certs/Comptia.png';
import oscpLogo from '../assets/certs/OSCP-removebg.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-narrative reveal">
            <span className="section-label">// THE MANDATE</span>
            <h2 className="section-title">Built on Expertise. Driven by Results.</h2>
            <div className="narrative-text">
                <p>Founded by technology practitioners with deep operational experience, Netcradus emerged from the realization that modern enterprises are often over-leveraged and under-protected.</p>
                <p>Today, we serve as the strategic technical authority for ambitious organizations globally, building the proprietary AI infrastructure that redefines digital defense.</p>
            </div>

            <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl mb-12">
                <h4 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-3">
                    <ShieldCheck size={20} className="text-primary" />
                    Elite Engineering.
                </h4>
                <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                    <img src={cehLogo} alt="CEH" className="h-10 w-auto" />
                    <img src={comptiaLogo} alt="CompTIA" className="h-10 w-auto" />
                    <img src={oscpLogo} alt="OSCP" className="h-10 w-auto" />
                </div>
            </div>
            
            <div className="mission-vision-grid">
                <div className="vision-card">
                    <Target className="card-icon" />
                    <h3>The Mission</h3>
                    <p>To empower organisations with intelligent, secure, and future-proof technology solutions — enabling growth without boundaries.</p>
                </div>
                <div className="vision-card">
                    <Eye className="card-icon" />
                    <h3>The Vision</h3>
                    <p>To pioneer the next generation of autonomous defense through ACIS, making world-class protection the baseline for every enterprise.</p>
                </div>
            </div>
          </div>

          <div className="about-values-sidebar reveal" style={{transitionDelay: '0.2s'}}>
            <h3 className="sidebar-title">Core Values</h3>
            <div className="values-list">
                {VALUES.map((val, idx) => (
                    <div key={idx} className="value-item">
                        <div className="value-icon">{val.icon}</div>
                        <div className="value-info">
                            <h4>{val.name}</h4>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="location-nodes mt-12">
                <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                    <img src="/generated/corporate_office_cyber_1773394698579.png" alt="Netcradus Global Operations" className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
                </div>
                <h3 className="sidebar-title">Global Nodes</h3>
                <div className="node-item">
                    <MapPin className="node-icon" size={16} />
                    <div>
                        <span className="node-name">UK HEADQUARTERS</span>
                        <span className="node-loc">Leicester, England</span>
                    </div>
                </div>
                <div className="node-item">
                    <Server className="node-icon" size={16} />
                    <div>
                        <span className="node-name">INDIA TECHNOLOGY NODE</span>
                        <span className="node-loc">Greater Noida West</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
