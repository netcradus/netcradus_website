// // import { Link } from "react-router-dom";
// // import {
// //   Shield,
// //   Server,
// //   TrendingUp,
// //   Users,
// //   Award,
// //   DollarSign,
// //   Code,
// //   Settings,
// //   Megaphone,
// //   Mail,
// //   Phone,
// //   CheckCircle,
// //   ArrowRight,
// // } from "lucide-react";

// // /* ─── DATA ─────────────────────────────────────────────────────── */

// // const benefits = [
// //   {
// //     icon: Shield,
// //     title: "Enterprise-Grade Security Expertise",
// //     text: "Access advanced cybersecurity capabilities including SOC operations, SIEM deployment, threat monitoring, incident response, vulnerability management, and cloud security services.",
// //   },
// //   {
// //     icon: Server,
// //     title: "Scalable Delivery Infrastructure",
// //     text: "Leverage Netcradus technical delivery teams, operational processes, and security expertise to support projects of any scale.",
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "Revenue Growth Opportunities",
// //     text: "Generate recurring revenue through cybersecurity services, managed solutions, software licensing, cloud services, and long-term support contracts.",
// //   },
// //   {
// //     icon: Users,
// //     title: "Dedicated Partner Enablement",
// //     text: "Partners receive onboarding support, technical consultation, sales assistance, marketing collaboration, and access to partner resources.",
// //   },
// //   {
// //     icon: Award,
// //     title: "White-Label & Co-Branded Delivery",
// //     text: "Enable your organization to offer cybersecurity services under your own brand while utilizing Netcradus backend expertise and operational capabilities.",
// //   },
// // ];

// // const models = [
// //   {
// //     num: "01",
// //     title: "Referral Partner Program",
// //     accent: "#e8400a",
// //     description:
// //       "Refer qualified leads to Netcradus and earn competitive commissions on successful engagements. Ideal for organizations that want to monetize their network without direct delivery responsibility.",
// //     features: [
// //       "Simple referral process",
// //       "Competitive commission structure",
// //       "Dedicated partner support",
// //       "Real-time lead tracking",
// //       "No delivery obligation",
// //     ],
// //     idealFor: ["Consultants", "Advisors", "Industry Influencers", "Brokers"],
// //   },
// //   {
// //     num: "02",
// //     title: "Authorized Reseller Program",
// //     accent: "#e8400a",
// //     description:
// //       "Resell Netcradus solutions, platforms, and managed services under a structured commercial agreement with partner margins and co-selling support.",
// //     features: [
// //       "Partner pricing & margins",
// //       "Sales enablement support",
// //       "Co-selling opportunities",
// //       "Technical pre-sales access",
// //       "Branded proposal support",
// //     ],
// //     idealFor: ["IT Resellers", "VARs", "MSPs", "Technology Distributors", "Cloud Brokers"],
// //   },
// //   {
// //     num: "03",
// //     title: "White-Label Security Partnership",
// //     accent: "#e8400a",
// //     description:
// //       "Deliver enterprise cybersecurity services to your clients under your own brand. All delivery is backed by Netcradus SOC, SIEM, and security operations — protected by NDA and confidentiality agreements.",
// //     features: [
// //       "Full white-label branding",
// //       "NDA-protected engagement",
// //       "Confidential service delivery",
// //       "Dedicated delivery team",
// //       "Escalation & incident support",
// //     ],
// //     idealFor: ["IT Companies", "MSSPs", "Digital Agencies", "System Integrators"],
// //   },
// //   {
// //     num: "04",
// //     title: "Technology Alliance Program",
// //     accent: "#e8400a",
// //     description:
// //       "Integrate your technology platform with Netcradus ACIS, SIEM, and security infrastructure. Collaborate on joint AI-driven security solutions and go-to-market initiatives.",
// //     features: [
// //       "API & integration access",
// //       "Joint solution development",
// //       "AI security collaboration",
// //       "Co-innovation programs",
// //       "Shared technical roadmap",
// //     ],
// //     idealFor: ["Software Vendors", "SaaS Platforms", "AI Companies", "Security Tool Providers"],
// //   },
// //   {
// //     num: "05",
// //     title: "Strategic Enterprise Partnership",
// //     accent: "#8b5cf6",
// //     description:
// //       "A custom, high-value partnership model for large enterprises and strategic organizations. Tailored commercial structures, dedicated account management, and enterprise-level collaboration.",
// //     features: [
// //       "Custom commercial terms",
// //       "Dedicated account team",
// //       "Executive-level engagement",
// //       "Joint business planning",
// //       "Priority support & SLAs",
// //     ],
// //     idealFor: ["Large Enterprises", "Government Bodies", "Global System Integrators"],
// //     badge: "Custom",
// //   },
// // ];

// // const partnerBenefitCols = [
// //   {
// //     icon: DollarSign,
// //     title: "Commercial Benefits",
// //     items: [
// //       "Recurring revenue opportunities",
// //       "Competitive partner margins",
// //       "Long-term service contracts",
// //       "Enterprise project collaboration",
// //       "Business expansion opportunities",
// //     ],
// //   },
// //   {
// //     icon: Code,
// //     title: "Technical Benefits",
// //     items: [
// //       "Access to cybersecurity specialists",
// //       "Deployment & implementation support",
// //       "Technical training sessions",
// //       "Security architecture consultation",
// //       "Solution engineering assistance",
// //     ],
// //   },
// //   {
// //     icon: Settings,
// //     title: "Operational Benefits",
// //     items: [
// //       "Dedicated account management",
// //       "Escalation support",
// //       "Partner success assistance",
// //       "Operational coordination",
// //       "Service delivery support",
// //     ],
// //   },
// //   {
// //     icon: Megaphone,
// //     title: "Marketing Benefits",
// //     items: [
// //       "Co-branded campaigns",
// //       "Joint webinars and events",
// //       "Sales collateral access",
// //       "Partner listing opportunities",
// //       "Market development support",
// //     ],
// //   },
// // ];

// // const tiers = [
// //   {
// //     name: "Registered Partner",
// //     color: "#9ca3af",
// //     glow: "rgba(156,163,175,0.15)",
// //     desc: "Entry-level access for approved organizations beginning collaboration with Netcradus.",
// //     perks: ["Partner portal access", "Basic resources", "Onboarding support"],
// //   },
// //   {
// //     name: "Silver Partner",
// //     color: "#cbd5e1",
// //     glow: "rgba(203,213,225,0.15)",
// //     desc: "For organizations actively selling and supporting Netcradus solutions with verified engagement and delivery capability.",
// //     perks: ["Enhanced margins", "Sales enablement", "Co-sell opportunities"],
// //   },
// //   {
// //     name: "Gold Partner",
// //     color: "#f59e0b",
// //     glow: "rgba(245,158,11,0.2)",
// //     desc: "Advanced-level partnership with enhanced commercial benefits, strategic collaboration opportunities, and priority support.",
// //     perks: ["Priority support", "Joint marketing", "Dedicated account manager"],
// //   },
// //   {
// //     name: "Platinum Partner",
// //     color: "#8b5cf6",
// //     glow: "rgba(139,92,246,0.2)",
// //     desc: "Elite partnership status for high-performing strategic organizations with dedicated enablement and enterprise engagement support.",
// //     perks: ["Executive alignment", "Custom SLAs", "Strategic roadmap access"],
// //   },
// // ];

// // const industries = [
// //   "Financial Services",
// //   "Healthcare",
// //   "Education",
// //   "Government & Public Sector",
// //   "Retail & E-Commerce",
// //   "Manufacturing",
// //   "Logistics & Supply Chain",
// //   "SaaS & Technology",
// //   "SMEs & Enterprises",
// // ];

// // const onboardingSteps = [
// //   {
// //     num: "1",
// //     icon: "📋",
// //     title: "Partnership Application",
// //     desc: "Submit organization profile and business information.",
// //   },
// //   {
// //     num: "2",
// //     icon: "🔍",
// //     title: "Evaluation & Verification",
// //     desc: "Assessment of business capabilities, market alignment, and partnership objectives.",
// //   },
// //   {
// //     num: "3",
// //     icon: "📝",
// //     title: "Commercial & Legal Agreement",
// //     desc: "Execution of partnership agreements, NDA, and operational documentation.",
// //   },
// //   {
// //     num: "4",
// //     icon: "🎓",
// //     title: "Enablement & Training",
// //     desc: "Access to onboarding sessions, technical resources, pricing models, and partner support channels.",
// //   },
// //   {
// //     num: "5",
// //     icon: "🚀",
// //     title: "Go-To-Market Activation",
// //     desc: "Begin delivering and promoting Netcradus solutions with ongoing partner support.",
// //   },
// // ];

// // /* ─── COMPONENT ─────────────────────────────────────────────────── */

