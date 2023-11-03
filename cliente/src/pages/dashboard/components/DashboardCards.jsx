import CardCredit from '../../../components/CardCredit'
import DashboardCard from './DashboardCard'
import GraphicDonutChart from './GraphicDonutChart'
import { useState, useEffect, useContext } from 'react'
import { getAllCardsById } from '../../../services/apiService'
import { AuthContext } from '../../../context/AuthContext'
const DashboardCards = () => {
    const [cardsUser, setCardsUser] = useState()
    const token = localStorage.getItem('token')
    const { dataUser } = useContext(AuthContext)

    useEffect(() => {
        const getCards = async () => {
            // console.log(dataUser?.id)
            const cards = await getAllCardsById(dataUser?.id, token)
            setCardsUser(cards[0])
        }
        getCards()

    }, [])
    console.log(cardsUser)
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 md:gap-16">
                <div className='max-w-[400px]'>
                    <CardCredit number={cardsUser?.numero} cvv={cardsUser?.cvc} dateExpired={cardsUser?.fechaExpiracion} type={cardsUser?.operadora} holdname={cardsUser?.nombre} />
                </div>
                <DashboardCard title="Balance actual" value="$ 1500.00" color="bg-gradient-blue-purple" />
                <GraphicDonutChart />
            </div>
        </div>
    )

}

export default DashboardCards