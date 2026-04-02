import React from "react";

import isoLogo from "../assets/ISO-Loogo-removebg.png";
import iso27701Logo from "../assets/iso-27701-removebg.png";
import msmeLogo from "../assets/msme-removebg.png";
import B2BLogo from "../assets/B2B1.jpg";
import udyamLogo from "../assets/udyam-Photoroom.png";
import B2CLogo from "../assets/B2C1.jpg";
import certin from "../assets/certin-Photoroom.png";
import dpiit from "../assets/dpiit.png";
import gdpr from "../assets/gdpr.jpeg";
import soc2 from "../assets/soc2.png";

const certifications = [
  { src: isoLogo, alt: "ISO" },
  { src: iso27701Logo, alt: "ISO 27701" },
  { src: msmeLogo, alt: "MSME" },
  { src: udyamLogo, alt: "Udyam" },
  { src: gdpr, alt: "GDPR" },
  { src: soc2, alt: "SOC 2" },
  { src: dpiit, alt: "DPIIT" },
  { src: certin, alt: "CERT-IN" },
  { src: B2BLogo, alt: "B2B" },
  { src: B2CLogo, alt: "B2C" },
];

const LogoItem = ({ logo, index }) => {
  let sizeClass = "h-28 md:h-32";

  if (index === 0) {
    sizeClass = "h-36 md:h-40"; // first logo bigger
  }

  if (index === 5) {
    sizeClass = "h-32 md:h-36"; // 🔥 2nd row 2nd logo slightly bigger
  }

  return (
    <div className="flex justify-center items-center group">
      <div className="min-h-[120px] md:min-h-[140px] flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className={`
            ${sizeClass}
            w-auto object-contain
            transition-all duration-500
            group-hover:scale-110
            group-hover:-translate-y-1
          `}
        />
      </div>
    </div>
  );
};


const Certifications = () => {
  return (
    <section className="py-28 bg-black relative overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-orange-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] bg-orange-500/10 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-orange-500">Compliance</span>
          </h2>

          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
            Certified and trusted by global standards ensuring enterprise-grade security.
          </p>
        </div>

        {/* 🔥 CUSTOM LAYOUT */}
        <div className="flex flex-col gap-y-14">

          {/* Row 1 → 4 logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center">
            {certifications.slice(0, 4).map((logo, index) => (
  <LogoItem key={index} logo={logo} index={index} />
))}
          </div>

          {/* Row 2 → 2 centered */}
          <div className="flex justify-center gap-16">
           {certifications.slice(4, 6).map((logo, index) => (
  <LogoItem key={index} logo={logo} index={index + 4} />
))}
          </div>

          {/* Row 3 → 4 logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center">
           {certifications.slice(6, 10).map((logo, index) => (
  <LogoItem key={index} logo={logo} index={index + 6} />
))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;