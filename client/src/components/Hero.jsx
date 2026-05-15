import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import AmbientMesh from "./AmbientMesh";
import AnimatedReveal from "./ui/AnimatedReveal";
import MagneticWrapper from "./ui/MagneticWrapper";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero relative flex min-h-screen items-center overflow-hidden bg-premium-radial pb-20 pt-32">
      <AmbientMesh className="opacity-90" />
      <div className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px] dark:bg-accent/12" />
      <div className="absolute left-[8%] top-[22%] h-40 w-40 rounded-full border border-accent/10 bg-white/20 blur-3xl dark:bg-white/5" />
      <div className="absolute bottom-[14%] right-[10%] h-52 w-52 rounded-full border border-accent/10 bg-accent/8 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedReveal>
            <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
              Autonomous Cyber Immune System
            </span>

            <div className="relative inline-block">
              <div className="absolute inset-x-6 bottom-1 h-16 rounded-full bg-[radial-gradient(circle,rgba(232,64,10,0.18),transparent_68%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(232,64,10,0.24),transparent_68%)]" />
              <h1 className="relative mb-6 text-[clamp(2.75rem,6vw,5rem)] font-black leading-[1.03] tracking-tight text-[var(--color-text-primary)] [text-shadow:0_0_26px_rgba(232,64,10,0.08)] dark:[text-shadow:0_0_36px_rgba(232,64,10,0.16)]">
                Securing Businesses With AI-Driven Cyber Intelligence
              </h1>
            </div>

            <h2 className="mx-auto mb-10 max-w-3xl text-lg font-medium leading-relaxed text-[var(--color-text-secondary)] md:text-2xl">
              Detect. Prevent. Respond. Enterprise-Grade SOC &amp; SIEM Monitoring for
              Global Businesses
            </h2>

            <p className="mx-auto mb-10 inline-flex max-w-fit rounded-full border border-accent/20 bg-accent/8 px-5 py-3 text-sm font-semibold tracking-[0.08em] text-accent shadow-[0_0_30px_rgba(232,64,10,0.08)]">
              Affordable Enterprise Cybersecurity for Growing Indian Businesses
            </p>

            <div className="cta-group flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <MagneticWrapper>
                  <button className="btn-hero-primary">Get Free Security Assessment</button>
                </MagneticWrapper>
              </Link>

              <a href="tel:1800121008800">
                <MagneticWrapper>
                  <button className="btn-hero-secondary">Contact Now</button>
                </MagneticWrapper>
              </a>

              <Link
                to="/contact"
                className="inline-flex rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <MagneticWrapper>
                  <span className="btn-hero-secondary border border-accent/25 bg-transparent text-text-primary">
                    Book SOC Demo
                  </span>
                </MagneticWrapper>
              </Link>
            </div>
          </AnimatedReveal>
        </div>

        <div className="mt-20 border-t border-[var(--color-border)] pt-10">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
            Trusted across critical sectors
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {["Healthcare", "Finance", "Infrastructure", "Government"].map((sector) => (
              <div key={sector} className="group flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(232,64,10,0.2)] transition group-hover:scale-125" />
                <span className="text-sm text-[var(--color-text-secondary)] transition group-hover:text-accent">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown size={22} />
      </div>
    </section>
  );
};

export default Hero;
