import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import GlassCard from "./ui/GlassCard";
import { Quote, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import client1 from "../assets/clientsList/client_1-removebg.png";
import client2 from "../assets/clientsList/client_2-removebg.png";
import client3 from "../assets/clientsList/client_3-removebg.png";
import client4 from "../assets/clientsList/client 4.png";
import client5 from "../assets/clientsList/client5.png";
import client6 from "../assets/clientsList/client_6-removebg.png";

const clientLogos = [client1, client2, client3, client4, client5, client6];

const TESTIMONIALS_DATA = [
  {
    company: "OOURAA",
    industry: "Healthcare Technology",
    quote: "Netcradus helped us strengthen our cybersecurity posture with 24×7 SOC monitoring, proactive threat detection, and continuous vulnerability assessments. Their team delivered enterprise-grade security with exceptional responsiveness and technical expertise."
  },
  {
    company: "Online Pantry",
    industry: "E-Commerce & Retail",
    quote: "Partnering with Netcradus significantly improved our security operations. Their SIEM monitoring, cloud security solutions, and rapid incident response helped us protect customer data and maintain uninterrupted business operations."
  },
  {
    company: "Vastralen",
    industry: "Technology & Digital Solutions",
    quote: "Netcradus has been a reliable cybersecurity partner, helping us improve threat visibility, security monitoring, and infrastructure protection. Their expertise has added significant value to our business."
  },
  {
    company: "CyberHaxs",
    industry: "Cybersecurity & Risk Management",
    quote: "Working with Netcradus enhanced our security operations through AI-powered monitoring, rapid incident response, and strategic cybersecurity guidance. Their expertise makes them a trusted long-term security partner."
  }
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

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    };

    const handleDotClick = (idx) => {
        setDirection(idx > currentIndex ? 1 : -1);
        setCurrentIndex(idx);
    };

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            handleNext();
        }, 4500);
        return () => clearInterval(timer);
    }, [currentIndex, isHovered]);

    return (
        <SectionWrapper 
            className="border-y border-white/5 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "#0B0B0D" }}
        >
            {/* Soft off-white radial gradient behind the section */}
            <div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle at top left, rgba(255,248,240,0.14), transparent 60%)"
                }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-center">

                {/* Left Side */}
                <div className="lg:col-span-1">

                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1.5 h-4 bg-primary" />
                        <span className="mono-label text-primary font-bold">
                            DOSSIER_FEEDBACK: 04
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display font-extrabold text-[var(--text-primary)] mb-8 tracking-tighter leading-none uppercase">
                        Trusted by <br />
                        <span className="text-primary italic">
                            LEADERS.
                        </span>
                    </h2>

                    <p className="text-[var(--text-secondary)] font-sans text-sm md:text-lg leading-relaxed mb-12 max-w-sm">
                        Securing the infrastructure of the world's most resilient organizations through strategic intelligence.
                    </p>

                    <button className="mono-label text-[var(--text-primary)] hover:text-primary transition-colors flex items-center gap-3 border-b border-[var(--border-color)] pb-2 group">
                        ACCESS_CLIENT_LOGS

                        <ArrowUpRight
                            size={14}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                    </button>

                </div>

                {/* Right Side */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Testimonials sliding carousel */}
                    <div 
                        className="relative w-full overflow-hidden min-h-[340px] sm:min-h-[290px] md:min-h-[260px] lg:min-h-[290px] xl:min-h-[260px]"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
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
                                className="w-full h-full"
                            >
                                <GlassCard
                                    hover={false}
                                    className="p-10 h-full min-h-[300px] sm:min-h-[250px] md:min-h-[220px] lg:min-h-[250px] xl:min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.22),0_0_50px_rgba(255,245,235,0.25)]"
                                    style={{
                                        backgroundColor: "rgba(255, 252, 248, 0.94)",
                                        backdropFilter: "blur(16px)",
                                        WebkitBackdropFilter: "blur(16px)",
                                        border: "1px solid rgba(255, 255, 255, 0.45)",
                                        boxShadow: "0 20px 50px rgba(0,0,0,0.18), 0 0 40px rgba(255,245,235,0.18)"
                                    }}
                                >
                                    <Quote
                                        className="absolute top-8 right-8 text-[#FF6B00]/15 w-12 h-12"
                                        strokeWidth={1}
                                    />

                                    <p 
                                        className="font-sans text-sm md:text-lg font-medium leading-relaxed mb-8 italic relative z-10"
                                        style={{ color: "#444444" }}
                                    >
                                        "{TESTIMONIALS_DATA[currentIndex].quote}"
                                    </p>

                                    <div 
                                        className="relative z-10 pt-6 mt-auto"
                                        style={{ borderTop: "1px solid rgba(17, 17, 17, 0.15)" }}
                                    >
                                        <h4 
                                            className="mono-label mb-1 font-bold"
                                            style={{ color: "#111111" }}
                                        >
                                            {TESTIMONIALS_DATA[currentIndex].industry}
                                        </h4>

                                        <p 
                                            className="font-mono text-[9px] uppercase tracking-widest font-semibold"
                                            style={{ color: "#FF6B00" }}
                                        >
                                            {TESTIMONIALS_DATA[currentIndex].company}
                                        </p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between max-w-xs mx-auto pt-2 relative z-10">
                        <button
                            onClick={handlePrev}
                            className="p-2.5 rounded-full bg-white text-black hover:text-[#FF6B00] shadow-md border border-white hover:border-[#FF6B00] transition-all hover:scale-105"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <div className="flex gap-2">
                            {TESTIMONIALS_DATA.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleDotClick(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === currentIndex ? "bg-[#FF6B00] w-5" : "bg-white/20 hover:bg-white/40"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-2.5 rounded-full bg-white text-black hover:text-[#FF6B00] shadow-md border border-white hover:border-[#FF6B00] transition-all hover:scale-105"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Client Logos */}
                    <div className="pt-12 border-t border-[var(--border-color)]">

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">

                            {clientLogos.map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={logo}
                                    alt="Client"
                                    className="h-16 md:h-20 w-auto object-contain"
                                />
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </SectionWrapper>
    );
}