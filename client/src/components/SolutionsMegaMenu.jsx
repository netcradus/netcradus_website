import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Radar,
  Cloud,
  BrainCircuit,
  Network,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HeartPulse,
} from "lucide-react";

export const SOLUTIONS = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Core Defense",
    description: "End-to-end protection against evolving cyber threats.",
    path: "/services/cybersecurity",
    icon: Shield,
  },
  {
    id: "managed-soc",
    name: "Managed SOC",
    tagline: "24×7 Operations",
    description: "24×7 monitoring and rapid threat detection & response.",
    path: "/services/managed-soc",
    icon: Radar,
  },
  {
    id: "cloud-security",
    name: "Cloud Security",
    tagline: "Cloud Native",
    description: "Secure cloud workloads, SaaS, and hybrid environments.",
    path: "/services/cloud-security",
    icon: Cloud,
  },
  {
    id: "ai-security",
    name: "AI Security",
    tagline: "AI Governance",
    description: "Protect AI models, LLMs, and enterprise agents.",
    path: "/services/ai-security",
    icon: BrainCircuit,
  },
  {
    id: "network-security",
    name: "Network Security",
    tagline: "Perimeter Defense",
    description: "Defend your perimeter and internal network segments.",
    path: "/services/network-security",
    icon: Network,
  },
  {
    id: "enterprise-security",
    name: "Enterprise Security",
    tagline: "Enterprise Programs",
    description: "Tailored, enterprise-grade security programs.",
    path: "/services/enterprise-security",
    icon: Building2,
  },
  {
    id: "vapt",
    name: "VAPT Services",
    tagline: "Testing & Audit",
    description: "Vulnerability assessment & penetration testing.",
    path: "/services/vapt",
    icon: ShieldCheck,
  },
];

const WHY_CHOOSE_US = [
  "Certified Security Experts",
  "24×7 Monitoring",
  "Compliance Ready",
  "AI Powered Detection",
  "End-to-End Protection",
];

const FEATURED_SOLUTION = {
  id: "abdm",
  name: "Ayushman Bharat Digital Mission (ABDM)",
  description:
    "Secure, interoperable and consent-driven digital healthcare platform.",
  path: "/services/abdm",
  icon: HeartPulse,
};

const SolutionsMegaMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-[100px] left-1/2 z-[1000] w-[950px] max-w-[92vw]"
          style={{ marginLeft: "-475px" }}
          onMouseLeave={onClose}
        >
          {/* Caret / pointer arrow */}
          <div
            className="absolute left-1/2 z-0"
            style={{
              top: "-8px",
              width: "18px",
              height: "18px",
              background: "#fff",
              transform: "translateX(-50%) rotate(45deg)",
              borderTop: "1px solid #E5E7EB",
              borderLeft: "1px solid #E5E7EB",
              borderRadius: "3px 0 0 0",
            }}
          />

          <div
            className="relative z-10 bg-white border overflow-hidden"
            style={{
              borderRadius: "20px",
              borderColor: "#E5E7EB",
              boxShadow:
                "0 20px 50px -12px rgba(17,24,39,0.16), 0 6px 16px -6px rgba(17,24,39,0.08)",
            }}
          >
            <div className="grid" style={{ gridTemplateColumns: "380px 1fr" }}>
              {/* LEFT SECTION - Solutions vertical list */}
              <div style={{ borderRight: "1px solid #E5E7EB" }}>
                {SOLUTIONS.map((solution) => {
                  const Icon = solution.icon;

                  return (
                    <Link
                      key={solution.id}
                      to={solution.path}
                      onClick={onClose}
                      className="group flex items-center gap-3.5 px-6 py-3.5 transition-colors duration-300"
                      style={{ textDecoration: "none", borderBottom: "1px solid #F3F4F6" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#FFF7ED")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <div
                        className="w-9 h-9 flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{ borderRadius: "10px", background: "#FFF0E5", color: "#FF6A00" }}
                      >
                        <Icon size={17} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold" style={{ color: "#111827" }}>
                          {solution.name}
                        </h4>
                        <p className="text-xs leading-snug truncate" style={{ color: "#6B7280" }}>
                          {solution.description}
                        </p>
                      </div>

                      <ArrowRight
                        size={15}
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: "#FF6A00" }}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* RIGHT SECTION - Featured solution + Why Choose Us */}
              <div className="p-7" style={{ background: "#FAFAFA" }}>
                <span
                  className="block text-[11px] font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "#FF6A00" }}
                >
                  Our Special Solution
                </span>

                <Link
                  to={FEATURED_SOLUTION.path}
                  onClick={onClose}
                  className="group block bg-white p-5 mb-6 transition-all duration-300"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #FCD9BB",
                    textDecoration: "none",
                    boxShadow: "0 8px 20px -8px rgba(255,106,0,0.15)",
                  }}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-3"
                    style={{ borderRadius: "12px", background: "#FFF0E5", color: "#FF6A00" }}
                  >
                    <FEATURED_SOLUTION.icon size={20} />
                  </div>

                  <h4 className="text-sm font-bold mb-1.5" style={{ color: "#111827" }}>
                    {FEATURED_SOLUTION.name}
                  </h4>

                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#6B7280" }}>
                    {FEATURED_SOLUTION.description}
                  </p>

                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: "#FF6A00" }}
                  >
                    Learn More <ArrowRight size={13} />
                  </span>
                </Link>

                <h4 className="text-sm font-bold mb-3.5" style={{ color: "#111827" }}>
                  Why Choose Our Solutions?
                </h4>

                <ul className="flex flex-col gap-2.5">
                  {WHY_CHOOSE_US.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm"
                      style={{ color: "#374151" }}
                    >
                      <CheckCircle2 size={15} style={{ color: "#FF6A00" }} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolutionsMegaMenu;