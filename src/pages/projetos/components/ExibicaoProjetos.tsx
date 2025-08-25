import { motion } from "motion/react";
// import CarouselProjetos from "./CarouselProjetos";
import type { Projeto } from "@/data/projetos";
// import Carousel from "./../../shared/components/Carousel";
import CarouselProjetos from "./CarouselProjetos";

interface ExibicaoProjetosProps {
  titulo: string;
  projetos: Projeto[];
}

const ExibicaoProjetos: React.FC<ExibicaoProjetosProps> = ({ titulo, projetos }) => {
  return (
    <div className="">
      <div className="mb-5">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center scroll-m-20 text-2xl font-semibold tracking-tight text-secondary"
        >
          {titulo}
        </motion.h1>
      </div>
      <CarouselProjetos projetos={projetos} />
    </div>
  );
};

export default ExibicaoProjetos;