// // export default function Partners() {
// //   return (
// //     <div style={{ color: "var(--color-text-primary)" }}>
// //       <style>{`
// //         .partners-hero {
// //           min-height: 88vh;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           text-align: center;
// //           position: relative;
// //           overflow: hidden;
// //           background-image: linear-gradient(rgba(0,0,0,0.64), rgba(0,0,0,0.64)), url('/img/partner hero bg.png');
// //           background-size: cover;
// //           background-position: center;
// //           padding: 6rem 1.5rem;
// //         }
// //         .partners-hero::before {
// //           content: '';
// //           position: absolute;
// //           inset: 0;
// //           background: radial-gradient(ellipse 60% 55% at 50% 45%, rgba(232,64,10,0.13) 0%, transparent 70%);
// //           pointer-events: none;
// //         }
// //         .partners-hero::after {
// //           content: '';
// //           position: absolute;
// //           inset: 0;
// //           background: radial-gradient(ellipse 40% 30% at 80% 20%, rgba(232,64,10,0.06) 0%, transparent 60%);
// //           pointer-events: none;
// //         }
// //         .partners-section {
// //           padding: 96px 1.5rem;
// //           max-width: 1280px;
// //           margin: 0 auto;
// //         }
// //         .section-badge {
// //           display: inline-block;
// //           font-size: 11px;
// //           font-weight: 700;
// //           letter-spacing: 0.2em;
// //           text-transform: uppercase;
// //           color: #e8400a;
// //           border: 1px solid rgba(232,64,10,0.3);
// //           border-radius: 999px;
// //           padding: 0.3rem 0.9rem;
// //           margin-bottom: 1.25rem;
// //         }
// //         .section-title {
// //           font-size: clamp(28px, 4vw, 42px);
// //           font-weight: 800;
// //           letter-spacing: -0.03em;
// //           color: var(--color-text-primary);
// //           margin-bottom: 1rem;
// //           line-height: 1.15;
// //         }
// //         .section-subtitle {
// //           font-size: 16px;
// //           color: var(--color-text-secondary);
// //           line-height: 1.7;
// //           max-width: 640px;
// //         }
// //         /* Benefit Cards */
// //         .benefit-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// //           gap: 1.5rem;
// //           margin-top: 3rem;
// //         }
// //         .why-partner-shell {
// //           position: relative;
// //           overflow: hidden;
// //           background-image: linear-gradient(rgba(0,0,0,0.64), rgba(0,0,0,0.64)), url('/img/why partner bg.png');
// //           background-size: cover;
// //           background-position: center;
// //         }
// //         .benefit-card {
// //           background: var(--color-surface);
// //           border: 1px solid var(--color-border);
// //           border-radius: 16px;
// //           padding: 1.75rem;
// //           transition: all 0.28s cubic-bezier(0.4,0,0.2,1);
// //           position: relative;
// //           overflow: hidden;
// //         }
// //         .benefit-card::before {
// //           content: '';
// //           position: absolute;
// //           top: 0; left: 0; right: 0;
// //           height: 2px;
// //           background: linear-gradient(90deg, transparent, rgba(232,64,10,0.5), transparent);
// //           opacity: 0;
// //           transition: opacity 0.3s;
// //         }
// //         .benefit-card:hover {
// //           transform: translateY(-4px);
// //           box-shadow: 0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(232,64,10,0.1);
// //         }
// //         .benefit-card:hover::before { opacity: 1; }
// //         .benefit-icon {
// //           width: 48px; height: 48px;
// //           border-radius: 12px;
// //           background: rgba(232,64,10,0.1);
// //           display: flex; align-items: center; justify-content: center;
// //           margin-bottom: 1rem;
// //           color: #e8400a;
// //         }
// //         .benefit-card h3 {
// //           font-size: 16px;
// //           font-weight: 700;
// //           margin-bottom: 0.6rem;
// //           color: var(--color-text-primary);
// //           letter-spacing: -0.01em;
// //         }
// //         .benefit-card p {
// //           font-size: 14px;
// //           color: var(--color-text-secondary);
// //           line-height: 1.6;
// //           margin: 0;
// //         }
// //         /* Model Cards */
// //         .model-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
// //           gap: 1.5rem;
// //           margin-top: 3rem;
// //         }
// //         .model-card {
// //           background: var(--color-surface);
// //           border: 1px solid var(--color-border);
// //           border-radius: 16px;
// //           padding: 2rem;
// //           position: relative;
// //           overflow: hidden;
// //           transition: all 0.28s cubic-bezier(0.4,0,0.2,1);
// //         }
// //         .model-card:hover {
// //           transform: translateY(-3px);
// //           box-shadow: 0 24px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(232,64,10,0.1);
// //         }
// //         .model-num {
// //           font-size: 48px;
// //           font-weight: 900;
// //           line-height: 1;
// //           opacity: 0.06;
// //           position: absolute;
// //           top: 1.25rem; right: 1.5rem;
// //           font-variant-numeric: tabular-nums;
// //           color: var(--color-text-primary);
// //         }
// //         .model-title {
// //           font-size: 18px;
// //           font-weight: 800;
// //           color: var(--color-text-primary);
// //           margin-bottom: 0.75rem;
// //           letter-spacing: -0.02em;
// //         }
// //         .model-desc {
// //           font-size: 14px;
// //           color: var(--color-text-secondary);
// //           line-height: 1.6;
// //           margin-bottom: 1.25rem;
// //         }
// //         .model-features {
// //           list-style: none;
// //           padding: 0; margin: 0;
// //           display: flex; flex-direction: column; gap: 0.4rem;
// //           margin-bottom: 1.25rem;
// //         }
// //         .model-features li {
// //           font-size: 13px;
// //           color: var(--color-text-secondary);
// //           display: flex; align-items: center; gap: 0.5rem;
// //         }
// //         .model-features li::before {
// //           content: '';
// //           width: 6px; height: 6px;
// //           border-radius: 50%;
// //           background: #e8400a;
// //           flex-shrink: 0;
// //         }
// //         .chip-row {
// //           display: flex; flex-wrap: wrap; gap: 0.4rem;
// //         }
// //         .chip {
// //           font-size: 11.5px;
// //           font-weight: 600;
// //           border-radius: 999px;
// //           padding: 0.25rem 0.7rem;
// //           background: rgba(232,64,10,0.1);
// //           color: #e8400a;
// //           border: 1px solid rgba(232,64,10,0.25);
// //         }
// //         .chip-industry {
// //           background: transparent;
// //           color: var(--color-text-secondary);
// //           border: 1px solid var(--color-border);
// //           transition: all 0.2s;
// //         }
// //         .chip-industry:hover {
// //           border-color: #e8400a;
// //           color: #e8400a;
// //         }
// //         .model-badge-custom {
// //           display: inline-block;
// //           font-size: 10px;
// //           font-weight: 700;
// //           letter-spacing: 0.12em;
// //           text-transform: uppercase;
// //           background: linear-gradient(135deg,#8b5cf6,#a78bfa);
// //           color: #fff;
// //           border-radius: 999px;
// //           padding: 0.2rem 0.65rem;
// //           margin-bottom: 0.5rem;
// //         }
// //         /* Benefits columns */
// //         .benefits-col-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
// //           gap: 2rem;
// //           margin-top: 3rem;
// //         }
// //         .benefits-col {
// //           background: var(--color-surface);
// //           border: 1px solid var(--color-border);
// //           border-radius: 16px;
// //           padding: 1.75rem;
// //         }
// //         .benefits-col-icon {
// //           width: 44px; height: 44px;
// //           border-radius: 10px;
// //           background: rgba(232,64,10,0.1);
// //           display: flex; align-items: center; justify-content: center;
// //           color: #e8400a;
// //           margin-bottom: 1rem;
// //         }
// //         .benefits-col h3 {
// //           font-size: 16px; font-weight: 700;
// //           color: var(--color-text-primary);
// //           margin-bottom: 1rem;
// //           letter-spacing: -0.01em;
// //         }
// //         .benefits-col ul {
// //           list-style: none; padding: 0; margin: 0;
// //           display: flex; flex-direction: column; gap: 0.55rem;
// //         }
// //         .benefits-col li {
// //           font-size: 13.5px;
// //           color: var(--color-text-secondary);
// //           display: flex; align-items: flex-start; gap: 0.5rem;
// //           line-height: 1.4;
// //         }
// //         .benefits-col li::before {
// //           content: '→';
// //           color: #e8400a;
// //           font-size: 12px;
// //           flex-shrink: 0;
// //           margin-top: 1px;
// //         }
// //         /* Tier Cards */
// //         .tier-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
// //           gap: 1.5rem;
// //           margin-top: 3rem;
// //         }
// //         .tier-card {
// //           border-radius: 16px;
// //           border: 1px solid;
// //           padding: 2rem 1.5rem;
// //           text-align: center;
// //           position: relative;
// //           overflow: hidden;
// //           transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
// //         }
// //         .tier-card:hover { transform: translateY(-4px); }
// //         .tier-name {
// //           font-size: 17px; font-weight: 800;
// //           margin-bottom: 0.65rem;
// //           letter-spacing: -0.02em;
// //         }
// //         .tier-desc {
// //           font-size: 13px;
// //           color: var(--color-text-secondary);
// //           line-height: 1.55;
// //           margin-bottom: 1.25rem;
// //         }
// //         .tier-perks {
// //           list-style: none; padding: 0; margin: 0;
// //           display: flex; flex-direction: column; gap: 0.4rem;
// //         }
// //         .tier-perks li {
// //           font-size: 12.5px;
// //           color: var(--color-text-secondary);
// //           display: flex; align-items: center; justify-content: center; gap: 0.4rem;
// //         }
// //         /* Timeline */
// //         .timeline-wrap {
// //           display: flex;
// //           gap: 0;
// //           margin-top: 3rem;
// //           position: relative;
// //         }
// //         .timeline-wrap::before {
// //           content: '';
// //           position: absolute;
// //           top: 32px; left: 0; right: 0;
// //           height: 2px;
// //           background: linear-gradient(90deg, transparent, rgba(232,64,10,0.4), transparent);
// //         }
// //         .timeline-step {
// //           flex: 1;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           text-align: center;
// //           padding: 0 1rem;
// //           position: relative;
// //         }
// //         .timeline-num {
// //           width: 64px; height: 64px;
// //           border-radius: 50%;
// //           background: var(--color-surface);
// //           border: 2px solid #e8400a;
// //           display: flex; align-items: center; justify-content: center;
// //           font-size: 22px;
// //           font-weight: 900;
// //           color: #e8400a;
// //           margin-bottom: 1.25rem;
// //           position: relative;
// //           z-index: 1;
// //           flex-shrink: 0;
// //           box-shadow: 0 0 20px rgba(232,64,10,0.2);
// //         }
// //         .timeline-step h4 {
// //           font-size: 14px; font-weight: 700;
// //           color: var(--color-text-primary);
// //           margin-bottom: 0.5rem;
// //           letter-spacing: -0.01em;
// //         }
// //         .timeline-step p {
// //           font-size: 12.5px;
// //           color: var(--color-text-secondary);
// //           line-height: 1.55;
// //           margin: 0;
// //         }
// //         /* Bottom CTA */
// //         .partners-cta-section {
// //           text-align: center;
// //           padding: 100px 1.5rem;
// //           background: var(--color-surface);
// //           position: relative;
// //           overflow: hidden;
// //         }
// //         .partners-cta-section::before {
// //           content: '';
// //           position: absolute;
// //           inset: 0;
// //           background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,64,10,0.1) 0%, transparent 70%);
// //           pointer-events: none;
// //         }
// //         .cta-btn-orange {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 0.5rem;
// //           background: #e8400a;
// //           color: #fff;
// //           font-weight: 700;
// //           font-size: 16px;
// //           padding: 1rem 2.5rem;
// //           border-radius: 999px;
// //           border: none;
// //           cursor: pointer;
// //           transition: background 0.2s, transform 0.15s;
// //           text-decoration: none;
// //           letter-spacing: 0.01em;
// //         }
// //         .cta-btn-orange:hover {
// //           background: #ff5520;
// //           transform: scale(1.03);
// //         }
// //         .cta-btn-outline {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 0.5rem;
// //           background: transparent;
// //           color: var(--color-text-primary);
// //           font-weight: 700;
// //           font-size: 15px;
// //           padding: 0.85rem 2rem;
// //           border-radius: 999px;
// //           border: 1px solid var(--color-border);
// //           cursor: pointer;
// //           transition: border-color 0.2s, color 0.2s;
// //           text-decoration: none;
// //         }
// //         .cta-btn-outline:hover {
// //           border-color: #e8400a;
// //           color: #e8400a;
// //         }
// //         .contact-info-row {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 2rem;
// //           flex-wrap: wrap;
// //           margin-top: 1.75rem;
// //           font-size: 14px;
// //           color: var(--color-text-secondary);
// //         }
// //         .contact-info-row a {
// //           color: var(--color-text-secondary);
// //           text-decoration: none;
// //           display: flex; align-items: center; gap: 0.4rem;
// //           transition: color 0.2s;
// //         }
// //         .contact-info-row a:hover { color: #e8400a; }
// //         @media (max-width: 768px) {
// //           .timeline-wrap {
// //             flex-direction: column;
// //             gap: 2rem;
// //           }
// //           .timeline-wrap::before { display: none; }
// //           .timeline-step { flex-direction: row; text-align: left; gap: 1rem; }
// //           .timeline-num { margin-bottom: 0; flex-shrink: 0; width: 48px; height: 48px; font-size: 18px; }
// //           .model-grid { grid-template-columns: 1fr; }
// //         }
// //       `}</style>

// //       {/* ── SECTION 1: HERO ── */}
// //       <section className="partners-hero" style={{ padding: 0 }}>
// //         <div style={{ position: "relative", zIndex: 2, maxWidth: 720, padding: "8rem 1.5rem" }}>
// //           <span className="section-badge">Global Partner Program</span>
// //           <h1 style={{
// //             fontSize: "clamp(32px, 5vw, 58px)",
// //             fontWeight: 900,
// //             letterSpacing: "-0.04em",
// //             lineHeight: 1.1,
// //             color: "var(--color-text-primary)",
// //             marginBottom: "1.5rem",
// //           }}>
// //             Building the Future of{" "}
// //             <span style={{ color: "#e8400a" }}>Cybersecurity</span>{" "}
// //             Together
// //           </h1>
// //           <p style={{
// //             fontSize: 18,
// //             color: "var(--color-text-secondary)",
// //             lineHeight: 1.7,
// //             marginBottom: "2.5rem",
// //             maxWidth: 580,
// //             margin: "0 auto 2.5rem",
// //           }}>
// //             At Netcradus, we believe strategic partnerships are the foundation
// //             of scalable cybersecurity innovation.
// //           </p>
// //           <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
// //             <Link to="/partners/apply" className="cta-btn-orange">
// //               Become a Partner <ArrowRight size={18} />
// //             </Link>
// //             <Link to="/contact" className="cta-btn-outline">
// //               Contact Us
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── SECTION 2: WHY PARTNER ── */}
// //       <section className="why-partner-shell" style={{ padding: "96px 1.5rem" }}>
// //         <div className="partners-section" style={{ padding: 0, position: "relative", zIndex: 1 }}>
// //           <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
// //             <span className="section-badge">Why Partner With Us</span>
// //           </div>
// //           <h2 className="section-title" style={{ textAlign: "center" }}>
// //             Why Partner With Netcradus
// //           </h2>
// //           <div className="benefit-grid">
// //             {benefits.map((b) => (
// //               <div key={b.title} className="benefit-card">
// //                 <div className="benefit-icon">
// //                   <b.icon size={22} />
// //                 </div>
// //                 <h3>{b.title}</h3>
// //                 <p>{b.text}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── SECTION 3: PARTNERSHIP MODELS ── */}
// //       <section style={{ background: "var(--color-surface)", padding: "96px 1.5rem" }}>
// //         <div className="partners-section" style={{ padding: 0 }}>
// //           <div style={{ textAlign: "center" }}>
// //             <span className="section-badge">Partnership Models</span>
// //             <h2 className="section-title">Partnership Models</h2>
// //             <p className="section-subtitle" style={{ margin: "0 auto" }}>
// //               Choose the model that fits your organization
// //             </p>
// //           </div>
// //           <div className="model-grid">
// //             {models.map((m) => (
// //               <div key={m.num} className="model-card">
// //                 <span className="model-num">{m.num}</span>
// //                 {m.badge && <span className="model-badge-custom">{m.badge}</span>}
// //                 <h3 className="model-title" style={{ color: m.accent === "#8b5cf6" ? "#a78bfa" : "var(--color-text-primary)" }}>
// //                   {m.title}
// //                 </h3>
// //                 <p className="model-desc">{m.description}</p>
// //                 <ul className="model-features">
// //                   {m.features.map((f) => <li key={f}>{f}</li>)}
// //                 </ul>
// //                 <div style={{ marginTop: "auto" }}>
// //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}>
// //                     Ideal For
// //                   </p>
// //                   <div className="chip-row">
// //                     {m.idealFor.map((i) => (
// //                       <span key={i} className="chip">{i}</span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── SECTION 4: PARTNER BENEFITS ── */}
// //       <section style={{ background: "var(--color-bg)", padding: "96px 1.5rem" }}>
// //         <div className="partners-section" style={{ padding: 0 }}>
// //           <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
// //             <span className="section-badge">What You Get</span>
// //           </div>
// //           <h2 className="section-title" style={{ textAlign: "center" }}>Partner Benefits</h2>
// //           <div className="benefits-col-grid">
// //             {partnerBenefitCols.map((col) => (
// //               <div key={col.title} className="benefits-col">
// //                 <div className="benefits-col-icon">
// //                   <col.icon size={20} />
// //                 </div>
// //                 <h3>{col.title}</h3>
// //                 <ul>
// //                   {col.items.map((item) => <li key={item}>{item}</li>)}
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── SECTION 5: TIER STRUCTURE ── */}
// //       <section style={{ background: "var(--color-surface)", padding: "96px 1.5rem" }}>
// //         <div className="partners-section" style={{ padding: 0 }}>
// //           <div style={{ textAlign: "center" }}>
// //             <span className="section-badge">Partner Tiers</span>
// //             <h2 className="section-title">Partner Tier Structure</h2>
// //             <p className="section-subtitle" style={{ margin: "0 auto" }}>
// //               Progress through tiers as you grow your partnership with Netcradus
// //             </p>
// //           </div>
// //           <div className="tier-grid">
// //             {tiers.map((tier, i) => (
// //               <div
// //                 key={tier.name}
// //                 className="tier-card"
// //                 style={{
// //                   borderColor: `${tier.color}33`,
// //                   background: `radial-gradient(ellipse at 50% 0%, ${tier.glow} 0%, var(--color-surface) 60%)`,
// //                 }}
// //               >
// //                 <div style={{
// //                   width: 48, height: 48, borderRadius: "50%",
// //                   background: `${tier.color}20`,
// //                   border: `2px solid ${tier.color}`,
// //                   display: "flex", alignItems: "center", justifyContent: "center",
// //                   margin: "0 auto 1rem",
// //                   fontSize: 18, fontWeight: 900, color: tier.color,
// //                 }}>
// //                   {i + 1}
// //                 </div>
// //                 <p className="tier-name" style={{ color: tier.color }}>{tier.name}</p>
// //                 <p className="tier-desc">{tier.desc}</p>
// //                 <ul className="tier-perks">
// //                   {tier.perks.map((p) => (
// //                     <li key={p}>
// //                       <CheckCircle size={13} style={{ color: tier.color, flexShrink: 0 }} />
// //                       {p}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── SECTION 6: INDUSTRIES ── */}
// //       <section style={{ background: "var(--color-bg)", padding: "80px 1.5rem" }}>
// //         <div className="partners-section" style={{ padding: 0 }}>
// //           <div style={{ textAlign: "center" }}>
// //             <span className="section-badge">Industries</span>
// //             <h2 className="section-title">Industries We Support</h2>
// //           </div>
// //           <div className="chip-row" style={{ justifyContent: "center", marginTop: "2rem", gap: "0.65rem" }}>
// //             {industries.map((ind) => (
// //               <span key={ind} className="chip chip-industry" style={{ fontSize: 13, padding: "0.45rem 1rem" }}>
// //                 {ind}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── SECTION 7: ONBOARDING PROCESS ── */}
// //       <section style={{ background: "var(--color-surface)", padding: "96px 1.5rem" }}>
// //         <div className="partners-section" style={{ padding: 0 }}>
// //           <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
// //             <span className="section-badge">How It Works</span>
// //           </div>
// //           <h2 className="section-title" style={{ textAlign: "center" }}>
// //             Partner Onboarding Process
// //           </h2>
// //           <div className="timeline-wrap">
// //             {onboardingSteps.map((step) => (
// //               <div key={step.num} className="timeline-step">
// //                 <div className="timeline-num">{step.num}</div>
// //                 <div>
// //                   <h4>{step.title}</h4>
// //                   <p>{step.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── SECTION 8: BOTTOM CTA ── */}
// //       <section className="partners-cta-section">
// //         <div style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto" }}>
// //           <span className="section-badge">Join Us</span>
// //           <h2 style={{
// //             fontSize: "clamp(28px, 4vw, 44px)",
// //             fontWeight: 900,
// //             letterSpacing: "-0.03em",
// //             color: "var(--color-text-primary)",
// //             marginBottom: "1.25rem",
// //             lineHeight: 1.15,
// //           }}>
// //             Become a Netcradus Partner
// //           </h2>
// //           <p style={{
// //             fontSize: 16,
// //             color: "var(--color-text-secondary)",
// //             lineHeight: 1.7,
// //             marginBottom: "2.25rem",
// //             maxWidth: 560,
// //             margin: "0 auto 2.25rem",
// //           }}>
// //             Join the Netcradus Global Partner Ecosystem and expand your
// //             cybersecurity capabilities through strategic collaboration,
// //             enterprise-grade delivery, and scalable technology solutions.
// //           </p>
// //           <Link to="/partners/apply" className="cta-btn-orange" style={{ fontSize: 17, padding: "1.1rem 3rem" }}>
// //             Apply Now <ArrowRight size={20} />
// //           </Link>
// //           <div className="contact-info-row">
// //             <a href="mailto:info@netcradus.com">
// //               <Mail size={15} /> info@netcradus.com
// //             </a>
// //             <a href="tel:18001210088800">
// //               <Phone size={15} /> 1800 12100 8800
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
  

// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Mail,
//   Phone,
//   CheckCircle,
//   DollarSign,
//   Code,
//   Settings,
//   Megaphone,
//   ShieldCheck,
//   TrendingUp,
//   Users,
//   Globe,
// } from "lucide-react";

// /* ══════════════════════════════════════════════════════════════════
//    ⚠️ PLACEHOLDER DATA — REPLACE WITH YOUR REAL CONTENT
//    The original `benefits` and `models` arrays were not available when
//    this file was rebuilt. The content below is placeholder copy in the
//    correct shape so the page renders and functions correctly. Swap in
//    your real "Why Partner" benefits and "Partnership Models" content
//    before publishing.
//    ══════════════════════════════════════════════════════════════════ */
// const benefits = [
//   {
//     icon: ShieldCheck,
//     title: "REPLACE ME — Benefit Title 1",
//     text: "REPLACE ME — placeholder description of this partnership benefit.",
//   },
//   {
//     icon: TrendingUp,
//     title: "REPLACE ME — Benefit Title 2",
//     text: "REPLACE ME — placeholder description of this partnership benefit.",
//   },
//   {
//     icon: Users,
//     title: "REPLACE ME — Benefit Title 3",
//     text: "REPLACE ME — placeholder description of this partnership benefit.",
//   },
//   {
//     icon: Globe,
//     title: "REPLACE ME — Benefit Title 4",
//     text: "REPLACE ME — placeholder description of this partnership benefit.",
//   },
// ];

// const models = [
//   {
//     num: "01",
//     title: "REPLACE ME — Model Name 1",
//     description: "REPLACE ME — placeholder description of this partnership model.",
//     features: ["REPLACE ME feature 1", "REPLACE ME feature 2", "REPLACE ME feature 3"],
//     idealFor: ["REPLACE ME segment 1", "REPLACE ME segment 2"],
//   },
//   {
//     num: "02",
//     title: "REPLACE ME — Model Name 2",
//     description: "REPLACE ME — placeholder description of this partnership model.",
//     features: ["REPLACE ME feature 1", "REPLACE ME feature 2", "REPLACE ME feature 3"],
//     idealFor: ["REPLACE ME segment 1", "REPLACE ME segment 2"],
//     badge: "Popular",
//     accent: "#E8400A",
//   },
//   {
//     num: "03",
//     title: "REPLACE ME — Model Name 3",
//     description: "REPLACE ME — placeholder description of this partnership model.",
//     features: ["REPLACE ME feature 1", "REPLACE ME feature 2", "REPLACE ME feature 3"],
//     idealFor: ["REPLACE ME segment 1", "REPLACE ME segment 2"],
//   },
// ];

// const partnerBenefitCols = [
//   {
//     icon: DollarSign,
//     title: "Commercial Benefits",
//     items: [
//       "Recurring revenue opportunities",
//       "Competitive partner margins",
//       "Long-term service contracts",
//       "Enterprise project collaboration",
//       "Business expansion opportunities",
//     ],
//   },
//   {
//     icon: Code,
//     title: "Technical Benefits",
//     items: [
//       "Access to cybersecurity specialists",
//       "Deployment & implementation support",
//       "Technical training sessions",
//       "Security architecture consultation",
//       "Solution engineering assistance",
//     ],
//   },
//   {
//     icon: Settings,
//     title: "Operational Benefits",
//     items: [
//       "Dedicated account management",
//       "Escalation support",
//       "Partner success assistance",
//       "Operational coordination",
//       "Service delivery support",
//     ],
//   },
//   {
//     icon: Megaphone,
//     title: "Marketing Benefits",
//     items: [
//       "Co-branded campaigns",
//       "Joint webinars and events",
//       "Sales collateral access",
//       "Partner listing opportunities",
//       "Market development support",
//     ],
//   },
// ];

// const tiers = [
//   {
//     name: "Registered Partner",
//     color: "#9CA3AF",
//     glow: "rgba(156,163,175,0.12)",
//     desc: "Entry-level access for approved organizations beginning collaboration with Netcradus.",
//     perks: ["Partner portal access", "Basic resources", "Onboarding support"],
//   },
//   {
//     name: "Silver Partner",
//     color: "#FF5520",
//     glow: "rgba(232,64,10,0.12)",
//     desc: "For organizations actively selling and supporting Netcradus solutions with verified engagement and delivery capability.",
//     perks: ["Enhanced margins", "Sales enablement", "Co-sell opportunities"],
//   },
//   {
//     name: "Gold Partner",
//     color: "#FF7A1A",
//     glow: "rgba(255,122,26,0.14)",
//     desc: "Advanced-level partnership with enhanced commercial benefits, strategic collaboration opportunities, and priority support.",
//     perks: ["Priority support", "Joint marketing", "Dedicated account manager"],
//   },
//   {
//     name: "Platinum Partner",
//     color: "#E8400A",
//     glow: "rgba(232,64,10,0.16)",
//     desc: "Elite partnership status for high-performing strategic organizations with dedicated enablement and enterprise engagement support.",
//     perks: ["Executive alignment", "Custom SLAs", "Strategic roadmap access"],
//   },
// ];

// const industries = [
//   "Financial Services",
//   "Healthcare",
//   "Education",
//   "Government & Public Sector",
//   "Retail & E-Commerce",
//   "Manufacturing",
//   "Logistics & Supply Chain",
//   "SaaS & Technology",
//   "SMEs & Enterprises",
// ];

// const onboardingSteps = [
//   {
//     num: "1",
//     icon: "📋",
//     title: "Partnership Application",
//     desc: "Submit organization profile and business information.",
//   },
//   {
//     num: "2",
//     icon: "🔍",
//     title: "Evaluation & Verification",
//     desc: "Assessment of business capabilities, market alignment, and partnership objectives.",
//   },
//   {
//     num: "3",
//     icon: "📝",
//     title: "Commercial & Legal Agreement",
//     desc: "Execution of partnership agreements, NDA, and operational documentation.",
//   },
//   {
//     num: "4",
//     icon: "🎓",
//     title: "Enablement & Training",
//     desc: "Access to onboarding sessions, technical resources, pricing models, and partner support channels.",
//   },
//   {
//     num: "5",
//     icon: "🚀",
//     title: "Go-To-Market Activation",
//     desc: "Begin delivering and promoting Netcradus solutions with ongoing partner support.",
//   },
// ];

// /* ─── DECORATIVE BACKGROUND HELPERS (presentation-only, no business data) ─── */

// // Fixed layout presets for the ambient floating particle field. Purely visual.
// const PARTICLES = [
//   { l: 4, d: 22, t: 0 }, { l: 12, d: 28, t: 3 }, { l: 20, d: 18, t: 1.5 },
//   { l: 29, d: 26, t: 5 }, { l: 37, d: 20, t: 2 }, { l: 45, d: 30, t: 6.5 },
//   { l: 53, d: 24, t: 1 }, { l: 61, d: 19, t: 4 }, { l: 68, d: 27, t: 2.5 },
//   { l: 75, d: 23, t: 7 }, { l: 82, d: 21, t: 3.5 }, { l: 90, d: 29, t: 0.5 },
//   { l: 8, d: 25, t: 8 }, { l: 33, d: 17, t: 4.5 }, { l: 58, d: 22, t: 6 },
//   { l: 71, d: 20, t: 1.8 }, { l: 86, d: 26, t: 5.5 }, { l: 16, d: 24, t: 3.2 },
//   { l: 48, d: 18, t: 7.5 }, { l: 95, d: 23, t: 2.2 },
// ];

// // Ambient atmosphere for a section: floating blobs, aurora wash, optional grid, center light.
// // Purely decorative; renders no data and holds no state.
// function SectionAtmosphere({ dark }) {
//   return (
//     <div className={`section-backdrop ${dark ? "backdrop-dark" : "backdrop-light"}`} aria-hidden="true">
//       <span className="blob blob-orange blob-a" />
//       <span className="blob blob-purple blob-b" />
//       <span className="blob blob-orange blob-c" />
//       <span className="aurora" />
//       {dark && <span className="bg-grid" />}
//       <span className="radial-center" />
//     </div>
//   );
// }

// /* ─── COMPONENT ─────────────────────────────────────────────────── */

// export default function Partners() {
//   const rootRef = useRef(null);
//   const glowRef = useRef(null);

//   // Ambient cursor glow: updated via ref + rAF only (no setState), so it never
//   // triggers a re-render and stays smooth. Purely presentational.
//   useEffect(() => {
//     let targetX = window.innerWidth / 2;
//     let targetY = window.innerHeight / 2;
//     let curX = targetX;
//     let curY = targetY;
//     let rafId;

//     const handleMove = (e) => {
//       targetX = e.clientX;
//       targetY = e.clientY;
//     };

//     const tick = () => {
//       curX += (targetX - curX) * 0.08;
//       curY += (targetY - curY) * 0.08;
//       if (glowRef.current) {
//         glowRef.current.style.transform = `translate3d(${curX - 250}px, ${curY - 250}px, 0)`;
//       }
//       rafId = requestAnimationFrame(tick);
//     };

//     window.addEventListener("mousemove", handleMove, { passive: true });
//     rafId = requestAnimationFrame(tick);

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       cancelAnimationFrame(rafId);
//     };
//   }, []);

