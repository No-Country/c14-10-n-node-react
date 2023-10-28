/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.routing'
import { useAuthContext } from './hooks/useAuthContext'
import { useEffect } from 'react'
import { Loader } from './components/Loader/Loader'

function App() {
  const { checkAuth, loading } = useAuthContext()
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    async function verifyToken() {
      await checkAuth(token);
    }
    verifyToken()
  }, [token])
  if (loading) {
    return <Loader />;
  }
  return (
    <RouterProvider router={router} />
  )
}

export default App
