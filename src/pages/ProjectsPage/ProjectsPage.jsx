import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import Projects from "./components/Projects";
import {useEnglishModeContext} from "../../contexts/englishModeContext";
import {spanish, english} from "./data/projects.data";
import { projects } from "./data/structure.data";
export default function ProjectsPage() {
  const {englishMode} = useEnglishModeContext();
  const data = projects(englishMode);
  return (
    <Layout className="pt-12">
      <AnimatedText text={englishMode ? english.title : spanish.title} className="!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl" />
      <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        {data?.map((el) => (
          <Projects 
            {...el}
            key={el.title}
          />
        ))}
      </div>
    </Layout>
  );
}
