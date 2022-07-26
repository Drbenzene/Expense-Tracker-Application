import React, {useContext} from 'react'
import Styles from './Balance.module.css'
import {GlobalContext} from '../../Contex'

function Balance() {

    const store = useContext(GlobalContext)

    const {transactions} = store

    const allcredits = transactions.filter(transaction => transaction.amount > 0)
    const totalCredit = allcredits.reduce((acc, item) => acc + item.amount, 0)
    

    const allDebits = transactions.filter(transaction => transaction.amount < 0)
    const totalDebits = allDebits.reduce((acc, item) => acc + item.amount, 0)

    const balance = transactions.map(transaction => transaction.amount)
    const totalBalance = balance.reduce((acc, item) => acc += item, 0)

  return (
    <div className={Styles.container}>
        <h1>Expense Tracker</h1>

        <div style={{textAlign: "start", marginLeft: "20px"}}>
            <h2>Your Balance</h2>
            <h3 className={Styles.totalBalance}>${totalBalance}</h3>
        </div>
        <div className={Styles.incExp}>
            <div className={Styles.income}>
                <h3>INCOME</h3>
                <h2 style={{color:"green"}}>
                    ${totalCredit}
                </h2>
            </div>
            <div className={Styles.expense}>
                <h3>EXPENSE</h3>
                <h2 style={{color:"red"}}>
                ${totalDebits}
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Balance