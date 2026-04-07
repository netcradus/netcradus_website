import React, { useEffect } from "react";
import LegalPageTemplate from "../components/LegalPageTemplate";
import { usePageMeta } from "../hooks/usePageMeta";

const sections = [
  {
    heading: "Data Protection Principles",
    paragraphs: [
      "Netcradus handles personal and operational data in line with UK GDPR, the Data Protection Act 2018, and applicable cross-border transfer requirements. We apply data minimization, purpose limitation, and confidentiality controls across client-facing operations.",
      "Security telemetry, contact details, support records, and platform usage data are processed only to deliver services, improve resilience, and meet legal or regulatory obligations.",
    ],
  },
  {
    heading: "Technical and Organizational Measures",
    paragraphs: [
      "We maintain layered safeguards including access control, encryption, secure logging, role-based permissions, audit trails, vendor due diligence, and retention controls proportionate to the sensitivity of the information processed.",
      "Where processors or subprocessors are engaged, Netcradus applies contractual protections and reasonable due diligence to ensure consistent security and privacy controls.",
    ],
  },
  {
    heading: "Data Subject Rights",
    paragraphs: [
      "Individuals may request access, correction, deletion, restriction, portability, or objection in relation to qualifying personal data processed by Netcradus. Verification steps may be required before a request is fulfilled.",
      "Requests may be submitted to info@netcradus.com and will be handled in accordance with statutory response timelines, subject to exemptions and overriding legal obligations.",
    ],
  },
  {
    heading: "Retention and Cross-Border Transfers",
    paragraphs: [
      "Netcradus retains information only for as long as necessary to fulfill contractual, legal, operational, or evidentiary requirements. Retention periods may vary depending on service type, incident response scope, and regulatory obligations.",
      "Where international data transfers occur, Netcradus relies on lawful transfer mechanisms and supplementary safeguards appropriate to the data category and destination.",
    ],
  },
];

export default function DataProtectionPage() {
  usePageMeta(
    "Data Protection Policy | Netcradus",
    "Review the Netcradus Data Protection Policy for our approach to UK GDPR-aligned information handling."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPageTemplate
      title="Data Protection Policy"
      description="Placeholder policy language describing how Netcradus protects, processes, and governs personal data."
      lastUpdated="April 7, 2026"
      sections={sections}
    />
  );
}
