/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.routing'
import { useAuthContext } from './hooks/useAuthContext'
import { useEffect } from 'react'

function App() {
  const { checkAuth } = useAuthContext()
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    async function verifyToken() {
      await checkAuth(token);
    }
    verifyToken()
  }, [token])
  return (
    <RouterProvider router={router} />
  )
}

export default App
