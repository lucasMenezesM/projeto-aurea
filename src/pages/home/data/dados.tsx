import { Cpu, Hammer, Building2, Compass, Leaf, Atom } from "lucide-react";

interface Item {
  titulo: string;
  descricao: string;
  icone: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const especialidades: Item[] = [
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

export { especialidades };
