import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col gap-12 w-full h-full py-6 p-4 md:px-20 bg-[#efeff2] overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardPage