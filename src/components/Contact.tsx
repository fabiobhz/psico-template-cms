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
    el.setCustomValidity("Por favor, preencha este campo.");
  } else {
    el.setCustomValidity("Valor inválido.");
  }
};

const onInvalidEmail = (e: InvalidEvent<HTMLInputElement>) => {
  const el = e.currentTarget;
  if (el.validity.valueMissing) {
    el.setCustomValidity("Por favor, preencha seu e-mail.");
  } else if (el.validity.typeMismatch) {
    el.setCustomValidity("Por favor, insira um endereço de e-mail válido.");
  } else {
    el.setCustomValidity("E-mail inválido.");
  }
};

const onInvalidSelect = (e: InvalidEvent<HTMLSelectElement>) => {
  e.currentTarget.setCustomValidity("Por favor, selecione um profissional.");
};

const Contact = () => {
  const navigate = useNavigate();
  const { content } = useSiteConfig();
  const { contact, team } = content;

  const [form, setForm] = useState({
    nome: "",
    email: "",
    profissional: "",
    mensagem: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;

    const selected = team.members.find((m) => m.name === form.profissional);
    if (!selected) return;

    setSending(true);
    try {
      await emailjs.send(
        contact.emailjsServiceId,
        contact.emailjsTemplateId,
        {
          profissional: selected.name,
          from_name: form.nome,
          from_email: form.email,
          mensagem: form.mensagem,
        },
        { publicKey: contact.emailjsPublicKey }
      );
      navigate("/obrigado", { state: { fromForm: true } });
    } catch (err: unknown) {
      const detalhe =
        typeof err === "object" && err !== null && "text" in err
          ? (err as { text: string }).text
          : JSON.stringify(err);
      console.error("Erro ao enviar e-mail:", detalhe);
      toast.error(
        "Não foi possível enviar a mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" className="py-28 md:py-36 bg-secondary/50">
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
                  placeholder="Ex: João Silva"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
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
                  placeholder="Ex: joao@email.com"
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
                  value={form.profissional}
                  onChange={(e) => {
                    e.currentTarget.setCustomValidity("");
                    setForm({ ...form, profissional: e.target.value });
                  }}
                  onInvalid={onInvalidSelect}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Escolha um profissional…
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
                  placeholder="Descreva brevemente o que você está buscando…"
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
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
                {sending ? "Enviando…" : contact.submitText}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
