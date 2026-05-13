import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aman Mehta",
    role: "Founder, TechNova Solutions",
    text: "Netcradus completely transformed our CRM system. Automation reduced manual work by 50% and improved efficiency drastically.",
  },
  {
    name: "Priya Sharma",
    role: "COO, FinEdge Systems",
    text: "Their team delivered a scalable digital system that changed how we manage operations. Extremely professional execution.",
  },
  {
    name: "Rohan Verma",
    role: "CTO, CloudCore",
    text: "Security architecture and backend systems were extremely solid. We now operate with full confidence.",
  },
  {
    name: "Neha Kapoor",
    role: "Head of Operations, MarketLoop",
    text: "Clean UI, powerful CRM dashboard, and smooth deployment. Highly recommended tech partner.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-20 px-6 bg-[#0b0f1a] text-white">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mt-3">
          Real results delivered by Netcradus
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-2xl border border-white/10 bg-white/5"
            >
              <p className="text-lg leading-relaxed">
                “{current.text}”
              </p>

              <div className="mt-6">
                <h4 className="text-orange-500 font-semibold">
                  {current.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {current.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}