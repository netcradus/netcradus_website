import React from "react";

const partners = [
  {
    name: "Savex Technologies",
    logo: "/technology/savex.png",
  },
  {
    name: "Kratikal",
    logo: "/technology/kratiakal.png",
  },
  {
    name: "Kaspersky",
    logo: "/technology/Kaspersky.png",
  },
  {
    name: "Motadata",
    logo: "/technology/Motadata.png",
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

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex min-h-[180px] flex-col items-center justify-center rounded-[24px] border border-white/10 bg-[var(--color-surface-raised)] p-6 transition-all duration-300 hover:border-accent/50 hover:-translate-y-1"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />

              <h3 className="mt-4 text-center text-sm font-semibold text-text-primary">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}