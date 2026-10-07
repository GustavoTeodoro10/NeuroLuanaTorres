# Relatório final: site da Luana Torres

Neuropsicóloga em Mauá. Modo PRIMEIRO-SITE. Entrega: HTML/CSS/JS puro + Tailwind via CDN, pronto para GitHub.

## 1. Informações que faltaram e como foram contornadas

| Item | Situação | Como foi contornado |
|---|---|---|
| Logotipo | Não existe | Nome em texto ("Luana Torres" e "Neuropsicóloga"). Favicon e imagem de compartilhamento feitos da foto de perfil. Nenhum logo criado. |
| Fotos | Só há 2 aproveitáveis do Google (retrato 720px e sala lúdica 1080px). Instagram só em miniatura e com texto sobreposto | Hero com o retrato e a sala de atendimento na seção de atendimento. Sem banco de imagens. Painéis de cor onde não há foto. |
| Foto do prédio | Autoria não confirmada | Não usada. |
| O que inclui cada forma de atendimento e valores | Não informado | Só os nomes e uma linha neutra ("plano com duração de 90 dias"). Valores via WhatsApp. |
| Horários semanais | Não encontrados (o Google só mostra "fecha 19:00") | Omitidos. O site diz "Horários disponíveis: consulte pelo WhatsApp". |
| E-mail | Não encontrado | Omitido. |
| Atendimento a TEA | Só no AutismoPerto (perfil não reivindicado) | Não incluído no texto do site. |
| Adultos | Fontes falam só de crianças e adolescentes | O site fala só de crianças e adolescentes. |
| Link de agendamento do Google (`bit.ly/contato-luana-psi`) | Não aberto | Não usado. Todos os CTAs vão ao WhatsApp. |
| Endereço do site publicado | Ainda não existe | `og:url`, `og:image` absolutos e `url` do JSON-LD ficam como pendência pós-publicação. |
| FAQ | Sem base para respostas além do que a seção de atendimento já cobre | Omitido. |
| Avaliações do Google | 71 no total; 18 carregadas e 15 lidas por completo | 6 usadas como trechos literais, nomes abreviados. Avaliação com diagnóstico de menor (Marilza) não usada. |

## 2. GoatCounter

- **Script confirmado** no `<head>` de `index.html`, sem alteração além do endereço:
  `<script data-goatcounter="https://teocode.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`
- **Eventos de CTA (11):** `cta-menu` (cabeçalho e menu móvel), `cta-hero`, `cta-atendimento`, `cta-sobre`, `cta-plano-pontual`, `cta-plano-90-dias`, `cta-plano-180-dias`, `cta-avaliacoes`, `cta-contato`, `cta-footer`, `cta-flutuante`.
- Um único listener em JS puro, protegido por `if (window.goatcounter && window.goatcounter.count)`. O link do WhatsApp abre mesmo com o rastreio bloqueado.
- Ver os cliques: Dashboard → Events. O domínio publicado precisa estar cadastrado no painel (`teocode.goatcounter.com`). Em `localhost` o GoatCounter não conta (testado, aviso esperado).

## 3. Pendências que dependem do cliente

1. Enviar as descrições e valores de sessão pontual, plano 90 dias e plano 180 dias.
2. Enviar fotos originais em alta resolução (retrato sem texto e do consultório) para um hero mais nítido.
3. Confirmar se quer citar a Clínica Trilhando Infância e se atende TEA, adolescentes e adultos.
4. Confirmar o uso de nomes abreviados nas avaliações e se prefere nome completo.
5. Enviar horários de atendimento e e-mail, se quiser exibir.
6. Autorizar o uso das avaliações do Google no site (são públicas; o aviso é de cortesia).
7. Se tiver logotipo, enviar o arquivo original para substituir o nome em texto.

## 4. O que foi aproveitado das referências

- **Referência 1 (goulartpsico):** fluxo simples em uma coluna, hero dividido com retrato, bloco de tópicos que ajudam a pessoa (virou as etapas da avaliação), seção "quem sou eu" e WhatsApp repetido com botão flutuante. Descartados: menu longo, blog, formulário, tipografia fina, miniaturas decorativas.
- **Referência 2 (Bianca Teo):** faixa escura de avaliações logo abaixo do hero e a seção de prova social com nota grande, estrelas e cartões de avaliação com avatar de inicial. Descartados: serifa, paleta bege e vinho, imagem em arco, selo sobre a foto e o tom de beleza. A nota dentro do hero foi para a faixa, por regra de composição.
- Nada de texto, imagem, código ou cor das referências foi copiado.

## 5. Escolhas de design e desvios do plano

- **Direção:** aprovada no checkpoint (taste-skill). Clara, acolhedora, um único acento laranja (da parede do consultório dela), petróleo e névoa. Sem serifa, sem eyebrows, sem emojis, sem travessões.
- **Fonte:** Outfit foi trocada por Bricolage Grotesque (títulos) porque o impeccable trata Outfit como padrão de IA. Figtree no texto.
- **Polimento (emil-design-eng):** easing forte, interface abaixo de 300ms, feedback de clique 0,97, hover só com mouse, três tipos de revelação por rolagem com cascata de 70ms, menu móvel com abertura e fechamento assimétricos, paralaxe leve no hero (mouse) e botão flutuante que some quando já há botão na tela. Detalhes no README.
- **Marquee:** o detector de design avisa sobre faixa em loop. Mantida porque a Referência 2 pediu a animação e é a única da página; pausa no hover e no foco e fica parada com movimento reduzido.
- **Estrelas âmbar:** única cor fora da paleta, usada só nas estrelas (cor semântica do Google).

## 6. Verificação

- Testado no navegador em 1138 px e 375 px: sem rolagem horizontal, um único H1, todas as imagens com alt, 11 eventos de CTA únicos, nenhum travessão, nenhum erro de console (só o aviso esperado do Tailwind via CDN e do GoatCounter em localhost).
- Revisão final feita pelo próprio agente, porque os revisores dedicados do impeccable não existem neste ambiente. Capturas de tela não foram salvas em arquivo.
- Contraste conferido: texto secundário 7,3:1, branco sobre o laranja 4,7:1, laranja escuro em texto pequeno 5,5:1.
- Não testado: aparelhos reais, leitores de tela e o rastreio do GoatCounter em produção.

## 7. Arquivos

`index.html`, `assets/css/styles.css`, `assets/js/main.js`, `assets/img/` (WebP, favicon, og-image), `README.md` (instalação, deploy, domínio, GoatCounter, animações), `conteudo-extraido.md` (fontes e avaliações completas), `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`. A pasta `assets/_candidatas/` tem os originais baixados e pode ser apagada antes de publicar.
