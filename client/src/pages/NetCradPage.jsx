import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import CTABanner from '../components/CTABanner';
import { usePageMeta } from '../hooks/usePageMeta';
import { Layers, Globe, Lock } from 'lucide-react';

const FEATURES = [
  { icon: Layers, title: 'One Platform', description: 'Bring SIEM, XDR, and CRM capabilities together under a single unified console.' },
  { icon: Globe, title: 'Built for Scale', description: 'Deploy across distributed teams and infrastructure without losing centralized control.' },
  { icon: Lock, title: 'Security First', description: 'Every module is designed around zero-trust principles and enterprise-grade compliance.' },
];

const NetCradPage = () => {
  usePageMeta(
    'NetCrad | Unified Cybersecurity Platform | Netcradus',
    'NetCrad is Netcradus\u2019 unified cybersecurity platform, bringing SIEM, XDR, and business tools together in one place.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubHero
        label="// PRODUCTS"
        title="NetCrad"
        subtitle="Unified Cybersecurity Platform."
        backgroundImage="/img/cybersecurity.png"
      />

      <section className="py-24 relative overflow-hidden">
        <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent-bright flex items-center justify-center mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default NetCradPage;