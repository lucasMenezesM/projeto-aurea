import { motion } from "motion/react";

import { diferenciais } from "../dados";

import Badge from "@/pages/shared/components/Badge";

const Diferenciais: React.FC = () => {
  return (
    <section className="background-primary">
      <div className="pb-20 max-w-6xl mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <Badge>Nossos diferenciais</Badge>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary">
            Por que empresas nos escolhem
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            Combinamos visão de produto, engenharia sólida e uma cultura de parceria para entregar
            valor sustentável.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl background-tertiary/70 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-white/10">
                    <f.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="mt-2 text-gray-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  {
    /* PROCESSO (Linha do tempo) */
  }
  // <section className="mb-20">
  //   <motion.div {...fadeUp()} className="text-center mb-10">
  //     <Badge>Como trabalhamos</Badge>
  //     <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary">
  //       Processo simples, impacto alto
  //     </h2>
  //   </motion.div>

  //   <div className="relative max-w-4xl mx-auto">
  //     <div
  //       aria-hidden
  //       className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0"
  //     />
  //     <ul className="space-y-8">
  //       {steps.map((s, i) => (
  //         <motion.li key={s.title} {...fadeUp(i)} className="relative pl-12">
  //           <span className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-white/10 grid place-items-center">
  //             {i === 0 && <Lightbulb className="h-4 w-4" />}
  //             {i === 1 && <Rocket className="h-4 w-4" />}
  //             {i === 2 && <Shield className="h-4 w-4" />}
  //           </span>
  //           <h3 className="text-lg font-semibold text-white">{s.title}</h3>
  //           <p className="text-gray-300">{s.desc}</p>
  //         </motion.li>
  //       ))}
  //     </ul>
  //   </div>
  // </section>;
};

export default Diferenciais;
