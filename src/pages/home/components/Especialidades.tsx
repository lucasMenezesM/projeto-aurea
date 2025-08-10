import Reveal from "@/pages/shared/components/Reveal";
import EspecialidadeBox from "./EspecialdadeBox";
import {
  BadgeCheckIcon,
  BriefcaseBusiness,
  CircuitBoard,
  Computer,
  Cpu,
  HardHat,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ContatoDialog from "@/pages/shared/components/ContatoDialog";

const Especialidades: React.FC = () => {
  const badge1Animation = useAnimation();
  const badge2Animation = useAnimation();

  const badgeRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(badgeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      badge1Animation.start("visible");
      badge2Animation.start("visible");
    }
  }, [isInView, badge1Animation, badge2Animation]);

  return (
    <div className="especialidades-container p-8 background-primary text-center bg-gradient-to-tr from-black via-black to-[#55008f] text-white">
      <div className="w-full md:w-170 mx-auto">
        <Reveal className="mt-50">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
            Conheça nossas especialidades
          </h2>
        </Reveal>
        <Reveal className="mt-4">
          <p className="leading-7 [&:not(:first-child)]:mt-8">
            Nossas especialidades incluem uma variedade de serviços projetados para atender às suas
            necessidades. Estamos aqui para ajudar você a encontrar a solução perfeita para o seu
            projeto.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-5 justify-center mt-5">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={badge1Animation}
            transition={{ duration: 0.5 }}
          >
            <Badge variant={"secondary"} className="bg-green-700 text-white" ref={badgeRef}>
              {" "}
              <BadgeCheckIcon /> Qualidade garantida
            </Badge>
          </motion.div>
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            initial="hidden"
            animate={badge2Animation}
            transition={{ duration: 0.5 }}
          >
            <Badge variant={"secondary"} className="bg-green-700 text-white">
              {" "}
              <BadgeCheckIcon /> Preços acessíveis
            </Badge>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <EspecialidadeBox
          title="Soluções de negócio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in fringilla arcu. "
          icon={<BriefcaseBusiness size={100} />}
        />
        <EspecialidadeBox
          title="Arquitetura e Urbanismo"
          description="Donec lacinia nisi ut blandit imperdiet. Nulla tempus eget augue non tempor. Mauris ac posuere erat, vel rutrum magna. "
          icon={<HardHat size={100} />}
        />
        <EspecialidadeBox
          title="Desenvolvimento de tecnologias"
          description="Duis tellus odio, sagittis in erat in, scelerisque ornare est. "
          icon={<Computer size={100} />}
        />
        <EspecialidadeBox
          title="Máquinas e Equipamentos"
          description="Duis tellus odio, sagittis in erat in, scelerisque ornare est. "
          icon={<Cpu size={100} />}
        />
        <EspecialidadeBox
          title="Soluções Elétricas"
          description="Duis tellus odio, sagittis in erat in, scelerisque ornare est. "
          icon={<CircuitBoard size={100} />}
        />
      </div>

      <div className="mt-15 mb-50">
        <h2 className="scroll-m-20 text-1xl font-semibold tracking-tight text-center mb-3">
          Se interessou? Entre em contato conosco!
        </h2>
        <ContatoDialog>
          <Button variant={"tertiary"}>Enviar mensagem</Button>
        </ContatoDialog>
      </div>
    </div>
  );
};

export default Especialidades;
