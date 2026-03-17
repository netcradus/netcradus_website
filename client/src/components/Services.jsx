import React, { useState } from 'react';
import { Server, Shield, Cloud, Code2, Target, FileSearch, Activity, ShieldAlert, CloudCog, MessageSquare, ShieldCheck, Lock, Terminal, GraduationCap, AppWindow, BrainCircuit, Search, Network, Radio, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import './Services.css';

const SERVICES_TABS = [
    { id: "msp", title: "Managed IT", icon: <Server size={20} /> },
    { id: "mssp", title: "Cybersecurity", icon: <Shield size={20} /> },
    { id: "cloud-ai", title: "Cloud & AI", icon: <Cloud size={20} /> },
    { id: "software", title: "Software Dev", icon: <Code2 size={20} /> }
];

const CYBER_SERVICES = [
    { title: "Penetration Testing", desc: "Simulate real-world cyberattacks to identify vulnerabilities.", icon: <Target size={24} />, items: ["Web & Network", "Mobile & API", "Cloud Infra"] },
    { title: "Vulnerability Assessment", desc: "Identify security weaknesses in systems and apps.", icon: <FileSearch size={24} />, items: ["Automated Scan", "Patch Management"] },
    { title: "SOC Services", desc: "24/7 monitoring and threat detection with SIEM.", icon: <Activity size={24} />, items: ["Log Analysis", "Incident Intel"] },
    { title: "Incident Response", desc: "Rapid response to contain damage and investigate.", icon: <ShieldAlert size={24} />, items: ["Digital Forensics", "Breach Analysis"] },
    { title: "Cloud Security Services", desc: "Secure cloud infrastructure across major cloud platforms.", icon: <CloudCog size={24} />, items: ["AWS / Azure / GCP Hardening", "Cloud Pen Testing"] },
    { title: "Security Consulting", desc: "Strategic cybersecurity guidance for organizations.", icon: <MessageSquare size={24} />, items: ["Architecture Design", "Risk Management"] },
    { title: "Compliance & Regulatory", desc: "Help organizations meet industry security standards.", icon: <ShieldCheck size={24} />, items: ["ISO 27001", "GDPR Compliance"] },
    { title: "Managed Security Services", desc: "Outsource cybersecurity monitoring and protection.", icon: <Lock size={24} />, items: ["Managed Firewall", "Endpoint Security"] },
    { title: "Red Team & Simulation", desc: "Advanced attack simulation to test organizational security.", icon: <Terminal size={24} />, items: ["Red Team Exercises", "Phishing Simulation"] },
    { title: "Security Awareness Training", desc: "Educate employees to prevent human-based cyber attacks.", icon: <GraduationCap size={24} />, items: ["Phishing Awareness", "Cyber Hygiene"] },
    { title: "Application Security", desc: "Secure software and applications during development.", icon: <AppWindow size={24} />, items: ["Secure Code Review", "DevSecOps Integration"] },
    { title: "Threat Intelligence", desc: "Monitor and analyze global cyber threats.", icon: <BrainCircuit size={24} />, items: ["Dark Web Monitoring", "Threat Reports"] },
    { title: "Security Audits", desc: "Evaluate organizational cybersecurity posture.", icon: <Search size={24} />, items: ["IT Infrastructure", "Network Security"] },
    { title: "Endpoint & Network Security", desc: "Protect systems and networks against attacks.", icon: <Network size={24} />, items: ["EDR", "Zero Trust Architecture"] },
    { title: "SIEM & Security Automation", desc: "Advanced monitoring and security analytics.", icon: <Radio size={24} />, items: ["SIEM Deployment", "SOAR Integration"] }
];

const Services = () => {
    const [activeTab, setActiveTab] = useState("mssp");

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header reveal text-center">
                    <span className="section-label">// OUR CAPABILITIES</span>
                    <h2 className="section-title">Engineered for Resilience.</h2>
                    <p className="section-desc max-w-2xl mx-auto">
                        A comprehensive ecosystem designed to protect, scale, and accelerate the modern enterprise.
                    </p>
                </div>

                <div className="services-tabs reveal" style={{transitionDelay: '0.2s'}}>
                    {SERVICES_TABS.map((tab) => (
                        <button 
                            key={tab.id} 
                            onClick={() => setActiveTab(tab.id)}
                            className={`service-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        >
                            <span className="tab-icon">{tab.icon}</span>
                            <span className="tab-text">{tab.title}</span>
                        </button>
                    ))}
                </div>

                <div className="service-content-pillar reveal" style={{transitionDelay: '0.4s'}}>
                    {activeTab === "msp" && (
                        <div className="tab-grid staggered">
                            <div className="tab-info">
                                <h3>Managed IT Operations.</h3>
                                <p>Your entire IT infrastructure — expertly managed, always operational. Netcradus MSP delivers a fully outsourced, enterprise-grade technology office.</p>
                                <ul className="feature-list">
                                    <li>24/7 Proactive Monitoring</li>
                                    <li>Multi-Tier UK & India Helpdesk</li>
                                    <li>SD-WAN & Network Management</li>
                                </ul>
                                <Link to="/contact" className="btn btn-primary px-6 py-3 no-underline inline-block">Request Infrastructure Audit</Link>
                            </div>
                            <div className="tab-visual relative rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
                                <img src="/generated/cyber_server_room_autonomous.png" alt="Managed IT Services Server Room" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[var(--bg-color)] to-transparent">
                                    <div className="abstract-card glass !border-none !bg-[var(--surface-color)]/60 backdrop-blur-md">
                                        <div className="status-bar"><span className="dot green"></span> System Nominal</div>
                                        <div className="metrics mono">
                                            <div className="metric"><span>UPTIME</span> <span>99.98%</span></div>
                                            <div className="metric"><span>LATENCY</span> <span>12ms</span></div>
                                            <div className="metric"><span>LOAD</span> <span>24%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "mssp" && (
                        <div className="cyber-catalog">
                            <div className="cyber-grid">
                                {CYBER_SERVICES.map((service, idx) => (
                                    <div key={idx} className="cyber-card glass">
                                        <div className="cyber-icon">{service.icon}</div>
                                        <h4>{service.title}</h4>
                                        <p>{service.desc}</p>
                                        <div className="mini-tags">
                                            {service.items.map(item => <span key={item} className="mini-tag">{item}</span>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-4">
                                <Link to="/contact" className="btn btn-ghost px-6 py-3 no-underline inline-block">View Full Security Dossier</Link>
                            </div>
                        </div>
                    )}

                    {activeTab === "cloud-ai" && (
                        <div className="tab-grid">
                            <div className="tab-info">
                                <h3>Cloud & AI Integration.</h3>
                                <p>Architecting scalable, sovereign cloud deployments and integrating intelligent process automation to drive operational excellence safely.</p>
                                <ul className="feature-list">
                                    <li>AWS / Azure / GCP Architecture</li>
                                    <li>LLM Integration & Fine-Tuning</li>
                                    <li>Secure Data Migration</li>
                                </ul>
                            </div>
                             <div className="tab-visual relative rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
                                <img src="/generated/cloud_ai_infrastructure_secure.png" alt="Cloud Architecture" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-color)]/20">
                                    <div className="ai-node-mockup glass !border-none !bg-[var(--surface-color)]/60 backdrop-blur-md">
                                        <div className="pulse-circle"></div>
                                        <span className="mono">Neural_Engine::v2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "software" && (
                        <div className="tab-grid staggered">
                            <div className="tab-info">
                                <h3>Software Engineering.</h3>
                                <p>Bespoke, security-first enterprise software designed to scale natively with your operations, from legacy modernization to custom CRM solutions.</p>
                                <ul className="feature-list">
                                    <li>Custom Enterprise Applications</li>
                                    <li>Legacy System Modernization</li>
                                    <li>Secure CI/CD Pipelines</li>
                                </ul>
                            </div>
                             <div className="tab-visual relative rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
                                <img src="/generated/secure_shield_concept_1773394778055.png" alt="Secure Software Engineering" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-t from-[var(--bg-color)] to-transparent">
                                    <div className="code-mockup glass mono w-full !bg-[var(--surface-color)]/80 backdrop-blur-md">
                                        <div className="code-line"><span className="keyword">class</span> <span className="entity">SecureNode</span> {'{'}</div>
                                        <div className="code-line" style={{paddingLeft: '1rem'}}><span className="keyword">func</span> <span className="entity">init</span>() {'{'}</div>
                                        <div className="code-line" style={{paddingLeft: '2rem'}}>this.encryption = <span className="string">"AES-256"</span>;</div>
                                        <div className="code-line" style={{paddingLeft: '1rem'}}>{'}'}</div>
                                        <div className="code-line">{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
