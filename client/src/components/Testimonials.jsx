import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import GlassCard from "./ui/GlassCard";
import AnimatedReveal from "./ui/AnimatedReveal";
import { Quote, ArrowUpRight } from "lucide-react";
import testimonials from "../data/testimonials";
import client1 from "../assets/clientsList/client_1-removebg.png";
import client2 from "../assets/clientsList/client_2-removebg.png";
import client3 from "../assets/clientsList/client_3-removebg.png";
import client4 from "../assets/clientsList/client 4.png";
import client5 from "../assets/clientsList/client5.png";
import client6 from "../assets/clientsList/client_6-removebg.png";

const clientLogos = [client1, client2, client3, client4, client5, client6];
export default function Testimonials() {
    return (
        <SectionWrapper className="bg-background border-y border-[var(--border-color)] transition-colors duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-center">
                
                {/* Left: Narrative Focus */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-3 bg-primary" />
                        <span className="mono-label text-primary">DOSSIER_FEEDBACK: 04</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-extrabold text-[var(--text-primary)] mb-8 tracking-tighter leading-none uppercase">
                        Trusted by <br />
                        <span className="text-[var(--text-secondary)] opacity-40 italic">LEADERS.</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] font-sans text-sm md:text-lg leading-relaxed mb-12 max-w-sm">
                        Securing the infrastructure of the world's most resilient organizations through strategic intelligence.
                    </p>
                    
                    <button className="mono-label text-[var(--text-primary)] hover:text-primary transition-colors flex items-center gap-3 border-b border-[var(--border-color)] pb-2 group">
                        ACCESS_CLIENT_LOGS <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Right: Premium Quotes & Logos */}
                <div className="lg:col-span-2 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((item, idx) => (
                            <GlassCard key={idx} delay={idx * 0.1} className="p-10 border-[var(--border-color)] bg-surface-color/5">
                                <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" strokeWidth={1} />
                                <p className="text-[var(--text-primary)] font-sans text-sm md:text-lg leading-relaxed mb-10 opacity-80 italic relative z-10">
                                    "{item.quote}"
                                </p>
                                <div className="relative z-10 pt-6 border-t border-[var(--border-color)]">
                                    <h4 className="mono-label !text-primary mb-1">{item.author}</h4>
                                    <p className="font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest">{item.company}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    {/* Monochromatic Logo Grid */}
                    <div className="pt-12 border-t border-[var(--border-color)]">
                        <div className="grid grid-cols-3 md:grid-cols-6 items-center gap-12 group/logos">
                            {clientLogos.map((logo, idx) => (
                                <img 
                                    key={idx} 
                                    src={logo} 
                                    alt="Client" 
                                    className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-30 grayscale group-hover/logos:opacity-50 hover:!opacity-100 hover:!grayscale-0 hover:brightness-100 transition-all duration-700" 
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}
