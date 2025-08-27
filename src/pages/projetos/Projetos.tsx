import { type TipoProjeto } from "@/data/projetos";
import { useState } from "react";
import { DropDownTipoProjeto } from "./components/DropDownTipoProjeto";
import ListaProjetos from "./components/ListaProjetos";
import { motion } from "motion/react";
import ContatoContainer from "../shared/components/ContatoContainer";

const Projetos: React.FC = () => {
  const [tipoProjeto, setTipoProjeto] = useState<TipoProjeto | "todos">("todos");

  return (
    <section id="projetos" className="background-primary text-white py-10">
      <div className="container pt-25">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="scroll-m-20 text-center text-3xl md:text-4xl font-extrabold tracking-tight text-balance"
        >
          Conheça um Pouco dos Trabalhos que Fizeram{" "}
          <motion.span className="text-tertiary underline">Diferença</motion.span> na Vida de Nossos
          Clientes
        </motion.h1>

        <div className="flex justify-center mt-5 mb-15">
          <DropDownTipoProjeto tipoProjeto={tipoProjeto} setTipoProjeto={setTipoProjeto} />
        </div>
      </div>

      <ListaProjetos tipoProjeto={tipoProjeto} />

      <ContatoContainer
        titulo="Faça como outros e tenha também seu projeto realizado por nós!"
        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </section>
  );
};

export default Projetos;
