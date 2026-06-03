import React, { useEffect, useState } from "react";

export default function LocationMap() {
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    if (window.location.hostname.includes(".in")) {
      setIsIndia(true);
    } else {
      setIsIndia(false);
    }
  }, []);

  const mapSrc = isIndia
    ? "https://www.google.com/maps?q=AVS+City+Square,+Raj+Nagar+Ext,+Ghaziabad,+201003&output=embed"
    : "https://www.google.com/maps?q=London+Road,+Leicester,+LE2+0QS,+England,+United+Kingdom&output=embed";

  return (
    <div className="w-full h-96 mt-16 rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-[0_20px_80px_rgba(0,0,0,0.1)] relative">
      <iframe
        title="Office Location"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 transition-all duration-500 hover:filter-none"
      ></iframe>
    </div>
  );
}
