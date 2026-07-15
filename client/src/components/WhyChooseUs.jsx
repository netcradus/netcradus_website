import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Radar,
  Lock,
  Activity,
  ShieldCheck,
  Server,
  Bell,
  Users,
  Cpu,
  ShieldAlert,
  Globe,
  BrainCircuit,
} from "lucide-react";

const FEATURES_DATA = [
  // Left Side (from top to bottom)
  { title: "24/7 SOC & SIEM Monitoring", icon: Shield, angle: -135, side: "left" },
  { title: "Global Business Security Expertise", icon: Globe, angle: -155, side: "left" },
  { title: "AI-Powered Security Operations", icon: BrainCircuit, angle: -175, side: "left" },
  { title: "VAPT & Vulnerability Assessment", icon: ShieldCheck, angle: 165, side: "left" },
  { title: "Protection Against Modern Cyber Threats", icon: ShieldAlert, angle: 145, side: "left" },
  { title: "Real-Time Threat Monitoring", icon: Cpu, angle: 125, side: "left" },
  
  // Right Side (from top to bottom)
  { title: "Advanced Threat Detection", icon: Radar, angle: -45, side: "right" },
  { title: "Enterprise-Grade Cybersecurity Solutions", icon: Lock, angle: -25, side: "right" },
  { title: "Proactive Cyber Defense Approach", icon: Activity, angle: -5, side: "right" },
  { title: "End-to-End Digital Protection", icon: Shield, angle: 15, side: "right" },
  { title: "Cloud & Network Security Solutions", icon: Server, angle: 35, side: "right" },
  { title: "Fast Incident Response & Risk Management", icon: Bell, angle: 55, side: "right" },
  
  // Bottom Center
  { title: "Trusted Partner for Digital Resilience", icon: Users, angle: 90, side: "bottom" },
];

