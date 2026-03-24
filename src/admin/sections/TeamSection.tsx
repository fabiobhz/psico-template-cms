import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { Field } from "../components/Field";
import type { TeamMember } from "@/config/defaultContent";
import { Plus, Trash2 } from "lucide-react";

const newMember = (): TeamMember => ({
  id: String(Date.now()),
  name: "Novo Profissional",
  crp: "",
  description: "",
  image: "",
  whatsapp: "",
});

export const TeamSection = () => {
  const { content, updateNestedContent } = useSiteConfig();
  const { team } = content;

  const updateMember = (id: string, key: keyof TeamMember, value: string) => {
    const updated = team.members.map((m) => (m.id === id ? { ...m, [key]: value } : m));
    updateNestedContent("team", { members: updated });
  };

  const addMember = () => {
    updateNestedContent("team", { members: [...team.members, newMember()] });
  };

  const removeMember = (id: string) => {
    updateNestedContent("team", { members: team.members.filter((m) => m.id !== id) });
  };

  return (
    <div>
      <Field
        label="Título da seção"
        value={team.sectionTitle}
        onChange={(v) => updateNestedContent("team", { sectionTitle: v })}
      />
      <Field
        label="Subtítulo (opcional)"
        value={team.sectionSubtitle}
        onChange={(v) => updateNestedContent("team", { sectionSubtitle: v })}
      />

      <div className="mt-4 space-y-4">
        {team.members.map((member, idx) => (
          <div key={member.id} className="border border-[#e5e0d8] rounded-xl p-4 bg-[#faf8f6]">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-[#8fa68c] uppercase tracking-wider">
                Profissional {idx + 1}
              </p>
              <button
                onClick={() => removeMember(member.id)}
                className="text-[#c0897a] hover:text-[#a06050] transition-colors"
                title="Remover"
              >
                <Trash2 size={14} />
              </button>
            </div>

            <div className="flex gap-4 mb-3">
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-20 object-cover rounded-lg border border-[#e5e0d8] flex-shrink-0"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
              <div className="flex-1 min-w-0">
                <Field
                  label="Nome"
                  value={member.name}
                  onChange={(v) => updateMember(member.id, "name", v)}
                />
                <Field
                  label="Registro (CRP, CRM...)"
                  value={member.crp}
                  onChange={(v) => updateMember(member.id, "crp", v)}
                />
              </div>
            </div>

            <Field
              label="Foto (URL ou caminho)"
              value={member.image}
              onChange={(v) => updateMember(member.id, "image", v)}
              placeholder="/assets/foto.jpg"
            />
            <Field
              label="Descrição / Bio"
              value={member.description}
              onChange={(v) => updateMember(member.id, "description", v)}
              multiline
              rows={4}
            />
            <Field
              label="WhatsApp (somente números, ex: 5531999999999)"
              value={member.whatsapp}
              onChange={(v) => updateMember(member.id, "whatsapp", v)}
              placeholder="5531999999999"
            />
          </div>
        ))}
      </div>

      <button
        onClick={addMember}
        className="mt-4 w-full flex items-center justify-center gap-2 border-2 border-dashed border-[#c8c0b5] rounded-xl py-3 text-sm text-[#7a6e5f] hover:border-[#8fa68c] hover:text-[#8fa68c] transition-colors"
      >
        <Plus size={16} />
        Adicionar profissional
      </button>
    </div>
  );
};
