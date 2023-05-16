import { useDarkModeContext } from "../../../contexts/darkModeContext";
import { useEnglishModeContext } from "../../../contexts/englishModeContext";
import SpanishParagraphOne from "./spanishParagraph/SpanishParagraphOne";
import SpanishParagraphTwo from "./spanishParagraph/SpanishParagraphTwo";
import SpanishParagraphThree from "./spanishParagraph/SpanishParagraphThree";
import SpanishParagraphFour from "./spanishParagraph/SpanishParagraphFour";
import { english, spanish, keyWords } from "../data/aboutPage.data";
import AnimatedHours from "./AnimatedHours";
export default function AboutInSpanish({ children }) {
  const { darkMode } = useDarkModeContext();
  const { englishMode } = useEnglishModeContext();
  return (
    <>
      <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
        <h2
          className={`mb-4 underline text-lg font-bold font-montserrat uppercase sm:w-full sm:text-center ${
            !darkMode ? "text-primary" : "text-primaryDark"
          }`}
        >
          {spanish.introduce}
        </h2>
        <SpanishParagraphOne darkMode={darkMode} spanish={spanish} />
        <SpanishParagraphTwo
          darkMode={darkMode}
          spanish={spanish}
          keyWords={keyWords}
        />
        <SpanishParagraphThree
          darkMode={darkMode}
          spanish={spanish}
          keyWords={keyWords}
        />
      </div>
      {children}
      <div className="col-span-2 flex flex-col gap-8 items-start justify-center xl:col-span-8 flex-wrap md:order-3 ">
        <SpanishParagraphFour
          darkMode={darkMode}
          spanish={spanish}
          keyWords={keyWords}
        />
        <AnimatedHours
          darkMode={darkMode}
          englishMode={englishMode}
          english={english}
          spanish={spanish}
        />
      </div>
    </>
  );
}
