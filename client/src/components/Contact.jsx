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
    <section className="py-24 bg-premium-radial relative overflow-hidden transition-colors duration-500">
      
      {/* Glow background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full"></div>

      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">

        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">
            Establish Connection
          </span>

          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.05] text-[var(--color-text-primary)] mb-8">
            Ready to <br />
            <span className="text-accent italic">fortify?</span>
          </h2>

          <p className="text-[var(--color-text-secondary)] text-lg md:text-xl">
            Our strategists are ready to engineer your digital shield.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-4 space-y-10">
            {[
              { icon: <Mail size={20} />, label: "Technical Liaison", val: "info@netcradus.com", link: "mailto:info@netcradus.com" },
              { icon: <Phone size={20} />, label: "Direct Operative", val: "1800 121 008800" },
              { icon: <MapPin size={20} />, label: "Operational Hubs", val: "Leicester / Noida" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 group hover:translate-x-2 transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-[var(--color-border)] flex items-center justify-center text-accent shadow-sm group-hover:shadow-[0_0_20px_rgba(232,64,10,0.2)] transition-all">
                  {item.icon}
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-secondary)] block mb-1">
                    {item.label}
                  </span>

                  {item.link ? (
                    <a href={item.link} className="text-lg font-bold text-[var(--color-text-primary)] hover:text-accent transition">
                      {item.val}
                    </a>
                  ) : (
                    <span className="text-lg font-bold text-[var(--color-text-primary)]">
                      {item.val}
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-8 relative">

            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-2xl opacity-40"></div>

            <div className="premium-card backdrop-blur-xl bg-[var(--color-surface)]/80 p-10 lg:p-16 rounded-3xl border border-[var(--color-border)] shadow-[0_20px_80px_rgba(0,0,0,0.1)] relative">

              {/* SUCCESS */}
              {status === "success" && (
                <div className="absolute inset-0 bg-[var(--color-bg)]/95 flex flex-col items-center justify-center text-center rounded-3xl">
                  <CheckCircle2 size={40} className="text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                  <p className="text-[var(--color-text-secondary)]">We’ll get back to you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="input-premium"
                  />

                  <input
                    name="user_company"
                    value={formData.user_company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="input-premium"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="input-premium"
                  />

                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="input-premium"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="4"
                  required
                  className="input-premium resize-none"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-premium"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;