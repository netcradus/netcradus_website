import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from "../components/About";
import WhyNetcradus from "../components/WhyNetcradus";
import Services from '../components/Services';
import ACISSection from '../components/ACISSection';
import HowItWorks from '../components/HowItWorks';
import CTABanner from '../components/CTABanner';
import ClientsSection from '../components/ClientsSection';
import LiveThreatMap from '../components/LiveThreatMap';
import Certifications from '../components/Certifications';
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';
import TestimonialSlider from "../components/TestimonialSlider";
import { ClientLogoWall } from "../components/ClientLogoWall";
const HomePage = () => {
    usePageMeta(SEO_META.home.title, SEO_META.home.description);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <About />
            <WhyNetcradus />
            <ACISSection />
            <LiveThreatMap />
            <Services />
            <HowItWorks />
             <ClientsSection />
              <Certifications />
              <TestimonialSlider />
               <ClientLogoWall />
               <CTABanner />

        </>
    );
};
export default HomePage;
