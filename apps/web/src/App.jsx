import { Menu } from "Menu";
import { DependenciesContext } from 'dependenciescontext';
import { IntroPage } from 'intro-page';
import { AboutPage } from 'about-page';
import { ProjectPage } from 'projects-page';
import { SkillsPage } from 'skills-page';
import { Footer } from 'footer'
import { Grid } from "@mui/material";

import Profile from './assets/Profile.png'
import projects from './data/projects.json'
import { Skills } from './data/Skills';


function App() {

  return (
    <DependenciesContext.Provider value={{Profile, projects, Skills}}>
      <Menu />
      <IntroPage />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <Footer />
    </DependenciesContext.Provider>
  )
}

export default App
