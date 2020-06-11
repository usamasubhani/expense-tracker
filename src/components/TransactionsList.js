import React from 'react';
import Transaction from './Transaction'

 function TransactionsList() {
    return (
        <div>
            <h3>Transactions</h3>
            <ul className="list">
                <li><Transaction /></li>
                <li><Transaction /></li>
            </ul>
        </div>
    )
}

export default TransactionsList;