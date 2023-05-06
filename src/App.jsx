import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CertificationPage from "./pages/CertificationPage/CertificationPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import TestimoniesPage from "./pages/TestimoniesPage/TestimoniesPage";
import { routes } from "./routes/routes";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path={routes.ABOUT_ME} element={<AboutPage />} />
          <Route path={routes.CERTIFICATIONS} element={<CertificationPage />} />
          <Route path={routes.SKILLS} element={<SkillsPage />} />
          <Route path={routes.PROJECTS} element={<ProjectsPage />} />
          <Route path={routes.TESTIMONIES} element={<TestimoniesPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
