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
    title: "Nome da Clínica",
    description: "Descrição da clínica para mecanismos de busca. Edite este texto no painel de administração.",
    keywords: "psicologia, terapia, saúde mental, bem-estar",
    logoText: "Nome da Clínica",
  },
  nav: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Equipe", href: "#psicologos" },
      { label: "Contato", href: "#contato" },
    ],
  },
  hero: {
    title: "Nome da Clínica",
    subtitle: "Subtítulo ou slogan da sua clínica. Uma frase que transmita sua proposta de valor.",
    backgroundImage: "/assets/hero-bg.jpg",
    ctaText: "Agende uma consulta",
    ctaHref: "#contato",
  },
  about: {
    sectionTitle: "Sobre Nós",
    paragraph1:
      "Parágrafo 1 — Apresente sua clínica aqui. Fale sobre a missão, valores e o compromisso com o cuidado de cada paciente. Este é o espaço para criar uma conexão genuína com quem visita o site.",
    paragraph2:
      "Parágrafo 2 — Continue a apresentação. Descreva a abordagem terapêutica adotada pela equipe e o que diferencia o atendimento oferecido. Mostre por que sua clínica é o lugar certo.",
    paragraph3:
      "Parágrafo 3 (opcional) — Informações complementares, como modalidades de atendimento (presencial, online), idiomas disponíveis ou grupos atendidos. Deixe em branco para omitir.",
  },
  services: {
    sectionTitle: "Nossas Especialidades",
    sectionSubtitle: "Áreas de atuação da nossa equipe",
    items: [
      {
        id: "1",
        icon: "Heart",
        title: "Título do Serviço 1",
        description:
          "Descrição do serviço 1. Explique brevemente o que é oferecido, para quem se destina e quais benefícios traz ao paciente.",
      },
      {
        id: "2",
        icon: "Brain",
        title: "Título do Serviço 2",
        description:
          "Descrição do serviço 2. Explique brevemente o que é oferecido, para quem se destina e quais benefícios traz ao paciente.",
      },
      {
        id: "3",
        icon: "Users",
        title: "Título do Serviço 3",
        description:
          "Descrição do serviço 3. Explique brevemente o que é oferecido, para quem se destina e quais benefícios traz ao paciente.",
      },
      {
        id: "4",
        icon: "Globe",
        title: "Título do Serviço 4",
        description:
          "Descrição do serviço 4. Explique brevemente o que é oferecido, para quem se destina e quais benefícios traz ao paciente.",
      },
    ],
  },
  team: {
    sectionTitle: "Nossa Equipe",
    sectionSubtitle: "Conheça os profissionais da clínica",
    members: [
      {
        id: "1",
        name: "Nome do Profissional 1",
        crp: "CRP XX/XXXXX",
        description:
          "Breve apresentação do profissional. Formação acadêmica, especializações e abordagem terapêutica. Este texto aparece abaixo da foto no site.",
        image: "https://placehold.co/400x500/e8e4dc/7a6e5f?text=Foto+1",
        whatsapp: "",
      },
      {
        id: "2",
        name: "Nome do Profissional 2",
        crp: "CRP XX/XXXXX",
        description:
          "Breve apresentação do profissional. Formação acadêmica, especializações e abordagem terapêutica. Este texto aparece abaixo da foto no site.",
        image: "https://placehold.co/400x500/dce4e8/5f6e7a?text=Foto+2",
        whatsapp: "",
      },
      {
        id: "3",
        name: "Nome do Profissional 3",
        crp: "CRP XX/XXXXX",
        description:
          "Breve apresentação do profissional. Formação acadêmica, especializações e abordagem terapêutica. Este texto aparece abaixo da foto no site.",
        image: "https://placehold.co/400x500/e4dce8/6e5f7a?text=Foto+3",
        whatsapp: "",
      },
    ],
  },
  contact: {
    sectionTitle: "Entre em Contato",
    sectionSubtitle: "Agende sua consulta ou tire suas dúvidas",
    namePlaceholder: "Seu nome completo",
    emailPlaceholder: "Seu e-mail",
    professionalLabel: "Escolha o profissional",
    messagePlaceholder: "Como podemos ajudá-lo?",
    submitText: "Enviar mensagem",
    emailjsServiceId: "",
    emailjsTemplateId: "",
    emailjsPublicKey: "",
  },
  footer: {
    text: "© {year} Nome da Clínica. Todos os direitos reservados.",
    privacyLabel: "Política de Privacidade",
  },
};
