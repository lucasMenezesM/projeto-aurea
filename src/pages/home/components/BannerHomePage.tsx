import { AnimatePresence, motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import ContatoDialog from "@/pages/shared/components/ContatoDialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BannerHomePAge: React.FC = () => {
  return (
    // <div className="banner-home-page grid grid-cols-1 lg:grid-cols-2 justify-items-center border-none items-center bg-gradient-to-br from-black via-black to-[#55008f] py-10 pb-10">
    <section className="banner-home-page flex flex-wrap justify-center border-none items-center bg-gradient-to-br from-black via-black to-[#55008f] pt-10 pb-30">
      <motion.div
        layout
        className="conteudo-banner w-full md:w-160 text-center md:text-left p-8 flex flex-col "
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-secondary md:text-5xl shadow"
        >
          Bem vindo a Aurea Soluções e Projetos!
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="scroll-m-20 text-xl tracking-tight text-white mt-10 mb-10 md:w-120"
        >
          Empresa Júnior de arquitetura e engenharia com as melhores soluções e entregas de projetos
          de alta qualidade.
        </motion.h4>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
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
          <motion.div
            whileTap={{
              scale: 0.95,
              rotate: 2,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <Button className="p-6" variant={"primary"}>
              <Link to={"/sobre"}>Siba Mais Sobre Nós</Link>
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: "320deg" }}
          // animate={{ opacity: 1, y: 0, rotate: "340deg" }}
          animate={{ opacity: 1, y: 0, rotate: "360deg" }}
          whileInView={{ opacity: 1, y: 0, rotate: "360deg" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="logo"
        >
          <div>
            <motion.img
              whileHover={{ rotate: 2.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              src="/src/assets/images/Prancheta 3.png"
              alt="Logo"
              className="h-70 md:h-150"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default BannerHomePAge;
