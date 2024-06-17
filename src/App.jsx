import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import HomeScreen from './pages/HomeScreen'
import PeopleScreen from './pages/PeopleScreen'
import PhotosScreen from './pages/PhotosScreen'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ChatScreen from './ChatScreen'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { AccountCircle, Logout } from '@mui/icons-material'
import { setUser } from './services/user/userSlice'
import Profile from './pages/Profile'
import Onboarding from './pages/Onboarding'
import PendingInvites from './pages/Invites'

const PrivateRoute = ({ children, isAuthenticated, navLink }) => {
  return isAuthenticated ? children : <Navigate to={navLink ?? '/signin'} />
}

function App() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if(confirm('Are you sure you want to logout?')) {
      dispatch(setUser(null));
    }
  }
  console.log(user)
  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-center">
        {user !== null && <div className='fixed top-4 right-4 flex gap-4'><Link to={'/profile'}><IconButton><AccountCircle /></IconButton></Link><IconButton onClick={handleLogout}><Logout /></IconButton></div>}
        {/* <OpeningScreen /> */}
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <div className="w-full pb-20">
          <Routes>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='/onboarding' element={<PrivateRoute isAuthenticated={!user?.onboarded} navLink='/'><PrivateRoute isAuthenticated={user !== null}><Onboarding /></PrivateRoute></PrivateRoute>}/>
            <Route path='/' element={<PrivateRoute isAuthenticated={user?.onboarded} navLink='/onboarding'><PrivateRoute isAuthenticated={user !== null}><HomeScreen /></PrivateRoute></PrivateRoute>}/>
            <Route path='/people' element={<PrivateRoute isAuthenticated={user?.onboarded} navLink='/onboarding'><PrivateRoute isAuthenticated={user !== null}><PeopleScreen /></PrivateRoute></PrivateRoute>}/>
            <Route path='/invites' element={<PrivateRoute isAuthenticated={user?.onboarded} navLink='/onboarding'><PrivateRoute isAuthenticated={user !== null}><PendingInvites /></PrivateRoute></PrivateRoute>}/>
            <Route path='/photos' element={<PrivateRoute isAuthenticated={user?.onboarded} navLink='/onboarding'><PrivateRoute isAuthenticated={user !== null}><PhotosScreen /></PrivateRoute></PrivateRoute>}/>
            <Route path='/chat/:title' element={<PrivateRoute isAuthenticated={user?.onboarded} navLink='/onboarding'><PrivateRoute isAuthenticated={user !== null}><ChatScreen /></PrivateRoute></PrivateRoute>}/>
            <Route path='/profile' element={<PrivateRoute isAuthenticated={user?.onboarded} navLink='/onboarding'><PrivateRoute isAuthenticated={user !== null}><Profile /></PrivateRoute></PrivateRoute>}/>
          </Routes>
        </div>
        <div className='fixed bottom-0 z-10 w-full'><NavBar /></div>
      </div>
    </>
  )
}

export default App
