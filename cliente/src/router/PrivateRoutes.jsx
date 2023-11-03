
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'

export default function PrivateRoutes() {
    const { auth } = useContext(AuthContext)
    // responsive sidebar
    const [isMobile, setIsMobile] = useState(false);
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    })
    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, [])

    if (!auth) {
        return <Navigate to="/" />;
    }
    return (
        <div className={`flex h-screen ${isMobile ? 'flex-col-reverse gap-0' : ''}`}>
            <Sidebar isMobile={isMobile} />
            <div className={`flex w-full h-full py-6 px-2 bg-[#efeff2] overflow-y-auto ${isMobile ? 'pb-0' : ''}`}>
                <Outlet />
            </div>
        </div>
    )

}

