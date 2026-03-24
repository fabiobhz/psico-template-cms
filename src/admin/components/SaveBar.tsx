import { useState } from "react";
import { Save, Undo2, CheckCircle } from "lucide-react";

interface Props {
  isDirty: boolean;
  onSave: () => void;
  onDiscard: () => void;
}

export const SaveBar = ({ isDirty, onSave, onDiscard }: Props) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!isDirty) return;
    onSave();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="mt-5 pt-4 border-t border-[#e5e0d8] flex items-center justify-between min-h-[36px]">
      {/* Status label */}
      <span className="flex items-center gap-1.5 text-xs font-medium">
        {saved ? (
          <span className="flex items-center gap-1.5 text-[#8fa68c]">
            <CheckCircle size={13} />
            Seção salva com sucesso!
          </span>
        ) : isDirty ? (
          <span className="flex items-center gap-1.5 text-[#c0897a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c0897a] inline-block animate-pulse" />
            Alterações não salvas
          </span>
        ) : (
          <span className="text-[#b0a898]">Sem alterações pendentes</span>
        )}
      </span>

      {/* Buttons — always visible */}
      <div className="flex items-center gap-2">
        <button
          onClick={onDiscard}
          disabled={!isDirty}
          className={`flex items-center gap-1 text-xs border rounded-lg px-3 py-1.5 transition-colors ${
            isDirty
              ? "text-[#9e9086] border-[#ddd8d2] hover:bg-[#f5f1ec] cursor-pointer"
              : "text-[#c8c0b5] border-[#ede8e2] cursor-not-allowed"
          }`}
        >
          <Undo2 size={12} />
          Descartar
        </button>
        <button
          onClick={handleSave}
          disabled={!isDirty}
          className={`flex items-center gap-1.5 text-xs text-white rounded-lg px-4 py-1.5 font-medium transition-all duration-200 ${
            isDirty
              ? "bg-[#8fa68c] hover:bg-[#7a9278] cursor-pointer shadow-sm hover:shadow"
              : "bg-[#c8c0b5] cursor-not-allowed"
          }`}
        >
          <Save size={12} />
          Salvar seção
        </button>
      </div>
    </div>
  );
};
