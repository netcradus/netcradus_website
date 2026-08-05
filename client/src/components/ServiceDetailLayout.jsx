import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const ServiceDetailLayout = ({ service }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3">
          {service.highlights.map((item) => (
            <span
              key={item}
              className="inline-flex whitespace-nowrap rounded-full border border-accent/15 bg-accent/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-accent"
            >
              {item}
            </span>
          ))}
        </div>
        <div>
          <h3 className="text-3xl font-black tracking-tight text-text-primary md:text-5xl">
            {service.heading}
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {service.description}
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {service.points.map((point) => {
            const colonIndex = point.indexOf(":");
            const hasBoldTitle = colonIndex !== -1;
            const title = hasBoldTitle ? point.slice(0, colonIndex) : "";
            const desc = hasBoldTitle ? point.slice(colonIndex + 1) : point;

            return (
              <li
                key={point}
                className="rounded-[22px] border border-border bg-[var(--color-surface-raised)]/70 p-5 text-sm leading-relaxed text-text-secondary shadow-[0_0_24px_rgba(232,64,10,0.04)] hover:border-accent/25 hover:shadow-[0_4px_20px_rgba(255,107,0,0.05)] transition-all duration-300"
              >
                <div className="mb-3 h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(232,64,10,0.25)] animate-pulse" />
                {hasBoldTitle ? (
                  <>
                    <strong className="text-white block mb-1 font-bold">{title}</strong>
                    <span className="text-text-secondary">{desc.trim()}</span>
                  </>
                ) : (
                  point
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_50%_20%,rgba(232,64,10,0.18),transparent_45%)] blur-3xl" />
        <div className="relative overflow-hidden rounded-[30px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_45%),var(--color-surface)] p-4 shadow-[0_22px_70px_rgba(232,64,10,0.08)]">
          {service.id === "cybersecurity" ? (
            <div className="relative overflow-hidden rounded-[12px] h-[400px] w-full bg-[#070913] border border-white/10 flex items-center justify-center">
              {/* Radial Ambient Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,123,41,0.18),transparent_70%)] pointer-events-none" />

              {/* Glowing Shield & Connected Network Motif */}
              <svg viewBox="0 0 400 400" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff7b29" />
                    <stop offset="50%" stopColor="#e8400a" />
                    <stop offset="100%" stopColor="#7c2ae8" />
                  </linearGradient>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ff7b29" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ff7b29" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Outer Shield Outline */}
                <path
                  d="M200 40 L330 90 V190 C330 280 200 340 200 340 C200 340 70 280 70 190 V90 L200 40 Z"
                  stroke="url(#shieldGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_12px_rgba(255,123,41,0.6)]"
                />

                {/* Inner Shield Grid / Mesh */}
                <path
                  d="M200 70 L300 110 V180 C300 250 200 295 200 295 C200 295 100 250 100 180 V110 L200 70 Z"
                  stroke="rgba(255, 123, 41, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />

                {/* Central Core Shield Node */}
                <circle cx="200" cy="180" r="40" fill="url(#nodeGlow)" className="animate-pulse" />
                <circle cx="200" cy="180" r="16" fill="#ff7b29" />
                <circle cx="200" cy="180" r="6" fill="#ffffff" />

                {/* Network Connection Lines */}
                <line x1="200" y1="40" x2="200" y2="140" stroke="rgba(255, 123, 41, 0.4)" strokeWidth="1.5" />
                <line x1="70" y1="90" x2="160" y2="160" stroke="rgba(255, 123, 41, 0.4)" strokeWidth="1.5" />
                <line x1="330" y1="90" x2="240" y2="160" stroke="rgba(255, 123, 41, 0.4)" strokeWidth="1.5" />
                <line x1="100" y1="180" x2="160" y2="180" stroke="rgba(255, 123, 41, 0.4)" strokeWidth="1.5" />
                <line x1="300" y1="180" x2="240" y2="180" stroke="rgba(255, 123, 41, 0.4)" strokeWidth="1.5" />
                <line x1="140" y1="260" x2="180" y2="210" stroke="rgba(255, 123, 41, 0.4)" strokeWidth="1.5" />
                <line x1="260" y1="260" x2="220" y2="210" stroke="rgba(255, 123, 41, 0.4)" strokeWidth="1.5" />

                {/* Connected Nodes */}
                <circle cx="200" cy="40" r="4" fill="#ff7b29" />
                <circle cx="330" cy="90" r="4" fill="#ff7b29" />
                <circle cx="70" cy="90" r="4" fill="#ff7b29" />
                <circle cx="160" cy="160" r="4" fill="#ffffff" />
                <circle cx="240" cy="160" r="4" fill="#ffffff" />
                <circle cx="140" cy="260" r="4" fill="#ff7b29" />
                <circle cx="260" cy="260" r="4" fill="#ff7b29" />
                <circle cx="200" cy="340" r="4" fill="#ff7b29" />
              </svg>
            </div>
          ) : service.video ? (
            <video
              className="h-[400px] w-full rounded-[12px] object-cover object-top pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={service.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={service.image}
              alt={service.heading}
              className="h-[400px] w-full rounded-[12px] object-cover object-top"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailLayout;