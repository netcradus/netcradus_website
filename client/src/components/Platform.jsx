import React from "react";

export default function Platform() {
  return (
    <div className="bg-[#050505] text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="uppercase tracking-[0.3em] text-xs text-orange-400">
           // Our Technology
          </span>

          <h1 className="text-5xl md:text-6xl font-display font-semibold mt-4 leading-tight">
  The Netcradus <br />
  <span className="italic text-gray-500">
    Security Platform
  </span>
</h1>

         <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-lg font-sans">
            Our platform combines autonomous cybersecurity intelligence with
            powerful enterprise CRM infrastructure to create a unified digital
            command center for modern organizations.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            alt="Cyber security platform"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </section>

      {/* ACIS SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-center">

        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec"
            alt="AI cybersecurity"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div>
        <h2 className="text-4xl font-display font-semibold mb-6">
  ACIS — Autonomous Cyber Intelligence System
</h2>

          <p className="text-gray-400 leading-relaxed mb-6 font-sans">
            ACIS is our proprietary AI-powered cybersecurity platform designed
            to detect, analyze, and neutralize cyber threats autonomously.
            Unlike traditional security systems that depend heavily on manual
            monitoring, ACIS continuously learns from network behavior and
            adapts to new threats in real time.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>• AI-driven threat detection and behavior analysis</li>
            <li>• Autonomous response orchestration</li>
            <li>• Continuous penetration simulation</li>
            <li>• Cloud-native scalable architecture</li>
            <li>• Real-time threat intelligence integration</li>
          </ul>
        </div>

      </section>

      {/* CRM SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-center">

        <div>
        <h2 className="text-4xl font-display font-semibold mb-6">
  Enterprise CRM Infrastructure
</h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Our CRM platform empowers organizations with advanced tools to
            manage customer relationships, sales pipelines, support operations,
            and analytics from a single unified interface.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Built for scalability and security, the Netcradus CRM integrates
            seamlessly with business workflows while providing powerful
            automation and AI insights to improve operational efficiency.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>• Sales pipeline management</li>
            <li>• Customer support automation</li>
            <li>• Real-time analytics and reporting</li>
            <li>• Marketing campaign automation</li>
            <li>• Enterprise-grade data security</li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="CRM dashboard"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

      </section>

      {/* PLATFORM FEATURES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2  className="text-4xl font-display font-semibold mb-6">
            Unified Platform Architecture
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            ACIS and CRM operate together to create a powerful ecosystem that
            combines cybersecurity intelligence with operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-display mb-4">AI Intelligence Layer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Machine learning algorithms continuously analyze behavioral
              patterns across systems to identify anomalies and emerging
              threats before they escalate.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
           <h3 className="text-xl font-display mb-4">Automation Engine</h3>
           <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Automated workflows handle incident response, ticket management,
              customer engagement, and operational tasks without manual
              intervention.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-display mb-4">Enterprise Control Center</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A centralized dashboard providing full visibility into security
              operations, customer interactions, and business intelligence.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}