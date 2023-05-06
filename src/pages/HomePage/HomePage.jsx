import Layout from "../../components/Layout";
import homePic from "../../assets/images/profile/[removal.ai]_tmp-6455540b471a6.png";
import AnimatedText from "../../components/AnimatedText";
import magicPicture from "../../assets/images/pngwing.com.png";
import { Link } from "react-router-dom";
export default function HomePage(){
    return(
        <Layout className="pt-16">
            <div className="flex items-center justify-between w-full">
                <div className="w-1/2">
                    <img src={homePic} alt="home page picture"  className="w-full h-auto"/>
                </div>
                <div className="w-1/2 ">
                    <AnimatedText text="¡Bienvenido! Es un placer verte por aquí. Espero que disfrutes tu visita..." className="!text-left !text-6xl" />
                    <p className="my-4 text-base font-medium font-montserrat">
                    Te invito a conocerme un poco más, para facilitarte esa tarea te dejo aquí debajo mi hoja de vida y un boton mágico para que nos pongamos en contacto si quieres.
                    </p>
                    <div className="flex items-center self-start mt-2">
                        <Link to="/CVFinalRicardoYegros (1).pdf" target={"_blank"} download={true} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-montserrat font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark">Descarga mi CV</Link>
                        <Link to="mailto:ricardo_yegros@hotmail.com" className="ml-4 text-lg font-montserrat font-medium capitalize text-dark hover:underline">¡Hablemos!</Link>
                    </div>
                </div>
            </div>
            <div className="absolute right-8 bottom-8 inline-block w-24">
                <img src={magicPicture} alt="varita mágica" className="w-full h-auto"/>
            </div>
        </Layout>
    )
}