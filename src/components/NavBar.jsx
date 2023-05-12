import { routes } from "../routes/routes.js";
import Logo from "./Logo.jsx";
import CustomLink from "./CustomLink.jsx";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons.jsx";
import {motion} from "framer-motion";
import {useDarkModeContext} from "../contexts/darkModeContext.jsx"
export default function NavBar() {
 const {darkMode,setDarkMode} = useDarkModeContext()
  return (
    <header className="w-full px-20 py-8 font-montserrat font-medium flex items-center justify-between">
      <nav>
        <CustomLink to={routes.ABOUT_ME} title={"Sobre Mí"} className="mr-4" />
        <CustomLink to={routes.SKILLS} title={"Habilidades"} className="mx-4"/>
        <CustomLink to={routes.CERTIFICATIONS} title={"Certificaciones"} className="mx-4" />
        <CustomLink to={routes.PROJECTS} title={"Proyectos"} className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3" href="https://twitter.com/rickyegros" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className={`w-6 mx-3 ${!darkMode ? "text-dark" : "text-light"}`} href="https://github.com/ricardoyegros" target="_blank" rel="noreferrer">
          <GithubIcon />
        </motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3" href="https://www.linkedin.com/in/ricardo-yegros-43623a188/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </motion.a>
        <motion.button onClick={()=> setDarkMode(!darkMode)} whileHover={{y:-2}} whileTap={{scale:0.9}} className={`w-6 ml-3 ${!darkMode ? "text-dark" : "text-light"}`} href="#" target="_blank" rel="noreferrer">
          {darkMode  ? <MoonIcon /> : <SunIcon/>}
        </motion.button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
