import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";

function Counter({ from, to, suffix = "", prefix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        restDelta: 0.001
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(to);
        }
    }, [inView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US").format(latest.toFixed(0))}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref} className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tighter">{from}</span>;
}

const stats = [
    { prefix: "", value: "99.9", suffix: "%", label: "Operational Uptime", count: false },
    { prefix: "<", value: 60, suffix: "s", label: "Response Latency", count: true },
    { prefix: "", value: 50, suffix: "+", label: "Security Operatives", count: true },
    { prefix: "", value: 12, suffix: "+", label: "Strategic Nodes", count: true },
];

export default function StatsBar() {
    return (
        <SectionWrapper className="z-10 bg-background">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-px border-y border-[var(--border-color)] bg-surface-color/5">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center text-center p-12 md:p-16 group relative bg-background/50 hover:bg-background transition-all duration-700 overflow-hidden"
                    >
                        {/* Ignition Background Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="relative">
                            {stat.count ? (
                                <Counter from={0} to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            ) : (
                                <div className="text-5xl md:text-6xl font-display font-extrabold text-[var(--text-primary)] tracking-tighter">
                                    {stat.prefix}{stat.value}{stat.suffix}
                                </div>
                            )}
                        </div>
                        <div className="mono-label text-[var(--text-secondary)]/60 mt-6 transition-colors group-hover:text-primary font-bold">
                            {stat.label.replace(" ", "_").toUpperCase()}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
