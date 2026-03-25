/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import { Link } from "react-router-dom";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

/* ── Minimalist social icons (24×24, currentColor) ── */

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/* Official Bluesky butterfly logo */
const BlueSkyIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266 1.561 1.266S.329 2.01 1.16 5.99c.587 2.718 2.15 5.37 4.26 6.8-2.11 1.43-3.673 4.082-4.26 6.8-.832 3.98.599 4.724.599 4.724s1.005.322 3.641-1.539C7.954 20.836 10.913 16.897 12 14.784c1.087 2.113 4.046 6.052 6.798 7.995 2.636 1.86 3.641 1.538 3.641 1.538s1.43-.743.598-4.724c-.586-2.718-2.15-5.37-4.26-6.8 2.11-1.43 3.674-4.082 4.26-6.8.832-3.98-.598-4.724-.598-4.724S21.434.944 18.798 2.805C16.046 4.747 13.087 8.686 12 10.8z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.841-8.174-10.66h7.02l4.26 5.633 5.657-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* Official Pinterest P logo */
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 3.447-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.63a8.18 8.18 0 0 0 4.78 1.52V6.7a4.85 4.85 0 0 1-1-.01z" />
  </svg>
);

const socialIcons: Record<string, React.ComponentType> = {
  instagram: InstagramIcon,
  facebook:  FacebookIcon,
  bluesky:   BlueSkyIcon,
  x:         XIcon,
  pinterest: PinterestIcon,
  tiktok:    TikTokIcon,
};

const socialLabels: Record<string, string> = {
  instagram: "Instagram",
  facebook:  "Facebook",
  bluesky:   "Bluesky",
  x:         "X",
  pinterest: "Pinterest",
  tiktok:    "TikTok",
};

const Footer = () => {
  const { content } = useSiteConfig();
  const { footer, site, social } = content;
  const year = new Date().getFullYear();
  const footerText = footer.text.replace("{year}", String(year));

  const activeSocials = Object.entries(social).filter(([, url]) => url.trim() !== "");

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="text-center">
          <p className="font-heading text-lg tracking-widest text-foreground mb-1">
            {site.logoText}
          </p>

          {activeSocials.length > 0 && (
            <div className="flex items-center justify-center gap-5 mt-3 mb-3">
              {activeSocials.map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLabels[key]}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          )}

          <address className="not-italic">
            <p className="text-body text-xs text-muted-foreground">{footerText}</p>
          </address>
          <Link
            to="/privacy-policy"
            className="text-body text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors duration-200 mt-2 inline-block"
          >
            {footer.privacyLabel}
          </Link>
        </div>

        <div className="mt-4 flex justify-end">
          <p className="font-body text-[10px] text-muted-foreground/50 tracking-wide">
            Template by{" "}
            <span className="font-semibold text-muted-foreground/65">Fagom</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
