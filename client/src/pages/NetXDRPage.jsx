import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import CTABanner from '../components/CTABanner';
import { usePageMeta } from '../hooks/usePageMeta';
import { Eye, Zap, ShieldCheck } from 'lucide-react';

const FEATURES = [
  { icon: Eye, title: 'Unified Visibility', description: 'Correlate signals across endpoint, network, and cloud telemetry into a single detection surface.' },
  { icon: Zap, title: 'Automated Response', description: 'Contain threats in real time with orchestrated playbooks triggered the moment risk is confirmed.' },
  { icon: ShieldCheck, title: 'Extended Coverage', description: 'Extend detection beyond the endpoint to identity, email, and cloud workloads.' },
];

const NetXDRPage = () => {
  usePageMeta(
    'Net XDR | Extended Detection & Response Platform | Netcradus',
    'Net XDR is Netcradus\u2019 Extended Detection & Response platform, unifying detection and automated response across your environment.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubHero
        label="// PRODUCTS"
        title="Net XDR"
        subtitle="Extended Detection & Response Platform."
        backgroundImage="/img/network security.png"
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

export default NetXDRPage;