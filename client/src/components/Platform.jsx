import React from "react";

export default function Platform() {
  return (
    <div className="bg-background transition-colors duration-500">

      {/* HERO */}
      {/* HERO */}
      <section className="max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24 py-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <div className="reveal">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">
            // Our Technology
          </span>

          <h1 className="text-4xl md:text-7xl font-display font-black text-text-primary leading-[1.1] mb-8 tracking-tighter">
            The Netcradus <br />
            <span className="italic text-accent">
              Security Platform
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg font-sans">
            Our platform combines autonomous cybersecurity intelligence with
            powerful enterprise CRM infrastructure to create a unified digital
            command center for modern organizations.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-premium reveal group">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            alt="Cyber security platform"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
          />
        </div>
      </section>

      {/* ACIS SECTION */}

      <section className="max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24 py-24 grid lg:grid-cols-2 gap-20 items-center">

        <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-premium order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec"
            alt="AI cybersecurity"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary tracking-tight leading-tight">
            ACIS — Autonomous Cyber Immune System
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-sans">
            ACIS is our proprietary AI-powered cybersecurity platform designed
            to detect, analyze, and neutralize cyber threats autonomously.
            Unlike traditional security systems that depend heavily on manual
            monitoring, ACIS continuously learns from network behavior and
            adapts to new threats in real time.
          </p>

          <ul className="space-y-4">
            {["AI-driven threat detection", "Autonomous response orchestration", "Continuous penetration simulation", "Cloud-native architecture", "Real-time intelligence"].map(item => (
              <li key={item} className="flex items-center gap-3 text-text-primary font-bold text-sm tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* CRM SECTION */}

      <section className="max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24 py-24 grid lg:grid-cols-2 gap-20 items-center">

        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary tracking-tight leading-tight">
            Enterprise CRM Infrastructure
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            Our CRM platform empowers organizations with advanced tools to
            manage customer relationships, sales pipelines, support operations,
            and analytics from a single unified interface.
          </p>

          <ul className="space-y-4">
            {["Sales pipeline management", "Customer support automation", "Real-time analytics", "Marketing automation", "Enterprise data security"].map(item => (
              <li key={item} className="flex items-center gap-3 text-text-primary font-bold text-sm tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-premium">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="CRM dashboard"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

      </section>

      {/* PLATFORM FEATURES */}

      <section className="max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24 py-24">

        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary tracking-tight leading-tight">
            Unified Platform Architecture
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            ACIS and CRM operate together to create a powerful ecosystem that
            combines cybersecurity intelligence with operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AI Intelligence Layer", desc: "Machine learning algorithms continuously analyze behavioral patterns across systems to identify anomalies." },
            { title: "Automation Engine", desc: "Automated workflows handle incident response, ticket management, customer engagement, and operational tasks." },
            { title: "Enterprise Control Center", desc: "A centralized dashboard providing full visibility into security operations, customer interactions, and business intelligence." }
          ].map((feature, idx) => (
            <div key={idx} className="premium-card p-10 group hover:-translate-y-2 transition-all duration-500">
              <h3 className="text-xl font-display font-black text-text-primary mb-6 uppercase tracking-wider group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}