import { Shield, Lock, Server, ArrowRight } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import MagneticWrapper from "./ui/MagneticWrapper";
import { motion } from "framer-motion";

const highlights = [
  "24/7/365 Proactive Monitoring & Incident Response",
  "Dual-Continent Presence & Follow-the-Sun Support",
  "World-Class Certified Professionals",
  "Scalable & Modular Service Delivery",
  "Compliance-First Architecture",
  "Innovation at the Core — Powered by ACIS",
];

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden bg-background py-16 md:py-32"
    >
      {/* Brand Background Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_35%,rgba(255,138,31,0.08)_0%,transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,45,143,0.08)_0%,transparent_35%)]" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* Left Content */}
        <AnimatedReveal className="text-center lg:text-left">
          <span className="mb-8 block font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-primary md:text-[12px]">
            Architectural Excellence
          </span>

          <h2 className="mb-8 font-display text-4xl font-medium leading-[1.02] tracking-tight text-white md:text-7xl">
            Outcomes, <br />
            <span className="bg-heading-gradient bg-clip-text italic text-transparent">
              not just services.
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-lg font-sans text-lg leading-relaxed text-gray-400 lg:mx-0">
            We engineer resilience. Netcradus builds the digital infrastructure
            that doesn&apos;t just survive attacks—it anticipates them.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div key={idx} className="group flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/50 transition-colors duration-500 group-hover:bg-primary" />
                <span className="font-sans text-sm leading-relaxed text-gray-400 transition-colors duration-500 group-hover:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <MagneticWrapper strength={0.2}>
            <button className="group inline-flex items-center gap-4 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white md:text-xs">
              Our Philosophy
              <ArrowRight
                size={14}
                className="text-primary transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </MagneticWrapper>
        </AnimatedReveal>

        {/* Right Visual */}
        <AnimatedReveal delay={0.2} className="relative flex items-center justify-center">
          <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
            <div className="absolute inset-10 animate-[spin_40s_linear_infinite] rounded-full border border-white/[0.05] border-dashed" />
            <div className="absolute inset-20 rounded-full border border-white/[0.05]" />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-brand-gradient-soft blur-[120px]" />

            {/* Core */}
            <div className="relative z-10 flex h-48 w-48 items-center justify-center md:h-64 md:w-64">
              <div className="absolute inset-0 rounded-full border border-white/10 bg-black/40 shadow-brand-lg backdrop-blur-3xl" />
              <Shield
                strokeWidth={0.6}
                className="h-32 w-32 text-white/20 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] md:h-44 md:w-44"
              />

              {/* Orbit Top */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-[-40px]"
              >
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border border-white/10 bg-black shadow-2xl">
                  <Lock size={16} className="text-primary" />
                </div>
              </motion.div>

              {/* Orbit Bottom */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-[-40px]"
              >
                <div className="absolute bottom-0 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border border-white/10 bg-black shadow-2xl">
                  <Server size={16} className="text-accent" />
                </div>
              </motion.div>
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute inset-0 font-mono text-[8px] uppercase tracking-[0.3em] text-gray-700">
              <div className="absolute left-0 top-0">ARCH_TYPE: MONOLITH</div>
              <div className="absolute bottom-10 right-0">Uptime: 99.98%</div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  );
}