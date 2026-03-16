import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import ACISSection from "../components/ACISSection";
import Stats from "../components/Stats";
import CTABanner from "../components/CTABanner";

const ACISPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SubHero 
                label="// FLAGSHIP PRODUCT"
                title="Adaptive intelligence. Autonomous defense."
                subtitle="The ACIS platform represents a paradigm shift in digital security—moving from reactive protection to an autonomous, self-learning immune system."
            />
            <ACISSection />
            <Stats />
            <CTABanner />
        </>
    );
};

export default ACISPage;
