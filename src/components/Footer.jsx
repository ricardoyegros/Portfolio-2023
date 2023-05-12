import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="w-full border-t-2 border-solid border-dark font-montserrat font-medium text-xl ">
            <div className="py-8 px-6 flex items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center">
            {"<Si trabajamos juntos llegaremos más lejos />"}
            </div>
            <Link to="mailto:ricardo_yegros@hotmail.com" className="hover:underline hover:underline-offset-2">
                ¡Creémos un proyecto juntos!<span className="text-primary text-2xl px-1">&#9825;</span>
            </Link>
            </div>
        </footer>
    )
}