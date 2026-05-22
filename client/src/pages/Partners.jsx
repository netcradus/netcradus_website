import { Link } from "react-router-dom";
import {
  Shield,
  Server,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  Code,
  Settings,
  Megaphone,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────────── */

const benefits = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security Expertise",
    text: "Access advanced cybersecurity capabilities including SOC operations, SIEM deployment, threat monitoring, incident response, vulnerability management, and cloud security services.",
  },
  {
    icon: Server,
    title: "Scalable Delivery Infrastructure",
    text: "Leverage Netcradus technical delivery teams, operational processes, and security expertise to support projects of any scale.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth Opportunities",
    text: "Generate recurring revenue through cybersecurity services, managed solutions, software licensing, cloud services, and long-term support contracts.",
  },
  {
    icon: Users,
    title: "Dedicated Partner Enablement",
    text: "Partners receive onboarding support, technical consultation, sales assistance, marketing collaboration, and access to partner resources.",
  },
  {
    icon: Award,
    title: "White-Label & Co-Branded Delivery",
    text: "Enable your organization to offer cybersecurity services under your own brand while utilizing Netcradus backend expertise and operational capabilities.",
  },
];

const models = [
  {
    num: "01",
    title: "Referral Partner Program",
    accent: "#e8400a",
    description:
      "Refer qualified leads to Netcradus and earn competitive commissions on successful engagements. Ideal for organizations that want to monetize their network without direct delivery responsibility.",
    features: [
      "Simple referral process",
      "Competitive commission structure",
      "Dedicated partner support",
      "Real-time lead tracking",
      "No delivery obligation",
    ],
    idealFor: ["Consultants", "Advisors", "Industry Influencers", "Brokers"],
  },
  {
    num: "02",
    title: "Authorized Reseller Program",
    accent: "#e8400a",
    description:
      "Resell Netcradus solutions, platforms, and managed services under a structured commercial agreement with partner margins and co-selling support.",
    features: [
      "Partner pricing & margins",
      "Sales enablement support",
      "Co-selling opportunities",
      "Technical pre-sales access",
      "Branded proposal support",
    ],
    idealFor: ["IT Resellers", "VARs", "MSPs", "Technology Distributors", "Cloud Brokers"],
  },
  {
    num: "03",
    title: "White-Label Security Partnership",
    accent: "#e8400a",
    description:
      "Deliver enterprise cybersecurity services to your clients under your own brand. All delivery is backed by Netcradus SOC, SIEM, and security operations — protected by NDA and confidentiality agreements.",
    features: [
      "Full white-label branding",
      "NDA-protected engagement",
      "Confidential service delivery",
      "Dedicated delivery team",
      "Escalation & incident support",
    ],
    idealFor: ["IT Companies", "MSSPs", "Digital Agencies", "System Integrators"],
  },
  {
    num: "04",
    title: "Technology Alliance Program",
    accent: "#e8400a",
    description:
      "Integrate your technology platform with Netcradus ACIS, SIEM, and security infrastructure. Collaborate on joint AI-driven security solutions and go-to-market initiatives.",
    features: [
      "API & integration access",
      "Joint solution development",
      "AI security collaboration",
      "Co-innovation programs",
      "Shared technical roadmap",
    ],
    idealFor: ["Software Vendors", "SaaS Platforms", "AI Companies", "Security Tool Providers"],
  },
  {
    num: "05",
    title: "Strategic Enterprise Partnership",
    accent: "#8b5cf6",
    description:
      "A custom, high-value partnership model for large enterprises and strategic organizations. Tailored commercial structures, dedicated account management, and enterprise-level collaboration.",
    features: [
      "Custom commercial terms",
      "Dedicated account team",
      "Executive-level engagement",
      "Joint business planning",
      "Priority support & SLAs",
    ],
    idealFor: ["Large Enterprises", "Government Bodies", "Global System Integrators"],
    badge: "Custom",
  },
];

