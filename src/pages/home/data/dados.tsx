import {
  Cpu,
  Hammer,
  Building2,
  Compass,
  Leaf,
  Atom,
  Users,
  Sparkles,
  Shield,
  LineChart,
} from "lucide-react";

interface Item {
  titulo: string;
  descricao: string;
  icone: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Especialidade extends Item {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Beneficio extends Item {}

interface DadosSlide {
  imagem: string;
  titulo: string;
  subTitulo: string;
}

const slidesHome: DadosSlide[] = [
  {
    imagem: "/src/assets/images/especialidades/arquitetura.jpg",
    titulo: "Soluções Criativas",
    subTitulo: "Transformamos ideias em realidade.",
  },
  {
    imagem: "/src/assets/images/especialidades/tecnologia.jpg",
    titulo: "Tecnologia Inovadora",
    subTitulo: "Desenvolvemos aplicações e sistemas informatizados que ajudam empresas a crescer.",
  },
  {
    imagem: "/src/assets/images/especialidades/eletronica.jpg",
    titulo: "Máquinas e Equipamentos que agregam valor",
    subTitulo: "Aqui projetamos soluções que otimizam processos e aumentam a eficiência.",
  },
  {
    imagem: "/src/assets/images/especialidades/negocios.jpg",
    titulo: "Fazendo negócios de forma inteligente",
    subTitulo: "Soluções personalizadas para o seu negócio por meio de consultoria.",
  },
];

const beneficios: Beneficio[] = [
  {
    titulo: "Equipe Multidisciplinar",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icone: Users,
  },
  {
    titulo: "Projetos Personalizados",
    descricao: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icone: Sparkles,
  },
  {
    titulo: "Qualidade & Segurança",
    descricao: "Ut enim ad minim veniam, quis nostrud exercitation.",
    icone: Shield,
  },
  {
    titulo: "Foco em Resultados",
    descricao: "Duis aute irure dolor in reprehenderit in voluptate.",
    icone: LineChart,
  },
];

const especialidades: Especialidade[] = [
  {
    titulo: "Tecnologia",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icone: Cpu,
  },
  {
    titulo: "Engenharia",
    descricao: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icone: Hammer,
  },
  {
    titulo: "Arquitetura",
    descricao: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icone: Building2,
  },
  {
    titulo: "Consultoria",
    descricao: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    icone: Compass,
  },
  { titulo: "Inovação", descricao: "Excepteur sint occaecat cupidatat non proident.", icone: Atom },
  {
    titulo: "Sustentabilidade",
    descricao: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icone: Leaf,
  },
];

export { especialidades, beneficios, slidesHome };
