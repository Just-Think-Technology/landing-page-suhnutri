# Frontend Rules

## Architecture

- Next.js Server Components por padrão.
- `"use client"` somente onde interação, estado, browser APIs ou anime.js exigirem.
- Manter boundaries client próximas dos elementos interativos.
- Não transformar a página inteira em Client Component apenas para animação.
- Separar conteúdo, apresentação e comportamento.

## Styling

- Tailwind é o sistema visual principal.
- shadcn/ui somente quando um primitive realmente agregar valor.
- CSS customizado apenas para necessidades que não sejam bem resolvidas pelo Tailwind.
- Centralizar tokens de cor, tipografia, espaçamento e raios.
- Evitar valores arbitrários repetidos.

## Componentização

Componentizar por responsabilidade real:

- Header
- Hero
- SectionHeading
- ServiceGroup
- SegmentGrid
- ProcessSteps
- FAQ
- CTA
- Footer

Não criar dezenas de componentes de uma linha apenas para parecer "arquitetado".

## Responsividade

Projetar primeiro a hierarquia e depois os breakpoints.

Desktop, tablet e mobile devem possuir:
- boa leitura
- CTAs acessíveis
- imagens com crop adequado
- navegação funcional
- ordem semântica preservada

Nunca esconder informação importante apenas para economizar espaço no mobile.
