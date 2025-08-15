import Reveal from "@/pages/shared/components/Reveal";
import { motion, useAnimation, useInView } from "motion/react";
import React from "react";
import { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
  icon: React.JSX.Element;
  iconColor?: string;
  bgColor?: string;
}
const EspecialidadeBox3: React.FC<Props> = ({
  title,
  description,
  icon,
  iconColor = "rgb(219, 184, 38)",
  bgColor = "#55008f",
}) => {
  const iconAnimation = useAnimation();
  const iconRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(iconRef, { once: true });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      iconAnimation.start({ opacity: 1 });
    }
  }, [isInView, iconAnimation]);

  return (
    // <div className="especialidade-box flex flex-wrap md:flex-nowrap w-full md:w-120 items-center background-secondary p-2 rounded-lg text-black justify-center shadow-[0_9px_50px_1px_rgba(128,0,255,0.3)]">
    <div className="especialidade-box flex flex-wrap sm:grid grid-cols-4 md:flex-nowrap w-full md:w-120 items-center  p-2 rounded-lg text-black justify-center">
      <div
        className="relative overflow-hidden p-4 rounded-lg flex flex-col items-center gap-2 w-25 col-span-1"
        style={{ backgroundColor: bgColor }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Camada que desliza para mudar a cor */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: iconColor }}
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Conteúdo acima da camada */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, transition: { duration: 0.5 } }}
          className="relative z-10 flex flex-col items-center gap-2"
        >
          {React.cloneElement(icon, {
            color: isHovered ? bgColor : iconColor,
            size: 80,
          })}
        </motion.div>
      </div>
      <div className="flex flex-col items-center p-5 w-full col-span-3">
        <Reveal>
          <h3 className="text-xl font-semibold text-tertiary shadow-lg md:text-start">{title}</h3>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-white md:text-start">{description}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default EspecialidadeBox3;
