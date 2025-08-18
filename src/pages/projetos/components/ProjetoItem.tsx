import type { Projeto } from "@/data/projetos";
import { motion } from "motion/react";

const ProjetoItem: React.FC<{ projeto: Projeto }> = ({ projeto }) => {
  return (
    <div className="mb-30">
      <div>
        <img src={projeto.imagem} alt={projeto.titulo} className="w-100 md:w-200" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <h2 className="text-center sm:text-start scroll-m-20 pb-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-5 text-tertiary">
          {projeto.titulo}
        </h2>

        <p className="text-center sm:text-start leading-7 ">{projeto.descricao}</p>
      </motion.div>
    </div>
  );
};

export default ProjetoItem;
