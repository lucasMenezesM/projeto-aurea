import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "motion/react";
import { slidesHome } from "../data/dados";

const HomeCarousel: React.FC = () => {
  return (
    <div className="bg-black pb-30">
      <div className="text-tertiary mb-3 md:w-150 mx-auto border-none px-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <h2 className="scroll-m-20 md:text-2xl font-bold tracking-tight text-center border-none">
            O LUGAR CERTO PARA A <span className="text-secondary underline">SOLUÇÃO</span> DO SEU
            PROBLEMA
          </h2>
        </motion.div>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-2xl overflow-hidden"
        >
          {slidesHome.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-[400px] flex flex-col justify-center items-center text-white text-center p-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.imagem})` }}
              >
                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Conteúdo sobreposto */}
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">{slide.titulo}</h2>
                  <p className="mt-4 text-lg drop-shadow-md">{slide.subTitulo}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCarousel;
