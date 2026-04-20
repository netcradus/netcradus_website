import React, { useEffect } from "react";
import LegalPageTemplate from "../components/LegalPageTemplate";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const sections = [
  {
    heading: "What Cookies We Use",
    paragraphs: [
      "Netcradus uses cookies and similar technologies to support core site functionality, remember display preferences such as theme mode, understand aggregate site usage, and improve digital experience.",
      "Cookies may include essential session cookies, analytics cookies, and preference cookies. Any future marketing or personalization cookies should be disclosed through an updated notice and preference control mechanism.",
    ],
  },
  {
    heading: "How Cookies Support Security",
    paragraphs: [
      "Certain cookies and related storage technologies help us preserve session integrity, reduce abuse, analyze suspicious traffic patterns, and improve platform reliability. These uses are aligned with legitimate security and service-delivery needs.",
      "Cookies are not used to collect more personal information than reasonably required for the stated purpose.",
    ],
  },
  {
    heading: "Managing Preferences",
    paragraphs: [
      "Users can control cookies through browser settings, device controls, or any preference tools Netcradus may make available on the website. Disabling some categories may affect the performance or availability of specific features.",
      "Continued use of the website after updates to this policy may indicate acceptance of revised cookie practices where legally permitted.",
    ],
  },
];

export default function CookiesPage() {
  usePageMeta(SEO_META.cookies.title, SEO_META.cookies.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPageTemplate
      title="Cookie Policy"
      description="Placeholder cookie policy relevant to the Netcradus website, platform experience, and security operations."
      lastUpdated="April 7, 2026"
      sections={sections}
    />
  );
}
