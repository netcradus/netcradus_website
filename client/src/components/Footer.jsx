import companyLogoImage from "../assets/companyLogo.png";
import isoLogo from "../assets/ISO-Loogo-removebg.png";
import iso27701Logo from "../assets/iso-27701-removebg.png";
import msmeLogo from "../assets/msme-removebg.png";
import kasperskyLogo from "../assets/kaspersky.png";
import kasp from "../assets/kas.png";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, ArrowUpRight } from "lucide-react";
import MagneticWrapper from "./ui/MagneticWrapper";

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border-color)] bg-[var(--bg-color)] pt-16 md:pt-24 pb-12 z-10 relative mt-32 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
                {/* Brand & Mission */}
                <div className="col-span-1 md:col-span-1 space-y-8">
                    <div className="flex items-center gap-3">
                        <img 
                            src={companyLogoImage} 
                            alt="Netcradus Logo" 
                            className="h-14 md:h-16 w-auto object-contain brightness-150 drop-shadow-[0_0_10px_rgba(0,124,255,0.2)]" 
                        />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans max-w-xs">
                        Netcradus is an elite cybersecurity ecosystem engineered for the modern enterprise. We redefine digital defense through autonomous intelligence and architectural excellence.
                    </p>
                    
                    {/* Ghost White Logos */}
                    <div className="pt-4 flex flex-wrap items-center gap-6 saturate-0 opacity-30 hover:saturate-100 hover:opacity-100 transition-all duration-700">
                        <img src={isoLogo} alt="ISO 27001" className="h-12 w-auto object-contain" />
                        <img src={iso27701Logo} alt="ISO 27701" className="h-12 w-auto object-contain" />
                        <img src={msmeLogo} alt="MSME" className="h-10 w-auto object-contain" />
                        <img src={kasperskyLogo} alt="Kaspersky" className="h-8 w-auto object-contain" />
                    </div>

                    <div className="flex items-center gap-4">
                        {[
                            { Icon: Linkedin, href: "https://linkedin.com/company/netcradus" },
                            { Icon: Instagram, href: "https://instagram.com/netcradus" },
                            { Icon: Facebook, href: "https://facebook.com/netcradus" },
                            { Icon: Youtube, href: "https://youtube.com/@netcradus" }
                        ].map(({ Icon, href }, idx) => (
                            <MagneticWrapper key={idx} strength={0.3}>
                                <a 
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-accent)] hover:border-[var(--primary-accent)] transition-all bg-[var(--surface-color)]"
                                >
                                    <Icon size={16} />
                                </a>
                            </MagneticWrapper>
                        ))}
                    </div>
                </div>

                {/* Navigation Columns */}
                <div>
                    <h4 className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Solutions</h4>
                    <ul className="space-y-4 text-sm font-sans">
                        {["Managed IT", "Cybersecurity", "Cloud Architecture", "ACIS Engine"].map((item) => (
                            <li key={item}>
                                <Link to="/services" className="text-gray-500 hover:text-[var(--primary-accent)] transition-colors flex items-center group">
                                    {item}
                                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all text-primary" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Industries</h4>
                    <ul className="space-y-4 text-sm font-sans">
                        {["Financial Services", "Critical Infrastructure", "Healthcare", "Government"].map((item) => (
                            <li key={item}>
                                <Link to="/industries" className="text-gray-500 hover:text-[var(--primary-accent)] transition-colors flex items-center group">
                                    {item}
                                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all text-primary" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Corporate</h4>
                    <ul className="space-y-4 text-sm font-sans">
                        {["About Netcradus", "Intelligence Blog", "Career Openings", "Contact Dispatch"].map((item) => (
                            <li key={item}>
                                <Link to="/about" className="text-gray-500 hover:text-[var(--primary-accent)] transition-colors flex items-center group">
                                    {item}
                                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all text-primary" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-32 pt-10 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center text-[10px] font-display font-bold text-gray-700 tracking-[0.2em] uppercase gap-6">
                <div className="flex items-center gap-4">
                    <span>UK & INDIA</span>
                    <span className="w-1 h-1 rounded-full bg-primary/20" />
                    <span>GLOBAL MSSP OPERATIVE</span>
                </div>
                <div className="flex items-center gap-8">
                    <p>© 2026 Netcradus Limited.</p>
                    <p className="text-gray-800">Designed for resilience.</p>
                </div>
            </div>
        </footer>
    );
}
