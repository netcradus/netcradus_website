import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  const tickerItems = [1, 2]; // Duplicate array for seamless infinite looping

  return (
    <aside aria-label="Promotional Announcement" className="announcement-bar">
      <div className="announcement-ticker-track">
        {tickerItems.map((_, index) => (
          <div key={index} className="announcement-ticker-content">
            {/* 1. Headline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 border border-white/35 text-white text-[11px] font-black uppercase tracking-wider shadow-[0_0_10px_rgba(0,0,0,0.2)] shrink-0">
              <Sparkles size={12} className="text-amber-300 animate-pulse shrink-0" />
              <span>ACIS LAUNCHES 15-DAY FREE TRIAL</span>
            </div>

            {/* 2. Main Message */}
            <span className="text-xs sm:text-sm font-semibold text-white/95 tracking-tight shrink-0">
              <strong className="text-white font-black tracking-normal">NETCRADUS™</strong> introduces ACIS — Autonomous Cyber Immune System — delivering intelligent, adaptive and autonomous cyber protection.
            </span>

            {/* 3. High-Contrast CTA Button */}
            <Link
              to="/acis"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#D93800] text-xs font-black hover:bg-orange-50 hover:scale-105 transition-all shadow-md shrink-0 no-underline cursor-pointer group"
            >
              <span>Book Your Free Slot Now</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <span className="text-white/30 shrink-0">|</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AnnouncementBar;
