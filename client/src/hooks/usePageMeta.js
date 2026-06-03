import { useEffect } from "react";
import { getSeoMetaByPath } from "../data/seoMeta";

const BASE_URL = "https://www.netcradus.com";
const SITE_NAME = "Netcradus";
const DEFAULT_IMAGE = `${BASE_URL}/favicon.png`;
const DEFAULT_KEYWORDS = [
  "cybersecurity",
  "enterprise security",
  "managed security services",
  "threat detection",
  "AI SIEM",
  "SOAR automation",
];

function setMetaTag(attribute, key, content) {
  if (!content) {
    return;
  }

  let meta = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function setStructuredData(data) {
  const scriptId = "seo-ld-json";
  let script = document.getElementById(scriptId);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function usePageMeta(title, description, options = {}) {
  useEffect(() => {
    const windowPath = window.location.pathname || "/";
    const normalizedPath = windowPath === "/" ? "/" : windowPath.replace(/\/+$/, "");
    const matchedMeta = getSeoMetaByPath(normalizedPath);

    const finalTitle = title || matchedMeta?.title;
    const finalDescription = description || matchedMeta?.description;
    const rawKeywords = options.keywords || matchedMeta?.keywords || DEFAULT_KEYWORDS;
    const finalKeywords = Array.isArray(rawKeywords) ? rawKeywords : [rawKeywords];
    const finalRobots = options.robots || matchedMeta?.robots || "index, follow, max-image-preview:large";
    const finalType = options.type || matchedMeta?.type || "website";
    const finalPath = options.path || normalizedPath;
    const canonicalUrl = options.canonical || `${BASE_URL}${finalPath}`;
    const imageUrl = options.image?.startsWith("http")
      ? options.image
      : options.image
        ? `${BASE_URL}${options.image}`
        : DEFAULT_IMAGE;

    if (finalTitle) {
      document.title = finalTitle;
    }

    if (finalDescription) {
      setMetaTag("name", "description", finalDescription);
    }

    setMetaTag("name", "keywords", finalKeywords.join(", "));
    setMetaTag("name", "robots", finalRobots);

    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:type", finalType);
    setMetaTag("property", "og:title", finalTitle);
    setMetaTag("property", "og:description", finalDescription);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", imageUrl);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", finalTitle);
    setMetaTag("name", "twitter:description", finalDescription);
    setMetaTag("name", "twitter:image", imageUrl);

    setCanonical(canonicalUrl);

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": finalType === "article" ? "Article" : "WebPage",
      name: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: BASE_URL,
      },
    };

    if (options?.article?.publishedTime) {
      webPageSchema.datePublished = options.article.publishedTime;
    }

    if (options?.article?.modifiedTime) {
      webPageSchema.dateModified = options.article.modifiedTime;
    }

    if (options?.article?.section) {
      webPageSchema.articleSection = options.article.section;
    }

    if (finalPath === "/") {
      setStructuredData([
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: BASE_URL,
          logo: DEFAULT_IMAGE,
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: BASE_URL,
          potentialAction: {
            "@type": "SearchAction",
            target: `${BASE_URL}/blog`,
            "query-input": "required name=search_term_string",
          },
        },
        webPageSchema,
      ]);
    } else {
      setStructuredData(webPageSchema);
    }

    return undefined;
  }, [title, description, options]);
}
