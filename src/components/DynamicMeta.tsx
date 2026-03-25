/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import { useEffect } from "react";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

/**
 * Updates <head> meta tags dynamically from CMS content.
 * No extra dependencies — uses direct DOM manipulation via useEffect.
 */
const DynamicMeta = () => {
  const { content } = useSiteConfig();
  const { site, hero } = content;

  useEffect(() => {
    // Title
    document.title = site.title;

    // Helper to upsert a <meta> tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = attr.split("=");
        el.setAttribute(attrName, attrValue.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // Primary meta tags
    setMeta('meta[name="description"]',      'name="description"',        site.description);
    setMeta('meta[name="keywords"]',         'name="keywords"',           site.keywords);
    setMeta('meta[name="author"]',           'name="author"',             site.logoText);

    // Open Graph
    setMeta('meta[property="og:title"]',       'property="og:title"',       site.title);
    setMeta('meta[property="og:description"]', 'property="og:description"', site.description);
    setMeta('meta[property="og:site_name"]',   'property="og:site_name"',   site.logoText);

    // Twitter Card
    setMeta('meta[name="twitter:title"]',       'name="twitter:title"',       site.title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', site.description);
  }, [site, hero]);

  return null;
};

export default DynamicMeta;
