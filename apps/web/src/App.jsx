import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Menu } from "Menu";
import { DependenciesContext } from 'dependenciescontext';
import { IntroPage } from 'intro-page';
import Profile from './assets/Profile.png'


function App() {

  return (
    <DependenciesContext.Provider value={{Profile}}>
      <Menu />
      <IntroPage />
    </DependenciesContext.Provider>
  )
}

export default App
