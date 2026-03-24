import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { SiteContent } from "@/config/defaultContent";
import { defaultContent } from "@/config/defaultContent";
import type { SiteTheme, ColorPalette, FontPairing } from "@/config/defaultTheme";
import { defaultTheme, colorPalettes, fontPairings } from "@/config/defaultTheme";

const STORAGE_KEY = "psico-template-config";

interface SiteConfig {
  content: SiteContent;
  theme: SiteTheme;
}

interface SiteConfigContextValue {
  content: SiteContent;
  theme: SiteTheme;
  currentPalette: ColorPalette;
  currentFont: FontPairing;
  updateContent: (updates: Partial<SiteContent>) => void;
  updateNestedContent: <K extends keyof SiteContent>(
    section: K,
    updates: Partial<SiteContent[K]>
  ) => void;
  updateTheme: (updates: Partial<SiteTheme>) => void;
  resetToDefaults: () => void;
  exportConfig: () => string;
  importConfig: (json: string) => boolean;
}

const SiteConfigContext = createContext<SiteConfigContextValue | null>(null);

function applyThemeVars(palette: ColorPalette, font: FontPairing) {
  const root = document.documentElement;
  const { vars } = palette;

  // Override Tailwind @theme CSS variables at runtime
  root.style.setProperty("--color-primary", vars.primary);
  root.style.setProperty("--color-primary-foreground", vars.background);
  root.style.setProperty("--color-secondary", vars.surface);
  root.style.setProperty("--color-secondary-foreground", vars.text);
  root.style.setProperty("--color-accent", vars.accent);
  root.style.setProperty("--color-accent-foreground", vars.text);
  root.style.setProperty("--color-background", vars.background);
  root.style.setProperty("--color-foreground", vars.text);
  root.style.setProperty("--color-card", vars.surface);
  root.style.setProperty("--color-card-foreground", vars.text);
  root.style.setProperty("--color-muted", vars.surface);
  root.style.setProperty("--color-muted-foreground", vars.textMuted);
  root.style.setProperty("--color-border", vars.border);
  root.style.setProperty("--color-input", vars.border);
  root.style.setProperty("--color-ring", vars.primary);

  // Dynamic font CSS custom properties
  root.style.setProperty("--cms-font-heading", font.headingClass);
  root.style.setProperty("--cms-font-body", font.bodyClass);

  // Update Google Fonts link
  let fontLink = document.getElementById("cms-google-fonts") as HTMLLinkElement | null;
  if (!fontLink) {
    fontLink = document.createElement("link");
    fontLink.id = "cms-google-fonts";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }
  fontLink.href = font.googleFontsUrl;
}

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          content: { ...defaultContent, ...parsed.content },
          theme: { ...defaultTheme, ...parsed.theme },
        };
      }
    } catch {
      // ignore
    }
    return { content: defaultContent, theme: defaultTheme };
  });

  const currentPalette =
    colorPalettes.find((p) => p.id === config.theme.colorPaletteId) ?? colorPalettes[0];
  const currentFont =
    fontPairings.find((f) => f.id === config.theme.fontPairingId) ?? fontPairings[0];

  // Apply theme whenever it changes
  useEffect(() => {
    applyThemeVars(currentPalette, currentFont);
  }, [currentPalette, currentFont]);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config]);

  const updateContent = useCallback((updates: Partial<SiteContent>) => {
    setConfig((prev) => ({
      ...prev,
      content: { ...prev.content, ...updates },
    }));
  }, []);

  const updateNestedContent = useCallback(
    <K extends keyof SiteContent>(section: K, updates: Partial<SiteContent[K]>) => {
      setConfig((prev) => ({
        ...prev,
        content: {
          ...prev.content,
          [section]: { ...(prev.content[section] as object), ...updates },
        },
      }));
    },
    []
  );

  const updateTheme = useCallback((updates: Partial<SiteTheme>) => {
    setConfig((prev) => ({
      ...prev,
      theme: { ...prev.theme, ...updates },
    }));
  }, []);

  const resetToDefaults = useCallback(() => {
    setConfig({ content: defaultContent, theme: defaultTheme });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const exportConfig = useCallback(() => {
    return JSON.stringify(config, null, 2);
  }, [config]);

  const importConfig = useCallback((json: string): boolean => {
    try {
      const parsed = JSON.parse(json);
      if (!parsed.content || !parsed.theme) return false;
      setConfig({
        content: { ...defaultContent, ...parsed.content },
        theme: { ...defaultTheme, ...parsed.theme },
      });
      return true;
    } catch {
      return false;
    }
  }, []);

  return (
    <SiteConfigContext.Provider
      value={{
        content: config.content,
        theme: config.theme,
        currentPalette,
        currentFont,
        updateContent,
        updateNestedContent,
        updateTheme,
        resetToDefaults,
        exportConfig,
        importConfig,
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) throw new Error("useSiteConfig must be used inside SiteConfigProvider");
  return ctx;
}
