import { Link } from "react-router-dom";
import { GithubIcon } from "./Icons";
import {useDarkModeContext} from "../contexts/darkModeContext";
export default function Projects({ title, type, img, link, github,summary }) {
  const {darkMode} = useDarkModeContext();
  return (
    <div className="col-span-12">
      <article className={`w-full flex items-center justify-between rounded-3xl border border-solid ${!darkMode ? "border-primary bg-light" : "border-primaryDark bg-dark" } shadow-black shadow-2xl p-12`}>
        <img src={img} alt="Imagen de Proyecto" className="w-1/2" />
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 gap-6">
          <span className={`${!darkMode ? "text-primary" : "text-primaryDark" } font-medium font-montserrat text-xl `}>
            {type}
          </span>
          <h2 className={`my-2 w-full text-start text-4xl font-bold underline ${!darkMode ? "text-dark" : "text-light"}`}>
          {title}
          </h2>
          <p className={`${!darkMode ? "text-dark" : "text-light"}`}>{summary}</p>
          <div className="flex justify-center items-center gap-14">
            <Link
              to={github}
              target="_blank"
              className={` ${!darkMode ? "text-dark" : "text-light"} w-10 hover:scale-105 transition-all ease-in duration-300`}
            >
              <GithubIcon />
            </Link>
            <Link
              to={link}
              target="_blank"
              className={` ${!darkMode ? "bg-dark text-light hover:bg-light hover:text-dark hover:border-dark" : "bg-light text-dark hover:bg-dark hover:text-light hover:border-light"} rounded-lg p-2 px-6 font-semibold font-montserrat hover:cursor-pointer  transition-all ease-in duration-300 border-2 border-solid `}
            >
              Ver Proyecto
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
