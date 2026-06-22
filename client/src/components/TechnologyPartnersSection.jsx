import React from "react";

const partners = [
  { name: "Savex Technologies", logo: "/technology/savex.png" },
  { name: "Kratikal", logo: "/technology/Kratikal.png" },
  { name: "Kaspersky", logo: "/technology/Kaspersky.png" },
  { name: "Motadata", logo: "/technology/Motadata.png" },
  { name: "Razorpay", logo: "/technology/Razorpay.png" },
  { name: "Onlinepantry", logo: "/technology/onlinepantry.png" },
];

export default function TechnologyPartnersSection() {
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="relative overflow-hidden bg-premium-radial py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="mb-4 block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.32em] sm:tracking-[0.35em] text-accent">
            Partnerships
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-text-primary">
            Technology Partners
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:mt-5 sm:text-base">
            Collaborating with industry-leading technology providers to deliver
            stronger cybersecurity, digital trust, and enterprise-grade
            security solutions.
          </p>
        </div>

        {/* Marquee wrapper */}
        <div className="relative overflow-hidden py-4 sm:py-6 lg:py-8">
          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 sm:w-24 lg:w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 sm:w-24 lg:w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />

          {/* Top subtle line glow */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom subtle line glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="partner-marquee group">
            <div className="partner-track">
              {repeatedPartners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="partner-item">
                  <div className="partner-logo-wrap">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="partner-name">{partner.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .partner-marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .partner-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
          will-change: transform;
        }

        .partner-marquee:hover .partner-track {
          animation-play-state: paused;
        }

        .partner-item {
          flex: 0 0 auto;
          width: 140px;
          padding-right: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .partner-logo-wrap {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-logo {
          max-width: 95px;
          max-height: 42px;
          object-fit: contain;
          opacity: 0.95;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .partner-item:hover .partner-logo {
          transform: scale(1.05);
          opacity: 1;
        }

        .partner-name {
          margin-top: 12px;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 0.01em;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (min-width: 640px) {
          .partner-item {
            width: 170px;
            padding-right: 24px;
          }

          .partner-logo-wrap {
            height: 54px;
          }

          .partner-logo {
            max-width: 110px;
            max-height: 46px;
          }

          .partner-name {
            margin-top: 14px;
            font-size: 14px;
          }
        }

        @media (min-width: 1024px) {
          .partner-item {
            width: 210px;
            padding-right: 28px;
          }

          .partner-logo-wrap {
            height: 60px;
          }

          .partner-logo {
            max-width: 125px;
            max-height: 52px;
          }

          .partner-name {
            margin-top: 15px;
            font-size: 15px;
          }
        }

        @media (min-width: 1280px) {
          .partner-item {
            width: 220px;
          }

          .partner-logo {
            max-width: 135px;
            max-height: 56px;
          }

          .partner-name {
            font-size: 16px;
          }
        }

        @media (hover: none) {
          .partner-marquee:hover .partner-track {
            animation-play-state: running;
          }

          .partner-item:hover .partner-logo {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}