import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import Projects from "../../components/Projects";
import AlkyBank from "../../assets/images/projects/alkemy-wallet.jpg";
import BuscadorPeliculas from "../../assets/images/projects/Buscador-de-peliculas (2).jpg";
import NetClone from "../../assets/images/projects/netflixclone.png";
import PiFood from "../../assets/images/projects/Pi food.png";
import Portfolio2022 from "../../assets/images/projects/portfolio.png";
import TechStore from "../../assets/images/projects/TechStore.png";
export default function ProjectsPage() {
  return (
    <Layout className="pt-12">
      <AnimatedText text="Mis Proyectos" className="!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl" />
      <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <Projects
          type="Billetera Virtual"
          link="https://drive.google.com/file/d/1M9X-P1DfWjz-6-0W47oLqiNqxZpPjb4r/view"
          title="AlkyBank (2022)"
          img={AlkyBank}
          github="https://github.com/NazarenoRios/alkybank"
          summary="Este proyecto duró dos semanas y entre las principales features que contiene la wallet está la posibilidad de realizar un registro o inicio de sesión tanto con email como con google, una vez dentro muestra balance de la cuenta, se pueden realizar transferencias a otra cuenta, realizar depósitos, pagos, ver los últimos movimientos, también ver la totalidad de los mismos y realizarles distintos filtros por tipo, concepto, etc. Las principales tecnologías usadas para dicha tienda virtual fueron: HTML, JavaScript, React, Redux, TailwindCSS y Git."
        />
        <Projects
          type="Tienda Virtual"
          link="https://www.youtube.com/watch?v=xrEet1TXwus"
          title="TechStore (2022)"
          img={TechStore}
          github="https://github.com/ricardoyegros/PF-Frontend"
          summary="En el Bootcamp formé parte de un grupo de 7 personas con las cuales creamos un e-commerce totalmente funcional desde cero donde mi rol principal fué del lado del Front-End, creando y modularizando componentes, aplicándole lógica a los mismos, adaptando doble persistencia al carrito de compras y solucionando los bugs que fueron surgiendo con el correr del proyecto como principales aportes.

Las principales tecnologías usadas para dicha tienda virtual fueron: JavaScript, React, Redux, Material UI, NodeJS, Express, Sequelize y Git."
        />
        <Projects
          type="Web para búsqueda de películas"
          link="https://github.com/ricardoyegros/Prueba-tecnica-React-hooks"
          title="Buscador de Películas (2022)"
          img={BuscadorPeliculas}
          github="https://github.com/ricardoyegros/Prueba-tecnica-React-hooks"
          summary="Este es un Challenge de React del gran Miguel Ángel Durán García <midudev/> en el cuál pusimos en práctica los hooks de useRef, useMemo, useCallback al crear una aplicación que busca películas por su nombre y además creamos dos customs hooks para el proyecto.
Los requisitos que tiene dicha App son los siguientes:
- Necesita mostrar un input para buscar la película y un botón para realizar la búsqueda.
- Lista las películas encontradas y muestra el título, año y poster.
- Haz que las películas se muestren en un grid responsive.
- Evitar que se haga la misma búsqueda dos veces seguidas.
- Haz que la búsqueda se haga automáticamente al escribir.
- Evita que se haga la búsqueda continuamente al escribir (utiliza un debounce)."
        />
        <Projects
          type="Web de películas"
          link="https://netflix-clone-d0d36.web.app/"
          title="Clone Netflix (2022)"
          img={NetClone}
          github="https://github.com/ricardoyegros/netflxHomeClone"
          summary="Este proyecto es un clon de la pagina principal de Netflix"
        />
        <Projects
          type="Portafolio Personal"
          link="https://portfolio2022-green.vercel.app/"
          title="Portafolio Ricardo Yegros (2022)"
          img={Portfolio2022}
          github="https://github.com/ricardoyegros/Portfolio2022"
          summary="Portafolio Personal del año 2022 hecho con HTML y Bootstrap"
        />
        <Projects
          type="Web de Recetas"
          link="https://github.com/ricardoyegros/PI-Henry-Food"
          title="Henry PI Food (2022)"
          img={PiFood}
          github="https://github.com/ricardoyegros/PI-Henry-Food"
          summary="Se trata de una Single Page Application (SPA) que consume datos de una API externa (spoonacular) el cual fué mi proyecto individual en el cual pude volcar todos los conocimientos adquiridos durante el cursado del bootcamp de Full Stack Developer.
El mismo poseé filtros de búsqueda, categorías y ordenamientos, a su vez puede crear nuevas recetas a partir de un formulario de creación y al terminar la puede visualizar en la Home Page y también acceder al detalle de la misma, fué construido con las siguientes tecnologías: JavaScript, React, Redux, CSS, NodeJS, Express, Sequelize y Git. Como sistema de gestión de bases de datos utilicé PostgreSQL"
        />
      </div>
    </Layout>
  );
}
