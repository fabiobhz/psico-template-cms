import { useState } from "react";
import { Save, Undo2, CheckCircle } from "lucide-react";

interface Props {
  isDirty: boolean;
  onSave: () => void;
  onDiscard: () => void;
}

export const SaveBar = ({ isDirty, onSave, onDiscard }: Props) => {
  const [saved, setSaved] = useState(false);

  if (!isDirty && !saved) return null;

  const handleSave = () => {
    onSave();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (saved) {
    return (
      <div className="mt-5 pt-4 border-t border-[#e5e0d8] flex items-center gap-2 text-[#8fa68c]">
        <CheckCircle size={15} />
        <span className="text-xs font-medium">Seção salva com sucesso!</span>
      </div>
    );
  }

  return (
    <div className="mt-5 pt-4 border-t border-[#e5e0d8] flex items-center justify-between">
      <span className="flex items-center gap-1.5 text-xs text-[#c0897a] font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c0897a] inline-block" />
        Alterações não salvas
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={onDiscard}
          className="flex items-center gap-1 text-xs text-[#9e9086] border border-[#ddd8d2] rounded-lg px-3 py-1.5 hover:bg-[#f5f1ec] transition-colors"
        >
          <Undo2 size={12} />
          Descartar
        </button>
        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 text-xs text-white bg-[#8fa68c] rounded-lg px-4 py-1.5 hover:bg-[#7a9278] transition-colors font-medium"
        >
          <Save size={12} />
          Salvar seção
        </button>
      </div>
    </div>
  );
};
