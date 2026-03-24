import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { Field } from "../components/Field";

export const ContactSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const { contact } = content;

  const update = (key: keyof typeof contact, value: string) =>
    updateNestedContent("contact", { [key]: value });

  return (
    <div>
      <Field
        label="Título da seção"
        value={contact.sectionTitle}
        onChange={(v) => update("sectionTitle", v)}
      />
      <Field
        label="Subtítulo (opcional)"
        value={contact.sectionSubtitle}
        onChange={(v) => update("sectionSubtitle", v)}
      />
      <Field
        label="Label do campo Nome"
        value={contact.namePlaceholder}
        onChange={(v) => update("namePlaceholder", v)}
      />
      <Field
        label="Label do campo E-mail"
        value={contact.emailPlaceholder}
        onChange={(v) => update("emailPlaceholder", v)}
      />
      <Field
        label="Label seleção de profissional"
        value={contact.professionalLabel}
        onChange={(v) => update("professionalLabel", v)}
      />
      <Field
        label="Label campo mensagem"
        value={contact.messagePlaceholder}
        onChange={(v) => update("messagePlaceholder", v)}
      />
      <Field
        label="Texto do botão enviar"
        value={contact.submitText}
        onChange={(v) => update("submitText", v)}
      />

      <div className="mt-6 p-4 bg-[#f0ede8] rounded-xl border border-[#e5e0d8]">
        <p className="text-xs font-semibold text-[#7a6e5f] uppercase tracking-wider mb-3">
          Configuração EmailJS
        </p>
        <Field
          label="Service ID"
          value={contact.emailjsServiceId}
          onChange={(v) => update("emailjsServiceId", v)}
          placeholder="service_xxxxxxx"
        />
        <Field
          label="Template ID"
          value={contact.emailjsTemplateId}
          onChange={(v) => update("emailjsTemplateId", v)}
          placeholder="template_xxxxxxx"
        />
        <Field
          label="Public Key"
          value={contact.emailjsPublicKey}
          onChange={(v) => update("emailjsPublicKey", v)}
          placeholder="xxxxxxxxxxxxxxxxxxxx"
        />
      </div>
    </div>
  );
};
