export const site = {
  name: "DeehZigner",
  owner: "Anderson Nogueira Silva",
  role: "Designer Gráfico / Arte Finalista",
  whatsapp: "5500000000000", // TODO: número real da Deeh
  whatsappMessage:
    "Olá Anderson! Vi seu site e quero conversar sobre um projeto de design.",
  instagram: "https://instagram.com/deehzigner",
  instagramHandle: "@deehzigner",
  email: "andersondesigner2021@gmail.com",
  serviceArea: "100% remoto — atendo clientes de todo o Brasil e do exterior",
  hours: "Seg a Sex — 9h às 18h",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
] as const;

export const stats = [
  { value: "+5.000", label: "Projetos entregues" },
  { value: "+12", label: "Anos de experiência" },
  { value: "+400", label: "Clientes satisfeitos" },
  { value: "Qualidade", label: "Aprovada e elogiada por todos" },
] as const;

export type Service = {
  title: string;
  description: string;
  icon: keyof typeof serviceIconMap;
};

// chaves mapeadas para ícones lucide no componente
export const serviceIconMap = {
  "pen-tool": "pen-tool",
  monitor: "monitor",
  fingerprint: "fingerprint",
  megaphone: "megaphone",
  sparkles: "sparkles",
  "package-2": "package-2",
} as const;

export const services: Service[] = [
  {
    title: "Design Gráfico",
    icon: "pen-tool",
    description:
      "Criação de projetos gráficos, trabalhos exclusivos para o público determinado. Folders, cartão de visita, pastas, folhetos, flyers, catálogos, rótulos, etiquetas, informativos, entre outros tipos de materiais gráficos.",
  },
  {
    title: "Design Digital",
    icon: "monitor",
    description:
      "Criação e produção de layouts usuais e acessíveis, acompanhando as tecnologias e tendências do mercado. Site institucional, loja virtual (e-commerce), portais, landing page, marketing e todos os materiais digitais.",
  },
  {
    title: "Identidade Visual",
    icon: "fingerprint",
    description:
      "Criação de identidade visual, incluindo manual de aplicação personalizado da marca, em diversos formatos, tipos e estilos para publicações e orientações, juntamente com a criação do material de papelaria.",
  },
  {
    title: "Comunicação Visual",
    icon: "megaphone",
    description:
      "Transformo ideias em soluções visuais que destacam sua marca e fortalecem sua comunicação. Criação de artes para fachadas, banners, adesivos, placas, cartões, mídias sociais e materiais personalizados, com qualidade, criatividade e profissionalismo.",
  },
  {
    title: "Criação de Logotipos",
    icon: "sparkles",
    description:
      "Crio logotipos únicos e profissionais que representam a essência da sua marca. Desenvolvo identidades visuais marcantes, modernas e estratégicas para destacar seu negócio e transmitir credibilidade.",
  },
  {
    title: "Rótulos e Estampa",
    icon: "package-2",
    description:
      "Realizo serviços de design gráfico para empresas, marcas e projetos de todos os segmentos. Desenvolvo rótulos, etiquetas, catálogos, estampas, ilustrações, materiais para impressão, artes para redes sociais e muito mais, sempre com criatividade, qualidade e atenção aos detalhes.",
  },
];

export type PortfolioCategory = {
  name: string;
  tags: string[];
};

export const portfolioCategories: PortfolioCategory[] = [
  { name: "Logo", tags: ["Logotipo", "Identidade visual", "Sub marca"] },
  { name: "Gráfica", tags: ["Cartão de visita", "Flyer", "Banners", "Outros"] },
  { name: "Rede social", tags: ["Post", "Carrosséis"] },
  { name: "Web", tags: ["Sites", "Loja virtual", "Landing page", "Cartão digital"] },
  { name: "Rótulos e etiquetas", tags: ["Rótulos", "Etiqueta", "Pantone"] },
  { name: "Desenho", tags: ["Ilustração", "Vetorização"] },
  { name: "Estampa", tags: ["Camiseta", "Canecas", "Bonés", "Outros"] },
  { name: "Fachada", tags: ["Placas", "Mockups"] },
];

