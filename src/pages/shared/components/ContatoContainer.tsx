import { Button } from "@/components/ui/button";
import ContatoDialog from "@/pages/shared/components/ContatoDialog";
import CardGradient from "@/pages/shared/components/CardGradient";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "motion/react";

interface ContatoContainerProps {
  titulo: string;
  descricao: string;
  visible?: { opacity: number; x: number };
  hidden?: { opacity: number; x: number };
  textoBotao?: string;
}

const ContatoContainer: React.FC<ContatoContainerProps> = ({
  titulo,
  descricao,
  visible = { opacity: 1, x: 0 },
  hidden = { opacity: 0, x: -50 },
  textoBotao = "Entre em contato",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contatoAnimation = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      contatoAnimation.start("visible");
    }
  }, [isInView, contatoAnimation]);

  return (
    <section className="pb-30">
      <motion.div
        variants={{
          hidden: hidden,
          visible: visible,
        }}
        initial="hidden"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        ref={ref}
        animate={contatoAnimation}
        className="max-w-7xl mx-auto"
      >
        <CardGradient>
          <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-tertiary">{titulo}</h3>
              <p className="mt-1 text-gray-300 max-w-xl">{descricao}</p>
            </div>
            <ContatoDialog>
              <motion.div
                whileTap={{
                  scale: 0.95,
                  rotate: 2,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                <Button className="py-6" variant={"primary"}>
                  {textoBotao}
                </Button>
              </motion.div>
            </ContatoDialog>
          </div>
        </CardGradient>
      </motion.div>
    </section>
  );
};

export default ContatoContainer;
