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
    title: "Vínculo Psicologia",
    description: "Psicologia clínica com foco em diversidade, migrantes e ciclos da vida.",
    keywords: "psicologia, terapia, saúde mental, diversidade, migrantes",
    logoText: "Vínculo Psicologia",
  },
  nav: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Psicólogos", href: "#psicologos" },
      { label: "Contato", href: "#contato" },
    ],
  },
  hero: {
    title: "Vínculo Psicologia",
    subtitle: "Cuidado psicológico com acolhimento, ética e respeito à sua história.",
    backgroundImage: "/assets/hero-bg.jpg",
    ctaText: "Agende uma consulta",
    ctaHref: "#contato",
  },
  about: {
    sectionTitle: "Sobre Nós",
    paragraph1:
      "Somos uma clínica de psicologia clínica comprometida com o acolhimento e o cuidado integral das pessoas. Acreditamos que cada história merece atenção, escuta e respeito.",
    paragraph2:
      "Nossa equipe é formada por psicólogos especializados em diferentes áreas, prontos para oferecer suporte em momentos de desafio, transição ou busca de autoconhecimento.",
    paragraph3:
      "Atendemos presencialmente e online, com horários flexíveis para se adaptar à sua rotina.",
  },
  services: {
    sectionTitle: "Nossas Especialidades",
    sectionSubtitle: "Áreas de atuação da nossa equipe",
    items: [
      {
        id: "1",
        icon: "Heart",
        title: "Público e Diversidade",
        description:
          "Atendimento afirmativo e respeitoso para pessoas LGBTQIA+, com foco na construção de identidade e bem-estar.",
      },
      {
        id: "2",
        icon: "Brain",
        title: "Experiência Clínica",
        description:
          "Suporte terapêutico para ansiedade, depressão, traumas e outros desafios emocionais do cotidiano.",
      },
      {
        id: "3",
        icon: "Users",
        title: "Ciclos da Vida",
        description:
          "Acompanhamento nas diferentes fases da vida: infância, adolescência, vida adulta e terceira idade.",
      },
      {
        id: "4",
        icon: "Globe",
        title: "Desafios da Migração",
        description:
          "Apoio especializado para migrantes e expatriados que enfrentam adaptação cultural e saudade.",
      },
    ],
  },
  team: {
    sectionTitle: "Nossa Equipe",
    sectionSubtitle: "Conheça os profissionais que fazem parte do Vínculo Psicologia",
    members: [
      {
        id: "1",
        name: "Anna Saldanha",
        crp: "CRP 01/23456",
        description:
          "Especialista em diversidade e identidade de gênero, com experiência em atendimento afirmativo para a comunidade LGBTQIA+.",
        image: "/assets/AS.jpeg",
        whatsapp: "5511999999991",
      },
      {
        id: "2",
        name: "Michelle Marie",
        crp: "CRP 01/34567",
        description:
          "Psicóloga clínica com foco em ansiedade, depressão e relacionamentos interpessoais. Atende adultos e adolescentes.",
        image: "/assets/MM.jpeg",
        whatsapp: "5511999999992",
      },
      {
        id: "3",
        name: "Pedro Lima",
        crp: "CRP 01/45678",
        description:
          "Especialista em psicologia do migrante e adaptação transcultural. Fluente em português, espanhol e inglês.",
        image: "/assets/PL.jpeg",
        whatsapp: "5511999999993",
      },
    ],
  },
  contact: {
    sectionTitle: "Entre em Contato",
    sectionSubtitle: "Agende sua consulta ou tire suas dúvidas",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu e-mail",
    professionalLabel: "Escolha o profissional",
    messagePlaceholder: "Sua mensagem",
    submitText: "Enviar mensagem",
    emailjsServiceId: "",
    emailjsTemplateId: "",
    emailjsPublicKey: "",
  },
  footer: {
    text: "© {year} Vínculo Psicologia. Todos os direitos reservados.",
    privacyLabel: "Política de Privacidade",
  },
};
