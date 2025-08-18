type TipoProjeto = "tecnologia" | "arquitetura" | "negocios" | "eletrica" | "maquinas";

interface Projeto {
  id: number;
  tipoProjeto: TipoProjeto;
  titulo: string;
  descricao: string;
  imagem: string;
}

const projetos: Projeto[] = [
  {
    id: 1,
    tipoProjeto: "tecnologia",
    titulo: "Plataforma Web para apoio administrativo da Loja X",
    descricao:
      "Uma plataforma desenvolvida para otimizar a gestão de vendas e estoque da loja, obtendo ótimos resultados.",
    imagem: "src/assets/images/projetos/tecnologia.jpg",
  },
  {
    id: 2,
    tipoProjeto: "arquitetura",
    titulo: "Projeto de Reforma Residencial",
    descricao:
      "Desenvolvimento de projeto arquitetônico para modernização de ambientes residenciais, focando em funcionalidade e estética.",
    imagem: "src/assets/images/projetos/arquitetura.jpg",
  },
  {
    id: 3,
    tipoProjeto: "negocios",
    titulo: "Sistema de Gestão Empresarial",
    descricao:
      "Implementação de solução para controle financeiro e administrativo, facilitando a tomada de decisões estratégicas.",
    imagem: "src/assets/images/projetos/negocios.jpg",
  },
  {
    id: 4,
    tipoProjeto: "eletrica",
    titulo: "Instalação Elétrica Predial",
    descricao:
      "Projeto de infraestrutura elétrica para edifícios comerciais, garantindo segurança e eficiência energética.",
    imagem: "src/assets/images/projetos/eletrica.jpg",
  },
  {
    id: 5,
    tipoProjeto: "maquinas",
    titulo: "Automação de Linha de Produção",
    descricao:
      "Desenvolvimento de sistemas automatizados para otimizar processos industriais e aumentar a produtividade.",
    imagem: "src/assets/images/projetos/maquinas.jpg",
  },
  {
    id: 6,
    tipoProjeto: "eletrica",
    titulo: "Sistema de Iluminação Inteligente",
    descricao:
      "Implementação de soluções de iluminação automatizada para ambientes corporativos, promovendo economia de energia.",
    imagem: "src/assets/images/projetos/eletrica.jpg",
  },
  {
    id: 7,
    tipoProjeto: "maquinas",
    titulo: "Manutenção de Equipamentos Industriais",
    descricao:
      "Serviço especializado em manutenção preventiva e corretiva de máquinas industriais, garantindo maior vida útil.",
    imagem: "src/assets/images/projetos/maquinas.jpg",
  },
  {
    id: 8,
    tipoProjeto: "eletrica",
    titulo: "Projeto de Rede de Distribuição",
    descricao:
      "Elaboração de redes elétricas para distribuição eficiente de energia em áreas urbanas e rurais.",
    imagem: "src/assets/images/projetos/eletrica.jpg",
  },
  {
    id: 9,
    tipoProjeto: "tecnologia",
    titulo: "Aplicativo de Controle de Estoque",
    descricao:
      "Desenvolvimento de aplicativo mobile para gerenciamento de inventário, facilitando o acompanhamento em tempo real.",
    imagem: "src/assets/images/projetos/tecnologia.jpg",
  },
  {
    id: 10,
    tipoProjeto: "negocios",
    titulo: "Consultoria em Processos Empresariais",
    descricao:
      "Prestação de serviços de consultoria para otimização de processos internos e aumento da eficiência operacional.",
    imagem: "src/assets/images/projetos/negocios.jpg",
  },
  {
    id: 11,
    tipoProjeto: "negocios",
    titulo: "Planejamento Estratégico Corporativo",
    descricao:
      "Desenvolvimento de estratégias para crescimento sustentável e posicionamento competitivo no mercado.",
    imagem: "src/assets/images/projetos/negocios.jpg",
  },
  {
    id: 12,
    tipoProjeto: "tecnologia",
    titulo: "Sistema de Monitoramento Online",
    descricao:
      "Criação de plataforma para monitoramento remoto de dados e indicadores, proporcionando maior controle e segurança.",
    imagem: "src/assets/images/projetos/tecnologia.jpg",
  },
];

export default projetos;
export type { Projeto, TipoProjeto };
