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

      {/* Center Core */}
      <div className="orbit-core">
        <motion.div
          className="core-pulse"
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="core-sphere">
          <div className="core-shield">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
              <path d="m9.5 12 1.7 1.7 3.8-4.2" />
            </svg>
          </div>
          <div className="core-text mono">ACIS CORE</div>
        </div>
      </div>

      {/* Static badges */}
      <StaticBadge label="THREAT DETECT" angle={-90} radius={300} tone="violet" />
      <StaticBadge label="AI ENGINE" angle={-25} radius={300} tone="pink" />
      <StaticBadge label="AUTO HEAL" angle={25} radius={300} tone="orange" />
      <StaticBadge label="ZERO TRUST" angle={90} radius={300} tone="violet" />
      <StaticBadge label="INTEL FEED" angle={155} radius={300} tone="pink" />
      <StaticBadge label="MESH NET" angle={205} radius={300} tone="orange" />

      {/* Orbit rings with moving dots only */}
      <OrbitRing size={220} duration={18} className="ring-inner">
        <OrbitDot angle={320} radius={110} tone="orange" />
      </OrbitRing>

      <OrbitRing size={360} duration={28} reverse className="ring-middle">
        <OrbitDot angle={330} radius={180} tone="orange" />
        <OrbitDot angle={150} radius={180} tone="pink" />
      </OrbitRing>

      <OrbitRing size={500} duration={40} className="ring-outer">
        <OrbitDot angle={210} radius={250} tone="violet" />
      </OrbitRing>
    </div>
  );
}