//   // Gentle scroll-reveal: sections and card grids fade + move up once they
//   // enter the viewport. Presentational only — toggles a class, no state.
//   useEffect(() => {
//     const root = rootRef.current;
//     if (!root) return;
//     const targets = root.querySelectorAll(".reveal, .reveal-stagger");
//     if (!("IntersectionObserver" in window) || targets.length === 0) {
//       targets.forEach((el) => el.classList.add("in-view"));
//       return;
//     }
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("in-view");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
//     );
//     targets.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={rootRef} style={{ color: "#1E1B4B", background: "#FFFFFF" }}>
//       <style>{`
//         /* ═══════════ DESIGN TOKENS ═══════════ */
//         .partners-page {
//           --heading: #1E1B4B;
//           --highlight: #E8400A;
//           --para: #6B7280;
//           --card-bg: #FFFFFF;
//           --card-border: rgba(30,27,75,0.08);
//           --card-shadow: 0 4px 24px rgba(30,27,75,0.06);
//           --card-backdrop: none;
//           --badge-bg: #FDE8DC;
//           --badge-color: #E8400A;
//           --bg: #FFFFFF;
//         }
//         .sec-black {
//           --heading: #FFFFFF;
//           --highlight: #FF5A1F;
//           --para: rgba(255,255,255,0.70);
//           --card-bg: rgba(17,17,17,0.62);
//           --card-border: rgba(255,255,255,0.08);
//           --card-shadow: none;
//           --card-backdrop: blur(20px);
//           --badge-bg: rgba(255,90,31,0.12);
//           --badge-color: #FF5A1F;
//           --bg: #050505;
//         }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(46px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes blobFloat {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(24px, -18px) scale(1.05); }
//           66% { transform: translate(-16px, 14px) scale(0.97); }
//         }
//         .fade-up {
//           animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
//         }
//         .slide-up {
//           animation: slideUp 0.85s cubic-bezier(0.16,1,0.3,1) both;
//         }
//         .stagger > * {
//           animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
//         }
//         .stagger > *:nth-child(1) { animation-delay: 0.05s; }
//         .stagger > *:nth-child(2) { animation-delay: 0.14s; }
//         .stagger > *:nth-child(3) { animation-delay: 0.23s; }
//         .stagger > *:nth-child(4) { animation-delay: 0.32s; }
//         .stagger > *:nth-child(5) { animation-delay: 0.41s; }
//         .stagger > *:nth-child(6) { animation-delay: 0.5s; }
//         .stagger > *:nth-child(7) { animation-delay: 0.59s; }
//         .stagger > *:nth-child(8) { animation-delay: 0.68s; }
//         .stagger > *:nth-child(9) { animation-delay: 0.77s; }

//         @media (prefers-reduced-motion: reduce) {
//           .fade-up, .slide-up, .stagger > * { animation: none; }
//         }

//         /* ═══════════ SCROLL REVEAL ═══════════ */
//         .reveal {
//           opacity: 0;
//           transform: translateY(40px);
//           transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
//         }
//         .reveal.in-view { opacity: 1; transform: translateY(0); }
//         .reveal-stagger > * {
//           opacity: 0;
//           transform: translateY(32px);
//           transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
//         }
//         .reveal-stagger.in-view > * { opacity: 1; transform: translateY(0); }
//         .reveal-stagger.in-view > *:nth-child(1) { transition-delay: 0.05s; }
//         .reveal-stagger.in-view > *:nth-child(2) { transition-delay: 0.13s; }
//         .reveal-stagger.in-view > *:nth-child(3) { transition-delay: 0.21s; }
//         .reveal-stagger.in-view > *:nth-child(4) { transition-delay: 0.29s; }
//         .reveal-stagger.in-view > *:nth-child(5) { transition-delay: 0.37s; }
//         .reveal-stagger.in-view > *:nth-child(6) { transition-delay: 0.45s; }
//         .reveal-stagger.in-view > *:nth-child(7) { transition-delay: 0.53s; }
//         .reveal-stagger.in-view > *:nth-child(8) { transition-delay: 0.61s; }
//         .reveal-stagger.in-view > *:nth-child(9) { transition-delay: 0.69s; }
//         @media (prefers-reduced-motion: reduce) {
//           .reveal, .reveal-stagger > * { opacity: 1; transform: none; transition: none; }
//         }

//         /* ═══════════ AMBIENT SECTION ATMOSPHERE ═══════════ */
//         .section-backdrop {
//           position: absolute;
//           inset: 0;
//           z-index: 0;
//           overflow: hidden;
//           pointer-events: none;
//         }
//         .blob {
//           position: absolute;
//           border-radius: 50%;
//           will-change: transform;
//         }
//         .backdrop-light .blob { mix-blend-mode: normal; filter: blur(150px); }
//         .backdrop-dark .blob { mix-blend-mode: screen; filter: blur(150px); }
//         .blob-orange { background: rgba(232,64,10,0.14); }
//         .blob-purple { background: rgba(109,40,217,0.12); }
//         .blob-a { width: 520px; height: 520px; top: -170px; left: -160px; animation: driftA 26s ease-in-out infinite; }
//         .blob-b { width: 460px; height: 460px; bottom: -150px; right: -130px; animation: driftB 33s ease-in-out infinite; }
//         .blob-c { width: 380px; height: 380px; top: 35%; left: 55%; opacity: 0.8; animation: driftC 40s ease-in-out infinite; }
//         @keyframes driftA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,44px) scale(1.12); } }
//         @keyframes driftB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-54px,-34px) scale(0.93); } }
//         @keyframes driftC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-46px,52px) scale(1.08); } }

//         .aurora {
//           position: absolute;
//           left: -15%; right: -15%;
//           top: 8%;
//           height: 72%;
//           background: linear-gradient(100deg, transparent, rgba(232,64,10,0.10), rgba(255,200,170,0.09), rgba(167,139,250,0.08), transparent);
//           filter: blur(90px);
//           animation: auroraDrift 32s ease-in-out infinite;
//         }
//         .backdrop-dark .aurora {
//           background: linear-gradient(100deg, transparent, rgba(232,64,10,0.13), rgba(109,40,217,0.13), rgba(59,130,246,0.11), transparent);
//         }
//         @keyframes auroraDrift {
//           0%, 100% { transform: translateX(-6%) translateY(0); }
//           50% { transform: translateX(6%) translateY(2%); }
//         }

//         .bg-grid {
//           position: absolute;
//           inset: -20%;
//           background-image:
//             repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 64px),
//             repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 64px);
//           animation: gridFloat 44s linear infinite;
//         }
//         @keyframes gridFloat {
//           0% { transform: translate(0,0); }
//           100% { transform: translate(64px,64px); }
//         }

//         .radial-center {
//           position: absolute;
//           top: 50%; left: 50%;
//           width: 900px; height: 900px;
//           transform: translate(-50%,-50%);
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
//           opacity: 0.05;
//           filter: blur(100px);
//           animation: pulseGlow 18s ease-in-out infinite;
//         }
//         .backdrop-dark .radial-center {
//           background: radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%);
//         }
//         @keyframes pulseGlow {
//           0%, 100% { opacity: 0.05; transform: translate(-50%,-50%) scale(1); }
//           50% { opacity: 0.10; transform: translate(-50%,-50%) scale(1.1); }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .blob, .aurora, .bg-grid, .radial-center { animation: none; }
//         }

//         /* ═══════════ GLOBAL FIXED OVERLAYS ═══════════ */
//         .particle-field {
//           position: fixed;
//           inset: 0;
//           z-index: 30;
//           overflow: hidden;
//           pointer-events: none;
//         }
//         .particle {
//           position: absolute;
//           bottom: -10px;
//           width: 4px; height: 4px;
//           border-radius: 50%;
//           background: rgba(232,64,10,0.85);
//           box-shadow: 0 0 8px rgba(232,64,10,0.9);
//           opacity: 0;
//           animation-name: particleFloat;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }
//         @keyframes particleFloat {
//           0% { transform: translateY(0) translateX(0); opacity: 0; }
//           8% { opacity: 0.18; }
//           50% { transform: translateY(-52vh) translateX(14px); }
//           92% { opacity: 0.16; }
//           100% { transform: translateY(-100vh) translateX(-10px); opacity: 0; }
//         }

//         .mouse-glow {
//           position: fixed;
//           top: 0; left: 0;
//           width: 500px; height: 500px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(232,64,10,0.13) 0%, transparent 70%);
//           filter: blur(50px);
//           pointer-events: none;
//           z-index: 35;
//           transform: translate3d(50vw, 50vh, 0);
//         }

//         .noise-layer {
//           position: fixed;
//           inset: 0;
//           z-index: 60;
//           opacity: 0.025;
//           pointer-events: none;
//           mix-blend-mode: overlay;
//           background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//           animation: noiseShift 1s steps(2) infinite;
//         }
//         @keyframes noiseShift {
//           0% { transform: translate(0,0); }
//           50% { transform: translate(-1.5%,-1.5%); }
//           100% { transform: translate(1.5%,1.5%); }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .particle, .noise-layer { animation: none; }
//         }
//         @media (max-width: 768px) {
//           .particle-field, .mouse-glow { display: none; }
//         }

//         .partners-hero {
//           min-height: 84vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//           background: #FFFFFF;
//           padding: 6rem 1.5rem;
//         }
//         .partners-hero::before {
//           content: '';
//           position: absolute;
//           top: -160px; left: -140px;
//           width: 480px; height: 480px;
//           border-radius: 50%;
//           background: rgba(232,64,10,0.14);
//           filter: blur(120px);
//           pointer-events: none;
//           animation: blobFloat 9s ease-in-out infinite;
//         }
//         .partners-hero::after {
//           content: '';
//           position: absolute;
//           bottom: -180px; right: -140px;
//           width: 520px; height: 520px;
//           border-radius: 50%;
//           background: rgba(232,64,10,0.14);
//           filter: blur(120px);
//           pointer-events: none;
//           animation: blobFloat 11s ease-in-out infinite reverse;
//         }
//         .hero-glow {
//           position: absolute;
//           top: 50%; left: 50%;
//           width: 780px; height: 780px;
//           transform: translate(-50%, -50%);
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(232,64,10,0.16) 0%, rgba(232,64,10,0.06) 45%, transparent 72%);
//           filter: blur(60px);
//           pointer-events: none;
//           animation: blobFloat 14s ease-in-out infinite;
//         }
//         .hero-rays {
//           position: absolute;
//           top: -10%; left: 50%;
//           width: 140%; height: 120%;
//           transform: translateX(-50%);
//           background: conic-gradient(from 200deg at 50% 0%, transparent 0deg, rgba(232,64,10,0.10) 15deg, transparent 35deg, transparent 160deg, rgba(232,64,10,0.08) 180deg, transparent 200deg);
//           filter: blur(30px);
//           opacity: 0.9;
//           animation: raysDrift 24s ease-in-out infinite;
//           pointer-events: none;
//         }
//         @keyframes raysDrift {
//           0%, 100% { transform: translateX(-50%) rotate(0deg); }
//           50% { transform: translateX(-50%) rotate(4deg); }
//         }
//         @keyframes floatBlob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           50% { transform: translate(20px, -20px) scale(1.06); }
//         }

//         /* ═══════════ SECTION SHELL ═══════════ */
//         .premium-section {
//           position: relative;
//           overflow: hidden;
//           padding: 120px 1.5rem;
//           background: var(--bg);
//         }
//         .partners-section {
//           max-width: 1280px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 1;
//         }
//         .section-badge {
//           display: inline-block;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: var(--badge-color);
//           background: var(--badge-bg);
//           border: 1px solid rgba(232,64,10,0.25);
//           border-radius: 999px;
//           padding: 0.3rem 0.9rem;
//           margin-bottom: 1.25rem;
//         }
//         .section-title {
//           font-size: clamp(28px, 4vw, 42px);
//           font-weight: 900;
//           letter-spacing: -0.04em;
//           color: var(--heading);
//           margin-bottom: 1rem;
//           line-height: 1.15;
//         }
//         .section-subtitle {
//           font-size: 16px;
//           color: var(--para);
//           line-height: 1.7;
//           max-width: 640px;
//         }

//         /* ═══════════ BUTTONS ═══════════ */
//         .cta-btn-purple {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           background: linear-gradient(135deg, #E8400A, #FF6A1A);
//           color: #fff;
//           font-weight: 700;
//           font-size: 16px;
//           padding: 1rem 2.5rem;
//           border-radius: 999px;
//           border: none;
//           cursor: pointer;
//           transition: 0.35s cubic-bezier(0.4,0,0.2,1);
//           text-decoration: none;
//           letter-spacing: 0.01em;
//           box-shadow: 0 8px 24px rgba(232,64,10,0.28);
//         }
//         .cta-btn-purple:hover {
//           box-shadow: 0 16px 40px rgba(232,64,10,0.45);
//           transform: translateY(-2px) scale(1.04);
//         }
//         .cta-btn-outline {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           background: transparent;
//           color: var(--heading);
//           font-weight: 700;
//           font-size: 15px;
//           padding: 0.85rem 2rem;
//           border-radius: 999px;
//           border: 1.5px solid var(--card-border);
//           cursor: pointer;
//           transition: 0.35s cubic-bezier(0.4,0,0.2,1);
//           text-decoration: none;
//         }
//         .cta-btn-outline:hover {
//           border-color: #E8400A;
//           color: #E8400A;
//           transform: scale(1.04);
//         }
//         .sec-black .cta-btn-outline,
//         .partners-cta-section .cta-btn-outline {
//           border-color: rgba(255,255,255,0.35);
//           color: #FFFFFF;
//         }
//         .sec-black .cta-btn-outline:hover,
//         .partners-cta-section .cta-btn-outline:hover {
//           border-color: #FF5A1F;
//           color: #FF5A1F;
//           box-shadow: 0 0 24px rgba(232,64,10,0.25);
//         }
//         .contact-info-row {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 2rem;
//           flex-wrap: wrap;
//           margin-top: 1.75rem;
//           font-size: 14px;
//           color: rgba(255,255,255,0.75);
//         }
//         .contact-info-row a {
//           color: rgba(255,255,255,0.75);
//           text-decoration: none;
//           display: flex; align-items: center; gap: 0.4rem;
//           transition: color 0.2s;
//         }
//         .contact-info-row a:hover { color: #FF6A1A; }

