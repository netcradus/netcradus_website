import React from "react";
import { Search, ShieldAlert, Zap, Rocket } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    num: "01",
    label: "Dossier Ingestion",
    title: "Strategic Consultation",
    desc: "A focused briefing to map your risk perimeter, tactical objectives, and infrastructure footprint.",
    icon: <Search size={20} />
  },
  {
    num: "02",
    label: "Reconnaissance",
    title: "Holistic Discovery",
    desc: "Deep integration where our architects map every node and vulnerability in your environment.",
    icon: <ShieldAlert size={20} />
  },
  {
    num: "03",
    label: "Deployment",
    title: "Surgical Implementation",
    desc: "Precision execution deploying ACIS and hardened infrastructure.",
    icon: <Zap size={20} />
  },
  {
    num: "04",
    label: "Ascension",
    title: "Continuous Optimization",
    desc: "24/7 oversight evolving your defense into a self-healing ecosystem.",
    icon: <Rocket size={20} />
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-premium-radial relative overflow-hidden transition-colors duration-500">

      <div className="container">

        <div className="reveal text-center mb-20 max-w-screen-2xl mx-auto px-8">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">
            Operational Protocol
          </span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-zinc-900 dark:text-white mb-6 tracking-tighter leading-none">
            The Path to <span className="text-accent italic">Immunity.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            A high-velocity engagement model designed for rapid time-to-value and surgical precision in defense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto px-8">
          {steps.map((step, index) => (
            <div key={index} className="premium-card p-12 group hover:-translate-y-2 transition-all duration-500 relative">
              <div className="flex justify-between items-start mb-10">
                <div className="text-5xl font-display font-black text-zinc-100 dark:text-zinc-900 leading-none group-hover:text-accent/20 transition-colors uppercase">{step.num}</div>
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-lg">{step.icon}</div>
              </div>
              <span className="text-[9px] font-bold text-accent uppercase tracking-[0.4em] mb-4 block group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{step.label}</span>
              <h3 className="text-xl font-display font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">{step.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}