import React from 'react';
import './SubHero.css';

const SubHero = ({ title, subtitle, label }) => {
  return (
    <section className="py-24 bg-premium-radial relative min-h-[40vh] flex items-center transition-colors duration-500 overflow-hidden">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        <div className="reveal max-w-3xl">
          {label && <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">{label}</span>}
          <h1 className="text-4xl md:text-7xl font-display font-black text-text-primary mb-8 tracking-tighter leading-none">{title}</h1>
          {subtitle && <p className="text-text-secondary text-lg md:text-xl font-sans leading-relaxed">{subtitle}</p>}
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(232,64,10,0.05)_0%,transparent_50%)]"></div>
    </section>
  );
};

export default SubHero;

