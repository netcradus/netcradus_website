import { CheckCircle2, Shield, Lock, Server, ArrowRight } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import MagneticWrapper from "./ui/MagneticWrapper";
import { motion } from "framer-motion";

const highlights = [
    "24/7/365 Proactive Monitoring & Incident Response",
    "Dual-Continent Presence & Follow-the-Sun Support",
    "World-Class Certified Professionals",
    "Scalable & Modular Service Delivery",
    "Compliance-First Architecture",
    "Innovation at the Core — Powered by ACIS"
];

export default function AboutSection() {
    return (
        <SectionWrapper id="about" className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Narrative Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,124,255,0.03)_0%,transparent_50%)] z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">

                {/* Left: Strategic Mission */}
                <AnimatedReveal className="text-center lg:text-left">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-primary uppercase mb-8 block">
                        Architectural Excellence
                    </span>
                    <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tighter leading-none">
                        Outcomes, <br />
                        <span className="text-gray-500 italic">not just services.</span>
                    </h2>
                    
                    <p className="text-gray-500 font-sans text-lg mb-12 max-w-lg opacity-80 leading-relaxed mx-auto lg:mx-0">
                        We engineer resilience. Netcradus builds the digital infrastructure that doesn't just survive attacks—it anticipates them.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 group">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-500" />
                                <span className="text-gray-400 font-sans text-xs md:text-sm group-hover:text-white transition-colors duration-500">{item}</span>
                            </div>
                        ))}
                    </div>

                    <MagneticWrapper strength={0.2}>
                        <button className="inline-flex items-center gap-4 text-[10px] font-bold text-white uppercase tracking-[0.3em] group">
                            Our Philosophy <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-primary" />
                        </button>
                    </MagneticWrapper>
                </AnimatedReveal>

                {/* Right: Immersive Shield Visual */}
                <AnimatedReveal delay={0.2} className="relative flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
                        {/* Kinetic Rings */}
                        <div className="absolute inset-0 border border-white/[0.03] rounded-full" />
                        <div className="absolute inset-10 border border-white/[0.03] rounded-full border-dashed animate-[spin_40s_linear_infinite]" />
                        <div className="absolute inset-20 border border-white/[0.03] rounded-full" />
                        
                        {/* Atmospheric Orbs */}
                        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full animate-pulse" />
                        
                        {/* The Core Shield */}
                        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,124,255,0.1)]" />
                            <Shield strokeWidth={0.5} className="w-32 h-32 md:w-44 md:h-44 text-white opacity-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
                            
                            {/* Satellite Hardware nodes */}
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-40px] pointer-events-none"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-black border border-white/10 rounded-xl flex items-center justify-center shadow-2xl">
                                    <Lock size={16} className="text-primary" />
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-40px] pointer-events-none"
                            >
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-black border border-white/10 rounded-xl flex items-center justify-center shadow-2xl">
                                    <Server size={16} className="text-accent" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Telemetry Labels */}
                        <div className="absolute inset-0 text-[8px] font-mono text-gray-800 uppercase tracking-widest pointer-events-none">
                            <div className="absolute top-0 left-0">ARCH_TYPE: MONOLITH</div>
                            <div className="absolute bottom-10 right-0">Uptime: 99.98%</div>
                        </div>
                    </div>
                </AnimatedReveal>
            </div>
        </SectionWrapper>
    );
}
