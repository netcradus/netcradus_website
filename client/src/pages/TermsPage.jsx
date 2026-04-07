import React, { useEffect } from "react";
import LegalPageTemplate from "../components/LegalPageTemplate";
import { usePageMeta } from "../hooks/usePageMeta";

const sections = [
  {
    heading: "Scope of Services",
    paragraphs: [
      "These Terms of Service govern the use of Netcradus websites, advisory engagements, managed security services, and associated platform offerings. Client-specific statements of work, order forms, or service schedules supplement these terms where applicable.",
      "Netcradus delivers cybersecurity services on a commercially reasonable basis and in accordance with agreed engagement parameters, timelines, and technical dependencies supplied by the client.",
    ],
  },
  {
    heading: "Client Responsibilities",
    paragraphs: [
      "Clients are responsible for ensuring authorized access, maintaining lawful control over the environments submitted for assessment or monitoring, and supplying accurate operational information required for delivery.",
      "Where security testing or response actions are requested, clients must ensure internal approvals are in place and that all relevant stakeholders understand the scope, timing, and risk posture of the engagement.",
    ],
  },
  {
    heading: "Confidentiality and Acceptable Use",
    paragraphs: [
      "Both parties will protect confidential information using appropriate technical and organizational safeguards. Netcradus will process confidential client information strictly for contracted service delivery, legal compliance, or incident management obligations.",
      "Clients must not use Netcradus services to violate applicable law, facilitate unlawful surveillance, interfere with third-party systems without authorization, or distribute malicious content.",
    ],
  },
  {
    heading: "Liability and Governing Law",
    paragraphs: [
      "Except where prohibited by law, liability arising from use of Netcradus services is limited to direct damages and subject to the fee caps defined in the relevant commercial agreement. Netcradus is not liable for indirect, punitive, or consequential loss.",
      "These terms are governed by the laws of England and Wales, with disputes subject to the courts of competent jurisdiction in the United Kingdom unless an executed agreement specifies otherwise.",
    ],
  },
];

export default function TermsPage() {
  usePageMeta("Terms of Service | Netcradus", "Review the Netcradus Terms of Service for our cybersecurity platform and professional services.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPageTemplate
      title="Terms of Service"
      description="Professional placeholder terms relevant to a UK-registered cybersecurity company serving global enterprise clients."
      lastUpdated="April 7, 2026"
      sections={sections}
    />
  );
}
