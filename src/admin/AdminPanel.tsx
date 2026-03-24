import { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
  Eye,
  X,
} from "lucide-react";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { SectionCard } from "./components/SectionCard";
import { ThemeSection } from "./sections/ThemeSection";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { ContactSection } from "./sections/ContactSection";
import { SiteSection } from "./sections/SiteSection";

export const AdminPanel = () => {
  const { resetToDefaults, exportConfig, importConfig } = useSiteConfig();
  const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    showToast("Configuração exportada com sucesso!");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const ok = importConfig(text);
      showToast(ok ? "Configuração importada!" : "Arquivo inválido.", ok ? "ok" : "err");
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleReset = () => {
    if (confirm("Redefinir todas as configurações para o padrão? Esta ação não pode ser desfeita.")) {
      resetToDefaults();
      showToast("Configurações redefinidas.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#f5f1ec" }}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#e0dbd5] shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#8fa68c] flex items-center justify-center">
              <Settings size={14} color="white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#3d3530]">Painel CMS</p>
              <p className="text-[10px] text-[#9e9086]">Personalização do site</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xs text-[#7a6e5f] border border-[#ddd8d2] rounded-lg px-3 py-1.5 hover:bg-[#f0ede8] transition-colors"
            >
              <Eye size={13} />
              Ver site
            </Link>
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 text-xs text-white bg-[#8fa68c] rounded-lg px-3 py-1.5 hover:bg-[#7a9278] transition-colors"
            >
              <Download size={13} />
              Exportar
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
            Importar config
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-[#c0897a] border border-[#e5cfc9] rounded-lg px-3 py-1.5 bg-white hover:bg-[#faf0ee] transition-colors"
          >
            <RotateCcw size={12} />
            Redefinir padrão
          </button>
          <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
        </div>

        <SectionCard title="Tema — Cores & Fontes" icon={<Palette size={16} />} defaultOpen>
          <ThemeSection />
        </SectionCard>

        <SectionCard title="Hero — Tela inicial" icon={<LayoutTemplate size={16} />} defaultOpen>
          <HeroSection />
        </SectionCard>

        <SectionCard title="Sobre nós" icon={<LayoutTemplate size={16} />}>
          <AboutSection />
        </SectionCard>

        <SectionCard title="Especialidades / Serviços" icon={<Briefcase size={16} />}>
          <ServicesSection />
        </SectionCard>

        <SectionCard title="Equipe / Profissionais" icon={<Users size={16} />}>
          <TeamSection />
        </SectionCard>

        <SectionCard title="Contato & Formulário" icon={<Mail size={16} />}>
          <ContactSection />
        </SectionCard>

        <SectionCard title="Site, Navegação & Rodapé" icon={<Settings size={16} />}>
          <SiteSection />
        </SectionCard>

        <p className="text-center text-[10px] text-[#b0a898] pb-6">
          As alterações são salvas automaticamente no navegador.
          <br />
          Use "Exportar" para salvar o arquivo de configuração definitivo.
        </p>
      </main>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-sm font-medium transition-all z-50 ${
            toast.type === "ok"
              ? "bg-[#3d3530] text-white"
              : "bg-[#c0897a] text-white"
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