const BackgroundParticles = () => {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * -20,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#FF6B00]/15"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [orbitRadius, setOrbitRadius] = useState(440);
  const [coreDiameter, setCoreDiameter] = useState(400);

  // Responsive adjustments for the Orbit radius & Core size to prevent overflow
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setOrbitRadius(250);
        setCoreDiameter(230);
      } else if (w < 1024) {
        setOrbitRadius(320);
        setCoreDiameter(280);
      } else if (w < 1440) {
        setOrbitRadius(390);
        setCoreDiameter(340);
      } else {
        setOrbitRadius(440);
        setCoreDiameter(400); // reduced by ~20% (was 480px)
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Mouse movement for subtle Parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x: x * 25, y: y * 25 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const coreRadius = coreDiameter / 2;

  // Custom visual CSS rules
  const customStyles = `
    @keyframes coreSpinClockwise {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
    @keyframes coreSpinCounter {
      0% { transform: translate(-50%, -50%) rotate(360deg); }
      100% { transform: translate(-50%, -50%) rotate(0deg); }
    }
    @keyframes coreWavePulse {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 0.65; }
      100% { transform: translate(-50%, -50%) scale(1.25); opacity: 0; }
    }
    @keyframes chooseFloat1 {
      0%, 100% { transform: translate(-50%, -50%) translateY(0); }
      50% { transform: translate(-50%, -50%) translateY(-6px); }
    }
    @keyframes chooseFloat2 {
      0%, 100% { transform: translate(-50%, -50%) translateY(0); }
      50% { transform: translate(-50%, -50%) translateY(-4px); }
    }
    .animate-spin-cw {
      animation: coreSpinClockwise 32s linear infinite;
    }
    .animate-spin-ccw {
      animation: coreSpinCounter 38s linear infinite;
    }
    .animate-pulse-wave {
      animation: coreWavePulse 4.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
    }
    .hover-card-sweep:hover {
      box-shadow: 0 0 25px rgba(255, 107, 0, 0.35);
      border-color: rgba(255, 107, 0, 0.5);
      background: rgba(0, 0, 0, 0.7);
    }
  `;

  // Calculate coordinates for connection lines mapping to each card's inner dot
  const getCardLayoutProps = (feat) => {
    let r = orbitRadius;
    if (feat.side === "bottom") {
      r = orbitRadius + 50; // Push bottom card down slightly to prevent overlaps
    }
    const angleRad = (feat.angle * Math.PI) / 180;
    const x = Math.cos(angleRad) * r;
    const y = Math.sin(angleRad) * r;

    // Relative center of SVG coordinates is 600
    const centerX = 600;
    const centerY = 600;

    const startX = centerX + Math.cos(angleRad) * coreRadius;
    const startY = centerY + Math.sin(angleRad) * coreRadius;

    // Card dimensions: width = 240px, height = 60px
    let dotX = centerX + x;
    let dotY = centerY + y;

    if (feat.side === "left") {
      dotX += 120; // right edge of left card
    } else if (feat.side === "right") {
      dotX -= 120; // left edge of right card
    } else if (feat.side === "bottom") {
      dotY -= 30;  // top edge of bottom card
    }

    return { x, y, startX, startY, dotX, dotY };
  };

  return (
    <section
      id="why-netcradus"
      ref={containerRef}
      className="relative w-full py-40 overflow-hidden flex items-center justify-center min-h-[1250px] lg:min-h-[1400px] z-10 select-none"
      style={{
        background: "radial-gradient(circle at 50% 50%, #111827 0%, #070B13 60%, #030509 100%)",
      }}
    >
      <style>{customStyles}</style>
      <BackgroundParticles />

      {/* Ambient background glowing spots */}
      <div className="absolute top-[15%] left-[15%] h-[400px] w-[400px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[15%] h-[450px] w-[450px] rounded-full bg-[#FF6B00]/4 blur-[130px] pointer-events-none" />

      {/* Parallax coordinate wrapper for absolute centered items */}
      <div
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        {/* SVG connection lines - inside the parallax container to lock alignment */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none z-10 flex items-center justify-center overflow-visible">
          <svg className="w-full h-full overflow-visible">
            {/* 360-degree decorative sun rays (spikes) all around the core circumference */}
            {Array.from({ length: 36 }).map((_, i) => {
              const angleDeg = i * (360 / 36);
              const angleRad = (angleDeg * Math.PI) / 180;
              const centerX = 600;
              const centerY = 600;

              // Vary lengths slightly for a natural, premium solar aesthetic
              const rayLength = 15 + (i % 3 === 0 ? 15 : 0) + (i % 2 === 0 ? 5 : 0);
              
              const startX = centerX + Math.cos(angleRad) * coreRadius;
              const startY = centerY + Math.sin(angleRad) * coreRadius;
              const endX = centerX + Math.cos(angleRad) * (coreRadius + rayLength);
              const endY = centerY + Math.sin(angleRad) * (coreRadius + rayLength);

              const showDot = i % 4 === 0;

              return (
                <g key={`decorative-ray-${i}`}>
                  <line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke="rgba(255, 107, 0, 0.35)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  {showDot && (
                    <circle
                      cx={endX}
                      cy={endY}
                      r="1.2"
                      fill="#FF6B00"
                      opacity="0.85"
                      style={{ filter: "drop-shadow(0 0 2px #FF6B00)" }}
                    />
                  )}
                </g>
              );
            })}

            {FEATURES_DATA.map((feat, idx) => {
              const { startX, startY, dotX, dotY } = getCardLayoutProps(feat);

              return (
                <g key={idx}>
                  {/* Thin static connection beam */}
                  <line
                    x1={startX}
                    y1={startY}
                    x2={dotX}
                    y2={dotY}
                    stroke="rgba(255, 107, 0, 0.22)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />

                  {/* Flowing animated light particles travelling center -> card */}
                  <circle r="2.5" fill="#FF6B00" style={{ filter: "drop-shadow(0 0 4px #FF6B00)" }}>
                    <animate
                      attributeName="cx"
                      from={startX}
                      to={dotX}
                      dur="3.2s"
                      begin={`${idx * 0.25}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      from={startY}
                      to={dotY}
                      dur="3.2s"
                      begin={`${idx * 0.25}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.1;0.9;1"
                      dur="3.2s"
                      begin={`${idx * 0.25}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>


        {/* CENTER: Large premium circular glass hub */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6B00]/50 shadow-[0_0_60px_rgba(255,107,0,0.42),inset_0_0_60px_rgba(59,130,246,0.22)] flex flex-col items-center justify-center p-10 text-center relative z-20 pointer-events-auto select-text"
          style={{
            width: `${coreDiameter}px`,
            height: `${coreDiameter}px`,
            background: "radial-gradient(circle, rgba(4, 6, 12, 0.99) 0%, rgba(2, 3, 6, 1) 100%)",
          }}
        >
          {/* Subtle concentric inner rings */}
          <div className="absolute inset-4 rounded-full border border-[#FF6B00]/8 pointer-events-none" />
          <div className="absolute inset-8 rounded-full border border-[#FF6B00]/4 pointer-events-none" />

          {/* Core content */}
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-2.5">
            Choose Netcradus
          </span>
          
          <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-3.5 tracking-tight uppercase leading-tight max-w-[270px] font-sans">
            Why Should Clients <br />
            Choose Netcradus
          </h2>

          <div className="border border-[#FF6B00]/45 bg-[#FF6B00]/12 h-7 w-11 flex items-center justify-center rounded text-[11px] font-black text-[#FF6B00] mb-4">
            01
          </div>

          <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed max-w-[265px]">
            A managed security partner built for organizations that need enterprise-grade defense, round-the-clock visibility, and business-aware execution.
          </p>
        </div>

        {/* Orbiting feature glass cards positioned symmetrically */}
        {FEATURES_DATA.map((feat, idx) => {
          const { x, y } = getCardLayoutProps(feat);
          const Icon = feat.icon;

          const floatDelay = `${idx * 0.4}s`;
          const floatAnim = idx % 2 === 0 ? "chooseFloat1" : "chooseFloat2";

          return (
            <div
              key={feat.title}
              className="absolute z-20 overflow-visible pointer-events-auto"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animation: `${floatAnim} 6.5s ease-in-out infinite`,
                animationDelay: floatDelay,
              }}
            >
              <div className="hover-card-sweep relative flex items-center gap-3 backdrop-blur-xl border border-white/8 bg-black/55 shadow-[0_15px_35px_rgba(0,0,0,0.45)] rounded-[18px] px-4.5 py-3.5 select-none cursor-pointer transition-all duration-300 w-[215px] sm:w-[240px] hover:border-[#FF6B00]/50 hover:shadow-[0_0_25px_rgba(255,107,0,0.35)]">
                {/* Connecting Dot Indicator */}
                {feat.side === "left" && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00] z-30" />
                )}
                {feat.side === "right" && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00] z-30" />
                )}
                {feat.side === "bottom" && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00] z-30" />
                )}

                {/* Icon box */}
                <div className="h-9 w-9 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] flex items-center justify-center flex-shrink-0">
                  <Icon size={16} />
                </div>
                {/* Title */}
                <div className="text-[10px] sm:text-xs font-extrabold text-white text-left leading-snug">
                  {feat.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
