import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type Projeto } from "@/data/projetos";
import ProjetoItem from "./ProjetoItem";

interface CarouselProps {
  projetos: Projeto[];
}

const CarouselProjetos: React.FC<CarouselProps> = ({ projetos }: CarouselProps) => {
  return (
    <div className="flex justify-center">
      {/* // <Carousel className="w-full max-w-xs"> */}
      <Carousel className="w-[70%] sm:w-150 md:w-180">
        <CarouselContent className="-ml-1">
          {projetos.map((projeto) => (
            <CarouselItem key={projeto.id}>
              <ProjetoItem projeto={projeto} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={"secondary"} className="absolute top-1/3 ml-1" />
        <CarouselNext variant={"secondary"} className="absolute top-1/3 mr-1" />
      </Carousel>
    </div>
  );
};

export default CarouselProjetos;
