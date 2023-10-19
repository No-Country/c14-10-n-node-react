/* eslint-disable react/prop-types */
import { useState,useContext, useEffect } from 'react'
import searchIcon from '../../../assets/icons/search-icon.svg'
import { AuthContext } from '../../../context/AuthContext'
import {addTransaction} from '../../../services/apiService'


const TransactionHeader = ({ filterForApproved,filterForPending,filterReset}) => {
    const [inputSearchActive, setInputSearchActive] = useState(false)
    const {dataUser} = useContext(AuthContext)
    const [isActiveFormTransaction, setIsActiveFormTransaction] = useState(false)
    const [transaction, setTransaction] = useState({
        userId: dataUser.id,
    })
    const [token, setToken] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [dataUser])
    const focusInput = () => {
        setInputSearchActive(true)
    }
    const blurInput = () => {
        setInputSearchActive(false);
    };
    const handlerChangeFormTransaction = (e) => {
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value
        })
    }

    const handlerAddTransaction = async (e) => {
        e.preventDefault()
        console.log(transaction)
        const response = await addTransaction(transaction, token)
        console.log(response)
        setTransaction({
            userId: dataUser.id,
        })
    }
    return (
        <header className="w-full flex flex-col items-start gap-2">
            <div className="w-full flex justify-start gap-2 border-b-[1px] border-slate-300">
                <h3 className="px-4 cursor-pointer border-b-[4px] text-xl font-semibold border-primary text-primary"
                onClick={filterReset}>Todo</h3>
                <h3 className="px-4 cursor-pointer border-b-[4px] text-xl font-semibold border-transparent"
                    onClick={filterForPending}
                >Pendiente</h3>
                <h3 
                    className="px-4 cursor-pointer border-b-[4px] text-xl font-semibold border-transparent"
                    onClick={filterForApproved}
                >Completado</h3>
            </div>
            <div className="py-2 flex justify-between gap-4">
                <div className={`flex gap-2 bg-slate-200 p-2 rounded-xl border-[2px]  ${inputSearchActive ? 'border-primary':'border-transparent'}`}>
                    <img className='w-5 cursor-pointer' src={searchIcon} alt="icono de lupa" />
                    <input onFocus={focusInput} onBlur={blurInput} className="bg-transparent w-full outline-none px-2 font-semibold" type="text" placeholder="Buscar" />
                </div>
                <div 
                    className='rounded-xl font-bold border-[1px] border-slate-500 cursor-pointer p-2'
                    onClick={() => setIsActiveFormTransaction(!isActiveFormTransaction)}
                >
                    Añadir transaction +
                </div>
            </div>
            {
                isActiveFormTransaction && (
                    <form className="w-[20rem] my-4 flex flex-col items-start gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-slate-800 font-semibold">Monto</label>
                            <input 
                                className="p-2 rounded-xl border-[1px] border-slate-500 outline-none px-2 font-semibold" 
                                name='amount' 
                                type="number" 
                                placeholder="Monto" 
                                required
                                onChange={handlerChangeFormTransaction}
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-slate-800 font-semibold">Descripción</label>
                            <input 
                                className="p-2 rounded-xl border-[1px] border-slate-500 outline-none px-2 font-semibold" 
                                name='description' 
                                type="text"
                                placeholder="Descripción" 
                                required
                                onChange={handlerChangeFormTransaction}
                            />
                        </div>
                        <div className="flex justify-evenly gap-4">
                            <button 
                                className="rounded-xl font-bold border-[1px] border-slate-500 cursor-pointer p-2"
                                onClick={() => setIsActiveFormTransaction(false)}
                            >Cancelar</button>
                            <input 
                                type='submit'
                                className="bg-transparent w-[5rem] text-center rounded-xl font-bold border-[1px] border-slate-500 cursor-pointer p-2"
                                onClick={handlerAddTransaction}
                                value={'Añadir'}
                            />
                        </div>
                    </form>
                )
            }
        </header>
    )
}

export default TransactionHeader