import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Membros from "../pages/membros/Membros";
import Sobre from "../pages/sobre/Sobre";
import { Navbar } from "@/pages/shared/navbar/navbar";
import Footer from "@/pages/shared/footer/Footer";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
