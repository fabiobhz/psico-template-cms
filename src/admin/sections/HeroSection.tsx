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
        label="Main title"
        value={draft.title}
        onChange={(v) => update("title", v)}
        placeholder="Your brand or site name"
      />
      <Field
        label="Subtitle / Tagline"
        value={draft.subtitle}
        onChange={(v) => update("subtitle", v)}
        placeholder="A phrase that captures your value proposition"
        multiline
        rows={2}
      />
      <Field
        label="Button text (optional)"
        value={draft.ctaText}
        onChange={(v) => update("ctaText", v)}
        placeholder="e.g. Get in touch"
      />
      <Field
        label="Button link"
        value={draft.ctaHref}
        onChange={(v) => update("ctaHref", v)}
        placeholder="#contact"
      />
      <Field
        label="Background image (URL or path)"
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
