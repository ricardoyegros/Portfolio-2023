import { routes } from "../routes/routes.js";
import Logo from "./Logo.jsx";
import CustomLink from "./CustomLink.jsx";
import CustomMobileLink from "./CustomMobileLink.jsx";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons.jsx";
import {motion} from "framer-motion";
import {useDarkModeContext} from "../contexts/darkModeContext.jsx"
import { useState } from "react";
export default function NavBar() {
 const {darkMode,setDarkMode} = useDarkModeContext();
 const [isOpen, setIsOpen] = useState(false);
 function handleClick () {
  setIsOpen(!isOpen);
 }
  return (
    <header className="w-full px-32 py-8 font-montserrat font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      {/* Hamburguer menu */}
      <button className="flex-col justify-center items-center hidden xl:flex" onClick={handleClick}>
        <span className={` ${!darkMode ? "bg-dark" : "bg-light"} block h-0.5 w-6 rounded-sm transition-all ease-in duration-300 ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={` ${!darkMode ? "bg-dark" : "bg-light"} block h-0.5 w-6 rounded-sm my-0.5 transition-all ease-in duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={` ${!darkMode ? "bg-dark" : "bg-light"} block h-0.5 w-6 rounded-sm transition-all ease-in duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
      </button>
      {/* Hamburguer menu */}
      {/* Desktop menu */}
      <div className="w-full flex justify-between items-center xl:hidden">
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
      </div>
      {/* Desktop menu */}
      {/* Mobile Links */}
      {isOpen ? <motion.div initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}} animate={{scale:1, opacity:1}} className={` ${!darkMode ? "bg-dark/90" : "bg-light/75"} rounded-lg backdrop-blur-md py-32 min-w-[70vw] flex flex-col gap-8 justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
      <nav className="flex items-center flex-col gap-2 justify-center">
        <CustomMobileLink to={routes.ABOUT_ME} title={"Sobre Mí"}  toggle={handleClick} />
        <CustomMobileLink to={routes.SKILLS} title={"Habilidades"} toggle={handleClick} />
        <CustomMobileLink to={routes.CERTIFICATIONS} title={"Certificaciones"}  toggle={handleClick} />
        <CustomMobileLink to={routes.PROJECTS} title={"Proyectos"} toggle={handleClick} />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3 sm:mx-1" href="https://twitter.com/rickyegros" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className={`w-6 mx-3 sm:mx-1 ${!darkMode ? "text-light" : "text-dark"}`} href="https://github.com/ricardoyegros" target="_blank" rel="noreferrer">
          <GithubIcon />
        </motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3 sm:mx-1" href="https://www.linkedin.com/in/ricardo-yegros-43623a188/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </motion.a>
        <motion.button onClick={()=> setDarkMode(!darkMode)} whileHover={{y:-2}} whileTap={{scale:0.9}} className={`w-6 ml-3 sm:mx-1 ${!darkMode ? "text-light" : "text-dark"}`} href="#" target="_blank" rel="noreferrer">
          {darkMode  ? <MoonIcon /> : <SunIcon/>}
        </motion.button>
      </nav>
     </motion.div> : ""}
      {/* Mobile Links */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
}
