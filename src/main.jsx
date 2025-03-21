import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StyleProvider from './StyleProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider }  from 'react-redux'
import { store } from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleProvider>
      <BrowserRouter >
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StyleProvider>
  </React.StrictMode>,
)
