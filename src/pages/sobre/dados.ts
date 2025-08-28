import {
  Sparkles,
  Shield,
  Clock,
  Lightbulb,
  Users,
  CheckCircle2,
  Target,
  Eye,
  Handshake,
} from "lucide-react";

interface Diferencial {
  titulo: string;
  descricao: string;
  icone: React.ComponentType<{ className?: string }>;
}

interface Passo {
  titulo: string;
  descricao: string;
}

interface MVV {
  titulo: string;
  descricao: string;
  icone: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface DadoHero {
  titulo: string;
  valor: string;
}

const dadosHero: DadoHero[] = [
  { titulo: "Projetos entregues", valor: "+120" },
  { titulo: "Satisfação média", valor: "98%" },
  { titulo: "Anos de experiência", valor: "7+" },
  { titulo: "Clientes ativos", valor: "30+" },
];

const dadosMVV: MVV[] = [
  {
    titulo: "Missão",
    descricao: "Nossa missão é formar empreendedores de impacto através do jeito Aureano de ser.",
    icone: Target,
  },
  {
    titulo: "Visão",
    descricao:
      "Nossa visão até 2025 é ser o Elo entre a região Norte e o Sucesso, formando, através da constância de resultados, os líderes que levarão a Aurea para o Alto Impacto.",
    icone: Eye,
  },
  {
    titulo: "Valores",
    descricao: "Apaixonado, Unido, Responsável, Empático, Audacioso, Notável, Obstinado",
    icone: Handshake,
  },
];

const passos: Passo[] = [
  {
    titulo: "descricaooberta",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. Maecenas lobortis tortor aliquam, euismod eros suscipit, mattis dui. ",
  },
  {
    titulo: "Desenho da solução",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. Maecenas lobortis tortor aliquam",
  },
  {
    titulo: "Entrega e evolução",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. ",
  },
];

const diferenciais: Diferencial[] = [
  {
    titulo: "Inovação prática",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    icone: Sparkles,
  },
  {
    titulo: "Qualidade e segurança",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. Maecenas ",
    icone: Shield,
  },
  {
    titulo: "Entrega ágil",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icone: Clock,
  },
  {
    titulo: "UX orientada a dados",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu",
    icone: Lightbulb,
  },
  {
    titulo: "Parceria verdadeira",
    descricao: "Lorem ipsum dolor sit amet, consectetur ",
    icone: Users,
  },
  {
    titulo: "Suporte contínuo",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. Maecenas lobortis tortor aliquam. ",
    icone: CheckCircle2,
  },
];

export { diferenciais, passos, dadosMVV, dadosHero };
