import { Button } from "@/components/ui/button";
import { Headset, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import ContatoDialog from "@/pages/shared/components/ContatoDialog";

const BannerHomePAge: React.FC = () => {
  return (
    // <div className="banner-home-page grid grid-cols-1 lg:grid-cols-2 justify-items-center border-none items-center bg-gradient-to-br from-black via-black to-[#55008f] py-10 pb-10">
    <div className="banner-home-page flex flex-wrap justify-center border-none items-center bg-gradient-to-br from-black via-black to-[#55008f] py-10 pb-10">
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

        <div className="banner-opcoes flex flex-wrap gap-4 justify-center md:justify-start">
          <MotionConfig>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              whileTap={{ rotate: 3, scale: 0.98, transition: { duration: 0.2 } }}
            >
              <ContatoDialog>
                <Button variant={"tertiary"}>
                  <Headset /> Entre em contato!
                </Button>
              </ContatoDialog>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              whileTap={{ rotate: 3, scale: 0.98, transition: { duration: 0.2 } }}
            >
              <Button asChild variant={"tertiary"} className="">
                <Link to="/sobre">
                  <Info /> Saiba mais sobre nós
                </Link>
              </Button>
            </motion.button>
          </MotionConfig>
        </div>
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
    </div>
  );
};

export default BannerHomePAge;
