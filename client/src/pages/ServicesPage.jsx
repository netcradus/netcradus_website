import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import Services from "../components/Services";
import Industries from "../components/Industries";
import CTABanner from "../components/CTABanner";

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SubHero 
                label="// OUR CAPABILITIES"
                title="Expertise tailored for enterprise resilience."
                subtitle="From managed IT support to advanced cybersecurity intelligence, we provide the technical foundation for your organization to scale securely."
            />
            <Services />
            <Industries />
            <CTABanner />
        </>
    );
};

export default ServicesPage;
