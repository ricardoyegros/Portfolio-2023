import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react"

export default function AnimatedNumbers({value}){
    const miRef = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 30000});
    const isInView = useInView(miRef, {once:true});
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue]) 
    useEffect(()=>{
        springValue.on("change", (latest)=>{
            if(miRef.current && latest.toFixed(0) <= value){
                miRef.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue, value]) 
    return(
        <span ref={miRef}></span>
    )
}