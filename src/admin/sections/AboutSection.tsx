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

export const AboutSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const [draft, setDraft] = useState(content.about);
  const isDirty = JSON.stringify(draft) !== JSON.stringify(content.about);

  const update = (key: keyof typeof draft, value: string) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const save = () => updateNestedContent("about", draft);
  const discard = () => setDraft(content.about);

  return (
    <div>
      <Field
        label="Section title"
        value={draft.sectionTitle}
        onChange={(v) => update("sectionTitle", v)}
      />
      <Field
        label="Paragraph 1"
        value={draft.paragraph1}
        onChange={(v) => update("paragraph1", v)}
        multiline
        rows={4}
      />
      <Field
        label="Paragraph 2"
        value={draft.paragraph2}
        onChange={(v) => update("paragraph2", v)}
        multiline
        rows={4}
      />
      <Field
        label="Paragraph 3 (optional)"
        value={draft.paragraph3}
        onChange={(v) => update("paragraph3", v)}
        multiline
        rows={3}
      />
      <SaveBar isDirty={isDirty} onSave={save} onDiscard={discard} />
    </div>
  );
};
