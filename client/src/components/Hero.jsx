import React from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  BrainCircuit,
  Globe2,
  Headphones,
  Radar,
  SearchCheck,
  ShieldCheck,
  Zap,
  FileText,
  Phone,
  // Star,
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
    <>
      {/* HERO SECTION */}
      <section className="hero hero-shell relative overflow-hidden bg-premium-radial pb-12 pt-28 lg:pb-16 lg:pt-32">
        <AmbientMesh className="opacity-45" />
        <div className="hero-grid-glow" />
        <div className="hero-map-cloud" />
        <div className="hero-map-dots" />
        <div className="hero-floor-glow" />

        <div className="container relative z-10 mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-14 xl:px-20 2xl:px-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(520px,0.98fr)] xl:gap-20 2xl:gap-24">
            
            {/* LEFT CONTENT */}
            <AnimatedReveal>
              <div className="max-w-[46rem] text-center lg:text-left">
                
                <span className="mb-8 block text-[11px] font-bold uppercase tracking-[0.4em] text-accent">
                  Autonomous Cyber Immune System
                </span>

                <h1 className="hero-heading text-[clamp(2.2rem,5.9vw,5.5rem)] font-black leading-[0.94] tracking-[-0.05em] text-text-primary">
                  <span className="block lg:whitespace-nowrap">Securing Businesses</span>
                  <span className="block lg:whitespace-nowrap">With AI-Driven Cyber</span>
                  <span className="block lg:whitespace-nowrap">Intelligence</span>
                </h1>

                <h2 className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-text-secondary lg:text-[1.08rem]">
                  Detect. Prevent. Respond. Enterprise-Grade SOC & SIEM Monitoring for Global Businesses
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

                {/* STATS */}
                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4">
                  {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="hero-stat">
                      <div className="hero-stat-icon">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-[1.85rem] font-black text-text-primary">{value}</p>
                        <p className="mt-2 text-sm text-text-secondary">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* GOOGLE REVIEWS   */}
                {/* <div className="mt-8 flex justify-center lg:justify-start">
                  <a
                    href="https://shorturl.at/XUInG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-[#ffffff14] bg-[#ffffff08] px-5 py-4 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-[2px] text-[#ffb400]">
                      <Star size={17} fill="currentColor" />
                      <Star size={17} fill="currentColor" />
                      <Star size={17} fill="currentColor" />
                      <Star size={17} fill="currentColor" />
                      <Star size={17} fill="currentColor" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">Google Reviews</p>
                      <p className="text-xs text-gray-300">Trusted by clients across India</p>
                    </div>

                    <div className="rounded-full bg-[#e8400a] px-3 py-1 text-[11px] font-bold text-white">
                      View
                    </div>
                  </a>
                </div> */}

              </div>
            </AnimatedReveal>

            {/* RIGHT IMAGE */}
            <AnimatedReveal>
              <div className="hero-reference-visual">
                <img
                  src="/generated/acis-hero-reference.png"
                  alt="ACIS cyber defense platform"
                  className="hero-reference-image"
                />
              </div>
            </AnimatedReveal>

          </div>

          {/* AFFORDABILITY TEXT */}
          <div className="mt-10 flex justify-center">
            <p className="hero-affordability-pill">
              Affordable Enterprise Cybersecurity for Growing Indian Businesses
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="mt-10 grid gap-5 xl:grid-cols-5">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <article key={title} className="hero-feature-card">
                <div className="hero-feature-icon">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-text-primary">{title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

    </>
  );
};

export default Hero;


