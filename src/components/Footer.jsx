import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="w-full border-t-2 border-solid border-dark font-montserrat font-medium text-xl ">
            <div className="py-8 px-6 flex items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center">
                Build With <span className="text-primary text-2xl px-1">&#9825;</span>
                by&nbsp;<a href="https://www.linkedin.com/in/ricardo-yegros-43623a188/" rel="noreferrer" target="_blank" className="hover:underline hover:underline-offset-2">Ricardo Yegros</a>
            </div>
            <Link to="mailto:ricardo_yegros@hotmail.com" className="hover:underline hover:underline-offset-2">
                ¡Hablemos!
            </Link>
            </div>
        </footer>
    )
}