import React from "react";
import "./Hero.css";

/**
 * Enterprise Cybersecurity Hero Component
 * Clean, centered hero layout with video background, heading, description, and feature list.
 */
export default function Hero() {
  const featureBullets = [
    "AI-Powered Threat Detection",
    "Enterprise XDR & SIEM",
    "24×7 Security Operations Center",
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen w-full overflow-hidden bg-[#050B14] select-text pt-[60px] pb-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/videos/homebg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Contrast & Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/85 via-[#050B14]/70 to-[#050B14]/85 z-0 pointer-events-none" />
      
      {/* Centered Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-10 text-center max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Large NETCRADUS Brand Title */}
        <div
          className="brand-hero-title font-black uppercase tracking-[-3px] text-center mx-auto mb-6 sm:mb-9 select-none"
          style={{
            fontFamily: "'Space Grotesk', 'Sora', 'Inter', sans-serif",
            fontSize: "clamp(48px, 9.5vw, 130px)",
            fontWeight: 900,
            lineHeight: 0.95,
            filter: "drop-shadow(0 0 35px rgba(255, 107, 0, 0.25))",
          }}
        >
          <span className="text-[#FFFFFF]">NETCR</span>
          <span
            style={{
              background: "linear-gradient(90deg, #FF6B00 0%, #FF9F43 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ADUS
          </span>
        </div>

        {/* Hero Heading */}
        <h1
          className="hero-heading hero-title font-extrabold max-w-[1100px] text-center mx-auto mb-4 sm:mb-6"
          style={{
            fontFamily: "'Space Grotesk', 'Sora', 'Clash Display', 'Manrope', sans-serif",
            fontSize: "clamp(42px, 6vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
          }}
        >
          <span className="text-[#F8FAFC]">Confidence in Every </span>
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(90deg, #FF6B00 0%, #FF9F43 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Connection.
          </span>
        </h1>

        {/* Description */}
        <p className="text-[16px] sm:text-[20px] font-medium leading-relaxed text-[#C7D0DA] max-w-[640px] text-center mx-auto">
          Protect your business with AI-powered cybersecurity, real-time threat detection, XDR, SIEM, SOAR and 24×7 SOC monitoring.
        </p>

        {/* Feature List (20px below description) */}
        <div className="mt-4 sm:mt-[20px] flex flex-wrap items-center justify-center gap-3 sm:gap-6 max-w-[650px] mx-auto">
          {featureBullets.map((bullet, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#1FC8FF]/20 border border-[#1FC8FF]/50 shadow-[0_0_8px_rgba(31,200,255,0.45)] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1FC8FF] animate-pulse" />
              </span>
              <span className="text-[13px] sm:text-[14px] font-semibold text-white/90 tracking-wide">
                {bullet}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

