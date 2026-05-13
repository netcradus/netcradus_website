const logos = [
  "TechNova",
  "FinEdge",
  "CloudCore",
  "MarketLoop",
  "NexaSphere",
  "InnoSoft",
  "DataWave",
  "ByteWorks",
];

export function ClientLogoWall() {
  return (
    <section className="py-16 px-6 text-center bg-[#0b0f1a] text-white">
      
      <h3 className="text-2xl font-semibold mb-10">
        Trusted by Growing Businesses
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 opacity-80">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-white/10 bg-white/5 hover:scale-105 transition duration-300"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}