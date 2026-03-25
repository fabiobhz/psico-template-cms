# Site Template com CMS

Template de site profissional com painel de administração integrado. Permite personalizar conteúdo, paleta de cores e tipografia sem tocar no código.

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:8080` para ver o site e `http://localhost:8080/admin` para o painel de administração.

---

## Estrutura de pastas

```
public/
  assets/
    hero-*.svg          → Backgrounds do hero (um por paleta de cores)
    team-*.svg          → Retratos placeholder da equipe
    og-image.png        → Imagem para redes sociais (Open Graph)
src/
  components/           → Componentes do site público
  admin/                → Painel de administração (CMS)
  config/
    defaultContent.ts   → Conteúdo padrão do site
    defaultTheme.ts     → Paletas de cores e fontes disponíveis
  contexts/
    SiteConfigContext.tsx → Gerenciamento de estado e persistência
```

---

## Guia de imagens

### Hero (imagem de fundo da seção principal)

| Item | Valor recomendado |
|------|-------------------|
| **Dimensões** | 1920 × 900 px (proporção ≈ 2.1:1) |
| **Formatos aceitos** | `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg` |
| **Tamanho máximo** | 500 KB (JPEG/WebP) — sem limite para SVG |
| **Orientação** | Paisagem (horizontal) |
| **Dica de cor** | Prefira imagens escuras ou com área escura no centro — o texto branco fica sobre a imagem com um overlay preto de 45% |

**Paletas e seus heroes padrão** (trocam automaticamente ao salvar a paleta):

| Paleta | Arquivo |
|--------|---------|
| Sálvia & Terra | `hero-sage-earth.svg` |
| Lavanda & Pedra | `hero-lavender-stone.svg` |
| Oceano & Areia | `hero-ocean-sand.svg` |
| Rosa & Cinza Quente | `hero-rose-warm-gray.svg` |
| Floresta & Creme | `hero-forest-cream.svg` |
| Meia-noite & Ouro | `hero-midnight-gold.svg` |

> **Nota:** ao selecionar uma paleta no CMS, o hero troca automaticamente para o hero daquela paleta — desde que o hero atual seja um dos heroes padrão. Se você colocar uma imagem própria, ela não será substituída.

Para usar uma imagem própria, coloque o arquivo em `public/assets/` e insira o caminho no campo **"Imagem de fundo"** do CMS (ex: `/assets/minha-foto.jpg`).

---

### Fotos da equipe

| Item | Valor recomendado |
|------|-------------------|
| **Dimensões** | 400 × 500 px (proporção 4:5) |
| **Formatos aceitos** | `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg` |
| **Tamanho máximo** | 200 KB por foto (JPEG/WebP) |
| **Orientação** | Retrato (vertical) |
| **Fundo** | Sólido ou neutro — o card usa a cor de superfície da paleta como fundo |
| **Enquadramento** | Busto (cabeça + ombros), centralizado |

Os arquivos placeholder `team-1.svg`, `team-2.svg` e `team-3.svg` são ilustrações vetoriais com fundo transparente que assumem a cor da paleta ativa. Substitua por fotos reais para uso em produção.

Para substituir, coloque as fotos em `public/assets/` e insira os caminhos no CMS em **Equipe → Foto** (ex: `/assets/foto-joao.jpg`).

---

### Imagem Open Graph (compartilhamento em redes sociais)

| Item | Valor recomendado |
|------|-------------------|
| **Arquivo** | `public/assets/og-image.png` |
| **Dimensões** | 1200 × 630 px |
| **Formato** | `.png` ou `.jpg` |
| **Tamanho máximo** | 300 KB |

Para alterar, substitua o arquivo `public/assets/og-image.png` mantendo o mesmo nome, ou edite a tag `<meta property="og:image">` em `index.html`.

---

## Personalização via CMS

Acesse `/admin` para editar:

- **Site** — título, descrição (SEO), texto do logo
- **Hero** — título, slogan, imagem de fundo, botão de CTA
- **Sobre** — texto em até 3 parágrafos
- **Serviços** — título, ícone e descrição de cada card
- **Equipe** — nome, cargo/registro, bio, foto e WhatsApp de cada membro
- **Contato** — textos do formulário e credenciais do EmailJS
- **Tema** — paleta de cores e combinação de fontes

Cada seção tem botão **Salvar seção** individual. Use o botão **Pré-visualizar** (abre em nova aba) para ver as alterações em tempo real antes de publicar.

---

## Deploy

```bash
npm run build
```

Os arquivos gerados ficam em `dist/`. Hospede em qualquer serviço estático (Vercel, Netlify, GitHub Pages, etc.).

> **Importante:** as configurações feitas no CMS ficam salvas no `localStorage` do navegador de quem editou. Para publicar as alterações, exporte a configuração pelo CMS (botão **Exportar JSON**) e importe no servidor de produção, ou configure um backend/CMS headless conforme sua necessidade.

---

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
