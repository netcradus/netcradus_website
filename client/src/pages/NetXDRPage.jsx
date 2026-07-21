import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePageMeta } from '../hooks/usePageMeta';
import { 
  Shield, 
  Radar, 
  Users, 
  Mail, 
  Cpu, 
  Activity, 
  Database, 
  Compass, 
  Zap, 
  TrendingUp, 
  Layers, 
  Search, 
  RefreshCw, 
  Building, 
  Heart, 
  GraduationCap, 
  Check, 
  ArrowRight,
  Eye,
  AlertTriangle,
  Monitor
} from 'lucide-react';
import './NetXDRPage.css';

// SECTION 1 - Hero Bottom Cards
const BOTTOM_CARDS = [
  { title: "AI Powered", desc: "Advanced AI engine learns, detects and stops threats faster.", icon: Cpu },
  { title: "Detect", desc: "Detect hidden threats across every layer of your environment.", icon: Shield },
  { title: "Investigate", desc: "Deep insights and context for faster investigations.", icon: Search },
  { title: "Respond", desc: "Automate and orchestrate responses in real-time to neutralize threats.", icon: Zap },
  { title: "Recover", desc: "Minimize impact and restore operations with confidence.", icon: RefreshCw },
  { title: "Optimize", desc: "Continuously improve security posture with smart analytics.", icon: TrendingUp }
];

// SECTION 2 - Industry logos strip
const INDUSTRIES = [
  { name: "Enterprise", icon: Building },
  { name: "Healthcare", icon: Heart },
  { name: "Banking & Finance", icon: Compass },
  { name: "Manufacturing", icon: Cpu },
  { name: "Government", icon: Shield },
  { name: "Education", icon: GraduationCap },
  { name: "IT & SaaS", icon: Layers }
];

// SECTION 3 - Sphere indicators
const SPHERE_NODES = [
  { name: "ENDPOINTS", icon: Monitor, pos: "node-pos-1" },
  { name: "NETWORK", icon: Activity, pos: "node-pos-2" },
  { name: "EMAIL", icon: Mail, pos: "node-pos-3" },
  { name: "CLOUD", icon: Layers, pos: "node-pos-4" },
  { name: "IDENTITY", icon: Users, pos: "node-pos-5" },
  { name: "SERVERS", icon: Database, pos: "node-pos-6" }
];

// SECTION 4 - Capabilities
const CAPABILITIES = [
  { title: "AI Threat Detection", desc: "Identify advanced threats before they cause real damage.", icon: Cpu },
  { title: "Real-Time Correlation", desc: "Correlate telemetry across endpoints, network, cloud and identity.", icon: Compass },
  { title: "Automated Response", desc: "Automatically contain threats and stop attacks in real-time.", icon: Zap },
  { title: "Threat Hunting", desc: "Proactively hunt threats with advanced search and analytics.", icon: Search },
  { title: "Attack Visualization", desc: "Visualize attack chains and understand adversary behavior.", icon: Eye },
  { title: "Compliance Reports", desc: "Generate compliance reports in minutes for audits.", icon: Shield },
  { title: "Multi-Tenant", desc: "Manage multiple environments seamlessly.", icon: Users },
  { title: "MITRE ATT&CK", desc: "Map and understand attacker tactics and techniques.", icon: Layers }
];

// SECTION 5 - Dashboard Recent Incidents
const INCIDENTS_FEED = [
  { title: "Ransomware Detected", time: "2min ago", level: "Critical" },
  { title: "Suspicious Login", time: "8min ago", level: "High" },
  { title: "Network Blocked", time: "15min ago", level: "Medium" },
  { title: "Data Exfiltration Attempt", time: "22min ago", level: "Critical" }
];

// SECTION 6 - Integrations
const INTEGRATIONS = [
  { name: "Microsoft 365", icon: Cpu },
  { name: "AWS", icon: Database },
  { name: "Azure", icon: Shield },
  { name: "Google Cloud", icon: Layers },
  { name: "Active Directory", icon: Users },
  { name: "VMware", icon: Cpu },
  { name: "Windows", icon: Monitor },
  { name: "Linux", icon: Layers },
  { name: "Sophos", icon: Shield },
  { name: "Palo Alto", icon: Compass },
  { name: "Fortinet", icon: Radar },
  { name: "CrowdStrike", icon: Eye },
  { name: "SentinelOne", icon: Zap },
  { name: "Syslog", icon: Database },
  { name: "REST API", icon: Cpu },
  { name: "+ More", icon: Compass }
];

