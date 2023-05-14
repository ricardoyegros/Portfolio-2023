import { Link } from "react-router-dom";
import { GithubIcon } from "../../../components/Icons";
import {useDarkModeContext} from "../../../contexts/darkModeContext";
export default function Projects({ title, type, img, link, github,summary }) {
  const {darkMode} = useDarkModeContext();
  return (
    <div className="col-span-12">
      <article className={`w-full flex items-center justify-between rounded-3xl border border-solid ${!darkMode ? "border-primary bg-light" : "border-primaryDark bg-dark" } shadow-black shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4`}>
        <img src={img} alt="Imagen de Proyecto" className="w-1/2 md:w-full md:rounded-lg" />
        <div className="w-1/2 flex flex-col items-start lg:items-center justify-between pl-6 lg:p-0 gap-6 lg:w-full">
          <span className={`${!darkMode ? "text-primary" : "text-primaryDark" } lg:pt-4 font-medium xs:text-sm font-montserrat text-xl`}>
            {type}
          </span>
          <h2 className={`my-2 w-full text-start lg:text-center text-4xl md:text-2xl font-bold underline ${!darkMode ? "text-dark" : "text-light"}`}>
          {title}
          </h2>
          <p className={`${!darkMode ? "text-dark" : "text-light"} lg:text-justify md:text-sm `}>{summary}</p>
          <div className="flex justify-center lg:w-full items-center gap-14">
            <Link
              to={github}
              target="_blank"
              className={` ${!darkMode ? "text-dark" : "text-light"} w-10 md:w-8 hover:scale-105 transition-all ease-in duration-300 lg:order-2`}
            >
              <GithubIcon />
            </Link>
            <Link
              to={link}
              target="_blank"
              className={` ${!darkMode ? "bg-dark text-light hover:bg-light hover:text-dark hover:border-dark" : "bg-light text-dark hover:bg-dark hover:text-light hover:border-light"} rounded-lg p-2 px-6 md:px-4 md:p-1 font-semibold font-montserrat hover:cursor-pointer  transition-all ease-in duration-300 border-2 border-solid lg:order-1`}
            >
              Ver Proyecto
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
