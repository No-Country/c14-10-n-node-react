import { dataTransaction } from "./mockdata"

const TransactionHistory = () => {
    return (
        <div className="p-8 flex flex-col gap-3">
            <div className="flex items-center justify-between flex-col md:flex-row">
                <h2 className="text-xl text-black font-bold pb-2">Historial de transacciones</h2>
                <div className="flex gap-2 text-slate-400 font-semibold">
                    <p className="px-1 relative border-b-[2px] border-primary text-primary">Recientemente</p>
                    <p className="px-1 relative border-b-[2px] border-transparent">Antiguo</p>
                    <p className="px-1 relative border-b-[2px] border-transparent">Mas</p>
                </div>
            </div>
            <div>
                <ul className="flex flex-col gap-2">
                    {
                        dataTransaction.map((item) => (
                            <li key={item.transactionId} className="grid grid-cols-3 gap-10 py-2 border-b-[1px] border-slate-200">
                                    <p className="font-semibold text-slate-800 truncate">{item.description}</p>
                                    <p>{item.approvalDate}</p>
                                    <p className="font-semibold text-slate-600">{item.amount}</p>
                            </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default TransactionHistory