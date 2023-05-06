import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({children, className=""}){
    return(
        <main className="bg-light w-full min-h-screen">
        <NavBar/>
        <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
            {children}
        </div>
        <Footer />
        </main>
    )
}