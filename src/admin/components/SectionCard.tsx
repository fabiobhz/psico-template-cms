import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const SectionCard = ({ title, icon, children, defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#e0dbd5] rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#f9f7f4] transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-[#7a6e5f]">{icon}</span>}
          <span className="font-semibold text-[#3d3530] text-sm tracking-wide">{title}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-[#9e9086] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-6 pb-6 pt-2 border-t border-[#ede8e2]">{children}</div>}
    </div>
  );
};
