/* eslint-disable react/prop-types */

function TransactionTable({ transactions }) {
    return (
        <div className="w-full  max-md:overflow-x-auto">
            <div className="w-full overflow-x-auto min-w-[800px]">
                <table className="flex flex-col">
                    <thead className="w-full py-4 text-white bg-primary rounded-xl">
                        <tr className="grid grid-cols-5 px-6 rounded-lg">
                            <th className="text-start">Transaccion Id</th>
                            <th className="text-start">Descripción</th>
                            <th className="text-start">Fecha</th>
                            <th className="text-start">Monto</th>
                            <th className="pl-6 text-start">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {transactions?.map((transaction, index) => (
                            <tr key={index} className="w-full border-[2px] border-slate-200 bg-white mb-1 py-2 px-6 grid grid-cols-5 items-center">
                                <td className="w-24 font-bold truncate">{transaction._id}</td>
                                <td className="font-semibold text-slate-500">{transaction?.description}</td>
                                <td className="">{transaction?.createdAt}</td>
                                <td className="italic font-bold text-blue-800">${transaction?.amount}</td>
                                <td className={`rounded-[2rem] text-center w-fit px-6 p-2 font-semibold ${transaction?.isApproved ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>{transaction.isApproved ? 'Aprobado' : 'Pendiente'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionTable;
