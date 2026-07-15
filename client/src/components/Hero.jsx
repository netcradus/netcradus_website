import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ShieldAlert, Cpu, Activity, Server, Monitor, Globe, Mail, Key } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import AnimatedReveal from "./ui/AnimatedReveal";

import "./Hero.css";

// Equally spaced modules configuration around a circle
const MODULES = [
  { id: "website", name: "Website", icon: Globe },
  { id: "cloud", name: "Cloud", icon: Server },
  { id: "api", name: "API Gateway", icon: Cpu },
  { id: "endpoint", name: "Endpoint", icon: Monitor },
  { id: "database", name: "Database", icon: Server },
  { id: "email", name: "Email", icon: Mail },
  { id: "identity", name: "Identity", icon: Key },
  { id: "firewall", name: "Firewall", icon: ShieldCheck },
  { id: "threat_intel", name: "Threat Intel", icon: ShieldAlert },
  { id: "siem", name: "SIEM", icon: Activity },
  { id: "soar", name: "SOAR", icon: Cpu },
];

export default function Hero() {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const containerRef = useRef(null);

  // Mouse Parallax coordinates
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      mouseRef.current.targetX = (clientX / width) - 0.5;
      mouseRef.current.targetY = (clientY / height) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Ambient Background & Perfect Circular AI Core loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const bgCanvas = bgCanvasRef.current;
    if (!canvas || !bgCanvas || !containerRef.current) return;

    const ctx = canvas.getContext("2d");
    const bgCtx = bgCanvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    let bgWidth = (bgCanvas.width = containerRef.current.clientWidth);
    let bgHeight = (bgCanvas.height = containerRef.current.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement || !containerRef.current) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;

      bgWidth = bgCanvas.width = containerRef.current.clientWidth;
      bgHeight = bgCanvas.height = containerRef.current.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Grid coordinates/particles
    let bgGridYOffset = 0;
    const orangeParticles = Array.from({ length: 45 }, () => ({
      x: Math.random() * bgWidth,
      y: Math.random() * bgHeight,
      size: Math.random() * 2 + 0.5,
      speedY: -(Math.random() * 0.12 + 0.04),
      opacity: Math.random() * 0.5 + 0.15,
    }));

    // Data packets travelling along connection routes
    let packets = [];

    // Core scanning wave time tracker
    let lastScanTime = 0;
    let scanWaveRadius = 0;

    // Rotation counter
    let globalRotation = 0;

    const draw = (timestamp) => {
      // 1. Render Dark Background with Orange and Blue Accents (NO PURPLE)
      bgCtx.clearRect(0, 0, bgWidth, bgHeight);

      // Core brand colors
      const brandOrange = "#FF6B00";
      const lightOrange = "#FF8C42";
      const glowOrange = "#FFB066";
      const electricBlue = "#3B82F6";

      // Dark background gradient
      const bgGrad = bgCtx.createLinearGradient(0, 0, bgWidth, bgHeight);
      bgGrad.addColorStop(0, "#0B1736");
      bgGrad.addColorStop(1, "#060A17");
      bgCtx.fillStyle = bgGrad;
      bgCtx.fillRect(0, 0, bgWidth, bgHeight);

      // Tech Grid
      bgCtx.strokeStyle = "rgba(255, 255, 255, 0.012)";
      bgCtx.lineWidth = 1;
      bgGridYOffset = (bgGridYOffset + 0.18) % 100;
      for (let x = 0; x < bgWidth; x += 100) {
        bgCtx.beginPath(); bgCtx.moveTo(x, 0); bgCtx.lineTo(x, bgHeight); bgCtx.stroke();
      }
      for (let y = bgGridYOffset; y < bgHeight; y += 100) {
        bgCtx.beginPath(); bgCtx.moveTo(0, y); bgCtx.lineTo(bgWidth, y); bgCtx.stroke();
      }

      // Glow spots (Orange and Blue only)
      const glowLeft = bgCtx.createRadialGradient(0, bgHeight, 10, 0, bgHeight, 450);
      glowLeft.addColorStop(0, "rgba(59, 130, 246, 0.08)"); // Electric Blue secondary accent
      glowLeft.addColorStop(1, "transparent");
      bgCtx.fillStyle = glowLeft;
      bgCtx.beginPath(); bgCtx.arc(0, bgHeight, 450, 0, Math.PI * 2); bgCtx.fill();

      const glowRight = bgCtx.createRadialGradient(bgWidth, 0, 10, bgWidth, 0, 450);
      glowRight.addColorStop(0, "rgba(255, 107, 0, 0.07)"); // NetCradus Brand Orange
      glowRight.addColorStop(1, "transparent");
      bgCtx.fillStyle = glowRight;
      bgCtx.beginPath(); bgCtx.arc(bgWidth, 0, 450, 0, Math.PI * 2); bgCtx.fill();

      // Floating particles (Orange)
      orangeParticles.forEach((p) => {
        p.y += p.speedY;
        if (p.y < 0) p.y = bgHeight;
        bgCtx.fillStyle = `rgba(255, 107, 0, ${p.opacity})`;
        bgCtx.beginPath();
        bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        bgCtx.fill();
      });

      // 2. Render AI network canvas
      ctx.clearRect(0, 0, width, height);

      // Damp mouse parallax values
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2 + Math.sin(timestamp * 0.001) * 10; // smooth vertical float

      const coreX = centerX + mouseRef.current.x * 50;
      const coreY = centerY + mouseRef.current.y * 50;

      // 2.1 Draw Orange Holographic rings around the Core
      // Rotating ring 1
      ctx.save();
      ctx.translate(coreX, coreY);
      ctx.rotate(timestamp * 0.0001);
      ctx.strokeStyle = "rgba(255, 107, 0, 0.18)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([12, 28, 4, 12]);
      ctx.beginPath(); ctx.arc(0, 0, 110, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();

      // Rotating ring 2
      ctx.save();
      ctx.translate(coreX, coreY);
      ctx.rotate(-timestamp * 0.00015);
      ctx.strokeStyle = "rgba(255, 140, 66, 0.22)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([30, 20, 10, 10]);
      ctx.beginPath(); ctx.arc(0, 0, 85, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();

      // Outer revolving electron guide ring
      ctx.save();
      ctx.translate(coreX, coreY);
      ctx.rotate(timestamp * 0.00005);
      ctx.strokeStyle = "rgba(255, 107, 0, 0.06)";
      ctx.lineWidth = 1;
      ctx.setLineDash([40, 30]);
      ctx.beginPath(); ctx.arc(0, 0, 230, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();

      // Pulsing AI Core Ball
      const corePulse = Math.sin(timestamp * 0.0022) * 0.08 + 1.0;
      const coreGrad = ctx.createRadialGradient(coreX, coreY, 2, coreX, coreY, 48 * corePulse);
      coreGrad.addColorStop(0, glowOrange);
      coreGrad.addColorStop(0.4, brandOrange);
      coreGrad.addColorStop(1, "transparent");

      ctx.save();
      ctx.shadowBlur = 32 * corePulse;
      ctx.shadowColor = brandOrange;
      ctx.fillStyle = coreGrad;
      ctx.beginPath(); ctx.arc(coreX, coreY, 48 * corePulse, 0, Math.PI * 2); ctx.fill();
      ctx.restore();

      // 2.2 Arrange all nodes in a perfect circular guides orbit & project
      globalRotation += 0.0025; // clockwise rotation speed
      const radius = 230; // perfect circle orbit guide
      const nodeCount = MODULES.length;

      const projectedNodes = MODULES.map((m, idx) => {
        // Equal spacing angle offset
        const baseAngle = (idx * Math.PI * 2) / nodeCount;
        const currentAngle = baseAngle + globalRotation;

        // Position guide
        const nx = Math.cos(currentAngle) * radius;
        const ny = Math.sin(currentAngle) * radius;

        // Slight 3D tilted plane projection for high-end aesthetic
        const tiltAngle = Math.PI / 12; // tilt slightly
        const screenX = coreX + nx;
        const screenY = coreY + ny * Math.cos(tiltAngle);

        return {
          ...m,
          x: screenX,
          y: screenY,
          angle: currentAngle,
        };
      });

      // 2.3 Draw orange connection line beams
      projectedNodes.forEach((n) => {
        const beamGrad = ctx.createLinearGradient(coreX, coreY, n.x, n.y);
        beamGrad.addColorStop(0, "rgba(255, 107, 0, 0.28)");
        beamGrad.addColorStop(0.6, "rgba(255, 140, 66, 0.12)");
        beamGrad.addColorStop(1, "rgba(255, 176, 102, 0.02)");

        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(coreX, coreY);
        ctx.lineTo(n.x, n.y);
        ctx.stroke();

        // Also draw lines connecting nodes sequentially to outline the orbit path
      });

      // Draw orbit outline connecting adjacent nodes
      ctx.strokeStyle = "rgba(255, 107, 0, 0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      projectedNodes.forEach((n, idx) => {
        if (idx === 0) ctx.moveTo(n.x, n.y);
        else ctx.lineTo(n.x, n.y);
      });
      ctx.closePath();
      ctx.stroke();

      // 2.4 Emit Orange Scanning Wave every 3 seconds
      if (timestamp - lastScanTime > 3000) {
        lastScanTime = timestamp;
        scanWaveRadius = 0;
      }
      scanWaveRadius += 2.2;
      if (scanWaveRadius <= 280) {
        ctx.save();
        ctx.strokeStyle = `rgba(255, 107, 0, ${0.2 * (1 - scanWaveRadius / 280)})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.arc(coreX, coreY, scanWaveRadius, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
      }

      // 2.5 Generate & Draw active data packets along beams
      if (Math.random() < 0.08 && projectedNodes.length > 0) {
        const targetNode = projectedNodes[Math.floor(Math.random() * projectedNodes.length)];
        packets.push({
          targetX: targetNode.x,
          targetY: targetNode.y,
          progress: 0,
          speed: Math.random() * 0.016 + 0.009,
          color: Math.random() > 0.45 ? brandOrange : electricBlue,
        });
      }

      packets = packets.filter((p) => p.progress < 1);
      packets.forEach((p) => {
        p.progress += p.speed;
        const currentX = coreX + (p.targetX - coreX) * p.progress;
        const currentY = coreY + (p.targetY - coreY) * p.progress;

        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(currentX, currentY, 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 2.6 Draw dynamic pulsing nodes around the guide circle
      projectedNodes.forEach((n) => {
        const size = 7.5;
        const pulse = Math.sin(timestamp * 0.0028 + n.x) * 0.14 + 1.0;

        ctx.save();
        ctx.shadowBlur = 10 * pulse;
        ctx.shadowColor = brandOrange;

        // Outer pulsing ring
        ctx.strokeStyle = brandOrange;
        ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.arc(n.x, n.y, (size + 3) * pulse, 0, Math.PI * 2); ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath(); ctx.arc(n.x, n.y, size, 0, Math.PI * 2); ctx.fill();
        ctx.restore();

        // Node labels
        ctx.font = '600 10.5px "Inter", sans-serif';
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.textAlign = "center";
        ctx.fillText(n.name, n.x, n.y + (size + 15));
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  // CSS Glow text and brand orange buttons overriding styling
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
    /* Brand Orange Buttons Overrides to avoid any purple */
    .btn-orange-override-primary {
      background: linear-gradient(to right, #FF6B00, #FF8C42) !important;
      border: none !important;
    }
    .btn-orange-override-primary:hover {
      box-shadow: 0 0 20px rgba(255, 107, 0, 0.45) !important;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>

      <section
        ref={containerRef}
        className="hero hero-shell relative overflow-hidden flex items-center min-h-[92vh] z-10"
      >
        {/* Ambient Grid & Glow Background */}
        <canvas ref={bgCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

        <div className="container relative z-10 mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-14 xl:px-20 2xl:px-24 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12 xl:gap-20 2xl:gap-24">
            
            {/* LEFT SIDE: Minimal content (40% width) */}
            <div className="lg:col-span-5 text-center lg:text-left select-text">
              <AnimatedReveal>
                <div className="space-y-8 pr-0 lg:pr-4">
                  
                  {/* Shield engaged pill badge */}
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF8C42]/20 bg-[#FF6B00]/10 text-[#FF8C42] text-[10px] font-black uppercase tracking-[0.25em]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-ping" />
                    ACIS Shield Engaged
                  </span>

                  {/* Main Typography Title */}
                  <h1 className="text-[clamp(2.4rem,5.2vw,4.2rem)] font-black leading-[1.02] tracking-[-0.04em] text-white">
                    AI-Powered <br />
                    <span className="orange-accent-gradient glow-text-orange">
                      Cybersecurity
                    </span> <br />
                    Platform
                  </h1>

                  {/* Subtext */}
                  <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-300">
                    Secure Everything. Detect Faster.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
                    <Link
                      to="/contact"
                      className="btn-orange-override-primary w-full sm:w-auto px-9 py-4 text-white font-extrabold text-xs uppercase tracking-[0.2em] rounded-full shadow-lg hover:scale-105 transition-all text-center no-underline"
                    >
                      Get Free Consultation
                    </Link>
                  </div>

                </div>
              </AnimatedReveal>
            </div>

            {/* RIGHT SIDE: Large Perfect Circular guide AI constellation (60% width) */}
            <div className="lg:col-span-7 relative w-full h-[580px] lg:h-[650px] flex items-center justify-center select-none overflow-visible">
              <canvas ref={canvasRef} className="w-full h-full pointer-events-none z-10" />
            </div>

          </div>
        </div>

        {/* Glossy bottom divider line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />
      </section>
    </>
  );
}
