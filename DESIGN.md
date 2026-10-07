---
name: Luana Torres | Neuropsicóloga em Mauá
description: Site de uma página, claro e acolhedor, que explica a avaliação neuropsicológica infantil e leva ao WhatsApp.
colors:
  ink: "#0f2f2e"
  ink-2: "#3d5654"
  paper: "#f4f6f3"
  paper-2: "#e8ede9"
  accent: "#c2501d"
  accent-ink: "#a8431a"
  accent-tint: "#f5e3d8"
  star: "#e8a317"
  chip-ink: "#5a2410"
  card: "#fbfcfb"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  card: "20px"
  panel: "28px"
  pill: "999px"
spacing:
  section-mobile: "72px"
  section-desktop: "128px"
  gutter: "20px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.accent-ink}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "52px"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.15rem"
    height: "44px"
  chip-area:
    backgroundColor: "{colors.accent-tint}"
    textColor: "#5a2410"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  review-card:
    backgroundColor: "#fbfcfb"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "26px"
---

# Design System: Luana Torres | Neuropsicóloga em Mauá

## Overview

**Creative North Star: "A Sala Clara"**

A página imita a sala de atendimento dela: paredes claras, um grande círculo laranja pintado e poucas coisas bem escolhidas. A voz é calma e direta, para pais preocupados que leem no celular. O texto explica uma coisa só, o que é a avaliação neuropsicológica, e as palavras das próprias famílias carregam a confiança.

O visual não é infantil nem clínico. Usa tipografia sem serifa com personalidade, muito respiro, um acento laranja vindo da parede do consultório e uma faixa petróleo escura para as avaliações. O único ornamento é o fio pontilhado laranja, tirado da mesma parede.

**Key Characteristics:**
- Névoa fria como fundo, tinta verde-petróleo como texto, um único acento laranja.
- Bricolage Grotesque nos títulos, Figtree no texto.
- Botões em pílula, painéis de 28px, cartões de 20px.
- Prova social real em destaque: nota 5,0 e avaliações do Google.
- Movimento curto, com ease-out exponencial, sempre respeitando movimento reduzido.

## Colors

Paleta de três vozes: névoa, petróleo e laranja. O laranja aparece em poucos lugares, mas em campos grandes quando aparece.

