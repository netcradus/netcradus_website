// import { Award, BadgeCheck, BriefcaseBusiness, Building2, Quote } from "lucide-react";

// const logos = [];

// const testimonials = [
//   {
//     name: "Security Leader",
//     role: "Enterprise Technology Team",
//     quote:
//       "Client testimonial ready. Add approved customer proof points here to reinforce trust and buying confidence.",
//   },
//   {
//     name: "Operations Head",
//     role: "Global Business Services",
//     quote:
//       "Use this space for verified outcomes tied to managed SOC, SIEM visibility, incident response, or compliance improvement.",
//   },
// ];

// const certifications = [
//   { icon: BadgeCheck, label: "Security Certifications" },
//   { icon: Award, label: "Industry Awards" },
//   { icon: Building2, label: "Enterprise References" },
//   { icon: BriefcaseBusiness, label: "Compliance Credentials" },
// ];

// export default function TrustSignals() {
//   return (
//     <section
//       id="trust-signals"
//       className="relative overflow-hidden bg-background py-24 transition-colors duration-500"
//     >
//       <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
//         <div className="mx-auto mb-16 max-w-3xl text-center">
//           <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
//             Trust Signals
//           </span>
//           <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
//             Proof points that support <span className="text-accent italic">buyer confidence.</span>
//           </h2>
         
//         </div>

//         <div className="grid gap-8">
          

//           <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
//             <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.06),transparent_40%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
//               <h3 className="text-2xl font-black tracking-tight text-text-primary">Testimonials</h3>
//               <div className="mt-6 grid gap-5 md:grid-cols-2">
//                 {testimonials.map((item) => (
//                   <article
//                     key={item.name}
//                     className="rounded-[24px] border border-border bg-[var(--color-surface-raised)]/70 p-6"
//                   >
//                     <Quote className="text-accent" size={24} />
//                     <p className="mt-4 text-sm leading-relaxed text-text-secondary">
//                       {item.quote}
//                     </p>
//                     <div className="mt-6 border-t border-border pt-4">
//                       <h4 className="text-base font-bold text-text-primary">{item.name}</h4>
//                       <p className="text-sm text-text-secondary">{item.role}</p>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </div>

//             <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.08),transparent_45%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
//               <h3 className="text-2xl font-black tracking-tight text-text-primary">
//                 Case Study Highlight
//               </h3>
//               <div className="mt-6 space-y-5 rounded-[24px] border border-accent/20 bg-accent/5 p-6">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
//                     Problem
//                   </p>
//                   <p className="mt-2 text-sm leading-relaxed text-text-secondary">
//                     A healthcare client faced repeated phishing-based credential theft
//                     affecting staff accounts.
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
//                     Solution
//                   </p>
//                   <p className="mt-2 text-sm leading-relaxed text-text-secondary">
//                     Deployed 24/7 SOC monitoring with AI-driven phishing detection and
//                     staff security training protocols.
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
//                     Result
//                   </p>
//                   <p className="mt-2 text-sm leading-relaxed text-text-secondary">
//                     Reduced phishing attack incidents by 72% within 90 days.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
//             <div className="rounded-[28px] border border-border bg-[var(--color-surface)]/85 p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
//               <h3 className="text-2xl font-black tracking-tight text-text-primary">
//                 Certifications &amp; Awards
//               </h3>
//               <ul className="mt-6 grid gap-4 sm:grid-cols-2">
//                 {certifications.map(({ icon: Icon, label }) => (
//                   <li
//                     key={label}
//                     className="flex items-center gap-3 rounded-[22px] border border-border bg-[var(--color-surface-raised)]/70 px-4 py-4 text-sm text-text-secondary"
//                   >
//                     <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/20 bg-accent/8 text-accent">
//                       <Icon size={18} />
//                     </span>
//                     <span>{label}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="rounded-[28px] border border-border bg-[linear-gradient(90deg,rgba(232,64,10,0.12),transparent_55%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
//               <h3 className="text-2xl font-black tracking-tight text-text-primary">
//                 Follow Netcradus on LinkedIn
//               </h3>
//               <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
//                 Use LinkedIn as the live proof stream for company updates, team growth,
//                 security insights, event participation, and customer-facing momentum.
//               </p>
//               <a
//                 href="https://www.linkedin.com/company/netcradus-pvt-ltd/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] no-underline"
//               >
//                 Visit LinkedIn
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BadgeCheck, BriefcaseBusiness, Building2, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const logos = [];

