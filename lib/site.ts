export const site = {
  name: "DeehZigner",
  owner: "Anderson Nogueira Silva",
  role: "Designer Gráfico / Arte Finalista",
  whatsapp: "5511991064072",
  whatsappMessage:
    "Olá Anderson! Vi seu site e quero conversar sobre um projeto de design.",
  instagram: "https://instagram.com/deehzigner",
  instagramHandle: "@deehzigner",
  email: "andersondesigner2021@gmail.com",
  serviceArea: "100% remoto - atendo clientes de todo o Brasil e do exterior",
  hours: "Seg a Sex - 9h às 18h",
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
  { value: "+5.000", label: "Projetos" },
  { value: "+12", label: "Anos de experiência" },
  { value: "+400", label: "Clientes satisfeitos" },
  { value: "Qualidade", label: "Aprovada e elogiado por todos" },
] as const;

export type Service = {
  title: string;
  /** Ícone em /public/services/<icon>.webp (traço branco extraído do design). */
  icon: string;
  /** `\n` marca as quebras de linha do design (usadas só no desktop). */
  description: string;
};

export const services: Service[] = [
  {
    title: "Design Gráfico",
    icon: "design-grafico",
    description:
      "Criação de projetos gráficos, trabalhos exclusivos para o público\ndeterminado. Folders, cartão de visita, pastas, folhetos, flyers,\ncatálogos, rótulos, etiquetas, informativos, entre outros tipos de\nmateriais gráficos.",
  },
  {
    title: "Design Digital",
    icon: "design-digital",
    description:
      "Criação e produção de layouts usuais e acessíveis, acompanhando\nas tecnologias e tendências do mercado. Site Institucional,\nLoja Virtual (E-commerce), Portais, Landing page, Marketing\ne todos materiais digitais.",
  },
  {
    title: "Identidade Visual",
    icon: "identidade-visual",
    description:
      "Criação de identidade visual, incluindo manual de aplicação\npersonalizado da marca, em diversos formatos, tipos e estilos\npara publicações e orientações, juntamente com a criação do\nmaterial de papelaria.",
  },
  {
    title: "Comunicação visual",
    icon: "comunicacao-visual",
    description:
      "Transformo ideias em soluções visuais que destacam sua marca e\nfortalecem sua comunicação. Criação de artes para fachadas,\nbanners, adesivos, placas, cartões, mídias sociais e materiais\npersonalizados, com qualidade, criatividade e profissionalismo.",
  },
  {
    title: "Criação de Logotipos",
    icon: "logotipos",
    description:
      "Crio logotipos únicos e profissionais que representam a\nessência da sua marca. Desenvolvo identidades visuais\nmarcantes, modernas e estratégicas para destacar seu\nnegócio e transmitir credibilidade.",
  },
  {
    title: "Rótulos e Estampa",
    icon: "rotulos",
    description:
      "Realizo serviços de design gráfico para empresas, marcas e projetos\nde todos os segmentos. Desenvolvo rótulos, etiquetas, catálogos,\nestampas, ilustrações, materiais para impressão, artes para redes\nsociais e muito mais, sempre com criatividade, qualidade e atenção\naos detalhes.",
  },
];

export type PortfolioCategory = {
  name: string;
  tags: string[];
};
// Os trabalhos aparecem como capa (em rodízio) no card da categoria com o
// mesmo nome. Categorias sem trabalhos ficam com o card em branco, como no
// design, até ganharem imagens.

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
  /** Nome de uma categoria de `portfolioCategories`. */
  category: string;
  /** Link do trabalho publicado; o card da categoria passa a abri-lo. */
  href?: string;
};

export const portfolioItems: PortfolioItem[] = [
  { src: "/portfolio/logo-1.webp", client: "diversos clientes · Logotipos", category: "Logo" },
  { src: "/portfolio/logo-2.webp", client: "Acert Decor", category: "Logo" },
  { src: "/portfolio/logo-3.webp", client: "Acert Decor · Padrão da marca", category: "Logo" },
  { src: "/portfolio/logo-4.webp", client: "Acert Decor · Conceito e paleta", category: "Logo" },
  { src: "/portfolio/logo-5.webp", client: "Acert Decor · Aplicações", category: "Logo" },
  { src: "/portfolio/grafica-1.webp", client: "Design Coletivo · Papelaria", category: "Gráfica" },
  { src: "/portfolio/grafica-2.webp", client: "São Paulo Urban Fest · Banners", category: "Gráfica" },
  { src: "/portfolio/grafica-3.webp", client: "Café do Sol · Wind banners", category: "Gráfica" },
  { src: "/portfolio/rede-social-1.webp", client: "sorveteria · Post", category: "Rede social" },
  { src: "/portfolio/rede-social-2.webp", client: "lanchonete · Post", category: "Rede social" },
  { src: "/portfolio/rede-social-3.webp", client: "Park Education · Post", category: "Rede social" },
  { src: "/portfolio/web-1.webp", client: "santtos.dev · Site", category: "Web", href: "https://www.santtos.dev/" },
  { src: "/portfolio/rotulo-1.webp", client: "produtos artesanais · Rótulos", category: "Rótulos e etiquetas" },
  { src: "/portfolio/rotulo-2.webp", client: "Organic Brand · Etiquetas", category: "Rótulos e etiquetas" },
  { src: "/portfolio/desenho-1.webp", client: "ilustração · Alien no hambúrguer", category: "Desenho" },
  { src: "/portfolio/desenho-2.webp", client: "Sr. Konge · Ilustração", category: "Desenho" },
  { src: "/portfolio/desenho-3.webp", client: "mascote · Mouse", category: "Desenho" },
  { src: "/portfolio/estampa-1.webp", client: "Royal Pods · Camiseta", category: "Estampa" },
  { src: "/portfolio/estampa-2.webp", client: "caneca personalizada", category: "Estampa" },
  { src: "/portfolio/estampa-3.webp", client: "Tardezinha do Baby · Camiseta", category: "Estampa" },
  { src: "/portfolio/fachada-1.webp", client: "Evolution Modas · Fachada", category: "Fachada" },
  { src: "/portfolio/fachada-2.webp", client: "Diamond Motors · Fachada", category: "Fachada" },
  { src: "/portfolio/fachada-3.webp", client: "Drogaria Lucas · Fachada", category: "Fachada" },
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
