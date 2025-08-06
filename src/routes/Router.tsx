import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Membros from "../pages/membros/Membros";
import Sobre from "../pages/sobre/Sobre";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};
