import { useDarkModeContext } from "../../../contexts/darkModeContext";
import { useEnglishModeContext } from "../../../contexts/englishModeContext";
import EnglishParagraphOne from "./englishParagraph/EnglishParagraphOne";
import EnglishParagraphTwo from "./englishParagraph/EnglishParagraphTwo";
import EnglishParagraphThree from "./englishParagraph/EnglishParagraphThree";
import EnglishParagraphFour from "./englishParagraph/EnglishParagraphFour";
import AnimatedHours from "./AnimatedHours";
import { english, spanish, keyWords } from "../data/aboutPage.data";
export default function AboutInEnglish({ children }) {
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
          {english.introduce}
        </h2>
        <EnglishParagraphOne darkMode={darkMode} english={english} />
        <EnglishParagraphTwo
          darkMode={darkMode}
          english={english}
          keyWords={keyWords}
        />
        <EnglishParagraphThree
          darkMode={darkMode}
          english={english}
          keyWords={keyWords}
        />
      </div>
      {children}
      <div className="col-span-2 flex flex-col gap-8 items-start justify-center xl:col-span-8 flex-wrap md:order-3 ">
        <EnglishParagraphFour
          darkMode={darkMode}
          english={english}
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
