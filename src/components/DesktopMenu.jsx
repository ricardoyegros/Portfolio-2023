import { motion } from "framer-motion";
import { routes } from "../routes/routes";
import CustomLink from "./CustomLink";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import WhatsappIcon from "../assets/images/svgs/whatsapp-svgrepo-com.svg";
import EnglishIcon from "../assets/images/svgs/icons8-english-96 (1).png";
import SpainIcon from "../assets/images/svgs/icons8-spain-96.png";
import {spanish, english} from "../data/navBarData/navBar.data";

export default function DesktopMenu({darkMode, setDarkMode, englishMode, setEnglishMode}){
    return(
        <div className="w-full flex justify-between items-center xl:hidden">
        <nav>
          <CustomLink
            to={routes.ABOUT_ME}
            title={englishMode ? english.About : spanish.About }
            className="mr-4"
          />
          <CustomLink
            to={routes.SKILLS}
            title={englishMode ? english.Skills : spanish.Skills }
            className="mx-4"
          />
          <CustomLink
            to={routes.CERTIFICATIONS}
            title={englishMode ? english.Certifications : spanish.Certifications }
            className="mx-4"
          />
          <CustomLink
            to={routes.PROJECTS}
            title={englishMode ? english.Projects : spanish.Projects }
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
            href={englishMode ? english.WhatsappFromNavBar : spanish.WhatsappFromNavBar}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={WhatsappIcon}
              alt="whatsapp icon"
            />
          </motion.a>
          <motion.button
            onClick={() => setEnglishMode(!englishMode)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3`}
          >
            {englishMode ? <img src={SpainIcon} alt="Spain flag" /> : <img src={EnglishIcon} alt="England flag"/>}
          </motion.button>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 ml-3 ${!darkMode ? "text-dark" : "text-light"}`}
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </motion.button>
        </nav>
      </div>
    )
}