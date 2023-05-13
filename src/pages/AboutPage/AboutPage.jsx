import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import AnimatedNumbers from "../../components/AnimatedNumbers";
import RicardoYegrosPic from "../../assets/images/profile/me.jpg";
import {useDarkModeContext} from "../../contexts/darkModeContext";
export default function AboutPage() {
  const {darkMode} = useDarkModeContext();
  return (
    <Layout className="pt-12 sm:pt-14">
      <AnimatedText text="Pasión por el Front-end" className="lg:!text-7xl sm:!6xl xs:!text-4xl " />
      <div className="grid w-full grid-cols-8 gap-16 mt-12 sm:mt-8 place-items-center">
        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 xs:col-span-6">
          <h2 className={`mb-4 underline text-lg font-bold font-montserrat uppercase sm:w-full sm:text-center ${!darkMode ? "text-primary" : "text-primaryDark"}`}>
            Me presento:
          </h2>
          <p className={`font-medium font-montserrat ${!darkMode ? "text-dark" : "text-light"} sm:text-center sm:text-sm`}>
            ¡Encantado! Mi nombre es Ricardo Yegros, soy <strong>Desarrollador
            Front-end</strong>, apasionado por crear los más <strong>bellos</strong>, <strong>interactivos</strong> y sobre
            todo <strong>escalables</strong> sitios web, siempre enfocado en la experiencia de
            usuario.
          </p>
          <p className={`font-medium font-montserrat mt-4 ${!darkMode ? "text-dark" : "text-light"} sm:text-center sm:text-sm`}>
            Durante la pandemia descubrí que la programación es mi pasión y a
            lo que quiero dedicar el resto de mi carrera por lo cual decidí
            volcarme de lleno hasta egresar del bootcamp de <strong>Henry</strong> como <strong>Full
            Stack Web Developer</strong>.
          </p>
          <p className={`font-medium font-montserrat mt-4 ${!darkMode ? "text-dark" : "text-light"} sm:text-center sm:text-sm`}>
            Una vez terminado decidí continuar el camino del desarrollo
            <strong> Front-end</strong> por lo cual continué especializándome en <strong>ReactJS</strong> en
            plataformas como <strong>Alkemy</strong> y <strong>OpenBootcamp</strong> finalizando con éxito en
            dichas instituciones.
          </p>
        </div>
        <div className={`col-span-3 relative h-max rounded-2xl border-2 shadow-lg shadow-black border-solid ${!darkMode ? "border-primary bg-light" : "border-primaryDark bg-dark"} p-8 xl:col-span-4 md:order-1 md:col-span-8 sm:col-span-6 `}>
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
          <img
            src={RicardoYegrosPic}
            alt="Ricardo Yegros Photo"
            className="w-full h-auto rounded-2xl shadow-lg shadow-black md:max-w-[50vw] lg:max-w-[100vw]"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-8 items-start justify-center xl:col-span-8 flex-wrap md:order-3 sm:col-span-6 ">
        <p className={`font-medium font-montserrat mt-4 sm:pt-0 ${!darkMode ? "text-dark" : "text-light"} sm:text-center sm:text-sm`}>
            Me considero una persona muy proactiva y con ganas de mejorar mis
            habilidades y aprender algo nuevo cada día por lo que actualmente me
            encuentro estudiando el Framework <strong>Vue.js</strong> para incrementar mis
            posibilidades y habilidades en este campo.
          </p>
            <div className="flex flex-col items-center justify-center xl:w-full ">
                <span className={`inline-block text-7xl font-bold font-mono md:text-6xl sm:text-5xl xs:text-4xl ${!darkMode ? "text-primary" : "text-primaryDark"}`}>+<AnimatedNumbers value={1920}/></span>
                <h2 className={`text-xl font-medium font-montserrat capitalize xl:text-center md:text-lg sm:text-base xs:text-sm ${!darkMode ? "text-primary" : "text-primaryDark"}`}>horas programando</h2>
            </div>
        </div>
      </div>
    </Layout>
  );
}
