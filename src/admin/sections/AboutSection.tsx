import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { Field } from "../components/Field";

export const AboutSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const { about } = content;

  const update = (key: keyof typeof about, value: string) =>
    updateNestedContent("about", { [key]: value });

  return (
    <div>
      <Field
        label="Título da seção"
        value={about.sectionTitle}
        onChange={(v) => update("sectionTitle", v)}
      />
      <Field
        label="Parágrafo 1"
        value={about.paragraph1}
        onChange={(v) => update("paragraph1", v)}
        multiline
        rows={4}
      />
      <Field
        label="Parágrafo 2"
        value={about.paragraph2}
        onChange={(v) => update("paragraph2", v)}
        multiline
        rows={4}
      />
      <Field
        label="Parágrafo 3 (opcional)"
        value={about.paragraph3}
        onChange={(v) => update("paragraph3", v)}
        multiline
        rows={3}
      />
    </div>
  );
};
