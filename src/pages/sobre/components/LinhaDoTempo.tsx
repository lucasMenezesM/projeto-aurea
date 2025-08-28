import { motion } from "motion/react";
import Badge from "@/pages/shared/components/Badge";
import { Lightbulb, Rocket, Shield } from "lucide-react";
import { passos } from "../dados";
import Reveal from "@/pages/shared/components/Reveal";

const LinhaDoTempo: React.FC = () => {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10 w-fit mx-auto"
      >
        <Badge>Como trabalhamos</Badge>
        <Reveal>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary">
            Processo simples, impacto alto
          </h2>
        </Reveal>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div
          aria-hidden
          className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0"
        />
        <ul className="space-y-8">
          {passos.map((passo, i) => (
            <motion.li
              key={passo.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-12"
            >
              <span className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-white/10 grid place-items-center">
                {i === 0 && <Lightbulb className="h-4 w-4" />}
                {i === 1 && <Rocket className="h-4 w-4" />}
                {i === 2 && <Shield className="h-4 w-4" />}
              </span>
              <h3 className="text-lg font-semibold text-white">{passo.titulo}</h3>
              <p className="text-gray-300">{passo.descricao}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LinhaDoTempo;
