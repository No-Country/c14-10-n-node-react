import { useState } from "react"
import TransactionTable from "./TransactionTable"
import TransactionHeader from "./TransactionHeader"

const TransactionPage = () => {
    const [transactions, setTransactions] = useState([
        {
            createdAt: "2021-10-10",
            amount: 1000,
            description: "Pago de alquiler",
            isApproved: false
        },
        {
            createdAt: "2021-10-10",
            amount: 1000,
            description: "Compra de libros",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Spotify Premium",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Compra de libros",
            isApproved: false
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Compra de libros",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Compra de libros",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Compra de libros",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Compra de libros",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Compra de libros",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Viaje de vacaciones",
            isApproved: false
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Proyecto de la universidad",
            isApproved: false
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Compra de libros",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Viaje de vacaciones",
            isApproved: false
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Proyecto de la universidad",
            isApproved: false
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Compra de libros",
            isApproved: true
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Viaje de vacaciones",
            isApproved: false
        },
        {
            createdAt: "2021-10-10",
            amount: 5000,
            description: "Proyecto de la universidad",
            isApproved: false
        },
    ])
    const [filterTransactions, setFilterTransactions] = useState(transactions)
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
    return (
        <div className="flex flex-col items-center w-full  md:px-14">
            <TransactionHeader filterForApproved={filterForApproved} filterForPending={filterForPending} filterReset={filterReset} />
            <TransactionTable transactions={filterTransactions} />
        </div>
    )
    }

export default TransactionPage