const partnerBenefitCols = [
  {
    icon: DollarSign,
    title: "Commercial Benefits",
    items: [
      "Recurring revenue opportunities",
      "Competitive partner margins",
      "Long-term service contracts",
      "Enterprise project collaboration",
      "Business expansion opportunities",
    ],
  },
  {
    icon: Code,
    title: "Technical Benefits",
    items: [
      "Access to cybersecurity specialists",
      "Deployment & implementation support",
      "Technical training sessions",
      "Security architecture consultation",
      "Solution engineering assistance",
    ],
  },
  {
    icon: Settings,
    title: "Operational Benefits",
    items: [
      "Dedicated account management",
      "Escalation support",
      "Partner success assistance",
      "Operational coordination",
      "Service delivery support",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Benefits",
    items: [
      "Co-branded campaigns",
      "Joint webinars and events",
      "Sales collateral access",
      "Partner listing opportunities",
      "Market development support",
    ],
  },
];

const tiers = [
  {
    name: "Registered Partner",
    color: "#9ca3af",
    glow: "rgba(156,163,175,0.15)",
    desc: "Entry-level access for approved organizations beginning collaboration with Netcradus.",
    perks: ["Partner portal access", "Basic resources", "Onboarding support"],
  },
  {
    name: "Silver Partner",
    color: "#cbd5e1",
    glow: "rgba(203,213,225,0.15)",
    desc: "For organizations actively selling and supporting Netcradus solutions with verified engagement and delivery capability.",
    perks: ["Enhanced margins", "Sales enablement", "Co-sell opportunities"],
  },
  {
    name: "Gold Partner",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
    desc: "Advanced-level partnership with enhanced commercial benefits, strategic collaboration opportunities, and priority support.",
    perks: ["Priority support", "Joint marketing", "Dedicated account manager"],
  },
  {
    name: "Platinum Partner",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.2)",
    desc: "Elite partnership status for high-performing strategic organizations with dedicated enablement and enterprise engagement support.",
    perks: ["Executive alignment", "Custom SLAs", "Strategic roadmap access"],
  },
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Education",
  "Government & Public Sector",
  "Retail & E-Commerce",
  "Manufacturing",
  "Logistics & Supply Chain",
  "SaaS & Technology",
  "SMEs & Enterprises",
];

