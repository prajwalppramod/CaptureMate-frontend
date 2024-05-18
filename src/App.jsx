import { useState } from 'react'
import './App.css'
import OpeningScreen from './OpeningScreen'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import HomeScreen from './HomeScreen'
import PeopleScreen from './PeopleScreen'
import PhotosScreen from './PhotosScreen'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        {/* <OpeningScreen /> */}
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <div className="w-full">
          <Routes>
            <Route path='/' element={<HomeScreen />}/>
            <Route path='/people' element={<PeopleScreen />}/>
            <Route path='/photos' element={<PhotosScreen />}/>
          </Routes>
          {/* <Home /> */}
        </div>
        <div className='fixed bottom-0 z-10 w-full'><NavBar /></div>
      </div>
    </>
  )
}

export default App
