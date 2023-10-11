const Sidebar = () => {
    return (
        <aside className="w-[300px] py-6 bg-primary text-white">
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li 
                        className="flex justify-start items-center border-r-[6px] border-secondary px-6 py-3 font-bold"
                    >
                        Dashboard
                    </li>
                    <li 
                        className="flex justify-start items-center border-r-[6px] border-transparent px-6 py-3 font-bold"
                    >
                        Transacciones
                    </li>
                    <li 
                        className="flex justify-start items-center border-r-[6px] border-transparent px-6 py-3 font-bold"
                    >
                        Tarjetas
                    </li>
                    <li 
                        className="flex justify-start items-center border-r-[6px] border-transparent px-6 py-3 font-bold"
                    >
                        Configuración
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar