import { Link } from 'react-router-dom'
import Google from '../../assets/icons/google.svg'
import PortadaAuth from './components/PortadaAuth'
import FormLogin from './components/FormLogin'
export default function LoginPage() {
    return (
        <main className="flex w-full">
            <PortadaAuth />
            <div className="flex items-center justify-center flex-1 h-screen">
                <div className="w-full max-w-md px-4 space-y-8 text-gray-600 bg-white sm:px-0">
                    <div className="">
                        <img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" />
                        <div className="mt-5 space-y-2">
                            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">Inicia Sesión</h3>
                            <p className="">No tienes una cuenta? <Link to='/signup' className="font-medium text-title hover:text-indigo-500">Crea una cuenta nueva</Link></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-3">
                        <button className="flex items-center justify-center gap-2.5 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className='w-5 h-5' src={Google} />
                            <h1>Inicia sesión con Google</h1>
                        </button>

                    </div>
                    <div className="relative">
                        <span className="block w-full h-px bg-gray-300"></span>
                        <p className="absolute inset-x-0 inline-block px-2 mx-auto text-sm bg-white w-fit -top-2">O continúa con</p>
                    </div>
                    <FormLogin />
                </div>
            </div>
        </main>
    )
}