const testimonials = [
  {
    company: "OOURAA",
    industry: "Healthcare Technology",
    text: "Netcradus helped us strengthen our cybersecurity posture with 24×7 SOC monitoring, proactive threat detection, and continuous vulnerability assessments. Their team delivered enterprise-grade security with exceptional responsiveness and technical expertise."
  },
  {
    company: "Online Pantry",
    industry: "E-Commerce & Retail",
    text: "Partnering with Netcradus significantly improved our security operations. Their SIEM monitoring, cloud security solutions, and rapid incident response helped us protect customer data and maintain uninterrupted business operations."
  },
  {
    company: "Vastralen",
    industry: "Technology & Digital Solutions",
    text: "Netcradus has been a reliable cybersecurity partner, helping us improve threat visibility, security monitoring, and infrastructure protection."
  },
  {
    company: "CyberHaxs",
    industry: "Cybersecurity & Risk Management",
    text: "Working with Netcradus enhanced our security operations through AI-powered monitoring, rapid incident response, and strategic cybersecurity guidance."
  }
];

const certifications = [
  { icon: BadgeCheck, label: "Security Certifications" },
  { icon: Award, label: "Industry Awards" },
  { icon: Building2, label: "Enterprise References" },
  { icon: BriefcaseBusiness, label: "Compliance Credentials" },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};

export default function TrustSignals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);
  return (
    <section
      id="trust-signals"
      className="relative overflow-hidden bg-background py-24 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Trust Signals
          </span>
          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Proof points that support{" "}
            <span className="text-accent italic">buyer confidence.</span>
          </h2>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-accent/20 bg-surface/75 backdrop-blur-xl p-8 shadow-[0_18px_46px_rgba(232,64,10,0.08)] flex flex-col justify-between min-h-[450px] hover:border-accent/35 transition-colors duration-300">
              <div>
                <div className="flex items-center justify-between">
                  <div className="relative">
                    {/* Soft orange glow behind the heading */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-accent/15 rounded-full blur-xl pointer-events-none z-0" />
                    
                    <h3 className="relative z-10 text-3xl sm:text-4xl font-black tracking-tight text-text-primary uppercase">
                      Testimonials
                    </h3>
                    <div className="h-[3px] w-20 bg-gradient-to-r from-accent to-accent-bright mt-2 rounded-full" />
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-text-secondary hover:border-accent hover:text-accent transition-all cursor-pointer hover:scale-105"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-text-secondary hover:border-accent hover:text-accent transition-all cursor-pointer hover:scale-105"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div 
                  className="relative mt-6 overflow-hidden pt-2 px-1 pb-4 min-h-[270px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.article
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="relative rounded-[24px] border border-border bg-[var(--color-surface-raised)]/80 p-8 flex flex-col justify-between min-h-[250px] transition-all duration-350 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(232,64,10,0.15)] cursor-pointer group overflow-hidden"
                    >
                      {/* Animated orange accent line on the left edge */}
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-accent to-accent-bright rounded-l-[24px] overflow-hidden z-20">
                        <motion.div
                          className="w-full h-1/3 bg-white/70"
                          animate={{ y: ["-100%", "300%"] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        />
                      </div>

                      <div className="pl-2">
                        <Quote className="text-accent-bright filter drop-shadow-[0_0_8px_rgba(232,64,10,0.4)] transition-transform duration-300 group-hover:scale-110" size={32} />

                        <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-text-secondary italic group-hover:text-text-primary transition-colors duration-300">
                          "{testimonials[currentIndex].text}"
                        </p>
                      </div>

                      <div className="mt-8 border-t border-border/80 pt-5 flex flex-col gap-1 z-10 relative pl-2">
                        <h4 className="text-lg font-black text-white leading-tight tracking-wide uppercase transition-colors duration-300 group-hover:text-accent-bright">
                          {testimonials[currentIndex].company}
                        </h4>

                        <p className="text-[11px] font-bold text-accent tracking-widest uppercase mt-0.5">
                          {testimonials[currentIndex].industry}
                        </p>
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex ? "bg-accent w-5" : "bg-border hover:bg-accent/40 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.08),transparent_45%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
              <h3 className="text-2xl font-black tracking-tight text-text-primary">
                Case Study Highlight
              </h3>

              <div className="mt-6 space-y-5 rounded-[24px] border border-accent/20 bg-accent/5 p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    A healthcare client faced repeated phishing-based credential
                    theft affecting staff accounts.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Deployed 24/7 SOC monitoring with AI-driven phishing
                    detection and staff security training protocols.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    Result
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Reduced phishing attack incidents by 72% within 90 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}