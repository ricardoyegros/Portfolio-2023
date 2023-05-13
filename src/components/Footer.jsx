import { Link } from "react-router-dom";
import {useDarkModeContext} from "../contexts/darkModeContext";
export default function Footer(){
    const {darkMode} = useDarkModeContext();
    return(
        <footer className={`w-full border-t-2 border-solid ${!darkMode ? "border-dark" : "border-light"} font-montserrat font-medium text-xl sm:text-base`}>
            <div className="py-8 px-6 flex items-center justify-between lg:flex-col lg:gap-2 lg:py-6">
            <span className={`${!darkMode ? "text-dark" : "text-light"}`}>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className={`flex items-center ${!darkMode ? "text-dark" : "text-light"} lg:text-center`}>
            {"<Si trabajamos juntos llegaremos más lejos />"}
            </div>
            <Link to="mailto:ricardo_yegros@hotmail.com" className={`hover:underline hover:underline-offset-2 ${!darkMode ? "text-dark" : "text-light"}`}>
                ¡Creémos un proyecto juntos!<span className={`${!darkMode ? "text-primary" : "text-primaryDark"} text-2xl px-1`}>&#9825;</span>
            </Link>
            </div>
        </footer>
    )
}