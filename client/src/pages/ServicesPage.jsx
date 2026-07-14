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
                    <div className="flex justify-center items-center">
                        <img 
                            src="/generated/solution image.png" 
                            alt="Cybersecurity Shield" 
                            className="w-full h-auto max-h-[420px] object-contain"
                            style={{ filter: 'drop-shadow(0 20px 45px rgba(255, 107, 0, 0.12))' }}
                        />
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
