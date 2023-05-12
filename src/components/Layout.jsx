import NavBar from "./NavBar";
import Footer from "./Footer";
import {useDarkModeContext} from "../contexts/darkModeContext"
export default function Layout({children, className=""}){
    const {darkMode} = useDarkModeContext();
    return(
        <main className={`${!darkMode ? "bg-light" : "bg-dark"} w-full min-h-screen`}>
        <NavBar/>
        <div className={`w-full h-full inline-block z-0 ${!darkMode ? "bg-light" : "bg-dark"} p-32 ${className}`}>
            {children}
        </div>
        <Footer />
        </main>
    )
}