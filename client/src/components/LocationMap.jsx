import React from "react";
import { MapPin, Mail, Phone, Navigation } from "lucide-react";

export default function LocationMap() {
  const offices = [
    {
      id: "india",
      flag: "🇮🇳",
      label: "India Headquarters",
      title: "India Headquarters",
      address: "AVS City Square, Delhi NCR, India",
      email: "info@netcradus.in",
      phone: "+91 72909 09571",
      mapQuery: "AVS City Square, Ghaziabad, Uttar Pradesh, India",
    },
    {
      id: "uk",
      flag: "🇬🇧",
      label: "United Kingdom Office",
      title: "United Kingdom Office",
      address: "London, United Kingdom",
      email: "info@netcradus.in",
      mapQuery: "London, United Kingdom",
    },
  ];

  return (
    <div className="global-offices-section">
      <div className="offices-header">
        <span className="offices-kicker">Find Us</span>
        <h2 className="offices-title">Our Offices</h2>
        <p className="offices-desc" style={{ margin: "0.5rem auto 0 auto" }}>
          Visit our offices or connect with our teams across regions. We're here to support your business wherever you are.
        </p>
      </div>

      <div className="global-offices-grid">
        {offices.map((office) => {
          const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`;
          const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`;

          return (
            <div key={office.id} className="global-office-card">
              <div className="global-office-map-container">
                <iframe
                  title={`${office.title} map`}
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="office-map-iframe"
                />

                {/* Country / office flag badge */}
                <div className="office-badge">
                  <span className="office-badge-flag">{office.flag}</span>
                  <span className="office-badge-label">{office.label}</span>
                </div>

                {/* Floating pin marker */}
                <div className="office-map-pin">
                  <div className="pin-wrapper">
                    <span className="pin-ping" />
                    <div className="pin-core" style={{ backgroundColor: "#E8400A" }}>
                      <MapPin size={16} className="text-white" strokeWidth={2.25} />
                    </div>
                    <span className="pin-tail" />
                  </div>
                </div>
              </div>

              <div className="global-office-details">
                <div className="office-details-header">
                  <div>
                    <span className="office-details-kicker" style={{ color: "#E8400A" }}>{office.label}</span>
                    <h3 className="global-office-title">{office.title}</h3>
                  </div>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn"
                    style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                </div>

                <div className="office-info-list" style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div className="office-info-item" style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
                    <MapPin size={16} className="shrink-0" style={{ color: "#E8400A" }} strokeWidth={1.75} />
                    <span>{office.address}</span>
                  </div>
                  
                  {office.email && (
                    <div className="office-info-item" style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
                      <Mail size={16} className="shrink-0" style={{ color: "#E8400A" }} strokeWidth={1.75} />
                      <a href={`mailto:${office.email}`} className="hover:text-[#E8400A] transition-colors">{office.email}</a>
                    </div>
                  )}

                  {office.phone && (
                    <div className="office-info-item" style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
                      <Phone size={16} className="shrink-0" style={{ color: "#E8400A" }} strokeWidth={1.75} />
                      <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-[#E8400A] transition-colors">{office.phone}</a>
                    </div>
                  )}
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-link-mobile"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
