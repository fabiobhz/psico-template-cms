import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { Field } from "../components/Field";

export const SiteSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const { site, nav, footer } = content;

  return (
    <div>
      <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider mb-3">Identidade</p>
      <Field
        label="Nome no logo / navbar"
        value={site.logoText}
        onChange={(v) => updateNestedContent("site", { logoText: v })}
      />
      <Field
        label="Título SEO (aba do navegador)"
        value={site.title}
        onChange={(v) => updateNestedContent("site", { title: v })}
      />
      <Field
        label="Descrição SEO"
        value={site.description}
        onChange={(v) => updateNestedContent("site", { description: v })}
        multiline
        rows={2}
      />
      <Field
        label="Palavras-chave SEO"
        value={site.keywords}
        onChange={(v) => updateNestedContent("site", { keywords: v })}
      />

      <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider mt-6 mb-3">Navegação</p>
      {nav.links.map((link, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          <input
            value={link.label}
            onChange={(e) => {
              const updated = nav.links.map((l, i) =>
                i === idx ? { ...l, label: e.target.value } : l
              );
              updateNestedContent("nav", { links: updated });
            }}
            placeholder="Label"
            className="flex-1 border border-[#ddd8d2] rounded-lg px-3 py-2 text-sm text-[#3d3530] bg-[#faf8f6] focus:outline-none focus:ring-2 focus:ring-[#8fa68c]"
          />
          <input
            value={link.href}
            onChange={(e) => {
              const updated = nav.links.map((l, i) =>
                i === idx ? { ...l, href: e.target.value } : l
              );
              updateNestedContent("nav", { links: updated });
            }}
            placeholder="#ancora"
            className="flex-1 border border-[#ddd8d2] rounded-lg px-3 py-2 text-sm text-[#3d3530] bg-[#faf8f6] focus:outline-none focus:ring-2 focus:ring-[#8fa68c]"
          />
        </div>
      ))}

      <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider mt-6 mb-3">Rodapé</p>
      <Field
        label="Texto do rodapé (use {year} para o ano)"
        value={footer.text}
        onChange={(v) => updateNestedContent("footer", { text: v })}
      />
      <Field
        label="Label da Política de Privacidade"
        value={footer.privacyLabel}
        onChange={(v) => updateNestedContent("footer", { privacyLabel: v })}
      />
    </div>
  );
};
