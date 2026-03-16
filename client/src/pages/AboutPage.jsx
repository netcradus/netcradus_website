import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import About from "../components/About";
import Stats from "../components/Stats";
import CTABanner from "../components/CTABanner";

const AboutPage = () => {
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
        </>
    );
};

export default AboutPage;
