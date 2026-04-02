import companyLogoImage from "../assets/companyLogo.png";

import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, ArrowUpRight } from "lucide-react";
import MagneticWrapper from "./ui/MagneticWrapper";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background pt-16 pb-12 z-10 relative mt-24 transition-colors duration-500">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
                {/* Brand & Mission */}
                <div className="col-span-1 md:col-span-1 space-y-6">
                    <div className="flex items-center gap-3">
                        <img
                            src={companyLogoImage}
                            alt="Netcradus Logo"
                            className="h-12 md:h-14 w-auto object-contain brightness-150 drop-shadow-[0_0_10px_rgba(232,64,10,0.2)]"
                        />
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed font-sans max-w-xs">
                        Netcradus is an elite cybersecurity ecosystem engineered for the modern enterprise. We redefine digital defense through autonomous intelligence and architectural excellence.
                    </p>

   {/* Trust & Certification Logos */}
{/* <div className="pt-8 flex flex-wrap items-center gap-x-6 gap-y-6">
  {[
    { src: isoLogo, alt: "ISO 27001", h: "h-16" },
    { src: iso27701Logo, alt: "ISO 27701", h: "h-12" },
    { src: msmeLogo, alt: "MSME", h: "h-10" },
    { src: kasperskyLogo, alt: "Kaspersky", h: "h-9" },
     { src: B2BLogo, alt: "B2B", h: "h-9" },
    { src: udyamLogo, alt: "Udyam", h: "h-9" },


  ].map((logo, index) => (
    <div key={index} className="group relative">
      <img
        src={logo.src}
        alt={logo.alt}
        className={`${logo.h} w-auto object-contain transition-all duration-500 ease-out 
          filter drop-shadow-sm group-hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] 
          group-hover:-translate-y-2 group-hover:scale-105`}
      />
    </div>
  ))}
</div> */}
                    <div className="flex items-center gap-4">
                        {[
                            { Icon: Linkedin, href: "https://uk.linkedin.com/company/netcradus-limited?trk=public_post_follow-view-profile" },
                            { Icon: Instagram, href: "https://instagram.com/netcradus" },
                            { Icon: Facebook, href: "https://facebook.com/netcradus" },
                            { Icon: Youtube, href: "https://youtube.com/@netcradus" }
                        ].map(({ Icon, href }, idx) => (
                            <MagneticWrapper key={idx} strength={0.3}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-all bg-zinc-50 dark:bg-zinc-900"
                                >
                                    <Icon size={16} />
                                </a>
                            </MagneticWrapper>
                        ))}
                    </div>
                </div>

                {/* Navigation Columns */}
                <div>
                    <h4 className="text-sm md:text-base font-semibold text-accent tracking-wider mb-6">Solutions</h4>
                    <ul className="space-y-3 text-sm font-sans">
  {[
    { name: "AI & Data Analytics", tab: "ai-data" },
    { name: "Cloud Solution", tab: "cloud" },
    { name: "Cognitive Operations", tab: "cognitive" },
    { name: "Managed IT", tab: "it" },
    { name: "Cybersecurity", tab: "cybersecurity" },
    { name: "Enterprise Solution", tab: "enterprise" },
    { name: "Network Services", tab: "network" },
    { name: "Software Engineering", tab: "software" },
  ].map((item) => (
    <li key={item.name}>
      <Link
        to={`/services?tab=${item.tab}`}
        className="text-[var(--color-text-secondary)] hover:text-accent-bright transition-all duration-300 flex items-center group"
      >
        {item.name}
        <ArrowUpRight
          size={12}
          className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all text-accent-bright"
        />
      </Link>
    </li>
  ))}
</ul>
                </div>

                <div>
                    <h4 className="text-sm md:text-base font-semibold text-accent tracking-wider mb-6">Policies</h4>
                    <ul className="space-y-3 text-sm font-sans">
                        {["Policy"].map((item) => (
                            <li key={item}>
                                <Link to="/policy" className="text-[var(--color-text-secondary)] hover:text-accent-bright transition-colors flex items-center group">
                                    {item}
                                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all text-accent-bright" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm md:text-base font-semibold text-accent tracking-wider mb-6">Corporate</h4>
                    <ul className="space-y-3 text-sm font-sans">
                        {["About Netcradus", "Intelligence Blog", "Career Openings", "Contact Dispatch"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={item === "Career Openings" ? "/careers" : "/about"}
                                    className="text-text-secondary hover:text-accent transition-colors flex items-center group"
                                >
                                    {item}
                                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all text-accent-bright" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

      <div className="relative mt-20 pt-12">
  {/* ✨ Gradient Divider */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
    
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-display uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-5 text-center md:text-left">
        <span className="hover:text-accent transition-colors duration-300 cursor-default">
          UK & INDIA
        </span>

        {/* ✨ Stylish separator */}
        <span className="w-6 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <span className="hover:text-accent transition-colors duration-300 cursor-default">
          Global MSSP Operative
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-center md:text-right">
        
        <p className="opacity-80 hover:opacity-100 transition duration-300">
          © 2026 Netcradus Private Limited. All rights reserved.
        </p>

        <div className="hidden md:block w-[1px] h-4 bg-zinc-300/30 dark:bg-zinc-700/40" />

        <p className="italic text-zinc-400 dark:text-zinc-500 hover:text-accent transition duration-300">
          Designed for resilience
        </p>
      </div>

    </div>
  </div>
</div>

        </footer>
    );
}

