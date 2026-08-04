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
      {/* Background Video (15% Brightness & 10% Contrast Increase for Hex Pattern & Blue Network Lines) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none brightness-115 contrast-110"
      >
        <source src="/videos/homebg.mp4" type="video/mp4" />
      </video>

      {/* Balanced Overlay for Enhanced Background Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/65 via-[#050B14]/50 to-[#050B14]/65 z-0 pointer-events-none" />

      {/* Centered Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-10 text-center max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Large ⓃⒺⓉⒸⓇⒶⒹⓊⓈ Brand Title - Reduced Glow (by 40%) */}
        <div
          className="brand-hero-title font-black uppercase text-center mx-auto mb-[45px] select-none"
          style={{
            fontFamily: "'Space Grotesk', 'Sora', 'Inter', sans-serif",
            fontSize: "clamp(34px, 7.5vw, 110px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "0.04em",
            filter: "drop-shadow(0 0 20px rgba(255, 107, 0, 0.25))",
          }}
        >
          <span className="text-[#FFFFFF]">ⓃⒺⓉⒸⓇ</span>
          <span
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 50%, #FF7A00 50%, #FF7A00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 12px rgba(255, 122, 0, 0.20))",
              display: "inline-block",
            }}
          >
            Ⓐ
          </span>
          <span
            style={{
              color: "#FF7A00",
              filter: "drop-shadow(0 0 12px rgba(255, 122, 0, 0.20))",
            }}
          >
            ⒹⓊⓈ
          </span>
        </div>

        {/* Hero Heading - Two-Line Premium Typography */}
        <h1
          className="hero-heading hero-title flex flex-col items-center justify-center max-w-[1100px] text-center mx-auto mb-[40px] select-text"
          style={{
            lineHeight: 1.2,
          }}
        >
          {/* Line 1: Pure White (#FFFFFF) Luminous Glow */}
          <span
            className="block font-semibold"
            style={{
              color: "#FFFFFF",
              fontFamily: "'Great Vibes', 'Alex Brush', cursive",
              fontSize: "clamp(34px, 4.2vw, 54px)",
              letterSpacing: "1px",
              lineHeight: 1.25,
              textShadow:
                "0 0 18px rgba(255, 255, 255, 0.45), 0 0 20px rgba(255, 255, 255, 0.35), 0 0 35px rgba(142, 219, 255, 0.15), 0 4px 16px rgba(0, 0, 0, 0.35)",
              marginBottom: "22px",
            }}
          >
            Confidence in Every
          </span>

          {/* Line 2: Blackletter Gothic (Enlarged by 35-40% to 98px) - Solid "Connec" (White) & "tion." (Brand Orange #FF7A00) */}
          <span
            className="block font-bold"
            style={{
              fontFamily: "'UnifrakturMaguntia', 'MedievalSharp', serif",
              fontSize: "clamp(60px, 7.8vw, 98px)",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
            }}
          >
            <span
              className="text-[#FFFFFF]"
              style={{
                textShadow:
                  "0 0 10px rgba(255, 255, 255, 0.18), 0 6px 18px rgba(0, 0, 0, 0.35)",
              }}
            >
              Connec
            </span>
            <span
              className="text-[#FF7A00]"
              style={{
                textShadow:
                  "0 0 12px rgba(255, 122, 0, 0.25), 0 6px 18px rgba(0, 0, 0, 0.35)",
              }}
            >
              tion.
            </span>
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

