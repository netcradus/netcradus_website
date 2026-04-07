import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import Services from "../components/Services";
import Industries from "../components/Industries";
import CTABanner from "../components/CTABanner";
import { usePageMeta } from '../hooks/usePageMeta';

const ServicesPage = () => {
    usePageMeta(
        'Solutions | Netcradus',
        'Explore Netcradus cybersecurity, managed SOC, cloud security, AI analytics, network security, and enterprise security solutions.'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background transition-colors duration-500">
            <SubHero
                label="// OUR CAPABILITIES"
                title="Intelligent Security. Delivered at Scale."
                subtitle="From proactive defense and managed detection to cloud, network, and enterprise security, we provide the technical foundation for organizations to scale securely."
            />
            <Services />
            <Industries />
            <CTABanner />
        </div>
    );
};

export default ServicesPage;
