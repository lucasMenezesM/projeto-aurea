import { useRef, useEffect } from "react";
import { useInView, motion, useAnimation } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
  slideColor?: string;
  width?: string;
  duracao?: number;
}

const Reveal: React.FC<Props> = ({
  children,
  className,
  slideColor = "#55008f",
  width = "w-full",
  duracao = 0.5,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainAnimation = useAnimation();
  const slideAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainAnimation.start("visible");
      slideAnimation.start("visible");
    }
  }, [isInView]);
  return (
    <div className={`relative ${width} overflow-hidden ${className}`}>
      <motion.div
        ref={ref}
        variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }}
        initial="hidden"
        animate={mainAnimation}
        transition={{ duration: duracao, delay: 0.25 }}
        className="text-center"
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideAnimation}
        transition={{ duration: duracao, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: slideColor,
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
