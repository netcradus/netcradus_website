import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = {
  "USA (CO)": [-104.9903, 39.7392],
  "USA (TX)": [-97.7431, 30.2672],
  Canada: [-106.3468, 56.1304],
  France: [2.3522, 48.8566],
  Israel: [34.8516, 31.0461],
  India: [77.209, 28.6139],
  "South Korea": [127.7669, 35.9078],
};

const attacks = [
  { from: locations["France"], to: locations["India"], color: "#ff4d00" },
  { from: locations["USA (CO)"], to: locations["France"], color: "#ff6a00" },
  { from: locations["India"], to: locations["South Korea"], color: "#ff2d00" },
  { from: locations["Canada"], to: locations["USA (TX)"], color: "#ff4d00" },
];

export default function LiveThreatMap() {
  return (
    <SectionWrapper
      id="threat-map"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-950 dark:to-black"
    >
      {/* Glow Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />

      <AnimatedReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Global Threat <span className="text-orange-500">Intelligence</span>
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl mx-auto text-sm">
          Real-time cyber attack visualization across global nodes.
        </p>
      </AnimatedReveal>

      {/* Premium Card */}
      <div className="relative max-w-screen-2xl mx-auto w-full rounded-3xl p-[1px] bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/20">
        <div className="relative rounded-3xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl p-6 md:p-10">

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,20,0.08),transparent_70%)] pointer-events-none" />

          <ComposableMap
            projection="geoEquirectangular"
            projectionConfig={{ scale: 160 }}
            style={{ width: "100%", height: "420px" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(120,120,120,0.08)"
                    stroke="rgba(120,120,120,0.2)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: "rgba(255,80,20,0.2)",
                        transition: "all 0.3s ease",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Attack Lines */}
            {attacks.map((attack, i) => (
              <Line
                key={i}
                from={attack.from}
                to={attack.to}
                stroke={attack.color}
                strokeWidth={2}
                strokeLinecap="round"
                style={{
                  filter: `drop-shadow(0 0 8px ${attack.color})`,
                  opacity: 0.8,
                }}
              />
            ))}

            {/* Markers */}
            {Object.entries(locations).map(([name, coord]) => (
              <Marker key={name} coordinates={coord}>
                <circle
                  r={6}
                  fill="rgba(255,80,20,0.15)"
                  className="animate-ping"
                />
                <circle r={2.5} fill="#ff5014" />
              </Marker>
            ))}
          </ComposableMap>

          {/* HUD Info */}
          <div className="absolute top-6 left-6 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 opacity-70 uppercase tracking-widest space-y-1">
            <div>Feed: Live Signal</div>
            <div>Latency: 14ms</div>
            <div>Source: Global Grid</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}