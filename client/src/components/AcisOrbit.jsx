import React from "react";
import { motion } from "framer-motion";
import "./AcisOrbit.css";

const OrbitRing = ({ size, duration, reverse = false, children, className = "" }) => (
  <motion.div
    className={`orbit-ring ${className}`}
    style={{ width: size, height: size }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  >
    {children}
  </motion.div>
);

const OrbitDot = ({ angle, radius, tone = "primary" }) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className={`orbit-dot tone-${tone}`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    />
  );
};

const StaticBadge = ({ label, angle, radius, tone = "primary" }) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className={`static-badge tone-${tone}`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    >
      <span className="mono">{label}</span>
    </div>
  );
};

export default function AcisOrbit() {
  return (
    <div className="acis-orbit-container">
      <div className="orbit-grid" />
      <div className="orbit-ambient-glow" />

      {/* Core */}
      <div className="orbit-core">
        <motion.div
          className="core-pulse"
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="core-sphere">
          <div className="core-text mono">ACIS CORE</div>
        </div>
      </div>

      {/* BADGES (reduced radius) */}
      <StaticBadge label="THREAT DETECT" angle={-90} radius={220} tone="violet" />
      <StaticBadge label="AI ENGINE" angle={-25} radius={220} tone="pink" />
      <StaticBadge label="AUTO HEAL" angle={25} radius={220} tone="orange" />
      <StaticBadge label="ZERO TRUST" angle={90} radius={220} tone="violet" />
      <StaticBadge label="INTEL FEED" angle={155} radius={220} tone="pink" />
      <StaticBadge label="MESH NET" angle={205} radius={220} tone="orange" />

      {/* SMALLER ORBITS */}
      <OrbitRing size={180} duration={18} className="ring-inner">
        <OrbitDot angle={320} radius={90} tone="orange" />
      </OrbitRing>

      <OrbitRing size={300} duration={28} reverse className="ring-middle">
        <OrbitDot angle={330} radius={150} tone="orange" />
        <OrbitDot angle={150} radius={150} tone="pink" />
      </OrbitRing>

      <OrbitRing size={420} duration={40} className="ring-outer">
        <OrbitDot angle={210} radius={210} tone="violet" />
      </OrbitRing>
    </div>
  );
}