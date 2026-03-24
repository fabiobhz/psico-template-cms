import { useState, useEffect } from "react";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

const Navbar = () => {
  const { content } = useSiteConfig();
  const { nav, site } = content;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-light tracking-widest text-foreground">
          {site.logoText}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-light tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-body font-light tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
