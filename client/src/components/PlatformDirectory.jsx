import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, Zap, Bug, Key, AlertTriangle, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export const NETCRADUS_PLATFORMS = [
  {
    id: 'xdr',
    name: 'NetCradus XDR',
    icon: Shield,
    path: '/platform/endpoint-detection',
    tagline: 'Endpoint + Threat Hunting + Detection',
    description: 'Unified EPP, EDR, and AI threat hunting across enterprise endpoints and cloud workloads.',
    bullets: ['Endpoint Protection (EPP)', 'Threat Hunting', 'Real-Time Incident Detection'],
    color: '#7C3AED',
    bgBadge: 'rgba(124, 58, 237, 0.12)',
    border: 'rgba(124, 58, 237, 0.3)'
  },
  {
    id: 'siem',
    name: 'NetCradus SIEM',
    icon: Activity,
    path: '/acis',
    tagline: 'Log Management + Detection + Correlation',
    description: 'High-speed log ingestion, automated event correlation, and AI-driven SIEM analytics.',
    bullets: ['Log Management', 'AI Threat Detection', 'Event Correlation Engine'],
    color: '#3B82F6',
    bgBadge: 'rgba(59, 130, 246, 0.12)',
    border: 'rgba(59, 130, 246, 0.3)'
  },
  {
    id: 'soar',
    name: 'NetCradus SOAR',
    icon: Zap,
    path: '/acis',
    tagline: 'Automated Response + Playbooks',
    description: 'Machine-speed incident response, automated playbooks, and SOC workflow orchestration.',
    bullets: ['Automated Response', 'Orchestration Playbooks', 'Machine-Speed Containment'],
    color: '#EC4899',
    bgBadge: 'rgba(236, 72, 153, 0.12)',
    border: 'rgba(236, 72, 153, 0.3)'
  },
  {
    id: 'cti',
    name: 'NetCradus CTI',
    icon: Bug,
    path: '/platform',
    tagline: 'Threat Intelligence',
    description: 'Adversary tradecraft profiling, IOC extraction, and global threat intelligence feeds.',
    bullets: ['Threat Intelligence Feeds', 'Malware Reverse Engineering', 'MITRE ATT&CK Mapping'],
    color: '#10B981',
    bgBadge: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.3)'
  },
  {
    id: 'pam',
    name: 'NetCradus PAM',
    icon: Key,
    path: '/platform',
    tagline: 'Privileged Access Management',
    description: 'Identity verification, PAM vault security, and continuous zero-trust access enforcement.',
    bullets: ['Privileged Access Vault', 'Zero Trust Architecture', 'Session Anomaly Detection'],
    color: '#F43F5E',
    bgBadge: 'rgba(244, 63, 94, 0.12)',
    border: 'rgba(244, 63, 94, 0.3)'
  },
  {
    id: 'grc',
    name: 'NetCradus GRC',
    icon: AlertTriangle,
    path: '/platform',
    tagline: 'Risk + Compliance',
    description: 'Continuous risk scoring, vulnerability audit frameworks, and GRC compliance automation.',
    bullets: ['Risk Scoring Engine', 'Vulnerability Auditing', 'Compliance Frameworks'],
    color: '#F59E0B',
    bgBadge: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.3)'
  },
  {
    id: 'aisecurity',
    name: 'NetCradus AI Security',
    icon: Cpu,
    path: '/services/ai-security',
    tagline: 'AI/ML Security + AI Threat Detection',
    description: 'Protect enterprise AI pipelines, LLM prompts, and machine learning model vectors.',
    bullets: ['LLM Threat Protection', 'AI Model Defense', 'ML Data Poisoning Detection'],
    color: '#8B5CF6',
    bgBadge: 'rgba(139, 92, 246, 0.12)',
    border: 'rgba(139, 92, 246, 0.3)'
  }
];

export default function PlatformDirectory({ onSelectPlatform }) {
  return (
    <section className="relative bg-[#06030b] py-20 md:py-28 border-t border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,107,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
        
        {/* CrowdStrike Style Main Card Container */}
        <div className="bg-[#120b20]/90 border border-white/15 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FF6B00] animate-pulse" />
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-2">
                Platform <ArrowRight className="w-6 h-6 text-[#FF6B00]" />
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-medium max-w-xl">
              Explore our 7 specialized cybersecurity engines built into one unified autonomous defense architecture.
            </p>
          </div>

          {/* Platform Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {NETCRADUS_PLATFORMS.map((plat) => {
              const IconComp = plat.icon;
              return (
                <Link
                  key={plat.id}
                  to={plat.path}
                  className="group relative bg-[#18112b] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#1e1537] hover:border-[#FF6B00]/50 shadow-md cursor-pointer flex flex-col justify-between no-underline"
                  style={{
                    borderColor: plat.border
                  }}
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                        style={{ backgroundColor: plat.bgBadge, color: plat.color }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md text-white/80 bg-white/5 border border-white/10">
                        {plat.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Platform Title */}
                    <h3 className="text-lg font-black text-white group-hover:text-[#FF6B00] transition-colors mb-1.5 flex items-center justify-between">
                      <span>{plat.name}</span>
                      <ArrowRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>

                    {/* Tagline Highlight */}
                    <div className="inline-block mb-3">
                      <span
                        className="text-xs font-bold tracking-wide px-2.5 py-1 rounded-lg"
                        style={{ color: plat.color, backgroundColor: plat.bgBadge }}
                      >
                        → {plat.tagline}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      {plat.description}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-1.5 pt-3 border-t border-white/10 text-xs text-gray-300 font-medium">
                      {plat.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: plat.color }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
