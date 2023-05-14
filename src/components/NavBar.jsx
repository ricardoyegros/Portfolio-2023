import Logo from "./Logo.jsx";
import { useDarkModeContext } from "../contexts/darkModeContext.jsx";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";
import HamburguerMenu from "./HamburguerMenu.jsx";
export default function NavBar() {
  const { darkMode, setDarkMode } = useDarkModeContext();
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="w-full px-32 py-8 font-montserrat font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      {/* Hamburguer menu */}
      <HamburguerMenu isOpen={isOpen} darkMode={darkMode} handleClick={handleClick} />
      {/* Desktop menu */}
      <DesktopMenu darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Mobile Links */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode} setDarkMode={setDarkMode} handleClick={handleClick}/>
      {/* Logo Universal in both modes */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
}
