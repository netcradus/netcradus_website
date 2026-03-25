import React from "react";
import {
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Star,
  MapPin,
  Server,
} from "lucide-react";
import "./About.css";

import cehLogo from "../assets/certs/CEHPRACTICAL.png";
import comptiaLogo from "../assets/certs/Comptia.png";
import oscpLogo from "../assets/certs/OSCP-removebg.png";

const VALUES = [
  {
    name: "Integrity",
    desc: "Foundation of every engagement with complete transparency.",
    icon: <ShieldCheck size={20} />,
  },
  {
    name: "Innovation",
    desc: "Perpetually advancing and shaping the future of defense.",
    icon: <Zap size={20} />,
  },
  {
    name: "Excellence",
    desc: "Uncompromising standards consistently exceeding expectations.",
    icon: <Star size={20} />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-premium-radial relative transition-colors duration-500">
      <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:col-span-7 reveal space-y-12">
            <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase block">// THE MANDATE</span>

            <h2 className="text-4xl md:text-7xl font-display font-black text-zinc-900 dark:text-white tracking-tighter leading-none">
              Built on Expertise.
              <br />
              <span className="text-accent italic">Driven by Results.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-sans leading-relaxed">
                Founded by technology practitioners with deep operational
                experience, Netcradus emerged from the realization that modern
                enterprises are often over-leveraged and under-protected.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg font-sans leading-relaxed opacity-80">
                Today, we serve as the strategic technical authority for
                ambitious organizations globally, building the proprietary AI
                infrastructure that redefines digital defense.
              </p>
            </div>

            <div className="glass-main p-10 flex flex-col md:flex-row items-center justify-between gap-8 group rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><ShieldCheck size={24} /></div>
                <h4 className="text-xl font-display font-black text-zinc-900 dark:text-white uppercase tracking-widest">
                  Elite Engineering.
                </h4>
              </div>

              <div className="flex items-center gap-8 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 dark:invert">
                <img src={cehLogo} alt="CEH" className="h-10 w-auto object-contain" />
                <img src={comptiaLogo} alt="CompTIA" className="h-10 w-auto object-contain" />
                <img src={oscpLogo} alt="OSCP" className="h-10 w-auto object-contain" />
              </div>
            </div>

            <div className="mission-vision-grid">
              <div className="vision-card">
                <Target className="card-icon" />
                <h3>The Mission</h3>
                <p>
                  To empower organisations with intelligent, secure, and
                  future-proof technology solutions — enabling growth without
                  boundaries.
                </p>
              </div>

              <div className="vision-card">
                <Eye className="card-icon" />
                <h3>The Vision</h3>
                <p>
                  To pioneer the next generation of autonomous defense through
                  ACIS, making world-class protection the baseline for every
                  enterprise.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className="lg:col-span-5 reveal relative lg:mt-32"
          >
            <div className="glass-main p-10 space-y-10 rounded-3xl">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4">Core Values</h3>

              <div className="space-y-8">
                {VALUES.map((val, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">{val.icon}</div>
                    <div className="space-y-1">
                      <h4 className="font-display font-black text-zinc-900 dark:text-white uppercase tracking-wider text-sm">{val.name}</h4>
                      <p className="text-zinc-500 dark:text-zinc-500 text-xs leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="location-nodes">
              <div className="location-image-card">
                <img
                  src="/generated/corporate_office_cyber_1773394698579.png"
                  alt="Netcradus Global Operations"
                  className="location-image"
                />
                <div className="location-overlay"></div>
              </div>

              <h3 className="sidebar-title">Global Nodes</h3>

              <div className="node-item">
                <MapPin className="node-icon" size={16} />
                <div>
                  <span className="node-name">UK HEADQUARTERS</span>
                  <span className="node-loc">Leicester, England</span>
                </div>
              </div>

              <div className="node-item">
                <Server className="node-icon" size={16} />
                <div>
                  <span className="node-name">INDIA TECHNOLOGY NODE</span>
                  <span className="node-loc">Greater Noida West</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;