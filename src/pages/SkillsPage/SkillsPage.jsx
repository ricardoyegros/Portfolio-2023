import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion";
import {useDarkModeContext} from "../../contexts/darkModeContext";
import Skill from "./components/Skill";
export default function SkillsPage() {
  const {darkMode} = useDarkModeContext();
  return (
    <Layout className="pt-12">
      <AnimatedText text="Mis Habilidades" className="!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl" />
      <div className={`w-full h-screen xs:max-h-96 relative flex items-center justify-center rounded-full ${!darkMode ? "bg-circularLight lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm" : "bg-circularDark lg:bg-circularDarkLg md:bg-circularDarkMd sm:bg-circularDarkSm"}`}>
        <motion.div
          className={`flex items-center justify-center rounded-full font-semibold font-montserrat bg-dark text-light ${!darkMode ? "border-dark xs:text-dark" : "border-light "} border-2 border-solid shadow-dark p-8 cursor-pointer xs:border-none lg:p-6 md:p-4 xs:text-xs xs:p-2 xs:bg-transparent`}
          whileHover={{
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: { duration: 1, repeat: Infinity },
            scale: 1.05,
          }}
        >
          Web
        </motion.div>
        <Skill name="Next.js" x="-22vw" y="0vw" />
        <Skill name="Express" x="0vw" y="-11vw" />
        <Skill name="JavaScript" x="21vw" y="12vw" />
        <Skill name="ReactJS" x="0vw" y="11vw" />
        <Skill name="Redux" x="-18vw" y="-11vw" />
        <Skill name="NodeJS" x="23vw" y="-15vw" />
        <Skill name="PostgreSQL" x="22vw" y="0vw" />
        <Skill name="Vue.js" x="0vw" y="-23vw" />
        <Skill name="TailwindCSS" x="-23vw" y="15vw" />
      </div>
    </Layout>
  );
}