//         /* ═══════════ BENEFIT CARDS ═══════════ */
//         .benefit-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 1.75rem;
//           margin-top: 3.5rem;
//         }
//         .benefit-card {
//           background: var(--card-bg);
//           backdrop-filter: var(--card-backdrop);
//           -webkit-backdrop-filter: var(--card-backdrop);
//           border: 1px solid var(--card-border);
//           border-radius: 24px;
//           padding: 2.25rem 2rem;
//           transition: 0.35s cubic-bezier(0.4,0,0.2,1);
//           box-shadow: var(--card-shadow);
//           position: relative;
//           overflow: hidden;
//         }
//         .benefit-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, #E8400A, #FF6A1A);
//           opacity: 0;
//           transition: opacity 0.3s;
//         }
//         .sec-black .benefit-card:hover {
//           border-color: #FF5A1F;
//           box-shadow: 0 25px 60px rgba(232,64,10,0.30);
//           transform: translateY(-8px);
//         }
//         .benefit-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 22px 50px rgba(232,64,10,0.16);
//           border-color: rgba(232,64,10,0.3);
//         }
//         .benefit-card:hover::before { opacity: 1; }
//         .benefit-icon {
//           width: 52px; height: 52px;
//           border-radius: 14px;
//           background: var(--badge-bg);
//           display: flex; align-items: center; justify-content: center;
//           margin-bottom: 1.25rem;
//           color: var(--highlight);
//         }
//         .benefit-card h3 {
//           font-size: 16px;
//           font-weight: 700;
//           margin-bottom: 0.6rem;
//           color: var(--heading);
//           letter-spacing: -0.01em;
//         }
//         .benefit-card p {
//           font-size: 14px;
//           color: var(--para);
//           line-height: 1.6;
//           margin: 0;
//         }

//         /* ═══════════ MODEL CARDS ═══════════ */
//         .model-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
//           gap: 1.75rem;
//           margin-top: 3.5rem;
//         }
//         .model-card {
//           background: var(--card-bg);
//           backdrop-filter: var(--card-backdrop);
//           -webkit-backdrop-filter: var(--card-backdrop);
//           border: 1px solid var(--card-border);
//           border-radius: 26px;
//           padding: 2.5rem;
//           position: relative;
//           overflow: hidden;
//           transition: 0.35s cubic-bezier(0.4,0,0.2,1);
//           box-shadow: var(--card-shadow);
//           display: flex;
//           flex-direction: column;
//         }
//         .model-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 25px 60px rgba(232,64,10,0.30);
//           border-color: rgba(232,64,10,0.4);
//         }
//         .model-num {
//           font-size: 48px;
//           font-weight: 900;
//           line-height: 1;
//           opacity: 0.09;
//           position: absolute;
//           top: 1.25rem; right: 1.5rem;
//           font-variant-numeric: tabular-nums;
//           color: var(--highlight);
//         }
//         .model-title {
//           font-size: 18px;
//           font-weight: 800;
//           color: var(--heading);
//           margin-bottom: 0.75rem;
//           letter-spacing: -0.02em;
//         }
//         .model-desc {
//           font-size: 14px;
//           color: var(--para);
//           line-height: 1.6;
//           margin-bottom: 1.25rem;
//         }
//         .model-features {
//           list-style: none;
//           padding: 0; margin: 0;
//           display: flex; flex-direction: column; gap: 0.4rem;
//           margin-bottom: 1.25rem;
//         }
//         .model-features li {
//           font-size: 13px;
//           color: var(--para);
//           display: flex; align-items: center; gap: 0.5rem;
//         }
//         .model-features li::before {
//           content: '';
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: var(--highlight);
//           flex-shrink: 0;
//         }
//         .chip-row {
//           display: flex; flex-wrap: wrap; gap: 0.4rem;
//         }
//         .chip {
//           font-size: 11.5px;
//           font-weight: 600;
//           border-radius: 999px;
//           padding: 0.25rem 0.7rem;
//           background: var(--badge-bg);
//           color: var(--highlight);
//           border: 1px solid rgba(232,64,10,0.2);
//         }
//         .chip-industry {
//           background: var(--card-bg);
//           color: var(--para);
//           border: 1px solid var(--card-border);
//           transition: all 0.25s;
//         }
//         .chip-industry:hover {
//           border-color: var(--highlight);
//           color: var(--highlight);
//           transform: scale(1.04);
//         }
//         .model-badge-custom {
//           display: inline-block;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           background: linear-gradient(135deg,#E8400A,#FF6A1A);
//           color: #fff;
//           border-radius: 999px;
//           padding: 0.2rem 0.65rem;
//           margin-bottom: 0.5rem;
//           width: fit-content;
//         }

//         /* ═══════════ BENEFITS COLUMNS ═══════════ */
//         .benefits-col-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 2rem;
//           margin-top: 3.5rem;
//         }
//         .benefits-col {
//           background: var(--card-bg);
//           backdrop-filter: var(--card-backdrop);
//           -webkit-backdrop-filter: var(--card-backdrop);
//           border: 1px solid var(--card-border);
//           border-radius: 24px;
//           padding: 2.25rem 2rem;
//           transition: 0.35s cubic-bezier(0.4,0,0.2,1);
//           box-shadow: var(--card-shadow);
//         }
//         .benefits-col:hover {
//           box-shadow: 0 25px 60px rgba(232,64,10,0.30);
//           border-color: rgba(232,64,10,0.35);
//           transform: translateY(-8px);
//         }
//         .benefits-col-icon {
//           width: 46px; height: 46px;
//           border-radius: 12px;
//           background: var(--badge-bg);
//           display: flex; align-items: center; justify-content: center;
//           color: var(--highlight);
//           margin-bottom: 1.1rem;
//         }
//         .benefits-col h3 {
//           font-size: 16px; font-weight: 700;
//           color: var(--heading);
//           margin-bottom: 1rem;
//           letter-spacing: -0.01em;
//         }
//         .benefits-col ul {
//           list-style: none; padding: 0; margin: 0;
//           display: flex; flex-direction: column; gap: 0.55rem;
//         }
//         .benefits-col li {
//           font-size: 13.5px;
//           color: var(--para);
//           display: flex; align-items: flex-start; gap: 0.5rem;
//           line-height: 1.4;
//         }
//         .benefits-col li::before {
//           content: '→';
//           color: var(--highlight);
//           font-size: 12px;
//           flex-shrink: 0;
//           margin-top: 1px;
//         }

//         /* ═══════════ TIER CARDS ═══════════ */
//         .tier-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 1.75rem;
//           margin-top: 3.5rem;
//         }
//         .tier-card {
//           border-radius: 24px;
//           border: 1px solid;
//           padding: 2.25rem 1.75rem;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//           transition: 0.35s cubic-bezier(0.4,0,0.2,1);
//           background: var(--card-bg);
//           backdrop-filter: var(--card-backdrop);
//           -webkit-backdrop-filter: var(--card-backdrop);
//           box-shadow: var(--card-shadow);
//         }
//         .tier-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 25px 60px rgba(232,64,10,0.30);
//         }
//         .tier-name {
//           font-size: 17px; font-weight: 800;
//           margin-bottom: 0.65rem;
//           letter-spacing: -0.02em;
//         }
//         .tier-desc {
//           font-size: 13px;
//           color: var(--para);
//           line-height: 1.55;
//           margin-bottom: 1.25rem;
//         }
//         .tier-perks {
//           list-style: none; padding: 0; margin: 0;
//           display: flex; flex-direction: column; gap: 0.4rem;
//         }
//         .tier-perks li {
//           font-size: 12.5px;
//           color: var(--para);
//           display: flex; align-items: center; justify-content: center; gap: 0.4rem;
//         }

//         /* ═══════════ TIMELINE ═══════════ */
//         .timeline-wrap {
//           display: flex;
//           gap: 0;
//           margin-top: 3.5rem;
//           position: relative;
//         }
//         .timeline-wrap::before {
//           content: '';
//           position: absolute;
//           top: 32px; left: 0; right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, rgba(232,64,10,0.35), transparent);
//         }
//         .timeline-step {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           padding: 0 1rem;
//           position: relative;
//         }
//         .timeline-num {
//           width: 64px; height: 64px;
//           border-radius: 50%;
//           background: var(--card-bg);
//           border: 2px solid var(--highlight);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 22px;
//           font-weight: 900;
//           color: var(--highlight);
//           margin-bottom: 1.25rem;
//           position: relative;
//           z-index: 1;
//           flex-shrink: 0;
//           box-shadow: 0 0 0 8px var(--bg), 0 8px 20px rgba(232,64,10,0.18);
//         }
//         .timeline-step h4 {
//           font-size: 14px; font-weight: 700;
//           color: var(--heading);
//           margin-bottom: 0.5rem;
//           letter-spacing: -0.01em;
//         }
//         .timeline-step p {
//           font-size: 12.5px;
//           color: var(--para);
//           line-height: 1.55;
//           margin: 0;
//         }

//         /* ═══════════ BOTTOM CTA ═══════════ */
//         .partners-cta-section {
//           text-align: center;
//           padding: 120px 1.5rem;
//           background: #050505;
//           position: relative;
//           overflow: hidden;
//         }
//         .partners-cta-section .section-badge {
//           background: rgba(255,90,31,0.12);
//           color: #FF5A1F;
//           border-color: rgba(255,90,31,0.3);
//         }
//         .partners-cta-section h2 { color: #fff !important; }
//         .partners-cta-section p { color: rgba(255,255,255,0.88) !important; }

//         @media (max-width: 768px) {
//           .timeline-wrap {
//             flex-direction: column;
//             gap: 2rem;
//           }
//           .timeline-wrap::before { display: none; }
//           .timeline-step { flex-direction: row; text-align: left; gap: 1rem; }
//           .timeline-num { margin-bottom: 0; flex-shrink: 0; width: 48px; height: 48px; font-size: 18px; }
//           .model-grid { grid-template-columns: 1fr; }
//           .premium-section { padding: 80px 1.25rem; }
//         }
//       `}</style>

//       <div className="particle-field" aria-hidden="true">
//         {PARTICLES.map((p, i) => (
//           <span
//             key={i}
//             className="particle"
//             style={{
//               left: `${p.l}%`,
//               animationDuration: `${p.d}s`,
//               animationDelay: `${p.t}s`,
//             }}
//           />
//         ))}
//       </div>
//       <div ref={glowRef} className="mouse-glow" aria-hidden="true" />
//       <div className="noise-layer" aria-hidden="true" />

//       <div className="partners-page">

