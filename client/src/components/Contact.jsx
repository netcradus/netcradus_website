import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Clock3,
  FileLock2,
  Wrench,
  Siren,
  Handshake,
  Radar,
  Cloud,
  BrainCircuit,
  Network,
  Landmark,
  ShieldAlert,
  Cpu,
  ClipboardList,
  Lock,
  UploadCloud,
  X,
  FileText,
  User,
  Building2,
  MessageSquare,
  Clock,
  Timer,
  Copy,
  Check,
  Navigation,
  ChevronDown,
  ArrowUpRight,
  Users,
  Calendar,
  Settings
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import LocationMap from './LocationMap';

// Import certifications/trust logos
import isoLogo from '../assets/ISO-Loogo-removebg.png';
import certinLogo from '../assets/certin.png';
import iso27701Logo from '../assets/iso-27701-removebg.png';
import msmeLogo from '../assets/msme-removebg.png';
import udyamLogo from '../assets/udyam.png';
import soc2Logo from '../assets/soc2.png';
import gdprLogo from '../assets/gdpr.jpeg';

// ─────────────────────────────────────────────────────────────────────────
// Config & Data Lists
// ─────────────────────────────────────────────────────────────────────────
const trustPoints = [
  { icon: Phone, label: "24x7 Support" },
  { icon: Clock3, label: "1 Hour Response" },
  { icon: ShieldCheck, label: "NDA Available" },
  { icon: Settings, label: "ISO-Compliant Engagements" },
];

const contactOptions = [
  {
    id: "sales",
    icon: ShieldCheck,
    title: "Sales & Consulting",
    description: "Discuss enterprise security, VAPT, SOC and compliance requirements.",
    cta: "Contact Sales",
    color: "#E8400A",
    rgb: "232, 64, 10",
    bgLight: "rgba(232, 64, 10, 0.08)",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Technical Support",
    description: "Existing customers can raise and track support requests.",
    cta: "Get Support",
    color: "#3B82F6",
    rgb: "59, 130, 246",
    bgLight: "rgba(59, 130, 246, 0.08)",
  },
  {
    id: "incident",
    icon: Siren,
    title: "Incident Response",
    description: "Immediate assistance during cybersecurity incidents.",
    cta: "Report Incident",
    color: "#10B981",
    rgb: "16, 185, 129",
    bgLight: "rgba(16, 185, 129, 0.08)",
  },
  {
    id: "partnerships",
    icon: Handshake,
    title: "Partnerships",
    description: "Become a technology or channel partner and grow with Netcradus.",
    cta: "Partner With Us",
    color: "#8B5CF6",
    rgb: "139, 92, 246",
    bgLight: "rgba(139, 92, 246, 0.08)",
  },
];

const serviceOptions = [
  { id: "managed-soc", label: "Managed SOC" },
  { id: "vapt", label: "VAPT Services" },
  { id: "cloud-security", label: "Cloud Security" },
  { id: "ai-security", label: "AI Security" },
  { id: "network-security", label: "Network Security" },
  { id: "compliance", label: "Compliance & Governance" },
  { id: "enterprise-software", label: "Enterprise Software Solutions" },
  { id: "other", label: "Other" },
];

const faqItems = [
  {
    question: "How quickly will someone contact me?",
    answer: "Our team responds to standard enquiries within one business hour. Incident response requests are triaged immediately, 24/7.",
  },
  {
    question: "Do you provide 24/7 incident response?",
    answer: "Yes. Our SOC operates around the clock with a dedicated incident response track for active breaches and critical alerts.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. We routinely sign mutual NDAs before any discovery call that involves sensitive infrastructure or security details.",
  },
  {
    question: "Do you provide free security consultations?",
    answer: "Yes. Every engagement starts with a complimentary strategic consultation to understand your environment and goals.",
  },
  {
    question: "What should I include when reaching out?",
    answer: "A short description of your environment, the service you're interested in, and your timeline helps us route your enquiry to the right specialist faster.",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// UI Sub-Elements
// ─────────────────────────────────────────────────────────────────────────

function Magnetic({ children, className = "", strength = 14 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 16, mass: 0.4 });

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({ isActive, onClick, color, rgb, bgLight, children }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 220, damping: 20 });

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        "--accent-color": color,
        "--accent-color-rgb": rgb,
        "--bg-accent-light": bgLight
      }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isActive}
      className={`card-premium card-sheen group card-option-btn ${isActive ? "active" : ""
        }`}
    >
      {children}
    </motion.button>
  );
}

