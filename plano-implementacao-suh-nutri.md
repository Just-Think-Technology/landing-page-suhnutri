# Plano de Implementação — Suh Nutri Consultoria

> Landing page institucional para Suh Nutri Consultoria, especializada em segurança dos alimentos, qualidade operacional e regularização sanitária.

## 1. Relação com o `.agents`

Este plano deve ser implementado em conjunto com a pasta `.agents` criada para o projeto.

Antes de iniciar qualquer implementação, ler:

1. `.agents/AGENTS.md`
2. `.agents/context/brand.md`
3. `.agents/context/content.md`
4. `.agents/context/information-architecture.md`
5. `.agents/rules/design-system.md`
6. `.agents/rules/frontend.md`
7. `.agents/rules/animation.md`
8. `.agents/rules/content.md`
9. `.agents/rules/accessibility.md`
10. `.agents/rules/seo-performance.md`

As regras do `.agents` são a fonte de orientação para decisões de marca, conteúdo, UX, frontend, animação, acessibilidade e SEO.

O `.agents` deve ser atualizado quando decisões permanentes do projeto forem alteradas.

---

# 2. Objetivo

Construir uma landing page premium para a Suh Nutri Consultoria com foco em:

- segurança dos alimentos
- qualidade operacional
- conformidade sanitária
- profissionalização dos estabelecimentos
- geração de contatos

A experiência deve transmitir:

**segurança → competência → clareza → proximidade → ação**

O site não deve parecer uma clínica de nutrição tradicional.

A direção visual deve combinar:

- consultoria técnica
- cozinha profissional
- qualidade operacional
- confiança
- proximidade humana

---

# 3. Stack

Tecnologias obrigatórias:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- anime.js

CSS customizado somente quando Tailwind não for suficiente.

## Princípios técnicos

- Server Components por padrão.
- Client Components somente quando interação, estado ou animação exigirem.
- Não transformar `page.tsx` inteiro em Client Component apenas por causa do anime.js.
- shadcn/ui apenas onde seus primitives forem úteis.
- Conteúdo separado da apresentação.
- Animações implementadas depois da estrutura visual estar correta.

---

# 4. Referências de experiência

A experiência de motion deve ser inspirada conceitualmente em:

- Anime.js — controle de timelines, stagger, easing, SVG e animações sincronizadas com scroll.
- Rockstar Games / GTA VI — experiência cinematográfica, grandes imagens, escala, camadas e narrativa visual.
- BetterUp Insights — storytelling editorial, grandes headlines, blocos de conteúdo e transições progressivas.

Não copiar identidade visual, layout ou elementos proprietários das referências.

A inspiração deve ser traduzida para uma identidade própria da Suh Nutri.

---

# 5. Conceito de Motion

A animação não é um detalhe decorativo.

Ela faz parte da narrativa da página.

O usuário deve sentir que está percorrendo uma história:

```text
Problema
   ↓
Contexto
   ↓
Especialista
   ↓
Diagnóstico
   ↓
Solução
   ↓
Processo
   ↓
Transformação
   ↓
Contato
```

Evitar uma página composta simplesmente por blocos estáticos.

---

# 6. Estrutura da página

Estrutura principal:

```text
01 — Preloader / Intro
02 — Header
03 — Hero
04 — Statement
05 — Problema
06 — Sobre Suellen
07 — Serviços
08 — Shari
09 — Segmentos
10 — Método
11 — Transformação
12 — Evidências
13 — FAQ
14 — CTA Final
15 — Footer
```

A inclusão de uma seção depende da disponibilidade de conteúdo real.

Nunca criar cases, números, depoimentos ou resultados fictícios.

---

# 7. Preloader

Criar uma introdução curta.

Elementos:

- logo
- linha/acento visual
- entrada do conteúdo

Duração aproximada:

`600–1200ms`, apenas quando necessário.

Não atrasar artificialmente a navegação.

Motion:

- opacity
- scale
- scaleX
- reveal

Com `prefers-reduced-motion`, reduzir ou remover o movimento.

---

# 8. Header

Inicialmente integrado ao hero.

Durante o scroll:

- fundo branco
- borda discreta
- leve sombra
- redução sutil da altura

Navegação:

- Início
- Sobre
- Serviços
- Segmentos
- Como funciona
- Dúvidas

CTA:

**Falar com a Suellen**

No mobile utilizar menu acessível.

---

# 9. Hero

## Objetivo

Comunicar imediatamente:

- o que a Suh Nutri faz
- para quem
- qual problema resolve
- qual ação o visitante pode tomar

