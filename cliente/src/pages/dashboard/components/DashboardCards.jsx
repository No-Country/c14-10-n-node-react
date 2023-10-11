import DashboardCard from './DashboardCard'
const DashboardCards = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <DashboardCard title="Ingresos" value="S/ 1,000.00" color="bg-gradient-lightblue-purple"/>
                <DashboardCard title="Gastos" value="S/ 500.00" color="bg-gradient-orange-pink"/>
                <DashboardCard title="Ahorros" value="S/ 500.00" color="bg-gradient-blue-purple"/>
                <DashboardCard title="Presupuesto" value="S/ 1,000.00" color="bg-gradient-green"/>
            </div>
        </div>
    )
    
    }

export default DashboardCards