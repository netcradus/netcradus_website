import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const locations = {
    "CO, United States": [-104.9903, 39.7392],
    "TX, United States": [-97.7431, 30.2672],
    "Canada": [-106.3468, 56.1304],
    "France": [2.3522, 48.8566],
    "Israel": [34.8516, 31.0461],
    "India": [77.2090, 28.6139],
    "South Korea": [127.7669, 35.9078],
};

const attacks = [
    { from: locations["France"], to: locations["India"], color: "#007CFF", delay: 0 },
    { from: locations["CO, United States"], to: locations["France"], color: "#00F5A0", delay: 1.2 },
    { from: locations["India"], to: locations["South Korea"], color: "#FF1F7A", delay: 2.2 },
    { from: locations["Canada"], to: locations["TX, United States"], color: "#007CFF", delay: 1.5 },
];

export default function LiveThreatMap() {
    return (
        <SectionWrapper id="threat-map" className="pt-16 md:pt-32 pb-8 md:pb-16 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,124,255,0.05)_0%,transparent_70%)] z-0" />

            <AnimatedReveal className="mb-20 text-center relative z-10">
                <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-primary uppercase mb-6 block">
                    Global Intelligence
                </span>
                <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-6 tracking-tighter leading-none">
                    Operative <span className="text-gray-500">grid.</span>
                </h2>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-600 font-mono text-[10px] tracking-widest uppercase mb-4">
                        3,220,737 Anomalies Neutralized Today
                    </p>
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Active nodes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Neural Link</span>
                        </div>
                    </div>
                </div>
            </AnimatedReveal>

            <div className="relative max-w-6xl mx-auto w-full border border-white/[0.05] rounded-3xl bg-black/40 backdrop-blur-3xl overflow-hidden p-8 shadow-2xl z-10">
                <ComposableMap
                    projection="geoEquirectangular"
                    projectionConfig={{ scale: 160 }}
                    className="w-full h-auto aspect-[2/1]"
                >
                    <defs>
                        <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                            <circle fill="#1a1a1a" cx="1" cy="1" r="1"></circle>
                        </pattern>
                    </defs>

                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="url(#dots)"
                                    stroke="rgba(255,255,255,0.02)"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "#1a1a1a", outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {attacks.map((attack, i) => (
                        <g key={i}>
                            <Line
                                from={attack.from}
                                to={attack.to}
                                stroke={attack.color}
                                strokeWidth={1}
                                strokeOpacity={0.2}
                                strokeDasharray="4 4"
                            />
                            <Line
                                from={attack.from}
                                to={attack.to}
                                stroke={attack.color}
                                strokeWidth={2}
                                strokeLinecap="round"
                                className="attack-line"
                                pathLength="1"
                                style={{
                                    animationDelay: `${attack.delay}s`,
                                    filter: `blur(0.5px) drop-shadow(0 0 5px ${attack.color})`,
                                }}
                            />
                        </g>
                    ))}

                    {Object.entries(locations).map(([name, coord], i) => (
                        <Marker key={name} coordinates={coord}>
                            <circle r={8} fill="transparent" stroke={i % 2 === 0 ? "#007CFF" : "#00F5A0"} strokeWidth={0.5} className="animate-ping" style={{ animationDuration: '3s' }} />
                            <circle r={2} fill="white" />
                        </Marker>
                    ))}
                </ComposableMap>

                {/* HUD Overlay */}
                <div className="absolute top-8 left-8 text-[8px] font-mono text-gray-700 uppercase tracking-widest flex flex-col gap-2">
                    <div>Feed: Live_Signal</div>
                    <div>Latency: 14ms</div>
                    <div>Source: GRS_Satellite_Link</div>
                </div>
            </div>
        </SectionWrapper>
    );
}
