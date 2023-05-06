import { motion } from "framer-motion"
export default function Skill({name, x, y}){
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold font-montserrat bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute" whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1, repeat: Infinity},scale:1.05
           }} initial={{x:0,y:0}} whileInView={{x:x, y:y}} transition={{duration:1.5}} viewport={{once:true}}>
            {name}
        </motion.div>
    )
}