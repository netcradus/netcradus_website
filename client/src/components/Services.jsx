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
        <section id="services" className="py-24 bg-premium-radial relative overflow-hidden transition-colors duration-500">
            <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24">
                <div className="reveal text-center mb-16">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">// OUR CAPABILITIES</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-zinc-900 dark:text-white mb-6">Engineered for <span className="text-accent italic">Resilience.</span></h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
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
                            <div className="tab-info space-y-8">
                                <h3 className="text-3xl md:text-5xl font-display font-black text-zinc-900 dark:text-white tracking-tight">Managed IT <span className="text-accent italic">Operations.</span></h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">Your entire IT infrastructure — expertly managed, always operational. Netcradus MSP delivers a fully outsourced, enterprise-grade technology office.</p>
                                <ul className="space-y-4">
                                    {["24/7 Proactive Monitoring", "Multi-Tier UK & India Helpdesk", "SD-WAN & Network Management"].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-zinc-900 dark:text-white font-bold text-sm tracking-wide">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn-primary px-10 py-4 no-underline inline-block rounded-xl">Request Infrastructure Audit</Link>
                            </div>
                            <div className="tab-visual relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-premium group">
                                <img src="/generated/cyber_server_room_autonomous.png" alt="Managed IT Services Server Room" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute inset-x-8 bottom-8 p-8 bg-white/10 dark:bg-black/20 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-2xl">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase tracking-widest mb-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> System Nominal
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="flex flex-col"><span className="text-[8px] font-bold text-white/50 uppercase tracking-widest mb-1">UPTIME</span><span className="text-lg font-black text-white">99.98%</span></div>
                                        <div className="flex flex-col"><span className="text-[8px] font-bold text-white/50 uppercase tracking-widest mb-1">LATENCY</span><span className="text-lg font-black text-white">12ms</span></div>
                                        <div className="flex flex-col"><span className="text-[8px] font-bold text-white/50 uppercase tracking-widest mb-1">LOAD</span><span className="text-lg font-black text-white">24%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "mssp" && (
                        <div className="cyber-catalog">
                            <div className="cyber-grid">
                                {CYBER_SERVICES.map((service, idx) => (
                                    <div key={idx} className="premium-card p-10 group hover:-translate-y-2 transition-all duration-500">
                                        <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white shadow-lg transition-all">{service.icon}</div>
                                        <h4 className="text-xl font-display font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">{service.title}</h4>
                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.items.map(item => <span key={item} className="text-[9px] font-bold text-accent uppercase tracking-widest px-3 py-1 bg-accent/5 rounded-full border border-accent/10">{item}</span>)}
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
                            <div className="tab-info space-y-8">
                                <h3 className="text-3xl md:text-5xl font-display font-black text-zinc-900 dark:text-white tracking-tight">Cloud & AI <span className="text-accent italic">Integration.</span></h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">Architecting scalable, sovereign cloud deployments and integrating intelligent process automation to drive operational excellence safely.</p>
                                <ul className="space-y-4">
                                    {["AWS / Azure / GCP Architecture", "LLM Integration & Fine-Tuning", "Secure Data Migration"].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-zinc-900 dark:text-white font-bold text-sm tracking-wide">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div className="tab-visual relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-premium group min-h-[400px]">
                                <img src="/generated/cloud_ai_infrastructure_secure.png" alt="Cloud Architecture" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/40 backdrop-blur-[2px]">
                                    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-3xl p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border-2 border-accent border-t-transparent animate-spin"></div>
                                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">Neural_Engine::v2</span>
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
