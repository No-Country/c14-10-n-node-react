/* eslint-disable react/prop-types */
import { useState } from 'react'

import searchIcon from '../../../assets/icons/search-icon.svg'
const TransactionHeader = ({ filterForApproved,filterForPending,filterReset}) => {
    const [inputSearchActive, setInputSearchActive] = useState(false)
    const focusInput = () => {
        setInputSearchActive(true)
    }
    const blurInput = () => {
        setInputSearchActive(false);
    };
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
            <div className="py-2">
                <div className={`flex gap-2 bg-slate-200 p-2 rounded-xl border-[2px]  ${inputSearchActive ? 'border-primary':'border-transparent'}`}>
                    <img className='w-5 cursor-pointer' src={searchIcon} alt="icono de lupa" />
                    <input onFocus={focusInput} onBlur={blurInput} className="bg-transparent w-full outline-none px-2 font-semibold" type="text" placeholder="Buscar" />
                </div>
                <div></div>
            </div>
        </header>
    )
}

export default TransactionHeader