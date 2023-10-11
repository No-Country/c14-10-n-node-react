const DashboardHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <h3>Hola Juanito</h3>
                <p className="text-slate-500 font-semibold">Bienvenido de vuelta</p>
            </div>
            <div className="flex bg-white px-4 py-3 rounded-xl">
                📅
                <p>Jul 19,2022</p>
            </div>
            <div className="flex rounded-xl bg-white  border-none px-4 py-2">
                🔎
                <input 
                    className="bg-transparent w-[200px] outline-none"
                    type="text" 
                />
            </div>
            <div className="flex items-center gap-2">
                🔔
                <picture className="w-8 h-8 rounded-full bg-primary text-center">
                😀
                </picture>
                Juanito Vegas
            </div>
        </div>
    )
}

export default DashboardHeader