/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import { useState, useRef } from "react";
import {
  Palette,
  LayoutTemplate,
  Users,
  Briefcase,
  Mail,
  Settings,
  Download,
  Upload,
  RotateCcw,
  ExternalLink,
  X,
  MonitorSmartphone,
  Globe,
  MessageSquare,
  LogOut,
} from "lucide-react";

const SESSION_KEY = "fagom_admin_auth";
const isProtected = !!import.meta.env.VITE_ADMIN_PASSWORD;
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { SectionCard } from "./components/SectionCard";
import { ThemeSection } from "./sections/ThemeSection";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { ContactSection } from "./sections/ContactSection";
import { SiteSection } from "./sections/SiteSection";
import { SocialSection } from "./sections/SocialSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const AdminPanel = () => {
  const { resetToDefaults, exportConfig, importConfig } = useSiteConfig();
  const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewWindowRef = useRef<Window | null>(null);

  const showToast = (msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleExport = () => {
    const json = exportConfig();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "site-config.json";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Configuration exported successfully!");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const ok = importConfig(text);
      showToast(ok ? "Configuration imported!" : "Invalid file.", ok ? "ok" : "err");
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleReset = () => {
    if (confirm("Reset all settings to default? This action cannot be undone.")) {
      resetToDefaults();
      showToast("Settings reset to default.");
    }
  };

  const openPreview = () => {
    // If preview window is already open, focus it; otherwise open a new one
    if (previewWindowRef.current && !previewWindowRef.current.closed) {
      previewWindowRef.current.focus();
      previewWindowRef.current.location.reload();
    } else {
      previewWindowRef.current = window.open("/", "_blank", "noopener");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#f5f1ec" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#e0dbd5] shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#8fa68c] flex items-center justify-center">
              <Settings size={14} color="white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#3d3530]">CMS Panel</p>
              <p className="text-[10px] text-[#9e9086]">Site customization</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View site — opens in new tab */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#7a6e5f] border border-[#ddd8d2] rounded-lg px-3 py-1.5 hover:bg-[#f0ede8] transition-colors"
            >
              <ExternalLink size={13} />
              View site
            </a>
            {/* Logout — only shown when password protection is active */}
            {isProtected && (
              <button
                onClick={() => {
                  sessionStorage.removeItem(SESSION_KEY);
                  window.location.reload();
                }}
                title="Lock admin panel"
                className="flex items-center gap-1.5 text-xs text-[#9e9086] border border-[#ddd8d2] rounded-lg px-3 py-1.5 hover:bg-[#f0ede8] transition-colors"
              >
                <LogOut size={13} />
                Lock
              </button>
            )}
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 text-xs text-white bg-[#8fa68c] rounded-lg px-3 py-1.5 hover:bg-[#7a9278] transition-colors"
            >
              <Download size={13} />
              Export
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 space-y-3">
        {/* Quick actions */}
        <div className="flex gap-2 flex-wrap mb-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 text-xs text-[#7a6e5f] border border-[#ddd8d2] rounded-lg px-3 py-1.5 bg-white hover:bg-[#f0ede8] transition-colors"
          >
            <Upload size={12} />
            Import config
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-[#c0897a] border border-[#e5cfc9] rounded-lg px-3 py-1.5 bg-white hover:bg-[#faf0ee] transition-colors"
          >
            <RotateCcw size={12} />
            Reset defaults
          </button>
          <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
        </div>

        {/* Info banner */}
        <div className="bg-[#edf3ed] border border-[#c8ddc8] rounded-xl px-4 py-3 text-xs text-[#4a6e4a] flex items-start gap-2">
          <MonitorSmartphone size={14} className="flex-shrink-0 mt-0.5" />
          <span>
            Edit each section's content and click <strong>Save section</strong>. Use{" "}
            <strong>Preview</strong> to see changes in real time in a new tab — it updates
            automatically after each save.
          </span>
        </div>

        <SectionCard title="Theme — Colors & Fonts" icon={<Palette size={16} />} defaultOpen>
          <ThemeSection />
        </SectionCard>

        <SectionCard title="Hero — Banner" icon={<LayoutTemplate size={16} />} defaultOpen>
          <HeroSection />
        </SectionCard>

        <SectionCard title="About" icon={<LayoutTemplate size={16} />}>
          <AboutSection />
        </SectionCard>

        <SectionCard title="Services / Specialties" icon={<Briefcase size={16} />}>
          <ServicesSection />
        </SectionCard>

        <SectionCard title="Team / Professionals" icon={<Users size={16} />}>
          <TeamSection />
        </SectionCard>

        <SectionCard title="Reviews & Testimonials" icon={<MessageSquare size={16} />}>
          <TestimonialsSection />
        </SectionCard>

        <SectionCard title="Contact & Form" icon={<Mail size={16} />}>
          <ContactSection />
        </SectionCard>

        <SectionCard title="Site, Navigation & Footer" icon={<Settings size={16} />}>
          <SiteSection />
        </SectionCard>

        <SectionCard title="Redes Sociais" icon={<Globe size={16} />}>
          <SocialSection />
        </SectionCard>

        <p className="text-center text-[10px] text-[#b0a898] pb-6">
          Changes are saved automatically after clicking "Save section".
          <br />
          Use "Export" to save the final configuration file.
        </p>
      </main>

      {/* Floating preview button */}
      <button
        onClick={openPreview}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#3d3530] text-white text-sm font-medium px-5 py-3 rounded-full shadow-xl hover:bg-[#2a2520] transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <MonitorSmartphone size={16} />
        Preview
      </button>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-sm font-medium z-50 ${
            toast.type === "ok" ? "bg-[#3d3530] text-white" : "bg-[#c0897a] text-white"
          }`}
        >
          {toast.msg}
          <button onClick={() => setToast(null)}>
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
};
