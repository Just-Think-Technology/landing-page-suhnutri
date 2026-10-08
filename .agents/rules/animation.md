# Animation Rules — anime.js

## Princípio

Animação existe para orientar atenção, criar continuidade e dar percepção de qualidade.

Nunca usar animação apenas porque a biblioteca está disponível.

## Direção

Preferir:
- reveal por opacity + translate
- stagger curto em listas
- scale muito sutil em imagens
- linhas/divisores que acompanham a entrada da seção
- pequenos estados de hover
- progressão narrativa durante o scroll

Evitar:
- parallax exagerado
- bounce
- textos girando
- elementos voando pela tela
- animações longas que atrasem o acesso ao conteúdo
- efeitos que prejudicam leitura

## Scroll

A experiência deve funcionar ao rolar para baixo e para cima.

Quando uma animação depender de viewport:
- evitar efeitos que executem apenas uma vez se isso quebrar a continuidade
- preferir estados reversíveis
- não prender o usuário em timelines
- não bloquear interação

## Performance

- animar `transform` e `opacity` sempre que possível
- evitar animação de propriedades que provoquem layout
- observar quantidade de elementos animados simultaneamente
- respeitar `prefers-reduced-motion`
- limpar observers/listeners quando necessário
- não inicializar anime.js em Server Components

## Reduced motion

Com `prefers-reduced-motion: reduce`:
- remover movimentos decorativos
- manter conteúdo visível
- manter estados de interação
- não esconder informação esperando uma animação
