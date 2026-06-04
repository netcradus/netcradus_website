import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import LocationMap from './LocationMap';
import './Contact.css';

const contactItems = [
  { icon: <Mail size={20} />, label: "Technical Liaison", val: "info@netcradus.com", link: "mailto:netcradus@gmail.com" },
  { icon: <Phone size={20} />, label: "Direct Operative", val: "1800 121 008800" },
  {
    icon: <MapPin size={20} />,
    label: "Global HQ",
    val: "London Road, Leicester, LE2 0QS, England, United Kingdom",
  },
  {
    icon: <MapPin size={20} />,
    label: "Technology Centre",
    val: "AVS City Square, Raj Nagar Ext, Ghaziabad, 201003",
  },
];

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

  console.log("===== EMAILJS DEBUG =====");
  console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  console.log("FORM DATA:", {
    name: formData.user_name,
    email: formData.user_email,
    phone: formData.user_phone,
    company: formData.user_company,
    message: formData.message,
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
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus("success");
    setFormData({
      user_name: "",
      user_company: "",
      user_phone: "",
      user_email: "",
      message: ""
    });

    setTimeout(() => setStatus("idle"), 5000);
  } catch (error) {
    console.error("Email error:", error);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 5000);
  }
};

  return (
    <section className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-accent/8 blur-[120px]"></div>

      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.4em] text-accent">
            Establish Connection
          </span>

          <h1 className="mb-8 text-4xl font-black leading-[1.05] tracking-tight text-[var(--color-text-primary)] md:text-7xl">
            Cybersecurity Consultation <br />
            <span className="text-accent italic">for your business</span>
          </h1>

          <p className="text-lg text-[var(--color-text-secondary)] md:text-xl">
            Our strategists are ready to engineer your digital shield.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            {contactItems.map((item, idx) => (
              <div key={idx} className="group flex gap-5 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]/75 p-5 shadow-[0_12px_34px_rgba(232,64,10,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-accent/10 to-transparent text-accent shadow-sm transition-all group-hover:shadow-[0_0_20px_rgba(232,64,10,0.2)]">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <span className="mb-1 block text-[10px] uppercase tracking-widest text-[var(--color-text-secondary)]">
                    {item.label}
                  </span>

                  {item.link ? (
                    <a href={item.link} className="break-all text-lg font-bold text-[var(--color-text-primary)] transition hover:text-accent">
                      {item.val}
                    </a>
                  ) : (
                    <span className="block text-sm font-semibold leading-relaxed text-[var(--color-text-primary)] md:text-base">
                      {item.val}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="relative lg:col-span-8">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-40 blur-2xl"></div>

            <div className="premium-card relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.1)] backdrop-blur-xl lg:p-16">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              {status === "success" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-[var(--color-bg)]/95 text-center">
                  <CheckCircle2 size={40} className="mb-4 text-accent" />
                  <h3 className="mb-2 text-xl font-bold">Message Sent</h3>
                  <p className="text-[var(--color-text-secondary)]">We’ll get back to you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
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

                <div className="grid gap-6 md:grid-cols-2">
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

                <button type="submit" disabled={status === "loading"} className="btn-premium">
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

        <LocationMap />
      </div>
    </section>
  );
};

export default Contact;
