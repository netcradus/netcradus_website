import React from "react";
import { MapPin, Clock, Navigation } from "lucide-react";

export default function LocationMap() {
  const offices = [
    {
      id: "india",
      flag: "🇮🇳",
      label: "India Office",
      title: "Netcradus — Ghaziabad, India",
      address: "Office no. 609, 6th floor, AVS CITY SQUARE, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003",
      mapQuery: "Netcradus, Ghaziabad, Uttar Pradesh, India",
      hours: "Mon – Sat, 10:00 AM – 7:00 PM (IST)",
    },
    {
      id: "uk",
      flag: "🇬🇧",
      label: "UK Office",
      title: "Netcradus — Leicester, UK",
      address: "London Road, Leicester, LE2 0QS, England",
      mapQuery: "Netcradus, Leicester, United Kingdom",
      hours: "Mon – Sat, 10:00 AM – 7:00 PM (UK)",
    },
  ];

  return (
    <div className="global-offices-section">
      <div className="offices-header">
        <span className="offices-kicker">Find Us</span>
        <h2 className="offices-title">Our Offices</h2>
        <p className="offices-desc" style={{ margin: "0.5rem auto 0 auto" }}>
          Two teams, one SOC. Reach out to whichever office is closer to you.
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

                {/* Floating purple pin marker */}
                <div className="office-map-pin">
                  <div className="pin-wrapper">
                    <span className="pin-ping" />
                    <div className="pin-core">
                      <MapPin size={16} className="text-white" strokeWidth={2.25} />
                    </div>
                    <span className="pin-tail" />
                  </div>
                </div>
              </div>

              <div className="global-office-details">
                <div className="office-details-header">
                  <div>
                    <span className="office-details-kicker">{office.label}</span>
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

                <div className="office-info-list" style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div className="office-info-item" style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "0.875rem", color: "var(--nc-muted)" }}>
                    <MapPin size={16} className="shrink-0" style={{ color: "#7C3AED" }} strokeWidth={1.75} />
                    <span>{office.address}</span>
                  </div>
                  <div className="office-info-item" style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "0.875rem", color: "var(--nc-muted)" }}>
                    <Clock size={16} className="shrink-0" style={{ color: "#7C3AED" }} strokeWidth={1.75} />
                    <span>{office.hours}</span>
                  </div>
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
