import React from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  BrainCircuit,
  Globe2,
  Headphones,
  Play,
  Radar,
  SearchCheck,
  ShieldCheck,
  Zap,
  FileText,
  Phone,
} from "lucide-react";
import AmbientMesh from "./AmbientMesh";
import AnimatedReveal from "./ui/AnimatedReveal";
import MagneticWrapper from "./ui/MagneticWrapper";
import "./Hero.css";

const stats = [
  { icon: ShieldCheck, value: "99.9%", label: "Threat Detection Accuracy" },
  { icon: Radar, value: "24/7", label: "Continuous Monitoring" },
  { icon: Globe2, value: "Global", label: "Enterprise Coverage" },
  { icon: BadgeCheck, value: "100%", label: "Compliance Focused" },
];

const featureCards = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Threat Detection",
    description: "Advanced ML models identify and neutralize threats in real time.",
  },
  {
    icon: SearchCheck,
    title: "Proactive Threat Hunting",
    description: "Continuous threat hunting to detect hidden risks before they escalate.",
  },
  {
    icon: Zap,
    title: "Rapid Incident Response",
    description: "Automated response workflows to minimize downtime.",
  },
  {
    icon: FileText,
    title: "Compliance & Reporting",
    description: "Built-in compliance with global standards and detailed reporting.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Round-the-clock support from cybersecurity experts.",
  },
];

const Hero = () => {
  return (
    <section className="hero hero-shell relative overflow-hidden bg-premium-radial pb-12 pt-28 lg:pb-16 lg:pt-32">
      <AmbientMesh className="opacity-45" />
      <div className="hero-grid-glow" />
      <div className="hero-map-cloud" />
      <div className="hero-map-dots" />
      <div className="hero-floor-glow" />

      <div className="container relative z-10 mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-14 xl:px-20 2xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(520px,0.98fr)] xl:gap-20 2xl:gap-24">
          <AnimatedReveal>
            <div className="max-w-[46rem] text-center lg:text-left">
              <span className="mb-8 block text-[11px] font-bold uppercase tracking-[0.4em] text-accent">
                Autonomous Cyber Immune System
              </span>

              <h1 className="hero-heading text-[clamp(3.1rem,5.35vw,5.5rem)] font-black leading-[0.94] tracking-[-0.05em] text-text-primary">
                <span className="block lg:whitespace-nowrap">Securing Businesses</span>
                <span className="block lg:whitespace-nowrap">With AI-Driven Cyber</span>
                <span className="block lg:whitespace-nowrap">Intelligence</span>
              </h1>

              <h2 className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-text-secondary md:text-[1.9rem] lg:text-[1.08rem] lg:leading-relaxed">
                Detect. Prevent. Respond. Enterprise-Grade SOC &amp; SIEM Monitoring for
                Global Businesses
              </h2>

              <div className="mt-7 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link to="/contact">
                  <MagneticWrapper>
                    <button className="btn-hero-primary btn-glow-pulse flex items-center gap-3">
                      <ShieldCheck size={18} />
                      Request Security Audit
                    </button>
                  </MagneticWrapper>
                </Link>

                <Link to="/contact">
                  <MagneticWrapper>
                    <button className="btn-hero-secondary flex items-center gap-3">
                      <Phone size={18} />
                      Request Callback
                    </button>
                  </MagneticWrapper>
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 text-left md:grid-cols-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="hero-stat">
                    <div className="hero-stat-icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-[1.85rem] font-black leading-none text-text-primary">
                        {value}
                      </p>
                      <p className="mt-2 max-w-[140px] text-sm leading-snug text-text-secondary">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal>
            <div className="hero-reference-visual">
              <img
                src="/generated/acis-hero-reference.png"
                alt="ACIS cyber defense platform with global threat intelligence and security analytics"
                className="hero-reference-image"
              />
            </div>
          </AnimatedReveal>
        </div>

        <div className="mt-10 flex justify-center lg:mt-9">
          <p className="hero-affordability-pill">
            Affordable Enterprise Cybersecurity for Growing Indian Businesses
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-5 xl:gap-6">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <article key={title} className="hero-feature-card">
              <div className="hero-feature-icon">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
