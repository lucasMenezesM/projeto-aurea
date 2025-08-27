import React from "react";

import BannerHomePAge from "./components/BannerHomePage";
import Especialidades from "./components/Especialidades";
import ComoAjudamos from "./components/ComoAjudamos";
import HomeCarousel from "./components/HomeCarousel";
import ContatoContainer from "../shared/components/ContatoContainer";

const Home: React.FC = () => {
  return (
    <div className=" background-primary text-white">
      <BannerHomePAge />
      <Especialidades />
      <ComoAjudamos />
      <HomeCarousel />
      <ContatoContainer
        titulo="Pronto para conversar sobre seu projeto?"
        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default Home;
