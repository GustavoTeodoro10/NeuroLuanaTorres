# Luana Torres | Neuropsicóloga em Mauá

Site de uma página (one-page) em HTML, CSS e JavaScript puro, com Tailwind CSS via CDN. Sem build, sem backend e sem dependências para instalar. O objetivo é levar o visitante a uma conversa no WhatsApp.

## Estrutura

```
.
├── index.html              Página única (textos, links e imagens editáveis estão marcados com comentários)
├── assets/
│   ├── css/styles.css      Cores, tipografia, componentes e animações
│   ├── js/main.js          Menu, animações ao rolar, faixa de avaliações e rastreio dos botões
│   ├── img/                Fotos em WebP, favicon e imagem de compartilhamento (og-image.jpg)
│   └── _candidatas/        Originais baixados do perfil do Google (podem ser apagados antes de publicar)
├── conteudo-extraido.md    Fontes reais usadas (Instagram, Google, AutismoPerto) e avaliações completas
├── PRODUCT.md, DESIGN.md   Contexto do produto e sistema visual (para quem for evoluir o site)
└── README.md
```

## Rodar localmente

Não precisa instalar nada. Abra `index.html` no navegador ou, para um teste mais fiel, sirva a pasta:

```bash
python -m http.server 8765
```

Depois abra http://localhost:8765. O GoatCounter não conta visitas em `localhost` (esperado).

## Onde editar

| O que | Onde |
|---|---|
| Textos, links, mensagens do WhatsApp | `index.html` (blocos comentados com `EDITÁVEL`) |
| Número do WhatsApp | procure por `5511981963725` em `index.html` (todos os botões usam o mesmo link `wa.me`) |
| Avaliações do Google | seção `avaliacoes` e faixa escura logo abaixo do hero, em `index.html` |
| Fotos | substitua os arquivos de `assets/img/` mantendo os nomes (ou ajuste o `src` no HTML) |
| Cores e raios | variáveis no topo de `assets/css/styles.css` |
| Descrição das formas de atendimento | seção `planos` em `index.html` |

## Publicar de graça

**GitHub Pages**
1. Crie um repositório e envie estes arquivos (a pasta `assets/_candidatas` pode ficar de fora).
2. Em *Settings → Pages*, escolha a branch `main` e a pasta `/ (root)`.
3. Em alguns minutos o site abre em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

**Netlify**: arraste a pasta do projeto em app.netlify.com/drop. **Cloudflare Pages**: conecte o repositório, sem comando de build e com a pasta de saída `/`.

**Depois de publicar**, ajuste em `index.html`:
- `og:image` e `og:url` para endereços absolutos (`https://seu-endereco/assets/img/og-image.jpg`), para a prévia correta no WhatsApp e no Instagram.
- Inclua `"url"` no bloco de dados estruturados (`application/ld+json`).

## Domínio próprio

1. Registre o domínio (por exemplo, no Registro.br para `.com.br`).
2. No provedor de hospedagem, adicione o domínio (GitHub Pages: *Settings → Pages → Custom domain*; Netlify e Cloudflare: *Domain settings*).
3. No DNS do domínio, aponte conforme as instruções do provedor (registros `CNAME` ou `A`). O HTTPS é emitido automaticamente.
4. Cadastre o novo domínio no painel do GoatCounter (veja abaixo).

## GoatCounter (estatísticas sem cookies)

- **Onde está o script:** no `<head>` de `index.html`, exatamente assim:
  ```html
  <script data-goatcounter="https://teocode.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
  ```
- **Lembrete:** o domínio onde o site for publicado precisa estar cadastrado no painel do GoatCounter (`teocode.goatcounter.com`, em *Settings → Sites*). Sem isso as visitas não aparecem.
- **Como ver os cliques:** no painel, abra **Dashboard → Events**. Cada botão de WhatsApp registra um evento com o nome do `data-gc-event`.
- **Eventos de clique (um por botão):**

| Evento | Onde fica |
|---|---|
| `cta-menu` | Botão do cabeçalho e do menu no celular |
| `cta-hero` | Botão principal do topo da página |
| `cta-atendimento` | Final da seção "Como funciona a avaliação" |
| `cta-sobre` | Painel laranja "Sobre" |
| `cta-plano-pontual` | Formas de atendimento: sessão pontual |
| `cta-plano-90-dias` | Formas de atendimento: plano 90 dias |
| `cta-plano-180-dias` | Formas de atendimento: plano 180 dias |
| `cta-avaliacoes` | Final da seção de avaliações |
| `cta-contato` | Painel de contato |
| `cta-footer` | Link de WhatsApp no rodapé |
| `cta-flutuante` | Botão flutuante de WhatsApp |

O link do WhatsApp sempre abre, mesmo que o rastreio falhe (por exemplo, com bloqueador de anúncios).

## Microinterações e animações

Todas respeitam `prefers-reduced-motion` (com movimento reduzido só há fade suave e a faixa de avaliações fica parada). Hover só vale em dispositivos com mouse; no toque, o feedback é o `:active`.

| Onde | O que acontece | Por quê |
|---|---|---|
| Botões, redes sociais, botão flutuante | Reduzem para 0,97 ao toque (100 a 160ms) | Confirma que o toque foi ouvido |
| Botão principal | Sobe 2px no hover; o ícone do WhatsApp inclina e as setas deslizam | Convite ao clique, sem exagero |
| Hero | Título, texto, botões e retrato entram em cascata de 70ms; retrato entra com leve desfoque | Hierarquia: lê-se primeiro o título |
| Hero (mouse) | Círculo laranja e fio pontilhado se movem levemente, em sentidos opostos ao cursor, com suavização | Profundidade; decorativo |
| Faixa de avaliações | Loop contínuo linear, pausa no hover e no foco | Único movimento contínuo da página |
| Revelação ao rolar | 3 tipos: subida curta (textos), painel (Sobre e Contato) e recorte (foto da sala abre de cima para baixo) | Evita a mesma entrada em todo bloco |
| Etapas da avaliação | O fio pontilhado se desenha e cada etapa entra em seguida | Mostra a sequência da avaliação |
| Avaliações | Estrelas da nota acendem uma a uma; cartões sobem 4px no hover | Momento raro; feedback de leitura |
| Formas de atendimento | O nome da linha desliza 6px no hover | Mostra qual opção está em foco |
| Menu no celular | Ícone troca com giro e desfoque; painel abre em 320ms e fecha em 200ms; links entram em cascata de 40ms | Abertura deliberada, fechamento rápido |
| Botão flutuante | Some enquanto o painel de contato e o rodapé estão na tela | Evita dois botões iguais ao mesmo tempo |

Para ajustar: curvas e durações estão no topo e no final de `assets/css/styles.css` (bloco "Movimento"), e a cascata, o paralaxe e o botão flutuante estão em `assets/js/main.js`.

## Acessibilidade e desempenho

Navegação por teclado, foco visível, link "Ir para o conteúdo", contraste AA, alvos de toque de 44px ou mais e respeito a `prefers-reduced-motion` (a faixa de avaliações fica estática). Imagens em WebP com dimensões definidas e carregamento tardio fora da primeira tela.

## Observação sobre o Tailwind

O Tailwind via CDN é o padrão deste projeto (sem build). O console do navegador mostra um aviso "should not be used in production": é esperado. Se um dia o site precisar de máxima velocidade, o CSS pode ser compilado com o Tailwind CLI.
