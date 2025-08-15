// import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Facebook, Headset, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ContatoDialog from "../components/ContatoDialog";

const Footer: React.FC = () => {
  return (
    <footer className="footer  text-white pt-4 bg-gradient-to-br from-zinc-900 via-black to-[#55008f]">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-10 py-5">
        <div className="w-80 md:w-1/4">
          <a href={"/"}>
            <img src="src/assets/images/Prancheta 7.png" alt="logo aurea" className="w-full" />
          </a>
        </div>
        <div className="md:w-1/3 flex flex-col  items-center">
          <div className="mb-2">
            <h3>Conheça nossas redes sociais!</h3>
            <div className="flex gap-2 mt-1">
              <Link to={"https://www.linkedin.com"}>
                <Linkedin />
              </Link>
              <Link to={"https://www.instagram.com"}>
                <Instagram />
              </Link>
              <Link to={"https://www.facebook.com"}>
                <Facebook />
              </Link>
              <Link to={"mailto:contato@aurea.com.br"}>
                <Mail />
              </Link>
            </div>
          </div>

          <div className="mt-5">
            <p>Entre em contato conosco!</p>
            <p>
              <span className="font-bold">Email:</span> contato@aurea.com.br
            </p>
            <p>
              <span className="font-bold">Telefone:</span> (22) 1234-5678
            </p>
            <div className="mt-5">
              <ContatoDialog>
                <Button variant={"tertiary"}>
                  <Headset /> Enviar Mensagem
                </Button>
              </ContatoDialog>
            </div>
          </div>
        </div>
        <div className="mx-3 md:mx-0 md:w-1/3  text-center">
          <h3>Venha nos visitar!</h3>
          <p>R. Dr. Siqueira, 273 - Parque Dom Bosco, Campos dos Goytacazes - RJ, 28030-130</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.491040597549!2d-41.33965812482669!3d-21.761248597937325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd43f23beaf61%3A0x8cfd01896b088d0b!2sR.%20Dr.%20Siqueira%2C%20273%20-%20Parque%20Dom%20Bosco%2C%20Campos%20dos%20Goytacazes%20-%20RJ%2C%2028030-130!5e0!3m2!1spt-BR!2sbr!4v1754865148273!5m2!1spt-BR!2sbr"
            width="100%"
            height="150"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            className="mt-3 rounded-lg"
          ></iframe>
        </div>
      </div>
      <div className=" py-5 bg-zinc-900 ">
        <p className="text-center text-md">
          &copy; {new Date().getFullYear()} Aurea Soluções e Projetos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
