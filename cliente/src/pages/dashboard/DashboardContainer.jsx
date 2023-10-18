import { DashboardHeader,
    DashboardCards,
    GraphicLineChart,
    TransactionHistory } from './components'
    
const DashboardContainer = () => {
    return (
        <div className="z-10 flex flex-col gap-9 w-full h-full md:px-10 bg-[#efeff2] overflow-y-auto">
                <DashboardHeader/>
                <DashboardCards/>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10">
                    <div className='bg-white rounded-[2rem]'>
                        <GraphicLineChart/>
                    </div>
                    <div className='bg-white rounded-[2rem]'>
                        <TransactionHistory/>
                    </div>
                </div>
        </div>
    )
}

export default DashboardContainer