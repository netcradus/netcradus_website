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
  ArrowUpRight
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import LocationMap from './LocationMap';
import './Contact.css';

// ─────────────────────────────────────────────────────────────────────────
// Config & Data Lists
// ─────────────────────────────────────────────────────────────────────────
const trustPoints = [
  { icon: ShieldCheck, label: "Encrypted submissions" },
  { icon: Clock3, label: "1-hour average response" },
  { icon: FileLock2, label: "NDA available on request" },
];

const contactOptions = [
  {
    id: "sales",
    icon: ShieldCheck,
    title: "Talk to Sales",
    description: "Discuss cybersecurity strategy and enterprise solutions.",
    cta: "Talk to Sales",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Technical Support",
    description: "Support for existing Netcradus customers and ACIS™ deployments.",
    cta: "Get Support",
  },
  {
    id: "incident",
    icon: Siren,
    title: "Incident Response",
    description: "Immediate assistance for active cyber incidents.",
    cta: "Report Incident",
  },
  {
    id: "partnerships",
    icon: Handshake,
    title: "Partnerships",
    description: "Technology, reseller, and business partnership opportunities.",
    cta: "Explore Partnership",
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

function TiltCard({ isActive, onClick, children }) {
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
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isActive}
      className={`card-premium card-sheen group card-option-btn ${
        isActive ? "active" : ""
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

// ─────────────────────────────────────────────────────────────────────────
// Primary Contact Component
// ─────────────────────────────────────────────────────────────────────────
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    user_name: "",
    user_company: "",
    user_phone: "",
    user_email: "",
    message: ""
  });
  
  // Custom states added for UI matching (recreated options + service select)
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [file, setFile] = useState(null);
  const [referenceId, setReferenceId] = useState("");
  const [errors, setErrors] = useState({});
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);
  const fileInputRef = useRef(null);

  const optionToService = {
    sales: "enterprise-software",
    support: "managed-soc",
    incident: "compliance",
    partnerships: "other",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.user_name.trim()) nextErrors.user_name = "Full name is required.";
    if (!formData.user_email.trim()) {
      nextErrors.user_email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      nextErrors.user_email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) nextErrors.message = "Tell us briefly what you need.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    console.log("FORM DATA:", {
      name: formData.user_name,
      email: formData.user_email,
      phone: formData.user_phone,
      company: formData.user_company,
      message: formData.message,
      service: selectedService,
      fileName: file ? file.name : null
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.user_name,
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
        user_name: "",
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
      user_name: "",
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

  const infoCards = [
    { icon: Phone, label: "Phone", value: "1800 12100 8800", href: "tel:1800121008800", copyValue: "1800 12100 8800" },
    { icon: Mail, label: "Email", value: "info@netcradus.com", href: "mailto:info@netcradus.com", copyValue: "info@netcradus.com" },
    { icon: Clock, label: "Business Hours", value: "Mon–Sat, 10:00 AM–7:00 PM" },
    { icon: MapPin, label: "Office Address", value: "Leicester, UK · Ghaziabad, India" },
  ];

  return (
    <div className="contact-section-wrapper">
      <AmbientBackground />

      {/* Hero Header */}
      <section className="hero-section">
        <div className="hero-glow" />
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
            Establish Connection
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title"
          >
            Contact <span>Netcradus</span>
          </motion.h1>

          <p className="hero-description">
            Have questions about cybersecurity, Managed SOC, VAPT, Cloud Security, AI Solutions, or
            enterprise services? Our experts are ready to help.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="trust-strip"
          >
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <span key={index} className="trust-point">
                  <Icon size={14} className="text-[var(--nc-electric)]" />
                  {point.label}
                </span>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — Contact Option Cards (Centered 4-Column Grid) */}
      <section className="options-section">
        <div className="options-container">
          <div className="options-grid">
            {contactOptions.map((option, i) => {
              const Icon = option.icon;
              const isActive = selectedOptionId === option.id;
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}
                >
                  <TiltCard isActive={isActive} onClick={() => handleOptionSelect(option.id)}>
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="card-check-badge"
                      >
                        <Check size={12} strokeWidth={3} />
                      </motion.span>
                    )}

                    <div className="card-icon-container">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="card-option-title">{option.title}</h3>
                    <p className="card-option-desc">{option.description}</p>
                    <span className="card-option-cta">
                      {isActive ? "Selected — scroll to form" : option.cta}
                      <ArrowUpRight size={14} />
                    </span>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
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
                    <h2>Send Us a Message</h2>
                    <p>
                      Fields marked <span className="text-[#C2410C]">*</span> are required. We typically reply within
                      one business hour.
                    </p>
                  </div>

                  <div className="form-fields-grid">
                    {/* Full Name */}
                    <div className="form-field-container">
                      <label htmlFor="user_name" className="field-label">
                        Full Name<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <User className={`field-icon ${formData.user_name ? "active" : ""}`} size={16} strokeWidth={1.75} />
                        <input
                          id="user_name"
                          name="user_name"
                          type="text"
                          value={formData.user_name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          aria-invalid={!!errors.user_name}
                          className={`field-input ${errors.user_name ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.user_name && <p className="text-error">{errors.user_name}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-field-container">
                      <label htmlFor="user_email" className="field-label">
                        Business Email<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <Mail className={`field-icon ${formData.user_email ? "active" : ""}`} size={16} strokeWidth={1.75} />
                        <input
                          id="user_email"
                          name="user_email"
                          type="email"
                          value={formData.user_email}
                          onChange={handleChange}
                          placeholder="you@company.com"
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
                        Phone Number
                      </label>
                      <div className="input-wrapper">
                        <Phone className={`field-icon ${formData.user_phone ? "active" : ""}`} size={16} strokeWidth={1.75} />
                        <input
                          id="user_phone"
                          name="user_phone"
                          type="tel"
                          value={formData.user_phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="field-input"
                        />
                      </div>
                      <div className="error-area" />
                    </div>

                    {/* Company */}
                    <div className="form-field-container">
                      <label htmlFor="user_company" className="field-label">
                        Company Name
                      </label>
                      <div className="input-wrapper">
                        <Building2 className={`field-icon ${formData.user_company ? "active" : ""}`} size={16} strokeWidth={1.75} />
                        <input
                          id="user_company"
                          name="user_company"
                          type="text"
                          value={formData.user_company}
                          onChange={handleChange}
                          placeholder="Netcradus Ltd"
                          className="field-input"
                        />
                      </div>
                      <div className="error-area" />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="form-field-container mt-4">
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
                        <option value="" disabled>Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="error-area" />
                  </div>

                  {/* Message */}
                  <div className="form-field-container mt-4">
                    <label htmlFor="message" className="field-label">
                      Message<span className="text-[#C2410C]">*</span>
                    </label>
                    <div className="input-wrapper">
                      <MessageSquare className={`field-icon icon-textarea ${formData.message ? "active" : ""}`} size={16} strokeWidth={1.75} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => {
                          if (e.target.value.length <= 600) handleChange(e);
                        }}
                        placeholder="Tell us about your project or enquiry..."
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
                            Send Message
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

          {/* Right Column: Contact Information Cards */}
          <div className="info-panel">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="card-premium live-soc-banner"
            >
              <span className="live-soc-ping">
                <span className="live-soc-ping-annulus" />
                <span className="live-soc-ping-core" />
              </span>
              <p>
                SOC Monitoring — <span className="live">Live</span>
              </p>
            </motion.div>

            {infoCards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <>
                  <div className="info-icon-wrapper">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="info-card-label">{card.label}</p>
                    <p className="info-card-value">{card.value}</p>
                  </div>
                  {card.copyValue && <CopyButton value={card.copyValue} />}
                </>
              );

              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.06 + i * 0.06 }}
                >
                  {card.href ? (
                    <a href={card.href} className="card-premium card-sheen info-card clickable">
                      {content}
                    </a>
                  ) : (
                    <div className="card-premium card-sheen info-card">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="card-premium info-secure-notice"
            >
              <ShieldCheck size={16} className="text-nc-success shrink-0" style={{ marginTop: '2px' }} strokeWidth={1.75} />
              <p>
                Your information is securely transmitted and handled confidentially.
              </p>
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
