import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

const Sobre: React.FC = () => {
  return (
    <div>
      <h1 className="text-9xl font-bold underline text-blue-800">Sobre</h1>
      <Button className="" variant={"primary"} size="lg">
        Home
      </Button>

      <Dialog>
        <DialogTrigger>
          <Button variant="primary" size="lg">
            Abrir Modal
          </Button>
        </DialogTrigger>
        <DialogContent className="background-tertiary text-white border-none">
          <DialogHeader>
            <DialogTitle>Titulo do modal?</DialogTitle>
            <DialogDescription className="text-gray-300">Teste de descrição</DialogDescription>
          </DialogHeader>
          <div className="flex">
            <Button variant="destructive" size="lg">
              Excluir
            </Button>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive">Cancelar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sobre;
