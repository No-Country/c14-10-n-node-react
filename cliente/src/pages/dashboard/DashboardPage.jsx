import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardPage = () => {
    
    // responsive sidebar
    const [isMobile,setIsMobile] = useState(false);
    window.addEventListener('resize', () => {
        if(window.innerWidth > 768){
            setIsMobile(false);
        }else{
            setIsMobile(true);
        }
    })
    useEffect(() => {
        if(window.innerWidth > 768){
            setIsMobile(false);
        }else{
            setIsMobile(true);
        }
    }, [])

    return (
        <div className={`flex h-screen ${isMobile ?'flex-col-reverse gap-0':''}`}>
            <Sidebar isMobile={isMobile}/>
            <div className={`flex w-full h-full py-6 px-2 bg-[#efeff2] overflow-y-auto ${isMobile ?'pb-0':''}`}>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardPage