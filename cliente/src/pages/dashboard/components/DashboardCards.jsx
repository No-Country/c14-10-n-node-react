import CardCredit from '../../../components/CardCredit'
import DashboardCard from './DashboardCard'
import GraphicDonutChart from './GraphicDonutChart'
const DashboardCards = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:gap-16 gap-8">
                <CardCredit/>
                <DashboardCard title="Balance actual" value="$ 1500.00" color="bg-gradient-blue-purple"/>
                <GraphicDonutChart/>
            </div>
        </div>
    )
    
    }

export default DashboardCards