# Identidade visual no sistema

Fonte: `brandbook-luz-da-esperanca.pptx` (nesta pasta). Implementação: `apps/web/src/styles/tokens.css`.
Toda cor das telas sai de um token — não use hexadecimal direto em componentes.

## Cores

### Paleta estratégica (slide 08)

| Token | Cor | Nome | Uso no sistema |
|---|---|---|---|
| `--marca-verde-esperanca` | `#5B8C3E` | Verde Esperança | destaques grandes: bordas de cartão, carrinho, modal, foco |
| `--marca-dourado-terra` | `#8C6D46` | Dourado Terra | apoio: quantidades no carrinho, subtítulos |
| `--marca-branco-osso` | `#FAF7F2` | Branco-osso | menu lateral e painel do login (o fundo das telas passou a ser neutro, abaixo) |
| `--marca-cinza-texto` | `#4A4A4A` | Cinza-texto | reserva da paleta (o corpo usa `--muted`, abaixo) |

Tons de apoio das capas: verde-floresta `#2D461F` (menu lateral, cabeçalho do PDV, login), verde-musgo `#3E5A2E`
(hover de link e item ativo do menu), sálvia `#BFCDB3`, areia `#D8B989` (títulos de grupo no menu), linho `#E7E2D8`
(paleta de apoio; as bordas das telas usam `--neutro-borda`, abaixo).

### Superfícies neutras (refatoração visual — todas as telas)

Fundo cinza claro, superfícies de conteúdo em branco e cinza um tom abaixo no secundário (`--neutro-*` no
`tokens.css`, nos dois temas). O verde da identidade continua nas ações, no foco, nos indicadores de sucesso e
nas séries dos gráficos; os valores da paleta da marca não mudaram.

| Token semântico | Claro | Escuro | Contraste |
|---|---|---|---|
| `--bg` (fundo) | `#F5F5F5` | `#141517` | com `--text`: 13,2:1 / 13,1:1 |
| `--surface` / `--surface-2` | `#FFFFFF` / `#F0F0F0` | `#24262B` / `#1D1F23` | superfícies de conteúdo e agrupamento |
| `--text` / `--heading` | `#262A30` / `#15181D` | `#D7DAE0` / `#F1F3F5` | 13,2:1 / 16,3:1 (AA) |
| `--muted` | `#656B76` | `#9BA1AB` | 4,9:1 / 5,8:1 (AA) |
| `--border` / `--border-strong` | `#E3E5E9` / `#7F858E` | `#2C2F34` / `#707781` | a forte: 3,2:1 / 3,0:1 no pior caso (WCAG 1.4.11) |

### Ajustes de acessibilidade (RNF-16, WCAG AA)

Algumas cores da marca não chegam a 4,5:1 em texto pequeno. Nesses casos o sistema usa o **mesmo matiz, mais escuro**:

| Token semântico | Valor | Derivado de | Contraste |
|---|---|---|---|
| `--primary` (botões, links) | `#4E7A34` | Verde Esperança (3,99:1) | 5,1:1 com texto branco |
| `--secondary` | `#7A5E3B` | Dourado Terra | 5,6:1 |
| `--muted` | `#656B76` | Cinza suave (neutro) | 4,9:1 |
| `--danger` | `#B83A2B` | Vermelho-coral | 5,7:1 |
| `--info` | `#1F6F9F` | Azul-céu | 5,5:1 |
| `--warn` | `#7F5F12` | Amarelo-sol | ≥ 4,6:1 no fundo de alerta |

### Acentos — uma cor por área (slide 09)

As pétalas marcam as frentes de atuação; no sistema, cada grupo do menu e cada atalho da tela inicial usa uma.
Regra do brandbook: no máximo 1–2 acentos por peça.

| Acento | Cor | Área no sistema |
|---|---|---|
| Vermelho-coral | `#E85D4C` | Operação (PDV, vendas) |
| Laranja | `#F2994A` | Entradas e estoque |
| Amarelo-sol | `#F2C94C` | Financeiro |
| Azul-céu | `#3D9BD1` | Gestão (relatórios, cadastros, administração) |
| Roxo-suave | `#9B6FC4` | reservado |

Os cinco aparecem juntos só na marca (flor e pontos), como na capa do brandbook.

## Tipografia (slide 10)

| Papel | Fonte | Onde |
|---|---|---|
| Títulos e display | **Lora** (serifada) | `h1–h3`, nome da marca, totais do carrinho, títulos de cartão |
| Corpo | **Nunito** (sans humanista) | todo o resto, inclusive números (`tabular-nums`) |
| Comprovante | monoespaçada do sistema | impressão 80 mm |

As fontes são servidas pelo próprio app (`@fontsource-variable/lora` e `/nunito`): funcionam sem depender de servidor externo e
respeitam a CSP `default-src 'self'` — não usar Google Fonts por CDN.
Fonte manuscrita (Patrick Hand/Caveat) **não** se aplica: o sistema é peça institucional.

## Direção de arte (slide 11)

- "Casa acolhedora, não instituição fria": fundo cinza claro neutro com cards brancos, cantos arredondados (8/12/16 px), sombras suaves neutras.
- Espaço em branco generoso e hierarquia clara: título em Lora cinza escuro, texto em Nunito cinza — o verde fica nas ações e nos destaques.
- Ícones de forma simples inspirados nas pétalas: `shared/components/BrandMark.tsx` (flor de cinco pétalas).
  Ela **não substitui o logotipo oficial** — se a instituição fornecer o arquivo do logo, troque `FlorMarca` e `public/icon.svg`.

## Tom de voz (slide 06) nas mensagens da interface

Acolhedor, simples e encorajador: "Boas-vindas!", "Que bom ter você aqui." Mensagens de erro dizem o que fazer, sem jargão.

## Tema escuro

Superfícies neutras escuras (`#141517` fundo, `#24262b` conteúdo) com menu lateral e ações em verde
(`prefers-color-scheme: dark`). Etiquetas e comprovante são sempre preto no branco.
