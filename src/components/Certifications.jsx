import { Link } from "react-router-dom";

export default function Certifications({
  type,
  link,
  title,
  img,
  academyLink,
}) {
  return (

    <div className="col-span-6">
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
        <img
          src={img}
          alt="Imagen del Proyecto"
          className="w-full overflow-hidden rounded-lg"
        />
        <div className="w-full flex flex-col items-center justify-between mt-4">
          <Link to={academyLink} target="_blank">
            <span className="text-primary font-medium font-montserrat text-xl hover:underline">
              {type}
            </span>
          </Link>
            <h2 className="my-2 w-full text-center text-3xl font-bold font-montserrat">
              {title}
            </h2>
          <div className="w-full mt-2 flex items-center justify-center">
            <Link
              to={link}
              target="_blank"
              className="rounded-lg bg-dark text-light p-2 px-6 font-semibold font-montserrat hover:cursor-pointer hover:bg-light hover:text-dark transition-all ease-in duration-300 border-2 border-solid hover:border-dark"
            >
              Ver Certificado
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
