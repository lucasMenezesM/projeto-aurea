"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { TipoProjeto } from "@/data/projetos";

interface DropDownTipoProjetoProps {
  tipoProjeto: TipoProjeto | "todos";
  setTipoProjeto: (tipo: TipoProjeto | "todos") => void;
}

export function DropDownTipoProjeto({ tipoProjeto, setTipoProjeto }: DropDownTipoProjetoProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary">Filtrar Projetos</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/75 text-white border-none">
        <DropdownMenuLabel className="text-center">Filtre por tipo de projeto</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={tipoProjeto}
          onValueChange={(value) => setTipoProjeto(value as TipoProjeto | "todos")}
        >
          <DropdownMenuRadioItem className="hover-background-secondary" value="todos">
            Todos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover-background-secondary" value="tecnologia">
            Tecnologia
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover-background-secondary" value="arquitetura">
            Arquitetura e urbanismo
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover-background-secondary" value="negocios">
            Soluções de Negócios
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover-background-secondary" value="maquinas">
            Máquinas e Equipamentos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover-background-secondary" value="eletrica">
            Soluções Elétricas
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
