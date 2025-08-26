import CardGradient from "@/pages/sobre/components/CardGradient";
import { motion } from "motion/react";
import Badge from "@/pages/shared/components/Badge";

import { beneficios } from "../data/dados";

const ComoAjudamos: React.FC = () => {
  return (
    <section className="pb-30">
      <div className="max-w-7xl mx-auto pb-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 w-fit mx-auto"
        >
          <Badge>Como ajudamos</Badge>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary">
            Por que nos escolher
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <CardGradient>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl p-2 bg-white/10">
                      <b.icone className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{b.titulo}</h3>
                  </div>
                  <p className="mt-2 text-gray-300">{b.descricao}</p>
                </div>
              </CardGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoAjudamos;
