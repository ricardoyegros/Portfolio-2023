import Layout from "../../components/Layout";
import Skill from "../../components/Skill";
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion";
import {useDarkModeContext} from "../../contexts/darkModeContext";
export default function SkillsPage() {
  const {darkMode} = useDarkModeContext();
  return (
    <Layout className="pt-12">
      <AnimatedText text="Mis Habilidades" className="!text-7xl" />
      <div className={`w-full h-screen relative flex items-center justify-center rounded-full ${darkMode ? "bg-circularLight" : "bg-circularDark"}`}>
        <motion.div
          className={`flex items-center justify-center rounded-full font-semibold font-montserrat bg-dark text-light ${darkMode ? "border-dark" : "border-light"} border-2 border-solid shadow-dark p-8 cursor-pointer`}
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
        <Skill name="Next.js" x="-19vw" y="2vw" />
        <Skill name="Express" x="-5vw" y="-11vw" />
        <Skill name="JavaScript" x="23vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="11vw" />
        <Skill name="Redux" x="-20vw" y="-15vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="PostgreSQL" x="32vw" y="-5vw" />
        <Skill name="Vue.js" x="0vw" y="-19vw" />
        <Skill name="TailwindCSS" x="-32vw" y="3vw" />
      </div>
    </Layout>
  );
}
