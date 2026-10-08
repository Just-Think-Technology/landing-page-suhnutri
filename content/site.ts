/**
 * Conteúdo aprovado da landing page.
 * Fotos em /images são referências temporárias de operação (Unsplash)
 * e devem ser trocadas por fotos reais da Suellen e dos estabelecimentos.
 * O botão "Falar com a Suellen" abre o WhatsApp. O e-mail aparece na seção de contato e no rodapé.
 */

const whatsapp = "5511997107237"
const email = "suhnutriconsultoria@yahoo.com.br"

export const siteContent = {
  name: "Suh Nutri Consultoria",
  professional: {
    name: "Suellen de Jesus Bernardino",
    credential: "Nutricionista — CRN-3 85800",
  },
  contact: {
    label: "Falar com a Suellen",
    whatsapp,
    email,
    href: `https://wa.me/${whatsapp}`,
    emailHref: `mailto:${email}`,
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Segmentos", href: "#segmentos" },
    { label: "Como funciona", href: "#metodo" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
  hero: {
    eyebrow: "Consultoria em segurança dos alimentos",
    title:
      "Transformando exigências sanitárias em qualidade, segurança e resultados para o seu negócio.",
    text: "Consultoria especializada para serviços de alimentação que buscam melhorar processos, fortalecer a segurança dos alimentos e adequar sua operação às exigências sanitárias.",
    primaryCta: "Falar com a Suellen",
    secondaryCta: "Conhecer a consultoria",
    secondaryHref: "#servicos",
    image: {
      src: "/images/hero.jpg",
      alt: "Cozinheiro em uma linha de cozinha profissional, finalizando pratos.",
      width: 1600,
      height: 1067,
      temporary: true,
    },
  },
  statement: {
    text: "Qualidade deve fazer parte da rotina. Não apenas da fiscalização.",
  },
  problem: {
    eyebrow: "Contexto",
    title: "Segurança dos alimentos se sustenta na rotina da operação.",
    text: "A consultoria existe para organizar o que a equipe faz todos os dias: processo, documento e orientação prática.",
    items: [
      {
        index: "01",
        title: "Processos",
        text: "Processos sem padrão ou pouco claros dificultam a repetição do que já foi combinado com a equipe.",
      },
      {
        index: "02",
        title: "Documentação",
        text: "Documentação desorganizada ou desconectada da operação deixa o estabelecimento sem referência no dia a dia.",
      },
      {
        index: "03",
        title: "Equipe",
        text: "Equipes que precisam de orientação e treinamento aplicam melhor o que está escrito quando alguém acompanha a rotina.",
      },
    ],
  },
  about: {
    eyebrow: "Sobre",
    name: "Suellen de Jesus Bernardino",
    credential: "Nutricionista — CRN-3 85800",
    paragraphs: [
      "Suellen de Jesus Bernardino é nutricionista especializada em consultoria para serviços de alimentação. Atua na implantação e no monitoramento de Boas Práticas de Manipulação, segurança dos alimentos, qualidade operacional e adequação às legislações sanitárias vigentes.",
      "O trabalho é feito lado a lado com as equipes, com conhecimento aplicado à rotina de cada estabelecimento e soluções práticas para a operação real.",
    ],
    image: {
      src: "/images/suellen.png",
      alt: "Foto de Suellen de Jesus Bernardino, nutricionista e consultora em segurança dos alimentos.",
      width: 1600,
      height: 1067,
      temporary: true,
    },
  },
  services: {
    eyebrow: "Serviços",
    title: "Quatro frentes para organizar a operação.",
    text: "Os serviços se agrupam pelo que o estabelecimento precisa resolver, da rotina de manipulação ao acompanhamento da equipe.",
    groups: [
      {
        index: "01",
        title: "Segurança dos alimentos",
        text: "Orientação para a manipulação, os controles e o acompanhamento da rotina.",
        items: [
          "Boas Práticas de Manipulação",
          "Controle de temperatura",
          "Monitoramentos",
          "Orientação operacional",
        ],
      },
      {
        index: "02",
        title: "Documentação e conformidade",
        text: "Organização dos registros que a operação precisa usar, não só guardar.",
        items: [
          "Manual de Boas Práticas",
          "POPs",
          "Documentação obrigatória",
          "Adequação às legislações sanitárias",
          "Regularização documental",
        ],
      },
      {
        index: "03",
        title: "Treinamento e qualidade",
        text: "A equipe aprende o procedimento e a rotina passa a ser acompanhada.",
        items: [
          "Treinamento de manipuladores",
          "Auditorias",
          "Checklists sanitários",
          "Gestão da qualidade",
          "Melhoria contínua",
        ],
      },
      {
        index: "04",
        title: "Consultoria especializada",
        text: "Apoio para fiscalização, processos e operações com exigências específicas.",
        items: [
          "Acompanhamento para fiscalizações",
          "Redução de desperdícios",
          "Otimização de processos",
          "Consultoria para restaurantes orientais",
          "Adequação do Shari",
        ],
      },
    ],
  },
  shari: {
    eyebrow: "Restaurantes orientais",
    title: "Consultoria especializada para restaurantes orientais",
    text: "Orientação técnica para processos relacionados ao preparo e adequação do Shari (arroz acidificado), considerando os procedimentos e controles necessários à segurança dos alimentos.",
    image: {
      src: "/images/shari.jpg",
      alt: "Barca de sushis e sashimis em um serviço de alimentação.",
      width: 1600,
      height: 1280,
      temporary: true,
    },
  },
  segments: {
    eyebrow: "Segmentos",
    title: "Estabelecimentos de alimentação, cada um com a sua rotina.",
    items: [
      "Restaurantes",
      "Padarias",
      "Lanchonetes",
      "Pizzarias",
      "Supermercados",
      "Açougues",
      "Confeitarias",
      "Cozinhas industriais",
    ],
    note: "E demais serviços de alimentação.",
  },
  process: {
    eyebrow: "Como funciona",
    title: "Da análise à melhoria contínua.",
    text: "Um fluxo de trabalho proposto. Cada projeto é ajustado à realidade do estabelecimento e nem toda consultoria percorre as etapas do mesmo jeito.",
    steps: [
      {
        index: "01",
        title: "Diagnóstico",
        text: "Leitura da operação, dos processos, da documentação e da rotina da equipe.",
      },
      {
        index: "02",
        title: "Planejamento",
        text: "Definição do que será organizado, em que ordem e com qual prioridade.",
      },
      {
        index: "03",
        title: "Adequação",
        text: "Ajuste de procedimentos, registros e práticas à operação do estabelecimento.",
      },
      {
        index: "04",
        title: "Treinamento",
        text: "Orientação dos manipuladores para aplicar o que foi combinado na rotina.",
      },
      {
        index: "05",
        title: "Monitoramento",
        text: "Acompanhamento para manter os controles e corrigir o que sair do combinado.",
      },
    ],
  },
  transformation: {
    eyebrow: "O que muda na operação",
    title: "Mais clareza para quem executa o trabalho.",
    items: [
      {
        title: "Processos mais claros",
        text: "Padronização e clareza para a equipe.",
      },
      {
        title: "Equipes mais preparadas",
        text: "Conhecimento aplicado à rotina.",
      },
      {
        title: "Mais controle operacional",
        text: "Monitoramentos e procedimentos acompanhados.",
      },
      {
        title: "Menos desperdício",
        text: "Identificação de oportunidades para melhorar processos e a utilização de recursos.",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        question: "A consultoria atende quais tipos de estabelecimentos?",
        answer:
          "Restaurantes, padarias, lanchonetes, pizzarias, supermercados, açougues, confeitarias, cozinhas industriais e demais serviços de alimentação.",
      },
      {
        question: "A consultoria inclui treinamento dos funcionários?",
        answer:
          "O treinamento de manipuladores de alimentos faz parte dos serviços. A inclusão em cada projeto depende do que a operação precisa.",
      },
      {
        question: "Vocês elaboram Manual de Boas Práticas e POPs?",
        answer:
          "Sim. A elaboração do Manual de Boas Práticas, dos POPs e da documentação obrigatória faz parte da frente de documentação e conformidade, junto com a regularização documental.",
      },
      {
        question: "A consultoria pode acompanhar uma fiscalização sanitária?",
        answer:
          "O acompanhamento para fiscalizações sanitárias é um dos serviços. Ele orienta a preparação e a rotina do estabelecimento. Não substitui a responsabilidade de quem opera e não promete o resultado da fiscalização.",
      },
      {
        question: "É possível fazer uma avaliação inicial do estabelecimento?",
        answer:
          "Sim. A conversa começa pelo entendimento da operação. O fluxo proposto parte de um diagnóstico de processos, documentação e rotina da equipe antes de definir os próximos passos.",
      },
      {
        question: "Como funciona o atendimento?",
        answer:
          "Um caminho possível é diagnóstico, planejamento, adequação, treinamento e monitoramento. As etapas são uma proposta de trabalho e se ajustam ao estabelecimento.",
      },
      {
        question: "A consultoria atende restaurantes orientais?",
        answer:
          "Sim. Há consultoria para restaurantes orientais e orientação para a adequação do Shari (arroz acidificado), com foco nos controles de segurança dos alimentos.",
      },
    ],
  },
  finalCta: {
    title: "Vamos melhorar a sua operação?",
    text: "Converse com a Suellen e conte um pouco sobre o seu estabelecimento.",
    cta: "Falar com a Suellen",
  },
  footer: {
    brand: "Suh Nutri",
    line: "Consultoria em Segurança dos Alimentos",
  },
  notFound: {
    title: "Página não encontrada",
    text: "Esse endereço não faz parte do site da Suh Nutri Consultoria.",
    home: "Voltar ao início",
    contact: "Falar com a Suellen",
  },
  seo: {
    title: "Suh Nutri Consultoria | Segurança dos alimentos",
    description:
      "Consultoria para serviços de alimentação em segurança dos alimentos, Boas Práticas de Manipulação, qualidade operacional e adequação às exigências sanitárias.",
  },
} as const
