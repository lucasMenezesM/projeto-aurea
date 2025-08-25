import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Projeto } from "@/data/projetos";

interface CarouselProps {
  projetos: Projeto[];
}
const HomeCarousel: React.FC<CarouselProps> = ({ projetos }) => {
  return (
    <div className="bg-black pb-35">
      <div className="w-full mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-2xl overflow-hidden w-[90%]"
        >
          {projetos.map((projeto, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <div>
                  <img src={projeto.imagem} alt={projeto.titulo} className="" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <h2 className="text-center sm:text-start scroll-m-20 pb-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-5 text-tertiary">
                    {projeto.titulo}
                  </h2>

                  <p className="text-center sm:text-start leading-7 ">{projeto.descricao}</p>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCarousel;
