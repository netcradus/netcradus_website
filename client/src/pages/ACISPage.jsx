import React, { useEffect } from 'react';
import { Download } from 'lucide-react';
import SubHero from '../components/SubHero';
import ACISSection from "../components/ACISSection";
import Stats from "../components/Stats";
import CTABanner from "../components/CTABanner";
import { usePageMeta } from '../hooks/usePageMeta';

const tiers = [
    {
        name: 'ACIS Lite',
        description: 'Core autonomous monitoring and response for growing businesses.',
        points: ['AI-SIEM core', 'Basic SOAR', 'Up to 500 endpoints']
    },
    {
        name: 'ACIS Pro',
        description: 'Deeper analytics, custom playbooks, and priority support for scale-up teams.',
        points: ['Advanced SOAR', 'Shadow AI detection', 'Dedicated analyst support']
    },
    {
        name: 'ACIS Enterprise',
        description: 'Custom deployment for complex environments with compliance and operational scale requirements.',
        points: ['Unlimited endpoints', 'Hybrid deployment', '24/7 dedicated SOC']
    }
];

const ACISPage = () => {
    usePageMeta(
        'ACIS | Netcradus',
        'Explore the Netcradus ACIS platform, its autonomous defense architecture, deployment tiers, and white paper.'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SubHero
                label="// FLAGSHIP PRODUCT"
                title="Autonomous cyber immune system."
                subtitle="The ACIS platform represents a paradigm shift in digital security by moving from reactive protection to an autonomous, self-learning immune system."
                actions={
                    <a
                        href="/assets/acis-whitepaper.pdf"
                        download
                        className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em]"
                    >
                        Download ACIS White Paper
                        <Download size={16} />
                    </a>
                }
            />
            <section className="py-0">
                <div className="container mx-auto max-w-screen-2xl px-4 pb-16 sm:px-6 lg:px-16 xl:px-24">
                    <div className="grid gap-6 md:grid-cols-3">
                        {tiers.map((tier, index) => (
                            <article
                                key={tier.name}
                                className={`premium-card rounded-[28px] border p-8 backdrop-blur-md ${
                                    index === 1
                                        ? 'border-accent/30 bg-[linear-gradient(180deg,rgba(232,64,10,0.08),transparent_55%),var(--color-surface)] shadow-[0_0_36px_rgba(232,64,10,0.12)]'
                                        : 'border-border bg-[var(--color-surface)]/88'
                                }`}
                            >
                                <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{tier.name}</div>
                                <p className="mt-4 text-base leading-relaxed text-text-secondary">{tier.description}</p>
                                <ul className="mt-6 space-y-3 text-sm text-text-secondary">
                                    {tier.points.map((point) => (
                                        <li key={point} className="rounded-[18px] border border-border bg-[var(--color-surface-raised)]/65 px-4 py-3">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <ACISSection />
            <Stats />
            <CTABanner />
        </>
    );
};

export default ACISPage;
