import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { JSX } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";

interface Props {
  children: JSX.Element;
}

const formSchema = z.object({
  nome: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
  email: z.email("Digite um e-mail válido"),
  mensagem: z.string().min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
  telefone: z
    .string()
    .regex(/^(\(\d{2}\)\s?\d{5}-\d{4})$/, "Formato inválido. Use (XX) XXXXX-XXXX"),
});

type FormData = z.infer<typeof formSchema>;

const ContatoDialog = ({ children }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados!");
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="contato-modal background-primary text-secondary border-[#dbb826] border-2 rounded-lg">
        <motion.div
        // initial={{ opacity: 0, x: -100 }}
        // animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: -100 }}
        // transition={{ duration: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader className="mb-5">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <DialogTitle className="mb-1">Entre em Contato Conosco!</DialogTitle>
                <DialogDescription>Preencha suas informações e clique em enviar!</DialogDescription>
              </motion.div>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <motion.div>
                  <Label htmlFor="nome">Nome*</Label>
                </motion.div>
                <Input
                  className="border-2 border-[#dbb826] rounded-lg"
                  id="nome"
                  placeholder="Digite seu nome"
                  {...register("nome")}
                />
                {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
              </div>
              <div className="grid gap-3">
                <motion.div>
                  <Label htmlFor="email">Email*</Label>
                </motion.div>
                <Input
                  className="border-2 border-[#dbb826] rounded-lg"
                  id="email"
                  placeholder="exemplo@email.com"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="grid gap-3">
                <motion.div>
                  <Label htmlFor="email">Telefone*</Label>
                </motion.div>
                <Input
                  className="border-2 border-[#dbb826] rounded-lg"
                  id="telefone"
                  placeholder="(00) 00000-0000"
                  {...register("telefone")}
                />
                {errors.telefone && (
                  <p className="text-red-500 text-sm">{errors.telefone.message}</p>
                )}
              </div>
              <div className="grid gap-3">
                <motion.div>
                  <Label htmlFor="mensagem">Mensagem*</Label>
                </motion.div>
                <Textarea
                  className="border-2 border-[#dbb826] rounded-lg"
                  id="mensagem"
                  placeholder="Digite sua mensagem"
                  {...register("mensagem")}
                />
                {errors.mensagem && (
                  <p className="text-red-500 text-sm">{errors.mensagem.message}</p>
                )}
              </div>
            </div>
            <DialogFooter className="mt-5">
              <DialogClose asChild>
                <Button variant="destructive" className="cursor-pointer">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" variant={"tertiary"}>
                Enviar
              </Button>
            </DialogFooter>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ContatoDialog;
