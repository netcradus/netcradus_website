import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ACISSection from '../components/ACISSection';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import CTABanner from '../components/CTABanner';
import ClientsSection from '../components/ClientsSection';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Stats />
            <ACISSection />
            <Services />
            <HowItWorks />
            <ClientsSection />
            <CTABanner />
        </>
    );
};

export default HomePage;
