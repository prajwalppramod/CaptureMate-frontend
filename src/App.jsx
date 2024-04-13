import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OpeningScreen from './OpeningScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OpeningScreen/>
    </>
  )
}

export default App
