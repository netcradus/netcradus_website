import React from "react";
import AmbientMesh from "./AmbientMesh";
import "./SubHero.css";

const SubHero = ({ title, subtitle, label, actions, visual, align = "left" }) => {
  const textAlign = align === "center" ? "mx-auto text-center" : "";

  return (
    <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-premium-radial py-24 transition-colors duration-500">
      <AmbientMesh />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(232,64,10,0.1),transparent_24%),radial-gradient(circle_at_76%_36%,rgba(232,64,10,0.06),transparent_24%)] dark:bg-[radial-gradient(circle_at_30%_28%,rgba(232,64,10,0.14),transparent_24%),radial-gradient(circle_at_76%_36%,rgba(232,64,10,0.1),transparent_24%)]" />
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className={`reveal max-w-3xl ${textAlign}`}>
          {label ? <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]">{label}</span> : null}
          <h1 className="mb-8 text-4xl font-display font-black leading-none tracking-tighter text-text-primary md:text-7xl">{title}</h1>
          {subtitle ? <p className="text-lg font-sans leading-relaxed text-text-secondary md:text-xl">{subtitle}</p> : null}
          {actions ? <div className={`mt-10 flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}>{actions}</div> : null}
        </div>
        {visual ? <div className="relative z-10 mt-12">{visual}</div> : null}
      </div>
    </section>
  );
};

export default SubHero;

