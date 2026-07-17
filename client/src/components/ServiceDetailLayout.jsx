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
            <div 
              onClick={togglePlay}
              className="relative overflow-hidden rounded-[12px] h-[400px] w-full bg-[#0f172a] flex items-center justify-center cursor-pointer group"
            >
              {/* HTML5 video element */}
              <video
                ref={videoRef}
                src="/videos/cybersecurity.mp4"
                className="h-full w-full object-cover object-top rounded-[12px]"
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={isPlaying}
                playsInline
              />

              {/* Centered animated orange Play button (only visible when paused) */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/35 rounded-[12px]"
                  >
                    <motion.div 
                      className="h-16 w-16 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-lg shadow-[#FF6B00]/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-6 w-6 fill-white ml-1" />
                    </motion.div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider font-sans">
                      Watch Our Cybersecurity Overview
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
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