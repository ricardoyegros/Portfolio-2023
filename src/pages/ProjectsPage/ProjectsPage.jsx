import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import AlkyBank from "../../assets/images/projects/alkemy-wallet.jpg";
import BuscadorPeliculas from "../../assets/images/projects/Buscador-de-peliculas (2).jpg";
import NetClone from "../../assets/images/projects/netflixclone.png";
import PiFood from "../../assets/images/projects/Pi food.png";
import Portfolio2022 from "../../assets/images/projects/portfolio.png";
import TechStore from "../../assets/images/projects/TechStore.png";
import Projects from "./components/Projects";
import {useEnglishModeContext} from "../../contexts/englishModeContext";
import {spanish, english} from "./data/projects.data";
export default function ProjectsPage() {
  const {englishMode} = useEnglishModeContext();
  return (
    <Layout className="pt-12">
      <AnimatedText text={englishMode ? english.title : spanish.title} className="!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl" />
      <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <Projects
          type={englishMode ? english.walletTitle : spanish.walletTitle}
          link="https://drive.google.com/file/d/1M9X-P1DfWjz-6-0W47oLqiNqxZpPjb4r/view"
          title="AlkyBank (2022)"
          img={AlkyBank}
          github="https://github.com/NazarenoRios/alkybank"
          summary={englishMode ? english.walletDescription : spanish.walletDescription}
          englishMode={englishMode}
        />
        <Projects
          type={englishMode ? english.techTitle : spanish.techTitle}
          link="https://www.youtube.com/watch?v=xrEet1TXwus"
          title="TechStore (2022)"
          img={TechStore}
          github="https://github.com/ricardoyegros/PF-Frontend"
          summary={englishMode ? english.techDescription : spanish.techDescription}
          englishMode={englishMode}
        />
        <Projects
          type={englishMode ? english.searchMovieTitle : spanish.searchMovieTitle}
          link="https://github.com/ricardoyegros/Prueba-tecnica-React-hooks"
          title="Buscador de Películas (2022)"
          img={BuscadorPeliculas}
          github="https://github.com/ricardoyegros/Prueba-tecnica-React-hooks"
          summary={englishMode ? english.searchMovieDescription : spanish.searchMovieDescription}
          englishMode={englishMode}
        />
        <Projects
          type={englishMode ? english.clonNetTitle : spanish.clonNetTitle}
          link="https://netflix-clone-d0d36.web.app/"
          title="Clone Netflix (2022)"
          img={NetClone}
          github="https://github.com/ricardoyegros/netflxHomeClone"
          summary={englishMode ? english.clonNetDescription : spanish.clonNetDescription}
          englishMode={englishMode}
          />
        <Projects
          type={englishMode ? english.portfolio2022Title : spanish.portfolio2022Title}
          link="https://portfolio2022-green.vercel.app/"
          title="Portafolio Ricardo Yegros (2022)"
          img={Portfolio2022}
          github="https://github.com/ricardoyegros/Portfolio2022"
          summary={englishMode ? english.portfolio2022Description : spanish.portfolio2022Description}
          englishMode={englishMode}
        />
        <Projects
          type={englishMode ? english.recipesTitle : spanish.recipesTitle}
          link="https://github.com/ricardoyegros/PI-Henry-Food"
          title="Henry PI Food (2022)"
          img={PiFood}
          github="https://github.com/ricardoyegros/PI-Henry-Food"
          summary={englishMode ? english.recipesDescription : spanish.recipesDescription}
          englishMode={englishMode}
        />
      </div>
    </Layout>
  );
}
