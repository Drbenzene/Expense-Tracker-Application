import React, {useContext} from 'react'
import styles from './History.module.css'
import {GlobalContext} from '../../Contex'

function History() {
    const store = useContext(GlobalContext);
    const {transactions} = store;



  return (
    <div className={styles.container}>
        <h2 style={{textAlign: 'start', paddingLeft: '20px'}}>History</h2>
        <hr style={{margin: '0px 20px'}}></hr>

        
        {transactions.map((transaction, index ) => (
                        <div className={styles.history} index={transaction.id}>
        <div id={styles.historyItem} className={transaction.amount > 0 ? styles.credit : styles.debit} >
            <div>
                {transaction.text}
            </div>
            <div>
                 {
                        transaction.amount > 0 ? (<span>
                           + ${transaction.amount}
                        </span> ): (
                             <span>
                                -${Math.abs(transaction.amount)}
                        </span>)
                 }
                 
            </div>
        </div>
    </div>
        ))}

    

    </div>
  )
}

export default History