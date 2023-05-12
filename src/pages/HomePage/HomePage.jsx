import Layout from "../../components/Layout";
import homePic from "../../assets/images/profile/[removal.ai]_tmp-6455540b471a6.png";
import AnimatedText from "../../components/AnimatedText";
import magicPicture from "../../assets/images/pngwing.com.png";
import { Link } from "react-router-dom";
import {useDarkModeContext} from "../../contexts/darkModeContext";

export default function HomePage(){
    const {darkMode} = useDarkModeContext();
    return(
        <Layout className="pt-16">
            <div className="flex items-center justify-between w-full">
                <div className="w-1/2">
                    <img src={homePic} alt="home page picture"  className="w-full h-auto"/>
                </div>
                <div className="w-1/2 ">
                    <AnimatedText text="¡Bienvenido! Es un placer verte por aquí. Espero que disfrutes tu visita..." className="!text-left !text-6xl" />
                    <p className={`my-4 text-base font-medium font-montserrat ${darkMode ? "text-dark" : "text-light"}`}>
                    Te invito a conocerme un poco más, para facilitarte esa tarea te dejo aquí debajo mi hoja de vida y un boton mágico para que nos pongamos en contacto si quieres.
                    </p>
                    <div className="flex items-center self-start mt-2">
                        <Link to="/CVFinalRicardoYegros (1).pdf" target={"_blank"} download={true} className={`flex items-center p-2.5 px-6 rounded-lg text-lg font-montserrat font-semibold ${darkMode ? "bg-dark text-light hover:bg-light hover:text-dark hover:border-dark" : "bg-light text-dark hover:bg-dark hover:text-light hover:border-light"} border-2 border-solid border-transparent  transition-all ease-in duration-300`}>Descarga mi CV</Link>
                        <Link to="mailto:ricardo_yegros@hotmail.com" className={`ml-4 text-lg font-montserrat font-medium capitalize ${darkMode ? "text-dark" : "text-light" } hover:underline`}>¡Hablemos!</Link>
                    </div>
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=543718530530&text=Hola,%20he%20llegado%20aquí%20desde%20la%20varita%20mágica%20de%20tu%20portafolio" target="_blank" rel="noreferrer" className="absolute right-8 bottom-8 inline-block w-24 ">
                <img src={magicPicture} alt="varita mágica" className="w-full h-auto hover:scale-125 transition-all ease-in duration-500"/>
            </a>
        </Layout>
    )
}