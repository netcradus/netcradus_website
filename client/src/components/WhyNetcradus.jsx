import React from "react";
import {
  Shield,
  Radar,
  Lock,
  Cloud,
  Cpu,
  Zap,
  Eye,
  Activity,
} from "lucide-react";

export default function WhyNetcradus() {
  const points = [
    { text: "24/7 SOC & SIEM Monitoring", icon: Shield },
    { text: "Advanced Threat Detection", icon: Radar },
    { text: "Enterprise-Grade Cybersecurity Solutions", icon: Lock },
    { text: "Global Business Security Expertise", icon: Cloud },
    { text: "AI-Powered Security Operations", icon: Cpu },
    { text: "Fast Incident Response & Risk Management", icon: Zap },
    { text: "Real-Time Threat Monitoring", icon: Eye },
    { text: "Continuous Security Intelligence", icon: Activity },
  ];

  return (
    <section className="py-24 px-6 md:px-16 text-white bg-[#0b0f1a] border-t border-white/10">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          Why Netcradus
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          AI-powered cybersecurity built for modern enterprises with real-time protection, automation, and intelligent defense systems.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">

        {points.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="relative group p-6 rounded-2xl border border-white/10 bg-white/5
                         hover:border-orange-500 transition duration-300
                         hover:shadow-[0_0_25px_rgba(255,77,26,0.25)]"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-orange-500/10"></div>

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 mb-4">
                <Icon className="text-orange-400 w-6 h-6" />
              </div>

              {/* Text */}
              <p className="relative z-10 text-sm text-gray-200 leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}