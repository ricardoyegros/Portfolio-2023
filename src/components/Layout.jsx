import NavBar from "./NavBar";
import Footer from "./Footer";
import TransitionEffect from "./TransitionEffect";
import {useDarkModeContext} from "../contexts/darkModeContext"
export default function Layout({children, className=""}){
    const {darkMode} = useDarkModeContext();
    return(<>
        <TransitionEffect />
        <main className={`${!darkMode ? "bg-light" : "bg-dark"} w-full min-h-screen`}>
        <NavBar/>
        <div className={`w-full h-full inline-block z-0 ${!darkMode ? "bg-light" : "bg-dark"} p-32 ${className} xl:p-24 lg:p-16 md:-12 sm:p-8`}>
            {children}
        </div>
        <Footer />
        </main>
        </>
    )
}