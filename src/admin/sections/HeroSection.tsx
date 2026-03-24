import { useState } from "react";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { Field } from "../components/Field";
import { SaveBar } from "../components/SaveBar";

export const HeroSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const [draft, setDraft] = useState(content.hero);
  const isDirty = JSON.stringify(draft) !== JSON.stringify(content.hero);

  const update = (key: keyof typeof draft, value: string) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const save = () => updateNestedContent("hero", draft);
  const discard = () => setDraft(content.hero);

  return (
    <div>
      <Field
        label="Título principal"
        value={draft.title}
        onChange={(v) => update("title", v)}
        placeholder="Nome da clínica ou título"
      />
      <Field
        label="Subtítulo / Slogan"
        value={draft.subtitle}
        onChange={(v) => update("subtitle", v)}
        placeholder="Uma frase que transmita sua proposta"
        multiline
        rows={2}
      />
      <Field
        label="Texto do botão (opcional)"
        value={draft.ctaText}
        onChange={(v) => update("ctaText", v)}
        placeholder="Ex: Agende uma consulta"
      />
      <Field
        label="Link do botão"
        value={draft.ctaHref}
        onChange={(v) => update("ctaHref", v)}
        placeholder="#contato"
      />
      <Field
        label="Imagem de fundo (URL ou caminho)"
        value={draft.backgroundImage}
        onChange={(v) => update("backgroundImage", v)}
        placeholder="/assets/hero-bg.jpg"
      />
      {draft.backgroundImage && (
        <div className="mt-2 rounded-lg overflow-hidden border border-[#e0dbd5]">
          <img
            src={draft.backgroundImage}
            alt="Preview"
            className="w-full h-28 object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      )}
      <SaveBar isDirty={isDirty} onSave={save} onDiscard={discard} />
    </div>
  );
};
