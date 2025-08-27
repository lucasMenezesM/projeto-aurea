import React from "react";
import Diferenciais from "./components/Diferenciais";
import HeroSobre from "./components/Hero";
import MVV from "./components/MVV";
import LinhaDoTempo from "./components/LinhaDoTempo";
import ContatoContainer from "../shared/components/ContatoContainer";

const Sobre: React.FC = () => {
  return (
    <div className="background-primary text-white">
      <div className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <HeroSobre />

        <MVV />

        <Diferenciais />

        <LinhaDoTempo />

        <ContatoContainer
          titulo="Pronto para criar algo incrível?"
          descricao="Vamos conversar sobre seu projeto e desenhar um caminho de entrega com previsibilidade e impacto."
        />
      </div>
    </div>
  );
};

export default Sobre;
