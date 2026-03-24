export interface ColorPalette {
  id: string;
  name: string;
  description: string;
  preview: string[];
  vars: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
  };
}

export interface FontPairing {
  id: string;
  name: string;
  description: string;
  headingFont: string;
  bodyFont: string;
  googleFontsUrl: string;
  headingClass: string;
  bodyClass: string;
}

export interface SiteTheme {
  colorPaletteId: string;
  fontPairingId: string;
}

export const colorPalettes: ColorPalette[] = [
  {
    id: "sage-earth",
    name: "Sálvia & Terra",
    description: "Verde sálvia com tons terrosos — calmante e acolhedor",
    preview: ["#5C7A5C", "#8B7355", "#E8E4DC", "#2D3B2D"],
    vars: {
      primary: "hsl(120, 14%, 41%)",
      primaryLight: "hsl(120, 14%, 55%)",
      primaryDark: "hsl(120, 14%, 28%)",
      secondary: "hsl(30, 20%, 44%)",
      accent: "hsl(45, 35%, 65%)",
      background: "hsl(40, 20%, 94%)",
      surface: "hsl(40, 15%, 97%)",
      text: "hsl(120, 10%, 20%)",
      textMuted: "hsl(120, 5%, 45%)",
      border: "hsl(120, 8%, 82%)",
    },
  },
  {
    id: "lavender-stone",
    name: "Lavanda & Pedra",
    description: "Lavanda suave com cinza pedra — sofisticado e sereno",
    preview: ["#7C6B9E", "#8A8A8A", "#F5F3FA", "#3D3450"],
    vars: {
      primary: "hsl(265, 22%, 52%)",
      primaryLight: "hsl(265, 22%, 68%)",
      primaryDark: "hsl(265, 22%, 36%)",
      secondary: "hsl(0, 0%, 54%)",
      accent: "hsl(280, 30%, 72%)",
      background: "hsl(260, 20%, 96%)",
      surface: "hsl(260, 15%, 98%)",
      text: "hsl(265, 20%, 18%)",
      textMuted: "hsl(265, 8%, 48%)",
      border: "hsl(265, 12%, 84%)",
    },
  },
  {
    id: "ocean-sand",
    name: "Oceano & Areia",
    description: "Azul profundo com bege areia — confiante e tranquilo",
    preview: ["#2E6B8A", "#C4A882", "#EEF4F7", "#1A3F52"],
    vars: {
      primary: "hsl(200, 50%, 36%)",
      primaryLight: "hsl(200, 45%, 52%)",
      primaryDark: "hsl(200, 50%, 22%)",
      secondary: "hsl(35, 35%, 64%)",
      accent: "hsl(190, 40%, 58%)",
      background: "hsl(200, 25%, 95%)",
      surface: "hsl(200, 18%, 98%)",
      text: "hsl(200, 30%, 16%)",
      textMuted: "hsl(200, 12%, 46%)",
      border: "hsl(200, 18%, 82%)",
    },
  },
  {
    id: "rose-warm-gray",
    name: "Rosa & Cinza Quente",
    description: "Rosa envelhecido com cinza quente — delicado e elegante",
    preview: ["#A8716A", "#9E8E8A", "#FAF5F4", "#5C3532"],
    vars: {
      primary: "hsl(5, 25%, 54%)",
      primaryLight: "hsl(5, 25%, 70%)",
      primaryDark: "hsl(5, 25%, 36%)",
      secondary: "hsl(10, 8%, 58%)",
      accent: "hsl(355, 35%, 72%)",
      background: "hsl(10, 20%, 96%)",
      surface: "hsl(10, 15%, 98%)",
      text: "hsl(5, 18%, 18%)",
      textMuted: "hsl(5, 8%, 48%)",
      border: "hsl(5, 12%, 84%)",
    },
  },
  {
    id: "forest-cream",
    name: "Floresta & Creme",
    description: "Verde floresta profundo com creme — natural e equilibrado",
    preview: ["#2D5A3D", "#C8B89A", "#F7F4EE", "#1A3625"],
    vars: {
      primary: "hsl(145, 34%, 26%)",
      primaryLight: "hsl(145, 28%, 42%)",
      primaryDark: "hsl(145, 34%, 16%)",
      secondary: "hsl(35, 28%, 68%)",
      accent: "hsl(80, 25%, 55%)",
      background: "hsl(40, 25%, 95%)",
      surface: "hsl(40, 20%, 98%)",
      text: "hsl(145, 18%, 14%)",
      textMuted: "hsl(145, 8%, 44%)",
      border: "hsl(145, 10%, 80%)",
    },
  },
  {
    id: "midnight-gold",
    name: "Meia-noite & Ouro",
    description: "Azul meia-noite com dourado — premium e inspirador",
    preview: ["#1E2B4A", "#C9A84C", "#F4F5F8", "#0D1529"],
    vars: {
      primary: "hsl(222, 42%, 20%)",
      primaryLight: "hsl(222, 35%, 36%)",
      primaryDark: "hsl(222, 42%, 12%)",
      secondary: "hsl(40, 55%, 55%)",
      accent: "hsl(45, 65%, 52%)",
      background: "hsl(222, 15%, 96%)",
      surface: "hsl(222, 10%, 98%)",
      text: "hsl(222, 25%, 12%)",
      textMuted: "hsl(222, 10%, 46%)",
      border: "hsl(222, 14%, 82%)",
    },
  },
];

