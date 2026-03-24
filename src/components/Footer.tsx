import { Link } from "react-router-dom";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

const Footer = () => {
  const { content } = useSiteConfig();
  const { footer, site } = content;
  const year = new Date().getFullYear();
  const footerText = footer.text.replace("{year}", String(year));

  return (
    <footer className="py-8 border-t border-border">
      <div className="container text-center">
        <p className="font-heading text-lg tracking-widest text-foreground mb-1">
          {site.logoText}
        </p>
        <address className="not-italic">
          <p className="text-body text-xs text-muted-foreground">{footerText}</p>
        </address>
        <Link
          to="/politica-de-privacidade"
          className="text-body text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors duration-200 mt-2 inline-block"
        >
          {footer.privacyLabel}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
