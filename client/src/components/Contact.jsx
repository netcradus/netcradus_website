import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.user_name || !formData.user_email || !formData.message) return;
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
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header reveal text-center">
                    <span className="section-label text-primary font-bold tracking-[0.4em] uppercase mb-8 block">
                        Establish Connection
                    </span>
                    <h2 className="section-title text-4xl md:text-7xl font-display font-extrabold mb-8 tracking-tighter leading-none">
                        <span className="text-[var(--text-primary)]">Ready to</span> <br />
                        <span className="text-[var(--text-secondary)] opacity-80 italic">fortify?</span>
                    </h2>
                    <p className="section-desc max-w-md mx-auto text-[var(--text-secondary)] font-sans text-lg leading-relaxed mb-16">
                        Our strategists are standing by to engineer your digital shield. Initiate the 60-minute executive briefing.
                    </p>
                </div>

                <div className="contact-grid reveal">
                    <div className="contact-info">
                        <div className="info-list">
                            <div className="info-item">
                                <div className="info-icon"><Mail size={20} /></div>
                                <div className="info-content">
                                    <span className="info-label mono">Technical Liaison</span>
                                    <a href="mailto:info@netcradus.com" className="info-val">info@netcradus.com</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Phone size={20} /></div>
                                <div className="info-content">
                                    <span className="info-label mono">Direct Operative</span>
                                    <span className="info-val">1800 121 008800</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><MapPin size={20} /></div>
                                <div className="info-content">
                                    <span className="info-label mono">Operational Hubs</span>
                                    <span className="info-val">Leicester (HQ) / Noida (Node)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container glass">
                        {status === "success" && (
                            <div className="contact-success-overlay">
                                <CheckCircle2 size={48} className="text-primary mb-4" />
                                <h3>Transmission Received</h3>
                                <p>Our operatives are reviewing your dossier and will reach out shortly.</p>
                                <button onClick={() => setStatus("idle")} className="btn btn-ghost mt-6 text-xs">Close Feed</button>
                            </div>
                        )}
                        
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 className="form-title object-title mono mb-6">Technical Inquiry</h3>
                            <div className="form-grid">
                                <div className="form-group floating-label">
                                    <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="FULL NAME" required />
                                    <label htmlFor="user_name" className="mono">NAME</label>
                                </div>
                                <div className="form-group floating-label">
                                    <input type="text" id="user_company" name="user_company" value={formData.user_company} onChange={handleChange} placeholder="COMPANY" />
                                    <label htmlFor="user_company" className="mono">COMPANY</label>
                                </div>
                            </div>
                            <div className="form-grid">
                                <div className="form-group floating-label">
                                    <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="OFFICIAL EMAIL" required />
                                    <label htmlFor="user_email" className="mono">EMAIL</label>
                                </div>
                                <div className="form-group floating-label">
                                    <input type="tel" id="user_phone" name="user_phone" value={formData.user_phone} onChange={handleChange} placeholder="+44 / +91" />
                                    <label htmlFor="user_phone" className="mono">CONTACT_NO</label>
                                </div>
                            </div>
                            <div className="form-group floating-label">
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="OUTLINE REQUIREMENTS..." required></textarea>
                                <label htmlFor="message" className="mono">BRIEF</label>
                            </div>
                            <button type="submit" disabled={status === "loading"} className="btn btn-primary btn-block submit-btn mt-6">
                                {status === "loading" ? (
                                    <span className="flex items-center justify-center gap-2"><Loader2 size={16} className="animate-spin" /> PROCESSING</span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">SUBMIT INTEL <ArrowRight size={16} /></span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
