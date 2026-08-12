import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Zap, Lock } from 'lucide-react';

export default function WhyNetcradusHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-[#04060c] border-b border-white/10 overflow-hidden">
      {/* 1. Atmospheric Deep Navy / Black Cyber Background & Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Cyber Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 131, 46, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 131, 46, 0.2) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient Radial Atmospheric Orange / Red Glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-[#ec4c8c]/15 to-[#f9832e]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#f9832e]/20 via-[#ec4c8c]/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Strong Typography & Actions (Splunk-style) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#13131c] border border-orange-500/30 text-orange-400 font-mono text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(249,131,46,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>// THE NETCRADUS DEFENSIVE EDGE</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]"
            >
              Why Global Enterprises Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4c8c] via-[#f9832e] to-[#ff8000] drop-shadow-[0_0_35px_rgba(249,131,46,0.4)]">
                Netcradus
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Traditional security is reactive, fragmented, and slow. Netcradus combines AI-powered threat intelligence with 24/7 autonomous protection to stop threats before they become business impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] hover:opacity-95 text-white font-sora font-bold text-sm tracking-wider uppercase rounded-full shadow-[0_10px_30px_rgba(249,131,46,0.35)] transition-all transform hover:-translate-y-0.5 no-underline flex items-center justify-center gap-2 group"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform"
                className="px-8 py-4 bg-[#13131c]/90 hover:bg-[#1c1c2b] text-white border border-white/15 hover:border-orange-500/50 font-sora font-bold text-sm tracking-wider uppercase rounded-full transition-all no-underline flex items-center justify-center"
              >
                Explore ACIS Platform
              </Link>
            </motion.div>

            {/* Key Value Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-xs text-gray-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Trust Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Autonomous AI SOC</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>&lt; 15 Min Containment SLA</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Prominent 3D Image of Two Children Discussing Netcradus */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Subtle Orange Radial Glow behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f9832e]/30 via-[#ec4c8c]/20 to-transparent rounded-full blur-[90px] transform scale-110 pointer-events-none" />

            {/* Floating Cybersecurity Shield / Grid Elements Around Image */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border border-orange-500/30 rounded-2xl bg-[#13131c]/80 backdrop-blur-md flex items-center justify-center text-orange-400 shadow-xl z-20 hidden sm:flex">
              <Lock className="w-7 h-7" />
            </div>

            <div className="absolute -bottom-4 -right-4 px-4 py-2.5 border border-white/15 rounded-xl bg-[#0d0d14]/90 backdrop-blur-md font-mono text-xs text-emerald-400 flex items-center gap-2 shadow-2xl z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI Threat Sentinel Active</span>
            </div>

            {/* Glowing Connection Lines SVG overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60"
              viewBox="0 0 500 500"
            >
              <line x1="50" y1="50" x2="120" y2="120" stroke="rgba(249, 131, 46, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="120" cy="120" r="4" fill="#f9832e" />
              <line x1="420" y1="380" x2="470" y2="440" stroke="rgba(236, 76, 140, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="420" cy="380" r="4" fill="#ec4c8c" />
            </svg>

            {/* Main 3D Image Container - Uncropped */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-full flex items-center justify-center p-2 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm group"
            >
              <img
                src="/images/whynetcradushero.png"
                alt="Two children discussing Netcradus autonomous cybersecurity"
                className="w-full h-auto max-h-[520px] sm:max-h-[580px] lg:max-h-[620px] object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(249,131,46,0.3)] transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
