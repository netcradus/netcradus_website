// import { useState } from "react";
// import { Link } from "react-router-dom";
// import companyLogoImage from "../assets/companyLogo.png";
// import { getNewsletterConfigError, sendNewsletterSubscription } from "../lib/newsletter";

// const footerColumns = [
//   {
//     title: "Platform",
//     links: [
//       { label: "ACIS Overview", to: "/platform#acis-overview" },
//       { label: "ACIS Lite", to: "/platform#acis-lite" },
//       { label: "ACIS Pro", to: "/platform#acis-pro" },
//       { label: "ACIS Enterprise", to: "/platform#acis-enterprise" },
//       { label: "AI-SIEM Engine", to: "/platform#ai-siem-engine" },
//       { label: "SOAR Automation", to: "/platform#soar-automation" },
//       { label: "Integrations / API", to: "/platform#integrations-api" },
//     ],
//   },
//   {
//     title: "Solutions",
//     links: [
//       { label: "Cybersecurity", to: "/services?tab=cybersecurity" },
//       { label: "Managed SOC", to: "/services?tab=managed-soc" },
//       { label: "Cloud Security", to: "/services?tab=cloud-security" },
//       { label: "Network Security", to: "/services?tab=network-security" },
//       { label: "AI Security", to: "/services?tab=ai-data-analytics" },
//       { label: "Enterprise Security", to: "/services?tab=enterprise-security" },
//       { label: "Software Engineering", to: "/services#software-engineering" },
//     ],
//   },
//   {
//     title: "Resources",
//     links: [
//       { label: "Intelligence Blog", to: "/blog" },
//       { label: "White Papers", to: "/resources" },
//       { label: "Case Studies", to: "/resources" },
//       { label: "Documentation", to: "/resources" },
//       { label: "Threat Reports", to: "/resources" },
//       { label: "Compliance Guides", to: "/resources" },
//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       { label: "About Netcradus", to: "/about" },
//       { label: "Careers", to: "/careers" },
//       { label: "Partners", to: "/partners" },
//       { label: "Contact", to: "/contact" },
//       { label: "Press / Media", to: "/about" },
//     ],
//   },
//   {
//     title: "Legal",
//     links: [
//       { label: "Privacy Policy", to: "/policy" },
//       { label: "Terms of Service", to: "/terms" },
//       { label: "Data Protection Policy", to: "/data-protection" },
//       { label: "Cookie Policy", to: "/cookies" },
//       { label: "Responsible Disclosure", to: "/responsible-disclosure" },
//     ],
//   },
// ];

// export default function Footer() {
//   const [newsletterEmail, setNewsletterEmail] = useState("");
//   const [newsletterStatus, setNewsletterStatus] = useState("idle");
//   const [newsletterFeedback, setNewsletterFeedback] = useState("");
//   const configError = getNewsletterConfigError();

//   const handleNewsletterSubmit = async (event) => {
//     event.preventDefault();

//     if (!newsletterEmail.trim()) {
//       setNewsletterStatus("error");
//       setNewsletterFeedback("Enter your email to subscribe.");
//       return;
//     }

//     setNewsletterStatus("loading");
//     setNewsletterFeedback("");

//     try {
//       await sendNewsletterSubscription({
//         email: newsletterEmail.trim(),
//         preferences: ["Threat Reports", "Product Updates"],
//         source: "footer",
//       });

//       setNewsletterStatus("success");
//       setNewsletterFeedback("You are subscribed for upcoming briefings.");
//       setNewsletterEmail("");
//     } catch (error) {
//       console.error("Footer newsletter error:", error);
//       setNewsletterStatus("error");
//       setNewsletterFeedback(error.message || "Subscription failed. Please try again.");
//     }
//   };

//   return (
//     <footer className="relative z-10 mt-24 overflow-hidden border-t border-border bg-background pt-16 transition-colors duration-500">
//       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
//       <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-accent/8 blur-[120px]" />
//       <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-accent/6 blur-[120px]" />