function AmbientBackground() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    function handleMove(e) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        spotlightRef.current?.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current?.style.setProperty("--y", `${e.clientY}px`);
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => {
    const seed = (i * 37) % 100;
    return {
      id: i,
      left: `${(i * 5.7 + seed * 0.6) % 100}%`,
      size: 1.5 + (seed % 3) * 0.6,
      delay: (i % 9) * 1.6,
      duration: 16 + (seed % 10),
      drift: (i % 2 === 0 ? 1 : -1) * (8 + (seed % 14)),
      opacity: 0.25 + (seed % 5) * 0.08,
      cyan: i % 3 === 0,
    };
  });

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: "-6%",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.cyan ? "#C2410C" : "#FDBA74",
              boxShadow: p.cyan ? "0 0 6px 1px #C2410C99" : "0 0 5px 1px #FDBA7488",
              ["--particle-opacity"]: p.opacity,
              ["--particle-drift"]: `${p.drift}px`,
              animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
              position: 'absolute'
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute h-[560px] w-[560px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(closest-side, #E8400A3d, transparent 70%)",
          position: 'absolute',
          top: "-8%",
          left: "5%"
        }}
        animate={{
          x: ["-10%", "18%", "-6%"],
          y: ["-8%", "10%", "-4%"],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(closest-side, #C2410C33, transparent 70%)",
          position: 'absolute',
          top: "35%",
          right: "0%"
        }}
        animate={{
          x: ["6%", "-14%", "8%"],
          y: ["6%", "-10%", "4%"],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div
        ref={spotlightRef}
        className="absolute inset-0 opacity-70"
        style={{
          background: "radial-gradient(480px circle at var(--x, 50%) var(--y, 20%), rgba(194, 65, 12, 0.05), transparent 70%)",
          position: 'absolute'
        }}
      />
      <div className="bg-grain" />
      <div className="bg-vignette" />
    </div>
  );
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className="copy-btn"
    >
      {copied ? <Check size={14} className="text-nc-success" /> : <Copy size={14} />}
    </button>
  );
}

