import React from "react";

const ServiceDetailLayout = ({ service }) => {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3">
          {service.highlights.map((item) => (
            <span
              key={item}
              className="inline-flex whitespace-nowrap rounded-full border border-accent/15 bg-accent/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-accent"
            >
              {item}
            </span>
          ))}
        </div>
        <div>
          <h3 className="text-3xl font-black tracking-tight text-text-primary md:text-5xl">
            {service.heading}
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {service.description}
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {service.points.map((point) => (
            <li
              key={point}
              className="rounded-[22px] border border-border bg-[var(--color-surface-raised)]/70 p-5 text-sm leading-relaxed text-text-secondary shadow-[0_0_24px_rgba(232,64,10,0.04)]"
            >
              <div className="mb-3 h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(232,64,10,0.25)]" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_50%_20%,rgba(232,64,10,0.18),transparent_45%)] blur-3xl" />
        <div className="relative overflow-hidden rounded-[30px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_45%),var(--color-surface)] p-4 shadow-[0_22px_70px_rgba(232,64,10,0.08)]">
          {service.video ? (
            <video
              className="h-[400px] w-full rounded-[12px] object-cover object-top pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={service.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={service.image}
              alt={service.heading}
              className="h-[400px] w-full rounded-[12px] object-cover object-top"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailLayout;