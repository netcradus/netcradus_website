import React, { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';
import './Stats.css';

const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setStarted(true);
    }, { threshold: 0.5 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { label: "Threat detection accuracy", value: 99.7, suffix: "%" },
    { label: "Average response time", value: 2, suffix: " min", prefix: "< " },
    { label: "Organisations protected", value: 150, suffix: "+" },
    { label: "Monitoring coverage", value: 24, suffix: "/7" }
  ];



  return (
    <section id="stats" className="py-24 bg-premium-radial relative overflow-hidden transition-colors duration-500">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="reveal group">
              <div className="text-4xl md:text-6xl font-display font-black text-text-primary mb-4 tracking-tighter">
                {stat.prefix}
                <Counter end={stat.value === 99.7 ? 99 : stat.value} duration={2000} suffix={stat.value === 99.7 ? ".7" + stat.suffix : stat.suffix} />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-text-secondary uppercase tracking-[0.4em] group-hover:text-accent transition-colors duration-500 font-display">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Stats;

