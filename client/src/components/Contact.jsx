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
        <section id="contact" className="py-24 bg-premium-radial relative transition-colors duration-500 overflow-hidden">
            <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                <div className="reveal text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">
                        Establish Connection
                    </span>
                    <h2 className="text-4xl md:text-7xl font-display font-black text-zinc-900 dark:text-white mb-8 tracking-tighter leading-none">
                        Ready to <br />
                        <span className="text-accent italic">fortify?</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-sans leading-relaxed">
                        Our strategists are standing by to engineer your digital shield. Initiate the 60-minute executive briefing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start reveal">
                    <div className="lg:col-span-4 space-y-10">
                        <div className="space-y-8">
                            {[
                                { icon: <Mail size={20} />, label: "Technical Liaison", val: "info@netcradus.com", link: "mailto:info@netcradus.com" },
                                { icon: <Phone size={20} />, label: "Direct Operative", val: "1800 121 008800", link: null },
                                { icon: <MapPin size={20} />, label: "Operational Hubs", val: "Leicester (HQ) / Noida (Node)", link: null }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">{item.icon}</div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">{item.label}</span>
                                        {item.link ? (
                                            <a href={item.link} className="text-lg font-display font-black text-zinc-900 dark:text-white hover:text-accent transition-colors block">{item.val}</a>
                                        ) : (
                                            <span className="text-lg font-display font-black text-zinc-900 dark:text-white block">{item.val}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 premium-card p-10 lg:p-16 relative">
                        {status === "success" && (
                            <div className="absolute inset-0 z-20 bg-white/95 dark:bg-zinc-900/95 flex flex-col items-center justify-center text-center p-12 backdrop-blur-sm rounded-[inherit]">
                                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-display font-black text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Transmission Received</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm">Our operatives are reviewing your dossier and will reach out shortly.</p>
                                <button onClick={() => setStatus("idle")} className="btn-primary px-8 py-3 rounded-xl uppercase text-[10px] font-bold tracking-widest no-underline">Close Feed</button>
                            </div>
                        )}
                        
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em]">Technical Inquiry</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative group">
                                    <label htmlFor="user_name" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 block group-focus-within:text-accent transition-colors">NAME</label>
                                    <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="FULL NAME" className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-all" required />
                                </div>
                                <div className="relative group">
                                    <label htmlFor="user_company" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 block group-focus-within:text-accent transition-colors">COMPANY</label>
                                    <input type="text" id="user_company" name="user_company" value={formData.user_company} onChange={handleChange} placeholder="COMPANY NAME" className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative group">
                                    <label htmlFor="user_email" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 block group-focus-within:text-accent transition-colors">EMAIL</label>
                                    <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="OFFICIAL EMAIL" className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-all" required />
                                </div>
                                <div className="relative group">
                                    <label htmlFor="user_phone" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 block group-focus-within:text-accent transition-colors">CONTACT_NO</label>
                                    <input type="tel" id="user_phone" name="user_phone" value={formData.user_phone} onChange={handleChange} placeholder="+44 / +91" className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-all" />
                                </div>
                            </div>

                            <div className="relative group">
                                <label htmlFor="message" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 block group-focus-within:text-accent transition-colors">BRIEF</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="OUTLINE REQUIREMENTS..." className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-all resize-none" required></textarea>
                            </div>

                            <button type="submit" disabled={status === "loading"} className="btn-primary w-full py-5 rounded-2xl flex items-center justify-center gap-3 no-underline shadow-premium disabled:opacity-50">
                                {status === "loading" ? (
                                    <><Loader2 size={18} className="animate-spin" /> PROCESSING TRANSMISSION</>
                                ) : (
                                    <>SUBMIT INTEL <ArrowRight size={18} /></>
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

