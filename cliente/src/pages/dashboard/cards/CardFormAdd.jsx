import { useState } from 'react'
import {Link} from 'react-router-dom'
import cardIcon from '../../../assets/icons/card-icon.svg'
import secureIcon from '../../../assets/icons/secure-icon.svg'
import dateIcon from '../../../assets/icons/date-icon.svg'


const CardFormAdd = ({setAddCardFormActive}) => {
    const [cardData, setCardData] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        postalCode: '',
        type: ''
    })
    const handleChange = (e) => {
        setCardData({
            ...cardData,
            [e.target.id]: e.target.value
        })

        if (e.target.id === 'cardNumber') {
            const typeCard = cardType(cardData.cardNumber)
            setCardData({
                ...cardData,
                type: typeCard
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cardData)
        setAddCardFormActive(false)
    }
    const cardType = (cardNumber) => {
        console.log("clasificando")
        const visa = /^4\d{12}(?:\d{3})?$/
        const mastercard = /^5[1-5]\d{14}$/
        const amex = /^3[47]\d{13}$/
        const discover = /^6(?:011|5\d{2})\d{12}$/
        const diners = /^3(?:0[0-5]|[68]\d)\d{11}$/
        const jcb = /^(?:2131|1800|35\d{3})\d{11}$/
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
    return (
        <article className='w-full flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-6'>Agregar tarjeta</h2>
            <form className='max-w-[600px] w-[80%] flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                    <label className='font-semibold' htmlFor="cardNumber">Numero de tarjeta</label>
                    <div className='py-2 px-4 flex gap-3 rounded-xl border-[1px] border-gray-400'>
                        <img src={cardIcon} alt="icono tarjeta"  className='w-6'/>
                        <input
                            className='outline-none bg-transparent w-full' 
                            type="text" 
                            id="cardNumber" 
                            placeholder="Numero de tarjeta" 
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label className='font-semibold' htmlFor="expirationDate">Fecha de expiracion</label>
                    <div className='py-2 px-4 flex gap-3 rounded-xl border-[1px] border-gray-400'>
                        <img src={dateIcon} alt="" className='w-6' />
                        <input
                            className='outline-none bg-transparent w-full' 
                            type="date" 
                            id="expirationDate" 
                            placeholder="Fecha de expiracion" 
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label className='font-semibold' htmlFor="cvv">CVV</label>
                    <div className='py-2 px-4 flex gap-3 rounded-xl border-[1px] border-gray-400'>
                        <img src={secureIcon} alt="icono candado" className='w-6'/>
                        <input
                            className='outline-none bg-transparent w-full' 
                            type="text" 
                            id="cvv" 
                            placeholder="&bull;&bull;&bull;"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* <div>
                    <label htmlFor="postalCode">Codigo postal</label>
                    <div className='py-2 px-4 rounded-xl border-[1px] border-gray-400'>
                        
                        <input
                            className='outline-none bg-transparent w-full' 
                            type="text" 
                            id="postalCode" 
                            placeholder="Codigo postal" 
                            onChange={handleChange}
                        />
                    </div>
                </div> */}
                <button type='submit' className='text-white bg-blue-500 rounded-xl px-4 py-2 font-bold'>Agregar</button>
            </form>
            <Link to="/dashboard/tarjetas" className="text-red-500 mt-4 rounded-xl bg-red-100 px-4 py-2 font-bold" onClick={handleSubmit}>Cancelar</Link>
        </article>
    )
}

export default CardFormAdd