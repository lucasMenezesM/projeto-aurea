import React from "react";

import BannerHomePAge from "./components/BannerHomePage";
import Especialidades from "./components/Especialidades";
import ComoAjudamos from "./components/ComoAjudamos";
import HomeCarousel from "./components/HomeCarousel";
import ContatoHome from "./components/ContatoHome";

const Home: React.FC = () => {
  return (
    <div className=" background-primary text-white">
      <BannerHomePAge />
      <Especialidades />
      <ComoAjudamos />
      <HomeCarousel />
      <ContatoHome />
    </div>
  );
};

export default Home;
