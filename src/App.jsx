import './App.css'
import SignIn from './SignIn'
import SignUp from './SignUp'
import HomeScreen from './HomeScreen'
import PeopleScreen from './PeopleScreen'
import PhotosScreen from './PhotosScreen'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ChatScreen from './ChatScreen'

function App() {
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
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='/chat/:title' element={<ChatScreen />}/>
          </Routes>
        </div>
        <div className='fixed bottom-0 z-10 w-full'><NavBar /></div>
      </div>
    </>
  )
}

export default App
