import { useContext, useEffect, useState } from "react"
import TransactionTable from "./TransactionTable"
import TransactionHeader from "./TransactionHeader"
import { getTransactionsHistory } from '../../../services/apiService'
import { AuthContext } from "../../../context/AuthContext"

const TransactionPage = () => {
    const [transactions, setTransactions] = useState([])
    const [filterTransactions, setFilterTransactions] = useState(transactions)
    const token = localStorage.getItem('token')
    const { dataUser } = useContext(AuthContext)
    const [filterActive, setFilterActive] = useState('filter-all')

    const filterForApproved = () => {
        const filter = transactions?.filter(transaction => transaction.isApproved)
        setFilterTransactions(filter)
    }
    const filterForPending = () => {
        const filter = transactions?.filter(transaction => !transaction.isApproved)
        setFilterTransactions(filter)
    }
    const filterReset = () => {
        setFilterTransactions(transactions)
    }
    const handleFilter = (e) => {
        setFilterActive(e.target.id)
        if (e.target.id === 'filter-all') {
            filterReset()
        } else if (e.target.id === 'filter-approved') {
            filterForApproved()
        } else if (e.target.id === 'filter-pending') {
            filterForPending()
        }
    }
    useEffect(() => {
        const getTransactions = async () => {
            const response = await getTransactionsHistory(dataUser?.id, token)
            setTransactions(response)
            return response
        }
        getTransactions()
        console.log("actualizando transacciones")
    }, [dataUser, token,filterActive])
    
    useEffect(() => {
        setFilterTransactions(transactions)
    }, [transactions])

    return (
        <div className="flex flex-col items-center w-full md:px-14">
            <TransactionHeader handleFilter={handleFilter} filterActive={filterActive} setFilterActive={setFilterActive}/>
            <TransactionTable transactions={filterTransactions} />
        </div>
    )
}

export default TransactionPage
