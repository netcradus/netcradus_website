import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Subtle Grid / Line Animation
    const lines = [];
    for (let i = 0; i < 15; i++) {
        lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 80 + 40,
            speed: Math.random() * 0.4 + 0.1,
            opacity: Math.random() * 0.2
        });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw moving lines
      lines.forEach(line => {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 194, 255, ${line.opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x + line.length, line.y);
          ctx.stroke();
          
          line.x += line.speed;
          if (line.x > canvas.width) {
              line.x = -line.length;
              line.y = Math.random() * canvas.height;
          }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
       {/* 🔥 FULL WIDTH IMAGE */}
  <div className="hero-banner">
    <img src="/img/hero.jpg" alt="SIEM" />
  </div>
     <div className="container hero-container">

  

  <div className="hero-content reveal">
    <span className="section-label">// DEFEND WHAT MATTERS</span>

    <h1 className="hero-title">
      Defend What Matters <span>Intelligently</span>
    </h1>

    <p className="hero-subtitle">
      Netcradus delivers enterprise-grade cybersecurity and bespoke software solutions built for the threats of tomorrow.
    </p>

    <div className="hero-ctas">
      <Link to="/acis" className="btn btn-primary">
        Explore ACIS <ArrowRight size={18} style={{ marginLeft: "0.5rem" }} />
      </Link>
      <Link to="/services" className="btn btn-ghost">
        Our Services
      </Link>
    </div>
  </div>

        <div className="trust-strip reveal" style={{transitionDelay: '0.4s'}}>
          <p className="trust-label">Trusted by organisations across...</p>
          <div className="trust-logos">
            {['Healthcare', 'Finance', 'Government', 'Energy'].map((sector) => (
              <div key={sector} className="trust-icon">
                <span className="sector-name">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
