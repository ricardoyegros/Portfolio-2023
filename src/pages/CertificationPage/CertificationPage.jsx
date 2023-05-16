import Layout from "../../components/Layout";
import HenryImg from "../../assets/images/certifications/henry full stack.jpeg";
import Alkemy from "../../assets/images/certifications/alkemy.jpg";
import ReactAvanzadoImg from "../../assets/images/certifications/react avanzado.jpg";
import ReactIntermedioImg from "../../assets/images/certifications/React Intermedio.jpg";
import ReactBasicoImg from "../../assets/images/certifications/react basico.jpg";
import JavaScriptImg from "../../assets/images/certifications/javascript.jpg";
import InglesImg from "../../assets/images/certifications/efset.jpg";
import GoogleActivateImg from "../../assets/images/certifications/google activate.jpg";
import AnimatedText from "../../components/AnimatedText";
import Certifications from "./components/Certifications";
import {useEnglishModeContext} from "../../contexts/englishModeContext";
import {english,spanish} from "./data/certifications.data";
export default function CertificationPage() {
  const {englishMode} = useEnglishModeContext();
  return (
    <Layout className="pt-12">
      <AnimatedText text={englishMode ? english.title : spanish.title} className="!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl" />
      <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
      <Certifications type="Henry" link="https://certificates.soyhenry.com/cert?id=bf9a33a6-add0-4840-af08-71456382ea59" title="<Full Stack Developer />" img={HenryImg} academyLink="https://www.soyhenry.com" englishMode={englishMode}/>
      <Certifications type="Alkemy" link="https://1drv.ms/b/s!Ar03SPROiZU8ngs_zvY6hhr4DINw?e=zPCm7l" title="<Skill Up React/>" img={Alkemy} academyLink="https://www.alkemy.org" englishMode={englishMode}/>
      <Certifications type="OpenBootcamp" link="https://community.open-bootcamp.com/user/ricardo_yegros/certificaciones/7eadcc58-88db-4ced-a453-8c0b0563e526" title="<React Avanzado />" img={ReactAvanzadoImg} academyLink="https://open-bootcamp.com" englishMode={englishMode}/>
      <Certifications type="OpenBootcamp" link="https://community.open-bootcamp.com/user/ricardo_yegros/certificaciones/3396e858-2983-41a2-828a-0de74a9b4a4a" title="<React Intermedio />" img={ReactIntermedioImg} academyLink="https://open-bootcamp.com" englishMode={englishMode}/>
      <Certifications type="OpenBootcamp" link="https://community.open-bootcamp.com/user/ricardo_yegros/certificaciones/ef300dd6-7cb7-4eb8-b5e6-066ad243f160" title="<React Básico />" img={ReactBasicoImg} academyLink="https://open-bootcamp.com" englishMode={englishMode}/>
      <Certifications type="OpenBootcamp" link="https://community.open-bootcamp.com/user/ricardo_yegros/certificaciones/cf6e2b29-704f-43df-87ac-2d01e1f15e00" title="<JavaScript />" img={JavaScriptImg} academyLink="https://open-bootcamp.com" englishMode={englishMode}/>
      <Certifications type="EFFSET" link="https://www.efset.org/cert/MKj4Aa" title="<Inglés Nivel B2 />" img={InglesImg} academyLink="https://www.efset.org/es" englishMode={englishMode}/>
      <Certifications type="Google Activate (ID = MDX CQE B4Z)" link="https://learndigital.withgoogle.com/activate/validate-certificate-code" title="<Comercio Electrónico />" img={GoogleActivateImg} academyLink="https://formacionactivate.withgoogle.com/ia" englishMode={englishMode}/>
      </div>
    </Layout>
  );
}
