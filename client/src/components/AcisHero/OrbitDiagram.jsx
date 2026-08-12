import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';
import OrbitNode from './OrbitNode';
import styles from './AcisHero.module.css';

// 9 Inner Ring Security Capability Nodes
const INNER_RING_NODES = [
  { icon: 'shieldCheck', label: '24/7 SOC Triage', subtitle: 'Continuous SOC Monitoring' },
  { icon: 'radar', label: 'VAPT Scanner', subtitle: 'Vulnerability Assessment' },
  { icon: 'brain', label: 'AI Threat Engine', subtitle: 'Machine-Speed Detection' },
  { icon: 'lock', label: 'Zero Trust Access', subtitle: 'Perimeter Authentication' },
  { icon: 'zap', label: 'Sub-15m Containment', subtitle: 'Guaranteed SLA Response' },
  { icon: 'activity', label: 'Telemetry Stream', subtitle: 'Real-Time Log Ingestion' },
  { icon: 'network', label: 'Mesh Defense', subtitle: 'Microsegmentation' },
  { icon: 'database', label: 'AES-256 Vault', subtitle: 'Data Loss Prevention' },
  { icon: 'cloud', label: 'Cloud Sentinel', subtitle: 'Multi-Cloud Workload Protection' },
];

// 8 Outer Ring Agentic-Ops Nodes
const OUTER_RING_NODES = [
  { icon: 'radio', label: 'Canary Deception', subtitle: 'Honeypots & Lures' },
  { icon: 'server', label: 'Self-Healing Nodes', subtitle: 'Automated Workload Recovery' },
  { icon: 'eye', label: 'Predictive Triage', subtitle: 'Behavioral Anomaly Analysis' },
  { icon: 'shieldAlert', label: 'Ransomware Shield', subtitle: 'Crypto-Locker Neutralization' },
  { icon: 'terminal', label: 'SOAR Playbooks', subtitle: 'Automated Incident Orchestration' },
  { icon: 'checkCircle', label: 'Compliance Audit', subtitle: 'Real-Time ISO 27001 / SOC 2' },
  { icon: 'layers', label: 'Single-Pane Glass', subtitle: 'Unified Console Visibility' },
  { icon: 'cpu', label: 'Autonomous Patching', subtitle: 'Zero-Day Mitigation' },
];

export default function OrbitDiagram() {
  return (
    <section id="acis-architecture" className={styles.orbitSection}>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className={styles.heroEyebrow}>
          <Icon name="sparkles" size={14} />
          <span>Multi-Layered Cyber Fabric</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sora tracking-tight mb-4">
          Concentric <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ec4c8c]">Autonomous Defense</span> Architecture
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          The ACIS™ engine orchestrates security capabilities and agentic operations in concentric defensive rings around your core digital assets.
        </p>
      </div>

      <div className={styles.orbitContainer}>
        {/* Ring Dashed Background Outlines */}
        <div className={styles.orbitRingInner} />
        <div className={styles.orbitRingOuter} />

        {/* Orbiting Satellite Dots */}
        <div className={styles.satelliteRingInner}>
          <div className={styles.satelliteDot} />
        </div>
        <div className={styles.satelliteRingOuter}>
          <div className={`${styles.satelliteDot} ${styles.satelliteDotCyan}`} />
        </div>

        {/* Center "Unified Protection" Core Node */}
        <div className={styles.centerCore}>
          <div className={styles.corePulse} />
          <Icon name="shieldCheck" size={36} color="#e8400a" />
          <div className={styles.coreTitle}>Unified Protection</div>
          <div className={styles.coreSub}>ACIS CORE ENGINE</div>
        </div>

        {/* Inner Ring Nodes (Radius 220px) */}
        {INNER_RING_NODES.map((node, i) => (
          <OrbitNode
            key={`inner-${i}`}
            icon={node.icon}
            label={node.label}
            subtitle={node.subtitle}
            ringRadius={220}
            index={i}
            total={INNER_RING_NODES.length}
            tone="inner"
          />
        ))}

        {/* Outer Ring Nodes (Radius 330px) */}
        {OUTER_RING_NODES.map((node, i) => (
          <OrbitNode
            key={`outer-${i}`}
            icon={node.icon}
            label={node.label}
            subtitle={node.subtitle}
            ringRadius={330}
            index={i}
            total={OUTER_RING_NODES.length}
            tone="outer"
          />
        ))}
      </div>
    </section>
  );
}
