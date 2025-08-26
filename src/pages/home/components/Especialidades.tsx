import Reveal from "@/pages/shared/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { especialidades } from "../data/dados";

const Especialidades: React.FC = () => {
  return (
    <section id="servicos" className="pb-30 bg-gradient-to-tr from-black via-black to-[#55008f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 w-fit mx-auto"
        >
          <Badge>Nossas áreas de atuação</Badge>
          <Reveal>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary">Especialidades</h2>
          </Reveal>
          <Reveal>
            <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipdoans odaisdo a sodiasdpakms pamksd
              kamsdksam daoksn daoknsd oasnkdasdiscing elit.
            </p>
          </Reveal>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {especialidades.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl background-tertiary/70 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-white/10">
                    <s.icone className="h-5 w-5" />
                  </div>
                  <Reveal>
                    <h3 className="text-start text-lg font-semibold">{s.titulo}</h3>
                  </Reveal>
                </div>
                <Reveal>
                  <p className="text-start mt-2 text-gray-300">{s.descricao}</p>
                </Reveal>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