export const fontPairings: FontPairing[] = [
  {
    id: "classic",
    name: "Clássico",
    description: "Cormorant Garamond + Outfit — elegância atemporal",
    headingFont: "Cormorant Garamond",
    bodyFont: "Outfit",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap",
    headingClass: "'Cormorant Garamond', Georgia, serif",
    bodyClass: "'Outfit', system-ui, sans-serif",
  },
  {
    id: "modern-serif",
    name: "Serif Moderno",
    description: "Playfair Display + Inter — sofisticado e contemporâneo",
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
    headingClass: "'Playfair Display', Georgia, serif",
    bodyClass: "'Inter', system-ui, sans-serif",
  },
  {
    id: "editorial",
    name: "Editorial",
    description: "EB Garamond + Lato — refinado e legível",
    headingFont: "EB Garamond",
    bodyFont: "Lato",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lato:wght@300;400;700&display=swap",
    headingClass: "'EB Garamond', Georgia, serif",
    bodyClass: "'Lato', system-ui, sans-serif",
  },
  {
    id: "contemporary",
    name: "Contemporâneo",
    description: "Libre Baskerville + Source Sans 3 — sólido e acessível",
    headingFont: "Libre Baskerville",
    bodyFont: "Source Sans 3",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&display=swap",
    headingClass: "'Libre Baskerville', Georgia, serif",
    bodyClass: "'Source Sans 3', system-ui, sans-serif",
  },
  {
    id: "refined-sans",
    name: "Sans Refinado",
    description: "Josefin Sans + Raleway — moderno e geométrico",
    headingFont: "Josefin Sans",
    bodyFont: "Raleway",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap",
    headingClass: "'Josefin Sans', system-ui, sans-serif",
    bodyClass: "'Raleway', system-ui, sans-serif",
  },
  {
    id: "humanist",
    name: "Humanista",
    description: "Merriweather + Nunito — caloroso e humanizado",
    headingFont: "Merriweather",
    bodyFont: "Nunito",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Nunito:wght@300;400;500;600&display=swap",
    headingClass: "'Merriweather', Georgia, serif",
    bodyClass: "'Nunito', system-ui, sans-serif",
  },
];

export const defaultTheme: SiteTheme = {
  colorPaletteId: "sage-earth",
  fontPairingId: "classic",
};
