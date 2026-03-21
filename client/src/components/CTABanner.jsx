import React from "react";
import { Link } from "react-router-dom";
import "./CTABanner.css";

const CTABanner = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse"></div>
      
      <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24 flex flex-col items-center text-center relative z-10">

        <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-none">
          Ready to Secure <br />
          <span className="italic text-white/50">
            Your Organisation?
          </span>
        </h2>

        <p className="text-white/80 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mb-12">
          Join leading enterprises who trust Netcradus for their most
          critical digital defence needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Link to="/contact" className="px-12 py-5 bg-white text-accent font-display font-black text-xs uppercase tracking-[0.3em] rounded-full shadow-2xl hover:scale-105 transition-all no-underline">
            Book a Free Consultation
          </Link>

          <Link to="/contact" className="px-12 py-5 border border-white/30 text-white font-display font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-white/10 transition-all no-underline">
            Schedule Demo
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;