import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Signup } from './Pages/Signup'
import { Home } from './Pages/Home'
import { Post } from './Pages/Post'
import { Contact } from './Pages/Contact'
import { ForgotPassword } from './Pages/ForgotPassword'
import { UserauthValidator } from './Pages/UserauthValidator';
import { UserLogout } from './Pages/UserLogout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={
          <UserauthValidator><Home /></UserauthValidator>
        } />
        <Route path="/user/logout" element={
          <UserauthValidator><UserLogout /></UserauthValidator>
        } />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
