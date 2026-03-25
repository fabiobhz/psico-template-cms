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

const networkMeta = [
  { key: "instagram", label: "Instagram",  placeholder: "https://instagram.com/yourprofile" },
  { key: "facebook",  label: "Facebook",   placeholder: "https://facebook.com/yourpage" },
  { key: "bluesky",   label: "Bluesky",    placeholder: "https://bsky.app/profile/yourhandle" },
  { key: "x",         label: "X (Twitter)", placeholder: "https://x.com/yourprofile" },
  { key: "pinterest", label: "Pinterest",  placeholder: "https://pinterest.com/yourprofile" },
  { key: "tiktok",    label: "TikTok",     placeholder: "https://tiktok.com/@yourprofile" },
] as const;

export const SocialSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const [draft, setDraft] = useState(content.social);
  const isDirty = JSON.stringify(draft) !== JSON.stringify(content.social);

  const update = (key: keyof typeof draft, value: string) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const save = () => updateNestedContent("social", draft);
  const discard = () => setDraft(content.social);

  return (
    <div>
      <p className="text-xs text-[#9e9086] mb-4 leading-relaxed">
        Only fill in the networks you want to display. Icons appear in the footer only when a URL is provided.
      </p>
      {networkMeta.map(({ key, label, placeholder }) => (
        <Field
          key={key}
          label={label}
          value={draft[key]}
          onChange={(v) => update(key, v)}
          placeholder={placeholder}
        />
      ))}
      <SaveBar isDirty={isDirty} onSave={save} onDiscard={discard} />
    </div>
  );
};
