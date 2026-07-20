import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import AnimatedReveal from "./ui/AnimatedReveal";
import CyberTree3D from "./CyberTree3D";

import "./Hero.css";

/**
 * Enterprise Autoplay Hero Component
 * Inspired by Apple, Vercel, Stripe & Framer hero video patterns.
 */
export default function Hero() {
  // Video & Sound Controls State
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideoMode, setShowVideoMode] = useState(false); // Default to Cyber Tree Background Mode

  const videoRef = useRef(null);
  const heroSectionRef = useRef(null);

  // 1. Guaranteed Autoplay on Mount when video mode is active
  useEffect(() => {
    if (videoRef.current && showVideoMode) {
      videoRef.current
        .play()
        .then(() => setIsVideoLoaded(true))
        .catch((err) => {
          console.warn("Browser Autoplay Policy handling:", err);
        });
    }
  }, [showVideoMode]);

  // 2. IntersectionObserver for Smart Playback
  useEffect(() => {
    const heroElem = heroSectionRef.current;
    if (!heroElem || !showVideoMode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(heroElem);

    return () => {
      if (heroElem) observer.unobserve(heroElem);
    };
  }, [showVideoMode]);

  // 3. Toggle Sound (Mute / Unmute)
  const toggleSound = () => {
    if (videoRef.current) {
      const newMuteState = !isMuted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  const customStyles = `
    @keyframes orangeTextGlow {
      0%, 100% { text-shadow: 0 0 10px rgba(255, 107, 0, 0.25); }
      50% { text-shadow: 0 0 25px rgba(255, 107, 0, 0.65); }
    }
    .glow-text-orange {
      animation: orangeTextGlow 3.5s ease-in-out infinite;
    }
    .orange-accent-gradient {
      background: linear-gradient(135deg, #FF6B00 0%, #FF9A3D 50%, #FFC56B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .btn-orange-override-primary {
      background: linear-gradient(to right, #FF6B00, #FF8C42) !important;
      color: #ffffff !important;
      border: none !important;
    }
    .btn-orange-override-primary:hover {
      box-shadow: 0 0 20px rgba(255, 107, 0, 0.45) !important;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>

      {/* Hero Section Shell with Cyber Tree Background Image */}
      <section
        ref={heroSectionRef}
        className="hero hero-shell relative overflow-hidden flex items-center min-h-[90vh] lg:min-h-[92vh] z-10 py-10 lg:py-16 transition-all duration-700 bg-[#050B14]"
        style={{
          backgroundImage: !showVideoMode
            ? `linear-gradient(to right, #050B14 0%, rgba(5, 11, 20, 0.98) 22%, rgba(5, 11, 20, 0.20) 38%, transparent 58%), url('/img/cyber-tree.jpg')`
            : undefined,
          backgroundPosition: "right 4% center",
          backgroundSize: "auto 84%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Subtle Ambient Radial Highlight over Tree Center */}
        {!showVideoMode && (
          <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(255,107,0,0.16)_0%,transparent_70%)] pointer-events-none z-0" />
        )}

        <div className="container relative z-10 mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-14 xl:px-20 2xl:px-24 w-full">
          <div className="grid items-center gap-8 lg:gap-10 lg:grid-cols-12">

            {/* -----------------------------------------------------------------
                LEFT COLUMN: Compact Typography sitting cleanly on left dark space
               ----------------------------------------------------------------- */}
            <div className="lg:col-span-5 text-center lg:text-left select-text z-20 max-w-xl mx-auto lg:mx-0">
              <AnimatedReveal>
                <div className="space-y-6 sm:space-y-7 pr-0 lg:pr-2">

                  {/* Shield engaged pill badge */}
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF8C42]/40 bg-[#FF6B00]/15 text-[#FF8C42] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] backdrop-blur-md shadow-md">
                      <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-ping" />
                      ACIS Shield Engaged
                    </span>
                  </div>

                  {/* Responsive Typography Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.6rem] font-black leading-[1.08] tracking-[-0.04em] text-white drop-shadow-lg">
                    Resilience by Design.<br />
                    <span className="orange-accent-gradient glow-text-orange">
                      Security Without Compromise.
                    </span>
                  </h1>

                  {/* Paragraph Subtext */}
                  <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg font-medium leading-relaxed text-gray-200 drop-shadow">
                    Netcradus delivers executive cybersecurity advisory, AI-powered threat intelligence, and enterprise security frameworks that help organizations reduce cyber risk, maintain regulatory compliance, and protect critical business operations with confidence.
                  </p>

                  {/* Action Buttons & Visual Switcher */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-2">
                    <Link
                      to="/contact"
                      className="btn-orange-override-primary w-full sm:w-auto px-9 py-4 text-white font-extrabold text-xs uppercase tracking-[0.2em] rounded-full shadow-lg hover:scale-105 transition-all text-center no-underline min-h-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    >
                      Get Consultation
                    </Link>

                    <button
                      type="button"
                      onClick={() => setShowVideoMode(!showVideoMode)}
                      aria-label="Toggle between Hero Video and Cyber Tree Visual"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/30 bg-black/50 backdrop-blur-md hover:bg-black/70 text-gray-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    >
                      {showVideoMode ? "Show Cyber Tree Visual" : "Play Hero Video"}
                    </button>
                  </div>

                </div>
              </AnimatedReveal>
            </div>

            {/* -----------------------------------------------------------------
                RIGHT COLUMN: Visual Spacer for Scaled Cyber Tree Visual
               ----------------------------------------------------------------- */}
            <div className={`lg:col-span-7 relative w-full flex items-center justify-center select-none mt-4 lg:mt-0 ${
              showVideoMode ? "h-auto" : "h-[320px] sm:h-[440px] lg:h-[620px]"
            }`}>
              
              {showVideoMode && (
                /* HERO AUTOPLAY VIDEO CONTAINER */
                <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-[#FF6B00]/30 shadow-[0_15px_45px_rgba(255,107,0,0.28)] bg-[#050B14] flex items-center justify-center z-20">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-contain mx-auto transition-opacity duration-700 ease-in-out ${
                      isVideoLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <source src="/videos/cybersecurity.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video playback.
                  </video>

                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 z-30">
                    <button
                      type="button"
                      onClick={toggleSound}
                      aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#08111F]/85 border border-[#FF6B00]/50 text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-all duration-300 shadow-xl backdrop-blur-md text-xs font-bold uppercase tracking-wider cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    >
                      {isMuted ? (
                        <>
                          <VolumeX size={18} />
                          <span>Unmute Sound</span>
                        </>
                      ) : (
                        <>
                          <Volume2 size={18} />
                          <span>Sound On</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Glossy bottom divider line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />
      </section>
    </>
  );
}
