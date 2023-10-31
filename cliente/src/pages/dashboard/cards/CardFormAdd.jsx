import { useState } from 'react'
import {Link} from 'react-router-dom'
import cardIcon from '../../../assets/icons/card-icon.svg'
import secureIcon from '../../../assets/icons/secure-icon.svg'
import dateIcon from '../../../assets/icons/date-icon.svg'
import {addCardCredit} from './../../../services/apiService'
import { AuthContext } from '../../../context/AuthContext'
import { useContext } from 'react'

const CardFormAdd = ({setAddCardFormActive}) => {
    const {dataUser} = useContext(AuthContext)
    const [cardData, setCardData] = useState({
        numero: '000000000000000',
        fechaExpiracion: '',
        codigoCVC: '',
        operadora: ''
    })
    const token = localStorage.getItem('token')
    const handleChange = (e) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit =async (e) => {
        e.preventDefault()
        const typeCard = cardType(cardData.numero)
        setCardData({
            ...cardData,
            user: {id:dataUser.id},
            operadora: typeCard
        })
        console.log(cardData)
        const reponse = await addCardCredit(cardData,token)
        console.log(reponse)
        setAddCardFormActive(false)
    }
    const cardType = (cardNumber) => {
        console.log("clasificando")
        const visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$')
        const mastercard = new RegExp('^5[1-5][0-9]{14}$')
        const amex = new RegExp('^3[47][0-9]{13}$')
        const discover = new RegExp('^6(?:011|5[0-9]{2})[0-9]{12}$')
        const diners = new RegExp('^3(?:0[0-5]|[68][0-9])[0-9]{11}$')
        const jcb = new RegExp('^(?:2131|1800|35[0-9]{3})[0-9]{11}$')
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
                            name="numero"
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
                            name="fechaExpiracion" 
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
                            name="codigoCVC" 
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