const onboardingSteps = [
  {
    num: "1",
    icon: "📋",
    title: "Partnership Application",
    desc: "Submit organization profile and business information.",
  },
  {
    num: "2",
    icon: "🔍",
    title: "Evaluation & Verification",
    desc: "Assessment of business capabilities, market alignment, and partnership objectives.",
  },
  {
    num: "3",
    icon: "📝",
    title: "Commercial & Legal Agreement",
    desc: "Execution of partnership agreements, NDA, and operational documentation.",
  },
  {
    num: "4",
    icon: "🎓",
    title: "Enablement & Training",
    desc: "Access to onboarding sessions, technical resources, pricing models, and partner support channels.",
  },
  {
    num: "5",
    icon: "🚀",
    title: "Go-To-Market Activation",
    desc: "Begin delivering and promoting Netcradus solutions with ongoing partner support.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function Partners() {
  return (
    <div style={{ color: "var(--color-text-primary)" }}>
      <style>{`
        .partners-hero {
          min-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: var(--color-bg);
          padding: 6rem 1.5rem;
        }
        .partners-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 55% at 50% 45%, rgba(232,64,10,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .partners-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 40% 30% at 80% 20%, rgba(232,64,10,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .partners-section {
          padding: 96px 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }
        .section-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e8400a;
          border: 1px solid rgba(232,64,10,0.3);
          border-radius: 999px;
          padding: 0.3rem 0.9rem;
          margin-bottom: 1.25rem;
        }
        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--color-text-primary);
          margin-bottom: 1rem;
          line-height: 1.15;
        }
        .section-subtitle {
          font-size: 16px;
          color: var(--color-text-secondary);
          line-height: 1.7;
          max-width: 640px;
        }
        /* Benefit Cards */
        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .benefit-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.75rem;
          transition: all 0.28s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(232,64,10,0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(232,64,10,0.1);
        }
        .benefit-card:hover::before { opacity: 1; }
        .benefit-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(232,64,10,0.1);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
          color: #e8400a;
        }
        .benefit-card h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--color-text-primary);
          letter-spacing: -0.01em;
        }
        .benefit-card p {
          font-size: 14px;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
        }
        /* Model Cards */
        .model-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .model-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .model-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(232,64,10,0.1);
        }
        .model-num {
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
          opacity: 0.06;
          position: absolute;
          top: 1.25rem; right: 1.5rem;
          font-variant-numeric: tabular-nums;
          color: var(--color-text-primary);
        }
        .model-title {
          font-size: 18px;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .model-desc {
          font-size: 14px;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .model-features {
          list-style: none;
          padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0.4rem;
          margin-bottom: 1.25rem;
        }
        .model-features li {
          font-size: 13px;
          color: var(--color-text-secondary);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .model-features li::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #e8400a;
          flex-shrink: 0;
        }
        .chip-row {
          display: flex; flex-wrap: wrap; gap: 0.4rem;
        }
        .chip {
          font-size: 11.5px;
          font-weight: 600;
          border-radius: 999px;
          padding: 0.25rem 0.7rem;
          background: rgba(232,64,10,0.1);
          color: #e8400a;
          border: 1px solid rgba(232,64,10,0.25);
        }
        .chip-industry {
          background: transparent;
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border);
          transition: all 0.2s;
        }
        .chip-industry:hover {
          border-color: #e8400a;
          color: #e8400a;
        }
        .model-badge-custom {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: linear-gradient(135deg,#8b5cf6,#a78bfa);
          color: #fff;
          border-radius: 999px;
          padding: 0.2rem 0.65rem;
          margin-bottom: 0.5rem;
        }
        /* Benefits columns */
        .benefits-col-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .benefits-col {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.75rem;
        }
        .benefits-col-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: rgba(232,64,10,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #e8400a;
          margin-bottom: 1rem;
        }
        .benefits-col h3 {
          font-size: 16px; font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .benefits-col ul {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0.55rem;
        }
        .benefits-col li {
          font-size: 13.5px;
          color: var(--color-text-secondary);
          display: flex; align-items: flex-start; gap: 0.5rem;
          line-height: 1.4;
        }
        .benefits-col li::before {
          content: '→';
          color: #e8400a;
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        /* Tier Cards */
        .tier-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .tier-card {
          border-radius: 16px;
          border: 1px solid;
          padding: 2rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .tier-card:hover { transform: translateY(-4px); }
        .tier-name {
          font-size: 17px; font-weight: 800;
          margin-bottom: 0.65rem;
          letter-spacing: -0.02em;
        }
        .tier-desc {
          font-size: 13px;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }
        .tier-perks {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0.4rem;
        }
        .tier-perks li {
          font-size: 12.5px;
          color: var(--color-text-secondary);
          display: flex; align-items: center; justify-content: center; gap: 0.4rem;
        }
        /* Timeline */
        .timeline-wrap {
          display: flex;
          gap: 0;
          margin-top: 3rem;
          position: relative;
        }
        .timeline-wrap::before {
          content: '';
          position: absolute;
          top: 32px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(232,64,10,0.4), transparent);
        }
        .timeline-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1rem;
          position: relative;
        }
        .timeline-num {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: var(--color-surface);
          border: 2px solid #e8400a;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          font-weight: 900;
          color: #e8400a;
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          box-shadow: 0 0 20px rgba(232,64,10,0.2);
        }
        .timeline-step h4 {
          font-size: 14px; font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }
        .timeline-step p {
          font-size: 12.5px;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin: 0;
        }
        /* Bottom CTA */
        .partners-cta-section {
          text-align: center;
          padding: 100px 1.5rem;
          background: var(--color-surface);
          position: relative;
          overflow: hidden;
        }
        .partners-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,64,10,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-btn-orange {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #e8400a;
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          padding: 1rem 2.5rem;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
          letter-spacing: 0.01em;
        }
        .cta-btn-orange:hover {
          background: #ff5520;
          transform: scale(1.03);
        }
        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--color-text-primary);
          font-weight: 700;
          font-size: 15px;
          padding: 0.85rem 2rem;
          border-radius: 999px;
          border: 1px solid var(--color-border);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          text-decoration: none;
        }
        .cta-btn-outline:hover {
          border-color: #e8400a;
          color: #e8400a;
        }
        .contact-info-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 1.75rem;
          font-size: 14px;
          color: var(--color-text-secondary);
        }
        .contact-info-row a {
          color: var(--color-text-secondary);
          text-decoration: none;
          display: flex; align-items: center; gap: 0.4rem;
          transition: color 0.2s;
        }
        .contact-info-row a:hover { color: #e8400a; }
        @media (max-width: 768px) {
          .timeline-wrap {
            flex-direction: column;
            gap: 2rem;
          }
          .timeline-wrap::before { display: none; }
          .timeline-step { flex-direction: row; text-align: left; gap: 1rem; }
          .timeline-num { margin-bottom: 0; flex-shrink: 0; width: 48px; height: 48px; font-size: 18px; }
          .model-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── SECTION 1: HERO ── */}
      <section className="partners-hero" style={{ padding: 0 }}>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 720, padding: "8rem 1.5rem" }}>
          <span className="section-badge">Global Partner Program</span>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "var(--color-text-primary)",
            marginBottom: "1.5rem",
          }}>
            Building the Future of{" "}
            <span style={{ color: "#e8400a" }}>Cybersecurity</span>{" "}
            Together
          </h1>
          <p style={{
            fontSize: 18,
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: 580,
            margin: "0 auto 2.5rem",
          }}>
            At Netcradus, we believe strategic partnerships are the foundation
            of scalable cybersecurity innovation.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/partners/apply" className="cta-btn-orange">
              Become a Partner <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="cta-btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY PARTNER ── */}
      <section style={{ background: "var(--color-bg)", padding: "96px 1.5rem" }}>
        <div className="partners-section" style={{ padding: 0 }}>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <span className="section-badge">Why Partner With Us</span>
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Why Partner With Netcradus
          </h2>
          <div className="benefit-grid">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-card">
                <div className="benefit-icon">
                  <b.icon size={22} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PARTNERSHIP MODELS ── */}
      <section style={{ background: "var(--color-surface)", padding: "96px 1.5rem" }}>
        <div className="partners-section" style={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>
            <span className="section-badge">Partnership Models</span>
            <h2 className="section-title">Partnership Models</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Choose the model that fits your organization
            </p>
          </div>
          <div className="model-grid">
            {models.map((m) => (
              <div key={m.num} className="model-card">
                <span className="model-num">{m.num}</span>
                {m.badge && <span className="model-badge-custom">{m.badge}</span>}
                <h3 className="model-title" style={{ color: m.accent === "#8b5cf6" ? "#a78bfa" : "var(--color-text-primary)" }}>
                  {m.title}
                </h3>
                <p className="model-desc">{m.description}</p>
                <ul className="model-features">
                  {m.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div style={{ marginTop: "auto" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}>
                    Ideal For
                  </p>
                  <div className="chip-row">
                    {m.idealFor.map((i) => (
                      <span key={i} className="chip">{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PARTNER BENEFITS ── */}
      <section style={{ background: "var(--color-bg)", padding: "96px 1.5rem" }}>
        <div className="partners-section" style={{ padding: 0 }}>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <span className="section-badge">What You Get</span>
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Partner Benefits</h2>
          <div className="benefits-col-grid">
            {partnerBenefitCols.map((col) => (
              <div key={col.title} className="benefits-col">
                <div className="benefits-col-icon">
                  <col.icon size={20} />
                </div>
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TIER STRUCTURE ── */}
      <section style={{ background: "var(--color-surface)", padding: "96px 1.5rem" }}>
        <div className="partners-section" style={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>
            <span className="section-badge">Partner Tiers</span>
            <h2 className="section-title">Partner Tier Structure</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Progress through tiers as you grow your partnership with Netcradus
            </p>
          </div>
          <div className="tier-grid">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className="tier-card"
                style={{
                  borderColor: `${tier.color}33`,
                  background: `radial-gradient(ellipse at 50% 0%, ${tier.glow} 0%, var(--color-surface) 60%)`,
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: `${tier.color}20`,
                  border: `2px solid ${tier.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: 18, fontWeight: 900, color: tier.color,
                }}>
                  {i + 1}
                </div>
                <p className="tier-name" style={{ color: tier.color }}>{tier.name}</p>
                <p className="tier-desc">{tier.desc}</p>
                <ul className="tier-perks">
                  {tier.perks.map((p) => (
                    <li key={p}>
                      <CheckCircle size={13} style={{ color: tier.color, flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INDUSTRIES ── */}
      <section style={{ background: "var(--color-bg)", padding: "80px 1.5rem" }}>
        <div className="partners-section" style={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>
            <span className="section-badge">Industries</span>
            <h2 className="section-title">Industries We Support</h2>
          </div>
          <div className="chip-row" style={{ justifyContent: "center", marginTop: "2rem", gap: "0.65rem" }}>
            {industries.map((ind) => (
              <span key={ind} className="chip chip-industry" style={{ fontSize: 13, padding: "0.45rem 1rem" }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: ONBOARDING PROCESS ── */}
      <section style={{ background: "var(--color-surface)", padding: "96px 1.5rem" }}>
        <div className="partners-section" style={{ padding: 0 }}>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <span className="section-badge">How It Works</span>
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Partner Onboarding Process
          </h2>
          <div className="timeline-wrap">
            {onboardingSteps.map((step) => (
              <div key={step.num} className="timeline-step">
                <div className="timeline-num">{step.num}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: BOTTOM CTA ── */}
      <section className="partners-cta-section">
        <div style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto" }}>
          <span className="section-badge">Join Us</span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "var(--color-text-primary)",
            marginBottom: "1.25rem",
            lineHeight: 1.15,
          }}>
            Become a Netcradus Partner
          </h2>
          <p style={{
            fontSize: 16,
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
            marginBottom: "2.25rem",
            maxWidth: 560,
            margin: "0 auto 2.25rem",
          }}>
            Join the Netcradus Global Partner Ecosystem and expand your
            cybersecurity capabilities through strategic collaboration,
            enterprise-grade delivery, and scalable technology solutions.
          </p>
          <Link to="/partners/apply" className="cta-btn-orange" style={{ fontSize: 17, padding: "1.1rem 3rem" }}>
            Apply Now <ArrowRight size={20} />
          </Link>
          <div className="contact-info-row">
            <a href="mailto:info@netcradus.com">
              <Mail size={15} /> info@netcradus.com
            </a>
            <a href="tel:18001210088800">
              <Phone size={15} /> 1800 12100 8800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
