import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import CyberCore3D from './CyberCore3D';
import AnimatedReveal from './ui/AnimatedReveal';
import MagneticWrapper from './ui/MagneticWrapper';
import './Hero.css';

const Hero = () => {
  return (
  <section className="hero relative overflow-hidden bg-premium-radial min-h-screen flex items-center pt-32 pb-20">

  {/* Glow Background */}
  <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/10 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full"></div>

  <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
    
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div>
        <AnimatedReveal>
          <span className="text-[11px] font-bold tracking-[0.35em] text-accent uppercase mb-6 block">
            Autonomous Cyber Immune System
          </span>

          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.05] tracking-tight text-[var(--color-text-primary)] mb-6">
            Engineering Digital Resilience for the{" "}
            <span className="text-accent italic">Global Enterprise</span>
          </h1>

          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-xl mb-10">
            Beyond detection. Netcradus builds autonomous cyber immune systems that predict,
            neutralize, and evolve against modern threats.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">

            <Link to="/contact">
              <MagneticWrapper>
                <button className="btn-hero-primary">
                  Request Audit
                </button>
              </MagneticWrapper>
            </Link>

            <MagneticWrapper>
              <a
                href="https://acis.netcradus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
              >
                Explore ACIS
                <ArrowRight size={16} />
              </a>
            </MagneticWrapper>

          </div>
        </AnimatedReveal>
      </div>

      {/* RIGHT */}
      <div className="relative h-[550px] hidden lg:block">
        <CyberCore3D />
      </div>

    </div>

    {/* TRUST */}
    <div className="mt-20 pt-10 border-t border-[var(--color-border)]">

      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-6">
        Trusted across critical sectors
      </p>

      <div className="flex flex-wrap gap-8">
        {['Healthcare', 'Finance', 'Infrastructure', 'Government'].map((sector) => (
          <div key={sector} className="flex items-center gap-2 group">
            <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition" />
            <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-accent transition">
              {sector}
            </span>
          </div>
        ))}
      </div>

    </div>

  </div>

  {/* Scroll */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
    <ChevronDown size={22} />
  </div>

</section>
  );
};

export default Hero;
