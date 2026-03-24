import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { colorPalettes, fontPairings } from "@/config/defaultTheme";

export const ThemeSection = () => {
  const { theme, updateTheme } = useSiteConfig();

  return (
    <div className="space-y-8">
      {/* Color Palettes */}
      <div>
        <p className="text-xs font-medium text-[#7a6e5f] uppercase tracking-wider mb-3">
          Paleta de Cores
        </p>
        <div className="grid grid-cols-2 gap-3">
          {colorPalettes.map((palette) => {
            const isActive = theme.colorPaletteId === palette.id;
            return (
              <button
                key={palette.id}
                onClick={() => updateTheme({ colorPaletteId: palette.id })}
                className={`relative text-left p-3 rounded-xl border-2 transition-all duration-200 ${
                  isActive
                    ? "border-[#8fa68c] bg-white shadow-md"
                    : "border-[#e5e0d8] bg-[#faf8f6] hover:border-[#c8c0b5]"
                }`}
              >
                {isActive && (
                  <span className="absolute top-2 right-2 w-4 h-4 bg-[#8fa68c] rounded-full flex items-center justify-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
                {/* Color swatches */}
                <div className="flex gap-1 mb-2">
                  {palette.preview.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border border-black/5"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="text-xs font-semibold text-[#3d3530]">{palette.name}</p>
                <p className="text-[10px] text-[#9e9086] leading-tight mt-0.5">{palette.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Font Pairings */}
      <div>
        <p className="text-xs font-medium text-[#7a6e5f] uppercase tracking-wider mb-3">
          Combinação de Fontes
        </p>
        <div className="grid grid-cols-1 gap-2">
          {fontPairings.map((font) => {
            const isActive = theme.fontPairingId === font.id;
            return (
              <button
                key={font.id}
                onClick={() => updateTheme({ fontPairingId: font.id })}
                className={`flex items-center gap-4 p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                  isActive
                    ? "border-[#8fa68c] bg-white shadow-md"
                    : "border-[#e5e0d8] bg-[#faf8f6] hover:border-[#c8c0b5]"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {isActive && (
                      <span className="w-3 h-3 bg-[#8fa68c] rounded-full flex-shrink-0" />
                    )}
                    <p className="text-xs font-semibold text-[#3d3530]">{font.name}</p>
                  </div>
                  <p className="text-[10px] text-[#9e9086]">{font.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                    className="text-base text-[#3d3530]"
                    style={{ fontFamily: font.headingClass }}
                  >
                    Título
                  </p>
                  <p
                    className="text-[10px] text-[#7a6e5f]"
                    style={{ fontFamily: font.bodyClass }}
                  >
                    Texto
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
