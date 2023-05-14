export default function HamburguerMenu({isOpen,darkMode,handleClick}) {
  return (
    <button
      className="flex-col justify-center items-center hidden xl:flex"
      onClick={handleClick}
    >
      <span
        className={` ${
          !darkMode ? "bg-dark" : "bg-light"
        } block h-0.5 w-6 rounded-sm transition-all ease-in duration-300 ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={` ${
          !darkMode ? "bg-dark" : "bg-light"
        } block h-0.5 w-6 rounded-sm my-0.5 transition-all ease-in duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={` ${
          !darkMode ? "bg-dark" : "bg-light"
        } block h-0.5 w-6 rounded-sm transition-all ease-in duration-300 ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
}
