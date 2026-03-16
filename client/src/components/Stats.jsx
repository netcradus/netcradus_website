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

  const testimonials = [
    {
      text: "Netcradus transformed our security posture. ACIS is the most capable AI tool we've ever integrated.",
      author: "James Wilson",
      role: "CISO",
      company: "HealthTrust UK"
    },
    {
      text: "The speed of response is what sets them apart. We sleep better knowing Netcradus is on watch.",
      author: "Sarah Chen",
      role: "Head of Infrastructure",
      company: "FinGlobal"
    }
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

      <div className="container testimonials-container">
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card reveal glass" style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary-accent)" color="var(--primary-accent)" />)}
              </div>
              <blockquote className="testimonial-text">"{t.text}"</blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">{t.author}</span>
                  <span className="author-role">{t.role}, {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
