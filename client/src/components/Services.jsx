import React, { useState } from 'react';
import { Server, Shield, Cloud, Code2, Target, FileSearch, Activity, ShieldAlert, CloudCog, MessageSquare, ShieldCheck, Lock, Terminal, GraduationCap, AppWindow, BrainCircuit, Search, Network, Radio, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './Services.css';

const SERVICES_TABS = [
    { id: "ai-data", title: "AI & Data", icon: <BrainCircuit size={20} /> },
    { id: "cloud", title: "Cloud Solution", icon: <Cloud size={20} /> },
    { id: "cognitive", title: "Cognitive Ops", icon: <Activity size={20} /> },
    { id: "it", title: "Managed IT", icon: <Server size={20} /> },
    { id: "cybersecurity", title: "Cybersecurity", icon: <Shield size={20} /> },
    { id: "enterprise", title: "Enterprise Solution", icon: <AppWindow size={20} /> },
    { id: "network", title: "Network Services", icon: <Network size={20} /> },
    { id: "software", title: "Software Engineering", icon: <Code2 size={20} /> }

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

    const location = useLocation();
    const [activeTab, setActiveTab] = useState("ai-data");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get("tab");

        if (tab) {
            setActiveTab(tab);

            setTimeout(() => {
                document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth"
                });
            }, 100);
        }
    }, [location.search]);

    return (
        <section id="services" className="py-24 bg-premium-radial relative overflow-hidden transition-colors duration-500">
            <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                <div className="reveal text-center mb-16">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent font-display uppercase mb-6 block">// OUR CAPABILITIES</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-text-primary mb-6">Engineered for <span className="text-accent italic">Resilience.</span></h2>
                    <p className="text-text-secondary text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
                        A comprehensive ecosystem designed to protect, scale, and accelerate the modern enterprise.
                    </p>
                </div>

                <div className="services-tabs reveal" style={{ transitionDelay: '0.2s' }}>
                    {SERVICES_TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                window.history.replaceState(null, "", `?tab=${tab.id}`);
                            }}
                            className={`service-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        >
                            <span className="tab-icon">{tab.icon}</span>
                            <span className="tab-text">{tab.title}</span>
                        </button>
                    ))}
                </div>

                <div className="service-content-pillar reveal" style={{ transitionDelay: '0.4s' }}>

                    {activeTab === "ai-data" && (
                        <div className="tab-grid">
                            <div className="tab-info space-y-8">
                                <h3 className="text-3xl md:text-5xl font-display font-black">
                                    Artificial Intelligence & <span className="text-accent italic">Data Analytics</span>
                                </h3>
                                <p className="text-text-secondary text-lg">
                                    Unlock insights, automation, and predictive intelligence using advanced AI models and data pipelines.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Machine Learning Models",
                                        "Predictive Analytics",
                                        "Business Intelligence Dashboards",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "cloud" && (
                        <div className="tab-grid">
                            <div className="tab-info space-y-8">
                                <h3 className="text-3xl md:text-5xl font-display font-black">
                                    Cloud <span className="text-accent italic">Solutions</span>
                                </h3>
                                <p className="text-text-secondary text-lg">
                                    Scalable, secure cloud architecture for modern businesses.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "AWS / Azure / GCP Deployment",
                                        "Cloud Migration",
                                        "DevOps & CI/CD Pipelines",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "cognitive" && (
                        <div className="tab-grid">
                            <div className="tab-info space-y-8">
                                <h3 className="text-3xl md:text-5xl font-display font-black">
                                    Cognitive Business <span className="text-accent italic">Operations</span>
                                </h3>
                                <p className="text-text-secondary text-lg">
                                    Automate operations using AI-driven workflows and intelligent systems.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Process Automation",
                                        "AI Chatbots & Assistants",
                                        "Operational Intelligence",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "it" && (
                        <div className="tab-grid">
                            <div className="tab-info space-y-8">
                                <h3 className="text-3xl md:text-5xl font-display font-black">
                                    IT <span className="text-accent italic">Consulting</span>
                                </h3>
                                <p className="text-text-secondary text-lg">
                                    Strategic technology consulting to scale your business infrastructure.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "IT Strategy Planning",
                                        "Digital Transformation",
                                        "Infrastructure Optimization",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}


                    {activeTab === "cybersecurity" && (
                        <div className="cyber-catalog">
                            <div className="cyber-grid">
                                <h3 className="text-3xl md:text-5xl font-display font-black mb-5">
                                    Cyber<span className="text-accent italic">Security</span>
                                </h3>
                                {CYBER_SERVICES.map((service, idx) => (
                                    <div key={idx} className="premium-card p-10 group hover:-translate-y-2 transition-all duration-500 bg-surface border-border">
                                        <div className="w-14 h-14 rounded-2xl bg-surface-raised flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white shadow-lg transition-all">{service.icon}</div>
                                        <h4 className="text-xl font-display font-black text-text-primary mb-4 uppercase tracking-wider">{service.title}</h4>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-6">{service.desc}</p>
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
                    {activeTab === "enterprise" && (
                        <div className="tab-grid">
                            <div className="tab-info space-y-8">
                                <h3 className="text-3xl md:text-5xl font-display font-black">
                                    Enterprise <span className="text-accent italic">Solutions</span>
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "ERP & CRM Systems",
                                        "Business Process Integration",
                                        "Enterprise Automation",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "network" && (
                        <div className="tab-grid">
                            <div className="tab-info space-y-8">
                                <h3 className="text-3xl md:text-5xl font-display font-black">
                                    Network <span className="text-accent italic">Services</span>
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Network Design & Setup",
                                        "Firewall & Security",
                                        "Monitoring & Optimization",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "software" && (
                        <div className="tab-grid staggered">
                            <div className="tab-info">
                                <h3 className="text-3xl md:text-5xl font-display font-black text-text-primary tracking-tight">Software <span className="text-accent italic">Engineering.</span></h3>
                                <p className="text-text-secondary text-lg leading-relaxed">Bespoke, security-first enterprise software designed to scale natively with your operations, from legacy modernization to custom CRM solutions.</p>
                                <ul className="space-y-4 mb-8">
                                    {["Custom Enterprise Applications", "Legacy System Modernization", "Secure CI/CD Pipelines"].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-text-primary font-bold text-sm tracking-wide">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="tab-visual relative rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
                                <img src="/generated/secure_shield_concept_1773394778055.png" alt="Secure Software Engineering" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-t from-[var(--bg-color)] to-transparent">
                                    <div className="code-mockup glass mono w-full !bg-[var(--surface-color)]/80 backdrop-blur-md">
                                        <div className="code-line"><span className="keyword">class</span> <span className="entity">SecureNode</span> {'{'}</div>
                                        <div className="code-line" style={{ paddingLeft: '1rem' }}><span className="keyword">func</span> <span className="entity">init</span>() {'{'}</div>
                                        <div className="code-line" style={{ paddingLeft: '2rem' }}>this.encryption = <span className="string">"AES-256"</span>;</div>
                                        <div className="code-line" style={{ paddingLeft: '1rem' }}>{'}'}</div>
                                        <div className="code-line">{'}'}</div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;

