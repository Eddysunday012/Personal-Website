import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Menu } from "Menu";
import { DependenciesContext } from 'dependenciescontext';
import { IntroPage } from 'intro-page';
import { AboutPage } from 'about-page';
import Profile from './assets/Profile.png'


function App() {

  return (
    <DependenciesContext.Provider value={{Profile}}>
      <Menu />
      <IntroPage />
      <AboutPage />
    </DependenciesContext.Provider>
  )
}

export default App
