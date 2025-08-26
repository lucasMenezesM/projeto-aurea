import CardGradient from "@/pages/sobre/components/CardGradient";
import { motion } from "motion/react";

const ContatoHome: React.FC = () => {
  return (
    <section className="pb-30">
      <div className="max-w-7xl mx-auto">
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
            <motion.a
              href="/contato"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-white/10 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition"
            >
              Fale Conosco
            </motion.a>
          </div>
        </CardGradient>
      </div>
    </section>
  );
};

export default ContatoHome;
