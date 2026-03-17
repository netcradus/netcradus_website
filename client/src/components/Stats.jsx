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
    <section id="stats" className="stats-section">
      <div className="stats-strip">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card reveal">
              <div className="stat-value">
                {stat.prefix}
                <Counter end={stat.value === 99.7 ? 99 : stat.value} duration={2000} suffix={stat.value === 99.7 ? ".7" + stat.suffix : stat.suffix} />
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Stats;
