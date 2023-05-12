import { Link } from "react-router-dom";
import { GithubIcon } from "./Icons";

export default function Projects({ title, type, img, link, github,summary }) {
  return (
    <div className="col-span-12">
      <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
        <img src={img} alt="Imagen de Proyecto" className="w-1/2" />
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 gap-6">
          <span className="text-primary font-medium font-montserrat text-xl ">
            {type}
          </span>
          <h2 className="my-2 w-full text-start text-4xl font-bold underline">
          {title}
          </h2>
          <p>{summary}</p>
          <div className="flex justify-center items-center gap-14">
            <Link
              to={github}
              target="_blank"
              className="w-10 hover:scale-105 transition-all ease-in duration-300"
            >
              <GithubIcon />
            </Link>
            <Link
              to={link}
              target="_blank"
              className="rounded-lg bg-dark text-light p-2 px-6 font-semibold font-montserrat hover:cursor-pointer hover:bg-light hover:text-dark transition-all ease-in duration-300 border-2 border-solid hover:border-dark"
            >
              Ver Proyecto
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
