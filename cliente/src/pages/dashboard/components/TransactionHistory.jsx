import { dataTransaction } from "./mockdata"

const TransactionHistory = () => {
    return (
        <div>
            <div>
                <ul>
                    {
                        dataTransaction.map((item) => (
                            <li key={item.transactionId} className="grid grid-cols-3 gap-10">
                                    <p className="font-semibold text-slate-800">{item.description}</p>
                                    <p>{item.approvalDate}</p>
                                    <p>{item.amount}</p>
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