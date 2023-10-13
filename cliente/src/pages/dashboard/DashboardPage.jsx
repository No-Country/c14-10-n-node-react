import Sidebar from '../../components/Sidebar'
import DashboardContainer from './DashboardContainer'

const DashboardPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <DashboardContainer/>
        </div>
    )
}

export default DashboardPage