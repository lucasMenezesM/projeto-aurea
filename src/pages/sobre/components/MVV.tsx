import { motion } from "motion/react";
import CardGradient from "../../shared/components/CardGradient";
import { dadosMVV } from "../dados";

const MVV: React.FC = () => {
  return (
    <section className="mb-20">
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dadosMVV.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <CardGradient>
              <div className="p-6 md:p-7 min-h-50 h-fit flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-white/10">
                    <v.Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">{v.title}</h3>
                </div>
                <p className="mt-3 text-gray-200 leading-relaxed">{v.desc}</p>
              </div>
            </CardGradient>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MVV;
