import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import AnimatedNumbers from "../../components/AnimatedNumbers";
import RicardoYegrosPic from "../../assets/images/profile/me.jpg";
import {useDarkModeContext} from "../../contexts/darkModeContext";
export default function AboutPage() {
  const {darkMode} = useDarkModeContext();
  return (
    <Layout className="pt-12">
      <AnimatedText text="Pasión por el Front-end" className="!text-7xl" />
      <div className="grid w-full grid-cols-8 gap-16 mt-12 place-items-center">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className={`mb-4 underline text-lg font-bold font-montserrat uppercase ${!darkMode ? "text-primary" : "text-primaryDark"}`}>
            Me presento:
          </h2>
          <p className={`font-medium font-montserrat ${!darkMode ? "text-dark" : "text-light"}`}>
            ¡Encantado! Mi nombre es Ricardo Yegros, soy <strong>Desarrollador
            Front-end</strong>, apasionado por crear los más <strong>bellos</strong>, <strong>interactivos</strong> y sobre
            todo <strong>escalables</strong> sitios web, siempre enfocado en la experiencia de
            usuario.
          </p>
          <p className={`font-medium font-montserrat mt-4 ${!darkMode ? "text-dark" : "text-light"}`}>
            Durante la pandemia descubrí que la programación es mi pasión y a
            lo que quiero dedicar el resto de mi carrera por lo cual decidí
            volcarme de lleno hasta egresar del bootcamp de <strong>Henry</strong> como <strong>Full
            Stack Web Developer</strong>.
          </p>
          <p className={`font-medium font-montserrat mt-4 ${!darkMode ? "text-dark" : "text-light"}`}>
            Una vez terminado decidí continuar el camino del desarrollo
            <strong> Front-end</strong> por lo cual continué especializándome en <strong>ReactJS</strong> en
            plataformas como <strong>Alkemy</strong> y <strong>OpenBootcamp</strong> finalizando con éxito en
            dichas instituciones.
          </p>
        </div>
        <div className={`col-span-3 relative h-max rounded-2xl border-2 shadow-lg shadow-black border-solid ${!darkMode ? "border-primary bg-light" : "border-primaryDark bg-dark"} p-8`}>
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
          <img
            src={RicardoYegrosPic}
            alt="Ricardo Yegros Photo"
            className="w-full h-auto rounded-2xl shadow-lg shadow-black"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-8 items-start justify-center">
        <p className={`font-medium font-montserrat mt-4 ${!darkMode ? "text-dark" : "text-light"}`}>
            Me considero una persona muy proactiva y con ganas de mejorar mis
            habilidades y aprender algo nuevo cada día por lo que actualmente me
            encuentro estudiando el Framework <strong>Vue.js</strong> para incrementar mis
            posibilidades y habilidades en este campo.
          </p>
            <div className="flex flex-col items-center justify-center">
                <span className={`inline-block text-7xl font-bold font-mono ${!darkMode ? "text-primary" : "text-primaryDark"}`}>+<AnimatedNumbers value={1920}/></span>
                <h2 className={`text-xl font-medium font-montserrat capitalize ${!darkMode ? "text-primary" : "text-primaryDark"}`}>horas programando</h2>
            </div>
        </div>
      </div>
    </Layout>
  );
}