## Conteúdo

Eyebrow:

**CONSULTORIA EM SEGURANÇA DOS ALIMENTOS**

H1:

**Transformando exigências sanitárias em qualidade, segurança e resultados para o seu negócio.**

Texto:

**Consultoria especializada para serviços de alimentação que buscam melhorar processos, fortalecer a segurança dos alimentos e adequar sua operação às exigências sanitárias.**

CTAs:

- Falar com a Suellen
- Conhecer a consultoria

## Visual

Priorizar fotografia real da Suellen em visita técnica.

Evitar fotografia genérica de banco de imagens quando houver material real disponível.

## Motion

O hero deve ser um dos pontos de maior impacto do site.

Implementar:

- entrada sequencial do eyebrow
- reveal da headline por linhas
- entrada da descrição
- entrada dos CTAs
- reveal/scale da imagem
- parallax sutil
- transformação do hero durante o scroll
- transição contínua para a seção seguinte

Não usar scroll hijacking.

---

# 10. Statement

Seção editorial com bastante espaço em branco.

Mensagem:

**Qualidade deve fazer parte da rotina. Não apenas da fiscalização.**

Motion:

- reveal da frase
- opacity progressiva
- clip/reveal
- pequena linha ou elemento verde acompanhando o conteúdo

Objetivo: criar uma pausa narrativa após o hero.

---

# 11. Problema

Mostrar situações reais que justificam a consultoria.

Três pilares:

### 01 — Processos

Processos sem padrão ou pouco claros.

### 02 — Documentação

Documentação desorganizada ou desconectada da operação.

### 03 — Equipe

Equipes que precisam de orientação e treinamento.

A seção deve mostrar contexto, não criar medo.

Evitar linguagem alarmista.

Motion:

- entrada por blocos
- stagger
- destaque progressivo do item ativo
- saída/reentrada reversível durante scroll quando apropriado

---

# 12. Sobre Suellen

## Objetivo

Construir autoridade e proximidade.

Conteúdo:

**Suellen de Jesus Bernardino**

**Nutricionista — CRN-3 85800**

Apresentar:

- experiência informada
- especialização em consultoria para serviços de alimentação
- abordagem prática
- atuação próxima às equipes

## Visual

Fotografia real em destaque.

Possível efeito de máscara/reveal:

```text
imagem inicial
    ↓
clip/reveal
    ↓
imagem completa
```

Parallax muito sutil.

---

# 13. Serviços

Não utilizar uma grade com 11 cards iguais.

Agrupar em quatro grandes áreas.

## 01 — Segurança dos alimentos

- Boas Práticas de Manipulação
- controle de temperatura
- monitoramentos
- orientação operacional

## 02 — Documentação e conformidade

- Manual de Boas Práticas
- POPs
- documentação obrigatória
- adequação às legislações sanitárias
- regularização documental

## 03 — Treinamento e qualidade

- treinamento de manipuladores
- auditorias
- checklists sanitários
- gestão da qualidade
- melhoria contínua

## 04 — Consultoria especializada

- acompanhamento para fiscalizações
- redução de desperdícios
- otimização de processos
- consultoria para restaurantes orientais
- adequação do Shari

## Motion

Essa deve ser uma das grandes experiências do site.

Usar:

- números grandes
- reveal
- stagger
- mudança de opacidade
- conteúdo relacionado ao item ativo
- progressão visual
- sincronização com scroll

A animação precisa funcionar para baixo e para cima.

---

# 14. Destaque Shari

Criar seção específica para:

**Consultoria especializada para restaurantes orientais**

Conteúdo:

Orientação técnica para processos relacionados ao preparo e adequação do Shari (arroz acidificado), considerando os procedimentos e controles necessários à segurança dos alimentos.

Visual:

- fundo verde escuro
- fotografia de operação oriental quando disponível
- texto em alto contraste

Motion:

- imagem com scale sutil
- reveal lateral do conteúdo
- transição de fundo

---

# 15. Segmentos

Segmentos:

- Restaurantes
- Padarias
- Lanchonetes
- Pizzarias
- Supermercados
- Açougues
- Confeitarias
- Cozinhas industriais
- demais serviços de alimentação

Evitar grid excessivamente genérico.

Preferir composição tipográfica/editorial.

Exemplo:

```text
RESTAURANTES

PADARIAS

PIZZARIAS

SUPERMERCADOS

AÇOUGUES

CONFEITARIAS
```

O item relacionado ao progresso do scroll pode ganhar destaque enquanto os demais ficam visualmente mais suaves.

---

# 16. Método

Título:

**Da análise à melhoria contínua.**

Etapas:

```text
01 — Diagnóstico
02 — Planejamento
03 — Adequação
04 — Treinamento
05 — Monitoramento
```

Apresentar como fluxo de trabalho proposto, sem afirmar que todos os projetos obrigatoriamente seguem exatamente o mesmo processo.

## Motion principal

Criar uma timeline visual:

```text
01 ───── 02 ───── 03 ───── 04 ───── 05
```

A linha progride conforme o usuário rola.

No mobile:

```text
01
│
02
│
03
│
04
│
05
```

O usuário deve continuar rolando normalmente.

Não prender o scroll.

---

# 17. Transformação

Mostrar benefícios sem inventar resultados.

Exemplos:

### Processos mais claros

Padronização e clareza para a equipe.

### Equipes mais preparadas

Conhecimento aplicado à rotina.

### Mais controle operacional

Monitoramentos e procedimentos acompanhados.

### Menos desperdício

Identificação de oportunidades para melhorar processos e utilização de recursos.

Evitar promessas absolutas.

---

# 18. Evidências

Somente utilizar:

- fotos reais
- treinamentos reais
- auditorias reais
- documentos autorizados
- depoimentos reais
- resultados reais
- certificados reais

Se esses materiais não existirem, substituir a seção por conteúdo institucional/benefícios.

Nunca criar:

- clientes fictícios
- números fictícios
- depoimentos fictícios
- certificados fictícios
- resultados fictícios

---

# 19. FAQ

Perguntas sugeridas:

- A consultoria atende quais tipos de estabelecimentos?
- A consultoria inclui treinamento dos funcionários?
- Vocês elaboram Manual de Boas Práticas e POPs?
- A consultoria pode acompanhar uma fiscalização sanitária?
- É possível fazer uma avaliação inicial do estabelecimento?
- Como funciona o atendimento?
- A consultoria atende restaurantes orientais?

Usar Accordion do shadcn/ui.

Motion discreto.

---

# 20. CTA final

Fundo verde escuro.

Headline:

**Vamos melhorar a sua operação?**

Texto:

**Converse com a Suellen e conte um pouco sobre o seu estabelecimento.**

CTA:

**Falar com a Suellen**

A seção deve ser visualmente forte, mas simples.

---

# 21. Footer

Conteúdo:

**SUH NUTRI**  
Consultoria em Segurança dos Alimentos

**Suellen de Jesus Bernardino**  
Nutricionista — CRN-3 85800

Links institucionais e contato.

Adicionar políticas necessárias quando o projeto possuir formulários, analytics, cookies ou outras funcionalidades que exijam documentação.

---

# 22. Sistema de animação

Criar uma camada dedicada:

```text
components/
└── motion/
    ├── MotionReveal.tsx
    ├── MotionText.tsx
    ├── MotionImage.tsx
    ├── MotionStagger.tsx
    ├── ScrollProgress.tsx
    └── MotionProvider.tsx
```

E hooks quando necessários:

```text
hooks/
├── useScrollProgress.ts
├── useMediaQuery.ts
├── useReducedMotion.ts
└── useIntersection.ts
```

Não criar abstrações desnecessárias.

---

# 23. Técnicas de motion

Priorizar:

- opacity
- transform
- scale
- translate
- clip-path
- stagger
- timeline
- scroll progress
- parallax sutil
- reveal por máscara
- mudanças de estado

Evitar:

- partículas
- cursor customizado pesado
- 3D sem finalidade
- elementos girando
- bounce excessivo
- parallax exagerado
- scroll hijacking
- animação de cada palavra sem necessidade

---

# 24. Reversibilidade

As animações de scroll devem ser pensadas como estados.

Ao descer:

```text
estado A → estado B
```

Ao subir:

```text
estado B → estado A
```

Evitar animações que só aconteçam uma vez quando isso prejudicar a experiência.

---

# 25. Reduced Motion

Sempre respeitar:

```css
prefers-reduced-motion: reduce
```

Quando ativado:

- reduzir movimento
- remover parallax decorativo
- evitar timelines longas
- manter conteúdo imediatamente disponível
- manter interações funcionais

---

# 26. Performance

Animar preferencialmente:

```text
transform
opacity
clip-path
```

Evitar mudanças contínuas em:

```text
width
height
top
left
margin
padding
```

Usar:

- `next/image`
- formatos modernos
- lazy loading abaixo da dobra
- Server Components
- client boundaries pequenas
- importação modular do anime.js quando aplicável

