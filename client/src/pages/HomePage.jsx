import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ACISSection from '../components/ACISSection';
import HowItWorks from '../components/HowItWorks';
import CTABanner from '../components/CTABanner';
import ClientsSection from '../components/ClientsSection';
import LiveThreatMap from '../components/LiveThreatMap';
import Certifications from '../components/Certifications';
import { usePageMeta } from '../hooks/usePageMeta';

const HomePage = () => {
    usePageMeta(
        'Netcradus | Autonomous Cyber Immune Systems',
        'Netcradus builds autonomous cyber immune systems, managed security capabilities, and enterprise-grade cyber resilience.'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <ACISSection />
            <LiveThreatMap />
            <Services />
            <HowItWorks />
            <ClientsSection />
            <CTABanner />
            <Certifications />
        </>
    );
};

export default HomePage;
