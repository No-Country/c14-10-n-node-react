/* eslint-disable react/prop-types */
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
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Sidebar = ({ isMobile }) => {
    const navigate = useNavigate();
    const [optionSelected, setOptionSelected] = useState('dashboard');
    const { pathname } = useLocation();
    const handleOptionSelected = (option) => {
        if (option === 'dashboard') {
            navigate('/dashboard');
            setOptionSelected('dashboard');
            return;
        }
        navigate(`/dashboard/${option.toLowerCase()}`);
        setOptionSelected(option);
    }
    // Sacar a otro archivo
    const options = [
        {
            id: 1,
            name: 'dashboard',
            icon: dashboardIcon,
            iconSelected: dashboardIconS
        },
        {
            id: 2,
            name: 'transacciones',
            icon: cashIcon,
            iconSelected: cashIconS
        },
        {
            id: 3,
            name: 'tarjetas',
            icon: cardIcon,
            iconSelected: cardIconS
        },
        {
            id: 4,
            name: 'configuración',
            icon: settingsIcon,
            iconSelected: settingsIconS
        },
        {
            id: 5,
            name: 'favoritos',
            icon: contactsIcon,
            iconSelected: contactsIconS
        },
    ]

    useEffect(() => {
        if (pathname === '/dashboard') {
            setOptionSelected('dashboard');
            return;
        }
        const option = pathname.split('/')[2];
        setOptionSelected(option);
    }, [pathname])
    return (
        <aside className={`z-50 w-[300px] bg-white text-slate-600 border-[1px] border-transparent ${isMobile ? 'w-screen py-2 border-t-slate-200' : 'py-6'}`}>
            <h2
                className={`text-xl font-bold text-slate-800 px-6 mb-4 ${isMobile ? 'hidden' : ''}`}
            >
                WarrenBank
            </h2>
            <nav className="z-50 px-4 bg-white">
                <ul className={`flex gap-3  ${isMobile ? 'flex-row w-full justify-center ' : 'flex-col'}`}>
                    {
                        options.map(option => (
                            <li
                                key={option.id}
                                onClick={() => handleOptionSelected(option.name)}
                                className={`cursor-pointer rounded-[2rem] border-[1px] flex justify-start gap-3 items-center px-3 md:px-6 py-3 font-bold ${optionSelected == option.name ? 'bg-blue-50 border-primary text-primary' : 'bg-transparent border-transparent'}`}
                            >
                                <img className='w-6 h-6' src={option.name == optionSelected ? option.iconSelected : option.icon} alt="" />
                                <p className={`capitalize ${isMobile ? 'hidden' : ''}`}>
                                    {option.name}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar