import { Navbar } from "menu";
import { DependenciesContext } from "dependenciescontext";
import { IntroPage } from "intro-page";
import { AboutPage } from "about-page";
import { ProjectPage } from "projects-page";
import { SkillsPage } from "skills-page";
import { Footer } from "footer";
import { ExperiencePage } from "experience-page";

import Profile from "./assets/Profile.png";
import projects from "./data/projects.json";
import { Skills } from "./data/Skills";
import { experience } from "./data/experience";

function App() {
  return (
    <DependenciesContext.Provider
      value={{ Profile, projects, Skills, experience }}
    >
      <Navbar />
      <IntroPage />
      <AboutPage />
      <ExperiencePage />
      <SkillsPage />
      <ProjectPage />
      <Footer />
    </DependenciesContext.Provider>
  );
}

export default App;
