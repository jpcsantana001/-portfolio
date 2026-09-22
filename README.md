# Portfólio — João Pedro Santana

Portfólio profissional construído com **Next.js 16 (App Router)**, **React 19**,
**TypeScript**, **Tailwind CSS**, **next-themes** (dark/light mode) e
**lucide-react** (ícones). As animações de scroll usam `IntersectionObserver`
puro (`components/reveal.tsx`), sem biblioteca de animação, para manter o bundle
leve.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Antes de publicar — o que ainda falta

Todo o conteúdo do site vem de **`lib/data.ts`** — você não precisa editar
nenhum componente para atualizar textos. Contato (e-mail, GitHub, LinkedIn),
períodos das experiências e formação já estão preenchidos com os dados reais
(fonte: perfil do LinkedIn exportado em 22/09/2026).

Pendente — trocar o domínio placeholder `https://joaopedrosantana.dev` pela URL
final (ou pela URL `.vercel.app` do deploy) em três arquivos:

- **`app/layout.tsx`** — constante `siteUrl`, usada nas meta tags de SEO e Open Graph.
- **`app/robots.ts`** — URL do sitemap.
- **`app/sitemap.ts`** — URL da home.

## Foto, logos e paleta de comandos

- **Foto do hero**: `assets/joao-pedro.jpg` (880×1100, recorte 4:5). Para trocar,
  substitua o arquivo mantendo a proporção — `components/portrait.tsx` usa
  `next/image` com `placeholder="blur"`, então o Next cuida do resto.
- **Logos**: ficam em `public/logos` e são declarados no objeto `brands`, em
  `lib/data.ts`. Cada marca tem variante clara e escura. Marca sem arquivo de
  logo (hoje Hub33 e Colégio SESI) cai automaticamente no wordmark tipográfico;
  para usar um logo real, coloque o SVG em `public/logos` e preencha o campo
  `logo` da marca. Ademicon e Unipar usam os SVGs oficiais dos sites
  institucionais; a variante escura foi gerada trocando o cinza/preto do
  wordmark por um tom claro, para funcionar no tema escuro.
- **Paleta de comandos** (`components/command-palette.tsx`): abre com `Ctrl K` /
  `⌘K` ou pelo botão da navbar. Navega entre seções, copia o e-mail, abre
  GitHub/LinkedIn e troca o tema. Para adicionar um comando, inclua um item na
  lista `actions` do componente.

## Adicionando novos projetos

A seção "Projetos" hoje mostra apenas o Gestor360 (`lib/data.ts`, objeto
`gestor360`) e um card tracejado reservado para os próximos. Quando tiver um
novo projeto para adicionar, edite `components/projects.tsx` seguindo o mesmo
padrão de card usado para o Gestor360.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em https://vercel.com, clique em "New Project" e importe o repositório.
3. A Vercel detecta o Next.js automaticamente — não é necessário configurar nada.
4. Após o deploy, atualize `siteUrl`, `robots.ts` e `sitemap.ts` com o domínio
   gerado (ou seu domínio próprio) e faça um novo commit.

## Estrutura

```
app/
  layout.tsx          # metadata, fontes (Geist), tema
  page.tsx             # monta as seções da página
  globals.css          # tokens de cor (dark/light) e estilos base
  opengraph-image.tsx  # imagem de compartilhamento (OG) gerada dinamicamente
  robots.ts / sitemap.ts
components/            # um componente por seção
lib/
  data.ts               # todo o conteúdo do site (edite aqui)
  utils.ts
```
