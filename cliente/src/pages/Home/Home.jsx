import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen gap-4 text-3xl font-bold text-white bg-primary'>
            <h1>Bienvenidos al Home</h1>
            <Link to='/login'>
                <button className="px-6 py-2 bg-accent rounded-xl">Iniciar Sesion</button>
            </Link>
        </div>
    )
}
