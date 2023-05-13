import { useLocation, useNavigate } from "react-router-dom";
import {useDarkModeContext} from "../contexts/darkModeContext"
export default function CustomMobileLink({to, title, className="", toggle}){
    const navigate = useNavigate();
    const router = useLocation();
    const {darkMode} = useDarkModeContext();
    function handleClick () {
        toggle();
        navigate(to);
    }
    return(
        <button onClick={handleClick} className={`${className} relative group font-montserrat ${!darkMode ? "text-light" : "text-dark"}`}>
        {title}
        <span className={`h-[1px] inline-block ${!darkMode ? "bg-light" : "bg-dark"} absolute left-0 -bottom-0.5 group-hover:wfull  transition-[width] ease duration-300 ${router.pathname === to ? "w-full" : "w-0"}`}>
            &nbsp;
        </span>
        </button>
    )
}