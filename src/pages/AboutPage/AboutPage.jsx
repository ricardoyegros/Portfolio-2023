import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import RicardoYegrosPic from "../../assets/images/profile/me.jpg";
import { useDarkModeContext } from "../../contexts/darkModeContext";
import { useEnglishModeContext } from "../../contexts/englishModeContext";
import { spanish, english } from "./data/aboutPage.data";
import AboutImage from "./components/AboutImage";
import AboutInEnglish from "./components/AboutInEnglish";
import AboutInSpanish from "./components/AboutInSpanish";
export default function AboutPage() {
  const { darkMode } = useDarkModeContext();
  const { englishMode } = useEnglishModeContext();
  return (
    <Layout className="pt-12 sm:pt-14">
      <AnimatedText
        text={englishMode ? english.title : spanish.title}
        className="lg:!text-7xl sm:!6xl xs:!text-4xl "
      />
      <div className="grid w-full grid-cols-8 gap-16 mt-12 sm:mt-8 place-items-center sm:flex sm: flex-col">
        {englishMode ? (
          <AboutInEnglish>
            <AboutImage darkMode={darkMode} image={RicardoYegrosPic} />
          </AboutInEnglish>
        ) : (
          <AboutInSpanish>
            <AboutImage darkMode={darkMode} image={RicardoYegrosPic} />
          </AboutInSpanish>
        )}
      </div>
    </Layout>
  );
}
