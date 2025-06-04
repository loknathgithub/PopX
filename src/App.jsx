import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SignIn from './components/Authentication/Sign-In'
import Landing from './components/Body/Landing'
import SignUp from './components/Authentication/Sign-Up'
import Profile from './components/Body/Profile'

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Landing/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </>
  ))

  return (
    <div className="app-container">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
