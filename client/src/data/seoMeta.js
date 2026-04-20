export const SEO_META = {
  home: {
    title: "Netcradus | Autonomous Cyber Immune Systems",
    description:
      "Netcradus builds autonomous cyber immune systems, managed security capabilities, and enterprise-grade cyber resilience.",
  },
  platform: {
    title: "Cybersecurity Platform | Netcradus ACIS Platform",
    description:
      "Explore the Netcradus cybersecurity platform with AI-SIEM, SOAR automation, deployment tiers, and autonomous threat response capabilities.",
  },
  services: {
    title: "Managed Security Services | Netcradus Cybersecurity Solutions",
    description:
      "Explore managed security services, cloud security, managed SOC, and enterprise cybersecurity solutions tailored by Netcradus.",
  },
  acis: {
    title: "AI SIEM Platform | ACIS by Netcradus",
    description:
      "Explore ACIS by Netcradus, an AI SIEM platform with autonomous defense architecture, automated response workflows, and enterprise-ready deployment.",
  },
  about: {
    title: "About Netcradus | Cybersecurity Company Profile",
    description:
      "Learn about Netcradus, a global cybersecurity company focused on enterprise resilience, intelligent defense, and ACIS-led innovation.",
  },
  blog: {
    title: "Cybersecurity Blog | Threat Intelligence & Research | Netcradus",
    description:
      "Read the Netcradus cybersecurity blog for threat intelligence, security research, architecture insight, and cyber defense analysis.",
  },
  contact: {
    title: "Contact Netcradus | Cybersecurity Consultation & ACIS Demo",
    description:
      "Contact Netcradus for cybersecurity consulting, enterprise resilience planning, and ACIS platform discussions with our team.",
  },
  careers: {
    title: "Cybersecurity Careers | Work at Netcradus",
    description:
      "Explore cybersecurity careers at Netcradus across security engineering, cloud, AI, and enterprise defense roles.",
  },
  resources: {
    title: "Cybersecurity Resources | White Papers, Reports & Research | Netcradus",
    description:
      "Access cybersecurity resources from Netcradus including white papers, threat reports, documentation, and security research.",
  },
  newsletter: {
    title: "Cybersecurity Newsletter | Threat Intelligence Updates | Netcradus",
    description:
      "Subscribe to the Netcradus cybersecurity newsletter for threat intelligence, security insights, and product updates.",
  },
  policy: {
    title: "Privacy Policy | Netcradus",
    description:
      "Review the Netcradus Privacy Policy covering data handling, governance, and compliance information.",
  },
  terms: {
    title: "Terms of Service | Netcradus",
    description:
      "Review the Netcradus Terms of Service for our cybersecurity platform, website, and professional services.",
  },
  dataProtection: {
    title: "Data Protection Policy | Netcradus",
    description:
      "Review the Netcradus Data Protection Policy and our approach to GDPR-aligned information handling and safeguards.",
  },
  cookies: {
    title: "Cookie Policy | Netcradus",
    description:
      "Read the Netcradus Cookie Policy for details about cookies, preferences, and security-related website storage.",
  },
  responsibleDisclosure: {
    title: "Responsible Disclosure Policy | Netcradus",
    description:
      "Review the Netcradus Responsible Disclosure Policy for reporting security vulnerabilities safely and professionally.",
  },
  phase: {
    title: "AI Defense Lifecycle | Netcradus",
    description:
      "Review the ACIS implementation journey across learning, surveillance, classification, response, and adaptive security phases.",
  },
  blogFallback: {
    title: "Article | Netcradus",
    description: "Read Netcradus intelligence and cybersecurity insights.",
  },
};

export function getBlogPostMeta(blog) {
  if (!blog) {
    return SEO_META.blogFallback;
  }

  return {
    title: `${blog.title} | Netcradus`,
    description: blog.seoDescription || SEO_META.blogFallback.description,
  };
}