//         {/* ── SECTION 1: HERO (White) ── */}
//         <section className="partners-hero" style={{ padding: 0 }}>
//           <div className="hero-glow" />
//           <div className="hero-rays" />
//           <div className="slide-up" style={{ position: "relative", zIndex: 2, maxWidth: 720, padding: "8rem 1.5rem" }}>
//             <span className="section-badge" style={{ color: "#E8400A", background: "#FDE8DC" }}>Global Partner Program</span>
//             <h1 style={{
//               fontSize: "clamp(32px, 5vw, 58px)",
//               fontWeight: 900,
//               letterSpacing: "-0.04em",
//               lineHeight: 1.1,
//               color: "#1E1B4B",
//               marginBottom: "1.5rem",
//             }}>
//               Building the Future of{" "}
//               <span style={{ color: "#E8400A" }}>Cybersecurity</span>{" "}
//               Together
//             </h1>
//             <p style={{
//               fontSize: 18,
//               color: "#6B7280",
//               lineHeight: 1.7,
//               marginBottom: "2.5rem",
//               maxWidth: 580,
//               margin: "0 auto 2.5rem",
//             }}>
//               At Netcradus, we believe strategic partnerships are the foundation
//               of scalable cybersecurity innovation.
//             </p>
//             <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
//               <Link to="/partners/apply" className="cta-btn-purple">
//                 Become a Partner <ArrowRight size={18} />
//               </Link>
//               <Link to="/contact" className="cta-btn-outline" style={{ color: "#1E1B4B", borderColor: "#E5E1FA" }}>
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* ── SECTION 2: WHY PARTNER (Black) ── */}
//         <section className="premium-section sec-black">
//           <SectionAtmosphere dark />
//           <div className="partners-section">
//             <div style={{ textAlign: "center", marginBottom: "0.5rem" }} className="reveal">
//               <span className="section-badge">Why Partner With Us</span>
//             </div>
//             <h2 className="section-title reveal" style={{ textAlign: "center" }}>
//               Why Partner With Netcradus
//             </h2>
//             <div className="benefit-grid reveal-stagger">
//               {benefits.map((b) => (
//                 <div key={b.title} className="benefit-card">
//                   <div className="benefit-icon">
//                     <b.icon size={22} />
//                   </div>
//                   <h3>{b.title}</h3>
//                   <p>{b.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── SECTION 3: PARTNERSHIP MODELS (White) ── */}
//         <section className="premium-section">
//           <SectionAtmosphere />
//           <div className="partners-section">
//             <div style={{ textAlign: "center" }} className="reveal">
//               <span className="section-badge">Partnership Models</span>
//               <h2 className="section-title">Partnership Models</h2>
//               <p className="section-subtitle" style={{ margin: "0 auto" }}>
//                 Choose the model that fits your organization
//               </p>
//             </div>
//             <div className="model-grid reveal-stagger">
//               {models.map((m) => (
//                 <div key={m.num} className="model-card">
//                   <span className="model-num">{m.num}</span>
//                   {m.badge && <span className="model-badge-custom">{m.badge}</span>}
//                   <h3 className="model-title" style={{ color: m.accent === "#E8400A" ? "#E8400A" : undefined }}>
//                     {m.title}
//                   </h3>
//                   <p className="model-desc">{m.description}</p>
//                   <ul className="model-features">
//                     {m.features.map((f) => <li key={f}>{f}</li>)}
//                   </ul>
//                   <div style={{ marginTop: "auto" }}>
//                     <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--para)", marginBottom: "0.5rem" }}>
//                       Ideal For
//                     </p>
//                     <div className="chip-row">
//                       {m.idealFor.map((i) => (
//                         <span key={i} className="chip">{i}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── SECTION 4: PARTNER BENEFITS (Black) ── */}
//         <section className="premium-section sec-black">
//           <SectionAtmosphere dark />
//           <div className="partners-section">
//             <div style={{ textAlign: "center", marginBottom: "0.5rem" }} className="reveal">
//               <span className="section-badge">What You Get</span>
//             </div>
//             <h2 className="section-title reveal" style={{ textAlign: "center" }}>Partner Benefits</h2>
//             <div className="benefits-col-grid reveal-stagger">
//               {partnerBenefitCols.map((col) => (
//                 <div key={col.title} className="benefits-col">
//                   <div className="benefits-col-icon">
//                     <col.icon size={20} />
//                   </div>
//                   <h3>{col.title}</h3>
//                   <ul>
//                     {col.items.map((item) => <li key={item}>{item}</li>)}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── SECTION 5: TIER STRUCTURE (White) ── */}
//         <section className="premium-section">
//           <SectionAtmosphere />
//           <div className="partners-section">
//             <div style={{ textAlign: "center" }} className="reveal">
//               <span className="section-badge">Partner Tiers</span>
//               <h2 className="section-title">Partner Tier Structure</h2>
//               <p className="section-subtitle" style={{ margin: "0 auto" }}>
//                 Progress through tiers as you grow your partnership with Netcradus
//               </p>
//             </div>
//             <div className="tier-grid reveal-stagger">
//               {tiers.map((tier, i) => (
//                 <div
//                   key={tier.name}
//                   className="tier-card"
//                   style={{
//                     borderColor: `${tier.color}33`,
//                     background: `radial-gradient(ellipse at 50% 0%, ${tier.glow} 0%, var(--card-bg) 60%)`,
//                   }}
//                 >
//                   <div style={{
//                     width: 48, height: 48, borderRadius: "50%",
//                     background: `${tier.color}1A`,
//                     border: `2px solid ${tier.color}`,
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     margin: "0 auto 1rem",
//                     fontSize: 18, fontWeight: 900, color: tier.color,
//                   }}>
//                     {i + 1}
//                   </div>
//                   <p className="tier-name" style={{ color: tier.color }}>{tier.name}</p>
//                   <p className="tier-desc">{tier.desc}</p>
//                   <ul className="tier-perks">
//                     {tier.perks.map((p) => (
//                       <li key={p}>
//                         <CheckCircle size={13} style={{ color: tier.color, flexShrink: 0 }} />
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── SECTION 6: INDUSTRIES (Black) ── */}
//         <section className="premium-section sec-black" style={{ padding: "100px 1.5rem" }}>
//           <SectionAtmosphere dark />
//           <div className="partners-section">
//             <div style={{ textAlign: "center" }} className="reveal">
//               <span className="section-badge">Industries</span>
//               <h2 className="section-title">Industries We Support</h2>
//             </div>
//             <div className="chip-row reveal-stagger" style={{ justifyContent: "center", marginTop: "2.5rem", gap: "0.65rem" }}>
//               {industries.map((ind) => (
//                 <span key={ind} className="chip chip-industry" style={{ fontSize: 13, padding: "0.45rem 1rem" }}>
//                   {ind}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── SECTION 7: ONBOARDING PROCESS (White) ── */}
//         <section className="premium-section">
//           <SectionAtmosphere />
//           <div className="partners-section">
//             <div style={{ textAlign: "center", marginBottom: "0.5rem" }} className="reveal">
//               <span className="section-badge">How It Works</span>
//             </div>
//             <h2 className="section-title reveal" style={{ textAlign: "center" }}>
//               Partner Onboarding Process
//             </h2>
//             <div className="timeline-wrap reveal-stagger">
//               {onboardingSteps.map((step) => (
//                 <div key={step.num} className="timeline-step">
//                   <div className="timeline-num">{step.num}</div>
//                   <div>
//                     <h4>{step.title}</h4>
//                     <p>{step.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── SECTION 8: BOTTOM CTA (Black) ── */}
//         <section className="partners-cta-section reveal">
//           <SectionAtmosphere dark />
//           <div style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto" }}>
//             <span className="section-badge">Join Us</span>
//             <h2 style={{
//               fontSize: "clamp(28px, 4vw, 44px)",
//               fontWeight: 900,
//               letterSpacing: "-0.03em",
//               marginBottom: "1.25rem",
//               lineHeight: 1.15,
//             }}>
//               Become a Netcradus Partner
//             </h2>
//             <p style={{
//               fontSize: 16,
//               lineHeight: 1.7,
//               marginBottom: "2.25rem",
//               maxWidth: 560,
//               margin: "0 auto 2.25rem",
//             }}>
//               Join the Netcradus Global Partner Ecosystem and expand your
//               cybersecurity capabilities through strategic collaboration,
//               enterprise-grade delivery, and scalable technology solutions.
//             </p>
//             <Link to="/partners/apply" className="cta-btn-purple" style={{ fontSize: 17, padding: "1.1rem 3rem" }}>
//               Apply Now <ArrowRight size={20} />
//             </Link>
//             <div className="contact-info-row">
//               <a href="mailto:info@netcradus.com">
//                 <Mail size={15} /> info@netcradus.com
//               </a>
//               <a href="tel:18001210088800">
//                 <Phone size={15} /> 1800 12100 8800
//               </a>
//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }



import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Phone,
  CheckCircle,
  DollarSign,
  Code,
  Settings,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════════════
   ⚠️ PLACEHOLDER DATA — REPLACE WITH YOUR REAL CONTENT
   The original `benefits` and `models` arrays were not available when
   this file was rebuilt. The content below is placeholder copy in the
   correct shape so the page renders and functions correctly. Swap in
   your real "Why Partner" benefits and "Partnership Models" content
   before publishing.
   ══════════════════════════════════════════════════════════════════ */
const benefits = [
  {
    icon: ShieldCheck,
    title: "REPLACE ME — Benefit Title 1",
    text: "REPLACE ME — placeholder description of this partnership benefit.",
  },
  {
    icon: TrendingUp,
    title: "REPLACE ME — Benefit Title 2",
    text: "REPLACE ME — placeholder description of this partnership benefit.",
  },
  {
    icon: Users,
    title: "REPLACE ME — Benefit Title 3",
    text: "REPLACE ME — placeholder description of this partnership benefit.",
  },
  {
    icon: Globe,
    title: "REPLACE ME — Benefit Title 4",
    text: "REPLACE ME — placeholder description of this partnership benefit.",
  },
];

