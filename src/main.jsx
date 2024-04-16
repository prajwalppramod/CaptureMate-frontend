import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StyleProvider from './StyleProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </React.StrictMode>,
)
