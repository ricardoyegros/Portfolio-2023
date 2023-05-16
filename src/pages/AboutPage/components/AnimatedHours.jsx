import AnimatedNumbers from "./AnimatedNumbers";

export default function AnimatedHours({darkMode, englishMode, english, spanish}){
    return(
        <div className="flex flex-col items-center justify-center xl:w-full md:order-1">
            <span
              className={`inline-block text-7xl font-bold font-mono md:text-6xl sm:text-5xl xs:text-4xl ${
                !darkMode ? "text-primary" : "text-primaryDark"
              } `}
            >
              +<AnimatedNumbers value={1920} />
            </span>
            <h2
              className={`text-xl font-medium font-montserrat capitalize xl:text-center md:text-lg sm:text-base xs:text-sm ${
                !darkMode ? "text-primary" : "text-primaryDark"
              }`}
            >
              {englishMode ? english.hours : spanish.hours}
            </h2>
          </div>
    )
}