// -----------------------------------------------------------------------
// Conteúdo do portfólio. Edite este arquivo para atualizar textos, links
// e adicionar novos projetos ou experiências — os componentes só lêem
// os dados daqui, então você não precisa mexer em JSX para atualizar
// informações.
// -----------------------------------------------------------------------

export const personal = {
  name: "João Pedro Santana",
  fullName: "João Pedro Santana dos Anjos",
  role: "Software Engineer | Full Stack Developer",
  age: 19,
  location: "Umuarama, PR",
  tagline:
    "Construo e evoluo sistemas web usados por uma empresa de verdade — de autenticação e controle de acesso a dashboards de gestão — com um ecossistema moderno de JavaScript e TypeScript.",
  status: "Estagiário Full Stack na Hub33 / Ademicon",
  email: "joaoanjossantana@gmail.com",
  github: "https://github.com/jpcsantana001",
  linkedin:
    "https://www.linkedin.com/in/jo%C3%A3o-pedro-santana-dos-anjos-016b10312",
};

// -----------------------------------------------------------------------
// Marcas exibidas no site. `logo` aponta para arquivos em public/logos
// (variante `dark` usada no tema escuro). Quem não tem arquivo de logo cai
// no selo tipográfico com o `monogram`. Para trocar por um logo real,
// coloque o SVG/PNG em public/logos e preencha o campo `logo`.
// -----------------------------------------------------------------------

export type BrandKey =
  | "hub33"
  | "ademicon"
  | "winsite"
  | "zaeli"
  | "proativa"
  | "unipar"
  | "sesi";

export type Brand = {
  name: string;
  monogram: string;
  logo?: { light: string; dark: string; width: number; height: number };
  /** Logo cuja cor de marca não sobrevive ao tema escuro: recebe um chip claro. */
  chipOnDark?: boolean;
  site?: string;
};

export const brands: Record<BrandKey, Brand> = {
  hub33: {
    name: "Hub33",
    monogram: "H33",
    logo: {
      light: "/logos/hub33.png",
      dark: "/logos/hub33.png",
      width: 176,
      height: 176,
    },
  },
  ademicon: {
    name: "Ademicon",
    monogram: "AD",
    logo: {
      light: "/logos/ademicon.svg",
      dark: "/logos/ademicon-dark.svg",
      width: 850,
      height: 185,
    },
    site: "https://www.ademicon.com.br",
  },
  winsite: { name: "Winsite Sistemas", monogram: "WS" },
  zaeli: { name: "Alimentos Zaeli", monogram: "ZA" },
  proativa: { name: "Clínica Pró-Ativa", monogram: "PA" },
  unipar: {
    name: "Unipar",
    monogram: "UP",
    logo: {
      light: "/logos/unipar.svg",
      dark: "/logos/unipar-dark.svg",
      width: 300,
      height: 106,
    },
    site: "https://www.unipar.br",
  },
  sesi: {
    name: "SESI — Serviço Social da Indústria",
    monogram: "SESI",
    logo: {
      light: "/logos/sesi.png",
      dark: "/logos/sesi.png",
      width: 436,
      height: 110,
    },
    chipOnDark: true,
  },
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  brand: BrandKey;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Hub33 / Ademicon",
    brand: "ademicon",
    role: "Estagiário de Desenvolvimento Full Stack",
    period: "ago. 2026 – atual",
    current: true,
    bullets: [
      "Desenvolvimento e manutenção de sistemas web, atuando em frontend e backend.",
      "Desenvolvimento de funcionalidades para sistemas internos da empresa.",
      "Integração com banco de dados e APIs.",
      "Correção de bugs e melhorias em sistemas existentes.",
      "Participação na evolução do Gestor360, sistema de gestão da empresa.",
      "Trabalho com autenticação, permissões, RBAC, dashboards, módulos administrativos e regras de negócio.",
      "Uso de Git/GitHub e ambientes de desenvolvimento e deploy.",
      "Contato constante com tecnologias modernas do ecossistema JavaScript/TypeScript.",
    ],
  },
  {
    company: "Winsite Sistemas",
    brand: "winsite",
    role: "Estagiário em Desenvolvimento de Sistemas e Web",
    period: "set. 2025 – nov. 2025",
    bullets: [
      "Desenvolvimento frontend e backend.",
      "Criação e manutenção de sistemas web.",
      "Aprendizado e aplicação prática de tecnologias de desenvolvimento.",
    ],
  },
  {
    company: "Alimentos Zaeli",
    brand: "zaeli",
    role: "Assistente de Suporte de TI",
    period: "mar. 2025 – mai. 2025",
    bullets: [
      "Atendimento e suporte técnico aos usuários.",
      "Resolução de problemas técnicos.",
      "Participação em projetos utilizando ferramentas low-code.",
      "Experiência com infraestrutura e suporte corporativo.",
    ],
  },
  {
    company: "Clínica Pró-Ativa",
    brand: "proativa",
    role: "Assistente Administrativo",
    period: "out. 2022 – dez. 2022",
    bullets: [
      "Atendimento ao público.",
      "Organização de informações e formulários.",
      "Apoio em processos administrativos.",
    ],
  },
];

