import { Menu } from "Menu";
import { DependenciesContext } from 'dependenciescontext';
import { IntroPage } from 'intro-page';
import { AboutPage } from 'about-page';
import { ProjectPage } from 'projects-page';
import { SkillsPage } from 'skills-page';
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
    </DependenciesContext.Provider>
  )
}

export default App