Medir Core Web Vitals.

---

# 27. Arquitetura de código

Estrutura sugerida:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
│
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   │
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── statement.tsx
│   │   ├── problem.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── shari.tsx
│   │   ├── segments.tsx
│   │   ├── process.tsx
│   │   ├── transformation.tsx
│   │   ├── evidence.tsx
│   │   ├── faq.tsx
│   │   └── final-cta.tsx
│   │
│   ├── motion/
│   └── ui/
│
├── hooks/
├── lib/
│   ├── animations/
│   ├── constants/
│   └── utils/
│
└── content/
    └── site.ts
```

---

# 28. Conteúdo

Manter conteúdo separado dos componentes:

```ts
content/site.ts
```

Estrutura aproximada:

```ts
siteContent = {
  hero: {},
  statement: {},
  about: {},
  services: [],
  segments: [],
  process: [],
  transformation: [],
  faq: []
}
```

Isso permite alterar copy sem modificar a estrutura dos componentes.

---

# 29. Design System

Seguir `.agents/context/brand.md` e `.agents/rules/design-system.md`.

Cores:

```text
#4F8F4F — Verde principal
#8BC34A — Verde claro
#2E7D32 — Verde escuro
#FFFFFF — Branco
#F5F5F5 — Cinza claro
#424242 — Cinza escuro
```

Tipografia:

- Montserrat Bold para títulos
- Poppins Regular para corpo

Direção:

**clean + profissional + orgânica + técnica + acolhedora**

---

# 30. shadcn/ui

Utilizar principalmente:

- Button
- Accordion
- Sheet

Não usar componentes de shadcn apenas para preencher a página.

A identidade deve ser própria.

---

# 31. SEO

Implementar:

- title
- meta description
- Open Graph
- favicon
- canonical quando aplicável
- sitemap
- robots
- headings semânticos
- alt text
- structured data quando houver informação suficiente

Termos de interesse:

- consultoria em segurança dos alimentos
- consultoria para restaurantes
- boas práticas de manipulação
- consultoria sanitária
- qualidade em serviços de alimentação
- nutricionista consultora de alimentos
- treinamento de manipuladores
- regularização sanitária

Não utilizar keyword stuffing.

---

# 32. Fases de implementação

## Fase 1 — Foundation

- Next.js
- TypeScript
- Tailwind
- shadcn
- fontes
- tokens
- estrutura de pastas
- layout
- Header
- Footer
- conteúdo

## Fase 2 — Estrutura

Implementar todas as seções sem animações complexas.

Primeiro validar:

- hierarquia
- copy
- espaçamento
- responsividade
- composição visual

## Fase 3 — Motion system

Primeiro:

- reveal
- stagger
- image reveal

Depois:

- scroll progress
- parallax
- timelines

Depois:

- hero cinematic transition
- services interaction
- process timeline

## Fase 4 — Refinamento

- easing
- duração
- delays
- mobile
- reduced motion
- performance
- microinterações

## Fase 5 — QA

Testar:

- Chrome
- Firefox
- Safari
- desktop
- tablet
- mobile
- teclado
- reduced motion
- Lighthouse
- Core Web Vitals

---

# 33. Intensidade de motion

| Seção | Intensidade |
|---|---:|
| Preloader | ★★★ |
| Header | ★★ |
| Hero | ★★★★★ |
| Statement | ★★★★ |
| Problema | ★★★ |
| Sobre | ★★★★ |
| Serviços | ★★★★★ |
| Shari | ★★★★ |
| Segmentos | ★★★★ |
| Método | ★★★★★ |
| Transformação | ★★★★ |
| Evidências | ★★★★ |
| FAQ | ★★ |
| CTA | ★★★ |
| Footer | ★ |

Os três grandes momentos de motion serão:

1. Hero
2. Serviços
3. Método

---

# 34. Easing

Usar easing coerente com o movimento.

Preferências:

- `easeOutExpo` para entradas impactantes
- `easeInOut` para movimentos contínuos
- `easeOutCubic` para microinterações

Não usar `linear` indiscriminadamente.

---

# 35. Princípio final

A landing page não deve ser:

> uma página estática com animações adicionadas depois.

Ela deve ser projetada desde o início considerando:

```text
estado inicial
     ↓
interação / scroll
     ↓
estado intermediário
     ↓
estado final
```

Cada seção deve ter uma função narrativa.

A animação deve melhorar a compreensão e percepção de qualidade, nunca competir com o conteúdo.

O resultado desejado é uma experiência:

**profissional, premium, fluida, humana, técnica e memorável.**
