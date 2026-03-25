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
import type { Service } from "@/config/defaultContent";

const ICON_OPTIONS = [
  "Heart", "Brain", "Users", "Globe", "Star",
  "Leaf", "Sun", "Moon", "Smile", "Shield",
];

export const ServicesSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const [draft, setDraft] = useState(content.services);
  const isDirty = JSON.stringify(draft) !== JSON.stringify(content.services);

  const updateService = (id: string, key: keyof Service, value: string) =>
    setDraft((d) => ({
      ...d,
      items: d.items.map((s) => (s.id === id ? { ...s, [key]: value } : s)),
    }));

  const save = () => updateNestedContent("services", draft);
  const discard = () => setDraft(content.services);

  return (
    <div>
      <Field
        label="Section title"
        value={draft.sectionTitle}
        onChange={(v) => setDraft((d) => ({ ...d, sectionTitle: v }))}
      />
      <Field
        label="Subtitle (optional)"
        value={draft.sectionSubtitle}
        onChange={(v) => setDraft((d) => ({ ...d, sectionSubtitle: v }))}
      />
      <div className="mt-4 space-y-4">
        {draft.items.map((service, idx) => (
          <div key={service.id} className="border border-[#e5e0d8] rounded-xl p-4 bg-[#faf8f6]">
            <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider mb-3">
              Service {idx + 1}
            </p>
            <div className="mb-3">
              <label className="block text-xs font-medium text-[#7a6e5f] mb-1.5 tracking-wide uppercase">
                Icon
              </label>
              <div className="flex flex-wrap gap-1.5">
                {ICON_OPTIONS.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => updateService(service.id, "icon", icon)}
                    className={`px-2 py-1 rounded-md text-xs border transition-colors ${
                      service.icon === icon
                        ? "bg-[#8fa68c] text-white border-[#8fa68c]"
                        : "border-[#ddd8d2] text-[#7a6e5f] hover:border-[#8fa68c]"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            <Field
              label="Title"
              value={service.title}
              onChange={(v) => updateService(service.id, "title", v)}
            />
            <Field
              label="Description"
              value={service.description}
              onChange={(v) => updateService(service.id, "description", v)}
              multiline
              rows={3}
            />
          </div>
        ))}
      </div>
      <SaveBar isDirty={isDirty} onSave={save} onDiscard={discard} />
    </div>
  );
};
