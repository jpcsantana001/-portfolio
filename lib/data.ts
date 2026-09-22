// -----------------------------------------------------------------------
// Conteúdo do portfólio. Edite este arquivo para atualizar textos, links
// e adicionar novos projetos ou experiências — os componentes só lêem
// os dados daqui, então você não precisa mexer em JSX para atualizar
// informações.
//
// Itens marcados com "TODO" são placeholders: substitua pelos seus
// dados reais antes de publicar.
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

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Hub33 / Ademicon",
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

export const education = {
  course: "Engenharia de Software",
  institution: "Unipar — Universidade Paranaense",
  status: "Em andamento · previsão dez. 2029",
};

export const robotics = {
  since: "2023",
  description:
    "Participo de uma equipe de robótica desde 2023, onde comecei como programador. Com o tempo, passei a atuar como monitor da programação e, posteriormente, como capitão da equipe — experiência que reforçou meu trabalho em equipe, liderança e raciocínio técnico aplicado a problemas reais.",
};
