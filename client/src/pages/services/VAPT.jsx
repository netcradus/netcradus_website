import React, { useEffect } from "react";
import SubHero from "../../components/SubHero";
import SolutionsCTABanner from "../../components/SolutionsCTABanner";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";
import { SERVICE_TABS } from "../../components/Services";

const service = SERVICE_TABS.find((tab) => tab.id === "vapt-services");

const VAPTPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background transition-colors duration-500">
      <SubHero label="" title={service.heading} subtitle={service.description} />
      <section className="relative overflow-hidden bg-premium-radial py-24">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <ServiceDetailLayout service={service} />
        </div>
      </section>
      <SolutionsCTABanner />
    </div>
  );
};

export default VAPTPage;