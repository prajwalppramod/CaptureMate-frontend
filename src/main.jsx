import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StyleProvider from './StyleProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </StyleProvider>
  </React.StrictMode>,
)