export type PortfolioItem = {
  src: string;
  client: string;
  category: string;
};

export const portfolioItems: PortfolioItem[] = [
  { src: "/portfolio/work-1.webp", client: "Marcela Oliveira · Nutricionista", category: "Logo & Identidade" },
  { src: "/portfolio/work-2.webp", client: "Sparta Solar · Engenharia", category: "Logo" },
  { src: "/portfolio/work-3.webp", client: "Ministério de Louvor T.O.C.P.S", category: "Logo" },
  { src: "/portfolio/work-4.webp", client: "Cel Store · Assistência Técnica", category: "Logo" },
  { src: "/portfolio/work-5.webp", client: "Rancho Frei Damião", category: "Logo" },
  { src: "/portfolio/work-6.webp", client: "Alfa Designer", category: "Logo" },
  { src: "/portfolio/work-7.jpg", client: "AW Imóveis", category: "Logo & Identidade" },
  { src: "/portfolio/work-8.jpg", client: "Paulo Henrique · Personal Trainer", category: "Logo" },
  { src: "/portfolio/work-9.jpg", client: "Marcia Almeida · Advogada", category: "Logo & Identidade" },
  { src: "/portfolio/work-10.jpg", client: "Hanami · Papelaria Personalizada", category: "Logo" },
  { src: "/portfolio/work-11.jpg", client: "Marcia Moura · Advogada", category: "Logo" },
];

export const faq = [
  {
    q: "Quanto tempo demora para ficar pronto?",
    a: "O prazo varia de acordo com o serviço escolhido: de 2 a 7 dias úteis. O prazo exato está indicado em cada serviço.",
  },
  {
    q: "Posso parcelar no cartão?",
    a: "Sim! Porém, o parcelamento do serviço terá o acréscimo dos juros do cartão de crédito.",
  },
  {
    q: "Os arquivos são meus após a entrega?",
    a: "Sim. Após a entrega final e pagamento completo, todos os direitos de uso dos arquivos são transferidos para você. Você pode usar em qualquer aplicação.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Cada projeto inclui 4 rodadas de alterações totalmente livres, e trabalho junto com você até alinhar o resultado com sua visão. Caso, mesmo após as revisões, o projeto não atenda suas expectativas: para pagamentos via PIX (duas etapas), a primeira etapa não é reembolsável, pois cobre o trabalho já realizado de pesquisa e criação. Para pagamentos integrais via cartão, é feita a devolução de 50% do valor. Meu compromisso é entregar algo que você tenha orgulho de usar — por isso o acompanhamento é próximo do início ao fim.",
  },
  {
    q: "O que acontece se eu mudar o briefing durante o projeto?",
    a: "Alterações no briefing após o início do projeto podem gerar custo adicional, dependendo do escopo da mudança.",
  },
  {
    q: "Como funciona o pagamento via PIX em duas etapas?",
    a: "Você paga 50% do valor na contratação para iniciar o projeto. Os outros 50% são pagos somente após a aprovação final do trabalho. Assim, você só conclui o pagamento quando estiver satisfeito.",
  },
  {
    q: "Você trabalha com qualquer segmento?",
    a: "Sim. Atuando no mercado desde 2014, já atendi empresas de alimentação, tecnologia, saúde, moda, pet, fitness, advocacia e muitos outros nichos.",
  },
  {
    q: "Como envio minhas referências e materiais?",
    a: "Após a contratação, você pode enviar tudo diretamente pelo WhatsApp: imagens de referência, textos, logos antigos, qualquer material que ajude no briefing.",
  },
  {
    q: "Qual o prazo de feedback para manter o projeto fluindo?",
    a: "Peço que responda em até 48 horas úteis. Projetos sem retorno por 7 dias serão pausados e retomados quando você retornar.",
  },
  {
    q: "Quais arquivos recebo na entrega?",
    a: "Você recebe todos os formatos profissionais: vetorial editável (.AI, .SVG, .EPS), PDF em CMYK e RGB, imagens em alta resolução (.JPG, .PNG com fundo transparente). Tudo pronto para usar em qualquer aplicação — digital ou impressa.",
  },
];
