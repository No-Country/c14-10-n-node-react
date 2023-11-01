import { useContext, useEffect, useState } from "react"
import CardCredit from "../../../components/CardCredit"
import { getAllCardsById } from "../../../services/apiService"
import { AuthContext } from "../../../context/AuthContext"

const MyCards = ({ setAddCardFormActive }) => {
    const [cardsUser, setCardsUser] = useState([])
    const token = localStorage.getItem('token')
    const { dataUser } = useContext(AuthContext)

    useEffect(() => {
        const getCards = async () => {
            // console.log(dataUser?.id)
            const cards = await getAllCardsById(dataUser?.id, token)
            setCardsUser(cards)
        }
        getCards()

    }, [])
    console.log(cardsUser)
    return (
        <div>
            <div className="flex flex-col justify-start w-full gap-8 max-md:flex-col">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Tarjetas de credito</h2>
                    <article className="cursor-pointer">
                        <p
                            className="px-4 py-2 font-bold text-slate-600 hover:shadow-md hover:bg-slate-100 hover:text-slate-800 w-fit"
                            onClick={() => setAddCardFormActive(true)}
                        >
                            Agrega una tarjeta de credito para poder realizar pagos
                        </p>
                    </article>
                </div>

                {cardsUser?.map((card, i) => (
                    <div key={i} className="flex md:gap-16 flex-col md:flex-row gap-4 pb-8 border-b-[1px] border-gray-500">
                        <CardCredit number={card.numero} dateExpired={card.fechaExpiracion} cvc={card.codigoCVC} holdname={card.nombre} type={card.operadora} />
                        <article className="flex flex-col gap-4">
                            <h3 className="px-4 py-2 text-xl font-bold text-white uppercase bg-black w-fit">Primario</h3>
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
                ))}

                {/* <div className="flex flex-col gap-4 md:gap-16 md:flex-row">
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
                </div> */}
            </div>

        </div>
    )
}

export default MyCards