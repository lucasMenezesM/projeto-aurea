import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { dadosHero } from "../dados";
import Badge from "@/pages/shared/components/Badge";

const HeroSobre: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
    >
      <Badge>
        <Rocket className="h-3.5 w-3.5" /> Sobre nós
      </Badge>
      <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-tertiary">
        Transformamos ideias em soluções viáveis
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        Projetos sob medida, foco em resultado e parceria verdadeira do primeiro discovery ao
        pós-go-live.
      </p>

      {/* Mini métricas no hero */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {dadosHero.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/5 py-4 px-3 backdrop-blur-sm"
          >
            <p className="text-2xl font-semibold text-white">{s.value}</p>
            <p className="text-xs text-gray-300">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default HeroSobre;
