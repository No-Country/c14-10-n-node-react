
const TransactionPage = () => {
    const [transactions, setTransactions] = useState([
        {
            date: "2021-10-10",
            amount: 1000,
            description: "Compra de libros"
        },
    ])
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-3">
                <h2>Fecha</h2>
                <h2>Monto</h2>
                <h2>Descripción</h2>
            </div>
            {
                transactions.map(({date,amount,description}) => (
                    <div className="grid grid-cols-3 gap-3" key={date}>
                        <p>{date}</p>
                        <p>{amount}</p>
                        <p>{description}</p>
                    </div>
                ))
            }
        </div>
    )
    }

export default TransactionPage