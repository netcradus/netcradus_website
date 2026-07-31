import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Server,
  Activity,
  Cpu,
  AlertTriangle,
  Layers,
  FileText,
} from "lucide-react";
import "./Hero.css";

/**
 * Enterprise Cybersecurity Hero Component
 * Balanced spacing layout with 3-line heading, description, feature list, and 4x2 stat cards grid.
 */
export default function Hero() {
  const featureBullets = [
    "AI-Powered Threat Detection",
    "Enterprise XDR & SIEM",
    "24×7 Security Operations Center",
  ];

  const statCards = [
    {
      title: "Threats Neutralized",
      value: "1,000+",
      trend: "↑ 1.80K vs yesterday",
      trendPositive: true,
      icon: <ShieldCheck className="w-5 h-5 text-[#1FC8FF]" />,
    },
    {
      title: "Defense Confidence",
      value: "99.2%",
      trend: "↑ 0.3% vs yesterday",
      trendPositive: true,
      icon: <CheckCircle2 className="w-5 h-5 text-[#A855F7]" />,
    },
    {
      title: "Assets Hardened",
      value: "6,100+",
      trend: "↑ 1.66K vs yesterday",
      trendPositive: true,
      icon: <Server className="w-5 h-5 text-[#FF7A1A]" />,
    },
    {
      title: "Telemetry Handled",
      isChart: true,
      trend: "Active Feed",
      trendPositive: true,
      icon: <Activity className="w-5 h-5 text-[#1FC8FF]" />,
    },
    {
      title: "Geometry Handled",
      value: "13%",
      trend: "↓ 2.5R vs yesterday",
      trendPositive: false,
      icon: <Cpu className="w-5 h-5 text-[#A855F7]" />,
    },
    {
      title: "Operational Incursions",
      value: "02",
      trend: "↓ 227 vs yesterday",
      trendPositive: true,
      icon: <AlertTriangle className="w-5 h-5 text-[#FF7A1A]" />,
    },
    {
      title: "Grid Stability",
      value: "97%",
      trend: "↑ 1.6K vs yesterday",
      trendPositive: true,
      icon: <Layers className="w-5 h-5 text-[#1FC8FF]" />,
    },
    {
      title: "Core Audit Trail",
      value: "81%",
      trend: "↑ 51K vs yesterday",
      trendPositive: true,
      icon: <FileText className="w-5 h-5 text-[#A855F7]" />,
    },
  ];

  return (
    <section
      className="relative flex flex-col justify-center min-h-screen w-full overflow-hidden bg-[#050B14] select-text pt-[60px] pb-10"
      style={{
        backgroundImage: `url('/img/homepage.png')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:pl-[80px] text-left max-w-[1280px]">
        
        {/* Main 3-Line Heading */}
        <h1
          className="hero-heading font-extrabold text-[42px] sm:text-[56px] lg:text-[70px] leading-[1.05] tracking-[-2px] max-w-[520px]"
          style={{ textShadow: "0 4px 18px rgba(0, 0, 0, 0.35)" }}
        >
          <span className="block whitespace-nowrap text-white">Comprehensive</span>
          <span className="block whitespace-nowrap">
            <span className="text-white">Enterprise </span>
            <span className="text-cyan-brand-1fc8ff">Cyber</span>
          </span>
          <span className="block whitespace-nowrap text-orange-brand-ff7a1a">
            Protection
          </span>
        </h1>

        {/* Description (24px below heading) */}
        <p className="mt-[24px] text-[18px] font-medium leading-relaxed text-[#C7D0DA] max-w-[450px]">
          Protect your enterprise with AI-powered cybersecurity, real-time threat detection, XDR, SIEM, SOAR and 24×7 SOC monitoring.
        </p>

        {/* Feature List (20px below description) */}
        <div className="mt-[20px] space-y-2.5 max-w-[450px]">
          {featureBullets.map((bullet, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#1FC8FF]/20 border border-[#1FC8FF]/50 shadow-[0_0_8px_rgba(31,200,255,0.45)] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1FC8FF] animate-pulse" />
              </span>
              <span className="text-[14px] font-semibold text-white/90 tracking-wide">
                {bullet}
              </span>
            </div>
          ))}
        </div>

        {/* 4 × 2 Glassmorphism Statistic Cards Grid (30px below feature list) */}
        <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] max-w-[1060px]">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-[18px] bg-[#0F1623]/65 backdrop-blur-[18px] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:border-[#1FC8FF]/35 hover:shadow-[0_12px_40px_rgba(31,200,255,0.12)] transition-all duration-300 flex flex-col justify-between min-h-[135px]"
            >
              {/* Header: Title & Minimal Icon */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-[14px] font-medium text-white/75 leading-tight">
                  {card.title}
                </span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  {card.icon}
                </div>
              </div>

              {/* Body: Value or Mini Line Chart */}
              <div className="my-2">
                {card.isChart ? (
                  <div className="h-[36px] w-full flex items-center">
                    <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" fill="none">
                      <path
                        d="M0 25 Q20 5 40 18 T80 8 T100 15"
                        stroke="#1FC8FF"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle cx="100" cy="15" r="3" fill="#1FC8FF" />
                    </svg>
                  </div>
                ) : (
                  <div className="text-[34px] font-bold text-white leading-none tracking-tight">
                    {card.value}
                  </div>
                )}
              </div>

              {/* Footer: Trend */}
              <div
                className={`text-[12px] font-semibold flex items-center gap-1 ${
                  card.trendPositive ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {card.trend}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

