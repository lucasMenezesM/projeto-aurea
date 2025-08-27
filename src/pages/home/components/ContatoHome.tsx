import { Button } from "@/components/ui/button";
import ContatoDialog from "@/pages/shared/components/ContatoDialog";
import CardGradient from "@/pages/sobre/components/CardGradient";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "motion/react";

const ContatoHome: React.FC = () => {
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
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
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
              <h3 className="text-2xl md:text-3xl font-bold text-tertiary">
                Pronto para conversar sobre seu projeto?
              </h3>
              <p className="mt-1 text-gray-300 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
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
                  Entre em contato
                </Button>
              </motion.div>
            </ContatoDialog>
          </div>
        </CardGradient>
      </motion.div>
    </section>
  );
};

export default ContatoHome;
