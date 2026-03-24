import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { Field } from "../components/Field";

export const HeroSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const { hero } = content;

  const update = (key: keyof typeof hero, value: string) =>
    updateNestedContent("hero", { [key]: value });

  return (
    <div>
      <Field
        label="Título principal"
        value={hero.title}
        onChange={(v) => update("title", v)}
        placeholder="Nome da clínica ou título"
      />
      <Field
        label="Subtítulo / Slogan"
        value={hero.subtitle}
        onChange={(v) => update("subtitle", v)}
        placeholder="Uma frase que transmita sua proposta"
        multiline
        rows={2}
      />
      <Field
        label="Texto do botão (opcional)"
        value={hero.ctaText}
        onChange={(v) => update("ctaText", v)}
        placeholder="Ex: Agende uma consulta"
      />
      <Field
        label="Link do botão"
        value={hero.ctaHref}
        onChange={(v) => update("ctaHref", v)}
        placeholder="#contato"
      />
      <Field
        label="Imagem de fundo (URL ou caminho)"
        value={hero.backgroundImage}
        onChange={(v) => update("backgroundImage", v)}
        placeholder="/assets/hero-bg.jpg"
      />
      {hero.backgroundImage && (
        <div className="mt-2 rounded-lg overflow-hidden border border-[#e0dbd5]">
          <img
            src={hero.backgroundImage}
            alt="Preview"
            className="w-full h-28 object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      )}
    </div>
  );
};
