import searchIcon from '../../../assets/icons/search-icon.svg'
import calendarIcon from '../../../assets/icons/calendar-icon.svg'
import notificationIcon from '../../../assets/icons/notification-icon.svg'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/login')
        console.log('logout')
        console.log('Sin funcionalidad aun')
    }
    return (
        <div className="flex justify-between items-center flex-wrap max-md:gap-2">
            <div className="flex flex-col">
                <h3 className="font-bold">Hola Henry Cavill</h3>
                <p className="text-slate-500 font-semibold">Bienvenido de vuelta</p>
            </div>
            <div className="flex bg-white px-4 py-3 rounded-xl gap-2">
                <img className='w-6 h-6 cursor-pointer' src={calendarIcon} alt="calendario icono" />
                <p>Jul 19,2022</p>
            </div>
            <div className="flex rounded-xl bg-white border-[1px] border-transparent px-4 py-2 gap-2 group">
                <img className='w-5 h-5 cursor-pointer' src={searchIcon} alt="icono de lupa" />
                <input 
                    className="bg-transparent w-[200px] outline-none group-focus:ring-blue-500 group-hover:ring-blue-500"
                    type="text" 
                />
            </div>
            <div className="flex items-center gap-3 min-w-fit">
                <img className='w-8 h-8 cursor-pointer bg-transparent' src={notificationIcon} alt="icono campanita notificacion" />
                <picture className="w-10 h-10 rounded-full bg-primary text-center">
                    <img className="w-10 h-10 rounded-full object-cover object-top" src="https://img.buzzfeed.com/buzzfeed-static/static/2015-12/16/15/enhanced/webdr03/original-2075-1450299148-17.jpg?downsize=1400:*&output-format=auto&output-quality=auto" alt="foto de perfil" />
                </picture>
                <div className='group cursor-pointer relative'>
                    <h3 className=' text-slate-700 font-bold'>Henry Cavill</h3>
                    {/* show modal logout */}
                    <button 
                        className="absolute w-full hidden group-hover:block bg-white text-primary rounded-md px-4 py-2 outline-secondary font-bold hover:bg-blue-400"
                        onClick={handleLogout}
                    >
                        Salir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader