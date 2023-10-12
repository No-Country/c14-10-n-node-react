
const Goals = () => {
    return (
        <div className="p-8 flex flex-col gap-4">
            <h2 className="font-bold text-xl">Objetivos</h2>
            <div>
                <div className="flex justify-between items-center border-b-[1px] border-slate-200 py-2">
                    <p>Meta de ahorro</p>
                    <p>$ 500.000</p>
                </div>
                <div className="flex justify-between items-center border-b-[1px] border-slate-200 py-2">
                    <p>Progreso</p>
                    <p>50%</p>
                </div>
                <div className="flex justify-between items-center border-b-[1px] border-slate-200 py-2">
                    <p>Fecha de vencimiento</p>
                    <p>20/12/2021</p>
                </div>
            </div>
        </div>
    )
}

export default Goals