import { motion } from "framer-motion";
import { routes } from "../routes/routes";
import CustomLink from "./CustomLink";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import WhatsappIcon from "../assets/images/svgs/whatsapp-svgrepo-com.svg";

export default function DesktopMenu({darkMode, setDarkMode}){
    return(
        <div className="w-full flex justify-between items-center xl:hidden">
        <nav>
          <CustomLink
            to={routes.ABOUT_ME}
            title={"Sobre Mí"}
            className="mr-4"
          />
          <CustomLink
            to={routes.SKILLS}
            title={"Habilidades"}
            className="mx-4"
          />
          <CustomLink
            to={routes.CERTIFICATIONS}
            title={"Certificaciones"}
            className="mx-4"
          />
          <CustomLink
            to={routes.PROJECTS}
            title={"Proyectos"}
            className="ml-4"
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
            href="https://twitter.com/rickyegros"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${!darkMode ? "text-dark" : "text-light"}`}
            href="https://github.com/ricardoyegros"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            href="https://www.linkedin.com/in/ricardo-yegros-43623a188/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${!darkMode ? "text-dark" : "text-light"}`}
            href="https://api.whatsapp.com/send?phone=543718530530&text=¡Hola!%20he%20llegado%20aquí%20desde%20tu%20portafolio"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={WhatsappIcon}
              alt="whatsapp icon"
            />
          </motion.a>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 ml-3 ${!darkMode ? "text-dark" : "text-light"}`}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </motion.button>
        </nav>
      </div>
    )
}