import React, { useEffect } from "react";
import LegalPageTemplate from "../components/LegalPageTemplate";
import { usePageMeta } from "../hooks/usePageMeta";

const sections = [
  {
    heading: "How to Report a Vulnerability",
    paragraphs: [
      "Netcradus welcomes responsible, good-faith reports relating to security vulnerabilities affecting our public-facing websites, products, and services. Reports should include a clear description of the issue, impacted asset, reproduction steps, and supporting evidence where available.",
      "Researchers should send vulnerability reports to info@netcradus.com and avoid public disclosure until Netcradus has had a reasonable opportunity to investigate and remediate the issue.",
    ],
  },
  {
    heading: "Safe Harbor Expectations",
    paragraphs: [
      "Researchers acting in good faith, avoiding privacy violations, service disruption, data exfiltration, persistence, or social engineering, will be treated as working within this policy's intent. Testing must remain limited to systems you do not intentionally impair or access beyond what is necessary to demonstrate the issue.",
      "Activities such as denial-of-service testing, ransomware simulation on production systems, credential stuffing, phishing, or accessing third-party data without authorization are prohibited.",
    ],
  },
  {
    heading: "Coordination and Remediation",
    paragraphs: [
      "Netcradus will acknowledge receipt of valid reports, assess severity, and coordinate remediation according to risk, exploitability, and customer impact. We may request clarification, proof-of-concept refinement, or time to validate findings before issuing further updates.",
      "This placeholder policy does not create a reward entitlement or waive any legal rights, but it does reflect our commitment to collaborative and professional vulnerability handling.",
    ],
  },
];

export default function ResponsibleDisclosurePage() {
  usePageMeta(
    "Responsible Disclosure Policy | Netcradus",
    "Review the Netcradus Responsible Disclosure Policy for reporting vulnerabilities safely and professionally."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPageTemplate
      title="Responsible Disclosure Policy"
      description="Placeholder disclosure guidance for researchers reporting vulnerabilities to Netcradus."
      lastUpdated="April 7, 2026"
      sections={sections}
    />
  );
}
