import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import CyberCore3D from './CyberCore3D';
import AnimatedReveal from './ui/AnimatedReveal';
import MagneticWrapper from './ui/MagneticWrapper';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden bg-premium-radial py-24 min-h-screen flex items-center transition-colors duration-500 mt-4 md:mt-6">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 right-0 w-[60%] h-[60%] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[40%] h-[40%] bg-accent/3 blur-[100px] rounded-full pointer-events-none z-0" />
      
      <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content text-left">
            <AnimatedReveal>
              <div className="max-w-4xl pt-10">
                <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent-bright font-display uppercase mb-8 block">
                  Autonomous Cybersecurity Intelligence System
                </span>
                <h1 className="text-[clamp(3.5rem,7vw,5.5rem)] font-display font-black text-text-primary mb-8 tracking-[-0.04em] leading-[0.95] drop-shadow-sm">
                  Enterprise <br />
                  <span className="text-accent italic">Defensive</span> <br />
                  Operative.
                </h1>
                
                <p className="hero-subtitle">
                  Netcradus delivers enterprise-grade cybersecurity and bespoke software solutions built for the threats of tomorrow.
                </p>

                <div className="flex flex-wrap gap-6 mt-12">
                  <Link to="/contact">
                    <MagneticWrapper strength={0.3}>
                      <button className="btn-primary px-12 py-5 text-white font-display font-bold text-xs uppercase tracking-[0.2em] shadow-xl">
                        Initiate Command
                      </button>
                    </MagneticWrapper>
                  </Link>
                  <Link to="/platform">
                    <MagneticWrapper strength={0.3}>
                      <button className="px-10 py-5 bg-surface-raised/50 border border-border text-text-primary font-display font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-surface-raised transition-all flex items-center gap-3">
                        Analyze Platform
                        <ArrowRight size={14} className="text-accent" />
                      </button>
                    </MagneticWrapper>
                  </Link>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          <div 
            className="hero-visual-container relative h-[550px] hidden lg:block"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at center, black 55%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 95% 90% at center, black 55%, transparent 100%)',
            }}
          >
            <CyberCore3D />
          </div>
        </div>

        {/* Global Operative Grid Label */}
        <div className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <p className="trust-label">
            Trusted by organizations across critical nodes
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-700">
            {['Healthcare', 'Financial Services', 'Infra Node', 'Gov Sector'].map((sector) => (
              <div key={sector} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-text-secondary">[{sector}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Tip */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hover:opacity-100 transition-opacity">
        <ChevronDown size={24} className="text-text-secondary" />
      </div>
    </section>
  );
};

export default Hero;
