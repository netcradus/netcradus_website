import { CheckCircle2, Search, Zap, Rocket, ArrowRight } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import MagneticWrapper from "./ui/MagneticWrapper";

const steps = [
    {
        time: "01",
        label: "Dossier Ingestion",
        title: "Executive Strategic Consultation",
        desc: "A focused, zero-obligation briefing to map your risk perimeter and tactical objectives.",
        icon: Search
    },
    {
        time: "02",
        label: "Reconnaissance",
        title: "Discovery & Holistic Assessment",
        desc: "Deep integration where our architects map every node and vulnerability in your environment.",
        icon: CheckCircle2
    },
    {
        time: "03",
        label: "Deployment",
        title: "Precision Solution Implementation",
        desc: "Surgical execution of the security blueprint, deploying ACIS and hardened infrastructure.",
        icon: Zap
    },
    {
        time: "04",
        label: "Ascension",
        title: "Continuous Strategic Optimization",
        desc: "24/7 operative oversight evolving your defense into a self-healing ecosystem.",
        icon: Rocket
    }
];

export default function HowWeWork() {
    return (
        <SectionWrapper className="pt-8 md:pt-16 pb-16 md:pb-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[#007CFF]/[0.02] opacity-50 z-0" />
            
            <AnimatedReveal className="text-center mb-12 relative z-10">
                <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-primary uppercase mb-6 block">
                    Operational Protocol
                </span>
                <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-6 tracking-tighter">
                    Path to <span className="text-gray-500 italic">immunity.</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto font-sans text-sm md:text-base opacity-80 leading-relaxed">
                    A high-velocity engagement model designed for rapid time-to-value and surgical precision.
                </p>
            </AnimatedReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                {steps.map((step, idx) => (
                    <AnimatedReveal key={idx} delay={idx * 0.1}>
                        <div className="group relative h-full p-8 border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-700 rounded-2xl overflow-hidden">
                            {/* HUD Numbers */}
                            <div className="absolute top-6 right-8 text-4xl font-display font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors">
                                {step.time}
                            </div>
                            
                            <div className="relative z-10">
                                <span className="text-[9px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
                                    {step.label}
                                </span>
                                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity mb-8">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="mt-auto flex justify-between items-center relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-black border border-white/5 flex items-center justify-center text-gray-700 group-hover:text-primary transition-all">
                                    <step.icon size={16} strokeWidth={1.5} />
                                </div>
                                <ArrowRight size={14} className="text-gray-800 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                            </div>
                        </div>
                    </AnimatedReveal>
                ))}
            </div>
        </SectionWrapper>
    );
}
