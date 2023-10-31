import { useContext, useEffect, useState } from "react"
import CardCredit from "../../../components/CardCredit"
import { getAllCardsById } from "../../../services/apiService"
import { AuthContext } from "../../../context/AuthContext"

const MyCards = ({setAddCardFormActive}) => {
    const [cardsUser, setCardsUser] = useState([])
    const token = localStorage.getItem('token')
    const {dataUser} = useContext(AuthContext)

    useEffect(() => {
        const getCards = async () => {
            // console.log(dataUser?.id)
            const cards = await getAllCardsById(dataUser?.id, token)
            setCardsUser(cards)
        }
        getCards()
        console.log(cardsUser)
    }, [])
    return (
        <div>
            <div className="w-full flex  flex-col justify-start gap-8 max-md:flex-col">
                <h2 className="text-2xl font-bold text-gray-800">Tarjetas de credito</h2>
                <div className="flex md:gap-16 flex-col md:flex-row gap-4 pb-8 border-b-[1px] border-gray-500">
                    <CardCredit number={"896547552361452"} dateExpired={"12/25"} cvv={"589"}/>
                    <article className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-white bg-black px-4 py-2 w-fit uppercase">Primario</h3>
                        <div>
                            <h4 className="font-semibold text-slate-500">Agregado el</h4>
                            <p>
                                Martes 12 de Octubre del 2021
                            </p>
                        </div>
                        <div className="flex justify-between gap-3">
                            <div>
                                <p>Rail preference</p>
                                <p>cross_river</p>
                            </div>
                            <div>
                                <p>Issuer</p>
                                <p>440393</p>
                            </div>
                            <div>
                                <p>Country code</p>
                                <p>USA</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="flex md:gap-16  flex-col md:flex-row gap-4">
                    <CardCredit />
                    <article className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold text-black border-[1px] border-gray-400 px-4 py-2 w-fit">Hacer primario</h3>
                        <div>
                            <h4 className="font-semibold text-slate-500">Agregado el</h4>
                            <p>
                                Martes 12 de Octubre del 2021
                            </p>
                        </div>
                        <div className="flex justify-between gap-3">
                            <div>
                                <p>Rail preference</p>
                                <p>cross_river</p>
                            </div>
                            <div>
                                <p>Issuer</p>
                                <p>440393</p>
                            </div>
                            <div>
                                <p>Country code</p>
                                <p>USA</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div>
                <article className="cursor-pointer mt-5">
                    <p 
                        className="font-bold text-slate-600 hover:shadow-md hover:bg-slate-100 hover:text-slate-800 px-4 py-2 w-fit" 
                        onClick={() => setAddCardFormActive(true)}
                    >
                        Agrega una tarjeta de credito para poder realizar pagos
                    </p>
                </article>
                
            </div>
        </div>
    )
}

export default MyCards