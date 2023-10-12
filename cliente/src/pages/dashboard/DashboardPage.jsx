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
            <div className="flex flex-col gap-12 w-full h-full py-6 p-4 md:px-20 bg-[#efeff2] overflow-y-auto">
                <DashboardHeader/>
                <DashboardCards/>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
                        <div className='bg-white rounded-[2rem]'>
                        <GraphicLineChart/>
                    </div>
                        <div className='bg-white rounded-[2rem]'>
                    <GraphicDonutChart/>
                    </div>
                        <div className='bg-white rounded-[2rem]'>
                        <TransactionHistory/>
                    </div>
                        <div className='bg-white rounded-[2rem]'>
                        <Goals/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage