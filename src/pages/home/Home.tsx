import BannerHomePAge from "./components/BannerHomePage";
import Especialidades from "./components/Especialidades";
import HomeCarousel from "./components/HomeCarousel";

const Home: React.FC = () => {
  return (
    <main>
      <BannerHomePAge />
      <Especialidades />
      <HomeCarousel />
    </main>
  );
};

export default Home;
