import React from "react";

const galleryImages = [
  "/generate1.png",
  "/generate2.png",
  "/generate3.png",
  "/generate4.png",
  "/generate5.png",
  "/generate6.png",
  "/generate7.png",
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-premium-radial py-24"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Gallery
          </span>

          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Our Gallery
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Explore moments, collaborations, workspace culture, and highlights
            from Netcradus.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,102,0,0.08)]"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-[320px] w-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white">
                  Netcradus Workspace
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  Modern cybersecurity environment & team collaboration.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}