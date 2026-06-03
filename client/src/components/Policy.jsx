import React from "react";
import "./Policy.css";

const policies = [
  {
    number: "01",
    title: "Cookie Policy",
    content:
      "We use cookies and similar technologies to enhance user experience, analyze traffic, and improve services. Users can manage cookie preferences via browser settings. Continued use implies consent.",
  },
  {
    number: "02",
    title: "Disclaimer Policy",
    content:
      "All information and services are provided “as-is” without warranties. Netcradus does not guarantee accuracy or uninterrupted availability. Cybersecurity reduces risk but does not eliminate all threats.",
  },
  {
    number: "03",
    title: "Refund & Cancellation Policy",
    content: [
      "Payments once made are non-refundable unless agreed in writing",
      "Project cancellations must be requested formally",
      "Refund eligibility depends on project stage and contractual terms",
    ],
  },
  {
    number: "04",
    title: "Grievance Redressal Policy",
    content:[
      "Users may raise complaints via:" , 
      "Email: info@netcradus.com.",
      "All grievances will be acknowledged and resolved as per applicable laws.",
    ],
  },
  {
    number: "05",
    title: "Data Protection Policy",
    content: [
           "Netcradus ensures protection of personal and organizational data through:" ,
      "Encryption and secure storage",
      "Access control mechanisms",
      "Compliance with DPDP Act 2023 (India) and UK GDPR",
    ],
  },
  {
    number: "06",
    title: "Information Security Policy",
    content: [
      "Network security monitoring",
      "Endpoint protection",
      "Access management",
      "Regular audits and logging",
    ],
  },
  {
    number: "07",
    title: "Cybersecurity Policy",
    content: [
        "Netcradus follows industry best practices to: ",
      "Detect, prevent, and respond to cyber threats",
      "Vulnerability assessments and penetration testing",
      "Continuous monitoring and threat intelligence",
    ],
  },
  {
    number: "08",
    title: "Acceptable Use Policy",
    content: [
        "Users must not: ",
      "Use services for illegal or harmful activities ",
      "Attempt unauthorized access ",
      "Distribute malware or exploit systems ",
      "Violation may result in termination and legal action. "
    ],
  },
  {
    number: "09",
    title: "Incident Response Policy",
    content: [
        "We maintain procedures to: ",
      "Detect and respond to incidents ",
      "Contain and mitigate threats ",
"Notify affected parties where required ",
"Document and improve response processes :"

    ],
  },
  {
    number: "10",
    title: "Vulnerability Disclosure Policy",
    content:[
      "Security researchers can report vulnerabilities responsibly via:", 
 "Email: info@netcradus.com .",
 "We encourage ethical disclosure and will not take legal action against responsible reporting. "
    ]
  },
  {
    number: "11",
    title: "Data Retention Policy",
    content: [
      "Data is retained only as long as necessary ",
      "Secure deletion methods are used after retention period ",
      "Compliance with legal and contractual obligations is maintained ",
    ],
  },
  {
    number: "12",
    title: "Third-Party/Vendor Security Policy",
    content: [
        "All vendors must: ",
      "Follow security and confidentiality standards",
      "Undergo due diligence checks",
      "Comply with applicable laws and agreements ",
    ],
  },
  {
    number: "13",
    title: "Intellectual Property Policy",
    content:
      "All content, software, and materials belong to Netcradus unless otherwise stated. Unauthorized use, copying, or distribution is prohibited. ",
  },
  {
    number: "14",
    title: "Anti-Bribery Policy",
    content: [
        "Netcradus follows zero-tolerance for bribery and complies with: ",
      "UK Bribery Act 2010 ",
      "Prevention of Corruption Act, 1988 (India) ",
    ],
  },
  {
    number: "15",
    title: "Compliance Policy",
    content: [
        "We ensure adherence to: ",
      "Indian IT laws and regulations ",
      "UK data protection and business laws ",
      "Industry standards and best practices ",
    ],
  },
  {
    number: "16",
    title: "Business Continuity Policy",
    content: [
        "We maintain plans to ensure: ",
      "Continuity of services during disruptions ",
      "Data backup and recovery ",
      "Minimal downtime and operational impact ",
    ],
  },
  {
    number: "17",
    title: "Effective Date",
    content:
      "All policies are effective from the date of publication on the Netcradus website. ",
  },
  {
    number: "18",
    title: "Contact Information",
    content:
      "Netcradus Pvt Ltd | www.netcradus.com | info@netcradus.com",
  },
];

function Policies() {
  return (
    <div className="policy-page">

      <div className="policy-hero">
        <h1>Policies & Compliance</h1>
        <p>Enterprise-grade governance, security, and transparency.</p>
      </div>

      <div className="policy-content">
        {policies.map((item, index) => (
          <div key={index} className="policy-section">

            <div className="policy-header-row">
              <span className="policy-number">{item.number}</span>
              <h2>{item.title}</h2>
            </div>

            {/* 🔥 BULLET SUPPORT */}
           {Array.isArray(item.content) ? (
  <div className="policy-list">
    {item.content.map((point, i) => {
      const isHeading = point.trim().endsWith(":");

      // Detect email
      const isEmail = point.includes("@");
      const isWebsite = point.includes("www.");

      const formattedText = isEmail ? (
        <>
          Email:{" "}
          <a href="mailto:info@netcradus.com">
            info@netcradus.com
          </a>
        </>
      ) : isWebsite ? (
        <>
          <a href="https://www.netcradus.com" target="_blank" rel="noreferrer">
            www.netcradus.com
          </a>
        </>
      ) : (
        point
      );

      return isHeading ? (
        <p key={i} className="policy-subheading">
          {point}
        </p>
      ) : (
        <li key={i}>{formattedText}</li>
      );
    })}
  </div>
) : (
  <p>
  {typeof item.content === "string"
    ? item.content
        .split(/(www\.netcradus\.com|info@netcradus\.com)/g)
        .map((part, i) => {
          if (part === "www.netcradus.com") {
            return (
              <a
                key={i}
                href="https://www.netcradus.com"
                target="_blank"
                rel="noreferrer"
                className="policy-link"
              >
                {part}
              </a>
            );
          }

          if (part === "info@netcradus.com") {
            return (
              <a
                key={i}
                href="mailto:info@netcradus.com"
                className="policy-link"
              >
                {part}
              </a>
            );
          }

          return part;
        })
    : item.content}
</p>
)}

          </div>
        ))}
      </div>

    </div>
  );
}

export default Policies;