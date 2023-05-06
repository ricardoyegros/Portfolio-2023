import { Link,useLocation } from "react-router-dom";

export default function CustomLink({to, title, className=""}){
    const router = useLocation();
    return(
        <Link to={to} className={`${className} relative group font-montserrat`}>
        {title}
        <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:wfull  transition-[width] ease duration-300 ${router.pathname === to ? "w-full" : "w-0"}`}>
            &nbsp;
        </span>
        </Link>
    )
}