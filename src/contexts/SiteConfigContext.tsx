/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import type { SiteContent } from "@/config/defaultContent";
import { defaultContent } from "@/config/defaultContent";
import type { SiteTheme, ColorPalette, FontPairing } from "@/config/defaultTheme"; // ColorPalette, FontPairing used by derived values below
import { defaultTheme, colorPalettes, fontPairings, applyThemeVars } from "@/config/defaultTheme";

const STORAGE_KEY = "psico-template-config-v8";

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

function parseStoredConfig(raw: string | null): SiteConfig | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed.content || !parsed.theme) return null;
    return {
      content: { ...defaultContent, ...parsed.content },
      theme: { ...defaultTheme, ...parsed.theme },
    };
  } catch {
    return null;
  }
}


export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(() => {
    return parseStoredConfig(localStorage.getItem(STORAGE_KEY)) ?? {
      content: defaultContent,
      theme: defaultTheme,
    };
  });

  // Track if we are the one writing to localStorage (to avoid re-reading our own writes)
  const isWritingRef = useRef(false);

  const currentPalette =
    colorPalettes.find((p) => p.id === config.theme.colorPaletteId) ?? colorPalettes[0];
  const currentFont =
    fontPairings.find((f) => f.id === config.theme.fontPairingId) ?? fontPairings[0];

  // Apply theme CSS vars whenever theme changes
  useEffect(() => {
    applyThemeVars(currentPalette, currentFont);
  }, [currentPalette, currentFont]);

  // Persist to localStorage whenever config changes
  useEffect(() => {
    isWritingRef.current = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    // Reset flag after the storage event would have fired
    requestAnimationFrame(() => {
      isWritingRef.current = false;
    });
  }, [config]);

  // Cross-tab sync: listen for storage events from other tabs (e.g. preview ← admin)
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || isWritingRef.current) return;
      const parsed = parseStoredConfig(e.newValue);
      if (parsed) setConfig(parsed);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

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
    setConfig((prev) => {
      const newTheme = { ...prev.theme, ...updates };
      let newContent = prev.content;

      // If the palette changed and the current hero is a palette hero (or the legacy default), swap it automatically.
      // A "palette hero" is any /assets/hero-*.svg file or the legacy hero-bg.jpg.
      if (updates.colorPaletteId) {
        const paletteHeroes = colorPalettes.map((p) => p.heroImage);
        const currentBg = prev.content.hero.backgroundImage;
        const isAutoHero =
          paletteHeroes.includes(currentBg) ||
          /^\/assets\/hero-[^/]+\.svg$/.test(currentBg) ||
          currentBg === "/assets/hero-bg.jpg";
        if (isAutoHero) {
          const newPalette = colorPalettes.find((p) => p.id === updates.colorPaletteId);
          if (newPalette) {
            newContent = {
              ...prev.content,
              hero: { ...prev.content.hero, backgroundImage: newPalette.heroImage },
            };
          }
        }
      }

      return { theme: newTheme, content: newContent };
    });
  }, []);

  const resetToDefaults = useCallback(() => {
    setConfig({ content: defaultContent, theme: defaultTheme });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const exportConfig = useCallback(() => {
    return JSON.stringify(config, null, 2);
  }, [config]);

  const importConfig = useCallback((json: string): boolean => {
    const parsed = parseStoredConfig(json);
    if (!parsed) return false;
    setConfig(parsed);
    return true;
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