export const techStack: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "SQL",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "Docker",
  "Git",
  "GitHub",
];

export type Specialty = {
  title: string;
  description: string;
};

export const specialties: Specialty[] = [
  {
    title: "Arquitetura de sistemas",
    description: "Estruturação de sistemas internos pensando em requisitos, manutenção e crescimento.",
  },
  {
    title: "Autenticação & RBAC",
    description: "Controle de acesso, permissões e perfis de usuário em sistemas de gestão.",
  },
  {
    title: "Dashboards & gestão",
    description: "Módulos administrativos e painéis para acompanhar operação e resultados.",
  },
  {
    title: "Integração de sistemas & APIs",
    description: "Conexão entre banco de dados, serviços e módulos internos.",
  },
  {
    title: "Engenharia de requisitos",
    description: "Levantamento e organização de requisitos antes de construir a solução.",
  },
  {
    title: "IA aplicada ao desenvolvimento",
    description: "Uso de ferramentas de IA para acelerar desenvolvimento, debugging e pesquisa.",
  },
];

export const gestor360 = {
  name: "Gestor360",
  description:
    "Plataforma de gestão empresarial desenvolvida pela equipe da Hub33 para centralizar processos e informações da empresa. Faço parte do time que desenvolve e evolui o sistema — não é um projeto pessoal, mas um produto real em produção no qual contribuo diretamente.",
  modules: [
    "Autenticação e login",
    "Usuários e perfis",
    "Controle de acesso / RBAC",
    "Unidades",
    "Cadastro de pessoas",
    "Consultores",
    "Equipes",
    "Auditoria",
    "Comercial",
    "Produção",
    "Metas",
    "Dashboards",
    "Gestão",
    "Financeiro",
    "Recursos Humanos",
  ],
};

export type Principle = {
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    title: "Desenvolvimento orientado a problemas",
    description: "Entender o problema real antes de escrever a primeira linha de código.",
  },
  {
    title: "Clean Code",
    description: "Código legível e organizado, pensado para quem vai dar manutenção depois.",
  },
  {
    title: "Git",
    description: "Histórico de mudanças claro e colaboração organizada em equipe.",
  },
  {
    title: "APIs",
    description: "Integrações bem definidas entre sistemas e serviços.",
  },
  {
    title: "Banco de dados",
    description: "Modelagem de dados pensando em consistência e performance.",
  },
  {
    title: "Segurança",
    description: "Autenticação, permissões e boas práticas em cada camada do sistema.",
  },
  {
    title: "Testes",
    description: "Validação do que é construído antes de chegar em produção.",
  },
  {
    title: "Deploy",
    description: "Publicação e acompanhamento do sistema em ambiente real.",
  },
  {
    title: "IA como ferramenta de produtividade",
    description: "Uso de IA para acelerar pesquisa, debugging e construção de soluções.",
  },
];

export type EducationItem = {
  course: string;
  detail?: string;
  institution: string;
  period: string;
  status: string;
  current?: boolean;
  brand: BrandKey;
};

export const education: EducationItem[] = [
  {
    course: "Engenharia de Software",
    detail: "Bacharelado",
    institution: "Unipar — Universidade Paranaense",
    period: "fev. 2026 – dez. 2029 (previsão)",
    status: "Em andamento",
    current: true,
    brand: "unipar",
  },
  {
    course: "Ensino Médio",
    detail: "Itinerário formativo de exatas",
    institution: "Colégio SESI Umuarama",
    period: "fev. 2023 – dez. 2025",
    status: "Concluído",
    brand: "sesi",
  },
];

export const robotics = {
  period: "2023 – 2025",
  place: "Colégio SESI Umuarama",
  roles: ["Programador", "Monitor de programação", "Capitão da equipe"],
  description:
    "Durante o ensino médio no Colégio SESI de Umuarama integrei a equipe de robótica. Entrei como programador, passei a monitor da programação e cheguei a capitão da equipe. Foi onde aprendi a trabalhar sob pressão, coordenar pessoas e aplicar raciocínio técnico em problemas reais — base que trago para o desenvolvimento de software. A participação se encerrou com a conclusão do ensino médio, em dezembro de 2025.",
};
