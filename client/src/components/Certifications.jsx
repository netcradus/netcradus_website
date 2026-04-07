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
  { src: isoLogo, alt: "ISO", note: "Governance Standard" },
  { src: iso27701Logo, alt: "ISO 27701", note: "Privacy Controls" },
  { src: msmeLogo, alt: "MSME", note: "Registered Entity" },
  { src: udyamLogo, alt: "Udyam", note: "Recognized Business" },
  { src: gdpr, alt: "GDPR", note: "Privacy Alignment" },
  { src: soc2, alt: "SOC 2", note: "Control Assurance" },
  { src: dpiit, alt: "DPIIT", note: "Startup Recognition" },
  { src: certin, alt: "CERT-IN", note: "Regulatory Awareness" },
  { src: B2BLogo, alt: "B2B", note: "Business Verified" },
  { src: B2CLogo, alt: "B2C", note: "Customer Reach" },
];

function LogoCard({ logo, index }) {
  const bigger = index === 0 || index === 5;

  return (
    <div className="group relative rounded-[26px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.06),transparent_65%),var(--color-surface)] p-5 shadow-[0_16px_42px_rgba(232,64,10,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_0_36px_rgba(232,64,10,0.12)]">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex min-h-[120px] items-center justify-center rounded-[22px] border border-white/30 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
        <img
          src={logo.src}
          alt={logo.alt}
          className={`${bigger ? "h-20 md:h-24" : "h-16 md:h-20"} w-auto object-contain transition-transform duration-500 group-hover:scale-105`}
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-text-primary">{logo.alt}</h3>
        <p className="mt-2 text-xs text-text-secondary">{logo.note}</p>
      </div>
    </div>
  );
}

const Certifications = () => {
  return (
    <section className="relative overflow-hidden bg-premium-radial py-28 transition-colors duration-500">
      <div className="absolute left-[-6rem] top-8 h-72 w-72 rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute right-[-4rem] top-1/3 h-64 w-64 rounded-full bg-accent/8 blur-[110px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,64,10,0.08),transparent_24%),radial-gradient(circle_at_80%_60%,rgba(232,64,10,0.06),transparent_24%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(232,64,10,0.12),transparent_24%),radial-gradient(circle_at_80%_60%,rgba(232,64,10,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">Compliance</span>
          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Standards that reinforce <span className="text-accent italic">trust.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
            Our compliance and recognition portfolio reflects the governance discipline, privacy posture, and enterprise readiness expected from a modern cybersecurity partner.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {certifications.map((logo, index) => (
            <LogoCard key={logo.alt} logo={logo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
