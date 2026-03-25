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
import type { Testimonial } from "@/config/defaultContent";
import { Plus, Trash2, Star } from "lucide-react";

const newTestimonial = (): Testimonial => ({
  id: String(Date.now()),
  name: "Client Name",
  rating: 5,
  text: "Your review text here.",
  source: "Google",
});

export const TestimonialsSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const [draft, setDraft] = useState(content.testimonials);
  const isDirty = JSON.stringify(draft) !== JSON.stringify(content.testimonials);

  const updateItem = (id: string, key: keyof Testimonial, value: string | number) =>
    setDraft((d) => ({
      ...d,
      items: d.items.map((t) => (t.id === id ? { ...t, [key]: value } : t)),
    }));

  const addItem = () =>
    setDraft((d) => ({ ...d, items: [...d.items, newTestimonial()] }));

  const removeItem = (id: string) =>
    setDraft((d) => ({ ...d, items: d.items.filter((t) => t.id !== id) }));

  const save = () => updateNestedContent("testimonials", draft);
  const discard = () => setDraft(content.testimonials);

  return (
    <div>
      {/* How-to instructions */}
      <div className="mb-5 p-4 bg-[#edf3ed] border border-[#c8ddc8] rounded-xl text-xs text-[#4a6e4a] space-y-2 leading-relaxed">
        <p className="font-semibold uppercase tracking-wider text-[10px]">How to add Google Reviews</p>
        <ol className="list-decimal list-inside space-y-1.5 pl-1">
          <li>Open <strong>Google Maps</strong> and search for your business.</li>
          <li>Click your listing, then go to the <strong>Reviews</strong> tab.</li>
          <li>For each review you want to feature, copy the reviewer's name, their star rating, and the review text.</li>
          <li>Paste the content into the fields below and set the source to <strong>"Google"</strong> — the Google logo will appear automatically.</li>
        </ol>
        <p className="text-[#4a6e4a]/80 pt-1">
          The testimonials section is <strong>hidden automatically</strong> when no reviews are added. Add at least one to make it visible on the site.
        </p>
      </div>

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
        {draft.items.map((item, idx) => (
          <div key={item.id} className="border border-[#e5e0d8] rounded-xl p-4 bg-[#faf8f6]">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider">
                Review {idx + 1}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-[#c0897a] hover:text-[#a06050] transition-colors"
                title="Remove"
              >
                <Trash2 size={14} />
              </button>
            </div>

            <Field
              label="Reviewer name"
              value={item.name}
              onChange={(v) => updateItem(item.id, "name", v)}
              placeholder="e.g. Jane Smith"
            />

            {/* Star rating picker */}
            <div className="mb-3">
              <label className="block text-xs font-medium text-[#7a6e5f] mb-1.5 tracking-wide uppercase">
                Rating
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => updateItem(item.id, "rating", star)}
                    className="transition-colors"
                    title={`${star} star${star > 1 ? "s" : ""}`}
                  >
                    <Star
                      size={20}
                      className={
                        star <= item.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-[#ddd8d2]"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <Field
              label="Review text"
              value={item.text}
              onChange={(v) => updateItem(item.id, "text", v)}
              multiline
              rows={3}
              placeholder="The review content copied from Google…"
            />
            <Field
              label="Source label (e.g. Google, Trustpilot)"
              value={item.source}
              onChange={(v) => updateItem(item.id, "source", v)}
              placeholder="Google"
            />
          </div>
        ))}
      </div>

      <button
        onClick={addItem}
        className="mt-4 w-full flex items-center justify-center gap-2 border-2 border-dashed border-[#c8c0b5] rounded-xl py-3 text-sm text-[#7a6e5f] hover:border-[#8fa68c] hover:text-[#8fa68c] transition-colors"
      >
        <Plus size={16} />
        Add review
      </button>

      <SaveBar isDirty={isDirty} onSave={save} onDiscard={discard} />
    </div>
  );
};
