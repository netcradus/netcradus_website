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
import oscpLogo from "../assets/certs/OSCP.png";
import cisaLogo from "../assets/certs/cisa.png";
import cismLogo from "../assets/certs/cism.png";
import crestLogo from "../assets/certs/crest.png";
import crtapLogo from "../assets/certs/crta.png";
import iscpLogo from "../assets/certs/iscp.png";
import ewptxLogo from "../assets/certs/ewptx.png";
import leadauditorLogo from "../assets/certs/leadauditor.png";
import shieldLogo from "../assets/certs/shield.png";


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
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
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

            <div className="glass-main p-12 rounded-3xl text-center group">

              {/* Heading */}
              <div className="glass-main p-12 rounded-3xl text-center">

                <h4 className="text-xl md:text-2xl font-display font-black text-zinc-900 dark:text-white uppercase tracking-widest">
                  Elite Engineering
                </h4>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 mb-10">
                  Our Security <span className="text-accent font-semibold">Professionals</span> with Top Certifications
                </p>

                <div className="flex justify-center">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 px-18 py-6 gap-x-10 gap-y-8 place-items-center max-w-3xl mx-auto">

                    <img src={cehLogo} className="h-10 object-contain" />
                    <img src={comptiaLogo} className="h-10 object-contain" />
                    <img src={oscpLogo} className="h-10 object-contain" />

                    <img src={shieldLogo} className="h-10 object-contain" />
      <img src={cisaLogo} className="h-10 object-contain" />
      <img src={cismLogo} className="h-10 object-contain" />
      <img src={crestLogo} className="h-10 object-contain" />
      <img src={iscpLogo}className="h-10 object-contain" />
      <img src={crtapLogo} className="h-10 object-contain" />
            <img src={leadauditorLogo}className="h-10 object-contain" />
      {/* <img src={ewptxLogo} className="h-10 object-contain" /> */}

                  </div>
                </div>
              </div>
            </div>
            <div className="mission-vision-grid">
             <div className="grid md:grid-cols-2 gap-8">

  {/* Mission */}
  <div className="p-8 rounded-2xl 
    bg-zinc-100 dark:bg-white/5 
    backdrop-blur 
    border border-zinc-200 dark:border-white/10 
    hover:border-accent/40 transition-all">

    <Target className="mb-4 text-accent" />

    <h3 className="text-lg font-bold 
      text-zinc-900 dark:text-white mb-2">
      Mission
    </h3>

    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
      To empower organisations with intelligent, secure, and future-proof technology solutions — enabling growth without boundaries.
    </p>
  </div>

  {/* Vision */}
  <div className="p-8 rounded-2xl 
    bg-zinc-100 dark:bg-white/5 
    backdrop-blur 
    border border-zinc-200 dark:border-white/10 
    hover:border-accent/40 transition-all">

    <Eye className="mb-4 text-accent" />

    <h3 className="text-lg font-bold 
      text-zinc-900 dark:text-white mb-2">
      Vision
    </h3>

    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
      To pioneer the next generation of autonomous defense through ACIS, making world-class protection the baseline for every enterprise.
    </p>
  </div>

</div>
            </div>
          </div>

          {/* Right */}
          <div
            className="lg:col-span-5 reveal relative lg:mt-32"
          >
            <div className="p-10 space-y-10 rounded-3xl  bg-zinc-100 dark:bg-white/5 backdrop-blur border border-zinc-200 dark:border-white/10">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4">Core Values</h3>
           <div className="space-y-6">
  {VALUES.map((val, idx) => (
    <div
      key={idx}
      className="flex items-start gap-4 p-4 rounded-xl 
      bg-transparent hover:bg-zinc-100 dark:hover:bg-white/5 
      transition-all"
    >

      {/* Icon */}
      <div className="w-10 h-10 rounded-lg 
        bg-accent/10 flex items-center justify-center text-accent">
        {val.icon}
      </div>

      {/* Content */}
      <div>
        <h4 className="text-sm font-semibold 
          text-zinc-900 dark:text-white">
          {val.name}
        </h4>

        <p className="text-xs 
          text-zinc-500 dark:text-zinc-400 
          mt-1 leading-relaxed">
          {val.desc}
        </p>
      </div>

    </div>
  ))}
</div>
            </div>
           <div className="mt-10 space-y-6">

 

  {/* Image Card */}
 <div className="mt-10 space-y-6">

  
  {/* Image Card */}
  <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10">

    <img
      src="/generated/corporate_office_cyber_1773394698579.png"
      alt="Netcradus Global Operations"
      className="w-full h-48 object-cover"
    />

    {/* Overlay (adaptive) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/70"></div>

   
  </div>

  {/* Locations Card */}
  <div className="p-6 rounded-2xl 
    bg-zinc-100 dark:bg-white/5 
    backdrop-blur 
    border border-zinc-200 dark:border-white/10 
    space-y-4">
{/* Title */}
  <h3 className="text-xs mb-2  mx-4 font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.3em]">
    Global Presence
  </h3>

    {/* Node 1 */}
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
        <MapPin size={16} />
      </div>
      <div>
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          UK Headquarters
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Leicester, England
        </p>
      </div>
    </div>

    {/* Node 2 */}
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
        <Server size={16} />
      </div>
      <div>
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          India Technology Node
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Greater Noida West
        </p>
      </div>
    </div>

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
