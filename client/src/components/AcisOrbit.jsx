import React from "react";
import { motion } from "framer-motion";
import "./AcisOrbit.css";

const OrbitRing = ({
  size,
  duration,
  reverse = false,
  children,
  className = "",
}) => (
  <motion.div
    className={`orbit-ring ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
    }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
    }}
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
        left: "50%",
        top: "50%",
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
};

const StaticBadge = ({
  label,
  angle,
  radius,
  tone = "primary",
}) => {
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
      {/* GRID */}
      <div className="orbit-grid" />

      {/* CENTERED ORANGE GLOW FIXED */}
      <div
        className="orbit-ambient-glow"
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,120,40,0.16) 0%, rgba(255,120,40,0.08) 45%, transparent 75%)",
          filter: "blur(18px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* CORE */}
      <div className="orbit-core">
        {/* SMALL CONTROLLED GLOW */}
        <div
          style={{
            position: "absolute",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,120,40,0.14) 0%, transparent 70%)",
            filter: "blur(20px)",
            zIndex: 0,
          }}
        />

        {/* CENTER SPINNER */}
        <div className="absolute w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center animate-spin-slow">
          <div className="w-5 h-5 rounded-full bg-accent-bright opacity-30" />
        </div>

        {/* PULSE */}
        <motion.div
          className="core-pulse bg-accent"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        {/* CORE SPHERE */}
        <div className="core-sphere bg-crimson-deep shadow-red-glow">
          <div className="core-text mono text-white">
            ACIS CORE
          </div>
        </div>
      </div>

      {/* BADGES */}
      <StaticBadge
        label="THREAT DETECT"
        angle={-90}
        radius={165}
        tone="crimson"
      />

      <StaticBadge
        label="AI ENGINE"
        angle={-25}
        radius={165}
        tone="crimson"
      />

      <StaticBadge
        label="AUTO HEAL"
        angle={25}
        radius={165}
        tone="crimson"
      />

      <StaticBadge
        label="ZERO TRUST"
        angle={90}
        radius={165}
        tone="crimson"
      />

      <StaticBadge
        label="INTEL FEED"
        angle={155}
        radius={165}
        tone="crimson"
      />

      <StaticBadge
        label="MESH NET"
        angle={205}
        radius={165}
        tone="crimson"
      />

      {/* INNER RING */}
      <OrbitRing
        size={180}
        duration={18}
        className="ring-inner border-crimson/20"
      >
        <OrbitDot
          angle={320}
          radius={90}
          tone="crimson"
        />
      </OrbitRing>

      {/* MIDDLE RING */}
      <OrbitRing
        size={280}
        duration={28}
        reverse
        className="ring-middle border-crimson/15"
      >
        <OrbitDot
          angle={330}
          radius={140}
          tone="crimson"
        />

        <OrbitDot
          angle={150}
          radius={140}
          tone="crimson-bright"
        />
      </OrbitRing>

      {/* OUTER RING FIXED */}
      <OrbitRing
        size={340}
        duration={40}
        className="ring-outer border-crimson/10"
      >
        <OrbitDot
          angle={210}
          radius={160}
          tone="crimson"
        />
      </OrbitRing>
    </div>
  );
}