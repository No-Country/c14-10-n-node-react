import { useContext, useEffect, useState } from "react"
import TransactionTable from "./TransactionTable"
import TransactionHeader from "./TransactionHeader"
import {getTransactionsHistory} from '../../../services/apiService'
import { AuthContext } from "../../../context/AuthContext"

const TransactionPage = () => {
    const [transactions, setTransactions] = useState([])
    const [filterTransactions, setFilterTransactions] = useState(transactions)
    const token = localStorage.getItem('token')
    const filterForApproved = () => {
        const filter = transactions.filter(transaction => transaction.isApproved)
        setFilterTransactions(filter)
    }
    const filterForPending = () => {
        const filter = transactions.filter(transaction => !transaction.isApproved)
        setFilterTransactions(filter)
    }
    const filterReset = () => {
        setFilterTransactions(transactions)
    }
    const {dataUser} = useContext(AuthContext)
    useEffect(() => {
        const getTransactions = async () => {
            const response = await getTransactionsHistory(dataUser.id,token)
            console.log(response)
            setTransactions(response)
            // setFilterTransactions(response)
            return response
        }
        getTransactions()
    }, [dataUser,token])

    return (
        <div className="flex flex-col items-center w-full  md:px-14">
            <TransactionHeader filterForApproved={filterForApproved} filterForPending={filterForPending} filterReset={filterReset} />
            <TransactionTable transactions={filterTransactions} />
        </div>
    )
    }

export default TransactionPage
