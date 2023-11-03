import { useContext, useEffect, useState } from "react"
import CardCredit from "../../../components/CardCredit"
import { getAllCardsById } from "../../../services/apiService"
import { AuthContext } from "../../../context/AuthContext"
import EditIcon from "../../../assets/icons/edit-icon.svg"
import PlusIcon from "../../../assets/icons/plus-icon.svg"
import DeleteIcon from "../../../assets/icons/delete-icon.svg"
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
                            className="flex items-center gap-4 px-4 py-2 font-bold text-slate-600 hover:shadow-md hover:bg-slate-100 hover:text-slate-800 w-fit"
                            onClick={() => setAddCardFormActive(true)}
                        >
                            Agregar tarjeta
                            <img className="px-4 py-2 text-xl font-bold uppercase bg-green-500 rounded-lg" src={PlusIcon} alt="" />
                        </p>
                    </article>
                </div>

                {cardsUser?.map((card, i) => (
                    <div key={i} className="flex md:gap-16 flex-col md:flex-row gap-4 pb-8 border-b-[1px] border-gray-500">
                        <CardCredit number={card.numero} dateExpired={card.fechaExpiracion} cvc={card.codigoCVC} holdname={card.nombre} type={card.operadora} />
                        <article className="flex flex-col gap-4">
                            <div className="flex gap-4 w-fit">
                                <button className="px-4 py-2 text-xl font-bold uppercase bg-yellow-500 rounded-lg"><img src={EditIcon} alt="" /></button>
                                <button className="px-4 py-2 text-xl font-bold uppercase bg-red-500 rounded-lg"><img src={DeleteIcon} alt="" /></button>
                            </div>
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