import React from "react";
import Diferenciais from "./components/Diferenciais";
import HeroSobre from "./components/Hero";
import MVV from "./components/MVV";
import LinhaDoTempo from "./components/LinhaDoTempo";
import Contato from "./components/Contato";

const Sobre: React.FC = () => {
  return (
    <div className="relative overflow-hidden background-primary text-white">
      {/* Background decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-600/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <main className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        {/* HERO */}
        <HeroSobre />

        {/* MISSÃO VISÃO VALORES */}
        <MVV />

        {/* DIFERENCIAIS */}
        <Diferenciais />

        {/* PROCESSO (Linha do tempo) */}
        <LinhaDoTempo />

        {/* STRIP DE PROVAS SOCIAIS / CHAMADA */}
        <Contato />
      </main>
    </div>
  );
};

export default Sobre;
