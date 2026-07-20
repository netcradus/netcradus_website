import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radar,
  Shield,
  ShieldAlert,
  Bug,
  Lock,
  ClipboardCheck,
  Award,
  Check,
  ArrowRight,
} from "lucide-react";

const MotionLink = motion(Link);

// Particle animation component for the background
const BackgroundParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles on client-side to avoid SSR issues
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -20,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#FF6B00]/20 blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.7, 0.1],
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

// Floating Network Nodes inside the background
const NetworkBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Generate nodes on mount
    const generatedNodes = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 3,
      duration: Math.random() * 12 + 10,
    }));

    // Generate connections between nearby nodes
    const generatedConnections = [];
    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        // Calculate raw distance (approximation since they move)
        const dist = Math.hypot(
          generatedNodes[i].x - generatedNodes[j].x,
          generatedNodes[i].y - generatedNodes[j].y
        );
        if (dist < 25) {
          generatedConnections.push({
            id: `${i}-${j}`,
            from: i,
            to: j,
          });
        }
      }
    }
    setNodes(generatedNodes);
    setConnections(generatedConnections);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full opacity-[0.06]">
        {connections.map((c) => {
          const fromNode = nodes.find((n) => n.id === c.from);
          const toNode = nodes.find((n) => n.id === c.to);
          if (!fromNode || !toNode) return null;
          return (
            <motion.line
              key={c.id}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="#0B132B"
              strokeWidth="0.75"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </svg>
      {nodes.map((n) => (
        <motion.div
          key={n.id}
          className="absolute rounded-full border border-navy bg-[#FF6B00]/40 shadow-[0_0_8px_rgba(255,107,0,0.5)]"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: `${n.size}px`,
            height: `${n.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 15 - 7.5, 0],
            y: [0, Math.random() * 15 - 7.5, 0],
          }}
          transition={{
            duration: n.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function CybersecurityConsulting() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Custom styling block for animations and styles
  const styles = `
    .glass-card-light {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 107, 0, 0.08);
      box-shadow: 0 10px 30px -10px rgba(11, 19, 43, 0.04), 0 1px 1px rgba(0, 0, 0, 0.02);
    }
    
    .glass-card-light:hover {
      background: rgba(255, 255, 255, 0.95);
      border-color: rgba(255, 107, 0, 0.25);
      box-shadow: 0 20px 40px -15px rgba(255, 107, 0, 0.12), 0 0 15px rgba(255, 107, 0, 0.05);
    }
    
    .hex-bg {
      background-size: 56px 65px;
      background-image: 
        radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.02) 1px, transparent 1px),
        linear-gradient(30deg, rgba(11, 19, 43, 0.005) 25%, transparent 25%), 
        linear-gradient(150deg, rgba(11, 19, 43, 0.005) 25%, transparent 25%), 
        linear-gradient(270deg, rgba(11, 19, 43, 0.005) 25%, transparent 25%), 
        linear-gradient(330deg, rgba(11, 19, 43, 0.005) 25%, transparent 25%), 
        linear-gradient(90deg, rgba(11, 19, 43, 0.005) 25%, transparent 25%);
    }

    .shimmer-effect {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 107, 0, 0.08) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 200% 100%;
      animation: shimmerAnim 3s infinite linear;
    }

    @keyframes shimmerAnim {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    .cyber-grid-overlay {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(11, 19, 43, 0.015) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(11, 19, 43, 0.015) 1px, transparent 1px);
    }

    .btn-shimmer {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translateX(-100%);
    }
    .group:hover .btn-shimmer {
      animation: btnShimmerAnim 1.4s infinite ease-in-out;
    }
    @keyframes btnShimmerAnim {
      100% { transform: translateX(100%); }
    }
  `;

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden z-10 select-none border-b border-gray-100">
      <style>{styles}</style>

      {/* Hexagon and Grid Overlay background */}
      <div className="absolute inset-0 hex-bg pointer-events-none z-0" />
      <div className="absolute inset-0 cyber-grid-overlay pointer-events-none z-0" />

      {/* Radial glows */}
      <div className="absolute top-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-[#FF6B00]/4 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] h-[600px] w-[600px] rounded-full bg-[#0B132B]/3 blur-[140px] pointer-events-none" />

      <BackgroundParticles />
      <NetworkBackground />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/5 border border-[#FF6B00]/15 mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
              Expert Advisory
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5.5xl font-black font-display tracking-tight text-[#0B132B] mb-6 leading-[1.05]"
          >
            Secure Everything. <br />
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#E05300] bg-clip-text text-transparent">
              Detect Faster.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed text-gray-600 font-sans max-w-2xl mx-auto"
          >
            Netcradus delivers board-level cybersecurity consulting, threat intelligence, and digital defense frameworks designed to mitigate systemic risk, satisfy rigorous regulatory compliance, and safeguard critical infrastructure for global enterprises.
          </motion.p>
        </div>

        {/* 2-Column responsive grid (3x2 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          
          {/* Card 1: Comprehensive Threat Landscape Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-card-light group rounded-[24px] p-8 relative overflow-hidden transition-all duration-500 border-t-4 border-t-[#FF6B00]/40 hover:border-t-[#FF6B00] flex flex-col justify-between min-h-[280px]"
          >
            {/* Animated Radar pulse behind icon */}
            <div className="absolute top-8 left-8 w-14 h-14 pointer-events-none flex items-center justify-center">
              <AnimatePresence>
                {(hoveredCard === 1 || true) && (
                  <>
                    <motion.div
                      className="absolute rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/5"
                      initial={{ width: 40, height: 40, opacity: 0.8 }}
                      animate={{ width: 90, height: 90, opacity: 0 }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/3"
                      initial={{ width: 40, height: 40, opacity: 0.6 }}
                      animate={{ width: 130, height: 130, opacity: 0 }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
                    />
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FF6B00]/10 to-[#FF6B00]/20 border border-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mb-8 relative">
                <Radar className="h-7 w-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-4 group-hover:text-[#FF6B00] transition-colors duration-300">
                Comprehensive Threat Landscape Assessment & Risk Profiling
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-sans">
                Expose perimeter vulnerabilities and discover active vulnerabilities through professional <span className="text-[#FF6B00] font-semibold">Risk Assessment</span> modeling. We deliver board-ready risk profiling to help your security team prioritize assets, evaluate attack surfaces, and proactively eliminate exposure vectors.
              </p>
            </div>

            {/* Hover bottom underline */}
            <div className="relative w-full h-1 mt-6 overflow-hidden bg-gray-100 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#FF6B00]"
                initial={{ width: 0 }}
                animate={{ width: hoveredCard === 1 ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Card 2: Penetration Testing & Vulnerability Management */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-card-light group rounded-[24px] p-8 relative overflow-hidden transition-all duration-500 border-t-4 border-t-[#FF6B00]/40 hover:border-t-[#FF6B00] flex flex-col justify-between min-h-[280px]"
            animate={hoveredCard === 2 ? { y: -8 } : { y: 0 }}
          >
            {/* Content Top */}
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FF6B00]/10 to-[#FF6B00]/20 border border-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mb-8 overflow-hidden relative">
                
                {/* Shield Scanning Line Animation */}
                <motion.div
                  className="absolute inset-x-0 h-[2px] bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <Bug className="h-7 w-7 z-10" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-4 group-hover:text-[#FF6B00] transition-colors duration-300">
                Penetration Testing & Vulnerability Management
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-sans">
                Simulate advanced adversarial threat vectors against your corporate networks, APIs, and software. Our actionable validation and continuous assessments empower your team with concrete remediation pathways and live <span className="text-[#FF6B00] font-semibold">Threat Intelligence</span> mapping.
              </p>
            </div>

            {/* Progress Bar fills on hover */}
            <div className="mt-6">
              <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                <span>Vulnerability Mitigation Index</span>
                <span className="font-bold text-[#FF6B00]">
                  {hoveredCard === 2 ? "100%" : "35%"}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF6B00] to-[#E05300]"
                  initial={{ width: "35%" }}
                  animate={{ width: hoveredCard === 2 ? "100%" : "35%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Zero Trust Architecture Design & Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-card-light group rounded-[24px] p-8 relative overflow-hidden transition-all duration-500 border-t-4 border-t-[#FF6B00]/40 hover:border-t-[#FF6B00] flex flex-col justify-between min-h-[280px]"
            style={hoveredCard === 3 ? { boxShadow: "0 0 20px rgba(255, 107, 0, 0.15)" } : {}}
          >
            {/* Content Top */}
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FF6B00]/10 to-[#FF6B00]/20 border border-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mb-8 relative">
                
                {/* Lock network background nodes animation */}
                <svg className="absolute inset-0 w-full h-full opacity-60">
                  <motion.circle cx="15%" cy="15%" r="1.5" fill="#FF6B00" animate={{ scale: [1, 1.8, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.circle cx="85%" cy="15%" r="1.5" fill="#FF6B00" animate={{ scale: [1.8, 1, 1.8] }} transition={{ duration: 2.5, repeat: Infinity }} />
                  <motion.circle cx="85%" cy="85%" r="1.5" fill="#FF6B00" animate={{ scale: [1, 2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
                  <motion.line x1="15%" y1="15%" x2="50%" y2="50%" stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="2 2" />
                  <motion.line x1="85%" y1="15%" x2="50%" y2="50%" stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="2 2" />
                  <motion.line x1="85%" y1="85%" x2="50%" y2="50%" stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>

                <motion.div
                  animate={hoveredCard === 3 ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ duration: 0.8, repeat: hoveredCard === 3 ? Infinity : 0 }}
                >
                  <Lock className="h-6 w-6 z-10 relative" />
                </motion.div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-4 group-hover:text-[#FF6B00] transition-colors duration-300">
                Zero Trust Architecture Design & Implementation
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-sans">
                Enforce granular identity validation and micro-segment hybrid networks to secure data resources. We design modern enterprise-wide <span className="text-[#FF6B00] font-semibold">Zero Trust</span> frameworks to isolate lateral movement, restrict privilege creep, and defend critical applications.
              </p>
            </div>

            {/* Hover bottom underline */}
            <div className="relative w-full h-1 mt-6 overflow-hidden bg-gray-100 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#FF6B00]"
                initial={{ width: 0 }}
                animate={{ width: hoveredCard === 3 ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Card 4: Security Policy Development & Governance Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-card-light group rounded-[24px] p-8 relative overflow-hidden transition-all duration-500 border-t-4 border-t-[#FF6B00]/40 hover:border-t-[#FF6B00] flex flex-col justify-between min-h-[280px]"
          >
            {/* Soft floating particles on hover inside the card */}
            <AnimatePresence>
              {hoveredCard === 4 && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`card4-p-${i}`}
                      className="absolute h-1.5 w-1.5 rounded-full bg-[#FF6B00]/25"
                      style={{
                        bottom: "20px",
                        left: `${15 + i * 10}%`,
                      }}
                      animate={{
                        y: [-20, -180],
                        opacity: [0, 0.8, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* Content Top */}
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FF6B00]/10 to-[#FF6B00]/20 border border-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mb-8 relative overflow-hidden">
                <motion.div
                  animate={hoveredCard === 4 ? { y: [-2, -6, -2] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ClipboardCheck className="h-7 w-7" />
                </motion.div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-4 group-hover:text-[#FF6B00] transition-colors duration-300">
                Security Policy Development & Governance Frameworks
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-sans">
                Develop executive-grade internal security blueprints aligned to international operational standards. We implement resilient security <span className="text-[#FF6B00] font-semibold">Governance</span> structures that scale with corporate growth, define accountability, and protect assets.
              </p>
            </div>

            {/* Hover bottom checkmarks indicator */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-400">
              <motion.span
                animate={hoveredCard === 4 ? { color: "#FF6B00" } : {}}
              >
                Framework Alignment:
              </motion.span>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((tick) => (
                  <motion.div
                    key={tick}
                    className="h-4 w-4 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center"
                    animate={hoveredCard === 4 ? { scale: [1, 1.2, 1], backgroundColor: "rgba(255, 107, 0, 0.1)", color: "#FF6B00" } : {}}
                    transition={{ delay: tick * 0.12 }}
                  >
                    <Check className="h-2.5 w-2.5" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 5: Incident Response Planning & Forensic Readiness */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-card-light group rounded-[24px] p-8 relative overflow-hidden transition-all duration-500 border-t-4 border-t-[#FF6B00]/40 hover:border-t-[#FF6B00] flex flex-col justify-between min-h-[280px]"
          >
            {/* Content Top */}
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FF6B00]/10 to-[#FF6B00]/20 border border-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mb-8 relative">
                
                {/* Flashing beacon */}
                <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                
                <ShieldAlert className="h-7 w-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-4 group-hover:text-[#FF6B00] transition-colors duration-300">
                Incident Response Planning & Forensic Readiness
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-sans">
                Establish proactive breach response execution pathways, playbooks, and containment automation protocols. Our certified experts ensure forensic readiness to accelerate breach containment, coordinate public response, and streamline <span className="text-[#FF6B00] font-semibold">Incident Response</span> cycles.
              </p>
            </div>

            {/* Timeline draws itself inside card on hover */}
            <div className="mt-6 relative h-4 w-full flex items-center justify-between">
              <div className="absolute left-0 right-0 h-[1.5px] bg-gray-100 z-0">
                <motion.div
                  className="h-full bg-[#FF6B00]"
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredCard === 5 ? "100%" : "0%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
              {[1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  className="h-3.5 w-3.5 rounded-full border-2 border-white z-10 relative shadow-sm"
                  animate={{
                    backgroundColor: hoveredCard === 5 ? "#FF6B00" : "#d1d5db",
                    scale: hoveredCard === 5 ? 1.25 : 1,
                  }}
                  transition={{ delay: step * 0.18 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Card 6: Compliance Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-card-light group rounded-[24px] p-8 relative overflow-hidden transition-all duration-500 border-t-4 border-t-[#FF6B00]/40 hover:border-t-[#FF6B00] flex flex-col justify-between min-h-[280px]"
          >
            {/* Shimmer gradient moving on hover */}
            {hoveredCard === 6 && (
              <div className="absolute inset-0 shimmer-effect opacity-80 pointer-events-none z-0" />
            )}

            {/* Content Top */}
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FF6B00]/10 to-[#FF6B00]/20 border border-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mb-8 relative">
                <motion.div
                  animate={hoveredCard === 6 ? { rotate: [0, 15, -15, 0] } : { rotate: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Award className="h-7 w-7" />
                </motion.div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-2 group-hover:text-[#FF6B00] transition-colors duration-300">
                Compliance Alignment
              </h3>
              
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF6B00] mb-4 uppercase">
                ISO/IEC 27001:2022 • GDPR • CERT-In • NIST
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-sans">
                Simplify the regulatory pathway and audit overhead with standardized gap analysis. We map security controls to guarantee rapid <span className="text-[#FF6B00] font-semibold">Compliance</span> alignment with global data protection mandates and industry-specific regulations.
              </p>
            </div>

            {/* Hover bottom underline */}
            <div className="relative w-full h-1 mt-6 overflow-hidden bg-gray-100 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#FF6B00]"
                initial={{ width: 0 }}
                animate={{ width: hoveredCard === 6 ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

        </div>

        {/* Animated Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto text-center border-y border-gray-100 py-12">
          {[
            { value: "500+", label: "Security Assessments" },
            { value: "24×7", label: "SOC Monitoring" },
            { value: "99.9%", label: "Threat Detection" },
            { value: "50+", label: "Enterprise Clients" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-2 group"
            >
              <div className="text-3xl sm:text-5xl font-black font-display text-[#0B132B] group-hover:text-[#FF6B00] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-gray-500 uppercase font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
