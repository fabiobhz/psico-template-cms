/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import { useState, type FormEvent, type InvalidEvent } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

const resetValidation = (
  e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => (e.currentTarget as HTMLInputElement).setCustomValidity("");

const onInvalidText = (e: InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const el = e.currentTarget;
  if (el.validity.valueMissing) {
    el.setCustomValidity("Please fill in this field.");
  } else {
    el.setCustomValidity("Invalid value.");
  }
};

const onInvalidEmail = (e: InvalidEvent<HTMLInputElement>) => {
  const el = e.currentTarget;
  if (el.validity.valueMissing) {
    el.setCustomValidity("Please fill in your email.");
  } else if (el.validity.typeMismatch) {
    el.setCustomValidity("Please enter a valid email address.");
  } else {
    el.setCustomValidity("Invalid email.");
  }
};

const onInvalidSelect = (e: InvalidEvent<HTMLSelectElement>) => {
  e.currentTarget.setCustomValidity("Please select a team member.");
};

const Contact = () => {
  const navigate = useNavigate();
  const { content } = useSiteConfig();
  const { contact, team } = content;

  const [form, setForm] = useState({
    name: "",
    email: "",
    professional: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;

    const selected = team.members.find((m) => m.name === form.professional);
    if (!selected) return;

    setSending(true);
    try {
      await emailjs.send(
        contact.emailjsServiceId,
        contact.emailjsTemplateId,
        {
          professional: selected.name,
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: contact.emailjsPublicKey }
      );
      navigate("/thank-you", { state: { fromForm: true } });
    } catch (err: unknown) {
      const detail =
        typeof err === "object" && err !== null && "text" in err
          ? (err as { text: string }).text
          : JSON.stringify(err);
      console.error("Error sending email:", detail);
      toast.error(
        "Could not send your message. Please try again or reach us on WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-secondary/50">
      <div className="container">
        <div className="mx-auto" style={{ maxWidth: "520px" }}>
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
                {contact.sectionTitle}
              </h2>
              <div className="gold-line" />
              {contact.sectionSubtitle && (
                <p className="text-body text-sm text-muted-foreground mt-4 tracking-wider">
                  {contact.sectionSubtitle}
                </p>
              )}
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label className="text-body text-sm text-muted-foreground mb-1.5 block">
                  {contact.namePlaceholder}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onInvalid={onInvalidText}
                  onInput={resetValidation}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="text-body text-sm text-muted-foreground mb-1.5 block">
                  {contact.emailPlaceholder}
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jane@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onInvalid={onInvalidEmail}
                  onInput={resetValidation}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="text-body text-sm text-muted-foreground mb-1.5 block">
                  {contact.professionalLabel}
                </label>
                <select
                  required
                  value={form.professional}
                  onChange={(e) => {
                    e.currentTarget.setCustomValidity("");
                    setForm({ ...form, professional: e.target.value });
                  }}
                  onInvalid={onInvalidSelect}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Choose a team member…
                  </option>
                  {team.members.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-body text-sm text-muted-foreground mb-1.5 block">
                  {contact.messagePlaceholder}
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Briefly describe what you're looking for…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onInvalid={onInvalidText}
                  onInput={resetValidation}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground py-3 rounded-md text-sm font-body tracking-wider hover:bg-primary/90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : contact.submitText}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
