import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import HomeScreen from './pages/HomeScreen'
import PeopleScreen from './pages/PeopleScreen'
import PhotosScreen from './pages/PhotosScreen'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { Logout } from '@mui/icons-material'
import { setUser } from './services/user/userSlice'

const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to='/signin' />
}

function App() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if(confirm('Are you sure you want to logout?')) {
      dispatch(setUser(null));
    }
  }
  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-center">
        {user !== null && <IconButton className='fixed top-4 right-4' sx={{position: 'fixed'}} onClick={handleLogout}><Logout /></IconButton>}
        {/* <OpeningScreen /> */}
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <div className="w-full pb-20">
          <Routes>
            <Route path='/' element={<PrivateRoute isAuthenticated={user !== null}><HomeScreen /></PrivateRoute>}/>
            <Route path='/people' element={<PrivateRoute isAuthenticated={user !== null}><PeopleScreen /></PrivateRoute>}/>
            <Route path='/photos' element={<PrivateRoute isAuthenticated={user !== null}><PhotosScreen /></PrivateRoute>}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />}/>
          </Routes>
        </div>
        <div className='fixed bottom-0 z-10 w-full'><NavBar /></div>
      </div>
    </>
  )
}

export default App
