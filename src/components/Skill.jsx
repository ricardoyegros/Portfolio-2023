import { motion } from "framer-motion";
import {useDarkModeContext} from "../contexts/darkModeContext";
export default function Skill({name, x, y}){
    const {darkMode} = useDarkModeContext();
    return(
        <motion.div className={`flex items-center justify-center rounded-full font-semibold font-montserrat  bg-dark py-3 px-6 shadow-dark cursor-pointer absolute border-2 boder-solid text-light ${!darkMode ? "border-dark xs:text-dark" : "border-light xs:text-light md:text-light"} lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:font-bold xs:border-none`} whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1, repeat: Infinity},scale:1.05
           }} initial={{x:0,y:0}} whileInView={{x:x, y:y}} transition={{duration:1.5}} viewport={{once:true}}>
            {name}
        </motion.div>
    )
}