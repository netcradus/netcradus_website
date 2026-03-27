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
    { from: locations["France"], to: locations["India"], color: "#e8400a", delay: 0 },
    { from: locations["CO, United States"], to: locations["France"], color: "#ff5520", delay: 1.2 },
    { from: locations["India"], to: locations["South Korea"], color: "#b32d00", delay: 2.2 },
    { from: locations["Canada"], to: locations["TX, United States"], color: "#e8400a", delay: 1.5 },
];

export default function LiveThreatMap() {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        // Fetch map data manually to allow for future SRI/integrity checks
        fetch(geoUrl)
            .then(res => res.json())
            .then(data => setGeoData(data))
            .catch(err => console.error("Map data error:", err));
    }, []);

    return (
        <SectionWrapper id="threat-map" className="py-24 bg-premium-radial relative overflow-hidden transition-colors duration-500">
            {/* Dynamic Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(232,64,10,0.05)_0%,transparent_70%)] z-0 pointer-events-none" />

            <AnimatedReveal className="mb-20 text-center relative z-10">
                <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">
                    Real-time global telemetry
                </span>
                <h2 className="text-4xl md:text-7xl font-sans font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tighter leading-none">
                    Operative <span className="text-zinc-400 dark:text-zinc-600">grid.</span>
                </h2>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-zinc-500 dark:text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                        3,220,737 Anomalies Neutralized Today
                    </p>
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">Active nodes</span>
                        </div>
                        <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.3em] uppercase">
                            <span className="flex items-center gap-2 text-zinc-900 dark:text-white"><span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Live Attacks</span>
                            <div className="w-[1px] h-3 bg-zinc-200 dark:bg-zinc-800" />
                            <span className="text-zinc-400 dark:text-zinc-600">Nexus-Node: active</span>
                        </div>
                    </div>
                </div>
            </AnimatedReveal>

            <div className="relative max-w-screen-2xl mx-auto w-full border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-3xl overflow-hidden p-8 shadow-premium z-10 transition-all duration-500">
                <ComposableMap
                    projection="geoEquirectangular"
                    projectionConfig={{ scale: 160 }}
                    className="w-full h-auto aspect-[2/1]"
                >
                    <defs>
                        <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                            <circle fill="currentColor" cx="1" cy="1" r="1" className="text-zinc-900/10 dark:text-white/10"></circle>
                        </pattern>
                    </defs>

                    <Geographies geography={geoData || geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="url(#dots)"
                                    stroke="var(--color-border)"
                                    strokeOpacity={0.1}
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "rgba(204,0,0,0.1)", fillOpacity: 0.1, outline: "none" },
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
                            <circle r={8} fill="transparent" stroke={i % 2 === 0 ? "#e8400a" : "#ff5520"} strokeWidth={0.5} className="animate-ping" style={{ animationDuration: '3s' }} />
                            <circle r={2} className="fill-zinc-900 dark:fill-white" />
                        </Marker>
                    ))}
                </ComposableMap>

                {/* HUD Overlay */}
                <div className="absolute top-8 left-8 text-[8px] font-mono text-gray-500 opacity-40 uppercase tracking-widest flex flex-col gap-2">
                    <div>Feed: Live_Signal</div>
                    <div>Latency: 14ms</div>
                    <div>Source: GRS_Satellite_Link</div>
                </div>
            </div>
        </SectionWrapper>
    );
}