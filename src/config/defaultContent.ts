export interface TeamMember {
  id: string;
  name: string;
  crp: string;
  description: string;
  image: string;
  whatsapp: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContent {
  site: {
    title: string;
    description: string;
    keywords: string;
    logoText: string;
  };
  nav: {
    links: NavLink[];
  };
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText: string;
    ctaHref: string;
  };
  about: {
    sectionTitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Service[];
  };
  team: {
    sectionTitle: string;
    sectionSubtitle: string;
    members: TeamMember[];
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    professionalLabel: string;
    messagePlaceholder: string;
    submitText: string;
    emailjsServiceId: string;
    emailjsTemplateId: string;
    emailjsPublicKey: string;
  };
  footer: {
    text: string;
    privacyLabel: string;
  };
}

export const defaultContent: SiteContent = {
  site: {
    title: "Nome do Site",
    description: "Descrição do site para mecanismos de busca.",
    keywords: "palavra-chave 1, palavra-chave 2, palavra-chave 3",
    logoText: "Logo",
  },
  nav: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Equipe", href: "#equipe" },
      { label: "Contato", href: "#contato" },
    ],
  },
  hero: {
    title: "Título Principal",
    subtitle: "Subtítulo ou slogan.",
    backgroundImage: "/assets/hero-bg.jpg",
    ctaText: "Saiba mais",
    ctaHref: "#sobre",
  },
  about: {
    sectionTitle: "Sobre",
    paragraph1: "Parágrafo 1. Apresente sua empresa, projeto ou serviço aqui.",
    paragraph2: "Parágrafo 2. Continue a apresentação com mais detalhes.",
    paragraph3: "Parágrafo 3 (opcional). Deixe em branco para ocultar.",
  },
  services: {
    sectionTitle: "Serviços",
    sectionSubtitle: "O que oferecemos",
    items: [
      {
        id: "1",
        icon: "Star",
        title: "Serviço 1",
        description: "Descrição do serviço 1.",
      },
      {
        id: "2",
        icon: "Heart",
        title: "Serviço 2",
        description: "Descrição do serviço 2.",
      },
      {
        id: "3",
        icon: "Shield",
        title: "Serviço 3",
        description: "Descrição do serviço 3.",
      },
      {
        id: "4",
        icon: "Leaf",
        title: "Serviço 4",
        description: "Descrição do serviço 4.",
      },
    ],
  },
  team: {
    sectionTitle: "Equipe",
    sectionSubtitle: "Conheça quem faz parte do projeto",
    members: [
      {
        id: "1",
        name: "Nome 1",
        crp: "Cargo ou registro",
        description: "Breve descrição da pessoa. Formação, experiência ou especialidade.",
        image: "https://placehold.co/400x500/e8e4dc/7a6e5f?text=Foto",
        whatsapp: "",
      },
      {
        id: "2",
        name: "Nome 2",
        crp: "Cargo ou registro",
        description: "Breve descrição da pessoa. Formação, experiência ou especialidade.",
        image: "https://placehold.co/400x500/dce4e8/5f6e7a?text=Foto",
        whatsapp: "",
      },
      {
        id: "3",
        name: "Nome 3",
        crp: "Cargo ou registro",
        description: "Breve descrição da pessoa. Formação, experiência ou especialidade.",
        image: "https://placehold.co/400x500/e4dce8/6e5f7a?text=Foto",
        whatsapp: "",
      },
    ],
  },
  contact: {
    sectionTitle: "Contato",
    sectionSubtitle: "Entre em contato conosco",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu e-mail",
    professionalLabel: "Para quem é a mensagem?",
    messagePlaceholder: "Sua mensagem",
    submitText: "Enviar",
    emailjsServiceId: "",
    emailjsTemplateId: "",
    emailjsPublicKey: "",
  },
  footer: {
    text: "© {year} Nome do Site. Todos os direitos reservados.",
    privacyLabel: "Política de Privacidade",
  },
};
