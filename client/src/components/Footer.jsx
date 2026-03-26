import companyLogoImage from "../assets/companyLogo.png";
import isoLogo from "../assets/ISO-Loogo-removebg.png";
import iso27701Logo from "../assets/iso-27701-removebg.png";
import msmeLogo from "../assets/msme-removebg.png";
import kasperskyLogo from "../assets/kaspersky.png";
import udyamLogo from "../assets/udyam.png";

import kasp from "../assets/kas.png";
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
<div className="pt-8 flex flex-wrap items-center gap-x-10 gap-y-8">
  {[
    { src: isoLogo, alt: "ISO 27001", h: "h-12" },
    { src: iso27701Logo, alt: "ISO 27701", h: "h-12" },
    { src: msmeLogo, alt: "MSME", h: "h-10" },
    { src: kasperskyLogo, alt: "Kaspersky", h: "h-9" },
    { src: udyamLogo, alt: "Udyam", h: "h-11" },
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
</div>
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
                    <h4 className="text-[10px] font-display font-bold text-[var(--text-secondary)] uppercase tracking-[0.3em] mb-6">Solutions</h4>
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
                    <h4 className="text-[10px] font-display font-bold text-[var(--text-secondary)] uppercase tracking-[0.3em] mb-6">Policies</h4>
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
                    <h4 className="text-[10px] font-display font-bold text-[var(--text-secondary)] uppercase tracking-[0.3em] mb-6">Corporate</h4>
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

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-display font-bold text-text-secondary tracking-[0.3em] uppercase gap-6">
                <div className="flex items-center gap-4">
                    <span>UK & INDIA</span>
                    <span className="w-1 h-1 rounded-full bg-accent/20" />
                    <span>GLOBAL MSSP OPERATIVE</span>
                </div>
                <div className="flex items-center gap-8">
                    <p>Â© 2026 Netcradus Limited.</p>
                    <p className="opacity-80">Designed for resilience.</p>
                </div>
            </div>
        </footer>
    );
}

