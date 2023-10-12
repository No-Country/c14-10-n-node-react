import { useState } from 'react'
import cardIcon from '../assets/icons/card-icon.svg'
import cardIconS from '../assets/icons/card-icon-s.svg'
import cashIcon from '../assets/icons/cash-icon.svg'
import cashIconS from '../assets/icons/cash-icon-s.svg'
import dashboardIcon from '../assets/icons/dashboard-icon.svg'
import dashboardIconS from '../assets/icons/dashboard-icon-s.svg'
import settingsIconS from '../assets/icons/settings-icon-s.svg'
import settingsIcon from '../assets/icons/settings-icon.svg'
import contactsIcon from '../assets/icons/contacts-icon.svg'
import contactsIconS from '../assets/icons/contacts-icon-s.svg'

const Sidebar = () => {
    const [optionSelected,setOptionSelected] =  useState('dashboard');
    const handleOptionSelected = (option) => {
        setOptionSelected(option);
    }
    // Sacar a otro archivo
    const options = [
        {
            id:1,
            name:'Dashboard',
            icon:dashboardIcon,
            iconSelected:dashboardIconS
        },
        {
            id:2,
            name:'Transacciones',
            icon:cashIcon,
            iconSelected:cashIconS
        },
        {
            id:3,
            name:'Tarjetas',
            icon:cardIcon,
            iconSelected:cardIconS
        },
        {
            id:4,
            name:'Configuración',
            icon:settingsIcon,
            iconSelected:settingsIconS
        },
        {
            id:5,
            name:'Contactos',
            icon:contactsIcon,
            iconSelected:contactsIconS
        },
    ]

    return (
        <aside className="w-[300px] py-6 bg-white text-slate-600">
            <h2 className="text-xl font-bold text-slate-800 px-6">WarrenBank</h2>
            <nav className="px-4 py-2">
                <ul className="flex flex-col gap-3">
                    {
                        options.map(option => (
                            <li 
                                key={option.id}
                                onClick={()=>handleOptionSelected(option.name)}
                                className={`cursor-pointer rounded-[2rem] border-[1px] flex justify-start gap-3 items-center px-6 py-3 font-bold ${optionSelected==option.name ? 'bg-blue-50 border-primary text-primary': 'bg-transparent border-transparent'}`}
                            >
                                <img className='w-6 h-6' src={option.name==optionSelected ?option.iconSelected:option.icon} alt="" />
                                <p>{option.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar