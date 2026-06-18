import React from "react";

const partners = [
  {
    name: "Savex Technologies",
    logo: "/technology/savex.png",
  },
  {
    name: "Kratikal",
    logo: "/technology/Kratikal.png",
  },
  {
    name: "Kaspersky",
    logo: "/technology/Kaspersky.png",
  },
  {
    name: "Motadata",
    logo: "/technology/Motadata.png",

  },
  {
    name: "Razorpay",
    logo: "/technology/Razorpay.png",
  },
   {
    name: "Onlinepantry",
    logo: "/technology/onlinepantry.png",
  },
];

export default function TechnologyPartnersSection() {
  return (
    <section className="relative overflow-hidden bg-premium-radial py-20">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Partnerships
          </span>

          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Technology Partners
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            Collaborating with industry-leading technology providers to deliver
            stronger cybersecurity and enterprise security solutions.
          </p>
        </div>

        <div className="relative overflow-hidden py-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-marquee whitespace-nowrap items-center space-x-[80px] py-6">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex flex-col items-center justify-center shrink-0 w-[220px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 md:max-h-20 max-w-[160px] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <h3 className="mt-4 text-center text-sm md:text-base font-semibold text-text-primary">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}