import Layout from "../../components/Layout";
import homePic from "../../assets/images/profile/[removal.ai]_tmp-6455540b471a6.png";
import AnimatedText from "../../components/AnimatedText";
import magicPicture from "../../assets/images/pngwing.com.png";
import { Link } from "react-router-dom";
import {useDarkModeContext} from "../../contexts/darkModeContext";
import {useEnglishModeContext} from "../../contexts/englishModeContext";
import {english,spanish} from "./data/homePage.data";

export default function HomePage(){
    const {darkMode} = useDarkModeContext();
    const {englishMode} = useEnglishModeContext();
    return(
        <Layout className="pt-16 md:pt-16 sm:pt-8">
            <div className="flex items-center justify-between w-full lg:flex-col">
                <div className="w-1/2 md:w-full">
                    <img src={homePic} alt="home page picture"  className="w-full h-auto lg:hidden md:inline-block md:w-full"/>
                </div>
                <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                    <AnimatedText text={englishMode ? english.title : spanish.title } className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
                    <p className={`my-4 text-base font-medium font-montserrat md:text-sm sm:text-xs ${!darkMode ? "text-dark" : "text-light"}`}>
                    {englishMode ? english.paragraph : spanish.paragraph}
                    </p>
                    <div className="flex items-center self-start mt-2 lg:self-center">
                        <Link to="/CVRicardoYegros2023.pdf" target={"_blank"} download={true} className={`flex items-center p-2.5 px-6 rounded-lg text-lg font-montserrat font-semibold ${!darkMode ? "bg-dark text-light hover:bg-light hover:text-dark hover:border-dark" : "bg-light text-dark hover:bg-dark hover:text-light hover:border-light"} border-2 border-solid border-transparent transition-all ease-in duration-300 md:p-2 md:px-4 md:text-base`}>{englishMode ? english.buttonCv : spanish.buttonCv}</Link>
                        <Link to="mailto:ricardo_yegros@hotmail.com" className={`ml-4 text-lg font-montserrat font-medium capitalize ${!darkMode ? "text-dark" : "text-light" } hover:underline md:text-base`}>{englishMode ? english.buttonToTalk : spanish.buttonToTalk}</Link>
                    </div>
                </div>
            </div>
            <a href={englishMode ? english.WhatsappFromMagicWand : spanish.WhatsappFromMagicWand} target="_blank" rel="noreferrer" className="absolute right-8 bottom-8 inline-block w-24 ">
                <img src={magicPicture} alt="varita mágica" className="w-full h-auto hover:scale-125 transition-all ease-in duration-500 md:hidden"/>
            </a>
        </Layout>
    )
}