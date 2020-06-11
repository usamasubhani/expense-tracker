import React, { useContext } from 'react';
import Transaction from './Transaction'

import { GlobalContext } from '../context/GlobalContext'

 function TransactionsList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transactions</h3>
            <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}    
            </ul>
        </div>
    )
}

export default TransactionsList;