import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Logo() {
  const MotionCustomLink = motion(Link);
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionCustomLink
        to="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold font-montserrat"
       whileHover={{
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:1, repeat: Infinity}
       }}>
        RY
      </MotionCustomLink>
    </div>
  );
}
