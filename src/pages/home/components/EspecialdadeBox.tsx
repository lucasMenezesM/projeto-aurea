import Reveal from "@/pages/shared/components/Reveal";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface Props {
  title: string;
  description: string;
  img?: string;
  icon: React.ReactNode;
}
const EspecialidadeBox3: React.FC<Props> = ({ title, description, icon }) => {
  const iconAnimation = useAnimation();
  const iconRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(iconRef, { once: true });

  useEffect(() => {
    if (isInView) {
      iconAnimation.start({ opacity: 1 });
    }
  }, [isInView, iconAnimation]);

  return (
    <div className="especialidade-box flex flex-wrap md:flex-nowrap w-full md:w-120 items-center background-secondary p-2 rounded-lg text-black justify-center shadow-[0_9px_50px_1px_rgba(128,0,255,0.3)]">
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={iconAnimation}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        ref={iconRef}
      >
        {icon}
      </motion.div>
      <div className="flex flex-col items-center p-5">
        <Reveal>
          <h3 className="text-xl font-semibold text-tertiary shadow-lg">{title}</h3>
        </Reveal>
        <Reveal>
          <p className="mt-2">{description}</p>
        </Reveal>
      </div>
      {/* <Button className="absolute bottom-1 h-5 right-1 w-16 cursor-pointer text-xs">
        Saiba mais
      </Button> */}
    </div>
  );
};

export default EspecialidadeBox3;
