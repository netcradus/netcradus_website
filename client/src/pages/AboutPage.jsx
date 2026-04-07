import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import About from "../components/About";
import Stats from "../components/Stats";
import CTABanner from "../components/CTABanner";
import Certifications from '../components/Certifications';
import { usePageMeta } from '../hooks/usePageMeta';

const AboutPage = () => {
    usePageMeta(
        'About | Netcradus',
        'Learn about Netcradus, our cybersecurity mission, global presence, and ACIS-driven approach to enterprise resilience.'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SubHero 
                label="// OUR ORIGIN STORY"
                title="Securing the digital frontier since day one."
                subtitle="Netcradus was founded on the principle that security is not a feature, but a fundamental right for every organization navigating the modern web."
            />
            <About />
            <Stats />
            <CTABanner />
            <Certifications />
        </>
    );
};

export default AboutPage;
