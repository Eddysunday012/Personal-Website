import { useState } from 'react'
import { Menu } from "Menu";
import { DependenciesContext } from 'dependenciescontext';
import { IntroPage } from 'intro-page';
import { AboutPage } from 'about-page';
import { ProjectPage } from 'projects-page';
import Profile from './assets/Profile.png'
import projects from './data/projects.json'


function App() {

  return (
    <DependenciesContext.Provider value={{Profile, projects}}>
      <Menu />
      <IntroPage />
      <AboutPage />
      <ProjectPage />
    </DependenciesContext.Provider>
  )
}

export default App