### Primary
- **Clinic Wall Orange** (#c2501d): botões principais, destaques do título e o painel Sobre. Vem da parede do consultório e dos posts dela.
- **Pressed Orange** (#a8431a): hover do botão e textos pequenos em laranja sobre fundo claro (contraste 5,5:1).
- **Orange Tint** (#f5e3d8): fundo de chips e avatares, com texto em #5a2410.
- **White** (#ffffff): texto sobre o painel laranja e sobre botões laranja.

### Tertiary
- **Review Amber** (#e8a317): estrelas de avaliação. Cor semântica, usada só nelas.

### Neutral
- **Mist Paper** (#f4f6f3): fundo da página.
- **Mist Deep** (#e8ede9): seção de avaliações e rodapé.
- **Petrol Ink** (#0f2f2e): texto, faixa de avaliações e painel de contato.
- **Soft Petrol** (#3d5654): texto secundário (7,3:1 sobre o fundo).
- **Card White** (#fbfcfb): fundo dos cartões de avaliação.

### Named Rules
**The One Orange Rule.** O laranja é o único acento. Texto pequeno em laranja usa o tom escuro (#a8431a), nunca o laranja claro sobre o fundo claro.

**The Real Words Rule.** Prova social e credenciais vêm só de fontes reais, nunca de texto inventado.

## Typography

**Display Font:** Bricolage Grotesque (com ui-sans-serif)
**Body Font:** Figtree (com ui-sans-serif)

**Character:** Um display com leve personalidade humana e um corpo aberto e legível. Sem serifa, sem mono.

### Hierarchy
- **Display** (700, clamp(2.4rem, 4.5vw, 4rem), 1.02): só o título do hero, em duas linhas.
- **Headline** (700, clamp(2.1rem, 4.4vw, 3.5rem), 1.04): títulos de seção.
- **Title** (700, 1.35rem, 1.15): etapas da avaliação e nomes das formas de atendimento.
- **Body** (400, 1.0625rem, 1.65): texto corrido, até 52 caracteres de largura nos parágrafos de apoio.
- **Label** (600, 1rem): botões e links.
- **Tamanhos de apoio** (0.8 a 1.25rem e 2rem para a nota do selo): legendas, nome do cabeçalho, textos de introdução e a nota 5,0 da faixa; seguem a hierarquia acima sem criar novos papéis.

### Named Rules
**The Plain Voice Rule.** Sem eyebrows, sem numeração de seções, sem frases de efeito. O título carrega a seção.

## Layout

Contêiner de 1200px com 20px de margem no celular e 32px no desktop. Seções com 72px de respiro vertical no celular e 128px no desktop. Grade de 12 colunas a partir de 1024px: hero 7/5, atendimento 5/7 com foto fixa, sobre 7/5. Abaixo de 768px tudo vira coluna única. Cabeçalho de 72px em uma linha, com menu em painel no celular.

## Elevation & Depth

Quase plano. Profundidade vem de camadas de cor (névoa, painel laranja, painel petróleo) e de sombras suaves tingidas com a tinta petróleo, nunca pretas nem coloridas.

### Shadow Vocabulary
- **Button lift** (`0 1px 0 rgb(255 255 255 / 0.18) inset, 0 12px 22px -14px rgb(15 47 46 / 0.55)`): botão principal em repouso.
- **Card soft** (`0 1px 2px rgb(15 47 46 / 0.07), 0 18px 32px -24px rgb(15 47 46 / 0.35)`): cartões de avaliação.
- **Portrait** (`0 40px 60px -40px rgb(15 47 46 / 0.55)`): retrato do hero.

### Named Rules
**The Tinted Shadow Rule.** Toda sombra usa a tinta petróleo como base.

### Motion Grammar
Curvas: ease-out forte `cubic-bezier(0.23, 1, 0.32, 1)` para entradas e hovers, ease-in-out `cubic-bezier(0.77, 0, 0.175, 1)` para movimentos na tela (recorte da foto, fio das etapas). Interface abaixo de 300ms: press 100 a 160ms (escala 0.97), hover 200ms, menu 320ms ao abrir e 200ms ao fechar. Revelações de rolagem têm três tipos: subida curta (padrão), painel (sobe e cresce de 0.985 para 1) e recorte (foto abre de cima para baixo). Elementos que entram juntos têm cascata de 70ms. Só animar transform, opacity, clip-path e filter. Hover só em dispositivos com mouse. Com movimento reduzido: apenas fade.

## Shapes

Formas macias e redondas, coerentes com a sala: pílula (999px) para botões e chips, 20px para cartões, 28px para imagens grandes e painéis. O círculo laranja atrás do retrato e o fio pontilhado são as únicas formas gráficas.

## Components

### Buttons
- **Shape:** pílula (999px), altura mínima de 52px (44px nos secundários).
- **Primary:** fundo laranja #c2501d, texto branco, ícone do WhatsApp à esquerda.
- **Hover / Focus:** sobe 2px e escurece para #a8431a. Foco com contorno de 3px em #a8431a e 3px de afastamento.
- **Light:** fundo névoa com texto petróleo, para campos laranja ou escuros.
- **Outline:** borda petróleo de 2px, preenche com petróleo no hover.

### Chips
- **Style:** fundo Orange Tint, texto #5a2410, pílula. Usados para as áreas investigadas pela avaliação.

### Cards / Containers
- **Review card:** fundo #fbfcfb, raio de 20px, sombra Card soft, avatar com inicial, estrelas âmbar. Sobe 4px no hover.
- **Painéis:** Sobre em laranja com texto branco, Contato em petróleo com mapa encaixado, ambos com raio de 28px.

### Navigation
- Links de texto em Soft Petrol com sublinhado laranja que cresce da esquerda. Link da seção ativa fica em petróleo. No celular, painel que desce do cabeçalho com links de 1.5rem e o botão de WhatsApp.

### Signature Component: Fio de etapas
Linha pontilhada laranja vertical com marcadores em anel, que se desenha ao entrar na tela e liga as etapas da avaliação.

## Do's and Don'ts

### Do:
- **Do** usar o laranja #c2501d só em ações, destaques do título e no painel Sobre.
- **Do** manter um único marquee (faixa de avaliações), pausado no hover e estático com movimento reduzido.
- **Do** usar sombras tingidas com a tinta petróleo (#0f2f2e).
- **Do** manter botões em pílula e painéis entre 20px e 28px de raio.

### Don't:
- **Don't** criar logotipo nem redesenhar marca: o nome é texto.
- **Don't** usar eyebrows, numeração de seções, emojis ou travessões no texto da página.
- **Don't** usar serifa, nem o laranja claro como cor de texto pequeno sobre o fundo claro.
- **Don't** inventar depoimentos, números ou promessas de resultado.
