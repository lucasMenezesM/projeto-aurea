import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Sobre from "../pages/sobre/Sobre";
import { Navbar } from "@/pages/shared/navbar/navbar";
import Footer from "@/pages/shared/footer/footer";
import Projetos from "@/pages/projetos/Projetos";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
