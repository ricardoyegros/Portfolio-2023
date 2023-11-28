import AlkyBank from "../../../assets/images/projects/alkemy-wallet.jpg";
import BuscadorPeliculas from "../../../assets/images/projects/Buscador-de-peliculas (2).jpg";
import NetClone from "../../../assets/images/projects/netflixclone.png";
import PiFood from "../../../assets/images/projects/Pi food.png";
import Portfolio2022 from "../../../assets/images/projects/portfolio.png";
import TechStore from "../../../assets/images/projects/TechStore.png";
import Portfolio2023 from "../../../assets/images/projects/Portafolio2023.jpg";
import Eiche from "../../../assets/images/projects/eiche.jpg";
import Zirio from "../../../assets/images/projects/zirio.jpg";
import Desafio from "../../../assets/images/projects/desafio.jpg";
import { english, spanish } from "./projects.data";
export const projects = (englishMode) => [{
    type: "Tutor Docente Full Stack JavaScript",
    link: "https://desafiolatam.com/",
    title: englishMode ? "Desafio Latam (Current)":"Desafio Latam (Actualidad)",
    img: Desafio,
    github: "https://github.com/ricardoyegros",
    summary: englishMode ? english.desafioDescription : spanish.desafioDescription,
    englishMode: englishMode
  },{
    type: "Front End Developer",
    link: "https://www.ziriodao.com/",
    title: englishMode ? "Zirio DAO (Current)":"Zirio DAO (Actualidad)",
    img: Zirio,
    github: "https://github.com/ricardoyegros",
    summary: englishMode ? english.zirioDescription : spanish.zirioDescription,
    englishMode: englishMode
  },{
    type: "Full Stack Developer",
    link: "https://eiche.tech/",
    title: englishMode ? "Eiche Chile (Current)":"Eiche Chile (Actualidad)",
    img: Eiche,
    github: "https://gitlab.com/ricardo_yegros",
    summary: englishMode ? english.eicheDescription : spanish.eicheDescription,
    englishMode: englishMode
  },{
    type: englishMode ? english.walletTitle : spanish.walletTitle,
    link: "https://drive.google.com/file/d/1M9X-P1DfWjz-6-0W47oLqiNqxZpPjb4r/view",
    title: "AlkyBank (2022)",
    img: AlkyBank,
    github: "https://github.com/NazarenoRios/alkybank",
    summary: englishMode ? english.walletDescription : spanish.walletDescription,
    englishMode: englishMode
  },{
    type:englishMode ? english.techTitle : spanish.techTitle,
    link:"https://www.youtube.com/watch?v=xrEet1TXwus",
    title:"TechStore (2022)",
    img:TechStore,
    github:"https://github.com/ricardoyegros/PF-Frontend",
    summary:englishMode ? english.techDescription : spanish.techDescription,
    englishMode:englishMode
  },{
    type:englishMode ? english.portfolio2023Title: spanish.portfolio2023Title,
    link:"https://www.ricardoyegros.com.ar",
    title:"Portafolio Ricardo Yegros (2023)",
    img:Portfolio2023,
    github:"https://github.com/ricardoyegros/Portfolio-2023",
    summary:englishMode ? english.portfolio2023Description : spanish.portfolio2023Description,
    englishMode:englishMode
  },{
    type:englishMode ? english.searchMovieTitle : spanish.searchMovieTitle,
    link:"https://github.com/ricardoyegros/Prueba-tecnica-React-hooks",
    title:"Buscador de Películas (2022)",
    img:BuscadorPeliculas,
    github:"https://github.com/ricardoyegros/Prueba-tecnica-React-hooks",
    summary:englishMode ? english.searchMovieDescription : spanish.searchMovieDescription,
    englishMode:englishMode
  },{
    type:englishMode ? english.clonNetTitle : spanish.clonNetTitle,
    link:"https://netflix-clone-d0d36.web.app/",
    title:"Clone Netflix (2022)",
    img:NetClone,
    github:"https://github.com/ricardoyegros/netflxHomeClone",
    summary:englishMode ? english.clonNetDescription : spanish.clonNetDescription,
    englishMode:englishMode
  },{
    type:englishMode ? english.portfolio2022Title : spanish.portfolio2022Title,
    link:"https://portfolio2022-green.vercel.app/",
    title:"Portafolio Ricardo Yegros (2022)",
    img:Portfolio2022,
    github:"https://github.com/ricardoyegros/Portfolio2022",
    summary:englishMode ? english.portfolio2022Description : spanish.portfolio2022Description,
    englishMode:englishMode
  },{
    type:englishMode ? english.recipesTitle : spanish.recipesTitle,
    link:"https://github.com/ricardoyegros/PI-Henry-Food",
    title:"Henry PI Food (2022)",
    img:PiFood,
    github:"https://github.com/ricardoyegros/PI-Henry-Food",
    summary:englishMode ? english.recipesDescription : spanish.recipesDescription,
    englishMode:englishMode
  }]