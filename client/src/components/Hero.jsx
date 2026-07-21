import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Play, UserCheck, ShieldCheck, Code, Lock, Cloud, Settings, Volume2, VolumeX } from "lucide-react";
import AnimatedReveal from "./ui/AnimatedReveal";

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

  // Feature cards data for mobile & desktop grid
  const featureCards = [
    { icon: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] shrink-0" />, title: "Identity Security" },
    { icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] shrink-0" />, title: "Zero Trust" },
    { icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] shrink-0" />, title: "API Security" },
    { icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] shrink-0" />, title: "Data Protection" },
    { icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] shrink-0" />, title: "Cloud Security" },
    { icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] shrink-0" />, title: "SIEM" },
  ];

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

      {/* Hero Section Shell with Cyber Tree Background Image for Desktop */}
      <section
        ref={heroSectionRef}
        className="hero hero-shell relative overflow-hidden flex items-center min-h-[90vh] lg:min-h-[92vh] z-10 py-6 lg:py-16 transition-all duration-700 bg-[#050B14]"
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
          <div className="hidden lg:block absolute right-[12%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(255,107,0,0.16)_0%,transparent_70%)] pointer-events-none z-0" />
        )}

        <div className="container relative z-10 mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-14 xl:px-20 2xl:px-24 w-full">
          
          {/* Mobile Hero Top Visual (Tree Image / Video) */}
          <div className="lg:hidden w-full relative mb-6 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#FF6B00]/40 shadow-[0_10px_35px_rgba(255,107,0,0.25)] bg-[#050B14]">
            {!showVideoMode ? (
              <img
                src="/img/cyber-tree.jpg"
                alt="Cyber Tree Security Visual"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl max-h-[360px] mx-auto"
              />
            ) : (
              <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/cybersecurity.mp4" type="video/mp4" />
                </video>
              </div>
            )}
          </div>

          <div className="grid items-center gap-8 lg:gap-10 lg:grid-cols-12">

            {/* -----------------------------------------------------------------
                LEFT COLUMN: Compact Typography & Feature Cards Grid
               ----------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-5 text-center lg:text-left select-text z-20 max-w-xl mx-auto lg:mx-0 w-full">
              <AnimatedReveal>
                <div className="space-y-5 sm:space-y-6 pr-0 lg:pr-2 flex flex-col items-center lg:items-start">

                  {/* Dedicated Black Background Panel behind text content ONLY on Mobile & Tablet (< 1024px) */}
                  <div className="w-full bg-black/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 shadow-2xl lg:bg-transparent lg:p-0 lg:border-none lg:shadow-none lg:backdrop-blur-none space-y-5 sm:space-y-6 flex flex-col items-center lg:items-start">
                    
                    {/* Shield engaged pill badge */}
                    <div className="flex items-center justify-center lg:justify-start">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF8C42]/40 bg-[#FF6B00]/15 text-[#FF8C42] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] backdrop-blur-md shadow-md">
                        <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-ping" />
                        ACIS Shield Engaged
                      </span>
                    </div>

                    {/* Responsive Typography Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.4rem] font-black leading-[1.08] tracking-[-0.04em] text-white drop-shadow-lg text-center lg:text-left">
                      Resilience by Design.<br />
                      <span className="orange-accent-gradient glow-text-orange">
                        Security Without Compromise.
                      </span>
                    </h1>

                    {/* Paragraph Subtext */}
                    <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base font-medium leading-relaxed text-gray-200 drop-shadow text-center lg:text-left px-1 sm:px-0">
                      Netcradus delivers executive cybersecurity advisory, AI-powered threat intelligence, and enterprise security frameworks.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start pt-1 w-full">
                      <Link
                        to="/contact"
                        className="btn-orange-override-primary w-full sm:w-auto px-8 py-3.5 text-white font-extrabold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-full shadow-lg hover:scale-105 transition-all text-center no-underline min-h-[48px] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                      >
                        <span>Get Consultation</span>
                        <ChevronRight size={18} />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setShowVideoMode(!showVideoMode)}
                        aria-label="Toggle between Hero Video and Cyber Tree Visual"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/30 bg-black/50 backdrop-blur-md hover:bg-black/70 text-gray-200 hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                      >
                        <Play size={16} className="fill-current text-white" />
                        <span>{showVideoMode ? "Show Cyber Tree Visual" : "Watch Hero Video"}</span>
                      </button>
                    </div>

                  </div>

                  {/* 2-Column Feature Cards Grid */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-2 sm:pt-4 w-full">
                    {featureCards.map((card, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/10 bg-[#08111F]/70 backdrop-blur-md hover:border-[#FF6B00]/40 transition-all shadow-md min-h-[56px] sm:min-h-[60px]"
                      >
                        {card.icon}
                        <span className="text-xs sm:text-sm font-bold text-white leading-tight text-left">
                          {card.title}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </AnimatedReveal>
            </div>

            {/* -----------------------------------------------------------------
                RIGHT COLUMN: Visual Container for Desktop Hero Video
               ----------------------------------------------------------------- */}
            <div className={`hidden lg:flex lg:col-span-6 xl:col-span-7 relative w-full items-center justify-center select-none mt-4 lg:mt-0 ${
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

