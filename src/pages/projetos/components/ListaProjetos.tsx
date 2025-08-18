import type { TipoProjeto } from "@/data/projetos";
import projetos from "@/data/projetos";
import ExibicaoProjetos from "./ExibicaoProjetos";

const ListaProjetos: React.FC<{ tipoProjeto: TipoProjeto | "todos" }> = ({ tipoProjeto }) => {
  if (tipoProjeto === "todos") {
    return (
      <div className="container">
        <ProjetosTecnologia />
        <ProjetosArquitetura />
        <ProjetosNegocios />
        <ProjetosEletrica />
        <ProjetosMaquinas />
      </div>
    );
  }

  if (tipoProjeto === "tecnologia") {
    return (
      <div>
        <ProjetosTecnologia />
      </div>
    );
  }

  if (tipoProjeto == "arquitetura") {
    return (
      <div>
        <ProjetosArquitetura />
      </div>
    );
  }

  if (tipoProjeto == "negocios") {
    return (
      <div>
        <ProjetosNegocios />
      </div>
    );
  }

  if (tipoProjeto == "eletrica") {
    return (
      <div>
        <ProjetosEletrica />
      </div>
    );
  }

  if (tipoProjeto == "maquinas") {
    return (
      <div>
        <ProjetosMaquinas />
      </div>
    );
  }
};

const ProjetosTecnologia: React.FC = () => {
  const projetosTecnologia = projetos.filter((projeto) => projeto.tipoProjeto === "tecnologia");
  return <ExibicaoProjetos titulo="Desenvolvimento de Tecnologias" projetos={projetosTecnologia} />;
};

const ProjetosArquitetura: React.FC = () => {
  const projetosArquitetura = projetos.filter((projeto) => projeto.tipoProjeto === "arquitetura");
  return (
    <ExibicaoProjetos titulo="Projetos de Arquitetura e Urbanismo" projetos={projetosArquitetura} />
  );
};

const ProjetosNegocios: React.FC = () => {
  const projetosNegocios = projetos.filter((projeto) => projeto.tipoProjeto === "negocios");
  return (
    <ExibicaoProjetos
      titulo="Desenvolvimento de Soluções de Negócios"
      projetos={projetosNegocios}
    />
  );
};

const ProjetosEletrica: React.FC = () => {
  const projetosEletrica = projetos.filter((projeto) => projeto.tipoProjeto === "eletrica");
  return (
    <ExibicaoProjetos titulo="Desenvolvimento de Projetos Elétricos" projetos={projetosEletrica} />
  );
};

const ProjetosMaquinas: React.FC = () => {
  const projetosMaquinas = projetos.filter((projeto) => projeto.tipoProjeto === "maquinas");
  return (
    <ExibicaoProjetos
      titulo="Desenvolvimento de Projetos de Máquinas"
      projetos={projetosMaquinas}
    />
  );
};

export default ListaProjetos;