//       <div className="relative mx-auto grid max-w-screen-2xl gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-12 lg:px-16 xl:px-24">
//         <div className="space-y-6 lg:col-span-4">
//           <div className="flex items-center gap-3">
//             <img
//               src={companyLogoImage}
//               alt="Netcradus logo"
//               className="h-12 w-auto object-contain brightness-150 drop-shadow-[0_0_10px_rgba(232,64,10,0.2)]"
//             />
//           </div>
//           <div className="space-y-3 text-sm leading-relaxed text-text-secondary">
//             <p>Netcradus is a global cybersecurity company building autonomous cyber immune systems.</p>
//             <p>Our ACIS platform delivers real-time threat detection, response, and resilience for modern enterprises.</p>
//           </div>

//           <div className="text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
//             <div><strong>CIN:</strong> U62090UP2025PTC229722</div>
//             <div><strong>GSTIN:</strong> 09AAKCN7195G1ZV</div>
//           </div>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
//           {footerColumns.slice(0, 3).map((column) => (
//             <div key={column.title}>
//               <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{column.title}</h4>
//               <ul className="space-y-3 text-sm">
//                 {column.links.map((link) => (
//                   <li key={link.label}>
//                     <Link to={link.to} className="text-text-secondary transition hover:text-accent">
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:col-span-3">
//           {footerColumns.slice(3).map((column) => (
//             <div key={column.title}>
//               <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{column.title}</h4>
//               <ul className="space-y-3 text-sm">
//                 {column.links.map((link) => (
//                   <li key={link.label}>
//                     <Link to={link.to} className="text-text-secondary transition hover:text-accent">
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>



//       <div className="border-t border-border py-5">
//         <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-4 text-sm text-text-secondary sm:px-6 md:flex-row md:items-center md:justify-between lg:px-16 xl:px-24">
//           <p>Copyright © 2026 Netcradus. All rights reserved.</p>
//           <div className="flex flex-wrap gap-4">
//             <Link to="/policy" className="transition hover:text-accent">Privacy Policy</Link>
//             <Link to="/terms" className="transition hover:text-accent">Terms of Service</Link>
//             <Link to="/cookies" className="transition hover:text-accent">Cookie Policy</Link>
//             <Link to="/responsible-disclosure" className="transition hover:text-accent">Responsible Disclosure</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }




import { useState } from "react";
import { Link } from "react-router-dom";
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
      { label: "About Us", to: "/about" },
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
    <footer className="relative z-10 overflow-hidden border-t border-border bg-background pt-16 transition-colors duration-500">
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
            <p>
             Netcradus is a global cybersecurity company dedicated to building autonomous cyber immune systems. Our ACIS platform empowers modern enterprises with real-time threat detection, automated response, and cyber resilience to stay ahead of evolving security challenges.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
              <div><strong>CIN:</strong> U62090UP2025PTC229722</div>
              <div><strong>GSTIN:</strong> 09AAKCN7195G1ZV</div>
            </div>

            <div className="pt-2 text-sm text-text-secondary">
              <a
                href="mailto:contact@netcradus.com"
                className="block transition hover:text-accent"
              >
                📧 info@netcradus.com
              </a>

              <a
                href="tel:1800121008800"
                className="block mt-1 transition hover:text-accent"
              >
                📞 1800 12100 8800
              </a>

              {/* Horizontal Social Handles Container using SVG Paths */}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://instagram.com/netcradus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/netcradus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/netcradus-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@Netcradus-acis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Columns 1-3 Layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
          {footerColumns.slice(0, 3).map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {column.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-text-secondary transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Columns 4-5 Layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-3">
          {footerColumns.slice(3).map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {column.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-text-secondary transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar Segment */}
      <div className="border-t border-border py-5">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-4 text-sm text-text-secondary sm:px-6 md:flex-row md:items-center md:justify-between lg:px-16 xl:px-24">
          <p>Copyright © 2026 Netcradus. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <Link to="/policy" className="transition hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-accent">
              Terms of Service
            </Link>
            <Link to="/cookies" className="transition hover:text-accent">
              Cookie Policy
            </Link>
            <Link
              to="/responsible-disclosure"
              className="transition hover:text-accent"
            >
              Responsible Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}