// import React, { useEffect } from 'react';
// import Hero from '../components/Hero';
// import Services from '../components/Services';
// import WhyChooseUs from '../components/WhyChooseUs';
// import TrustSignals from '../components/TrustSignals';
// // import TeamMembersSection from '../components/TeamMembersSection';
// import ACISSection from '../components/ACISSection';
// import HowItWorks from '../components/HowItWorks';
// import CTABanner from '../components/CTABanner';
// import ClientsSection from '../components/ClientsSection';
// import LiveThreatMap from '../components/LiveThreatMap';
// import Certifications from '../components/Certifications';
// import GallerySection from '../components/GallerySection';
// import { usePageMeta } from '../hooks/usePageMeta';
// import { SEO_META } from '../data/seoMeta';

// const HomePage = () => {
//     usePageMeta(SEO_META.home.title, SEO_META.home.description);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <>
//             <Hero />
//             <ACISSection />
//             <LiveThreatMap />
//             <Services />
//             <WhyChooseUs />
//             <TrustSignals />
//             {/* <TeamMembersSection /> */}
//             <HowItWorks />
//             <ClientsSection />
//             <CTABanner />
//             <Certifications />
//             <GallerySection />
//         </>
//     );
// };

// export default HomePage;

import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustSignals from '../components/TrustSignals';
import ACISSection from '../components/ACISSection';
import HowItWorks from '../components/HowItWorks';
import CTABanner from '../components/CTABanner';
import ClientsSection from '../components/ClientsSection';
import LiveThreatMap from '../components/LiveThreatMap';
import Certifications from '../components/Certifications';
import GallerySection from '../components/GallerySection';
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';

const HomePage = () => {
  usePageMeta(SEO_META.home.title, SEO_META.home.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <ACISSection />
      <LiveThreatMap />
      <Services />
      <WhyChooseUs />
      <TrustSignals />
      <HowItWorks />
      <ClientsSection />
      <CTABanner />
      <Certifications />
      <GallerySection />
    </>
  );
};

export default HomePage;