import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntroPage } from 'intro-page';
import { DependenciesContext } from 'DependenciesContext';
import Profile from './assets/Profile.png'



ReactDOM.createRoot(document.getElementById('root')).render(
  <DependenciesContext.Provider value={{Profile}}>
      <IntroPage />
  </DependenciesContext.Provider>
)
