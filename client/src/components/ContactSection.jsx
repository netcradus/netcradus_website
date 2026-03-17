import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import GlassCard from "./ui/GlassCard";
import GradientButton from "./ui/GradientButton";
import MagneticWrapper from "./ui/MagneticWrapper";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export default function ContactSection() {
    const formRef = useRef();
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [formData, setFormData] = useState({
        user_name: "",
        user_company: "",
        user_phone: "",
        user_email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.user_name || !formData.user_email || !formData.message) {
            return;
        }

        setStatus("loading");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_id",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_id",
                {
                    name: formData.user_name,
                    email: formData.user_email,
                    phone: formData.user_phone || "N/A",
                    company: formData.user_company || "N/A",
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key"
            );

            setStatus("success");
            setFormData({ user_name: "", user_company: "", user_phone: "", user_email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Email error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <SectionWrapper id="contact" className="py-16 md:py-32 bg-background relative overflow-hidden transition-colors duration-300">
            {/* Atmospheric Background */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--border-color)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
                {/* Left: Strategic Hook */}
                <AnimatedReveal>
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-primary uppercase mb-8 block">
                        Establish Connection
                    </span>
                    <h2 className="text-4xl md:text-7xl font-display font-extrabold text-[var(--text-primary)] mb-8 tracking-tighter leading-none">
                        <span className="text-[var(--text-primary)]">Ready to</span> <br />
                        <span className="text-[var(--text-secondary)] opacity-60 italic">fortify?</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] font-sans text-lg leading-relaxed mb-16 max-w-md">
                        Our strategists are standing by to engineer your digital shield. Initiate the 60-minute executive briefing.
                    </p>

                    <div className="space-y-12">
                        <div className="flex gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-2xl bg-surface-color/10 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                                <Mail size={18} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-[var(--text-secondary)] opacity-50 uppercase tracking-widest block mb-2">Technical Liaison</span>
                                <h4 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-primary transition-colors">info@netcradus.com</h4>
                            </div>
                        </div>

                        <div className="flex gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-2xl bg-surface-color/10 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                                <Phone size={18} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-[var(--text-secondary)] opacity-50 uppercase tracking-widest block mb-2">Direct Operative</span>
                                <h4 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-primary transition-colors">1800 121 008800</h4>
                            </div>
                        </div>

                        <div className="flex gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-2xl bg-surface-color/10 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-[var(--text-secondary)] opacity-50 uppercase tracking-widest block mb-2">Operational Hubs</span>
                                <h4 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-primary transition-colors">Leicester (HQ) / Noida (Node)</h4>
                            </div>
                        </div>
                    </div>
                </AnimatedReveal>

                {/* Right: Immersive Form */}
                <AnimatedReveal delay={0.2}>
                    <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--border-color)] to-transparent">
                        <div className="bg-[var(--bg-color)]/80 backdrop-blur-3xl p-8 md:p-12 rounded-[23px] relative z-10 border border-[var(--border-color)]">
                            {/* Success Overlay */}
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-color)] rounded-[23px] p-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(0,124,255,0.2)]">
                                        <CheckCircle2 className="text-primary w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-4">Transmission Received</h3>
                                    <p className="text-[var(--text-secondary)] font-sans max-w-xs mx-auto">Our security operatives are reviewing your dossier and will reach out shortly.</p>
                                    <button onClick={() => setStatus("idle")} className="mt-8 text-xs font-bold text-primary uppercase tracking-[0.2em] hover:text-[var(--text-primary)] transition-colors">Close Feed</button>
                                </motion.div>
                            )}

                            <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-10 tracking-tight">Technical Inquiry</h3>
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            required
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-[var(--border-color)] py-3 text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-[var(--text-secondary)]/50"
                                            placeholder="FULL NAME"
                                        />
                                        <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-primary transition-all">NAME</label>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="user_company"
                                            name="user_company"
                                            value={formData.user_company}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-[var(--border-color)] py-3 text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-[var(--text-secondary)]/50"
                                            placeholder="ORGANIZATION"
                                        />
                                        <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-primary transition-all">COMPANY</label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            required
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            value={formData.user_email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-[var(--border-color)] py-3 text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-[var(--text-secondary)]/50"
                                            placeholder="OFFICIAL EMAIL"
                                        />
                                        <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-primary transition-all">EMAIL</label>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            id="user_phone"
                                            name="user_phone"
                                            value={formData.user_phone}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-[var(--border-color)] py-3 text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-[var(--text-secondary)]/50"
                                            placeholder="+44 / +91"
                                        />
                                        <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-primary transition-all">CONTACT_NO</label>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-[var(--border-color)] py-3 text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors font-sans resize-none placeholder:text-[var(--text-secondary)]/50"
                                        placeholder="OUTLINE REQUIREMENTS..."
                                    ></textarea>
                                    <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-primary transition-all">BRIEF</label>
                                </div>

                                <div className="pt-6">
                                    <MagneticWrapper strength={0.3}>
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full flex items-center justify-between px-10 py-6 bg-[var(--text-primary)] text-[var(--bg-color)] font-display font-extrabold text-xs uppercase tracking-[0.3em] group disabled:opacity-50 transition-all shadow-lg"
                                        >
                                            {status === "loading" ? (
                                                <div className="flex items-center gap-3">
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    PROCCESSING_FEED
                                                </div>
                                            ) : (
                                                <>
                                                    SUBMIT_INTEL
                                                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </MagneticWrapper>
                                </div>
                            </form>
                        </div>
                    </div>
                </AnimatedReveal>
            </div>
        </SectionWrapper>
    );
}
