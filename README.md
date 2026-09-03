# DeehZigner — site institucional

Landing page de **Anderson Nogueira Silva** (DeehZigner), Designer Gráfico e
Arte Finalista. Construída a partir do PDF de design `Projeto Site DeehZigner`.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com/) (preset `radix-nova`)
- lucide-react

## Seções

Página única (`app/page.tsx`) com âncoras de navegação:

| Âncora        | Seção                                                        |
| ------------- | ----------------------------------------------------------- |
| `#top`        | Hero — marca, headline e faixa de números                  |
| `#atuacao`    | Atuação — 6 frentes de trabalho                            |
| `#portfolio`  | Portfólio — categorias + grade de projetos                 |
| `#sobre`      | Sobre — bio do Anderson                                     |
| `#duvidas`    | Dúvidas — FAQ (accordion)                                  |
| `#contato`    | Contato — canais + CTA WhatsApp                            |

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
```

## Ajustes pendentes de conteúdo

Editáveis em `lib/site.ts`:

- **`whatsapp`** — trocar `5500000000000` pelo número real da Deeh.
- **Retrato do Anderson** (`components/site/about.tsx` e `contact.tsx`) — hoje é
  um placeholder com monograma; substituir por foto real quando disponível.
- **Imagens do portfólio** (`public/portfolio/`) — provisórias, vindas do
  Instagram [@deehzigner](https://instagram.com/deehzigner).
- **Logo** — recriado em SVG (`components/site/logo.tsx`); `public/brand/deeh-logo.png`
  é a versão bitmap de referência.

## Estrutura

```
app/
  layout.tsx        fontes, metadata, tema escuro
  page.tsx          composição das seções
  globals.css       tema DeehZigner (azul profundo) + utilitários
components/
  site/             seções e componentes da página
  ui/               componentes shadcn/ui
lib/
  site.ts           todo o conteúdo (nav, serviços, portfólio, FAQ, contato)
```
