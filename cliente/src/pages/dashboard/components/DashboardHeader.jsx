import searchIcon from '../../../assets/icons/search-icon.svg'
import calendarIcon from '../../../assets/icons/calendar-icon.svg'
import notificationIcon from '../../../assets/icons/notification-icon.svg'
import { useAuthContext } from '../../../hooks/useAuthContext'

const DashboardHeader = () => {
    const { logout, dataUser } = useAuthContext()
    return (
        <div className="flex flex-wrap items-center justify-between max-md:gap-2">
            <div className="flex flex-col">
                <h3 className="font-bold">Hola {dataUser.username}</h3>
                <p className="font-semibold text-slate-500">Bienvenido de vuelta</p>
            </div>
            <div className="flex gap-2 px-4 py-3 bg-white rounded-xl">
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
                <img className='w-8 h-8 bg-transparent cursor-pointer' src={notificationIcon} alt="icono campanita notificacion" />
                <picture className="w-10 h-10 text-center rounded-full bg-primary">
                    <img className="object-cover object-top w-10 h-10 rounded-full" src="https://img.buzzfeed.com/buzzfeed-static/static/2015-12/16/15/enhanced/webdr03/original-2075-1450299148-17.jpg?downsize=1400:*&output-format=auto&output-quality=auto" alt="foto de perfil" />
                </picture>
                <div className='relative cursor-pointer group'>
                    <h3 className='font-bold text-slate-700'>{dataUser.username}</h3>
                    {/* show modal logout */}
                    <button
                        className="absolute hidden w-full px-4 py-2 font-bold bg-white rounded-md group-hover:block text-primary outline-secondary hover:bg-blue-400"
                        onClick={() => logout()}
                    >
                        Salir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader