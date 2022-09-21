// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'

// Interface
import Home from './components/interfaces/home/testeStyles.inteface'

// Styles
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
)
