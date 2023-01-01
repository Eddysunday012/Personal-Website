import React from 'react'
import ReactDOM from 'react-dom/client'
import { DependenciesContext } from 'dependenciescontext'
import { Footer } from 'footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DependenciesContext.Provider>
      <Footer />
    </DependenciesContext.Provider>
  </React.StrictMode>,
)
