/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { authUser, checkUser, registerUser } from "../services/apiService"

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState()
    const [error, setError] = useState('')
    const [dataUser, setDataUser] = useState()
    const [loading, setLoading] = useState(true)

    const login = async (user) => {
        setLoading(true)
        try {
            const data = await authUser(user)
            if (data.token) {
                setAuth(true);
                localStorage.setItem('token', data.token)
                setDataUser(data)
            } else {
                setError('Inicio Invalido')
            }
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    const checkAuth = async (token) => {
        setLoading(true)
        if (token) {
            try {
                const data = await checkUser(token)
                if (data.username) {
                    setAuth(true)
                    setDataUser(data)
                } else {
                    setAuth(false)
                    setError('Inicio Invalido')
                }
            } catch (error) {
                setError(error)
                console.error(error)
            }
        }
        setLoading(false)
    }

    const logout = () => {
        localStorage.clear();
        setAuth(false);
        setDataUser(null)
    };

    const register = async (user) => {
        setLoading(true)
        try {
            const data = await registerUser(user)
            if (data.token) {
                setAuth(true);
                localStorage.setItem('token', data.token)
                setDataUser(data)
            } else {
                setError('Registro Invalido')
            }
        } catch (error) {
            setError(error)
            console.error(error)
        }
        setLoading(false)
    }

    return (
        <AuthContext.Provider value={{ login, loading, register, checkAuth, auth, error, dataUser, logout }} >
            {children}
        </AuthContext.Provider>
    )
}
