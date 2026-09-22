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
- **Logos das marcas**: ficam em `public/logos` e são declarados no objeto
  `brands`, em `lib/data.ts`. Cada marca aceita variante clara e escura; marca
  sem arquivo de logo cai automaticamente no wordmark tipográfico.
  - Ademicon e Unipar: SVGs oficiais dos sites institucionais. A variante
    escura foi gerada trocando o cinza/preto do wordmark por um tom claro.
  - Hub33: PNG recortado do emblema do grupo, com máscara circular.
  - Winsite: PNG do site da empresa; a variante escura troca o verde-escuro do
    wordmark por um tom claro.
  - Zaeli: PNG do logotipo institucional (domínio público). O amarelo/vermelho
    funciona nos dois temas, então usa o mesmo arquivo.
  - Clínica Pró-Ativa: PNG recortado da marca enviada, com máscara circular.
  - SESI: PNG do logotipo institucional. Como o azul da marca não tem
    contraste no tema escuro, ele recebe um chip branco (`chipOnDark: true`)
    em vez de ser recolorido.
- **Ícones das tecnologias**: `lib/tech-icons.ts` guarda o path SVG e a cor
  oficial de cada marca (base: Simple Icons, CC0). `colorDark` clareia marcas
  escuras demais para o tema escuro. Tecnologia sem ícone — hoje SQL — mostra
  um glifo genérico de banco de dados.
- **Paleta de comandos** (`components/command-palette.tsx`): abre com `Ctrl K` /
  `⌘K` ou pelo botão da navbar. Navega entre seções, copia o e-mail, abre
  GitHub/LinkedIn e troca o tema. Para adicionar um comando, inclua um item na
  lista `actions` do componente.

## Currículo

A página `/curriculo` monta o currículo a partir do mesmo `lib/data.ts` que
alimenta o site — não existe conteúdo duplicado. O PDF em
`public/curriculo-joao-pedro-santana.pdf` é essa página impressa.

Para regerar o PDF depois de mudar qualquer dado:

```bash
npm run build && npm start &                 # sobe em :3000
google-chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/curriculo-joao-pedro-santana.pdf \
  http://localhost:3000/curriculo
```

O layout de impressão (A4, margens, quebras de página) está no final de
`app/globals.css`, na seção `.cv`. A página é `noindex`: o currículo é para
quem recebe o link, não para busca.

Por decisão de privacidade, o currículo **não** traz endereço residencial,
data de nascimento, estado civil nem telefone.

## Segurança

Os cabeçalhos ficam em `next.config.mjs`, aplicados a todas as rotas: CSP,
`nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy` e
HSTS. O `X-Powered-By` é desligado.

A CSP é restritiva porque o site não carrega nada de origem externa — fontes,
ícones e logos são servidos do próprio domínio. A exceção é
`script-src 'unsafe-inline'`, necessário para o bootstrap inline do Next e
para o next-themes aplicar o tema antes da primeira pintura; remover isso
exigiria nonce por requisição e tornaria as páginas dinâmicas. `'unsafe-eval'`
não está liberado.

Ao adicionar qualquer recurso de terceiros (fonte do Google, script de
analytics, iframe de vídeo), a CSP precisa ser ajustada na mesma linha —
senão o navegador bloqueia silenciosamente.

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
