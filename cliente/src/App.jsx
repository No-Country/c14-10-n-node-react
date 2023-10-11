import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Auth/LoginPage'
import Home from './pages/Home/Home'
import SignUpPage from './pages/Auth/SignUpPage'

function App() {

  return (
    <Routes>

      <Route exact path='/' element={<Home />} />

      <Route path='/login' element={<LoginPage />} />

      <Route path='/signup' element={<SignUpPage />} />

    </Routes>
  )
}

export default App
