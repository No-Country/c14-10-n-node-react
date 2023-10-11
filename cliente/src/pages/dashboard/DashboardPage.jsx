import Sidebar from '../../components/Sidebar'
import { DashboardHeader,
    DashboardCards,
    GraphicLineChart,
    GraphicDonutChart,
    TransactionHistory,
    Goals } from './components'

const DashboardPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex flex-col gap-12 w-full h-full py-6 px-20 bg-[#F7F7F8]">
                <DashboardHeader/>
                <DashboardCards/>
                <div className="flex-1 grid grid-cols-[1.5fr_1fr] gap-10">
                    <GraphicLineChart/>
                    <GraphicDonutChart/>
                    <TransactionHistory/>
                    <Goals/>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage