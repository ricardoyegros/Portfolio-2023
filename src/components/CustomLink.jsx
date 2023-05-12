import { Link,useLocation } from "react-router-dom";
import {useDarkModeContext} from "../contexts/darkModeContext"
export default function CustomLink({to, title, className=""}){
    const router = useLocation();
    const {darkMode} = useDarkModeContext();
    return(
        <Link to={to} className={`${className} relative group font-montserrat ${darkMode ? "text-dark" : "text-light"}`}>
        {title}
        <span className={`h-[1px] inline-block ${darkMode ? "bg-dark" : "bg-light"} absolute left-0 -bottom-0.5 group-hover:wfull  transition-[width] ease duration-300 ${router.pathname === to ? "w-full" : "w-0"}`}>
            &nbsp;
        </span>
        </Link>
    )
}