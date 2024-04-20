import { useState } from 'react'
import './App.css'
import OpeningScreen from './OpeningScreen'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        {/* <OpeningScreen /> */}
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <div className="fixed bottom-0 w-full">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
