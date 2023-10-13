import { RouterProvider } from 'react-router-dom'
/* import LoginPage from './pages/Auth/LoginPage'
import Home from './pages/Home/Home'
import SignUpPage from './pages/Auth/SignUpPage'
import DashboardPage from './pages/dashboard/DashboardPage' */
import { router } from './router/index.routing'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
