import React from 'react';
import { Link } from 'react-router-dom';
import './HomepageHighlights.css';

const HIGHLIGHTS = [
  {
    id: 'recognition',
    category: 'Industry Recognition',
    title: 'Netcradus recognized for enterprise-grade managed security',
    image: '/images/highlight-security.png',
    link: '/acis',
    gradientId: 'gradRecognize',
    color1: '#ff2fb0',
    color2: '#ff7b29',
  },
  {
    id: 'cyrix-platform',
    category: 'Platform Innovation',
    title: 'Cyrix XDR – Autonomous Extended Detection & Response',
    image: '/images/highlight-cyrix.png',
    link: '/netxdr',
    gradientId: 'gradCyrix',
    color1: '#ff7b29',
    color2: '#e8400a',
  },
];

export default function HomepageHighlights() {
  return (
    <section className="homepage-highlights-section">
      <div className="highlights-container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="highlight-card group relative block overflow-hidden rounded-[16px] aspect-video sm:aspect-[16/9] bg-[#080910] border border-white/10 no-underline"
            >
              {/* Card Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="highlight-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-[#05060a]/65 to-transparent pointer-events-none" />

              {/* Signature Animated Corner Glow Stroke (Top-Left) */}
              <svg
                className="highlight-corner-svg absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 500 300"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={item.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={item.color1} />
                    <stop offset="100%" stopColor={item.color2} />
                  </linearGradient>
                </defs>
                <path
                  d="M 180 2 H 18 A 16 16 0 0 0 2 18 V 180"
                  stroke={`url(#${item.gradientId})`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animated-corner-stroke"
                />
              </svg>

              {/* Bottom-Left Content Block */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10 flex flex-col justify-end">
                {/* Thin Horizontal Divider Line */}
                <div className="w-full h-[1px] bg-white/20 mb-4 transition-opacity duration-300 group-hover:bg-white/35" />

                {/* Category Label with Bullet */}
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                  <span
                    className="w-2 h-2 rounded-sm inline-block shrink-0"
                    style={{ backgroundColor: item.color2, boxShadow: `0 0 8px ${item.color2}` }}
                  />
                  <span>{item.category}</span>
                </div>

                {/* Card Title Heading (Max 2 lines) */}
                <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug line-clamp-2 m-0 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