const NetXDRPage = () => {
  usePageMeta(
    'Cyrix XDR | Extended Detection & Response Security Platform | Netcradus',
    'Cyrix XDR unifies telemetry data across endpoints, network nodes, and cloud workloads to provide automated security correlation, response, and risk prevention.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="xdr-wrapper">
      {/* SECTION 1 — HERO */}
      <section className="xdr-hero">
        <div className="xdr-container">
          <div className="xdr-hero-grid">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="xdr-hero-kicker">
                CYRIX <span>XDR</span>
              </h1>
              <p className="xdr-hero-desc">
                Unified. Intelligent. Resilient.
              </p>
              <div>
                <a href="#capabilities" className="btn-xdr-primary">
                  Explore Platform
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right Indicators Column linked to DNA Helix Background image */}
            <div className="hero-indicators-col">
              <div className="hero-indicator-badge">
                <div className="hero-indicator-icon"><Monitor size={16} /></div>
                <span className="hero-indicator-label">ENDPOINTS</span>
              </div>
              <div className="hero-indicator-badge">
                <div className="hero-indicator-icon"><Activity size={16} /></div>
                <span className="hero-indicator-label">NETWORK</span>
              </div>
              <div className="hero-indicator-badge">
                <div className="hero-indicator-icon"><Layers size={16} /></div>
                <span className="hero-indicator-label">CLOUD</span>
              </div>
              <div className="hero-indicator-badge">
                <div className="hero-indicator-icon"><Users size={16} /></div>
                <span className="hero-indicator-label">IDENTITY</span>
              </div>
              <div className="hero-indicator-badge">
                <div className="hero-indicator-icon"><Mail size={16} /></div>
                <span className="hero-indicator-label">EMAIL</span>
              </div>
              <div className="hero-indicator-badge">
                <div className="hero-indicator-icon"><Database size={16} /></div>
                <span className="hero-indicator-label">SERVERS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 BOTTOM CARDS */}
      <section className="xdr-hero-bottom">
        <div className="xdr-container">
          <div className="hero-bottom-grid">
            {BOTTOM_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="hero-bottom-card">
                  <Icon className="bottom-card-icon" size={24} />
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUSTED BY */}
      <section className="xdr-trusted-strip">
        <div className="xdr-container">
          <h5 className="trusted-strip-header">Trusted By Organizations Worldwide</h5>
          <div className="trusted-strip-logos">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.name} className="trusted-strip-item">
                  <Icon size={18} style={{ color: '#ff6a00' }} />
                  <span>{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY CYRIX XDR? */}
      <section className="xdr-section">
        <div className="xdr-container">
          <div className="why-xdr-grid">
            {/* Left Content */}
            <div>
              <h2 className="why-xdr-title">
                Why <span>CYRIX XDR?</span>
              </h2>
              <p className="why-xdr-desc">
                Cyrix XDR unifies telemetry data from across your enterprise network to deliver complete visual context, immediate incident correlation, and smart containment actions.
              </p>
              
              <div className="why-xdr-checklist">
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Break down data silos across endpoint logs</span>
                </div>
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Correlate attack events across multiple security layers</span>
                </div>
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Reduce alert fatigue with automated prioritization engines</span>
                </div>
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Automate containment responses with high confidence</span>
                </div>
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Strengthen compliance auditing and infrastructure posture</span>
                </div>
              </div>
            </div>

            {/* Right Sphere DNA visual */}
            <div className="why-xdr-sphere-pod">
              <div className="sphere-podium">
                <div className="sphere-core-dna">
                  <Radar size={140} strokeWidth={1} />
                </div>
              </div>

              {/* Sphere surrounding nodes */}
              {SPHERE_NODES.map((node) => {
                const Icon = node.icon;
                return (
                  <div key={node.name} className={`sphere-node-indicator ${node.pos}`}>
                    <Icon size={14} className="text-[#3b82f6]" />
                    <span>{node.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — POWERFUL CAPABILITIES */}
      <section className="xdr-section xdr-capabilities" id="capabilities">
        <div className="xdr-container">
          <div className="xdr-section-header">
            <h2 className="xdr-section-title" style={{ color: 'var(--xdr-text-dark)' }}>
              Powerful <span style={{ color: 'var(--xdr-accent)', WebkitTextFillColor: 'initial', background: 'none' }}>Capabilities</span>
            </h2>
            <p className="xdr-section-subtitle" style={{ color: 'var(--xdr-muted-dark)' }}>
              Everything your SOC team needs to detect, investigate, and respond — in one platform.
            </p>
          </div>

          <div className="xdr-capabilities-grid">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="capability-card">
                  <div className="capability-card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMPLETE VISIBILITY DASHBOARD */}
      <section className="xdr-section">
        <div className="xdr-container">
          <div className="visibility-grid">
            {/* Left Content */}
            <div>
              <h2 className="why-xdr-title">
                One Platform.<br />
                <span>Complete Visibility.</span>
              </h2>
              <p className="why-xdr-desc">
                See every threat. Understand every risk. Respond to active attacks with immediate speed and precision.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <a href="#contact" className="btn-xdr-primary">
                  View Live Dashboard
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Threat Dashboard Mockup */}
            <div className="flex justify-center items-center">
              <img 
                src="/img/netxdr dashboard.png" 
                alt="Cyrix XDR Security Dashboard" 
                className="w-full h-auto object-contain rounded-3xl"
                style={{ 
                  filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.55))',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              />
            </div>
          </div>
        </div>
      </section>



      {/* STAY AHEAD FINAL CTA */}
      <section className="xdr-section xdr-final-cta">
        <div className="xdr-container">
          <div className="xdr-cta-card">
            <h2>Stay Ahead of Every Threat</h2>
            <p>
              AI-powered Extended Detection & Response that learns and evolves with every attack pattern.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NetXDRPage;