import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import Services from "../components/Services";
import Industries from "../components/Industries";
import CTABanner from "../components/CTABanner";
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';

const ServicesPage = () => {
    usePageMeta(SEO_META.services.title, SEO_META.services.description);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background transition-colors duration-500">
            <SubHero
                label=""
                title="Managed Security Services for Modern Enterprises"
                subtitle="From proactive defense and managed detection to cloud, network, and enterprise security, Netcradus delivers managed security services built for resilient growth."
                sectionClassName="solutions-hero"
                visual={
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-[0_20px_80px_rgba(232,64,10,0.15)] border border-border">
                        <div className="absolute inset-0 bg-[#e8400a] mix-blend-overlay opacity-10 z-10" />
                     
                    </div>
                }
            />
            <Services />
            <Industries />
            <CTABanner />
        </div>
    );
};

export default ServicesPage;
