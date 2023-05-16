import{motion} from "framer-motion"
import CustomMobileLink from "./CustomMobileLink";
import { routes } from "../routes/routes";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import WhatsappIcon from "../assets/images/svgs/whatsapp-svgrepo-com.svg";
import SpainIcon from "../assets/images/svgs/icons8-spain-96.png";
import EnglishIcon from "../assets/images/svgs/icons8-english-96 (1).png";
import {spanish, english} from "../data/navBarData/navBar.data";
export default function MobileMenu({isOpen,setIsOpen,darkMode,setDarkMode,englishMode, setEnglishMode, handleClick}){
    return(<>
        {isOpen ? (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}
              className={` ${
                !darkMode ? "bg-dark/90" : "bg-light/75"
              } rounded-lg backdrop-blur-md py-32 min-w-[70vw] flex flex-col gap-8 justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            >
              <nav className="flex items-center flex-col gap-2 justify-center">
                <CustomMobileLink
                  to={routes.ABOUT_ME}
                  title={englishMode ? english.About : spanish.About }
                  toggle={handleClick}
                />
                <CustomMobileLink
                  to={routes.SKILLS}
                  title={englishMode ? english.Skills : spanish.Skills }
                  toggle={handleClick}
                />
                <CustomMobileLink
                  to={routes.CERTIFICATIONS}
                  title={englishMode ? english.Certifications : spanish.Certifications }
                  toggle={handleClick}
                />
                <CustomMobileLink
                  to={routes.PROJECTS}
                  title={englishMode ? english.Projects : spanish.Projects }
                  toggle={handleClick}
                />
              </nav>
              <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3 sm:mx-1"
                  href="https://twitter.com/rickyegros"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-6 mx-3 sm:mx-1 ${
                    !darkMode ? "text-light" : "text-dark"
                  }`}
                  href="https://github.com/ricardoyegros"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3 sm:mx-1"
                  href="https://www.linkedin.com/in/ricardo-yegros-43623a188/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3 sm:mx-1"
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
            onClick={() => {setEnglishMode(!englishMode), setIsOpen(!isOpen)}}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 sm:mx-1`}
          >
            {englishMode ? <img src={SpainIcon} alt="Spain flag" /> : <img src={EnglishIcon} alt="England flag"/>}
          </motion.button>
                <motion.button
                  onClick={() => {
                    setDarkMode(!darkMode), setIsOpen(!isOpen);
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-6 ml-3 sm:mx-1 ${
                    !darkMode ? "text-light" : "text-dark"
                  }`}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  {darkMode ? <MoonIcon /> : <SunIcon />}
                </motion.button>
              </nav>
            </motion.div>
          ) : (
            ""
          )}
          </>
    )
}