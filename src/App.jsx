import { useState } from 'react'
import './App.css'
import OpeningScreen from './OpeningScreen'
import SignIn from './SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        {/* <OpeningScreen /> */}
        <SignIn/>
      </div>
    </>
  )
}

export default App
