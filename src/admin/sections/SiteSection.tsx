import { useState } from "react";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { Field } from "../components/Field";
import { SaveBar } from "../components/SaveBar";

export const SiteSection = () => {
  const { content, updateContent } = useSiteConfig();

  const [draftSite, setDraftSite] = useState(content.site);
  const [draftNav, setDraftNav] = useState(content.nav);
  const [draftFooter, setDraftFooter] = useState(content.footer);

  const isDirty =
    JSON.stringify(draftSite) !== JSON.stringify(content.site) ||
    JSON.stringify(draftNav) !== JSON.stringify(content.nav) ||
    JSON.stringify(draftFooter) !== JSON.stringify(content.footer);

  const save = () =>
    updateContent({ site: draftSite, nav: draftNav, footer: draftFooter });

  const discard = () => {
    setDraftSite(content.site);
    setDraftNav(content.nav);
    setDraftFooter(content.footer);
  };

  return (
    <div>
      <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider mb-3">Identidade</p>
      <Field
        label="Nome no logo / navbar"
        value={draftSite.logoText}
        onChange={(v) => setDraftSite((d) => ({ ...d, logoText: v }))}
      />
      <Field
        label="Título SEO (aba do navegador)"
        value={draftSite.title}
        onChange={(v) => setDraftSite((d) => ({ ...d, title: v }))}
      />
      <Field
        label="Descrição SEO"
        value={draftSite.description}
        onChange={(v) => setDraftSite((d) => ({ ...d, description: v }))}
        multiline
        rows={2}
      />
      <Field
        label="Palavras-chave SEO"
        value={draftSite.keywords}
        onChange={(v) => setDraftSite((d) => ({ ...d, keywords: v }))}
      />

      <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider mt-6 mb-3">Navegação</p>
      {draftNav.links.map((link, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          <input
            value={link.label}
            onChange={(e) =>
              setDraftNav((d) => ({
                ...d,
                links: d.links.map((l, i) =>
                  i === idx ? { ...l, label: e.target.value } : l
                ),
              }))
            }
            placeholder="Label"
            className="flex-1 border border-[#ddd8d2] rounded-lg px-3 py-2 text-sm text-[#3d3530] bg-[#faf8f6] focus:outline-none focus:ring-2 focus:ring-[#8fa68c]"
          />
          <input
            value={link.href}
            onChange={(e) =>
              setDraftNav((d) => ({
                ...d,
                links: d.links.map((l, i) =>
                  i === idx ? { ...l, href: e.target.value } : l
                ),
              }))
            }
            placeholder="#ancora"
            className="flex-1 border border-[#ddd8d2] rounded-lg px-3 py-2 text-sm text-[#3d3530] bg-[#faf8f6] focus:outline-none focus:ring-2 focus:ring-[#8fa68c]"
          />
        </div>
      ))}

      <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider mt-6 mb-3">Rodapé</p>
      <Field
        label="Texto do rodapé (use {year} para o ano)"
        value={draftFooter.text}
        onChange={(v) => setDraftFooter((d) => ({ ...d, text: v }))}
      />
      <Field
        label="Label da Política de Privacidade"
        value={draftFooter.privacyLabel}
        onChange={(v) => setDraftFooter((d) => ({ ...d, privacyLabel: v }))}
      />

      <SaveBar isDirty={isDirty} onSave={save} onDiscard={discard} />
    </div>
  );
};