const FloatingShieldVisual = () => {
  return (
    <div className="podium-container">
      {/* Background radial glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-radial-glow blur-[80px] opacity-40 z-0"></div>

      {/* Podium Rings */}
      <div className="podium-base" />
      <div className="podium-glow-ring" />

      {/* Main Shield */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="shield-3d-wrapper"
      >
        <div className="shield-container">
          <div className="shield-inner">
            <ShieldCheck size={56} className="shield-logo-mark" strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>

      {/* Floating Orbit Nodes */}
      <motion.div
        animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="orbit-node"
        style={{ top: "18%", left: "15%", borderColor: "#E8400A", borderStyle: "solid", borderWidth: "1.5px" }}
      >
        <Lock size={18} className="text-[#E8400A]" />
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], x: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="orbit-node"
        style={{ top: "15%", right: "15%", borderColor: "#3B82F6", borderStyle: "solid", borderWidth: "1.5px" }}
      >
        <Cloud size={18} className="text-[#3B82F6]" />
      </motion.div>

      <motion.div
        animate={{ y: [-10, 10, -10], x: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="orbit-node"
        style={{ bottom: "25%", left: "12%", borderColor: "#10B981", borderStyle: "solid", borderWidth: "1.5px" }}
      >
        <Users size={18} className="text-[#10B981]" />
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="orbit-node"
        style={{ bottom: "22%", right: "12%", borderColor: "#8B5CF6", borderStyle: "solid", borderWidth: "1.5px" }}
      >
        <Cpu size={18} className="text-[#8B5CF6]" />
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────
// Primary Contact Component
// ─────────────────────────────────────────────────────────────────────────
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_company: "",
    user_phone: "",
    user_email: "",
    message: ""
  });

  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [file, setFile] = useState(null);
  const [referenceId, setReferenceId] = useState("");
  const [errors, setErrors] = useState({});
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);
  const fileInputRef = useRef(null);

  const optionToService = {
    sales: "vapt",
    support: "enterprise-software",
    incident: "managed-soc",
    partnerships: "other",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.first_name.trim()) nextErrors.first_name = "First name is required.";
    if (!formData.last_name.trim()) nextErrors.last_name = "Last name is required.";
    if (!formData.user_email.trim()) {
      nextErrors.user_email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      nextErrors.user_email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) nextErrors.message = "Message details are required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const fullName = `${formData.first_name.trim()} ${formData.last_name.trim()}`;
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: fullName,
          email: formData.user_email,
          phone: formData.user_phone || "N/A",
          company: formData.user_company || "N/A",
          message: `${formData.message}\n\n[Selected Service: ${selectedService || "None"}]\n[Attached File: ${file ? file.name : "None"}]`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setReferenceId(`NC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
      setStatus("success");
      setFormData({
        first_name: "",
        last_name: "",
        user_company: "",
        user_phone: "",
        user_email: "",
        message: ""
      });
      setSelectedService("");
      setSelectedOptionId(null);
      setFile(null);
      setErrors({});
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  function handleOptionSelect(id) {
    setSelectedOptionId(id);
    setSelectedService(optionToService[id] ?? "");
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleFileChange(e) {
    setFile(e.target.files?.[0] ?? null);
  }

  function resetForm() {
    setFormData({
      first_name: "",
      last_name: "",
      user_company: "",
      user_phone: "",
      user_email: "",
      message: ""
    });
    setSelectedService("");
    setSelectedOptionId(null);
    setFile(null);
    setStatus("idle");
    setErrors({});
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  return (
    <div className="contact-section-wrapper">
      <AmbientBackground />

      {/* Hero Section Split Layout */}
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="hero-section-grid">
          {/* Left Column: Heading, buttons and indicators */}
          <div className="hero-content">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="kicker"
            >
              <span className="hero-pulse-dot">
                <span className="hero-pulse-ping" />
                <span className="hero-pulse-core" />
              </span>
              CONTACT NETCRADUS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title"
            >
              Enterprise Cybersecurity <br />
              Starts With a <span>Conversation</span>
            </motion.h1>



            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hero-checklist-bar"
            >
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <span key={index} className="checklist-item">
                    <Icon size={14} className="text-[var(--nc-cyan)]" />
                    {point.label}
                  </span>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-image-container"
          >
            <img
              src="/img/contact background.png"
              alt="Cybersecurity Shield Visual"
              className="hero-mobile-only-image"
            />
          </motion.div>
        </div>
      </section>



      {/* SECTION 2 — Form (65%) + Info Panel (35%) */}
      <section id="contact-form" className="main-contact-section">
        <div className="main-contact-container">
          {/* Left Column: Contact Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="card-premium card-sheen success-container"
                >
                  <div className="success-badge-wrapper">
                    <span className="success-badge-ping" />
                    <CheckCircle2 size={48} className="relative text-nc-success" strokeWidth={1.5} />
                  </div>
                  <h3 className="success-title">Request Sent Securely</h3>
                  <p className="success-desc">
                    A Netcradus specialist will reach out within one business hour.
                  </p>
                  <div className="success-reference">
                    Reference&nbsp;<span className="text-[#C2410C]">{referenceId}</span>
                  </div>
                  <button type="button" onClick={resetForm} className="success-reset-btn">
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form-body"
                  onSubmit={handleSubmit}
                  noValidate
                  className="card-premium card-sheen contact-form-card"
                >
                  <div className="form-header">
                    <h2>Let's Secure Your Business</h2>
                    <p>
                      Fields marked with <span className="text-[#C2410C]">*</span> are required.
                    </p>
                  </div>

                  <div className="form-fields-grid">
                    {/* First Name */}
                    <div className="form-field-container">
                      <label htmlFor="first_name" className="field-label">
                        First Name<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="first_name"
                          name="first_name"
                          type="text"
                          value={formData.first_name}
                          onChange={handleChange}
                          placeholder="First Name*"
                          aria-invalid={!!errors.first_name}
                          className={`field-input ${errors.first_name ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.first_name && <p className="text-error">{errors.first_name}</p>}
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="form-field-container">
                      <label htmlFor="last_name" className="field-label">
                        Last Name<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          value={formData.last_name}
                          onChange={handleChange}
                          placeholder="Last Name*"
                          aria-invalid={!!errors.last_name}
                          className={`field-input ${errors.last_name ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.last_name && <p className="text-error">{errors.last_name}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-field-container">
                      <label htmlFor="user_email" className="field-label">
                        Business Email<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="user_email"
                          name="user_email"
                          type="email"
                          value={formData.user_email}
                          onChange={handleChange}
                          placeholder="Business Email*"
                          aria-invalid={!!errors.user_email}
                          className={`field-input ${errors.user_email ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.user_email && <p className="text-error">{errors.user_email}</p>}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="form-field-container">
                      <label htmlFor="user_phone" className="field-label">
                        Phone Number*
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="user_phone"
                          name="user_phone"
                          type="tel"
                          value={formData.user_phone}
                          onChange={handleChange}
                          placeholder="Phone Number*"
                          className="field-input"
                        />
                      </div>
                      <div className="error-area" />
                    </div>

                    {/* Company */}
                    <div className="form-field-container">
                      <label htmlFor="user_company" className="field-label">
                        Company Name*
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="user_company"
                          name="user_company"
                          type="text"
                          value={formData.user_company}
                          onChange={handleChange}
                          placeholder="Company Name*"
                          className="field-input"
                        />
                      </div>
                      <div className="error-area" />
                    </div>

                    {/* Service Dropdown */}
                    <div className="form-field-container">
                      <label htmlFor="selectedService" className="field-label">
                        Service Required<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <select
                          id="selectedService"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="field-input field-select"
                        >
                          <option value="" disabled>Service Required*</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-nc-muted" />
                      </div>
                      <div className="error-area" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-field-container mt-4">
                    <label htmlFor="message" className="field-label">
                      How can we help you?
                    </label>
                    <div className="input-wrapper">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => {
                          if (e.target.value.length <= 600) handleChange(e);
                        }}
                        placeholder="How can we help you?"
                        aria-invalid={!!errors.message}
                        className={`field-input field-textarea ${errors.message ? "border-error" : ""}`}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p className="text-error" style={{ margin: 0 }}>{errors.message}</p>
                      ) : (
                        <p className="text-xs text-nc-muted/70" style={{ margin: 0 }}>
                          A short summary of your environment and timeline helps us route this faster.
                        </p>
                      )}
                      <span className="text-xs text-nc-muted/70 font-mono">
                        {formData.message.length}/600
                      </span>
                    </div>
                  </div>

                  {/* File Uploader */}
                  <div className="attachment-container">
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="attachment"
                    />
                    {file ? (
                      <div className="file-attached-info">
                        <div className="flex items-center gap-2 min-w-0" style={{ display: 'flex', gap: '8px' }}>
                          <FileText size={16} className="text-[#C2410C] shrink-0" strokeWidth={1.75} />
                          <div className="min-w-0">
                            <p className="truncate text-sm text-nc-text" style={{ margin: 0 }}>{file.name}</p>
                            <p className="font-mono text-[11px] text-nc-muted" style={{ margin: 0 }}>{formatBytes(file.size)}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFile(null)}
                          aria-label="Remove attachment"
                          className="copy-btn"
                          style={{ opacity: 1 }}
                        >
                          <X size={16} className="text-[#6B7280] hover:text-[#DC2626]" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="file-btn"
                      >
                        <UploadCloud size={16} />
                        Attach a file (optional)
                      </button>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="submit-btn-wrapper">
                    <Magnetic strength={8}>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="submit-btn"
                      >
                        <span className="btn-sheen" />
                        {status === "loading" ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Request Consultation
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>

                  <p className="security-footer">
                    <ShieldCheck size={14} className="text-nc-success" />
                    Transmitted over an encrypted, secure connection.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Get In Touch (Mockup Blue Gradient Panel) */}
          <div className="info-panel">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="get-in-touch-card"
            >
              {/* Map Outline Overlay - Dotted grid world map aesthetic */}
              <div className="get-in-touch-map-bg">
                <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0, opacity: 0.12 }}>
                  <circle cx="200" cy="150" r="2" fill="#3b82f6" opacity="0.3" />
                  <circle cx="210" cy="160" r="3" fill="#3b82f6" opacity="0.4" />
                  <circle cx="250" cy="180" r="2" fill="#3b82f6" opacity="0.3" />
                  <circle cx="300" cy="120" r="4" fill="#3b82f6" opacity="0.2" />
                  {/* UK Map dots */}
                  <circle cx="480" cy="140" r="4" fill="#E8400A" opacity="0.8" />
                  <circle cx="480" cy="140" r="8" stroke="#E8400A" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ transformOrigin: "480px 140px" }} />
                  {/* India Map dots */}
                  <circle cx="680" cy="220" r="4" fill="#E8400A" opacity="0.8" />
                  <circle cx="680" cy="220" r="8" stroke="#E8400A" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ transformOrigin: "680px 220px" }} />
                  {/* Grid lines */}
                  <path d="M100,50 L900,50 M100,100 L900,100 M100,150 L900,150 M100,200 L900,200 M100,250 L900,250 M100,300 L900,300 M100,350 L900,350" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.1" />
                  <path d="M150,20 L150,450 M250,20 L250,450 M350,20 L350,450 M450,20 L450,450 M550,20 L550,450 M650,20 L650,450 M750,20 L750,450 M850,20 L850,450" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.1" />
                </svg>
              </div>

              <div className="get-in-touch-content">
                <div className="get-in-touch-header">
                  <h2>Get In Touch</h2>
                  <p>Speak to our global engineering offices or reach our dispatch desk directly.</p>
                </div>

                <div className="get-in-touch-info-list">
                  {/* Call Us (Clickable Phone Number Card) */}
                  <div className="get-in-touch-item hover:shadow-[0_0_15px_rgba(232,64,10,0.15)] transition-all duration-300">
                    <div className="get-in-touch-icon-box" style={{ borderColor: "#E8400A" }}>
                      <Phone size={18} className="text-[#E8400A]" />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">Call Us</p>
                      <a href="tel:+917290909571" className="get-in-touch-value hover:text-[#E8400A] transition-colors" style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                        +91 72909 09571
                      </a>
                      <p className="get-in-touch-value-desc">24×7 Emergency Incident Response</p>
                    </div>
                    <CopyButton value="+91 72909 09571" />
                  </div>

                  {/* Email Us (3 professional contact emails) */}
                  <div className="get-in-touch-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                    <div className="flex items-center gap-3">
                      <div className="get-in-touch-icon-box">
                        <Mail size={18} />
                      </div>
                      <p className="get-in-touch-label" style={{ marginBottom: 0 }}>Email Us</p>
                    </div>
                    <div className="w-full pl-11 space-y-4">
                      <div className="flex items-center justify-between group">
                        <div>
                          <p className="get-in-touch-label" style={{ fontSize: "0.75rem", opacity: 0.7 }}>General Enquiries</p>
                          <p className="get-in-touch-value hover:text-[#E8400A] transition-colors" style={{ fontSize: "0.95rem" }}>info@netcradus.com</p>
                        </div>
                        <CopyButton value="info@netcradus.com " />
                      </div>
                      <div className="flex items-center justify-between group">
                        <div>
                          <p className="get-in-touch-label" style={{ fontSize: "0.75rem", opacity: 0.7 }}>Emergency Support (24×7)</p>
                          <p className="get-in-touch-value hover:text-[#E8400A] transition-colors" style={{ fontSize: "0.95rem" }}>support@netcradus.com</p>
                        </div>
                        <CopyButton value="support@netcradus.com" />
                      </div>
                      <div className="flex items-center justify-between group">
                        <div>
                          <p className="get-in-touch-label" style={{ fontSize: "0.75rem", opacity: 0.7 }}>Sales & Business Enquiries</p>
                          <p className="get-in-touch-value hover:text-[#E8400A] transition-colors" style={{ fontSize: "0.95rem" }}>sales@netcradus.com</p>
                        </div>
                        <CopyButton value="sales@netcradus.com" />
                      </div>
                    </div>
                  </div>

                  {/* India Node Address */}
                  <div className="get-in-touch-item">
                    <div className="get-in-touch-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">India Node</p>
                      <p className="get-in-touch-value" style={{ fontSize: '0.85rem' }}>
                        AVS City Square<br />
                        Delhi NCR, India
                      </p>
                    </div>
                  </div>

                  {/* UK Headquarters Address */}
                  <div className="get-in-touch-item">
                    <div className="get-in-touch-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">UK Headquarters</p>
                      <p className="get-in-touch-value" style={{ fontSize: '0.85rem' }}>
                        Netcradus Ltd.<br />
                        London Road, Leicester, LE2 0QS, England, United Kingdom
                      </p>
                    </div>
                  </div>

                  {/* Business Hours (24x7 Security Operations) */}
                  <div className="get-in-touch-item">
                    <div className="get-in-touch-icon-box">
                      <Clock size={18} />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">24×7 Security Operations</p>
                      <p className="get-in-touch-value-desc" style={{ marginTop: '4px', fontSize: '0.8rem', lineHeight: '1.4' }}>
                        Our Security Operations Center (SOC) provides continuous monitoring, incident response, and enterprise cybersecurity support around the clock.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="get-in-touch-secure-badge">
                  <ShieldCheck size={16} className="text-[#3b82f6] shrink-0" style={{ marginTop: '2px' }} strokeWidth={1.75} />
                  <p>
                    Your information is securely transmitted and handled confidentially in accordance with our data policy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Global Offices Maps */}
      <div className="relative z-10">
        <LocationMap />
      </div>



      {/* FAQs Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-kicker">FAQ</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion">
            {faqItems.map((item, i) => {
              const isOpen = faqOpenIndex === i;
              return (
                <div key={item.question} className="card-premium faq-item">
                  <button
                    type="button"
                    onClick={() => setFaqOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="faq-trigger"
                  >
                    <span className="faq-question">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="faq-icon-wrapper"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="faq-answer-wrapper"
                      >
                        <p className="faq-answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="faq-footer"
          >
            Still have questions?{" "}
            <a href="#contact-form" className="faq-footer-link">
              Send us a message
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
