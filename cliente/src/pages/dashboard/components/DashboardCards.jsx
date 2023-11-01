import CardCredit from '../../../components/CardCredit'
import DashboardCard from './DashboardCard'
import GraphicDonutChart from './GraphicDonutChart'
const DashboardCards = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-16 gap-8">
                <div className='max-w-[400px]'>
                    <CardCredit/>
                </div>
                <DashboardCard title="Balance actual" value="$ 1500.00" color="bg-gradient-blue-purple"/>
                <GraphicDonutChart/>
            </div>
        </div>
    )
    
    }

export default DashboardCards