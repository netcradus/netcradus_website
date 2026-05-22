import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import companyLogoImage from "../assets/companyLogo.png";
import { getNewsletterConfigError, sendNewsletterSubscription } from "../lib/newsletter";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "ACIS Overview", to: "/platform#acis-overview" },
      { label: "ACIS Lite", to: "/platform#acis-lite" },
      { label: "ACIS Pro", to: "/platform#acis-pro" },
      { label: "ACIS Enterprise", to: "/platform#acis-enterprise" },
      { label: "AI-SIEM Engine", to: "/platform#ai-siem-engine" },
      { label: "SOAR Automation", to: "/platform#soar-automation" },
      { label: "Integrations / API", to: "/platform#integrations-api" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Cybersecurity", to: "/services?tab=cybersecurity" },
      { label: "Managed SOC", to: "/services?tab=managed-soc" },
      { label: "Cloud Security", to: "/services?tab=cloud-security" },
      { label: "Network Security", to: "/services?tab=network-security" },
      { label: "AI Security", to: "/services?tab=ai-data-analytics" },
      { label: "Enterprise Security", to: "/services?tab=enterprise-security" },
      { label: "Software Engineering", to: "/services#software-engineering" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Intelligence Blog", to: "/blog" },
      { label: "White Papers", to: "/resources" },
      { label: "Case Studies", to: "/resources" },
      { label: "Documentation", to: "/resources" },
      { label: "Threat Reports", to: "/resources" },
      { label: "Compliance Guides", to: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Netcradus", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Partners", to: "/partners" },
      { label: "Contact", to: "/contact" },
      { label: "Press / Media", to: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/policy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Data Protection Policy", to: "/data-protection" },
      { label: "Cookie Policy", to: "/cookies" },
      { label: "Responsible Disclosure", to: "/responsible-disclosure" },
    ],
  },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle");
  const [newsletterFeedback, setNewsletterFeedback] = useState("");
  const configError = getNewsletterConfigError();

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterStatus("error");
      setNewsletterFeedback("Enter your email to subscribe.");
      return;
    }

    setNewsletterStatus("loading");
    setNewsletterFeedback("");

    try {
      await sendNewsletterSubscription({
        email: newsletterEmail.trim(),
        preferences: ["Threat Reports", "Product Updates"],
        source: "footer",
      });

      setNewsletterStatus("success");
      setNewsletterFeedback("You are subscribed for upcoming briefings.");
      setNewsletterEmail("");
    } catch (error) {
      console.error("Footer newsletter error:", error);
      setNewsletterStatus("error");
      setNewsletterFeedback(error.message || "Subscription failed. Please try again.");
    }
  };

  return (
    <footer className="relative z-10 mt-24 overflow-hidden border-t border-border bg-background pt-16 transition-colors duration-500">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-accent/6 blur-[120px]" />

      <div className="relative mx-auto grid max-w-screen-2xl gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-12 lg:px-16 xl:px-24">
        <div className="space-y-6 lg:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={companyLogoImage}
              alt="Netcradus logo"
              className="h-12 w-auto object-contain brightness-150 drop-shadow-[0_0_10px_rgba(232,64,10,0.2)]"
            />
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-text-secondary">
            <p>Netcradus is a global cybersecurity company building autonomous cyber immune systems.</p>
            <p>Our ACIS platform delivers real-time threat detection, response, and resilience for modern enterprises.</p>
          </div>

          <div className="text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
            <div><strong>CIN:</strong> U62090UP2025PTC229722</div>
            <div><strong>GSTIN:</strong> 09AAKCN7195G1ZV</div>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
          {footerColumns.slice(0, 3).map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{column.title}</h4>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-text-secondary transition hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-3">
          {footerColumns.slice(3).map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{column.title}</h4>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-text-secondary transition hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>



      <div className="border-t border-border py-5">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-4 text-sm text-text-secondary sm:px-6 md:flex-row md:items-center md:justify-between lg:px-16 xl:px-24">
          <p>Copyright © 2026 Netcradus. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/policy" className="transition hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-accent">Terms of Service</Link>
            <Link to="/cookies" className="transition hover:text-accent">Cookie Policy</Link>
            <Link to="/responsible-disclosure" className="transition hover:text-accent">Responsible Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
