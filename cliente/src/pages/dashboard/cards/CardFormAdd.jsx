import { useState } from 'react'
import { Link } from 'react-router-dom'
import cardIcon from '../../../assets/icons/card-icon.svg'
import secureIcon from '../../../assets/icons/secure-icon.svg'
import dateIcon from '../../../assets/icons/date-icon.svg'
import contactIcon from '../../../assets/icons/contacts-icon.svg'
import { addCardCredit } from './../../../services/apiService'
import { AuthContext } from '../../../context/AuthContext'
import { useContext } from 'react'
import CardCredit from '../../../components/CardCredit'

const CardFormAdd = ({ setAddCardFormActive }) => {
    const { dataUser } = useContext(AuthContext)
    const [cardData, setCardData] = useState({
        numero: '000000000000000',
        nombre: 'John Dae',
        fechaExpiracion: '',
        codigoCVC: '',
        operadora: ''
    })
    const token = localStorage.getItem('token')
    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = cardData.numero;
        let formattedValueDate = cardData.fechaExpiracion;
        let typeCard = cardData.operadora

        if (name === 'numero') {
            typeCard = cardType(value)
            console.log(value, typeCard)
            // Formatear el número de tarjeta como 'XXXX XXXX XXXX XXXX'
            formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
        } else if (name === 'fechaExpiracion') {
            // Formatear la fecha de expiración como 'MM/YY'
            formattedValueDate = value.replace(/^(\d{2})(\d{2})$/, '$1/$2');
        }

        setCardData({
            ...cardData,
            [name]: value,
            numero: formattedValue,
            fechaExpiracion: formattedValueDate,
            operadora: typeCard
        })
        console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setCardData({
            ...cardData,
            user: { id: dataUser.id },
        })
        console.log('Este es el submit', cardData)
        const reponse = await addCardCredit(cardData, token)
        console.log(reponse)
        setAddCardFormActive(false)
    }
    const cardType = (cardNumber) => {
        console.log("clasificando")
        const visa = /^4\d{3}/;
        const mastercard = /^5[1-5]\d{2}/;
        const amex = /^3[47]\d{2}/;
        const discover = /^6(?:011|5\d{2})/;
        const diners = /^3(?:0[0-5]|[68]\d{2})/;
        const jcb = /^(?:2131|1800|35\d{2})/;
        if (visa.test(cardNumber)) {
            return 'visa'
        }
        if (mastercard.test(cardNumber)) {
            return 'mastercard'
        }
        if (amex.test(cardNumber)) {
            return 'amex'
        }
        if (discover.test(cardNumber)) {
            return 'discover'
        }
        if (diners.test(cardNumber)) {
            return 'diners'
        }
        if (jcb.test(cardNumber)) {
            return 'jcb'
        }

        return 'unknown'
    }
    console.log('Esta es la data', cardData)
    return (
        <article className='flex flex-col items-center w-full'>
            <h2 className='mb-6 text-2xl font-bold'>Agregar tarjeta</h2>
            <CardCredit number={cardData.numero} dateExpired={cardData.fechaExpiracion} cvv={cardData.codigoCVC} holdname={cardData.nombre} type={cardData.operadora} />
            <form className='max-w-[420px] w-[80%] mt-6 flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                    <label className='font-semibold' htmlFor="cardNumber">Numero de tarjeta</label>
                    <div className='py-2 px-4 flex gap-3 rounded-xl border-[1px] border-gray-400'>
                        <img src={cardIcon} alt="icono tarjeta" className='w-6' />
                        <input
                            className='w-full bg-transparent outline-none'
                            type="text"
                            name="numero"
                            placeholder="Numero de tarjeta"
                            onChange={handleChange}
                            maxLength={16}
                        />
                    </div>
                </div>
                <div>
                    <label className='font-semibold' htmlFor="cardNumber">Nombre del Titular</label>
                    <div className='py-2 px-4 flex gap-3 rounded-xl border-[1px] border-gray-400'>
                        <img src={contactIcon} alt="icono tarjeta" className='w-6' />
                        <input
                            className='w-full bg-transparent outline-none'
                            type="text"
                            name="nombre"
                            placeholder="John Dae"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <label className='font-semibold' htmlFor="expirationDate">Fecha de expiracion</label>
                        <div className='py-2 px-4 flex gap-3 rounded-xl border-[1px] border-gray-400'>
                            <img src={dateIcon} alt="" className='w-6' />
                            <input
                                className='w-full bg-transparent outline-none'
                                type="text"
                                name="fechaExpiracion"
                                placeholder="MM/YY"
                                value={cardData.fechaExpiracion}
                                onChange={handleChange}
                                maxLength={5}
                            />
                        </div>
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor="cvv">CVC</label>
                        <div className='py-2 px-4 flex gap-3 rounded-xl border-[1px] border-gray-400'>
                            <img src={secureIcon} alt="icono candado" className='w-6' />
                            <input
                                className='w-full bg-transparent outline-none'
                                type="text"
                                name="codigoCVC"
                                placeholder="&bull;&bull;&bull;"
                                onChange={handleChange}
                                maxLength={3}
                            />
                        </div>
                    </div>
                </div>


                {/* <div>
                    <label htmlFor="postalCode">Codigo postal</label>
                    <div className='py-2 px-4 rounded-xl border-[1px] border-gray-400'>
                        
                        <input
                            className='w-full bg-transparent outline-none' 
                            type="text" 
                            id="postalCode" 
                            placeholder="Codigo postal" 
                            onChange={handleChange}
                        />
                    </div>
                </div> */}
                <button type='submit' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-xl'>Agregar</button>
            </form>
            <Link to="/dashboard/tarjetas" className="px-4 py-2 mt-4 font-bold text-red-500 bg-red-100 rounded-xl" onClick={handleSubmit}>Cancelar</Link>
        </article>
    )
}

export default CardFormAdd