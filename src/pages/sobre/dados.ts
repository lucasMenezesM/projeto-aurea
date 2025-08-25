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

type Diferencial = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

type Passo = { title: string; desc: string };

type MVV = {
  title: string;
  desc: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type DadoHero = { label: string; value: string };

const dadosHero: DadoHero[] = [
  { label: "Projetos entregues", value: "+120" },
  { label: "Satisfação média", value: "98%" },
  { label: "Anos de experiência", value: "7+" },
  { label: "Clientes ativos", value: "30+" },
];

const dadosMVV: MVV[] = [
  {
    title: "Missão",
    desc: "Nossa missão é formar empreendedores de impacto através do jeito Aureano de ser.",
    Icon: Target,
  },
  {
    title: "Visão",
    desc: "Nossa visão até 2025 é ser o Elo entre a região Norte e o Sucesso, formando, através da constância de resultados, os líderes que levarão a Aurea para o Alto Impacto.",
    Icon: Eye,
  },
  {
    title: "Valores",
    desc: "Apaixonado, Unido, Responsável, Empático, Audacioso, Notável, Obstinado",
    Icon: Handshake,
  },
];

const passos: Passo[] = [
  {
    title: "Descoberta",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. Maecenas lobortis tortor aliquam, euismod eros suscipit, mattis dui. ",
  },
  {
    title: "Desenho da solução",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. Maecenas lobortis tortor aliquam",
  },
  {
    title: "Entrega e evolução",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. ",
  },
];

const diferenciais: Diferencial[] = [
  {
    title: "Inovação prática",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    Icon: Sparkles,
  },
  {
    title: "Qualidade e segurança",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. Maecenas ",
    Icon: Shield,
  },
  {
    title: "Entrega ágil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Icon: Clock,
  },
  {
    title: "UX orientada a dados",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu",
    Icon: Lightbulb,
  },
  {
    title: "Parceria verdadeira",
    desc: "Lorem ipsum dolor sit amet, consectetur ",
    Icon: Users,
  },
  {
    title: "Suporte contínuo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat est, efficitur ac accumsan eu, commodo in nisi. Maecenas lobortis tortor aliquam. ",
    Icon: CheckCircle2,
  },
];

export { diferenciais, passos, dadosMVV, dadosHero };