const models = [
  {
    num: "01",
    title: "REPLACE ME — Model Name 1",
    description: "REPLACE ME — placeholder description of this partnership model.",
    features: ["REPLACE ME feature 1", "REPLACE ME feature 2", "REPLACE ME feature 3"],
    idealFor: ["REPLACE ME segment 1", "REPLACE ME segment 2"],
  },
  {
    num: "02",
    title: "REPLACE ME — Model Name 2",
    description: "REPLACE ME — placeholder description of this partnership model.",
    features: ["REPLACE ME feature 1", "REPLACE ME feature 2", "REPLACE ME feature 3"],
    idealFor: ["REPLACE ME segment 1", "REPLACE ME segment 2"],
    badge: "Popular",
    accent: "#E8400A",
  },
  {
    num: "03",
    title: "REPLACE ME — Model Name 3",
    description: "REPLACE ME — placeholder description of this partnership model.",
    features: ["REPLACE ME feature 1", "REPLACE ME feature 2", "REPLACE ME feature 3"],
    idealFor: ["REPLACE ME segment 1", "REPLACE ME segment 2"],
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
    color: "#9CA3AF",
    glow: "rgba(156,163,175,0.12)",
    desc: "Entry-level access for approved organizations beginning collaboration with Netcradus.",
    perks: ["Partner portal access", "Basic resources", "Onboarding support"],
  },
  {
    name: "Silver Partner",
    color: "#FF5520",
    glow: "rgba(232,64,10,0.12)",
    desc: "For organizations actively selling and supporting Netcradus solutions with verified engagement and delivery capability.",
    perks: ["Enhanced margins", "Sales enablement", "Co-sell opportunities"],
  },
  {
    name: "Gold Partner",
    color: "#FF7A1A",
    glow: "rgba(255,122,26,0.14)",
    desc: "Advanced-level partnership with enhanced commercial benefits, strategic collaboration opportunities, and priority support.",
    perks: ["Priority support", "Joint marketing", "Dedicated account manager"],
  },
  {
    name: "Platinum Partner",
    color: "#E8400A",
    glow: "rgba(232,64,10,0.16)",
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

/* ─── DECORATIVE BACKGROUND HELPERS (presentation-only, no business data) ─── */

// Fixed layout presets for the ambient floating particle field. Purely visual.
const PARTICLES = [
  { l: 4, d: 22, t: 0 }, { l: 12, d: 28, t: 3 }, { l: 20, d: 18, t: 1.5 },
  { l: 29, d: 26, t: 5 }, { l: 37, d: 20, t: 2 }, { l: 45, d: 30, t: 6.5 },
  { l: 53, d: 24, t: 1 }, { l: 61, d: 19, t: 4 }, { l: 68, d: 27, t: 2.5 },
  { l: 75, d: 23, t: 7 }, { l: 82, d: 21, t: 3.5 }, { l: 90, d: 29, t: 0.5 },
  { l: 8, d: 25, t: 8 }, { l: 33, d: 17, t: 4.5 }, { l: 58, d: 22, t: 6 },
  { l: 71, d: 20, t: 1.8 }, { l: 86, d: 26, t: 5.5 }, { l: 16, d: 24, t: 3.2 },
  { l: 48, d: 18, t: 7.5 }, { l: 95, d: 23, t: 2.2 },
];

// Fixed layout presets for the hero-only ambient particle layer (orange + white,
// slower drift, kept under 25% opacity per the hero visual spec). Purely visual.
const HERO_PARTICLES = [
  { l: 3, t: 8, d: 34, s: 3, c: "o" }, { l: 9, t: 62, d: 40, s: 5, c: "w" },
  { l: 15, t: 22, d: 30, s: 4, c: "o" }, { l: 22, t: 74, d: 38, s: 3, c: "w" },
  { l: 28, t: 40, d: 44, s: 6, c: "o" }, { l: 34, t: 12, d: 32, s: 3, c: "w" },
  { l: 40, t: 66, d: 36, s: 4, c: "o" }, { l: 46, t: 30, d: 42, s: 5, c: "w" },
  { l: 52, t: 80, d: 33, s: 3, c: "o" }, { l: 58, t: 18, d: 39, s: 4, c: "w" },
  { l: 64, t: 54, d: 45, s: 6, c: "o" }, { l: 70, t: 8, d: 31, s: 3, c: "w" },
  { l: 76, t: 70, d: 37, s: 4, c: "o" }, { l: 82, t: 26, d: 41, s: 5, c: "w" },
  { l: 88, t: 48, d: 35, s: 3, c: "o" }, { l: 94, t: 16, d: 43, s: 4, c: "w" },
  { l: 6, t: 88, d: 38, s: 3, c: "w" }, { l: 25, t: 92, d: 34, s: 4, c: "o" },
  { l: 61, t: 90, d: 40, s: 3, c: "w" }, { l: 97, t: 78, d: 36, s: 5, c: "o" },
  { l: 44, t: 4, d: 46, s: 3, c: "o" }, { l: 12, t: 40, d: 29, s: 4, c: "w" },
];

// Ambient atmosphere for a section: floating blobs, aurora wash, optional grid, center light.
// Purely decorative; renders no data and holds no state.
function SectionAtmosphere({ dark }) {
  return (
    <div className={`section-backdrop ${dark ? "backdrop-dark" : "backdrop-light"}`} aria-hidden="true">
      <span className="blob blob-orange blob-a" />
      <span className="blob blob-purple blob-b" />
      <span className="blob blob-orange blob-c" />
      <span className="aurora" />
      {dark && <span className="bg-grid" />}
      <span className="radial-center" />
    </div>
  );
}

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function Partners() {
  const rootRef = useRef(null);
  const glowRef = useRef(null);

  // Ambient cursor glow: updated via ref + rAF only (no setState), so it never
  // triggers a re-render and stays smooth. Purely presentational.
  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;
    let rafId;

    const handleMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${curX - 250}px, ${curY - 250}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Gentle scroll-reveal: sections and card grids fade + move up once they
  // enter the viewport. Presentational only — toggles a class, no state.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll(".reveal, .reveal-stagger");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} style={{ color: "#1E1B4B", background: "#FFFFFF" }}>
      <style>{`
        /* ═══════════ DESIGN TOKENS ═══════════ */
        .partners-page {
          --heading: #1E1B4B;
          --highlight: #E8400A;
          --para: #6B7280;
          --card-bg: #FFFFFF;
          --card-border: rgba(30,27,75,0.08);
          --card-shadow: 0 4px 24px rgba(30,27,75,0.06);
          --card-backdrop: none;
          --badge-bg: #FDE8DC;
          --badge-color: #E8400A;
          --bg: #FFFFFF;
        }
        .sec-black {
          --heading: #FFFFFF;
          --highlight: #FF5A1F;
          --para: rgba(255,255,255,0.70);
          --card-bg: rgba(17,17,17,0.62);
          --card-border: rgba(255,255,255,0.08);
          --card-shadow: none;
          --card-backdrop: blur(20px);
          --badge-bg: rgba(255,90,31,0.12);
          --badge-color: #FF5A1F;
          --bg: #050505;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(46px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(24px, -18px) scale(1.05); }
          66% { transform: translate(-16px, 14px) scale(0.97); }
        }
        .fade-up {
          animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        .slide-up {
          animation: slideUp 0.85s cubic-bezier(0.16,1,0.3,1) both;
        }
        .stagger > * {
          animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        .stagger > *:nth-child(1) { animation-delay: 0.05s; }
        .stagger > *:nth-child(2) { animation-delay: 0.14s; }
        .stagger > *:nth-child(3) { animation-delay: 0.23s; }
        .stagger > *:nth-child(4) { animation-delay: 0.32s; }
        .stagger > *:nth-child(5) { animation-delay: 0.41s; }
        .stagger > *:nth-child(6) { animation-delay: 0.5s; }
        .stagger > *:nth-child(7) { animation-delay: 0.59s; }
        .stagger > *:nth-child(8) { animation-delay: 0.68s; }
        .stagger > *:nth-child(9) { animation-delay: 0.77s; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .slide-up, .stagger > * { animation: none; }
        }

        /* ═══════════ SCROLL REVEAL ═══════════ */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .reveal.in-view { opacity: 1; transform: translateY(0); }
        .reveal-stagger > * {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .reveal-stagger.in-view > * { opacity: 1; transform: translateY(0); }
        .reveal-stagger.in-view > *:nth-child(1) { transition-delay: 0.05s; }
        .reveal-stagger.in-view > *:nth-child(2) { transition-delay: 0.13s; }
        .reveal-stagger.in-view > *:nth-child(3) { transition-delay: 0.21s; }
        .reveal-stagger.in-view > *:nth-child(4) { transition-delay: 0.29s; }
        .reveal-stagger.in-view > *:nth-child(5) { transition-delay: 0.37s; }
        .reveal-stagger.in-view > *:nth-child(6) { transition-delay: 0.45s; }
        .reveal-stagger.in-view > *:nth-child(7) { transition-delay: 0.53s; }
        .reveal-stagger.in-view > *:nth-child(8) { transition-delay: 0.61s; }
        .reveal-stagger.in-view > *:nth-child(9) { transition-delay: 0.69s; }
        @media (prefers-reduced-motion: reduce) {
          .reveal, .reveal-stagger > * { opacity: 1; transform: none; transition: none; }
        }

        /* ═══════════ AMBIENT SECTION ATMOSPHERE ═══════════ */
        .section-backdrop {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          will-change: transform;
        }
        .backdrop-light .blob { mix-blend-mode: normal; filter: blur(150px); }
        .backdrop-dark .blob { mix-blend-mode: screen; filter: blur(150px); }
        .blob-orange { background: rgba(232,64,10,0.14); }
        .blob-purple { background: rgba(109,40,217,0.12); }
        .blob-a { width: 520px; height: 520px; top: -170px; left: -160px; animation: driftA 26s ease-in-out infinite; }
        .blob-b { width: 460px; height: 460px; bottom: -150px; right: -130px; animation: driftB 33s ease-in-out infinite; }
        .blob-c { width: 380px; height: 380px; top: 35%; left: 55%; opacity: 0.8; animation: driftC 40s ease-in-out infinite; }
        @keyframes driftA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,44px) scale(1.12); } }
        @keyframes driftB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-54px,-34px) scale(0.93); } }
        @keyframes driftC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-46px,52px) scale(1.08); } }

        .aurora {
          position: absolute;
          left: -15%; right: -15%;
          top: 8%;
          height: 72%;
          background: linear-gradient(100deg, transparent, rgba(232,64,10,0.10), rgba(255,200,170,0.09), rgba(167,139,250,0.08), transparent);
          filter: blur(90px);
          animation: auroraDrift 32s ease-in-out infinite;
        }
        .backdrop-dark .aurora {
          background: linear-gradient(100deg, transparent, rgba(232,64,10,0.13), rgba(109,40,217,0.13), rgba(59,130,246,0.11), transparent);
        }
        @keyframes auroraDrift {
          0%, 100% { transform: translateX(-6%) translateY(0); }
          50% { transform: translateX(6%) translateY(2%); }
        }

        .bg-grid {
          position: absolute;
          inset: -20%;
          background-image:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 64px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 64px);
          animation: gridFloat 44s linear infinite;
        }
        @keyframes gridFloat {
          0% { transform: translate(0,0); }
          100% { transform: translate(64px,64px); }
        }

        .radial-center {
          position: absolute;
          top: 50%; left: 50%;
          width: 900px; height: 900px;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
          opacity: 0.05;
          filter: blur(100px);
          animation: pulseGlow 18s ease-in-out infinite;
        }
        .backdrop-dark .radial-center {
          background: radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%);
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.05; transform: translate(-50%,-50%) scale(1); }
          50% { opacity: 0.10; transform: translate(-50%,-50%) scale(1.1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .blob, .aurora, .bg-grid, .radial-center { animation: none; }
        }

        /* ═══════════ GLOBAL FIXED OVERLAYS ═══════════ */
        .particle-field {
          position: fixed;
          inset: 0;
          z-index: 30;
          overflow: hidden;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          bottom: -10px;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(232,64,10,0.85);
          box-shadow: 0 0 8px rgba(232,64,10,0.9);
          opacity: 0;
          animation-name: particleFloat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          8% { opacity: 0.18; }
          50% { transform: translateY(-52vh) translateX(14px); }
          92% { opacity: 0.16; }
          100% { transform: translateY(-100vh) translateX(-10px); opacity: 0; }
        }

        .mouse-glow {
          position: fixed;
          top: 0; left: 0;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,64,10,0.13) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 35;
          transform: translate3d(50vw, 50vh, 0);
        }

        .noise-layer {
          position: fixed;
          inset: 0;
          z-index: 60;
          opacity: 0.025;
          pointer-events: none;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          animation: noiseShift 1s steps(2) infinite;
        }
        @keyframes noiseShift {
          0% { transform: translate(0,0); }
          50% { transform: translate(-1.5%,-1.5%); }
          100% { transform: translate(1.5%,1.5%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .particle, .noise-layer { animation: none; }
        }
        @media (max-width: 768px) {
          .particle-field, .mouse-glow { display: none; }
        }

        .partners-hero {
          min-height: 84vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FBFCFF 0%, #F5F7FC 100%);
          padding: 6rem 1.5rem;
        }
        /* Layer 2 — large orange glow, top left */
        .partners-hero::before {
          content: '';
          position: absolute;
          top: -220px; left: -220px;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: rgba(232,64,10,0.22);
          filter: blur(180px);
          pointer-events: none;
          animation: heroFloatGlowA 25s ease-in-out infinite;
        }
        /* Layer 3 — deep navy glow, bottom right */
        .partners-hero::after {
          content: '';
          position: absolute;
          bottom: -240px; right: -220px;
          width: 680px; height: 680px;
          border-radius: 50%;
          background: rgba(12,25,70,0.25);
          filter: blur(220px);
          pointer-events: none;
          animation: heroFloatGlowB 30s ease-in-out infinite;
        }
        @keyframes heroFloatGlowA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 40px) scale(1.08); }
        }
        @keyframes heroFloatGlowB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-46px, -34px) scale(1.06); }
        }
        /* Layer 4 — purple ambient glow, top right */
        .hero-purple-glow {
          position: absolute;
          top: -12%; right: -8%;
          width: 620px; height: 620px;
          border-radius: 50%;
          background: rgba(110,85,255,0.10);
          filter: blur(180px);
          pointer-events: none;
          animation: heroDriftSlow 36s ease-in-out infinite;
        }
        @keyframes heroDriftSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 26px); }
        }
        /* Layer 5 — animated mesh gradient, very slow, subtle */
        .hero-mesh {
          position: absolute;
          inset: -10%;
          opacity: 0.08;
          pointer-events: none;
          background:
            radial-gradient(at 20% 30%, rgba(232,64,10,0.9) 0px, transparent 45%),
            radial-gradient(at 78% 20%, rgba(110,85,255,0.9) 0px, transparent 42%),
            radial-gradient(at 65% 75%, rgba(12,25,70,0.9) 0px, transparent 46%),
            radial-gradient(at 15% 80%, rgba(255,106,26,0.9) 0px, transparent 42%);
          filter: blur(60px);
          animation: heroMeshDrift 46s ease-in-out infinite;
        }
        @keyframes heroMeshDrift {
          0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); }
          50% { transform: translate(2%, -2%) rotate(3deg) scale(1.05); }
        }
        .hero-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 780px; height: 780px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,64,10,0.16) 0%, rgba(232,64,10,0.06) 45%, transparent 72%);
          filter: blur(60px);
          pointer-events: none;
          animation: blobFloat 14s ease-in-out infinite;
        }
        .hero-rays {
          position: absolute;
          top: -10%; left: 50%;
          width: 140%; height: 120%;
          transform: translateX(-50%);
          background: conic-gradient(from 200deg at 50% 0%, transparent 0deg, rgba(232,64,10,0.10) 15deg, transparent 35deg, transparent 160deg, rgba(232,64,10,0.08) 180deg, transparent 200deg);
          filter: blur(30px);
          opacity: 0.9;
          animation: raysDrift 24s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes raysDrift {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          50% { transform: translateX(-50%) rotate(4deg); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.06); }
        }
        /* Layer 8 — large tech rings, border-only, rotating slowly */
        .hero-rings {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.5;
        }
        .hero-ring {
          position: absolute;
          top: 50%; left: 50%;
          border-radius: 50%;
          border: 1px solid rgba(232,64,10,0.4);
          opacity: 0.1;
        }
        .hero-ring-1 { width: 900px; height: 900px; margin: -450px 0 0 -450px; animation: heroRingSpin 90s linear infinite; }
        .hero-ring-2 { width: 1140px; height: 1140px; margin: -570px 0 0 -570px; animation: heroRingSpin 130s linear infinite reverse; }
        .hero-ring-3 { width: 700px; height: 700px; margin: -350px 0 0 -350px; animation: heroRingSpin 70s linear infinite; }
        @keyframes heroRingSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Layer 7 — floating glowing particles, orange + white, slow */
        .hero-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          animation-name: heroParticleDrift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .hero-particle-o {
          background: rgba(232,64,10,0.9);
          box-shadow: 0 0 10px rgba(232,64,10,0.6);
        }
        .hero-particle-w {
          background: rgba(255,255,255,0.95);
          box-shadow: 0 0 8px rgba(255,255,255,0.6);
        }
        @keyframes heroParticleDrift {
          0%, 100% { transform: translate(0, 0); opacity: 0.08; }
          50% { transform: translate(14px, -22px); opacity: 0.22; }
        }
        /* Layer 6 — digital wave along the bottom of the hero */
        .hero-wave {
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 140px;
          pointer-events: none;
          opacity: 0.4;
        }
        .hero-wave svg { width: 100%; height: 100%; }
        .hero-wave-path {
          animation: heroWaveShift 18s ease-in-out infinite;
        }
        .hero-wave-dots {
          animation: heroWaveShift 24s ease-in-out infinite reverse;
        }
        @keyframes heroWaveShift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-24px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .partners-hero::before, .partners-hero::after, .hero-purple-glow, .hero-mesh,
          .hero-ring, .hero-particle, .hero-wave-path, .hero-wave-dots { animation: none; }
        }
        @media (max-width: 768px) {
          .hero-rings, .hero-particles { display: none; }
        }
        /* Hero copy entrance sequence */
        .hero-heading-in {
          animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: 0.05s;
        }
        .hero-sub-in {
          animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: 0.25s;
        }
        .hero-buttons-in {
          animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: 0.42s;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-heading-in, .hero-sub-in, .hero-buttons-in { animation: none; }
        }
        /* Hero button refinements */
        .hero-btn-primary {
          height: 60px;
          padding: 0 2.75rem;
        }
        .hero-btn-secondary {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-color: rgba(0,0,0,0.08);
        }
        .hero-btn-secondary:hover {
          box-shadow: 0 8px 28px rgba(232,64,10,0.16);
        }

        /* ═══════════ SECTION SHELL ═══════════ */
        .premium-section {
          position: relative;
          overflow: hidden;
          padding: 120px 1.5rem;
          background: var(--bg);
        }
        .partners-section {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .section-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--badge-color);
          background: var(--badge-bg);
          border: 1px solid rgba(232,64,10,0.25);
          border-radius: 999px;
          padding: 0.3rem 0.9rem;
          margin-bottom: 1.25rem;
        }
        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: var(--heading);
          margin-bottom: 1rem;
          line-height: 1.15;
        }
        .section-subtitle {
          font-size: 16px;
          color: var(--para);
          line-height: 1.7;
          max-width: 640px;
        }

        /* ═══════════ BUTTONS ═══════════ */
        .cta-btn-purple {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #E8400A, #FF6A1A);
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          padding: 1rem 2.5rem;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: 0.35s cubic-bezier(0.4,0,0.2,1);
          text-decoration: none;
          letter-spacing: 0.01em;
          box-shadow: 0 8px 24px rgba(232,64,10,0.28);
        }
        .cta-btn-purple:hover {
          box-shadow: 0 16px 40px rgba(232,64,10,0.45);
          transform: translateY(-2px) scale(1.04);
        }
        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--heading);
          font-weight: 700;
          font-size: 15px;
          padding: 0.85rem 2rem;
          border-radius: 999px;
          border: 1.5px solid var(--card-border);
          cursor: pointer;
          transition: 0.35s cubic-bezier(0.4,0,0.2,1);
          text-decoration: none;
        }
        .cta-btn-outline:hover {
          border-color: #E8400A;
          color: #E8400A;
          transform: scale(1.04);
        }
        .sec-black .cta-btn-outline,
        .partners-cta-section .cta-btn-outline {
          border-color: rgba(255,255,255,0.35);
          color: #FFFFFF;
        }
        .sec-black .cta-btn-outline:hover,
        .partners-cta-section .cta-btn-outline:hover {
          border-color: #FF5A1F;
          color: #FF5A1F;
          box-shadow: 0 0 24px rgba(232,64,10,0.25);
        }
        .contact-info-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 1.75rem;
          font-size: 14px;
          color: rgba(255,255,255,0.75);
        }
        .contact-info-row a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          display: flex; align-items: center; gap: 0.4rem;
          transition: color 0.2s;
        }
        .contact-info-row a:hover { color: #FF6A1A; }

        /* ═══════════ BENEFIT CARDS ═══════════ */
        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
          margin-top: 3.5rem;
        }
        .benefit-card {
          background: var(--card-bg);
          backdrop-filter: var(--card-backdrop);
          -webkit-backdrop-filter: var(--card-backdrop);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 2.25rem 2rem;
          transition: 0.35s cubic-bezier(0.4,0,0.2,1);
          box-shadow: var(--card-shadow);
          position: relative;
          overflow: hidden;
        }
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #E8400A, #FF6A1A);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .sec-black .benefit-card:hover {
          border-color: #FF5A1F;
          box-shadow: 0 25px 60px rgba(232,64,10,0.30);
          transform: translateY(-8px);
        }
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 50px rgba(232,64,10,0.16);
          border-color: rgba(232,64,10,0.3);
        }
        .benefit-card:hover::before { opacity: 1; }
        .benefit-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: var(--badge-bg);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.25rem;
          color: var(--highlight);
        }
        .benefit-card h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--heading);
          letter-spacing: -0.01em;
        }
        .benefit-card p {
          font-size: 14px;
          color: var(--para);
          line-height: 1.6;
          margin: 0;
        }

        /* ═══════════ MODEL CARDS ═══════════ */
        .model-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.75rem;
          margin-top: 3.5rem;
        }
        .model-card {
          background: var(--card-bg);
          backdrop-filter: var(--card-backdrop);
          -webkit-backdrop-filter: var(--card-backdrop);
          border: 1px solid var(--card-border);
          border-radius: 26px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: 0.35s cubic-bezier(0.4,0,0.2,1);
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
        }
        .model-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(232,64,10,0.30);
          border-color: rgba(232,64,10,0.4);
        }
        .model-num {
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
          opacity: 0.09;
          position: absolute;
          top: 1.25rem; right: 1.5rem;
          font-variant-numeric: tabular-nums;
          color: var(--highlight);
        }
        .model-title {
          font-size: 18px;
          font-weight: 800;
          color: var(--heading);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .model-desc {
          font-size: 14px;
          color: var(--para);
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
          color: var(--para);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .model-features li::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--highlight);
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
          background: var(--badge-bg);
          color: var(--highlight);
          border: 1px solid rgba(232,64,10,0.2);
        }
        .chip-industry {
          background: var(--card-bg);
          color: var(--para);
          border: 1px solid var(--card-border);
          transition: all 0.25s;
        }
        .chip-industry:hover {
          border-color: var(--highlight);
          color: var(--highlight);
          transform: scale(1.04);
        }
        .model-badge-custom {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: linear-gradient(135deg,#E8400A,#FF6A1A);
          color: #fff;
          border-radius: 999px;
          padding: 0.2rem 0.65rem;
          margin-bottom: 0.5rem;
          width: fit-content;
        }

        /* ═══════════ BENEFITS COLUMNS ═══════════ */
        .benefits-col-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-top: 3.5rem;
        }
        .benefits-col {
          background: var(--card-bg);
          backdrop-filter: var(--card-backdrop);
          -webkit-backdrop-filter: var(--card-backdrop);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 2.25rem 2rem;
          transition: 0.35s cubic-bezier(0.4,0,0.2,1);
          box-shadow: var(--card-shadow);
        }
        .benefits-col:hover {
          box-shadow: 0 25px 60px rgba(232,64,10,0.30);
          border-color: rgba(232,64,10,0.35);
          transform: translateY(-8px);
        }
        .benefits-col-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: var(--badge-bg);
          display: flex; align-items: center; justify-content: center;
          color: var(--highlight);
          margin-bottom: 1.1rem;
        }
        .benefits-col h3 {
          font-size: 16px; font-weight: 700;
          color: var(--heading);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .benefits-col ul {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0.55rem;
        }
        .benefits-col li {
          font-size: 13.5px;
          color: var(--para);
          display: flex; align-items: flex-start; gap: 0.5rem;
          line-height: 1.4;
        }
        .benefits-col li::before {
          content: '→';
          color: var(--highlight);
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* ═══════════ TIER CARDS ═══════════ */
        .tier-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.75rem;
          margin-top: 3.5rem;
        }
        .tier-card {
          border-radius: 24px;
          border: 1px solid;
          padding: 2.25rem 1.75rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: 0.35s cubic-bezier(0.4,0,0.2,1);
          background: var(--card-bg);
          backdrop-filter: var(--card-backdrop);
          -webkit-backdrop-filter: var(--card-backdrop);
          box-shadow: var(--card-shadow);
        }
        .tier-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(232,64,10,0.30);
        }
        .tier-name {
          font-size: 17px; font-weight: 800;
          margin-bottom: 0.65rem;
          letter-spacing: -0.02em;
        }
        .tier-desc {
          font-size: 13px;
          color: var(--para);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }
        .tier-perks {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0.4rem;
        }
        .tier-perks li {
          font-size: 12.5px;
          color: var(--para);
          display: flex; align-items: center; justify-content: center; gap: 0.4rem;
        }

        /* ═══════════ TIMELINE ═══════════ */
        .timeline-wrap {
          display: flex;
          gap: 0;
          margin-top: 3.5rem;
          position: relative;
        }
        .timeline-wrap::before {
          content: '';
          position: absolute;
          top: 32px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(232,64,10,0.35), transparent);
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
          background: var(--card-bg);
          border: 2px solid var(--highlight);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          font-weight: 900;
          color: var(--highlight);
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          box-shadow: 0 0 0 8px var(--bg), 0 8px 20px rgba(232,64,10,0.18);
        }
        .timeline-step h4 {
          font-size: 14px; font-weight: 700;
          color: var(--heading);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }
        .timeline-step p {
          font-size: 12.5px;
          color: var(--para);
          line-height: 1.55;
          margin: 0;
        }

        /* ═══════════ BOTTOM CTA ═══════════ */
        .partners-cta-section {
          text-align: center;
          padding: 120px 1.5rem;
          background: #050505;
          position: relative;
          overflow: hidden;
        }
        .partners-cta-section .section-badge {
          background: rgba(255,90,31,0.12);
          color: #FF5A1F;
          border-color: rgba(255,90,31,0.3);
        }
        .partners-cta-section h2 { color: #fff !important; }
        .partners-cta-section p { color: rgba(255,255,255,0.88) !important; }

        @media (max-width: 768px) {
          .timeline-wrap {
            flex-direction: column;
            gap: 2rem;
          }
          .timeline-wrap::before { display: none; }
          .timeline-step { flex-direction: row; text-align: left; gap: 1rem; }
          .timeline-num { margin-bottom: 0; flex-shrink: 0; width: 48px; height: 48px; font-size: 18px; }
          .model-grid { grid-template-columns: 1fr; }
          .premium-section { padding: 80px 1.25rem; }
        }
      `}</style>

      <div className="particle-field" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.l}%`,
              animationDuration: `${p.d}s`,
              animationDelay: `${p.t}s`,
            }}
          />
        ))}
      </div>
      <div ref={glowRef} className="mouse-glow" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <div className="partners-page">

        {/* ── SECTION 1: HERO (White) ── */}
        <section className="partners-hero" style={{ padding: 0 }}>
          <div className="hero-mesh" aria-hidden="true" />
          <div className="hero-purple-glow" aria-hidden="true" />
          <div className="hero-glow" />
          <div className="hero-rays" />
          <div className="hero-rings" aria-hidden="true">
            <span className="hero-ring hero-ring-1" />
            <span className="hero-ring hero-ring-2" />
            <span className="hero-ring hero-ring-3" />
          </div>
          <div className="hero-particles" aria-hidden="true">
            {HERO_PARTICLES.map((p, i) => (
              <span
                key={i}
                className={`hero-particle ${p.c === "o" ? "hero-particle-o" : "hero-particle-w"}`}
                style={{
                  left: `${p.l}%`,
                  top: `${p.t}%`,
                  width: `${p.s}px`,
                  height: `${p.s}px`,
                  animationDuration: `${p.d}s`,
                }}
              />
            ))}
          </div>
          <div className="hero-wave" aria-hidden="true">
            <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
              <path
                className="hero-wave-path"
                d="M0,80 C160,20 320,120 480,70 C640,20 800,110 960,60 C1120,15 1280,95 1440,55 L1440,140 L0,140 Z"
                fill="rgba(70,110,220,0.14)"
              />
              <path
                className="hero-wave-path"
                d="M0,100 C180,55 340,130 500,90 C660,50 820,120 980,80 C1140,45 1300,105 1440,75 L1440,140 L0,140 Z"
                fill="rgba(255,255,255,0.5)"
              />
              <g className="hero-wave-dots" fill="rgba(70,110,220,0.5)">
                {Array.from({ length: 24 }).map((_, i) => (
                  <circle key={i} cx={i * 62 + 10} cy={70 + (i % 3) * 14} r="2" />
                ))}
              </g>
            </svg>
          </div>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 720, padding: "8rem 1.5rem" }}>
            <span className="section-badge fade-up" style={{ color: "#E8400A", background: "#FDE8DC" }}>Global Partner Program</span>
            <h1 className="hero-heading-in" style={{
              fontSize: "clamp(34px, 6vw, 72px)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 1.05,
              color: "#1B1D4D",
              marginBottom: "1.5rem",
            }}>
              Building the Future of{" "}
              <span style={{ color: "#E8400A" }}>Cybersecurity</span>{" "}
              Together
            </h1>
            <p className="hero-sub-in" style={{
              fontSize: 18,
              color: "#6B7280",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: 650,
              margin: "0 auto 2.5rem",
            }}>
              At Netcradus, we believe strategic partnerships are the foundation
              of scalable cybersecurity innovation.
            </p>
            <div className="hero-buttons-in" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/partners/apply" className="cta-btn-purple hero-btn-primary">
                Become a Partner <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="cta-btn-outline hero-btn-secondary" style={{ color: "#1E1B4B", borderColor: "#E5E1FA" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WHY PARTNER (Black) ── */}
        <section className="premium-section sec-black">
          <SectionAtmosphere dark />
          <div className="partners-section">
            <div style={{ textAlign: "center", marginBottom: "0.5rem" }} className="reveal">
              <span className="section-badge">Why Partner With Us</span>
            </div>
            <h2 className="section-title reveal" style={{ textAlign: "center" }}>
              Why Partner With Netcradus
            </h2>
            <div className="benefit-grid reveal-stagger">
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

        {/* ── SECTION 3: PARTNERSHIP MODELS (White) ── */}
        <section className="premium-section">
          <SectionAtmosphere />
          <div className="partners-section">
            <div style={{ textAlign: "center" }} className="reveal">
              <span className="section-badge">Partnership Models</span>
              <h2 className="section-title">Partnership Models</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Choose the model that fits your organization
              </p>
            </div>
            <div className="model-grid reveal-stagger">
              {models.map((m) => (
                <div key={m.num} className="model-card">
                  <span className="model-num">{m.num}</span>
                  {m.badge && <span className="model-badge-custom">{m.badge}</span>}
                  <h3 className="model-title" style={{ color: m.accent === "#E8400A" ? "#E8400A" : undefined }}>
                    {m.title}
                  </h3>
                  <p className="model-desc">{m.description}</p>
                  <ul className="model-features">
                    {m.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <div style={{ marginTop: "auto" }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--para)", marginBottom: "0.5rem" }}>
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

        {/* ── SECTION 4: PARTNER BENEFITS (Black) ── */}
        <section className="premium-section sec-black">
          <SectionAtmosphere dark />
          <div className="partners-section">
            <div style={{ textAlign: "center", marginBottom: "0.5rem" }} className="reveal">
              <span className="section-badge">What You Get</span>
            </div>
            <h2 className="section-title reveal" style={{ textAlign: "center" }}>Partner Benefits</h2>
            <div className="benefits-col-grid reveal-stagger">
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

        {/* ── SECTION 5: TIER STRUCTURE (White) ── */}
        <section className="premium-section">
          <SectionAtmosphere />
          <div className="partners-section">
            <div style={{ textAlign: "center" }} className="reveal">
              <span className="section-badge">Partner Tiers</span>
              <h2 className="section-title">Partner Tier Structure</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Progress through tiers as you grow your partnership with Netcradus
              </p>
            </div>
            <div className="tier-grid reveal-stagger">
              {tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className="tier-card"
                  style={{
                    borderColor: `${tier.color}33`,
                    background: `radial-gradient(ellipse at 50% 0%, ${tier.glow} 0%, var(--card-bg) 60%)`,
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: `${tier.color}1A`,
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

        {/* ── SECTION 6: INDUSTRIES (Black) ── */}
        <section className="premium-section sec-black" style={{ padding: "100px 1.5rem" }}>
          <SectionAtmosphere dark />
          <div className="partners-section">
            <div style={{ textAlign: "center" }} className="reveal">
              <span className="section-badge">Industries</span>
              <h2 className="section-title">Industries We Support</h2>
            </div>
            <div className="chip-row reveal-stagger" style={{ justifyContent: "center", marginTop: "2.5rem", gap: "0.65rem" }}>
              {industries.map((ind) => (
                <span key={ind} className="chip chip-industry" style={{ fontSize: 13, padding: "0.45rem 1rem" }}>
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: ONBOARDING PROCESS (White) ── */}
        <section className="premium-section">
          <SectionAtmosphere />
          <div className="partners-section">
            <div style={{ textAlign: "center", marginBottom: "0.5rem" }} className="reveal">
              <span className="section-badge">How It Works</span>
            </div>
            <h2 className="section-title reveal" style={{ textAlign: "center" }}>
              Partner Onboarding Process
            </h2>
            <div className="timeline-wrap reveal-stagger">
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

        {/* ── SECTION 8: BOTTOM CTA (Black) ── */}
        <section className="partners-cta-section reveal">
          <SectionAtmosphere dark />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto" }}>
            <span className="section-badge">Join Us</span>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}>
              Become a Netcradus Partner
            </h2>
            <p style={{
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: "2.25rem",
              maxWidth: 560,
              margin: "0 auto 2.25rem",
            }}>
              Join the Netcradus Global Partner Ecosystem and expand your
              cybersecurity capabilities through strategic collaboration,
              enterprise-grade delivery, and scalable technology solutions.
            </p>
            <Link to="/partners/apply" className="cta-btn-purple" style={{ fontSize: 17, padding: "1.1rem 3rem" }}>
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
    </div>
  );
}