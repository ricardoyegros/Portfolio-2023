import { Link } from "react-router-dom";
import {useDarkModeContext} from "../../../contexts/darkModeContext";
export default function Certifications({
  type,
  link,
  title,
  img,
  academyLink,
}) {
  const {darkMode} = useDarkModeContext();
  return (
    <div className="col-span-6 lg:col-span-12">
      <article className={`w-full flex flex-col items-center justify-center rounded-2xl border border-solid ${!darkMode ? "border-primary bg-light" : "border-primaryDark bg-dark"} shadow-black shadow-2xl p-6 relative`}>
        <img
          src={img}
          alt="Imagen del Proyecto"
          className="w-full overflow-hidden rounded-lg"
        />
        <div className="w-full flex flex-col items-center justify-between mt-4">
          <Link to={academyLink} target="_blank">
            <span className={`${!darkMode ? "text-primary" : "text-primaryDark"} font-medium sm:text-sm font-montserrat text-xl hover:underline`}>
              {type}
            </span>
          </Link>
          <h2 className={` ${!darkMode ? "text-dark" : "text-light"} my-2 w-full text-center text-3xl sm:text-xl font-bold font-montserrat`}>
              {title}
            </h2>
          <div className="w-full mt-2 flex items-center justify-center">
            <Link
              to={link}
              target="_blank"
              className={` ${!darkMode ? "bg-dark text-light hover:bg-light hover:text-dark hover:border-dark" : "bg-light text-dark hover:bg-dark hover:text-light hover:border-light" } rounded-lg  p-2 px-6 font-semibold font-montserrat hover:cursor-pointer transition-all ease-in duration-300 border-2 border-solid`}
            >
              Ver Certificado
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
