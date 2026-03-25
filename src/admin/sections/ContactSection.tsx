/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import { useState } from "react";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { Field } from "../components/Field";
import { SaveBar } from "../components/SaveBar";

export const ContactSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const [draft, setDraft] = useState(content.contact);
  const isDirty = JSON.stringify(draft) !== JSON.stringify(content.contact);

  const update = (key: keyof typeof draft, value: string) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const save = () => updateNestedContent("contact", draft);
  const discard = () => setDraft(content.contact);

  return (
    <div>
      <Field
        label="Section title"
        value={draft.sectionTitle}
        onChange={(v) => update("sectionTitle", v)}
      />
      <Field
        label="Subtitle (optional)"
        value={draft.sectionSubtitle}
        onChange={(v) => update("sectionSubtitle", v)}
      />
      <Field
        label="Name field label"
        value={draft.namePlaceholder}
        onChange={(v) => update("namePlaceholder", v)}
      />
      <Field
        label="Email field label"
        value={draft.emailPlaceholder}
        onChange={(v) => update("emailPlaceholder", v)}
      />
      <Field
        label="Team member selector label"
        value={draft.professionalLabel}
        onChange={(v) => update("professionalLabel", v)}
      />
      <Field
        label="Message field label"
        value={draft.messagePlaceholder}
        onChange={(v) => update("messagePlaceholder", v)}
      />
      <Field
        label="Submit button text"
        value={draft.submitText}
        onChange={(v) => update("submitText", v)}
      />

      <div className="mt-6 p-4 bg-[#f0ede8] rounded-xl border border-[#e5e0d8]">
        <p className="text-xs font-semibold text-[#7a6e5f] uppercase tracking-wider mb-3">
          EmailJS Configuration
        </p>
        <Field
          label="Service ID"
          value={draft.emailjsServiceId}
          onChange={(v) => update("emailjsServiceId", v)}
          placeholder="service_xxxxxxx"
        />
        <Field
          label="Template ID"
          value={draft.emailjsTemplateId}
          onChange={(v) => update("emailjsTemplateId", v)}
          placeholder="template_xxxxxxx"
        />
        <Field
          label="Public Key"
          value={draft.emailjsPublicKey}
          onChange={(v) => update("emailjsPublicKey", v)}
          placeholder="xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <SaveBar isDirty={isDirty} onSave={save} onDiscard={discard} />
    </div>
  );
};
