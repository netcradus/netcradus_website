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
                label="// OUR CAPABILITIES"
                title="Managed Security Services for Modern Enterprises"
                subtitle="From proactive defense and managed detection to cloud, network, and enterprise security, Netcradus delivers managed security services built for resilient growth."
            />
            <Services />
            <Industries />
            <CTABanner />
        </div>
    );
};

export default ServicesPage;
