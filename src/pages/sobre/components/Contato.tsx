import CardGradient from "../../shared/components/CardGradient";
import ContatoDialog from "@/pages/shared/components/ContatoDialog";
import { Button } from "@/components/ui/button";

const Contato: React.FC = () => {
  return (
    <section className="mb-10">
      <CardGradient>
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-tertiary">
              Pronto para criar algo incrível?
            </h3>
            <p className="mt-1 text-gray-300 max-w-xl">
              Vamos conversar sobre seu projeto e desenhar um caminho de entrega com previsibilidade
              e impacto.
            </p>
          </div>
          <ContatoDialog>
            <Button className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-white/10 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition cursor-pointer">
              Fale Conosco
            </Button>
          </ContatoDialog>
        </div>
      </CardGradient>
    </section>
  );
};

export default Contato;
